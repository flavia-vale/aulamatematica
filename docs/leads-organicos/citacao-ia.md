# Citação por IA — medição manual

Mensal, ~20 minutos. Não existe ferramenta: você pergunta e anota.

No projeto de origem esse foi **o canal que mais trouxe cliente** — 43% dos
cadastros vieram do ChatGPT com apenas 18% das visitas, enquanto o Google trazia
70% das visitas.

## Antes de começar — higiene da medição

Três rodadas, três linhas contaminadas. **Faça esta conferência a cada consulta,
não uma vez por sessão:**

- [ ] Janela **anônima**, sem login, em todas as quatro superfícies.
- [ ] No ChatGPT: memória desligada, ou conta deslogada. Contaminou duas vezes
      seguidas mesmo parecendo neutra.
- [ ] No Gemini: **conversa nova a cada consulta**. O contexto da anterior vaza
      e muda o papel que o modelo assume.
- [ ] Cole a consulta **sozinha**, sem pergunta de acompanhamento antes.
- [ ] Se a resposta mencionar você, seu curso, sua cidade ou seu projeto: a
      linha está contaminada. Marque e refaça.

Linha contaminada não é lixo — os concorrentes que ela nomeia continuam
valendo. O que não vale é o "citou / não citou" entrar na série histórica.

## Protocolo

**7 consultas fixas × 4 superfícies.** Sempre as mesmas perguntas, sempre na
mesma ordem, sempre em aba anônima (sessão logada personaliza a resposta e
contamina a série).

Superfícies: **ChatGPT · Gemini · Perplexity · resumo de IA do próprio Google**.

As sete consultas, adaptadas para esta operação:

| # | Tipo | Consulta |
|---|---|---|
| 1 | marca sozinha | `Aulas de Matemática BH` |
| 2 | marca + preço | `quanto custa aula com a professora Taciane Andrade de matemática` |
| 3 | categoria, como o cliente chama | `professor particular de matemática online` |
| 4 | consulta de lista | `melhores professores particulares de matemática online no Brasil` |
| 5 | o problema, em linguagem de cliente | `meu filho está indo mal em matemática no 9º ano, o que fazer` |
| 6 | o diferencial mais específico | `aula particular de matemática com professora da UFMG` |
| 7 | o maior concorrente | `Superprof matemática vale a pena` |

## Planilha

**Já está pronta em [`citacao-ia-planilha.csv`](citacao-ia-planilha.csv)** — 28 linhas,
com as consultas e as superfícies preenchidas. Abra no Google Sheets ou no Excel
e preencha as colunas vazias. Duplique o bloco a cada ciclo, mudando a coluna
`Ciclo`.

Uma linha por consulta × superfície. As colunas que você preenche:

| Consulta | Superfície | Citou o site? | Acertou os fatos? | **Quem citou no lugar** |
|---|---|---|---|---|

**A última coluna é a mais valiosa.** No projeto de origem ela revelou 19
concorrentes que o Search Console nunca mostrou — as duas listas de concorrentes
eram quase disjuntas. Monte as duas: a do Search Console e a das IAs.

Nos fatos, confira especificamente: o nome da professora, "licencianda pela
UFMG" (e não "formada"), o atendimento 100% online para todo o Brasil, e a aula
diagnóstica gratuita de 30 minutos.

## Duas armadilhas que só a medição na mão pega

**Marca ambígua vira outra coisa.** "Aulas de Matemática BH" é uma descrição
genérica antes de ser um nome — o risco concreto aqui é a consulta 1 devolver
listas de cursinhos e escolas de Belo Horizonte sem citar o site. No projeto de
origem, três das quatro IAs devolviam calçado infantil quando perguntadas pelo
nome da marca. Nenhuma ferramenta de SEO conta isso.

**Página que não existe de forma citável vira alucinação.** Perguntado sobre a
metodologia da empresa, o resumo de IA do Google *inventou* uma metodologia com
pilares nomeados e citou fontes falsas. Se a consulta 5 ou 6 devolver uma
descrição errada do método de trabalho, o conserto é **publicar a página real**,
não reclamar. O `llms.txt` e as páginas de FAQ existem para isso.

## Esta medição não depende do site estar no ar

Pelo contrário: rodar a Fase 3 **antes** do domínio propagar produz a linha de
base mais valiosa que existe — o retrato do "antes". Daqui a três meses ela é a
única prova de que alguma coisa mudou. São 20 minutos, e podem ser hoje.

## Histórico

| Ciclo | Data | Citações | Superfícies que citam | Observação |
|---|---|---|---|---|
| 0 | 2026-09-03 | 0 de 16 | 0 de 4 | consultas 1, 3, 5 e 6; site ainda não publicado; 4 linhas contaminadas |

