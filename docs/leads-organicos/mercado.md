# Tamanho de mercado (Google Trends)

Primeira rodada da Fase 4, adiantada — o site acabou de nascer, mas as
dúvidas já tinham saído da Fase 3 (citação por IA) e não custava nada medir
em paralelo à espera do Search Console. Brasil, 12 meses
(06/09/2025–06/09/2026), Google Trends + Planejador de Palavras-chave.

> **Ler nesta ordem, e saber o que cada ferramenta mede.** O Trends mede
> popularidade **relativa ao longo do tempo** — serve para sazonalidade e
> movimento, não para tamanho. O Planejador mede **volume absoluto estimado**
> — serve para tamanho, não para tendência semanal. Onde as duas discordam
> sobre tamanho, **o Planejador vence**. A seção 1 abaixo registra uma
> leitura minha que morreu exatamente assim.

## 1 · Volume alto e intenção de compra são coisas diferentes

### Correção — uma leitura minha, derrubada pelo instrumento certo

Na primeira passada eu li o Trends e escrevi que **"`reforço de matemática`
domina o ano inteiro"**. O Planejador mostra o contrário: `reforço de
matemática` está na **faixa mais baixa** (100 – 1 mil/mês), enquanto
`aula particular de matemática`, `professor particular de matemática` e
`matemática enem` estão uma faixa acima (1 mil – 10 mil/mês).

O erro foi de instrumento, não de leitura: **o Trends nunca disse tamanho.**
Ele mostra popularidade relativa normalizada, e um termo de volume modesto
mas constante desenha uma linha mais alta que termos de volume maior porém
mais difusos. Volume absoluto se pergunta ao Planejador. Fica registrado.

### O que o Planejador mostrou

| Termo | Buscas/mês | Concorrência | Lance topo (máx.) |
|---|---|---|---|
| `professor particular de matemática` | 1 mil – 10 mil | Média | **R$ 7,40** |
| `aula particular de matemática` | 1 mil – 10 mil | Média | R$ 5,96 |
| `matemática enem` | 1 mil – 10 mil | **Baixa** | R$ 2,59 |
| `professor de matemática online` | 100 – 1 mil | Média | **R$ 7,40** |
| `reforço de matemática` | 100 – 1 mil | Média | R$ 5,34 |
| `reforço escolar de matemática` | 100 – 1 mil | Baixa | R$ 5,13 |
| `aula de matemática online` | 100 – 1 mil | Média | R$ 4,38 |

As faixas são largas de propósito (conta sem histórico de gasto em anúncio):
"1 mil – 10 mil" é uma variação de 10×. Servem para separar ordens de
grandeza, não para ranquear dentro da mesma faixa.

### Volumes exatos — export "ideias de palavras-chave"

O export de ideias (79 termos, ago/2025 – jul/2026) traz número em vez de
faixa. **O Planejador agrupa variantes próximas**: termos com volume,
concorrência e lance idênticos são o mesmo grupo por baixo. Agrupados:

| Cluster (variantes agrupadas) | Buscas/mês | Concorr. | Lance topo |
|---|---|---|---|
| `professor particular de matemática` (6 formas) | **5.000** | Médio (62) | **R$ 1,71 – 7,40** |
| `aula particular de matemática` (4 formas) | **5.000** | Médio (52) | R$ 1,39 – 5,96 |
| `professor particular matemática` (sem "de", 3 formas) | 500 | Médio (57) | R$ 1,97 – 8,81 |
| `aula particular matemática` (sem "de", 3 formas) | 500 | Médio (38) | R$ 1,40 – 7,60 |
| **`professora particular de matemática`** (2 formas) | **500** | **Baixo (32)** | R$ 1,57 – 5,06 |
| `reforço escolar matematica` | 500 | Baixo (27) | R$ 1,34 – 6,56 |
| `reforço matematica` | 500 | Baixo (31) | R$ 1,53 – 5,66 |
| `aulas de reforço matemática` (2 formas) | 500 | Médio (51) | R$ 1,68 – 5,67 |
| `aula de reforço de matematica` | 500 | Médio (35) | R$ 1,51 – 6,38 |
| `aula particular de matemática valor` (3 formas) | 500 | Baixo (32) | R$ 1,14 – 3,10 |

**Os dois maiores empatam em 5.000/mês.** A diferença não é volume, é
intenção: o cluster `professor` tem índice de concorrência 62 contra 52, e
teto de lance R$ 7,40 contra R$ 5,96 — **anunciantes pagam ~24% mais pela
forma "professor"** do que pela forma "aula". Corrige o que escrevi antes:
`professor particular` não tem mais volume, tem mais valor por clique.

**A família "reforço" soma ~500/mês por cluster — uma ordem de grandeza
abaixo.** Confirma e fecha a correção da leitura do Trends.

### `professora`, no feminino, é um nicho de verdade

`professora particular de matemática`: **500/mês com concorrência Baixa
(índice 32)** — o menor índice entre todos os clusters de intenção de
contratação. Um décimo do volume da forma genérica, mas com uma disputa
muito menor.

E é literalmente exato para esta operação. Some-se a isso o que a Fase 3 já
tinha mostrado: quando as IAs listam professoras da UFMG, elas listam
*professoras* — Vanessa Marçal, Rafaella, Aline, Julia, Thais. A forma
feminina é como esse segmento do mercado é de fato descrito.

500 buscas/mês com concorrência baixa é um alvo mais realista para um site
novo do que 5.000 com concorrência média.

### Preço: a política atual está certa, e o dado sustenta

Cluster `aula particular de matemática valor`: 500/mês, mais ~18 variantes
de 50/mês (`preço`, `quanto custa`, `valor médio`). A demanda por preço
existe.

**Mas os lances são os mais baixos do conjunto: R$ 1,14 – 3,10**, contra
R$ 1,71 – 7,40 de quem procura professor. Quem pesquisa preço vale menos
para o anunciante — é comparador, não comprador. A decisão já registrada no
site (não publicar valor, tratar na conversa, com a FAQ explicando que o
valor sai após a diagnóstica) **é confirmada pelo dado**, não contrariada.
A regra `preco-sem-fonte` do `npm run check` continua fazendo sentido.

### Cálculo: os maiores lances do conjunto, e não é para nós

`aula particular cálculo` (R$ 1,27 – **10,02**), `professor de calculo
particular` (R$ 2,27 – 10,00), `aula particular de cálculo` (R$ 2,97 –
9,41). Os três maiores tetos de lance de toda a tabela — e todos com apenas
50 buscas/mês e concorrência Alta.

Bate com o que a Fase 3 mostrou (professores de cálculo cobrando R$ 80–140/h
no Superprof). É o segmento mais valioso do mercado de aula particular de
exatas — **e é outra linha de serviço**, de ensino superior, não o público
de fundamental/médio que o site atende. Registrado como observação, não como
recomendação.


### O achado que sobrevive, e fica mais forte

**O lance de anúncio é o melhor sinal de intenção de compra que temos** —
é quanto um concorrente aceita pagar por um clique daquele termo. E ele
reorganiza tudo:

- **`matemática enem`: volume alto, lance mais baixo da tabela (R$ 2,59),
  concorrência Baixa.** Ninguém paga caro por esse clique. As consultas
  relacionadas do Trends explicam: `matemática enem pdf`, `questões enem
  matemática`, `gabarito enem 2025`, `prova enem`. É aluno atrás de
  **material gratuito**, não família atrás de professor.
- **`reforço de matemática`: mesma armadilha**, já vista no Trends —
  as relacionadas são `atividade de matemática`. Volume baixo *e* intenção
  errada.
- **`professor particular de matemática`: faixa de volume mais alta E o
  maior lance da tabela.** É o único termo do conjunto que combina as duas
  coisas. Ironicamente é o termo cujas consultas relacionadas no Trends
  vieram contaminadas (problemas de matemática com a palavra "professor"
  no enunciado) e que eu tinha descartado como ruído.

**A conclusão que atravessa as duas ferramentas:** os termos de maior volume
deste mercado são de gente procurando material de estudo grátis. Quem
contrata professor usa termos de volume menor e clique mais caro.

### Candidato à decisão de título do Ciclo 1

O título da home hoje é *"Aulas particulares de matemática online — Reforço
escolar com professora da UFMG"*. Ele usa "aulas particulares" (R$ 5,96) e
"reforço escolar" (R$ 5,13), e qualifica com "online" — e a qualificação
"online" custa uma ordem de grandeza de volume (`aula particular de
matemática` está em 1 mil–10 mil; `aula de matemática online`, em 100–1 mil).

A forma **`professor particular de matemática`** não aparece com destaque em
nenhuma página. É a candidata mais forte para o Ciclo 1 — **mas não se mexe
agora**: com ~30 dias de Search Console saberemos por quais consultas o site
já aparece de fato, e trocar título antes disso é jogar fora a linha de base.

## 2 · Termos com "BH" têm zero interesse mensurável — em qualquer estado, em qualquer ferramenta

Comparação (`aula de matemática online`, `professor de matemática online`,
`aula particular de matemática bh`, `professor particular de matemática
belo horizonte`):

**As duas variantes com "BH"/"Belo Horizonte" ficaram em zero em todas as 53
semanas do ano, e em todos os 27 estados, sem uma única exceção.** É o
resultado mais conclusivo que o Trends consegue dar: ninguém, em lugar
nenhum do Brasil, digitou essas frases num volume que o Google sequer
registrasse.

**Terceira confirmação, agora pelo Planejador.** O gerador de ideias do
próprio Google devolveu quatro variantes com **Porto Alegre** (50/mês cada)
e **nenhuma com Belo Horizonte ou BH** em 79 termos sugeridos. Três
instrumentos independentes — série temporal do Trends, mapa do Trends e
gerador de ideias do Planejador — concordam.

E repare na escala: mesmo a cidade que *aparece* tem só **50 buscas/mês**.
Busca de aula particular qualificada por cidade é um mercado minúsculo em
qualquer lugar do Brasil.

As variantes "online" têm volume também baixo, mas **não zero**: um pico
isolado de 100 em agosto/2026 para `aula de matemática online`, e presença
recente sustentada (10-14) nas duas últimas semanas para ambas. Regionalmente,
concentram-se em São Paulo, Rio de Janeiro e Ceará — os estados de maior
população/tráfego de internet, como esperado.

**Leitura para o Ciclo 1:** isto não prova que a home deva abandonar "BH" no
título — prova que **ninguém chega até o site digitando a combinação
completa "matemática" + "BH"/"Belo Horizonte"**. Quem baixa esse tipo de
página vem por outro caminho (o nome da marca, boca a boca, ou os termos
genéricos "online"). Reduzir a âncora geográfica no título da home é uma
mudança de baixo risco à luz deste dado — mas antes de mexer, checar o que a
aba Páginas do Search Console mostrar sobre a própria home, quando houver
~30 dias de leitura.

## 3 · `matemática enem`: sazonalidade extrema e previsível

Série solo de 12 meses: baixa e estável a maior parte do ano (10-20 em
escala de 100), sobe gradualmente de setembro a outubro/2025 (15→29), e
**explode nas duas semanas do ENEM em novembro** (94 e 100) — depois volta
à base em dezembro. Mesmo padrão deve se repetir em nov/2026.

**Ação concreta, com data**: a página `/enem-matematica` precisa estar
indexada, atualizada e com os pedidos de indexação em dia **antes de
outubro**, não em novembro — a subida de interesse começa 6 a 8 semanas
antes do pico. Pedir indexação na própria semana da prova é tarde: o volume
de busca já está caindo quando o Google processaria o pedido.

Termos relacionados em alta (`relatedEntities`): "Proporcionalidade" (+70%)
e "Interpretação" (+70%) de enunciado. **Conferido no conteúdo já
publicado**: a página já cobre razão/proporção como tema #1 (~15% das
questões) e já menciona interpretação de enunciado na FAQ. Não há lacuna
aqui — o conteúdo já está alinhado com o que sobe perto da prova.

**Ressalva de intenção (ver seção 1):** o pico de novembro é grande, mas o
lance de R$ 2,59 e a concorrência Baixa dizem que boa parte dessa busca é
aluno atrás de prova e gabarito, não família contratando aula. A página de
ENEM provavelmente traz **muita impressão e pouca conversa** — e é
exatamente esse o par de números que a pergunta 5 da Fase 2 vai avaliar no
Ciclo 1. Não confundir tráfego de novembro com demanda por aula.

## 4 · Geografia do ENEM: interesse é maior fora do eixo Sul/Sudeste

`matemática enem` por estado é **quase o inverso** do que se esperaria de
uma operação com sede em MG: os estados com maior interesse relativo são
majoritariamente Norte/Nordeste — Piauí (100), Ceará (80), Pará (79),
Paraíba (77), Sergipe (77) — enquanto São Paulo (15), Santa Catarina (15) e
Paraná (16) estão entre os mais baixos do país. Minas Gerais e Rio de
Janeiro ficam no meio (30).

Leitura mais provável: em estados com mais acesso a escola particular e
cursinho presencial, a busca online por preparação de ENEM é menor porque já
tem cobertura offline; onde essa cobertura é mais escassa, a busca online
cresce. Como o serviço é 100% online nacional, **a página de ENEM não deveria
ser escrita pensando só no aluno de MG** — o público real mais provável, por
volume de busca, é de fora do eixo Sul/Sudeste.

## O que fica para o Ciclo 1 (com dado do Search Console)

- Confirmar com dado próprio (não só Trends) se a home realmente perde por
  ancorar demais em "BH" no título.
- Rever se `/reforco-escolar-matematica` deveria mirar um termo com mais
  intenção de compra do que a frase que já é seu próprio H1 — os dois termos
  da família "reforço" estão na faixa baixa de volume.
- Avaliar `professor particular de matemática` (mesmo volume da forma "aula",
  porém ~24% mais caro por clique) e `professora particular de matemática`
  (10× menos volume, mas a menor concorrência do conjunto e exato para esta
  operação) como formas a destacar em algum título — contra o que o Search
  Console mostrar que já funciona.
- **Duas linhas com evidência suficiente para congelar** (ver
  [linhas-congeladas.md](linhas-congeladas.md)): páginas por bairro/cidade e
  páginas por série. Decisão da dona do projeto.
- Calendarizar a atualização/indexação de `/enem-matematica` para
  setembro-outubro, não novembro.
