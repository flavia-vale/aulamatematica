import { site } from '../config/site';

const PERSON_ID = `${site.url}/#taciane`;
const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: site.teacher.name,
  jobTitle: site.teacher.role,
  description: site.teacher.bio,
  url: site.url,
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
  priceRange: '$$',
  areaServed: site.service.areaServed.map((n) => ({ '@type': 'Place', name: n })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressRegion: 'MG',
    addressCountry: 'BR',
  },
  founder: { '@id': PERSON_ID },
  employee: { '@id': PERSON_ID },
  sameAs: site.social.instagram ? [site.social.instagram] : undefined,
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