### Ciclo 0 · consulta 1 — `Aulas de Matemática BH`

Quatro superfícies, zero citações. **O site ainda não está no ar, então isso era
o esperado** — o valor desta linha é ser a linha de base do "antes". O que ela
revela além do zero:

**A marca é ambígua, como previsto.** Nenhuma das quatro superfícies leu "Aulas
de Matemática BH" como nome de alguém. As quatro leram como descrição genérica e
devolveram lista de professores de Belo Horizonte. O risco levantado ao montar
esta consulta se confirmou na primeira medição.

**Quem vence essa consulta não são sites — são fichas do Google.** As respostas
mais ricas (resumo de IA do Google, Gemini) são feitas de perfis do Google
Business Profile: endereço, bairro, telefone, nota e número de avaliações. O
ChatGPT lista por bairro. Perplexity vai direto para marketplace. **Nenhuma
superfície recomendou um site institucional.** Um site bem otimizado, sozinho,
provavelmente não ganha esta consulta.

**"BH" no nome ancora num mercado presencial.** As quatro superfícies
interpretaram a consulta como aula presencial, por bairro. Nenhuma ofereceu aula
online de alcance nacional. O serviço é 100% online para todo o Brasil — há uma
tensão real entre o nome e o produto, e ela aparece já na primeira medição.

**O diferencial "UFMG" não é exclusivo.** O resumo de IA do Google cita Vanessa
Marçal, "formada pela UFMG", e um anúncio no Superprof de "estudante de
matemática na UFMG, 4º período, R$35/h" — posicionamento idêntico, preço
declarado. A consulta 6 (`aula particular de matemática com professora da UFMG`)
ficou muito mais interessante do que parecia.

Concorrentes e preços coletados: **[concorrentes.md](concorrentes.md)**.

### Ciclo 0 · consulta 5 — `meu filho está indo mal em matemática no 9º ano, o que fazer`

A consulta que eu tinha chamado de decisiva. Zero citações de novo — mas o
resultado **não é o que eu tinha previsto, em nenhuma das duas direções**.

**Eu tinha montado um binário errado.** Disse que ou algum site de professor
seria citado (e o caminho seria conteúdo), ou tudo viria zerado (e o site seria
o canal errado). Veio uma terceira coisa: **nesta consulta ninguém é
recomendado.** Gemini, Perplexity e o resumo do Google não nomearam um único
professor, centro, marketplace ou site de serviço. Deram conselho, e só.

**Mas conteúdo *é* citado — só não o nosso.** As três linhas limpas nomearam:

| Citado | Por |
|---|---|
| Khan Academy | Gemini, Perplexity |
| GeoGebra | Gemini |
| YouTube: Matemática Rio, Ferretto, Gis com Giz, Equaciona | Perplexity |
| nenhuma fonte | resumo de IA do Google |

Isto muda a leitura das três consultas anteriores. Nas de diretório (1, 3, 6) o
concorrente é marketplace e ficha do Google. **Aqui o concorrente é conteúdo
gratuito** — e conteúdo gratuito é justamente o formato que o site tem como
competir. É a primeira das quatro consultas em que existe um caminho plausível
para ser citado.

Plausível, não provado: nada garante que um blog de professora particular entre
numa lista onde hoje estão Khan Academy e canais com milhões de inscritos. Mas
é a primeira vez que o formato do vencedor coincide com o formato do ativo.

**O conselho das quatro superfícies é o conteúdo que o site já tem.** Diagnosticar
a lacuna antes de avançar; a base do 7º e 8º ano que estourou no 9º; sessões
curtas e frequentes em vez de maratona; não dizer "eu também era ruim em
matemática". Esta última é literalmente a frase de abertura do artigo
`/blog/por-que-matematica-parece-dificil`. O alinhamento existe; a indexação é
que não.

**E apareceu um substituto para o diferencial que a consulta 6 derrubou.** O
ChatGPT chegou a redigir a mensagem que um pai deveria mandar antes de contratar:

> *"Antes de simplesmente acompanhar a matéria atual, gostaria que você fizesse
> uma avaliação para identificar possíveis lacunas dos anos anteriores. Você
> trabalha dessa forma?"*

E completou: *"eu não contrataria alguém que respondesse apenas 'sim, posso
ajudá-lo com as matérias da escola'."*

Isso é a **aula diagnóstica gratuita** que o site já oferece, e que aparece em
todos os CTAs. O diferencial defensável não é a credencial — é o método de
diagnosticar antes de acompanhar. É o que as IAs dizem a um pai para procurar.

