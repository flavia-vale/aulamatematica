import { site, depoimentos } from '../config/site';

/** Perfis externos da professora. Ligar as entidades é o que permite a um
 *  buscador ou a uma IA entender que o site e o perfil são a mesma pessoa —
 *  hoje o perfil citado pelas IAs é o do Superprof, não o site. */
const perfisExternos = [site.social.instagram, site.social.superprof].filter(
  (u): u is string => Boolean(u),
);

const PERSON_ID = `${site.url}/#taciane`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

/**
 * Avaliações.
 *
 * `aggregateRating` e `reviewRating` SÓ existem quando há nota numérica real.
 * Os depoimentos atuais são mensagens de agradecimento, não avaliações com
 * estrela — derivar "5 de 5" delas seria inventar dado de avaliação, que é o
 * que o Google trata como spam estruturado.
 *
 * Sem nota, o depoimento vira um `Review` com autor e texto, sem nota. É
 * schema válido e honesto. (O Google não exibe estrelas para avaliação que o
 * próprio negócio coleta e publica, então não há perda de rich result aqui.)
 */
const comNota = depoimentos.filter((d) => typeof d.nota === 'number');

const avaliacoesSchema =
  depoimentos.length > 0
    ? {
        review: depoimentos.map((d) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: d.nome },
          reviewBody: d.texto,
          ...(typeof d.nota === 'number' && {
            reviewRating: {
              '@type': 'Rating',
              ratingValue: d.nota,
              bestRating: 5,
              worstRating: 1,
            },
          }),
        })),
        ...(comNota.length > 0 && {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: (
              comNota.reduce((t, d) => t + (d.nota as number), 0) / comNota.length
            ).toFixed(1),
            reviewCount: comNota.length,
            bestRating: 5,
            worstRating: 1,
          },
        }),
      }
    : {};

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.teacher.name,
  jobTitle: site.teacher.role,
  description: site.teacher.bio,
  url: site.url,
  image: `${site.url}/og-image.png`,
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
  priceRange: `R$${site.preco.aula}`,
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
  ...avaliacoesSchema,
  areaServed: site.service.areaServed.map((n) => ({ '@type': 'Place', name: n })),
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
  offers: {
    '@type': 'Offer',
    price: site.preco.aula,
    priceCurrency: 'BRL',
    // Um ano à frente da vigência. Data no passado faz o Google tratar a
    // oferta como expirada e ignorar o preço no resultado de busca.
    priceValidUntil: `${Number(site.preco.vigencia.slice(0, 4)) + 1}-${site.preco.vigencia.slice(5)}-28`,
    availability: 'https://schema.org/InStock',
    url: params.url,
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: site.preco.aula,
      priceCurrency: 'BRL',
      unitText: `aula de ${site.preco.duracaoMin} minutos`,
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: site.preco.duracaoMin,
        unitCode: 'MIN',
      },
    },
  },
  ...avaliacoesSchema,
  provider: { '@id': BUSINESS_ID },
  areaServed: site.service.areaServed.map((n) => ({ '@type': 'Place', name: n })),
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
