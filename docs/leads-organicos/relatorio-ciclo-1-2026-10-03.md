# Relatório do Ciclo 1 — 2026-10-03

Primeira leitura com 30 dias de Search Console (03/09 a 29/09, 27 dias com
dado), mais a pesquisa de campo de 03/10: autocompletar, Google Maps,
Planejador com filtro Brasil e Belo Horizonte, SERP do Google e do Bing para
cinco termos, Fase 3 em duas superfícies, e a ficha do Google Business
Profile. Dados brutos em `search-console-2026-10-03/`.

Estrutura pedida pela dona do projeto em 03/10: **As-Is**, **To-Be** (BH
presencial e Brasil online), **GAP** e **Plano de ação**. Tudo abaixo sai de
número que existe; o que é hipótese está marcado como hipótese.

**O que não entrou, por decisão da dona do projeto:** Gemini e Perplexity na
Fase 3, Trends de vestibulares, estatísticas do Superprof, e a leitura das
conversas de WhatsApp além de "chegou uma, buscando aula de reforço".

---

## 1 · As-Is: o que a operação é hoje, medido

### A oferta

| Linha | Páginas | Preço publicado | Modalidade |
|---|---|---|---|
| Fundamental e médio: reforço, recuperação, acompanhamento | `/`, `/professor-particular-de-matematica`, `/reforco-escolar-matematica` | R$ 45 online, a partir de R$ 50 presencial, vigência 2026-09 | online nacional + presencial BH e 6 cidades vizinhas |
| ENEM | `/enem-matematica` | idem | online |
| Provas de admissão de BH: Coltec, CEFET-MG, Colégio Militar | 3 artigos de 18/09 | idem | ambas |
| Ensino superior: pré-cálculo, Cálculo I a III, Estatística, GAAL | hub + 6 páginas de matéria + 1 artigo | **nenhum**, "sai após a diagnóstica" | ambas |

Diferencial que o site declara e que a Fase 3 validou: contato direto por
WhatsApp, sem Passe Aluno. Diferenciais que o site ainda exibe e que a
medição derrubou como diferenciais: UFMG e primeira aula grátis.

### Como o site separa BH e Brasil hoje

- **Presencial em BH** tem uma página (`/aulas-particulares-matematica-bh`),
  raio de 20 km, sete cidades no schema `areaServed` e um `GeoCircle` com
  coordenada do centro. A ficha do Google é área de atendimento sem endereço.
- **Online nacional** tem uma página (`/aulas-de-matematica-online`) que
  **nunca entrou no índice do Google** em 30 dias e três pedidos manuais.
  Na prática, a modalidade nacional é atendida pela home e pela página do
  termo sem qualificador.
- A home mistura as duas: título "Aulas particulares de matemática online",
  descrição do `WebSite` falando de BH e de todo o Brasil.
- O telefone é DDD 32 numa marca "BH", explicado ao lado do número. Decisão
  de 03/10: fica.

### Os números de 30 dias (convenção: soma da aba Países, 12 meses)

| Métrica | Ciclo 1 | Referência anterior |
|---|---|---|
| Impressões | 835 | 132 em 16/09 (12 dias) |
| Cliques | 12 | 1 |
| Taxa de clique | 1,44% | 0,76% |
| Posição média ponderada | 9,1 | — |
| Consultas distintas nomeadas | 46 | 18 |
| Páginas com impressão | 24 de 33 | — |
| Páginas indexadas (Coverage 20/09) | 27 de 33 | 17 de 21 |
| Impressões por dia desde 21/09 | ~64 | ~10 até 20/09 |
| URLs por busca (Páginas ÷ Países) | 1,08 | 1,71 em 11/09; 1,41 em 16/09 |
| Conversas no WhatsApp | 1 | 0 |
| Bing: URLs indexadas | 2 de 33 | 0 |
| Superfícies de IA que citam o site | 2 de 2 medidas | 0 de 4 |

A projeção de 11/09 era ~210 impressões por mês. O ritmo desde 21/09 projeta
~1.900. O que mudou entre as duas datas foi a entrada dos quatro artigos de
18/09 no índice.

### Onde as impressões e os cliques estão

