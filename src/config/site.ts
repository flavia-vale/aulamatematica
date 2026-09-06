export const site = {
  url: 'https://aulasdematematicabh.com.br',
  name: 'Aulas de Matemática BH',
  brand: 'Aulas de Matemática BH',
  tagline: 'Aulas particulares de matemática com professora da UFMG',
  description:
    'Aulas particulares de matemática para alunos do ensino fundamental e médio. Online para todo o Brasil, ou presenciais em Belo Horizonte e num raio de 20 km — na casa do aluno ou em local público. Reforço escolar, preparação para provas e recuperação de notas com Taciane Andrade, licencianda em Matemática pela UFMG.',
  locale: 'pt-BR',
  region: 'BR-MG',
  city: 'Belo Horizonte',
  teacher: {
    name: 'Taciane Andrade',
    role: 'Professora particular de Matemática',
    credentials: 'Licencianda em Matemática pela UFMG',
    bio: 'Estudante de Licenciatura em Matemática pela Universidade Federal de Minas Gerais (UFMG), com experiência em reforço escolar para alunos do ensino fundamental e médio. Atende online em todo o Brasil e presencialmente em Belo Horizonte e região.',
    /**
     * Foto da professora, em `public/`. Deixe string vazia enquanto não
     * houver arquivo: as seções que a exibem simplesmente não renderizam, e
     * o `image` do schema cai de volta para a og-image.
     * Recomendado: retrato vertical, mínimo 800x1000, otimizado.
     */
    foto: '/taciane-andrade.jpg',
    fotoAlt: 'Taciane Andrade, professora particular de matemática',
  },
  contact: {
    whatsappRaw: '5532999993956',
    whatsappDisplay: '(32) 99999-3956',
    // NÃO RENDERIZE este endereço sem antes configurar e-mail no domínio.
    // O DNS tem null MX (`MX . 0`) e `v=spf1 -all`: o domínio declara que não
    // envia nem recebe e-mail. Publicar este endereço hoje entrega ao visitante
    // um canal que descarta a mensagem em silêncio. Hoje ele não aparece em
    // nenhuma página — conferido no HTML compilado.
    email: 'contato@aulasdematematicabh.com.br',
  },
  social: {
    instagram: '',
    /**
     * Perfil no Superprof. É o único ativo da professora que as IAs
     * encontram e citam hoje (ver docs/leads-organicos/citacao-ia.md).
     * Preencher liga as duas entidades via `sameAs` no JSON-LD.
     */
    superprof:
      'https://www.superprof.com.br/aulas-particulares-matematica-presencial-online-licencianda-pela-ufmg-primeira-aula-gratis.html',
    /**
     * Google Business Profile. JÁ EXISTE ("Taciane S. — Professora Particular
     * de Matemática"), mas falta a URL canônica aqui.
     *
     * Pegar no painel do perfil, não o link `share.google` (que é temporário
     * e não serve como `sameAs`). Serve: `https://maps.google.com/?cid=...`
     * ou o link curto `https://g.page/...`.
     *
     * É o ativo mais importante para as consultas de BH: a Fase 3 mostrou que
     * o que vence a consulta 1 são fichas do Google Business Profile.
     */
    googleBusiness: '',
  },

  /**
   * Preço. Publicado de propósito: já era público no perfil do Superprof e
   * as IAs já o citavam, então não publicar aqui só criava divergência entre
   * canais. Ver docs/leads-organicos/citacao-ia.md.
   *
   * `vigencia` é obrigatória — o `npm run check` falha se uma página exibir
   * R$ sem declarar desde quando aquele valor vale.
   */
  preco: {
    /** Aula online, ao vivo. Atendimento nacional. */
    online: 45,
    /** Presencial na casa do aluno ou em local público, dentro do raio.
     *  Varia com deslocamento e nível — a página anuncia "a partir de". */
    presencialMin: 50,
    presencialMax: 150,
    duracaoMin: 50,
    diagnosticoMin: 30,
    vigencia: '2026-09',
    vigenciaTexto: 'setembro de 2026',
  },

  /**
   * Presencial. Definido em 2026-09-06.
   *
   * A Fase 3 mostrou que as quatro IAs leem "BH" como consulta de aula
   * PRESENCIAL, por bairro, e respondem com fichas do Google Business
   * Profile. O site disputava esse termo oferecendo aula remota — e listava
   * 50 bairros para um serviço que dizia ser 100% online.
   *
   * Agora: BH é presencial, o resto é online e não menciona BH.
   */
  presencial: {
    raioKm: 20,
    origem: 'Belo Horizonte',
    /** Centro de BH. Um GeoCircle sem coordenada real é ininterpretável:
     *  o Google normalizava a string de endereço para um PostalAddress solto
     *  e o raio ficava sem âncora. */
    lat: -19.9167,
    lng: -43.9345,
    /** Locais: casa do aluno ou local público (biblioteca, café, coworking). */
    ondeTexto: 'na casa do aluno ou em local público combinado',
    /** Dentro de ~20 km do centro de BH. Sete Lagoas, Divinópolis, Itaúna,
     *  Juiz de Fora, Lagoa Santa e Pedro Leopoldo ficam FORA — foram
     *  movidas para o atendimento online. */
    cidades: [
      'Belo Horizonte',
      'Contagem',
      'Nova Lima',
      'Sabará',
      'Santa Luzia',
      'Ribeirão das Neves',
      'Vespasiano',
    ],
  },
  service: {
    /** Online é nacional; o presencial tem raio próprio em `presencial`. */
    areaServed: ['Brasil'],
    serviceType: 'Aulas particulares de Matemática',
    audience: 'Alunos do ensino fundamental e médio',
  },
} as const;

