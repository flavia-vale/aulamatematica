# Pendências de indexação

O Google não descobre página nova sozinho em tempo hábil, e **não participa do
IndexNow**. Cada página precisa de um pedido manual em Search Console →
**Inspeção de URL → Solicitar indexação**. Cota de ~10 a 12 por dia.

Evidência de que isto importa, do projeto de origem: das **15 páginas pedidas na
mão, 15 indexaram**. Das **10 nunca pedidas, nenhuma**. A causa não era
qualidade de conteúdo — era ninguém ter pedido.

## Duas regras

1. **Só peça depois que a mudança estiver no ar.** Pedir antes faz o Google ler
   a versão velha e o pedido é gasto à toa. Aconteceu com quatro páginas no
   mesmo dia, no projeto de origem.
2. **Toda página nova ou reescrita entra nesta lista na mesma entrega que a
   cria.** `npm run check` falha se uma página indexável não estiver aqui.

Bing, Yandex e DuckDuckGo não precisam de nada disso — `npm run indexnow`
resolve os três de uma vez.

## Lista

Domínio verificado no Search Console e site no ar em Cloudflare Workers.
**As 11 páginas foram pedidas**: 9 em 04/09 e as 2 últimas do blog em 06/09,
quando a cota diária renovou.

Falta preencher a coluna `Indexada?` — conferir em Inspeção de URL alguns dias
após cada pedido. É essa contagem que responde se uma página não indexou por
qualidade ou por ninguém ter pedido.

| Rota | Pedido em | Indexada? | Último rastreamento |
|---|---|---|---|
| `/` | 2026-09-04 | **sim** | 04/09 |
| `/aulas-particulares-matematica-bh` | 2026-09-04, **repetida em 2026-09-06** | **sim** | 04/09 |
| `/aulas-de-matematica-online` | 2026-09-04 | **não** | — |
| `/reforco-escolar-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/enem-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/sobre` | 2026-09-04, **repetida em 2026-09-06** | **sim** | 04/09 |
| `/contato` | 2026-09-04, **repetida em 2026-09-06** | **sim** | 04/09 |
| `/blog` | 2026-09-04 | **sim** | 05/09 |
| `/blog/como-ajudar-filho-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/blog/como-estudar-matematica-enem` | 2026-09-06 | não | — |
| `/blog/por-que-matematica-parece-dificil` | 2026-09-06 | **sim** | 05/09 |

**9 de 11 indexadas em dois dias.** Rápido para um domínio novo.

`/404` não entra: é `noindex` por definição.

## Leitura de 2026-09-06

**A hipótese do projeto de origem se confirmou aqui.** Lá, das 15 páginas
pedidas na mão, 15 indexaram; das 10 nunca pedidas, nenhuma. Aqui, 9 das 11
pedidas entraram em dois dias.

Um detalhe que refina a leitura: `/blog/por-que-matematica-parece-dificil` foi
rastreada em **05/09**, um dia **antes** do pedido manual de 06/09. Ou seja,
o sitemap e o IndexNow também trazem descoberta — o pedido manual acelera,
mas não é o único caminho.

**As duas que faltam**

- `/blog/como-estudar-matematica-enem` — pedida em 06/09. Normal ainda não ter
  entrado; é fila.
- `/aulas-de-matematica-online` — **pedida em 04/09, junto com as que
  entraram.** É a única de prioridade 1 fora. Sem causa aparente: tem
  canonical, não é `noindex`, está no sitemap e no `llms.txt`. Repetir o
  pedido e observar.

## O item "não indexada" NÃO é problema

O Search Console lista 1 página em **"Página alternativa com tag canônica
adequada"**: `http://aulasdematematicabh.com.br/` — repare no **http**, sem S.

Isso é o sistema funcionando: o Google encontrou a versão HTTP, viu que ela
aponta por canonical para a HTTPS, e a excluiu corretamente. A própria
palavra "adequada" no rótulo diz que o Google aprova.

**Não clicar em "Validar correção" e não tentar consertar.** Não há o que
corrigir.

## Reindexar depois das mudanças de 06/09

Os rastreamentos são de 04 e 05/09 — **anteriores às mudanças publicadas em
06/09**. O Google tem a versão antiga em cache.

**Deploy conferido no ar em 06/09**, antes de pedir: `priceRange` já é
`R$45–R$150`, o `geoMidpoint` já traz latitude e longitude reais, e
`/aulas-particulares-matematica-bh` já serve o título de presencial. A regra 1
desta página foi cumprida.

### A leva planejada, e o que a cota permitiu

A cota do dia já estava parcialmente gasta: `/blog/como-estudar-matematica-enem`
e `/blog/por-que-matematica-parece-dificil` foram pedidas na manhã de 06/09.
Sobraram três pedidos.

| Rota | Prioridade | Pedida em 06/09? | Motivo |
|---|---|---|---|
| `/aulas-particulares-matematica-bh` | 1 | **sim** | Mudou título **e** descrição, de online para presencial. Na prática é outra página. |
| `/aulas-de-matematica-online` | 1 | **não — fila** | Pedida em 04/09 e nunca indexada, sozinha entre as de prioridade 1. |
| `/sobre` | 2 | **sim** | Ganhou preço, depoimentos e foto. Título e descrição inalterados. |
| `/contato` | 2 | **sim** | Idem. |
| `/` | 2 | **não — fila** | Idem. |
| `/enem-matematica` | 2 | **não — fila** | Idem — e a sazonalidade sobe agora. |
| `/reforco-escolar-matematica` | 2 | **não — fila** | Idem. |

### Fila de 07/09 — pedir nesta ordem

1. `/aulas-de-matematica-online` — **é a única de prioridade 1 pendente**, e a
   única página do site que nunca indexou. Vai na frente de tudo.
2. `/` — a página que mais recebe link e a que o Google usa como âncora do site.
3. `/enem-matematica` — sazonalidade subindo; pedir em novembro é tarde.
4. `/reforco-escolar-matematica`.

> **Erro de ordenação a não repetir.** A leva de 06/09 gastou dois dos três
> pedidos disponíveis em `/sobre` e `/contato` — páginas de prioridade 2,
> **já indexadas**, cuja mudança não altera nada do que o Google exibe na
> busca. A única página do site que nunca indexou ficou para o dia seguinte.
> Com cota escassa, a ordem de execução tem que ser a ordem de prioridade,
> não a ordem da tabela. Nas próximas levas, listar as páginas **na sequência
> exata de execução** e dizer explicitamente onde cortar se a cota acabar.

### O que ficou de fora, de propósito

`/blog` e os três posts receberam apenas uma seção de CTA e um link interno
cada. Não muda o que o Google mostra na busca, e o re-rastreamento natural dá
conta. **Cota gasta aqui é cota tirada de quem precisa.**

### O relatório de Snippets de avaliação não precisa de ação

A marcação `review`/`aggregateRating` saiu do `main` no commit `6a83d1c` e
não existe em nenhuma página compilada — há varredura permanente contra ela
(`avaliacao-no-schema`). O relatório reflete o rastreamento anterior e zera
sozinho. **Não clicar em "Validar correção":** os pedidos acima já forçam o
rastreamento que limpa o relatório.

### A regra que este episódio confirma

A regra 1 do topo desta página quase foi quebrada: a pergunta "quais devo
reindexar?" veio antes de o merge estar no ar. Conferir o HTML publicado
(um `curl` procurando a mudança) leva segundos e é a única prova de que o
pedido não será gasto à toa.