| Página | Impressões | Cliques | Posição |
|---|---|---|---|
| `/blog/matematica-cefet-mg-prova-o-que-estudar` | 145 | 3 | 4,7 |
| `/blog/quanto-custa-aula-particular-matematica` | 131 | 0 | 8,6 |
| `/` | 110 | 4 | 8,7 |
| `/blog/recuperacao-de-matematica-fim-do-ano` | 72 | 0 | 7,0 |
| `/blog/calculo-1-ufmg-puc-minas-por-que-reprova` | 66 | 2 | 6,9 |
| `/professor-particular-de-matematica` | 62 | 0 | 10,3 |
| `/blog/matematica-coltec-ufmg-como-preparar` | 57 | 2 | 4,5 |
| `/aulas-particulares-matematica-bh` | 52 | 0 | 10,5 |
| `/sobre` | 39 | 0 | 3,7 |
| `/reforco-escolar-matematica` | 36 | 0 | 47,3 |
| `/blog/matematica-colegio-militar-bh-exame-intelectual` | 14 | 1 | 4,5 |
| `/aulas-particulares-ensino-superior` | 4 | 0 | 19,0 |
| `/aulas-de-matematica-online` | 0 | 0 | fora do índice |
| `/blog/atividades-de-matematica-para-praticar-em-casa` | 0 | 0 | indexada, zero impressão |

Os quatro artigos de 18/09 somam 282 impressões (34% do total) e **8 dos 12
cliques**. Têm 12 dias de índice.

### O funil

| Etapa | Ciclo 1 |
|---|---|
| Apareceu | 835 impressões |
| Clicou | 12 |
| Clicou no WhatsApp | invisível, sem analytics |
| Mandou mensagem | 1, "buscando aula de reforço" |
| Diagnóstica, pagante | não informado |

A única conversa menciona reforço. A página de reforço tem 36 impressões na
posição 47 e zero clique no Google, então a conversa ou veio sem a frase de
atribuição, ou chegou por outro canal (ficha do Google, ChatGPT, indicação).
**Não dá para atribuir.** Fica registrada como faixa: 1 conversa, origem
provável fora do clique orgânico.

---

## 2 · To-Be: como o mercado busca, medido

### Vertente BH (presencial)

**Volume.** Confirmado pela quarta e quinta ferramenta: o Planejador com
filtro Belo Horizonte dá **50 buscas/mês** para cada um dos cinco termos,
contra 5.000 no filtro Brasil. O Search Console mostra `aula particular
matematica bh` com 10 impressões na posição 38 e `professor particular de
matemática bh` com 1 impressão. Mas o **lance em BH é maior que o nacional**:
R$ 9,13 contra R$ 7,46 para `professor particular de matemática` e R$ 10,78
contra R$ 6,31 para `aula particular de matemática`. Pouca gente busca, e quem
anuncia paga mais caro por ela.

**Como a pessoa de BH digita.** O autocompletar, visto de BH, acrescenta "bh"
em 2 dos 5 termos e "perto de mim" em 3 dos 5. Nenhuma sugestão traz bairro
ou nome de escola. Para `reforço escolar matemática`, as sugestões são todas
por ano escolar (2º ao 9º ano, ensino médio); para `aula de matemática`, por
ano e por ENCCEJA. A busca local existe, mas se expressa por "perto de mim" e
por série, não por bairro.

**Quem vence.** Na SERP de `professor particular de matemática` vista de BH,
o Google exibe um pacote local com três perfis, **todos de área de atendimento
sem endereço público**: Eduardo Ribeiro (19 avaliações, DDD 35), Laura Milanez
(87) e Professor Henrique (49). Todos marcados "Aberto 24 horas" no horário da
captura, por volta das 19h40 de sexta. O perfil da Taciane, com 4 avaliações
e "fecha às 20:00", não aparece.

No Google Maps, em três consultas com 28, 100+ e 100+ resultados, **o perfil
da Taciane não aparece em nenhuma**. Aparecem perfis sem endereço com 2, 15,
18, 20, 49, 69, 78 e 87 avaliações. A hipótese mais forte para a ausência não
é volume de avaliação: é o perfil **não estar verificado**. O Google não exibe
no Maps perfis cuja verificação está pendente, e a verificação está travada na
exigência de vídeo.

