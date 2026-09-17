export const site = {
  url: 'https://aulasdematematicabh.com.br',
  name: 'Aulas de Matemática BH',
  brand: 'Aulas de Matemática BH',
  tagline: 'Aulas particulares de matemática com professora da UFMG',
  description:
    'Aulas particulares de matemática para ensino fundamental, médio e superior. Online para todo o Brasil, ou presenciais em Belo Horizonte e num raio de 20 km — na casa do aluno ou em local público. Reforço escolar, ENEM e as matérias de exatas do ciclo básico da faculdade, com Taciane Andrade, licencianda em Matemática pela UFMG.',
  locale: 'pt-BR',
  region: 'BR-MG',
  city: 'Belo Horizonte',
  teacher: {
    name: 'Taciane Andrade',
    role: 'Professora particular de Matemática',
    credentials: 'Licencianda em Matemática pela UFMG',
    bio: 'Estudante de Licenciatura em Matemática pela Universidade Federal de Minas Gerais (UFMG), com experiência em reforço escolar para alunos do ensino fundamental e médio e nas matérias de matemática do ciclo básico do ensino superior — cálculo, estatística e álgebra linear. Atende online em todo o Brasil e presencialmente em Belo Horizonte e região.',
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
     * Google Business Profile. URL canônica obtida em 2026-09-11, resolvendo o
     * link curto `maps.app.goo.gl` fornecido pela dona do projeto: o CID em
     * hexadecimal (0xaae3d386d91e09db) convertido para decimal.
     *
     * O perfil passou a se chamar "Taciane Andrade — Professora Particular de
     * Matemática". O nome agora bate com o `Person` do schema, com o Superprof
     * e com o site — a divergência registrada em 06/09 não existe mais.
     *
     * Pegar no painel do perfil, não o link `share.google` (que é temporário
     * e não serve como `sameAs`). Serve: `https://maps.google.com/?cid=...`
     * ou o link curto `https://g.page/...`.
     *
     * É o ativo mais importante para as consultas de BH: a Fase 3 mostrou que
     * o que vence a consulta 1 são fichas do Google Business Profile.
     */
    googleBusiness: 'https://maps.google.com/?cid=12313918382282770907',
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
    audience: 'Alunos do ensino fundamental, médio e superior',
  },
} as const;

/**
 * Matérias de ensino superior. Linha aberta em 2026-09-17, por decisão da
 * dona do projeto.
 *
 * O que o dado já dizia sobre este mercado, medido na Fase 4:
 *
 * - **É o segmento de maior valor por clique do mercado inteiro.**
 *   `aula particular cálculo` (teto R$ 10,02), `professor de calculo
 *   particular` (R$ 10,00) e `aula particular de cálculo` (R$ 9,41) são os
 *   três maiores tetos de lance de toda a tabela.
 * - **E o de menor volume:** 50 buscas/mês cada, com concorrência Alta.
 *   Teto alto COM concorrência alta é disputa real, não ruído de amostra.
 * - A Fase 3 encontrou professores de cálculo cobrando R$ 80–140/h no
 *   Superprof, contra R$ 35–70 do segmento de fundamental e médio.
 *
 * Consequência a não esquecer quando o Ciclo 1 ler estas páginas: elas
 * produzem **pouca impressão por natureza**. Isso não é defeito de título.
 * O que se mede aqui é conversa por impressão, não volume.
 *
 * `preco` fica NULO de propósito: o valor de ensino superior ainda não foi
 * definido pela dona do projeto, e a faixa de fundamental e médio (R$ 45)
 * ancoraria a operação muito abaixo do mercado desta linha. Enquanto for
 * nulo, as páginas não exibem R$ e o schema não declara oferta com preço.
 */
export const precoSuperior: { valor: number | null; vigencia: string | null } = {
  valor: null,
  vigencia: null,
};