/**
 * Depoimentos de famílias atendidas.
 *
 * VAZIO DE PROPÓSITO. Só entram aqui depoimentos REAIS, com autorização de
 * quem escreveu. Depoimento inventado em site comercial é publicidade
 * enganosa (CDC art. 37) e, no JSON-LD, vira `aggregateRating` falso — que o
 * Google trata como spam estruturado e pune com desindexação.
 *
 * A seção inteira e o `aggregateRating` do schema só aparecem quando este
 * array tiver conteúdo. Enquanto estiver vazio, nada é renderizado.
 *
 * `nota` é OPCIONAL e só deve ser preenchida se a pessoa realmente deu uma
 * nota numérica. Mensagem de agradecimento não é avaliação com estrela —
 * derivar "5 de 5" dela seria inventar dado de avaliação.
 *
 * Nomes de alunos são anonimizados por inicial. As mensagens abaixo são
 * transcrições de conversas reais de WhatsApp, editadas apenas para remover
 * saudação, despedida e nome do aluno.
 *
 * Publicação AUTORIZADA pelas famílias em 2026-09-06.
 */
export interface Depoimento {
  nome: string;
  papel: string;
  texto: string;
  nota?: number;
}

export const depoimentos: Depoimento[] = [
  {
    nome: 'Mãe de aluno',
    papel: 'recuperação de notas',
    texto:
      'Passando para te dar o melhor feedback do mundo: ele só ia mal em matemática e, na primeira prova depois que começou a ter aulas com você, tirou 8! Não tô acreditando até agora. Muito obrigada por ter salvado ele e pela paciência gigante.',
  },
  {
    nome: 'Mãe de aluna',
    papel: 'preparação para o ENEM',
    texto:
      'Estou passando para dar um feedback e agradecer de coração por toda a ajuda que você tem dado à D. nessa preparação para o ENEM. Ela tá super firme nos estudos e você tem sido fundamental nessa reta final. Muito obrigada mesmo pela parceria de sempre. Na semana que vem irei te procurar para começarmos as aulas do P.',
  },
  {
    nome: 'Mãe de aluna',
    papel: 'acompanhamento no ano letivo',
    texto:
      'Queria te agradecer de coração pelo carinho e pela paciência com a D. Você fez toda a diferença no ano letivo dela — e na nossa rotina!',
  },
  {
    nome: 'Responsável por aluno',
    papel: 'reforço escolar de matemática',
    texto:
      'Passando para agradecer muito pela dedicação e paciência com o J. nas aulas de matemática. Ele evoluiu bastante!',
  },
  {
    nome: 'Mãe de aluno',
    papel: 'reforço escolar de matemática',
    texto:
      'Não podia deixar de te agradecer pela paciência infinita com o J. nas aulas. É lindo de ver o carinho que você tem com ele e como ele adora os momentos de vocês. Muito obrigada por ser tão especial.',
  },
];