**Concorrentes locais.** Os que aparecem tanto no Maps quanto no ChatGPT para
"aulas de matemática BH" são os mesmos de 03/09: Bruna M./Educament (51 e 219
avaliações nas duas fichas), Token Método (50), Cida Lage (49), Miriam Mello
(57), Bruno Professor BH (41, e o único a anunciar no Maps). O ChatGPT os
ordenou por número de avaliações. É o critério de 03/09, reconfirmado.

### Vertente Brasil (online)

**Volume e intenção.** Sem mudança desde a Fase 4: `professor particular de
matemática` e `aula particular de matemática` com 5.000/mês; `aula de
matemática online` e `professor de matemática online` com 100 a 1.000;
`reforço` com intenção de material. O autocompletar nacional de
`professor particular de matemática` lista rj, porto alegre e curitiba, não
bh: o termo é nacional e se qualifica por cidade grande.

**Quem vence no Google.** Nas cinco SERPs, o top 10 orgânico é Superprof (2 a
3 URLs por SERP), Preply, Suas Aulas Particulares, GetNinjas, OLX e Instagram.
Sites de professor individual que entraram: Aulas Particulares Bruno (Moema,
SP) em duas SERPs, brunoprofessorbh.com.br em uma, profjoaomauricio.com.br
(Contagem) em uma, e **este site, na posição 6 orgânica** de `professor
particular de matemática`, visto de BH. Na SERP de `aula particular de
matemática online` o único individual é o de São Paulo, na posição 8.

**A Visão geral por IA aparece nas cinco consultas.** Na de `valor` ela
responde o preço diretamente, com faixas por nível, e a página do site sobre
preço tem 131 impressões na posição 8,6 com **zero clique**. É a assinatura de
consulta absorvida pela resposta de IA: ganhar ali é ser a fonte citada, não
ganhar o clique.

**Quem vence no Bing.** Os mesmos marketplaces, mais dois sites individuais
nas posições 4 e 5 de `aula particular de matemática online`
(matonline.com.br e chalababa.com.br). O Bing tem 2 URLs deste site, descobertas
em 23/09, com zero backlink registrado. Não há resposta de IA no Bing para
nenhuma das cinco.

**O que as IAs citam.** Na Fase 3 do Ciclo 1, com duas superfícies:

| Consulta | ChatGPT | Google Visão geral por IA |
|---|---|---|
| 1 marca | **cita o site**, linha limpa | não cita |
| 2 preço da Taciane | cita (contaminada) | **cita, mas afirma que o site não divulga preço** |
| 3 categoria online | ninguém | marketplaces |
| 4 lista nacional | cita (contaminada) | marketplaces |
| 5 dor do 9º ano | ninguém | Kumon, YouTube |
| 6 UFMG | cita (contaminada) | **cita em primeiro lugar, com 3 páginas** |
| 7 Superprof | não cita | não cita |

No Ciclo 0 foram 28 linhas e nenhuma citação do site. O que as citações
limpas têm em comum: a resposta reproduz **preço, duração, diagnóstica
gratuita, "todo o Brasil" e a credencial**, ou seja, os dados estruturados que
as páginas de serviço e o artigo de preço declaram. O link do ChatGPT veio
com `utm_source=chatgpt.com`, de busca própria: ele citou o site com o Bing
em 2 URLs indexadas.

---

## 3 · GAP

### O que a medição derrubou neste ciclo

1. **"O gargalo é a posição 11."** As sete consultas de contratação que
   paravam entre 11 e 12 em 16/09 estão agora entre **8 e 11**: `aula
   particular de matematica` foi de 11,2 para 9,1 com 32 impressões;
   `professora de matemática particular` de 12 para 8,1. O cluster inteiro
   soma cerca de 80 impressões na primeira página e **zero clique**. O muro
   mudou de lugar: a consulta de contratação entra na página 1 e não produz
   clique. O gargalo agora é clique em posição 8 a 10, onde o pacote local,
   os anúncios e a Visão geral por IA ocupam o topo.
2. **"Sem índice no Bing o ChatGPT não cita."** Citou, com 2 URLs no Bing,
   via busca própria. O Bing continua valendo, mas deixou de ser condição.
3. **"Página de volume alto produz impressão sem conversa."** O artigo de
   `atividades de matemática` (50.000 buscas/mês) produziu **zero impressão em
   22 dias de índice**. Nem impressão. A hipótese simétrica, de 18/09, se
   confirmou: os três artigos de prova de admissão, locais e com data, somam
   216 impressões e 6 cliques em 12 dias.
