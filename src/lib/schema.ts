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
  // Cobre as duas modalidades. Só o valor do online descrevia mal a
  // operação desde que o presencial passou a existir.
  priceRange: `R$${site.preco.online}–R$${site.preco.presencialMax}`,
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
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: site.presencial.lat,
      longitude: site.presencial.lng,
    },
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

const MANTENEDOR_ID = `${site.url}/#flavia`;

/**
 * Quem mantém o site, como entidade própria. Decidido em 18/09/2026.
 *
 * Duas pessoas distintas participam deste projeto, e o schema precisa dizer
 * isso: a Taciane dá as aulas (é o `Person` do serviço, o `founder` e o
 * `employee` do negócio) e a Flávia cuida do site, do conteúdo e da
 * tecnologia. Sem um nó separado, a única leitura possível seria a errada —
 * a de que é tudo a mesma pessoa.
 *
 * **Por que `creator` e `maintainer`, e não `publisher`.** A proposta original
 * era trocar o `publisher` do `WebSite` por este nó. Não foi feito: o
 * `publisher` aponta para o `LocalBusiness` desde o começo, essa ligação é o
 * que amarra site e negócio, e ela foi construída com evidência (é o negócio
 * que publica o conteúdo, e é o perfil dele que as buscas de BH encontram).
 * `creator` e `maintainer` dizem o que se quer dizer — quem fez e quem cuida —
 * sem desfazer nada.
 *
 * **Sem `sameAs`, e o motivo é medição.** A proposta trazia
 * `espelhagrupos.com.br/quem-somos` e `cuponito.com.br/quem-somos` como
 * `sameAs`. As duas URLs respondem 200, conferido em 18/09/2026, mas
 * **nenhuma das duas nomeia a Flávia Vale** — a de Espelha Grupos atribui
 * apenas à empresa. `sameAs` é afirmação de identidade: apontar para página
 * que não nomeia a pessoa é pedir ao buscador para acreditar numa ligação que
 * ele não consegue confirmar, e é o tipo de dado que este projeto não publica.
 * Vira `sameAs` no dia em que aquelas páginas trouxerem o nome dela. Até lá,
 * `url` aponta para o site que ela fundou, que é verificável.
 */
export const mantenedorSchema = {
  '@type': 'Person',
  '@id': MANTENEDOR_ID,
  name: 'Flávia Vale',
  url: 'https://espelhagrupos.com.br',
  description:
    'Fundadora do Espelha Grupos. Mantém este site: conteúdo, tecnologia e publicação. Não dá as aulas.',
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: site.url,
  name: site.brand,
  inLanguage: site.locale,
  publisher: { '@id': BUSINESS_ID },
  creator: { '@id': MANTENEDOR_ID },
  maintainer: { '@id': MANTENEDOR_ID },
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
        geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: site.presencial.lat,
      longitude: site.presencial.lng,
    },
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
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: site.presencial.lat,
      longitude: site.presencial.lng,
    },
    geoRadius: site.presencial.raioKm * 1000,
  },
  audience: { '@type': 'EducationalAudience', educationalRole: site.service.audience },
});

/**
 * Service de ensino superior — mesma área de atendimento, SEM oferta de preço.
 *
 * Por que separado: o `serviceSchema` acima declara R$ 45 para a aula online,
 * que é o valor de fundamental e médio. Reaproveitá-lo numa página de Cálculo
 * declararia ao Google um preço que não é o desta linha, e ancoraria a
 * operação muito abaixo da faixa de mercado de exatas do ensino superior
 * (R$ 80–140/h, medido na Fase 3).
 *
 * Enquanto `precoSuperior.valor` for nulo, nenhuma oferta com preço é emitida
 * e nenhuma página de ensino superior exibe R$ — o que também mantém a regra
 * `preco-sem-vigencia` da varredura satisfeita sem exceção nominal.
 */
export const serviceSchemaSuperior = (params: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@type': 'Service',
  serviceType: 'Aulas particulares de Matemática para ensino superior',
  name: params.name,
  description: params.description,
  url: params.url,
  provider: { '@id': BUSINESS_ID },
  areaServed: [
    { '@type': 'Country', name: 'Brasil' },
    ...site.presencial.cidades.map((n) => ({ '@type': 'City', name: n })),
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: site.presencial.lat,
      longitude: site.presencial.lng,
    },
    geoRadius: site.presencial.raioKm * 1000,
  },
  audience: { '@type': 'EducationalAudience', educationalRole: 'Estudantes de ensino superior' },
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
