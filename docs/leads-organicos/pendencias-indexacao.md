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

| Rota | Pedido em | Indexada? | Observação |
|---|---|---|---|
| `/` | 2026-09-04 | — | prioridade 1 |
| `/aulas-particulares-matematica-bh` | 2026-09-04 | — | prioridade 1 |
| `/aulas-de-matematica-online` | 2026-09-04 | — | prioridade 1 |
| `/reforco-escolar-matematica` | 2026-09-04 | — | prioridade 1 |
| `/enem-matematica` | 2026-09-04 | — | prioridade 1 |
| `/sobre` | 2026-09-04 | — | prioridade 2 |
| `/contato` | 2026-09-04 | — | prioridade 2 |
| `/blog` | 2026-09-04 | — | prioridade 2 |
| `/blog/como-ajudar-filho-matematica` | 2026-09-04 | — | prioridade 2 |
| `/blog/como-estudar-matematica-enem` | 2026-09-06 | — | prioridade 2 |
| `/blog/por-que-matematica-parece-dificil` | 2026-09-06 | — | prioridade 2 |

`/404` não entra: é `noindex` por definição.

"Indexada?" se preenche olhando de novo em Inspeção de URL daqui a alguns
dias — o pedido não é instantâneo, é fila.
