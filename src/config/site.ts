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
