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
| `/professor-particular-de-matematica` | — | não | — |
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
| `/aulas-particulares-ensino-superior` | — | não | — |
| `/aula-particular-de-pre-calculo` | — | não | — |
| `/aula-particular-de-calculo-1` | — | não | — |
| `/aula-particular-de-calculo-2` | — | não | — |
| `/aula-particular-de-calculo-3` | — | não | — |
| `/aula-particular-de-estatistica-e-probabilidade` | — | não | — |
| `/aula-particular-de-geometria-analitica-e-algebra-linear` | — | não | — |
| `/blog/matematica-coltec-ufmg-como-preparar` | — | não | — |
| `/blog/matematica-cefet-mg-prova-o-que-estudar` | — | não | — |
| `/blog/matematica-colegio-militar-bh-exame-intelectual` | — | não | — |
| `/blog/calculo-1-ufmg-puc-minas-por-que-reprova` | — | não | — |

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

## Cobertura de 2026-09-16 — 17 indexadas de 21

Export em `search-console-2026-09-16/`. A série de indexadas foi de 9 em
03/09 para **17**, estável desde 04/09 na contagem do Google e agora
incorporando os dez artigos de 11/09.

**As quatro fora, todas em "Detectada, mas não indexada no momento":**

| Rota | Último rastreamento | Situação |
|---|---|---|
| `/aulas-de-matematica-online` | — | saiu de "não reconhece o URL" para "detectada" |
| `/blog/meu-filho-nao-aprende-matematica` | — | fila |
| `/blog/sinais-aluno-precisa-reforco-matematica` | — | fila |
| `/blog/aula-de-matematica-online-funciona` | — | fila |

"Detectada, mas não indexada" é fila, não recusa: o Google conhece o
endereço e ainda não decidiu gastar rastreamento nele. O que move essa fila é
link interno vindo de página que ele já visita — medido em 16/09, as três
recebiam **um único link, vindo só de `/blog`**. Corrigido no mesmo dia: agora
recebem de 4 a 6, incluindo home e `/sobre`.

**O item "Página alternativa com tag canônica adequada" continua em 1** e
continua não sendo problema. É o `http://` apontando por canonical para o
`https://`. Não clicar em "Validar correção".

**As 17 indexadas, com o último rastreamento registrado:** as reescritas de
06/09 foram todas re-rastreadas entre 12 e 13/09, incluindo
`/aulas-particulares-matematica-bh`. A dívida de reindexação daquela data
está paga.

## Página nova de 2026-09-17

`/professor-particular-de-matematica` entra na lista na mesma entrega que a
cria. **Pedir indexação assim que estiver no ar**, com prioridade sobre
qualquer outra pendência: é o termo que o Search Console de 16/09 mostrou o
site disputando em sete variantes, todas paradas entre as posições 11 e 12.

## Linha de ensino superior aberta em 2026-09-17 — sete páginas novas

Entram na lista na mesma entrega que as cria. **Pedir indexação só depois de
estarem no ar**, na ordem abaixo: o hub primeiro, porque é dele que as seis
recebem link, e depois as matérias pela ordem em que a Fase 4 mediu o valor
do clique.

| Rota | Pedido em | Indexada? |
|---|---|---|
| `/aulas-particulares-ensino-superior` | 2026-10-03 | não |
| `/aula-particular-de-calculo-1` | 2026-10-03 | não |
| `/aula-particular-de-calculo-2` | 2026-10-03 | não |
| `/aula-particular-de-calculo-3` | 2026-10-03 | não |
| `/aula-particular-de-pre-calculo` | 2026-10-03 | não |
| `/aula-particular-de-geometria-analitica-e-algebra-linear` | 2026-10-03 | não |
| `/aula-particular-de-estatistica-e-probabilidade` | 2026-10-03 | não |

**Expectativa declarada antes de medir, para o Ciclo 1 não ler errado:** estas
páginas produzem **pouca impressão por natureza**. A Fase 4 mediu 50 buscas/mês
por termo neste segmento, contra 5.000 do cluster de fundamental e médio. O que
se mede aqui é conversa por impressão, não volume — e o lance de anúncio desses
termos é o mais alto de toda a tabela (teto de R$ 9,41 a R$ 10,02), o que indica
que quem busca está contratando.

## Cobertura de 2026-09-23 — 27 indexadas, 7 fora

Export em `search-console-2026-09-23/`. As URLs vieram do painel, porque o
export não as lista.

**"Página com redirecionamento" (1): `http://aulasdematematicabh.com.br/`.**
É a mesma URL que até 16/09 aparecia em "Página alternativa com tag canônica
adequada" — mudou de rótulo porque agora responde 301 em vez de 200 com
canonical. É o conserto de host de 18/09 funcionando. **Não pedir indexação e
não clicar em "Validar correção".** Registro completo em `registro-ciclos.md`
(23/09).

**"Detectada, mas não indexada no momento" (6), todas sem rastreamento:**

| Rota | Recebe link de | Observação |
|---|---|---|
| `/aulas-de-matematica-online` | 33 páginas | fora desde 04/09; terceiro pedido |
| `/blog/aula-de-matematica-online-funciona` | 5 páginas | fora desde 11/09 |
| `/aula-particular-de-pre-calculo` | 7 páginas | página de 17/09 |
| `/aula-particular-de-calculo-1` | 7 páginas | página de 17/09 |
| `/aula-particular-de-calculo-2` | 7 páginas | página de 17/09 |
| `/aula-particular-de-geometria-analitica-e-algebra-linear` | 7 páginas | página de 17/09 |