export interface MateriaSuperior {
  slug: string;
  nome: string;
  nomeCurto: string;
  titulo: string;
  descricao: string;
  eyebrow: string;
  h1: string;
  h1Enfase: string;
  chamada: string;
  /** Onde o aluno costuma travar. É o conteúdo que diferencia a página. */
  travas: { t: string; d: string }[];
  /** Ementa típica. Serve a pessoas e é o que uma IA lê para saber o escopo. */
  ementa: string[];
  /** O que a matéria exige de trás, e é onde o diagnóstico começa. */
  prerequisitos: string;
  faqs: { q: string; a: string }[];
}

export const materiasSuperior: MateriaSuperior[] = [
  {
    slug: 'pre-calculo',
    nome: 'Pré-cálculo',
    nomeCurto: 'Pré-cálculo',
    titulo: 'Aula particular de Pré-cálculo — a base que o Cálculo I vai cobrar',
    descricao: 'Aula particular de pré-cálculo individual, online para todo o Brasil ou presencial em Belo Horizonte. Funções, trigonometria, logaritmos e manipulação algébrica, que é onde a reprovação em Cálculo I costuma começar.',
    eyebrow: 'Ensino superior · Pré-cálculo',
    h1: 'Aula particular de Pré-cálculo, para chegar inteiro no',
    h1Enfase: 'Cálculo I',
    chamada: 'A maior parte das reprovações em Cálculo I não é de cálculo. É de álgebra do ensino médio que nunca ficou automática e que a disciplina assume pronta.',
    travas: [
      { t: 'Manipulação algébrica lenta', d: 'Fatorar, simplificar fração algébrica e isolar variável consomem atenção que deveria estar no conceito novo.' },
      { t: 'Função como fórmula, não como objeto', d: 'Quem só sabe "substituir o x" trava em composição, inversa e domínio, que o Cálculo usa o tempo todo.' },
      { t: 'Trigonometria decorada', d: 'Ciclo, identidades e valores notáveis sem sentido geométrico desabam nos limites trigonométricos.' },
      { t: 'Logaritmo sem a ideia de inverso', d: 'Sem entender que logaritmo desfaz potência, derivada e integral de exponencial viram decoreba.' },
    ],
    ementa: ['Conjuntos numéricos e desigualdades', 'Função: domínio, imagem, composição e inversa', 'Função afim, quadrática e modular', 'Polinômios e fatoração', 'Função exponencial e logarítmica', 'Trigonometria e o ciclo trigonométrico', 'Equações e inequações', 'Geometria analítica básica no plano'],
    prerequisitos: 'É a própria revisão do ensino médio, feita com o olho no que o Cálculo vai exigir. Não é repetir o colégio: é escolher, dentro dele, o que a disciplina seguinte cobra.',
    faqs: [
      { q: 'Preciso de pré-cálculo mesmo já estando matriculado em Cálculo I?', a: 'Com frequência sim, e em paralelo. Fazer as duas coisas juntas é comum e funciona: nas primeiras semanas a aula cobre a base que a prova da semana vai exigir, e depois passa a acompanhar a disciplina.' },
      { q: 'Dá tempo de recuperar a base durante o semestre?', a: 'Depende do tamanho da lacuna, e a aula diagnóstica gratuita responde isso antes de você gastar. O que eu vejo com mais frequência são de quatro a oito encontros para fechar o essencial, em paralelo à disciplina.' },
      { q: 'Serve para quem vai prestar vestibular ou transferência?', a: 'Serve, e é o mesmo conteúdo. A diferença fica no tipo de exercício e no formato da prova, que eu ajusto ao seu caso.' },
    ],
  },
  {
    slug: 'calculo-1',
    nome: 'Cálculo I',
    nomeCurto: 'Cálculo I',
    titulo: 'Aula particular de Cálculo I — limites, derivadas e integrais',
    descricao: 'Aula particular de Cálculo I individual, online para todo o Brasil ou presencial em Belo Horizonte. Limites, continuidade, derivadas, aplicações e a introdução à integral, com foco em entender antes de aplicar a regra.',
    eyebrow: 'Ensino superior · Cálculo I',
    h1: 'Aula particular de',
    h1Enfase: 'Cálculo I',
    chamada: 'A disciplina com mais reprovação dos cursos de exatas. Raramente porque o aluno não estuda — normalmente porque a base de álgebra não é automática e o ritmo não espera.',
    travas: [
      { t: 'Limite tratado como substituição', d: 'Quem aprendeu a "substituir e ver no que dá" trava em indeterminação, limite no infinito e definição formal.' },
      { t: 'Regra da cadeia no automático', d: 'Derivar composição sem enxergar quem é a função de dentro produz erro silencioso que só aparece na prova.' },
      { t: 'Aplicação, não conta', d: 'Taxa relacionada e otimização são problemas de modelagem. O aluno sabe derivar e não sabe montar.' },
      { t: 'Integral chegando no fim do semestre', d: 'A integral entra quando o aluno já está cansado, e vira decoreba de tabela em vez de ideia de acumulação.' },
    ],
    ementa: ['Limites e continuidade', 'Limites laterais, no infinito e indeterminações', 'Definição de derivada e interpretação geométrica', 'Regras de derivação e regra da cadeia', 'Derivação implícita e derivadas de ordem superior', 'Máximos, mínimos e esboço de gráfico', 'Taxas relacionadas e otimização', 'Teorema do Valor Médio e regra de L Hôpital', 'Integral indefinida e definida', 'Teorema Fundamental do Cálculo'],
    prerequisitos: 'Função, fatoração, trigonometria e logaritmo do ensino médio, disponíveis sem esforço. É exatamente aí que a maioria das dificuldades de Cálculo I mora, e é por onde a aula diagnóstica começa.',
    faqs: [
      { q: 'Estou perto da prova e perdido. Dá para recuperar?', a: 'Com prazo curto o trabalho é outro: escolher os dois ou três tópicos de maior peso na prova e treinar neles, em vez de tentar cobrir o semestre. Na aula diagnóstica gratuita dá para dizer com alguma precisão o que cabe no tempo que resta.' },
      { q: 'Você acompanha a lista e o material do meu professor?', a: 'Sim. Trabalho com a ementa, as listas e as provas anteriores da sua disciplina, porque cada departamento cobra de um jeito e o formato importa tanto quanto o conteúdo.' },
      { q: 'É a mesma coisa que Cálculo A ou Cálculo Diferencial e Integral I?', a: 'Na prática sim. O nome muda entre universidades e o conteúdo é o mesmo: limite, derivada e a introdução à integral. Me mande a ementa da sua disciplina e eu confirmo.' },
    ],
  },
  {
    slug: 'calculo-2',
    nome: 'Cálculo II',
    nomeCurto: 'Cálculo II',
    titulo: 'Aula particular de Cálculo II — técnicas de integração e séries',
    descricao: 'Aula particular de Cálculo II individual, online para todo o Brasil ou presencial em Belo Horizonte. Técnicas de integração, integrais impróprias, sequências e séries, equações diferenciais de primeira ordem e coordenadas polares.',
    eyebrow: 'Ensino superior · Cálculo II',
    h1: 'Aula particular de',
    h1Enfase: 'Cálculo II',
    chamada: 'A disciplina em que a conta fica longa. Não é mais entender a ideia, é escolher a técnica certa e não errar no meio de quinze linhas.',
    travas: [
      { t: 'Escolher a técnica de integração', d: 'O aluno sabe por partes, substituição e frações parciais, e trava em decidir qual usar. É reconhecimento de padrão, e treina-se.' },
      { t: 'Séries e o teste de convergência', d: 'São muitos testes com hipóteses parecidas. Sem um critério de escolha, vira tentativa e erro dentro da prova.' },
      { t: 'Série de Taylor sem propósito', d: 'Decorar a fórmula sem entender que é aproximação torna todo exercício de resto e raio de convergência impenetrável.' },
      { t: 'Conta longa, erro pequeno', d: 'Quinze linhas dão quinze chances de errar sinal. Aqui o trabalho é de método e conferência, não de conceito.' },
    ],
    ementa: ['Integração por partes e por substituição trigonométrica', 'Frações parciais', 'Integrais impróprias', 'Aplicações da integral: área, volume e comprimento de arco', 'Sequências e séries numéricas', 'Testes de convergência', 'Séries de potências, Taylor e Maclaurin', 'Coordenadas polares e paramétricas', 'Equações diferenciais de primeira ordem'],
    prerequisitos: 'Derivada e integral de Cálculo I com fluência, e trigonometria disponível. Quando a dificuldade aparece em Cálculo II, a origem costuma estar numa dessas três.',
    faqs: [
      { q: 'Reprovei em Cálculo II e vou repetir. Como estudar diferente?', a: 'A pergunta útil não é estudar mais, é descobrir onde a conta quebra. Se o problema for escolha de técnica, treina-se reconhecimento de padrão. Se for erro de sinal em conta longa, treina-se método de conferência. São trabalhos diferentes, e a aula diagnóstica separa os dois.' },
      { q: 'Séries é a parte mais difícil?', a: 'É a que mais derruba, e quase sempre por falta de um critério de escolha entre os testes de convergência. Costumo montar esse critério em forma de árvore de decisão, aplicada a muitos exercícios até ficar automático.' },
      { q: 'Vocês veem equações diferenciais?', a: 'Vemos as de primeira ordem que a ementa de Cálculo II costuma incluir: separáveis, lineares e aplicações. Um curso inteiro de EDO é outra disciplina.' },
    ],
  },
  {
    slug: 'calculo-3',
    nome: 'Cálculo III',
    nomeCurto: 'Cálculo III',
    titulo: 'Aula particular de Cálculo III — várias variáveis e campos vetoriais',
    descricao: 'Aula particular de Cálculo III individual, online para todo o Brasil ou presencial em Belo Horizonte. Funções de várias variáveis, derivadas parciais, integrais múltiplas, campos vetoriais e os teoremas de Green, Stokes e Gauss.',
    eyebrow: 'Ensino superior · Cálculo III',
    h1: 'Aula particular de',
    h1Enfase: 'Cálculo III',
    chamada: 'A disciplina em que é preciso enxergar em três dimensões antes de integrar. Quem tenta resolver só no algébrico costuma montar a integral errada e não perceber.',
    travas: [
      { t: 'Montar a região de integração', d: 'O erro raramente está na integral e quase sempre nos limites. Sem desenhar a região, a conta certa responde a pergunta errada.' },
      { t: 'Escolher o sistema de coordenadas', d: 'Reconhecer quando cilíndricas ou esféricas simplificam é o que separa uma conta de dez linhas de uma de quarenta.' },
      { t: 'Gradiente, divergente e rotacional sem significado', d: 'Decorados como fórmulas, tornam os teoremas de Green, Stokes e Gauss impossíveis de aplicar com critério.' },
      { t: 'Saber qual teorema usar', d: 'Os três relacionam integrais de dimensões diferentes. Sem entender o que cada um troca pelo quê, a escolha vira sorte.' },
    ],
    ementa: ['Funções de várias variáveis, curvas de nível e superfícies', 'Limites e continuidade em várias variáveis', 'Derivadas parciais e diferenciabilidade', 'Regra da cadeia, gradiente e derivada direcional', 'Máximos e mínimos e multiplicadores de Lagrange', 'Integrais duplas e triplas', 'Coordenadas polares, cilíndricas e esféricas', 'Campos vetoriais e integrais de linha', 'Teoremas de Green, Stokes e da Divergência'],
    prerequisitos: 'Cálculo I e II com integral fluente, e geometria analítica no espaço: reta, plano, e as quádricas. A dificuldade de visualização costuma ser lacuna de GAAL, não de Cálculo.',
    faqs: [
      { q: 'Meu problema é não conseguir visualizar. Tem jeito?', a: 'Tem, e é treinável. Trabalho com esboço à mão e com a leitura das curvas de nível antes de qualquer conta, porque montar os limites de integração é uma tarefa geométrica antes de ser algébrica.' },
      { q: 'É a mesma coisa que Cálculo Vetorial ou Cálculo C?', a: 'Depende da universidade. O núcleo é o mesmo: várias variáveis, integrais múltiplas e campos vetoriais. Me mande a ementa da sua disciplina e eu confirmo o recorte.' },
      { q: 'Preciso rever GAAL antes?', a: 'Com frequência sim, e o diagnóstico mostra isso rápido. Reta, plano, produto vetorial e as superfícies quádricas aparecem em quase todo exercício de Cálculo III.' },
    ],
  },
  {
    slug: 'estatistica-e-probabilidade',
    nome: 'Estatística e Probabilidade',
    nomeCurto: 'Estatística',
    titulo: 'Aula particular de Estatística e Probabilidade — da distribuição ao teste de hipótese',
    descricao: 'Aula particular de Estatística e Probabilidade individual, online para todo o Brasil ou presencial em Belo Horizonte. Probabilidade, variáveis aleatórias, distribuições, intervalo de confiança, testes de hipótese e regressão.',
    eyebrow: 'Ensino superior · Estatística e Probabilidade',
    h1: 'Aula particular de',
    h1Enfase: 'Estatística e Probabilidade',
    chamada: 'A disciplina em que acertar a conta não basta: é preciso dizer o que o número significa. É por isso que ela derruba gente que vai bem em cálculo.',
    travas: [
      { t: 'Escolher a distribuição certa', d: 'Binomial, Poisson, normal ou exponencial: o enunciado diz qual, e ler esse sinal é a habilidade que a prova cobra.' },
      { t: 'Interpretar o p-valor', d: 'É o erro conceitual mais comum do curso inteiro, e ele reaparece em toda questão de teste de hipótese.' },
      { t: 'Montar as hipóteses', d: 'Decidir o que vai em H0 e o que vai em H1 é uma tradução do enunciado, e é onde a questão se ganha ou se perde.' },
      { t: 'Confundir amostra com população', d: 'Desvio padrão amostral e populacional, média e estimador. Trocar um pelo outro produz resposta plausível e errada.' },
    ],
    ementa: ['Estatística descritiva e medidas de posição e dispersão', 'Probabilidade, probabilidade condicional e teorema de Bayes', 'Variáveis aleatórias discretas e contínuas', 'Distribuições binomial, Poisson, normal, t e qui-quadrado', 'Esperança, variância e teorema central do limite', 'Amostragem e distribuições amostrais', 'Estimação pontual e intervalo de confiança', 'Testes de hipótese e p-valor', 'Correlação e regressão linear simples'],
    prerequisitos: 'Menos cálculo do que se imagina para a parte descritiva e de probabilidade; integral aparece nas variáveis contínuas. O pré-requisito real é leitura de enunciado, que é onde a maioria trava.',
    faqs: [
      { q: 'Uso software na disciplina. Você trabalha com isso?', a: 'Trabalho com a interpretação da saída, que é o que a prova cobra: o que aquele p-valor, aquele intervalo e aquele coeficiente significam. A aula não é de programação, e sim de leitura do resultado.' },
      { q: 'Meu curso é de humanas ou saúde. Serve?', a: 'Serve, e o recorte muda. Nesses cursos a ênfase costuma estar em interpretação e em delineamento, não em demonstração, e a aula segue a ementa da sua disciplina.' },
      { q: 'Probabilidade e estatística são a mesma matéria?', a: 'São duas metades de um curso só, na maioria das ementas. Probabilidade constrói o modelo e estatística usa o modelo para decidir a partir de dados.' },
    ],
  },
  {
    slug: 'geometria-analitica-e-algebra-linear',
    nome: 'Geometria Analítica e Álgebra Linear',
    nomeCurto: 'GAAL',
    titulo: 'Aula particular de GAAL — Geometria Analítica e Álgebra Linear',
    descricao: 'Aula particular de Geometria Analítica e Álgebra Linear, a GAAL, individual, online para todo o Brasil ou presencial em Belo Horizonte. Vetores, retas e planos, matrizes, sistemas, espaços vetoriais e autovalores.',
    eyebrow: 'Ensino superior · GAAL',
    h1: 'Aula particular de',
    h1Enfase: 'GAAL',
    chamada: 'A disciplina que começa concreta, com vetor e plano, e vira abstrata sem aviso. O ponto de virada tem nome: espaço vetorial.',
    travas: [
      { t: 'A virada para o abstrato', d: 'Enquanto é seta no espaço, tudo faz sentido. Quando espaço vetorial vira definição por axiomas, o aluno perde o chão — e é nesse ponto que a maioria desiste.' },
      { t: 'Base, dimensão e independência linear', d: 'Três ideias que se apoiam umas nas outras. Uma delas frouxa derruba as outras duas e toda a segunda metade do curso.' },
      { t: 'Escalonar sem entender o que se preserva', d: 'Quem escalona no automático não sabe ler a solução do sistema e não enxerga posto nem espaço nulo.' },
      { t: 'Autovalor como conta, não como significado', d: 'Achar a raiz do polinômio característico é o passo fácil. Dizer o que aquele vetor faz sob a transformação é o que a prova cobra.' },
    ],
    ementa: ['Vetores no plano e no espaço', 'Produto escalar, vetorial e misto', 'Retas e planos: equações e posições relativas', 'Cônicas e superfícies quádricas', 'Matrizes, determinantes e sistemas lineares', 'Escalonamento e posto', 'Espaços e subespaços vetoriais', 'Base, dimensão e independência linear', 'Transformações lineares, núcleo e imagem', 'Autovalores, autovetores e diagonalização'],
    prerequisitos: 'Manipulação algébrica e trigonometria do ensino médio. O conteúdo é novo para quase todo mundo, então aqui o diagnóstico procura menos lacuna antiga e mais o ponto exato em que o curso ficou abstrato demais.',
    faqs: [
      { q: 'GAAL, Álgebra Linear e Geometria Analítica são a mesma disciplina?', a: 'Algumas universidades juntam as duas numa só, chamada GAAL; outras separam em duas disciplinas. O conteúdo é o mesmo conjunto, distribuído de formas diferentes. Me mande a ementa e eu digo o recorte da sua.' },
      { q: 'Travei quando entrou espaço vetorial. É comum?', a: 'É o ponto de virada mais comum do curso inteiro. Costumo voltar e reconstruir a definição a partir dos exemplos concretos que o aluno já domina, em vez de seguir com a definição abstrata que não colou.' },
      { q: 'Preciso de GAAL para Cálculo III?', a: 'Na prática sim. Reta, plano, produto vetorial e as quádricas aparecem em quase todo exercício de integral múltipla e de campo vetorial.' },
    ],
  },
];

