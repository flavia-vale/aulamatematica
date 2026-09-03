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

Estado inicial: **nenhuma página foi pedida ainda**, porque a propriedade no
Search Console ainda não foi verificada. Assim que for, estes 11 pedidos são a
ação de maior retorno por minuto de todo o ciclo (cabem em um dia).

| Rota | Pedido em | Indexada? | Observação |
|---|---|---|---|
| `/` | — | — | prioridade 1 |
| `/aulas-particulares-matematica-bh` | — | — | prioridade 1 |
| `/aulas-de-matematica-online` | — | — | prioridade 1 |
| `/reforco-escolar-matematica` | — | — | prioridade 1 |
| `/enem-matematica` | — | — | prioridade 1 |
| `/sobre` | — | — | prioridade 2 |
| `/contato` | — | — | prioridade 2 |
| `/blog` | — | — | prioridade 2 |
| `/blog/como-ajudar-filho-matematica` | — | — | prioridade 2 |
| `/blog/como-estudar-matematica-enem` | — | — | prioridade 2 |
| `/blog/por-que-matematica-parece-dificil` | — | — | prioridade 2 |

`/404` não entra: é `noindex` por definição.
