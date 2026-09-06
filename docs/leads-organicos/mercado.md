# Tamanho de mercado (Google Trends)

Primeira rodada da Fase 4, adiantada — o site acabou de nascer, mas as
dúvidas já tinham saído da Fase 3 (citação por IA) e não custava nada medir
em paralelo à espera do Search Console. Todos os dados: Brasil, 12 meses
(06/09/2025–06/09/2026), Trends.

## 1 · O termo mais buscado não é para quem contrata professor

Comparação direta (`professor particular de matemática`, `aula particular de
matemática`, `reforço de matemática`, `reforço escolar de matemática`):

**`reforço de matemática` domina o ano inteiro** — é o único dos quatro com
volume grande e constante (picos de 60–90 em semanas normais, quase nunca
zerado). Os outros três ficam a maior parte do ano em **zero** — não é falta
de interesse, é volume abaixo do limiar que o Trends consegue medir.

O problema: as consultas relacionadas de `reforço de matemática` são quase
todas `atividade de matemática` — **gente procurando exercício/material para
imprimir ou resolver, não gente procurando contratar um professor.** Volume
alto não é sinal de lead bom aqui; é sinal de tráfego de conteúdo educativo
gratuito, que dificilmente vira aula paga.

**`reforço escolar de matemática` — a frase que já é o H1 da página
`/reforco-escolar-matematica` — está entre os mais baixos dos quatro,**
visível só nas duas últimas semanas medidas (9 e 11 em escala de 100). Isso
não significa remover a frase da página (ela ainda é a categoria certa para
humanos entenderem do que se trata), mas significa **não esperar tráfego
relevante vindo exatamente dessa frase digitada no Google.** Ela funciona
como rótulo, não como termo de busca.

`professor particular de matemática` e `aula particular de matemática`
aparecem picos isolados e recentes (fim de fev/2026, final de ago/2026),
sugerindo alguma sazonalidade de início de semestre/ano letivo, mas o volume
de base é baixo demais para afirmar isso com confiança nesta amostra.

## 2 · Termos com "BH" têm zero interesse mensurável — em qualquer estado

Comparação (`aula de matemática online`, `professor de matemática online`,
`aula particular de matemática bh`, `professor particular de matemática
belo horizonte`):

**As duas variantes com "BH"/"Belo Horizonte" ficaram em zero em todas as 53
semanas do ano, e em todos os 27 estados, sem uma única exceção.** É o
resultado mais conclusivo que o Trends consegue dar: ninguém, em lugar
nenhum do Brasil, digitou essas frases num volume que o Google sequer
registrasse.

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
  volume de intenção de compra do que a frase que já é seu próprio H1.
- Calendarizar a atualização/indexação de `/enem-matematica` para
  setembro-outubro, não novembro.
