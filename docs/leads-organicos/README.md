# Ciclo de Leads Orgânicos — Aulas de Matemática BH

Procedimento recorrente para conseguir alunos pelo orgânico. Adaptado de uma
iniciativa rodada em campo num SaaS brasileiro entre julho e setembro de 2026,
que levou aquele site de 8 para 136 cliques/mês e de 13 para 115 buscas
distintas em três rodadas.

**Os números daquele projeto não são meta nem previsão aqui.** Contexto
diferente, mercado diferente, ciclo de decisão diferente (uma família escolhendo
professor demora mais e pergunta preço mais cedo que um usuário de SaaS). O que
se replica é o método; os números desta operação começam do zero na primeira
leitura.

## A ideia central

Uma regra sustenta tudo: **toda decisão sai de um número que você tem, e toda
hipótese que o número contradiz é registrada como derrubada** — para nunca
voltar como opinião.

Fontes de verdade, nenhuma delas paga:

| Fonte | O que responde | Estado aqui |
|---|---|---|
| Search Console | Onde já aparecemos, em que posição, com que CTR. Dado exato. | **Pendente de verificação** — ver Fase 0 |
| Planejador de palavras-chave | Tamanho do mercado onde ainda não aparecemos | Trimestral |
| Atribuição do lead | De qual página veio quem chamou no WhatsApp | **Instrumentado** — ver [funil.md](funil.md) |
| As IAs, perguntadas na mão | Se citam a professora, com que nome, e se acertam | Mensal — ver [citacao-ia.md](citacao-ia.md) |

A métrica que melhor mede progresso não é clique nem impressão: é **quantas
buscas distintas trazem alguém até o site**. Clique é consequência disso.

### O que muda em relação à iniciativa original

O projeto de origem era um SaaS com cadastro e banco de dados, e a terceira
fonte de verdade lá eram eventos de produto (`chegou → clicou → cadastrou →
pagou`). Aqui não existe cadastro nem backend: o site é estático e o funil
termina numa conversa de WhatsApp.

A substituição está em [funil.md](funil.md): **cada página abre o WhatsApp com
uma frase diferente**, e a frase é o identificador de origem. Não custa nada,
não polui a tela e não depende de ferramenta de terceiro.

O que **não** dá para saber sem uma ferramenta de analytics: quantas pessoas
viram a página e não clicaram. Isso separa "ninguém acha a página" de "acham e
não clicam" — dois problemas com consertos opostos. É a maior lacuna conhecida
deste ciclo, e está registrada como pergunta aberta no [registro-ciclos.md](registro-ciclos.md).

## A cadência

Rodar tudo todo mês desperdiça tempo; rodar tudo por trimestre perde o sinal.

| Frequência | Peça | O que fazer |
|---|---|---|
| Uma vez, no começo | **Instrumentação** | Search Console verificado · atribuição de lead funcionando · IndexNow ligado · robots.txt liberado para robôs de IA |
| Todo mês, ~30 min | **Leitura** | Exportar Consultas, Páginas e Cobertura do Search Console · preencher a linha nova da tabela histórica · pedir indexação do que entrou no ar |
| Todo mês, ~20 min | **Citação por IA** | 7 consultas × 4 superfícies, sempre as mesmas |
| A cada 3 meses | **Tamanho do mercado** | Planejador de palavras-chave · Google Trends · revisar linhas congeladas |

## As sete fases

### Fase 0 — Instrumentar antes de medir *(uma vez, antes de tudo)*

Sem isto os relatórios dos próximos meses vêm vazios e você descobre tarde demais.

1. **Verifique a propriedade no Search Console.** O histórico só passa a existir
   a partir da verificação — não é retroativo. Enquanto isso não for feito, as
   fases 1 e 2 não têm insumo. É a única coisa que não pode esperar.
2. **Confira a atribuição de lead.** `npm run check` falha se duas páginas
   abrirem o WhatsApp com a mesma frase. Ver a armadilha abaixo.
3. **IndexNow ligado.** `npm run build && npm run indexnow` avisa Bing, Yandex e
   DuckDuckGo de graça. **O Google não participa** — lá é um pedido por vez, na mão.
4. **robots.txt liberado para robôs de IA.** Já está: GPTBot, OAI-SearchBot,
   PerplexityBot, ClaudeBot, Google-Extended e outros com `Allow`. Uma linha
   errada ali torna todo o resto invisível.
