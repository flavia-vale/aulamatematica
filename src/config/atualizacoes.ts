/**
 * Data da última mudança de conteúdo de cada página que não é artigo.
 *
 * Fonte única de três coisas:
 *
 * 1. o `lastmod` de cada URL no sitemap (`astro.config.mjs`);
 * 2. a linha "Atualizado em" visível no fim da página (`Base.astro`);
 * 3. o `dateModified` do nó `WebPage` no JSON-LD (`SEO.astro`).
 *
 * **Por que é declarada à mão, e não derivada do build ou do git.**
 *
 * O comentário do `astro.config.mjs` registra a tentativa que falhou: com
 * `new Date()`, toda página declarava ter mudado a cada build, inclusive as
 * que não mudaram. Um `lastmod` que é sempre "agora" é informação falsa, e o
 * buscador aprende a ignorar o sinal do site inteiro.
 *
 * A data do último commit do arquivo resolveria isso, mas não sobrevive ao
 * ambiente: `actions/checkout` clona com `fetch-depth: 1`, e num clone raso
 * `git log` não responde por arquivo que não mudou no último commit.
 *
 * Sobra a declaração editorial, que é o que esta tabela é: **a data em que o
 * conteúdo daquela página mudou de verdade**, escrita por quem mudou. Ela fica
 * parada nos builds seguintes — é exatamente essa estabilidade que o `lastmod`
 * precisa ter para valer alguma coisa.
 *
 * **O que conta como mudança.** Texto, título, descrição, preço, FAQ, links de
 * leitura relacionada — o que a página diz. Não conta mudança de cabeçalho,
 * rodapé ou estilo aplicada ao site inteiro: declarar que 30 páginas mudaram
 * porque o rodapé ganhou uma linha é o mesmo erro do `new Date()`, em câmera
 * lenta.
 *
 * **Artigos do blog não entram aqui.** A data deles é editorial e já existe no
 * frontmatter: `updatedAt ?? publishedAt`. Duplicar aqui criaria duas verdades.
 *
 * `npm run check` falha se uma página indexável que não é artigo ficar sem
 * data — é a varredura que impede uma página nova de nascer sem `lastmod`.
 */
