# Funil e atribuição de lead

## O funil desta operação

O projeto de origem era um SaaS com banco de dados e o funil canônico era
`chegou → clicou → começou cadastro → criou conta → usou → pagou`. Aqui não
existe cadastro: o site é estático e a conversão acontece fora dele, no WhatsApp.

| # | Etapa | Onde é observável |
|---|---|---|
| 1 | Apareceu numa busca | Search Console (impressões) |
| 2 | Chegou na página | Search Console (cliques) |
| 3 | **Clicou no WhatsApp** | invisível sem analytics — ver lacuna abaixo |
| 4 | **Mandou a mensagem** | WhatsApp, identificado pela frase de origem |
| 5 | Agendou a aula diagnóstica | planilha de leads, na mão |
| 6 | Virou aluno pagante | planilha de leads, na mão |

## Como a origem é identificada

Sem backend, a única forma honesta de saber de qual página veio um lead é o
próprio texto que chega no WhatsApp. Por isso **cada página abre o WhatsApp com
uma frase diferente**:

| Página | Frase que chega |
|---|---|
| `/` | "Vim da página inicial do site…" |
| `/aulas-particulares-matematica-bh` | "Vim da página de aulas particulares em BH…" |
| `/aulas-de-matematica-online` | "Vim da página de aulas online…" |
| `/reforco-escolar-matematica` | "Vim da página de reforço escolar…" |
| `/enem-matematica` | "Vim da página de ENEM…" |
| `/sobre` | "Vim da página sobre a professora…" |
| `/contato` | "Vim da página de contato…" |
| `/blog` | "Vim da lista de artigos do blog…" |
| `/blog/<slug>` | "Vim do artigo \"\<slug\>\" do blog…" |
| `/404` | "Cheguei numa página que não existe mais…" |

Definido em `src/config/site.ts` (`leadMessages`, `leadMessage`, `waLinkFor`).
Todos os links da mesma página — cabeçalho, botões, rodapé e o botão flutuante —
usam a mesma frase, então **qualquer clique naquela página é atribuível a ela**.

Duas regras, ambas verificadas por `npm run check`:

- Nenhuma frase se repete entre páginas.
- Nenhuma página tem duas frases diferentes.

O visitante pode apagar a frase antes de enviar. Uma parte dos leads vai chegar
sem origem — isso é normal, e é por isso que atribuição se lê como faixa, não
como verdade.

## Planilha de leads (preencher na mão, mensal)

Uma linha por conversa iniciada. Cinco colunas, nada além disso:

| Data | Frase de origem → página | Série do aluno | Virou diagnóstica? | Virou pagante? |
|---|---|---|---|---|

É essa planilha que responde a pergunta 6 da Fase 2. Contar só conversa engana:
uma página pode trazer muita conversa que não fecha.

## Preço publicado em 2026-09-06

O site passou a publicar R$ 45 por aula de 50 minutos, com a diagnóstica de 30
minutos gratuita. A decisão veio da Fase 3: o preço já era público no perfil da
professora no Superprof e as IAs já o citavam, então não publicar aqui não
criava discrição — criava divergência entre canais.

Junto com o valor, o site passou a declarar o que o concorrente dominante não
consegue oferecer sem mudar o próprio modelo: **contato direto, sem taxa, sem
assinatura e sem cadastro em plataforma**. É a única vantagem estrutural que a
Fase 3 encontrou.

## A lacuna conhecida

A etapa 3 do funil — **viu a página e não clicou** — é invisível. Sem ela não dá
para separar "ninguém acha a página" de "acham e não clicam", que pedem consertos
opostos (título vs. página).

Fechar essa lacuna exige uma ferramenta de analytics no site. Opções, se e
quando a dona do projeto decidir:

- **Plausible / Umami** — sem cookie, sem banner de consentimento, ~US$9/mês
  (ou auto-hospedado). Fecha a lacuna com o menor custo de privacidade.
- **Google Analytics 4** — gratuito, mas exige banner de consentimento (LGPD) e
  o dado de clique em link externo precisa ser configurado à mão.
- **Não instalar nada** — continuar lendo o funil pelas pontas (impressão de um
  lado, conversa do outro). É o estado atual, e é defensável enquanto o volume
  for baixo: com poucas conversas por mês, a amostra não sustentaria a conclusão
  de qualquer jeito.

Decisão pendente. Registrada como pergunta aberta do Ciclo 0.