> **Terceira contaminação seguida do ChatGPT.** A memória atravessou as
> consultas: *"Como você estava procurando recentemente professor particular de
> Matemática…"*. E os nomes só apareceram depois de uma pergunta de
> acompanhamento — que o protocolo proíbe. Linha fora da série. Achado que
> sobrevive: HENRIQUE, licenciado em Matemática pela UFMG, cobra **R$100/h** com
> 98 avaliações nota 5, bem acima da faixa que a consulta 6 atribuiu à
> credencial. A credencial não sustenta preço; **reputação acumulada sustenta**.

### Ciclo 0 · consulta 6 — `aula particular de matemática com professora da UFMG`

A consulta do diferencial. Zero citações nas quatro — e as duas linhas limpas
(Google e Perplexity) são as que doem.

**O diferencial não é diferencial.** As quatro superfícies nomearam **doze
professores com vínculo UFMG**, vários com preço. Duas com o posicionamento
idêntico ao do site: **Julia Mendonça Pires**, "graduanda em Licenciatura em
Matemática na UFMG, professora particular desde 2018", e **Thais**, "estudante
de Matemática da UFMG", R$50/h. "Professora da UFMG" não distingue ninguém num
mercado onde a UFMG forma turmas inteiras de licenciandos todo ano.

**O resumo de IA do Google precificou a credencial.** Não a pessoa — a
credencial:

| Perfil | Faixa |
|---|---|
| Estudante de graduação da UFMG | **R$ 35–50 / h** |
| Professora formada pela UFMG | R$ 40–70 / h |
| Pós-graduada ou mestranda | R$ 70–120 / h |

O posicionamento atual do site — "licencianda pela UFMG" — cai na **primeira
linha, a mais barata**. Anunciar a credencial coloca a operação na faixa de
entrada por construção. Isso é observação de mercado, não recomendação: quem
decide preço e posicionamento é a dona do projeto.

**E o mercado busca esse filtro dentro do marketplace.** O Google instruiu
literalmente: "Superprof é o caminho mais rápido para filtrar por professoras da
UFMG — digite UFMG na barra de pesquisa interna". A demanda pelo diferencial
existe e é atendida lá dentro.

**Duas linhas contaminadas.** ChatGPT, segunda vez seguida, ainda logado. Gemini
respondeu como se quem perguntasse quisesse **anunciar** aulas, não contratar —
contexto da conversa anterior vazando. Ambas fora da série; os nomes que
trouxeram seguem válidos. Ver a conferência no topo deste documento.

### Ciclo 0 · consulta 3 — `professor particular de matemática online`

Zero citações de novo, nas quatro. Mas esta consulta **não tem âncora
geográfica** — e é isso que a torna informativa.

**A hipótese do nome não se sustenta sozinha.** Tirando "BH" da consulta, o site
continua sem ser citado. Então o problema da consulta 1 não era (só) o nome
ancorar em mercado presencial.

**A razão é outra, e as duas consultas apontam para ela.** Nesta, as quatro
superfícies responderam quase exclusivamente com **marketplaces** — Superprof,
Preply, Suas Aulas Particulares, GetNinjas, Profes, OLX. Nomearam pouquíssimos
professores, e os que nomearam eram perfis *dentro* dessas plataformas. **Nenhum
site institucional de professor particular apareceu em nenhuma das quatro
superfícies, em nenhuma das duas consultas.**

Duas medições, dois formatos de vencedor, e o site não é nenhum dos dois:

| Consulta | Quem vence |
|---|---|
| 1 · `Aulas de Matemática BH` | fichas do Google Business Profile, por bairro |
| 3 · `professor particular de matemática online` | marketplaces |

Isso ainda **não é uma decisão** — são duas consultas de sete, e as que atacam
dor específica (5) e diferencial (6) são justamente onde um site tem chance de
ganhar de um marketplace. Mas já é forte o bastante para virar pergunta do Ciclo
1: *o plano depende de um canal que, nas consultas medidas até agora, não é
citado por ninguém.*

**As IAs pensam por nível de ensino.** As quatro perguntaram de volta "qual
nível?" — fundamental, médio/ENEM, ou superior. É como segmentam o mercado, e
coincide com a segmentação que as páginas do site já usam.

> **Erro de método nesta rodada.** A linha do ChatGPT saiu contaminada: a sessão
> estava logada, e ele usou o perfil de quem perguntou ("pensando no seu caso de
> Licenciatura em Matemática/UFMG") para responder como se a busca fosse por um
> professor **para a própria graduação**. Virou uma consulta de nível superior,
> não a consulta de categoria. A linha está marcada na planilha e **não deve ser
> comparada com os próximos ciclos** — refazer em aba anônima.
>
> É exatamente o risco que o protocolo antecipava, e a primeira coisa a conferir
> antes da consulta 4.