Todas acima do piso de três origens do `check-conteudo.mjs` — o conserto de
16/09 já está no ar para elas. Não é página órfã nem defeito técnico; é fila,
e o que fura fila é o pedido manual. **Pedir as seis**, nesta ordem, e anotar a
data na tabela do topo. Cálculo 3, Estatística e a página-mãe de ensino
superior não estão em nenhum motivo de exclusão — conferir na Inspeção de URL
antes de gastar cota com elas.

`/aulas-de-matematica-online` merece atenção à parte: é a única página de
prioridade 1 que nunca entrou, e já foi pedida duas vezes. Se continuar
"Detectada" no Ciclo 1 (04/10), a hipótese de canibalização com a home
(passo B1 de `plano-aceleracao.md`) volta à mesa com três semanas de dado.

## Ciclo 1 — Cobertura de 20/09 e Search Console de 03/10

Export em `search-console-2026-10-03/`. A Cobertura vai até 20/09: **27
indexadas, 7 fora** (6 em "Detectada, mas não indexada", 1 em "Página com
redirecionamento", que é o `http://` e não é problema). O export não lista as
URLs; a aba Páginas do Search Console confirma por impressão quem está no
índice.

**Confirmadas no índice por impressão em 30 dias** (além das 17 de 16/09):
`/professor-particular-de-matematica` (62), `/aulas-particulares-ensino-superior`
(4), `/aula-particular-de-calculo-3` (1), `/blog/meu-filho-nao-aprende-matematica`
(1), e os quatro artigos de 18/09: CEFET-MG (145), Cálculo 1 UFMG e PUC (66),
Coltec (57) e Colégio Militar (14). Indexadas sem impressão, por não
constarem de nenhum motivo de exclusão: `/blog/sinais-aluno-precisa-reforco-matematica`,
`/blog/atividades-de-matematica-para-praticar-em-casa` e
`/aula-particular-de-estatistica-e-probabilidade`.

**As 6 em "Detectada, mas não indexada", sem mudança desde 23/09:**

| Rota | Situação |
|---|---|
| `/aulas-de-matematica-online` | fora desde 04/09, três pedidos, 33 links internos, zero impressão em 30 dias |
| `/blog/aula-de-matematica-online-funciona` | fora desde 11/09 |
| `/aula-particular-de-pre-calculo` | página de 17/09 |
| `/aula-particular-de-calculo-1` | página de 17/09 |
| `/aula-particular-de-calculo-2` | página de 17/09 |
| `/aula-particular-de-geometria-analitica-e-algebra-linear` | página de 17/09 |

Duas das seis têm "online" no título. A hipótese de 11/09, de que a home
(título "Aulas particulares de matemática online") absorve a consulta, está
na mesa com 30 dias de dado e virou o item 7 do plano em
[relatorio-ciclo-1-2026-10-03.md](relatorio-ciclo-1-2026-10-03.md): decisão
de título da home, da dona do projeto.

**As sete páginas de ensino superior mudaram em 03/10** (frase de preço).
Pedir indexação de novo só depois do deploy, começando pelas quatro que
estão fora.

**Bing:** cadastro feito, 2 URLs indexadas em 23/09 (home e
`/enem-matematica`), 1 impressão até 30/09, zero backlink. O IndexNow enviou
as 33 URLs em 23/09.

## Pedidos de 2026-10-03

Feitos na Inspeção de URL pela dona do projeto, **depois** de o deploy estar no
ar (conferido: os dois títulos novos aparecem no HTML publicado).

| Rota | Motivo do pedido |
|---|---|
| `/` | título novo (item 7 do relatório do Ciclo 1) |
| `/reforco-escolar-matematica` | título, descrição e H1 novos (item 9) |
| `/contato` | horário de seg a sex até 20h |
| `/aulas-particulares-ensino-superior` | frase de preço mudou em 03/10 (item 8) |
| `/aula-particular-de-calculo-1` | nunca indexou ("Detectada") |
| `/aula-particular-de-calculo-2` | nunca indexou ("Detectada") |
| `/aula-particular-de-pre-calculo` | nunca indexou ("Detectada") |
| `/aula-particular-de-geometria-analitica-e-algebra-linear` | nunca indexou ("Detectada") |
| `/blog/aula-de-matematica-online-funciona` | nunca indexou ("Detectada") |
| `/aula-particular-de-calculo-3` | frase de preço mudou em 03/10 |
| `/aula-particular-de-estatistica-e-probabilidade` | frase de preço mudou em 03/10 |

**Atenção ao título da home:** o pedido foi feito com o título publicado em
03/10, que termina em `| Taciane Andrade | Aulas de Matemática BH` (o layout
acrescenta o sufixo e o título proposto já trazia o nome). Se o título for
ajustado, a home precisa de novo pedido.

**Deliberadamente não pedida:** `/aulas-de-matematica-online` (três pedidos sem
efeito; esperar a home ser relida). Bing e demais: `npm run indexnow` após o
deploy final, ainda não rodado.

**Conferir a partir de 06/10** a coluna `Indexada?` das quatro que nunca
indexaram, e no Ciclo 2 (03/11) se a home e a página de reforço foram relidas.