export const waLink = (msg = 'Olá! Tenho interesse em aulas particulares de matemática.') =>
  `https://wa.me/${site.contact.whatsappRaw}?text=${encodeURIComponent(msg)}`;

/**
 * Atribuição de lead sem backend.
 *
 * O site é estático: não há cadastro, banco nem evento. A única forma honesta
 * de saber de qual página veio um lead é o próprio texto que chega no WhatsApp.
 * Por isso cada página tem uma frase distinta — a mensagem é o identificador.
 *
 * Regra: nenhuma frase pode se repetir entre páginas. O `npm run check` falha
 * se duas páginas compartilharem a mesma mensagem.
 * Ver docs/leads-organicos/funil.md
 */
export const leadMessages: Record<string, string> = {
  '/': 'Olá! Vim da página inicial do site e quero agendar a aula diagnóstica gratuita.',
  '/aulas-particulares-matematica-bh':
    'Olá! Vim da página de aulas particulares em BH e quero agendar a aula diagnóstica gratuita.',
  '/aulas-de-matematica-online':
    'Olá! Vim da página de aulas online e quero agendar a aula diagnóstica gratuita.',
  '/reforco-escolar-matematica':
    'Olá! Vim da página de reforço escolar e quero agendar a aula diagnóstica gratuita.',
  '/enem-matematica':
    'Olá! Vim da página de ENEM e quero agendar a aula diagnóstica gratuita.',
  '/sobre': 'Olá! Vim da página sobre a professora e quero agendar a aula diagnóstica gratuita.',
  '/contato': 'Olá! Vim da página de contato e quero agendar a aula diagnóstica gratuita.',
  '/blog': 'Olá! Vim da lista de artigos do blog e quero agendar a aula diagnóstica gratuita.',
  '/404': 'Olá! Cheguei numa página que não existe mais no site e quero falar sobre as aulas.',
};

/** Prefixo usado pelos artigos: cada post entra como `/blog/<slug>`. */
export const blogLeadMessage = (slug: string) =>
  `Olá! Vim do artigo "${slug}" do blog e quero agendar a aula diagnóstica gratuita.`;

/**
 * Mensagem da página atual, a partir de `Astro.url.pathname`.
 *
 * A normalização não é detalhe: com `build.format: 'file'` o Astro entrega
 * `/sobre.html`, e sem tirar o `.html` toda página caía na mensagem da home —
 * isto é, a atribuição inteira ficava cega sem nenhum erro aparecer.
 */
export const leadMessage = (pathname: string): string => {
  const path =
    ('/' + pathname.replace(/^\/+|\/+$/g, ''))
      .replace(/\.html$/, '')
      .replace(/\/index$/, '/') || '/';
  if (leadMessages[path]) return leadMessages[path];
  if (path.startsWith('/blog/')) return blogLeadMessage(path.slice('/blog/'.length));
  return leadMessages['/'];
};

/** Link do WhatsApp já atribuído à página atual. */
export const waLinkFor = (pathname: string) => waLink(leadMessage(pathname));
