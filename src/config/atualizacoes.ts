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
  '/': '2026-09-18',

  // Criada em 17/09 para o termo sem qualificador. Em 18/09: a nota sobre o
  // DDD do WhatsApp e os artigos novos na leitura relacionada.
  '/professor-particular-de-matematica': '2026-09-18',

  // Título e descrição mudaram em 06/09, no reposicionamento. Em 18/09 passou
  // a ser a porta de entrada dos três artigos de prova de admissão de BH.
  '/aulas-particulares-matematica-bh': '2026-09-18',

  // Título e H1 reescritos em 11/09 (a página que o Google não conhecia).
  // Bloco de leitura relacionada em 16/09.
  '/aulas-de-matematica-online': '2026-09-16',

  // Bloco de leitura relacionada em 16/09; em 18/09 ganhou os artigos das
  // provas de admissão e o de atividades para casa.
  '/reforco-escolar-matematica': '2026-09-18',

  // Bloco de leitura relacionada em 16/09. Em 18/09 NÃO mudou: os artigos de
  // prova de admissão são de fundamental e não têm o que fazer aqui.
  '/enem-matematica': '2026-09-16',

  // Linha de ensino superior aberta em 17/09. Em 18/09 as sete ganharam o
  // bloco de leitura relacionada com o artigo de Cálculo 1 — a primeira porta
  // de entrada editorial da linha.
  '/aulas-particulares-ensino-superior': '2026-09-18',
  '/aula-particular-de-pre-calculo': '2026-09-18',
  '/aula-particular-de-calculo-1': '2026-09-18',
  '/aula-particular-de-calculo-2': '2026-09-18',
  '/aula-particular-de-calculo-3': '2026-09-18',
  '/aula-particular-de-estatistica-e-probabilidade': '2026-09-18',
  '/aula-particular-de-geometria-analitica-e-algebra-linear': '2026-09-18',

  // Bio reescrita em 17/09 (ensino superior); em 18/09 entrou um artigo novo
  // na leitura relacionada. O bloco "quem mantém este site" é de rodapé, e
  // rodapé não conta como mudança de página — ver a regra acima.
  '/sobre': '2026-09-18',

  // Em 18/09: a nota sobre o DDD do número, ao lado do telefone.
  '/contato': '2026-09-18',

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
