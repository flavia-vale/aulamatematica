import { site } from '../config/site';

/** Perfis externos da professora. Ligar as entidades é o que permite a um
 *  buscador ou a uma IA entender que o site e o perfil são a mesma pessoa —
 *  hoje o perfil citado pelas IAs é o do Superprof, não o site. */
const perfisExternos = [
  site.social.instagram,
  site.social.superprof,
  site.social.googleBusiness,
].filter(
  (u): u is string => Boolean(u),
);

const PERSON_ID = `${site.url}/#taciane`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * Avaliações — deliberadamente FORA do JSON-LD.
 *
 * Os cinco depoimentos aparecem na página, visíveis para pessoas e para as
 * IAs que leem o conteúdo renderizado. O que não existe aqui é marcação
 * `Review` no schema, e há dois motivos independentes:
 *
 * 1. O Google exige `aggregateRating` quando há vários `Review` no mesmo
 *    objeto. Os depoimentos são mensagens de agradecimento, não avaliações
 *    com estrela — derivar uma nota média delas seria inventar dado de
 *    avaliação, exatamente o que o Google trata como spam estruturado.
 *
 * 2. `Service` nem sequer aceita `review` na especificação de rich results,
 *    e para `LocalBusiness` o Google **não exibe estrelas de avaliação que o
 *    próprio negócio coleta e publica**. Ou seja: mesmo perfeita, a marcação
 *    não produziria nenhum resultado enriquecido.
 *
 * Marcar aqui só gerava 10 itens inválidos no relatório de snippets — ruído
 * que mascararia problema de verdade num ciclo futuro.
 *
 * **O lugar certo da avaliação com nota é o Google Business Profile**, e é
 * exatamente para lá que os dados da Fase 3 apontam: volume de avaliação no
 * perfil é o critério de ranqueamento em todas as listas de "melhores
 * professores" que as quatro IAs produziram.
 *
 * Detectado pelo relatório de Snippets de avaliação em 2026-09-06.
 */

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.teacher.name,
  jobTitle: site.teacher.role,
  description: site.teacher.bio,
  url: site.url,
  image: `${site.url}${site.teacher.foto || '/og-image.png'}`,
  telephone: `+${site.contact.whatsappRaw}`,
  ...(perfisExternos.length > 0 && { sameAs: perfisExternos }),
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidade Federal de Minas Gerais',
    sameAs: 'https://www.ufmg.br',
  },
  knowsAbout: [
    'Matemática',
    'Reforço escolar',
    'Ensino Fundamental',
    'Ensino Médio',
    'Álgebra',
    'Geometria',
    'Funções',
    'Trigonometria',
  ],
};

export const localBusinessSchema = {
  '@type': ['LocalBusiness', 'EducationalOrganization'],
  '@id': BUSINESS_ID,
  name: site.brand,
  description: site.description,
  url: site.url,
  image: `${site.url}/og-image.png`,
  telephone: `+${site.contact.whatsappRaw}`,
  priceRange: `R$${site.preco.online}`,
  currenciesAccepted: 'BRL',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  // Online é nacional; presencial tem raio real. Declarar os dois separados
  // é o que permite ao Google entender a operação híbrida.
  areaServed: [
    { '@type': 'Country', name: 'Brasil' },
    ...site.presencial.cidades.map((n) => ({ '@type': 'City', name: n })),
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', address: `${site.presencial.origem}, MG, BR` },
    geoRadius: site.presencial.raioKm * 1000,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  ...(perfisExternos.length > 0 && { sameAs: perfisExternos }),
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: site.url,
  name: site.brand,
  inLanguage: site.locale,
  publisher: { '@id': BUSINESS_ID },
};

export const serviceSchema = (params: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@type': 'Service',
  serviceType: site.service.serviceType,
  name: params.name,
  description: params.description,
  url: params.url,
  offers: [
    {
      '@type': 'Offer',
      name: 'Aula online',
      price: site.preco.online,
      priceCurrency: 'BRL',
      areaServed: { '@type': 'Country', name: 'Brasil' },
    // Um ano à frente da vigência. Data no passado faz o Google tratar a
    // oferta como expirada e ignorar o preço no resultado de busca.
    priceValidUntil: `${Number(site.preco.vigencia.slice(0, 4)) + 1}-${site.preco.vigencia.slice(5)}-28`,
    availability: 'https://schema.org/InStock',
    url: params.url,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: site.preco.online,
      priceCurrency: 'BRL',
        unitText: `aula online de ${site.preco.duracaoMin} minutos`,
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: site.preco.duracaoMin,
          unitCode: 'MIN',
        },
      },
    },
    {
      '@type': 'Offer',
      name: 'Aula presencial',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      url: params.url,
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', address: `${site.presencial.origem}, MG, BR` },
        geoRadius: site.presencial.raioKm * 1000,
      },
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: site.preco.presencialMin,
        maxPrice: site.preco.presencialMax,
        priceCurrency: 'BRL',
      },
    },
  ],
  provider: { '@id': BUSINESS_ID },
  // Online é nacional; presencial tem raio real. Declarar os dois separados
  // é o que permite ao Google entender a operação híbrida.
  areaServed: [
    { '@type': 'Country', name: 'Brasil' },
    ...site.presencial.cidades.map((n) => ({ '@type': 'City', name: n })),
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: { '@type': 'GeoCoordinates', address: `${site.presencial.origem}, MG, BR` },
    geoRadius: site.presencial.raioKm * 1000,
  },
  audience: { '@type': 'EducationalAudience', educationalRole: site.service.audience },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const graph = (...nodes: object[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes,
});