5. **`llms.txt` publicado e atualizado.** É o que as IAs leem para saber o que o
   site oferece. O `npm run check` falha se uma página indexável não estiver lá.

> **Armadilha medida — custou 3 meses no projeto de origem.**
> Um dado pode precisar de autorização em mais de um lugar, e faltar em qualquer
> um deles descarta o dado **sem nenhum erro aparecer**.
>
> Aconteceu aqui na primeira execução: com `build.format: 'file'`, o Astro
> entrega `/sobre.html` em `Astro.url.pathname`. Sem remover o `.html`, **todas
> as páginas caíam na mensagem da home** e a atribuição inteira ficava cega — o
> site compilava, os links funcionavam, e o dado simplesmente não existia. Só
> apareceu porque a varredura da Fase 5 compara as mensagens entre si.
> Teste cada instrumentação nova indo até o dado final conferir que ele existe.

### Fase 1 — Coletar *(todo mês, ~30 min)*

No Search Console, **Desempenho → Resultados da pesquisa**, período de 12 meses:

- Ligue as quatro métricas. **A "posição média" costuma vir desligada** — sem
  ela metade das leituras da Fase 2 é impossível.
- Exporte a aba **Consultas** e a aba **Páginas** em CSV.
- Exporte **Cobertura / Indexação**: quantas indexadas contra quantas fora, e o
  motivo de cada uma.

Depois, junte a leitura própria: as conversas de WhatsApp do mês, classificadas
pela frase de origem (ver [funil.md](funil.md)).

> **Armadilha de metodologia.** O Search Console mostra números diferentes no
> painel-resumo e na soma da aba "Países" — o resumo inclui linhas sem país
> atribuído. **Escolha um e nunca misture entre meses**, senão a série histórica
> vira ficção. Convenção adotada aqui: **soma da aba "Países"**.

### Fase 2 — Fazer as seis perguntas *(todo mês, a parte que pensa)*

Sempre as mesmas seis, sempre nesta ordem. É o que transforma export em decisão.

1. **Quantas buscas distintas trouxeram gente?** Compare com o mês anterior. É a
   métrica de progresso mais honesta.
2. **Que páginas têm muita impressão e zero clique?** Some as impressões
   desperdiçadas. Impressão alta em posição boa com zero clique é defeito de
   título, não de conteúdo.
3. **Onde estamos na posição 8 a 20?** É a mina de ouro: falta pouco para a
   primeira página. Priorize essas antes de escrever qualquer coisa nova.
4. **A página que responde a consulta é a página certa?** Risco concreto aqui:
   temos quatro páginas de serviço com sobreposição real de assunto (BH, online,
   reforço, ENEM) mais três artigos de blog. Se "aula de matemática online"
   estiver sendo respondida pela página de BH, é canibalização — e o conserto é
   diferenciar as páginas, não escrever uma quinta.
5. **Quem chega, o que faz?** Aqui só dá para responder pela contagem de
   conversas por página de origem. Poucas conversas numa página com muita
   impressão = mexer no título. Sem uma ferramenta de analytics, o meio-termo
   ("viu a página e não clicou") continua invisível.
6. **De onde vieram os alunos que fecharam?** Não basta contar conversa: conte
   quantas viraram aula diagnóstica e quantas viraram aluno pagante, por página
   de origem. Uma página pode trazer muita conversa ruim.

> **Leia com honestidade.** Quem achou no Google, fechou e voltou depois
> digitando o endereço não aparece como orgânico em lugar nenhum. Atribuição é
> aproximação — trate como faixa, não como verdade.

### Fase 3 — Medir citação por IA na mão *(todo mês, ~20 min)*

Não existe ferramenta para isto: você pergunta e anota. No projeto de origem
esse foi o canal que **mais** trouxe cliente — 43% dos cadastros vieram do
ChatGPT com apenas 18% das visitas.

Planilha, consultas e armadilhas: **[citacao-ia.md](citacao-ia.md)**.

### Fase 4 — Congelar linhas que não pagam *(a cada 3 meses)*

A fase que a maioria pula, e a que mais economiza trabalho. Com o volume de
mercado na mão, declare por escrito **onde parou de investir e por qual
evidência**. Duas regras:

1. **Não apague as páginas congeladas.** Perder link e histórico não ajuda. Só
   pare de investir.
2. **Escreva a evidência junto da decisão.** Sem isso, daqui a dois meses alguém
   propõe a mesma coisa e ninguém lembra por que foi descartada.