export const atualizacoes: Record<string, string> = {
  // Reposicionamento de 06/09 (BH virou presencial) e bloco de leitura
  // relacionada de 16/09; em 18/09 ganhou os artigos das provas de admissão.
  // 03/10: título deixou de disputar "online" (fica com /aulas-de-matematica-online)
  // e passou a apresentar as duas modalidades. Item 7 do relatório do Ciclo 1.
  // 09/10: preço novo (online R$ 60, presencial a partir de R$ 70).
  // 19/10: cartão do Colégio Militar atualizado depois da prova de 18/10.
  // 18/11: preço R$ 80 e fim do presencial (título, FAQ e schema sem BH).
  '/': '2026-11-18',

  // Criada em 17/09 para o termo sem qualificador. Em 18/09: a nota sobre o
  // DDD do WhatsApp e os artigos novos na leitura relacionada.
  // 09/10: preço novo (online R$ 60, presencial a partir de R$ 70).
  // 19/10: cartão do Colégio Militar atualizado depois da prova de 18/10.
  // 18/11: preço R$ 80 e fim do presencial.
  '/professor-particular-de-matematica': '2026-11-18',

  // /aulas-particulares-matematica-bh saiu do ar em 18/11/2026 (fim do
  // presencial) e responde 301 para /aulas-de-matematica-online.

  // Título e H1 reescritos em 11/09 (a página que o Google não conhecia).
  // Bloco de leitura relacionada em 16/09.
  // 09/10: preço novo (online R$ 60, presencial a partir de R$ 70).
  // 18/11: preço R$ 80; tabela deixou de comparar com o presencial.
  '/aulas-de-matematica-online': '2026-11-18',

  // Bloco de leitura relacionada em 16/09; em 18/09 ganhou os artigos das
  // provas de admissão e o de atividades para casa.
  // 03/10: título, descrição e H1 passaram de "reforço escolar de matemática"
  // (posição 47) para "aulas de reforço de matemática" (posição 3,5 a 6).
  // Item 9 do relatório do Ciclo 1.
  // 09/10: preço novo (online R$ 60, presencial a partir de R$ 70).
  // 09/10: artigo da álgebra do 9º ano na leitura relacionada.
  // 19/10: cartão do Colégio Militar atualizado depois da prova de 18/10.
  // 18/11: preço R$ 80 e fim do presencial.
  '/reforco-escolar-matematica': '2026-11-18',

  // Bloco de leitura relacionada em 16/09. Em 18/09 NÃO mudou: os artigos de
  // prova de admissão são de fundamental e não têm o que fazer aqui.
  // 09/10: preço novo (online R$ 60, presencial a partir de R$ 70).
  // 09/10: artigo de revisão do ENEM 2026 na leitura relacionada.
  // 18/11: preço R$ 80 e fim do presencial.
  '/enem-matematica': '2026-11-18',

  // Linha de ensino superior aberta em 17/09. Em 18/09 as sete ganharam o
  // bloco de leitura relacionada com o artigo de Cálculo 1 — a primeira porta
  // de entrada editorial da linha.
  // 03/10: a frase de preço passou a dizer que fundamental e médio têm valor
  // público e apontar para o artigo de preço. A Visão geral por IA do Google
  // respondeu em 03/10 que "o site não divulga o valor", lendo a exceção do
  // superior como regra geral. Ver relatorio-ciclo-1-2026-10-03.md, item 8.
  // 09/10: artigo de GAAL na leitura relacionada.
  // 18/11: fim do presencial (descrição e FAQ).
  '/aulas-particulares-ensino-superior': '2026-11-18',
  // 09/10: as seis páginas de matéria ganharam o artigo de GAAL na leitura relacionada.
  // 18/11: fim do presencial (descrição, FAQ e bloco de modalidade).
  '/aula-particular-de-pre-calculo': '2026-11-18',
  '/aula-particular-de-calculo-1': '2026-11-18',
  '/aula-particular-de-calculo-2': '2026-11-18',
  '/aula-particular-de-calculo-3': '2026-11-18',
  '/aula-particular-de-estatistica-e-probabilidade': '2026-11-18',
  '/aula-particular-de-geometria-analitica-e-algebra-linear': '2026-11-18',

  // Bio reescrita em 17/09 (ensino superior); em 18/09 entrou um artigo novo
  // na leitura relacionada. O bloco "quem mantém este site" é de rodapé, e
  // rodapé não conta como mudança de página — ver a regra acima.
  // 18/11: fim do presencial (bio).
  '/sobre': '2026-11-18',

  // Em 18/09: a nota sobre o DDD do número, ao lado do telefone.
  // 03/10: horário de seg a sex passou a fechar às 20h, igual à ficha do Google.
  // 18/11: fim do presencial (localização e nota do DDD).
  '/contato': '2026-11-18',

  // A lista muda quando entra artigo. Três entraram em 18/09.
  '/blog': '2026-09-18',

  // `noindex`. Não entra em sitemap nem em varredura de data, mas fica
  // declarada para que a ausência seja escolha e não esquecimento.
  '/404': '2026-09-06',
};

/**
 * Normaliza o pathname do mesmo jeito que `leadMessage` faz, e pelo mesmo
 * motivo: com `build.format: 'file'` o Astro entrega `/sobre.html`, e sem
 * remover o `.html` a busca na tabela falha em silêncio.
 */
export const rotaDe = (pathname: string): string =>
  ('/' + pathname.replace(/^\/+|\/+$/g, ''))
    .replace(/\.html$/, '')
    .replace(/\/index$/, '/') || '/';

export const atualizadoEm = (pathname: string): string | undefined =>
  atualizacoes[rotaDe(pathname)];
