/**
 * Varredura de conteúdo — Fase 5 do Ciclo de Leads Orgânicos.
 * Ver docs/leads-organicos/README.md
 *
 * Princípio (custou 3 meses no projeto de origem): esta varredura NUNCA é uma
 * lista de páginas a conferir. Ela varre tudo que existe em dist/, e quem quer
 * ficar de fora precisa aparecer pelo nome em EXCECOES, com o dado que justifica.
 * Uma lista de páginas deixaria uma página nova passar despercebida para sempre.
 *
 * Dois níveis:
 *   ERRO  — quebra mecânica, verdadeira independente de dado. Falha o comando.
 *   AVISO — hipótese não medida ainda. Vira pergunta do próximo ciclo, não falha.
 *
 * Uso: npm run check   (roda o build antes)
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const LLMS = 'public/llms.txt';
const PENDENCIAS = 'docs/leads-organicos/pendencias-indexacao.md';
const CONGELADAS = 'docs/leads-organicos/linhas-congeladas.md';

/**
 * Exceções nominais. Cada entrada exige: a regra, o alvo, o motivo e a data.
 * Sem o motivo escrito, daqui a dois meses ninguém lembra por que foi liberado.
 */
const EXCECOES = [
  {
    regra: 'llms-txt',
    alvo: '/404',
    motivo: 'Página de erro, marcada noindex — não deve ser listada para IAs.',
    data: '2026-09-03',
  },
];

const isento = (regra, alvo) => EXCECOES.some((e) => e.regra === regra && e.alvo === alvo);

const erros = [];
const avisos = [];
const erro = (regra, alvo, msg) => { if (!isento(regra, alvo)) erros.push({ regra, alvo, msg }); };
const aviso = (regra, alvo, msg) => { if (!isento(regra, alvo)) avisos.push({ regra, alvo, msg }); };

// ---------- coleta ----------
function htmlFiles(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? htmlFiles(p) : n.endsWith('.html') ? [p] : [];
  });
}

const rota = (f) => {
  const r = '/' + relative(DIST, f).split(sep).join('/').replace(/\.html$/, '');
  return r === '/index' ? '/' : r;
};

const pega = (html, re) => (html.match(re)?.[1] ?? '').trim();
const decodeEnt = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d));

if (!existsSync(DIST)) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}