E a regra que evita que o congelamento vire dogma: **quem decide prioridade é a
dona do projeto.** Volume é argumento de prioridade, não de correção — uma linha
pode ser reaberta por decisão explícita, registrada como decisão.

Registro: **[linhas-congeladas.md](linhas-congeladas.md)**.

### Fase 5 — Executar: uma mudança, uma entrega, um teste *(depois de cada leitura)*

Cada ação vira uma entrega separada, pequena, **com o número que a motivou
escrito no texto dela**.

E a peça que faz o ciclo acumular em vez de reciclar: **toda decisão de conteúdo
vira uma verificação automatizada**, em `scripts/check-conteudo.mjs`
(`npm run check`). Não é sobre código — é sobre a regra não se perder.

Regras já codificadas:

| Nível | Regra |
|---|---|
| ERRO | Título e descrição existem e são únicos no site |
| ERRO | Canonical presente e coerente com a rota |
| ERRO | Toda página tem WhatsApp, com uma só frase, distinta da de qualquer outra página |
| ERRO | Nenhuma promessa de resultado ("aprovação garantida", "100% de aprovação") |
| ERRO | Nenhum preço em R$ na página — a decisão registrada é falar valor só na conversa |
| ERRO | Nenhuma página nova numa linha congelada |
| ERRO | Toda página indexável está no `llms.txt` e na lista de pendências de indexação |
| AVISO | Título acima de 60 caracteres |
| AVISO | Descrição acima de 160 caracteres |
| AVISO | Título sem número concreto |

> **Detalhe que muda tudo.** Escreva a verificação como **varredura com exceção
> nominal**, nunca como lista do que conferir. No projeto de origem, a versão em
> lista deixou uma página passar meses com título ruim na posição 4 e zero
> clique — ela simplesmente não estava na lista. Na varredura, a regra vale para
> tudo, e quem quer ficar de fora aparece pelo nome em `EXCECOES`, com motivo e data.

> **Por que existem AVISOS que não falham.** O projeto de origem **derrubou com
> dado** a hipótese "título longo mata o clique": os dois títulos mais longos
> daquele site eram os que mais convertiam. Aqui ainda não há dado nenhum, então
> encurtar dez títulos agora seria trocar uma opinião por outra. Os avisos ficam
> registrados e viram pergunta do Ciclo 1, quando o Search Console disser qual é
> o CTR real de cada um.

### Fase 6 — Pedir indexação e registrar *(depois que o site atualizou)*

O Google não descobre página nova sozinho em tempo hábil. Peça na mão, em
**Inspeção de URL → Solicitar indexação**. Cota de ~10 a 12 por dia.

Controle: **[pendencias-indexacao.md](pendencias-indexacao.md)**. Regra: toda
página nova ou reescrita entra nessa lista **na mesma entrega que a cria** — e o
`npm run check` falha se não entrar.

> **Ordem que custa o pedido inteiro.** Só peça **depois** que a mudança estiver
> no ar. Pedir antes faz o Google ler a versão velha e o pedido é gasto à toa.

Por fim, escreva o registro do ciclo em **[registro-ciclos.md](registro-ciclos.md)**:
o que foi feito, **o que a medição derrubou**, e as perguntas para o mês
seguinte. Na próxima rodada você começa por ele em vez de reler tudo.

## A ordem, se começar hoje

Nem tudo tem o mesmo retorno por hora gasta.

1. **Verificar o Search Console.** Sem isso os meses seguintes não produzem
   dado. Nada mais tem prioridade sobre isto.
2. **Rodar `npm run build && npm run indexnow`** e **pedir indexação manual das
   12 páginas no Google**. Maior retorno por minuto de todo o ciclo: no projeto
   de origem, das 15 páginas pedidas na mão, 15 indexaram; das 10 nunca pedidas,
   nenhuma.
3. **Medir citação por IA.** Vinte minutos, e pode revelar que o canal que mais
   traz aluno é um que ninguém estava olhando.
4. **Rodar as fases 1 e 2 uma vez**, ~30 dias depois da verificação.
5. **Só então escrever página nova.** É a ação mais cara e a mais lenta a dar
   retorno. Vem depois que as 12 existentes estiverem bem aproveitadas.

## Comandos

```sh
npm run check      # build + varredura de conteúdo (Fase 5)
npm run indexnow   # avisa Bing/Yandex/DuckDuckGo (Fase 0/6) — exige build antes
```
