export const site = {
  url: 'https://aulasdematematicabh.com.br',
  name: 'Aulas de Matemática BH',
  brand: 'Aulas de Matemática BH',
  tagline: 'Aulas particulares de matemática com professora da UFMG',
  description:
    'Aulas particulares de matemática online para alunos do ensino fundamental e médio. Reforço escolar, preparação para provas e recuperação de notas com Taciane Andrade, licencianda em Matemática pela UFMG. Atendimento em todo o Brasil, com foco em Belo Horizonte.',
  locale: 'pt-BR',
  region: 'BR-MG',
  city: 'Belo Horizonte',
  teacher: {
    name: 'Taciane Andrade',
    role: 'Professora particular de Matemática',
    credentials: 'Licencianda em Matemática pela UFMG',
    bio: 'Estudante de Licenciatura em Matemática pela Universidade Federal de Minas Gerais (UFMG), com experiência em reforço escolar para alunos do ensino fundamental e médio.',
  },
  contact: {
    whatsappRaw: '5532999993956',
    whatsappDisplay: '(32) 99999-3956',
    email: 'contato@aulasdematematicabh.com.br',
  },
  social: {
    instagram: '',
  },
  service: {
    areaServed: ['Belo Horizonte', 'Minas Gerais', 'Brasil'],
    serviceType: 'Aulas particulares de Matemática',
    audience: 'Alunos do ensino fundamental e médio',
  },
} as const;

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