4. **"A canibalização entre páginas é o problema."** URLs por busca caiu de
   1,71 para **1,08**. As páginas se diferenciaram. O que não se resolveu é
   `/aulas-de-matematica-online`, que segue fora do índice com 33 links
   internos e três pedidos.
5. **"Título longo mata o clique."** Segunda vez derrubada: os cinco títulos
   que produziram clique têm de 74 a 110 caracteres, e a home, com 110, tem a
   melhor taxa de clique das páginas de serviço (3,6%).
6. **"As cinco famílias avaliaram."** A ficha mostra **4 avaliações**, e uma
   delas é da própria dona do projeto, de há 18 semanas. São 3 famílias.

### Desalinhamentos de palavra-chave

- O cliente escreve **"reforço"** (a única conversa, e as sugestões do
  autocompletar), mas as consultas `reforço de matemática` ficam na posição
  50 e a página de reforço na 47. Já `aulas de reforço de matemática` aparece
  na posição 3,5 a 6. O termo com "aulas de" é o de contratação; o sem é o de
  material. A página de reforço está posicionada para o errado.
- `professor particular de matemática` é o termo mais valioso do mercado e
  o site está na posição 6 a 10 para ele, com zero clique. A página nova de
  17/09 tem 62 impressões na posição 10,3; a home responde parte das mesmas
  consultas na 8,7. Ainda não dá para dizer qual das duas o Google prefere
  por consulta, porque o export não cruza página com consulta.
- Preço: 131 impressões e zero clique no artigo, com a Visão geral por IA
  respondendo em cima. E a Visão geral por IA diz que o site **não publica**
  o valor, quando o artigo e três páginas publicam R$ 45. A IA leu a linha de
  ensino superior ("sai após a diagnóstica") como se fosse a regra geral.
- Celular: 67% das impressões, posição 7,7, taxa de clique 0,71%. Computador:
  posição 12,4, taxa 3,03%. Terceira leitura com o mesmo padrão, agora com
  amostra. No celular o topo da página é anúncio, pacote local e resposta de
  IA; a posição 7 fica abaixo de tudo isso.

### Arquitetura

- A modalidade nacional não tem página indexada. A home faz esse papel e o
  título dela é o único lugar onde "online" aparece como termo principal.
- Página por bairro: não há demanda medida que a sustente (Trends zero,
  Planejador BH 50/mês, autocompletar sem bairro, Maps dominado por ficha).
  A linha segue aberta por decisão de 06/09, mas nenhum dado deste ciclo a
  favorece.
- Página por série: o autocompletar de `reforço escolar matemática` é todo
  por ano escolar. É o primeiro dado a favor dessa linha desde 06/09, e ainda
  é só sugestão de autocompletar, sem volume. Fica como pergunta do Ciclo 2.
- Ensino superior: 4 impressões no hub, 1 em Cálculo III, e 4 das 7 páginas
  fora do índice. O artigo de Cálculo 1 UFMG fez 66 impressões e 2 cliques: a
  porta de entrada da linha é editorial, como previsto.

### Presença em buscador e IA

| Superfície | Estado |
|---|---|
| Google orgânico | 27 páginas indexadas; termo principal na página 1, sem clique |
| Google pacote local | ausente, perfil não verificado |
| Google Maps | ausente nas três consultas |
| Google Visão geral por IA | citado em 2 de 7, com um erro de fato |
| Bing | 2 URLs, 1 impressão |
| ChatGPT | citado na consulta de marca |
| Gemini, Perplexity | não medidos neste ciclo |

---

## 4 · Plano de ação

Ordenado por retorno medido. O que depende da dona do projeto está marcado.

### SEO local, BH presencial

1. **Verificar o perfil do Google por vídeo.** *(dona do projeto)* É o item
   que destrava três coisas de uma vez: aparecer no Maps, responder às
   avaliações e abrir a aba Desempenho. Para negócio de área de atendimento o
   Google aceita vídeo que mostre o trabalho e a gestão do negócio, não um
   endereço: material didático, lousa ou tablet de aula, o celular com o
   número da ficha, um comprovante com o nome. O procedimento exato está na
   ajuda do Google e muda com frequência; conferir lá antes de gravar.
