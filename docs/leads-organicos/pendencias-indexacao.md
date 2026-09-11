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
| `/aulas-particulares-matematica-bh` | 2026-09-04 | **sim** | 04/09 |
| `/aulas-de-matematica-online` | 2026-09-04 | **não** | — |
| `/reforco-escolar-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/enem-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/sobre` | 2026-09-04 | **sim** | 04/09 |
| `/contato` | 2026-09-04 | **sim** | 04/09 |
| `/blog` | 2026-09-04 | **sim** | 05/09 |
| `/blog/como-ajudar-filho-matematica` | 2026-09-04 | **sim** | 04/09 |
| `/blog/como-estudar-matematica-enem` | 2026-09-06 | **sim** | — |
| `/blog/por-que-matematica-parece-dificil` | 2026-09-06 | **sim** | 05/09 |
| `/blog/como-escolher-professor-particular-matematica` | — | não | — |
| `/blog/quanto-custa-aula-particular-matematica` | — | não | — |
| `/blog/meu-filho-nao-aprende-matematica` | — | não | — |
| `/blog/sinais-aluno-precisa-reforco-matematica` | — | não | — |
| `/blog/lacunas-de-matematica-do-fundamental` | — | não | — |
| `/blog/aula-de-matematica-online-funciona` | — | não | — |
| `/blog/recuperacao-de-matematica-fim-do-ano` | — | não | — |
| `/blog/matematica-enem-conteudos-que-mais-caem` | — | não | — |
| `/blog/como-estudar-matematica-sozinho` | — | não | — |
| `/blog/atividades-de-matematica-para-praticar-em-casa` | — | não | — |

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
06/09**. O Google tem a versão antiga em cache. A mais crítica:

`/aulas-particulares-matematica-bh` **mudou de título e descrição**, de aula
online para aula presencial. É outra página, na prática.

Depois de confirmar que o deploy está no ar, repetir o pedido de indexação
para as páginas com mudança material — a de BH em primeiro lugar, seguida da
home, `/sobre` e `/contato`. **Nunca pedir antes de a mudança estar
publicada**: o Google leria a versão velha e o pedido seria gasto à toa.

## Leitura de 2026-09-11 (Search Console, 7 dias)

`/blog/como-estudar-matematica-enem` **entrou**: 1 impressão na posição 9.
São **10 de 11 indexadas**.

`/aulas-de-matematica-online` continua com **zero impressão**, oito dias após
o pedido de 04/09. Auditada em 11/09 e **sem defeito técnico**: HTTP 200,
canonical próprio, sem `noindex`, presente no sitemap e com 3 links internos
vindos de todas as outras páginas do site. Não é página órfã.

A causa se decide pelo **rótulo exato** da Inspeção de URL:

| Rótulo | Causa | Conserto |
|---|---|---|
| "Descoberta — não indexada no momento" | fila do Google | repetir o pedido e esperar |
| "Rastreada — não indexada no momento" | julgada de baixo valor | diferenciar da home |
| "Página duplicada, o Google escolheu um canônico diferente" | canibalização confirmada | diferenciar título e H1 |

O terceiro rótulo confirmaria a hipótese de canibalização levantada em 03/09,
porque o título da home contém literalmente "Aulas particulares de matemática
online". Ver o passo B1 de [plano-aceleracao.md](plano-aceleracao.md).

## Dez artigos publicados em 2026-09-11

Entraram na lista na mesma entrega que os criou, como manda a regra 2. A coluna
`Pedido em` está vazia de propósito: **o pedido manual só vale depois de a
página estar no ar**, e pedir antes queima a cota do dia lendo a versão velha.

A cota do Google é de ~10 a 12 por dia, então os dez cabem em um dia. Ordem
sugerida, por janela de tempo e não por gosto:

1. `recuperacao-de-matematica-fim-do-ano` — a janela de recuperação é set-dez
2. `matematica-enem-conteudos-que-mais-caem` — o pico do ENEM é em novembro
3. `como-escolher-professor-particular-matematica` — o termo de maior valor medido
4. `quanto-custa-aula-particular-matematica`
5. `meu-filho-nao-aprende-matematica`
6. `lacunas-de-matematica-do-fundamental`
7. `sinais-aluno-precisa-reforco-matematica`
8. `aula-de-matematica-online-funciona`
9. `como-estudar-matematica-sozinho`
10. `atividades-de-matematica-para-praticar-em-casa`

**Repetir também `/aulas-de-matematica-online`.** A Inspeção de URL de
2026-09-11 devolveu "O Google não reconhece o URL", sem sitemap de referência
e sem página de referência. Ver a leitura abaixo.
