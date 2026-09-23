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

/**
 * Links internos que cada página EMITE, já normalizados em rota.
 *
 * Só conta `href` de mesma origem: caminho começando em `/`, sem `//`, sem
 * protocolo. Âncora, query e `.html` saem fora — é a mesma normalização do
 * `leadMessage`, e pelo mesmo motivo de sempre (com `build.format: 'file'` a
 * rota real e o href escrito não são a mesma string).
 */
const linksInternos = (html) =>
  new Set(
    [...html.matchAll(/href="(\/[^"#?]*)/g)]
      .map((m) => m[1])
      .filter((h) => !h.startsWith('//'))
      .map((h) => {
        const r = ('/' + h.replace(/^\/+|\/+$/g, '')).replace(/\.html$/, '').replace(/\/index$/, '/');
        return r === '/' || r === '' ? '/' : r;
      }),
  );

for (const p of paginas) p.links = linksInternos(p.html);

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
// Preço. A regra mudou em 2026-09-06: antes proibia qualquer R$ na página.
// A Fase 3 mostrou que o preço já era público no perfil do Superprof e que as
// IAs já o citavam — não publicar não criava discrição, criava divergência
// entre canais. Agora a regra é outra: preço PODE aparecer, mas a página
// precisa declarar desde quando aquele valor vale. Preço sem data envelhece em
// silêncio e vira informação falsa.
const PRECO = /R\$\s*\d/;
const VIGENCIA = /data-preco-vigencia="\d{4}-\d{2}"/;
for (const p of paginas) {
  const texto = p.html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const re of PROIBIDOS)
    if (re.test(texto)) erro('promessa-sem-prova', p.rota, `promessa de resultado: ${re}`);
  if (PRECO.test(texto) && !VIGENCIA.test(p.html))
    erro(
      'preco-sem-vigencia',
      p.rota,
      'a página exibe R$ sem declarar data-preco-vigencia="AAAA-MM" — preço sem data vira mentira silenciosa',
    );
}

// ---------- R5 · avaliação inventada no JSON-LD ----------
// Três vezes em 2026-09-06 essa marcação tentou entrar: no pedido de
// depoimentos fabricados, num `nota ?? 5` que eu mesmo escrevi, e como
// "erro a corrigir" no relatório de Snippets do Search Console.
//
// `review` e `aggregateRating` no schema deste site significam derivar nota
// de mensagem de agradecimento — dado de avaliação inventado, que o Google
// trata como spam estruturado. E não há ganho: ele não exibe estrela para
// avaliação que o próprio negócio coleta e publica.
//
// Os depoimentos ficam VISÍVEIS na página. Só a marcação é proibida.
// O lugar da nota é o Google Business Profile.
for (const p of paginas) {
  for (const bloco of p.html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    if (/"(review|aggregateRating)"\s*:/.test(bloco[1]))
      erro(
        'avaliacao-no-schema',
        p.rota,
        'JSON-LD contém review/aggregateRating — nota derivada de depoimento é dado de avaliação inventado; ver docs/leads-organicos/registro-ciclos.md',
      );
  }
}

// ---------- R6 · linhas congeladas ----------
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

// ---------- R7 · toda página indexável está no llms.txt e nas pendências ----------
const llms = existsSync(LLMS) ? readFileSync(LLMS, 'utf8') : '';
const pend = existsSync(PENDENCIAS) ? readFileSync(PENDENCIAS, 'utf8') : '';
for (const p of indexaveis) {
  if (llms && !llms.includes(p.rota === '/' ? 'com.br/)' : p.rota))
    erro('llms-txt', p.rota, 'ausente de public/llms.txt');
  if (pend && !pend.includes(p.rota))
    erro('pendencias-indexacao', p.rota, `ausente de ${PENDENCIAS} — toda página entra na lista na mesma entrega que a cria`);
}

// ---------- R8 · lastmod no sitemap ----------
// Decidido em 2026-09-18. Até aqui nenhuma URL declarava `lastmod`, porque a
// tentativa anterior usava `new Date()` e fazia toda página mentir a cada
// build. Agora a data vem de declaração editorial — `src/config/atualizacoes.ts`
// para as páginas e o frontmatter para os artigos — e é isto que impede uma
// página nova de entrar no sitemap sem data: sem a varredura, o esquecimento
// seria silencioso e só apareceria como sinal fraco, meses depois.
const SITEMAP = join(DIST, 'sitemap-0.xml');
if (existsSync(SITEMAP)) {
  const xml = readFileSync(SITEMAP, 'utf8');
  const comLastmod = new Set(
    [...xml.matchAll(/<loc>([^<]*)<\/loc><lastmod>/g)].map(
      (m) => new URL(m[1]).pathname.replace(/\/$/, '') || '/',
    ),
  );
  const noSitemap = new Set(
    [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map(
      (m) => new URL(m[1]).pathname.replace(/\/$/, '') || '/',
    ),
  );
  for (const p of indexaveis) {
    if (!noSitemap.has(p.rota))
      erro('sitemap-presente', p.rota, 'página indexável ausente do sitemap');
    else if (!comLastmod.has(p.rota))
      erro(
        'sitemap-lastmod',
        p.rota,
        'URL no sitemap sem lastmod — declare a data em src/config/atualizacoes.ts (ou no frontmatter, se for artigo)',
      );
  }
}

// ---------- R9 · links internos suficientes ----------
// Regra vinda de medição, não de intuição. Coverage de 16/09/2026: os três
// artigos publicados em 11/09 que ficaram em "Detectada, mas não indexada"
// recebiam UM OU DOIS links internos, todos vindos de /blog. Os que indexaram
// rápido recebiam link de página com impressão. Página no sitemap não é página
// descoberta.
//
// Conta páginas de ORIGEM distintas, não links: três links na mesma página
// valem um. O piso é 3 — foi onde a diferença apareceu no Coverage.
const MIN_ORIGENS = 3;
const origens = new Map();
for (const p of paginas)
  for (const destino of p.links)
    if (destino !== p.rota) {
      if (!origens.has(destino)) origens.set(destino, new Set());
      origens.get(destino).add(p.rota);
    }
for (const p of indexaveis) {
  const n = (origens.get(p.rota) ?? new Set()).size;
  if (n < MIN_ORIGENS)
    erro(
      'links-internos',
      p.rota,
      `recebe link de ${n} página(s) — mínimo ${MIN_ORIGENS}; o Coverage de 16/09 mostrou que 1 ou 2 origens deixam a página em "Detectada, mas não indexada"`,
    );
}

// ---------- R-redirecionamento · o site só aponta para endereço final ----------
// Coverage de 23/09: "Página com redirecionamento", 1 URL. Medição de fora no
// mesmo dia: as 38 URLs do domínio que o build emite responderam 200 — o
// relatado é uma variante de host (`http://` ou `www.`), que desde que as
// regras de zona entraram no painel responde 301, como devia. Ou seja: o
// motivo é intencional e o erro não está no repositório.
//
// Mas é o mesmo relatório que nasceria de um link interno mal escrito, e o
// Workers responde 307 para `/contato/`, `/contato.html` e `/index.html`
// (medido em 23/09). A normalização de `linksInternos` esconde essas formas de
// propósito, para contar origem; esta regra olha a string crua. Varre todo
// endereço do próprio domínio que o HTML emite — `href`, canonical, `og:url`,
// JSON-LD — e mais os caminhos que `public/_redirects` desvia.
const DOMINIO = 'aulasdematematicabh.com.br';
const desviados = existsSync('public/_redirects')
  ? readFileSync('public/_redirects', 'utf8')
      .split('\n')
      .map((l) => l.trim().split(/\s+/)[0])
      .filter((s) => s && s.startsWith('/'))
  : [];
const formaRedirecionada = (url) => {
  if (/^http:\/\//.test(url)) return 'http:// responde 301 para https://';
  if (/^https?:\/\/www\./.test(url)) return 'www. responde 301 para o domínio sem www';
  const caminho = url.replace(/^https?:\/\/[^/]+/, '') || '/';
  if (caminho !== '/' && caminho.endsWith('/')) return 'barra final responde 307 para o caminho sem barra';
  if (/\.html$|\/index$/.test(caminho)) return '`.html`/`index` responde 307 para a rota limpa';
  if (desviados.includes(caminho)) return 'caminho desviado em public/_redirects';
  return null;
};
for (const p of paginas) {
  const achados = new Set([
    ...[...p.html.matchAll(/href="(\/(?!\/)[^"#?]*)/g)].map((m) => m[1]),
    ...[...p.html.matchAll(new RegExp(`https?://(?:www\\.)?${DOMINIO.replace(/\./g, '\\.')}[^"'<>\\s#?]*`, 'g'))].map((m) => m[0]),
  ]);
  for (const url of achados) {
    const motivo = formaRedirecionada(url);
    if (motivo) erro('link-redirecionado', p.rota, `aponta para ${url} — ${motivo}`);
  }
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