2. **Chegar a cinco avaliações de família, e depois pedir uma a cada
   diagnóstica que vira aluno.** *(dona do projeto)* Duas das cinco famílias
   não avaliaram. O ChatGPT ordena a lista de BH por número de avaliações, e
   o pacote local mostra perfis com 19 a 87.
3. **Alinhar horário entre ficha e site.** *(dona do projeto)* A ficha fecha
   às 20h; o schema do site diz 21h. Os três perfis do pacote local estavam
   "aberto" no momento da busca. Decidir qual é o horário real de atendimento
   e usar o mesmo nos dois lugares.
4. **Cadastrar na ficha os serviços que o site já sustenta**: Coltec, CEFET-MG,
   Colégio Militar, Cálculo. E publicar como post da ficha os três artigos de
   prova de admissão, que são o que mais produz clique hoje.
5. **Não criar página por bairro.** Dado de cinco ferramentas contra. O que
   captura "perto de mim" é a ficha, e ela está invisível por verificação,
   não por conteúdo.
6. **Schema**: já está correto para o caso (`LocalBusiness` com
   `GeoCircle`, `areaServed` com as sete cidades, `sameAs` para a ficha pelo
   CID e para o Superprof, `FAQPage`, sem `review`). Nada a acrescentar com
   dado. O que falta no schema é só o horário batendo com a ficha.

### SEO nacional e GEO, Brasil online

7. **Diferenciar a home de `/aulas-de-matematica-online`.** *(decisão da
   dona do projeto; proposta pronta abaixo)* A página online nunca indexou e
   o único "online" de peso no site está no título da home. A exceção do
   `ciclo-1.md` libera a página não indexada, mas o conflito está no título
   da home. Proposta: a home deixa de disputar "online" e passa a ser a
   página da professora e das duas modalidades, e a página online fica com o
   termo. Título proposto para a home:
   `Aulas particulares de matemática — online para todo o Brasil e presencial em BH | Taciane Andrade`.
   Risco declarado: a home tem a melhor taxa de clique do site (4 cliques em
   110). O teste é o Ciclo 2: se a home cair e a online não entrar, volta.
8. **Corrigir a leitura errada de preço pelas IAs.** No hub e nas páginas de
   ensino superior, onde se diz que o valor sai após a diagnóstica, dizer na
   mesma frase que fundamental e médio têm valor publicado, R$ 45 online.
   Hipótese: a IA generalizou a exceção. Mudança pequena, em sete páginas
   que têm 5 impressões somadas, sem linha de base a proteger.
9. **Reposicionar a página de reforço para "aulas de reforço".** *(decisão
   da dona do projeto)* Título e H1 hoje usam "reforço escolar de matemática",
   que o Search Console mostra na posição 50. As variantes com "aulas de
   reforço" estão entre 3,5 e 6. A página tem 36 impressões e zero clique:
   quase sem linha de base a proteger.
10. **Bing**: cadastro feito, 2 URLs em 10 dias. Conferir no Bing Webmaster
    Tools se o sitemap foi enviado e esperar. O IndexNow de 23/09 já enviou as
    33 URLs. Nada de conteúdo a fazer.
11. **Fase 3 completa no Ciclo 2**, com Gemini e Perplexity e com a higiene:
    neste ciclo 3 das 4 citações do ChatGPT saíram contaminadas pelo nome da
    professora na mesma conversa.
12. **Analytics**: o gatilho combinado foi atingido pela terceira vez
    (artigo de preço, 131 impressões, zero clique). A decisão de 11/09 foi
    não instalar. Volta como decisão, não como recomendação nova.

### O que medir no Ciclo 2 (a partir de 03/11)

| Pergunta | Linha de base de hoje |
|---|---|
| O cluster de contratação na posição 8 a 11 produziu clique? | ~80 impressões, 0 cliques |
| `/aulas-de-matematica-online` entrou? | fora, 3 pedidos |
| O perfil verificado apareceu no Maps e no pacote local? | ausente nas 3 consultas |
| Os artigos de prova de admissão produziram conversa? | 216 impressões, 6 cliques, 0 conversas atribuídas |
| A Visão geral por IA passou a citar o preço certo? | diz que o site não publica |
| Celular continua com um quarto da taxa de clique do computador? | 0,71% contra 3,03% |
| Página por série: alguma consulta com ano escolar apareceu? | 0 no Search Console |