const paginas = htmlFiles(DIST).map((f) => {
  const html = readFileSync(f, 'utf8');
  const waMsgs = [...html.matchAll(/wa\.me\/\d+\?text=([^"'\s]*)/g)]
    .map((m) => decodeURIComponent(decodeEnt(m[1])));
  return {
    rota: rota(f),
    arquivo: f,
    html,
    titulo: decodeEnt(pega(html, /<title>([\s\S]*?)<\/title>/)),
    descricao: decodeEnt(pega(html, /<meta name="description" content="([^"]*)"/)),
    canonical: pega(html, /<link rel="canonical" href="([^"]*)"/),
    noindex: /<meta name="robots" content="[^"]*noindex/.test(html),
    waMsgs,
  };
});

const indexaveis = paginas.filter((p) => !p.noindex);

// ---------- R1 · título e descrição existem e são únicos ----------
const vistos = { titulo: new Map(), descricao: new Map() };
for (const p of paginas) {
  for (const campo of ['titulo', 'descricao']) {
    const v = p[campo];
    if (!v) { erro(`${campo}-presente`, p.rota, `sem ${campo}`); continue; }
    const antes = vistos[campo].get(v);
    if (antes) erro(`${campo}-unico`, p.rota, `${campo} idêntico ao de ${antes}`);
    else vistos[campo].set(v, p.rota);
  }
}

// ---------- R2 · canonical presente e coerente com a rota ----------
for (const p of indexaveis) {
  if (!p.canonical) { erro('canonical', p.rota, 'sem canonical'); continue; }
  const esperado = new URL(p.rota, 'https://aulasdematematicabh.com.br').toString().replace(/\/$/, '') || '/';
  const obtido = p.canonical.replace(/\/$/, '');
  if (obtido !== esperado && !(p.rota === '/' && /aulasdematematicabh\.com\.br\/?$/.test(p.canonical)))
    erro('canonical', p.rota, `canonical ${p.canonical} não corresponde à rota`);
}

// ---------- R3 · atribuição de lead (funil sem backend) ----------
// Toda página precisa de pelo menos um WhatsApp; todos os links da mesma página
// carregam a MESMA mensagem; e nenhuma mensagem se repete entre páginas —
// senão não há como saber de onde veio o lead.
const msgPorPagina = new Map();
for (const p of paginas) {
  if (p.waMsgs.length === 0) { erro('atribuicao-existe', p.rota, 'nenhum link de WhatsApp'); continue; }
  const distintas = [...new Set(p.waMsgs)];
  if (distintas.length > 1)
    erro('atribuicao-coerente', p.rota, `${distintas.length} mensagens diferentes na mesma página`);
  const chave = distintas[0];
  const antes = msgPorPagina.get(chave);
  if (antes) erro('atribuicao-unica', p.rota, `mensagem de WhatsApp idêntica à de ${antes}`);
  else msgPorPagina.set(chave, p.rota);
}

// ---------- R4 · promessa sem prova ----------
// Educação é área sensível: nada de garantia de resultado.
const PROIBIDOS = [
  /garant\w*\s+(de\s+)?(aprova|resultado|nota)/i,
  /aprova(ção|do)\s+garantid/i,
  /100\s*%\s+de\s+aprova/i,
  /melhor\s+profess\w+\s+d[eo]\s/i,
  /resultado\s+garantid/i,
];
// Preço: a decisão registrada é que valor só se fala na conversa (ver FAQ).
const PRECO = /R\$\s*\d/;
for (const p of paginas) {
  const texto = p.html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const re of PROIBIDOS)
    if (re.test(texto)) erro('promessa-sem-prova', p.rota, `promessa de resultado: ${re}`);
  if (PRECO.test(texto))
    erro('preco-sem-fonte', p.rota, 'preço em R$ na página — a decisão registrada é falar valor só na conversa');
}

// ---------- R5 · linhas congeladas ----------
// Padrões declarados em linhas-congeladas.md como `- rota: <glob>`
if (existsSync(CONGELADAS)) {
  const globs = [...readFileSync(CONGELADAS, 'utf8').matchAll(/^-\s*rota:\s*(\S+)/gm)].map((m) => m[1]);
  for (const g of globs) {
    const re = new RegExp('^' + g.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*') + '$');
    for (const p of paginas)
      if (re.test(p.rota))
        erro('linha-congelada', p.rota, `página em linha congelada (${g}) — reabrir exige decisão escrita`);
  }
}

// ---------- R6 · toda página indexável está no llms.txt e nas pendências ----------
const llms = existsSync(LLMS) ? readFileSync(LLMS, 'utf8') : '';
const pend = existsSync(PENDENCIAS) ? readFileSync(PENDENCIAS, 'utf8') : '';
for (const p of indexaveis) {
  if (llms && !llms.includes(p.rota === '/' ? 'com.br/)' : p.rota))
    erro('llms-txt', p.rota, 'ausente de public/llms.txt');
  if (pend && !pend.includes(p.rota))
    erro('pendencias-indexacao', p.rota, `ausente de ${PENDENCIAS} — toda página entra na lista na mesma entrega que a cria`);
}

// ---------- AVISOS · hipóteses ainda não medidas ----------
// A iniciativa derrubou "título longo mata o clique" com dado de campo.
// Aqui ainda não há dado, então isto NÃO falha: vira pergunta do Ciclo 1.
for (const p of indexaveis) {
  if (p.titulo.length > 60)
    aviso('titulo-comprimento', p.rota, `título com ${p.titulo.length} caracteres (Google mostra ~60)`);
  if (p.descricao.length > 160)
    aviso('descricao-comprimento', p.rota, `descrição com ${p.descricao.length} caracteres (Google corta ~160)`);
  if (!/\d/.test(p.titulo))
    aviso('titulo-sem-numero', p.rota, 'título sem número concreto — o sinal que mais separou CTR no projeto de origem');
}

// ---------- saída ----------
const fmt = (l) => l.map((x) => `  [${x.regra}] ${x.alvo} — ${x.msg}`).join('\n');
console.log(`Varredura de ${paginas.length} páginas (${indexaveis.length} indexáveis).\n`);
if (avisos.length) console.log(`AVISOS (${avisos.length}) — perguntas para o próximo ciclo, não falham:\n${fmt(avisos)}\n`);
if (erros.length) {
  console.error(`ERROS (${erros.length}):\n${fmt(erros)}\n`);
  console.error('Corrija, ou registre exceção nominal em EXCECOES com motivo e data.');
  process.exit(1);
}
console.log('Sem erros.');