export const materiaPorSlug = (slug: string) => materiasSuperior.find((m) => m.slug === slug);

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
  '/professor-particular-de-matematica':
    'Olá! Vim da página de aula particular de matemática e quero agendar a aula diagnóstica gratuita.',
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
  '/aulas-particulares-ensino-superior':
    'Olá! Vim da página de aulas de exatas da faculdade e quero agendar a aula diagnóstica gratuita.',
  '/404': 'Olá! Cheguei numa página que não existe mais no site e quero falar sobre as aulas.',
};

/**
 * Prefixo das matérias de ensino superior: `/aula-particular-de-<slug>`.
 * Derivar a frase do nome da matéria mantém a regra `atribuicao-unica` da
 * varredura satisfeita sem precisar listar rota a rota — e sem o risco de
 * uma matéria nova cair na frase da home, que foi exatamente o bug da Fase 0.
 */
export const superiorLeadMessage = (nome: string) =>
  `Olá! Vim da página de aula particular de ${nome} e quero agendar a aula diagnóstica gratuita.`;

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
  if (path.startsWith('/aula-particular-de-')) {
    const m = materiaPorSlug(path.slice('/aula-particular-de-'.length));
    if (m) return superiorLeadMessage(m.nome);
  }
  if (path.startsWith('/blog/')) return blogLeadMessage(path.slice('/blog/'.length));
  return leadMessages['/'];
};

/** Link do WhatsApp já atribuído à página atual. */
export const waLinkFor = (pathname: string) => waLink(leadMessage(pathname));
