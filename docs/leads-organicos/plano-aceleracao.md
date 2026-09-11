# Plano de aceleração de leads — 2026-09-11

Escrito a partir da **primeira leitura real do Search Console** (export de
11/09/2026, período "Últimos 7 dias") e do WhatsApp confirmado como
funcionando pela dona do projeto na mesma data.

Este documento **não substitui** o [ciclo-1.md](ciclo-1.md), que continua
marcado para 04/10 com 30 dias de dado. Ele existe porque a leitura de 7 dias
respondeu uma pergunta que não precisava esperar: **onde o funil zera.**

---

## 1 · O que a medição estabeleceu

**Convenção de contagem:** os totais vêm da soma da aba **Países**, como manda
a [tabela-historica.md](tabela-historica.md).

| Métrica | 7 dias (03/09 a 09/09) |
|---|---|
| Impressões | 49 |
| Cliques | 1 |
| Taxa de clique | 2,04% |
| Consultas distintas nomeadas | 8 |
| Páginas com impressão | 10 de 11 |
| Conversas no WhatsApp | 0 |

O gráfico tem impressão a partir de **05/09**; 03 e 04/09 estão em zero. São
**5 dias com dado**, não 7 — o Search Console tem atraso de ~2 dias, então
10 e 11/09 ainda não aparecem.

### O funil não zera na primeira etapa

Esta é a conclusão que muda a leitura de "nenhum lead chegou". O site
**aparece** na busca e **é rastreável**. As etapas 1 e 2 do
[funil.md](funil.md) têm número diferente de zero. O que zera é o volume:

- 49 impressões em 5 dias equivale a ~210 impressões/mês no ritmo atual.
- A 2% de clique, isso são ~4 visitas/mês.
- A etapa 3 (clicou no WhatsApp) segue **invisível**, sem analytics.

**Zero lead é o resultado aritmeticamente esperado deste volume.** Nenhuma
suposição sobre a qualidade do texto é necessária para explicá-lo. Para o
site sozinho produzir 1 conversa/mês seria preciso multiplicar o tráfego por
algo entre 5 e 10 vezes, e nenhuma reescrita de título faz isso em 30 dias.

**A consequência prática:** o site é o canal lento. Os canais rápidos são os
que a Fase 3 já havia medido como sendo os únicos onde esta operação é
encontrada — o Google Business Profile e o Superprof. O plano abaixo é
ordenado por isso, não por preferência.

### O clique único não diz nada sobre conversão

O único clique aconteceu em **06/09**, o dia das mudanças, na home, com
posição média 6,62. Não gerou conversa. Com amostra de 1, isso **não** mede
a página, o texto nem o botão. Registrado para que nenhum ciclo futuro trate
"1 clique, 0 conversa" como taxa de conversão de 0%.

### `/sobre` é a página com mais impressão e a melhor posição

| Página | Impressões | Posição | Cliques |
|---|---|---|---|
| `/sobre` | 24 | 4,21 | 0 |
| `/` | 21 | 6,62 | 1 |
| `/reforco-escolar-matematica` | 13 | 39,54 | 0 |
| `/aulas-particulares-matematica-bh` | 9 | 11,11 | 0 |
| `/contato` | 8 | 5,88 | 0 |
| `/blog` | 3 | 8,33 | 0 |
| `/blog/por-que-matematica-parece-dificil` | 3 | 8,33 | 0 |
| `/blog/como-ajudar-filho-matematica` | 1 | 7,00 | 0 |
| `/enem-matematica` | 1 | 8,00 | 0 |
| `/blog/como-estudar-matematica-enem` | 1 | 9,00 | 0 |
| **`/aulas-de-matematica-online`** | **0** | — | — |

A página que fala **da professora** é a que mais aparece e a que melhor
ranqueia, com margem. Isso conversa diretamente com o achado estratégico de
06/09: *a entidade que existe, ranqueia e é citada chama-se Taciane; o site
se apresenta como "Aulas de Matemática BH"*.

**Não é conclusão, é hipótese com um teste barato:** filtrar as consultas do
Search Console por `taciane` e ver quantas das 36 impressões anônimas são
busca pelo nome dela. Se forem, `/sobre` está recebendo busca de marca —
gente que já ouviu falar dela e foi conferir — e o clique está indo para a
ficha do Google, que aparece acima. Item do passo 1 abaixo.

### Nenhuma das 8 consultas nomeadas é de contratação com posição útil

| Consulta | Impressões | Posição |
|---|---|---|
| reforço de matemática | 4 | 56,75 |
| reforço de matematica | 2 | 45,50 |
| reforço escolar matemática | 2 | 50,50 |
| aulas de reforço de matematica | 1 | 3,00 |
| aula particular de matematica | 1 | 11,00 |
| professora matematica particular | 1 | 12,00 |
| aula particular matematica bh | 1 | 39,00 |
| reforço escolar de matemática | 1 | 58,00 |

Todas as variantes de `reforço de matemática` estão entre as posições **45 e
58**, ou seja, páginas 5 a 6 da busca. Impressão nessa faixa é ruído
estatístico, não oportunidade. E é exatamente o cluster que a Fase 4 já havia
medido como volume baixo com intenção de material, não de contratação.

As duas únicas consultas de contratação com posição alcançável —
`aula particular de matematica` (11) e `professora matematica particular`
(12) — têm **1 impressão cada**. Não sustentam decisão nenhuma ainda.

Confirma-se, por um terceiro instrumento, o que Trends e Planejador já diziam:
`aula particular matematica bh` aparece **uma vez, na posição 39**.

### Um sinal de canibalização, por aritmética

A soma da aba **Páginas** dá **84** impressões; a da aba **Países**, **49**.
A diferença não é erro: o total da propriedade conta **uma impressão por
busca**, enquanto a aba Páginas conta **uma por URL exibida**. A razão de
**1,71 URLs por busca** significa que, na maioria das buscas em que o site
aparece, **mais de uma página dele aparece junto**.

É o sintoma da hipótese de canibalização levantada em 03/09 e nunca testada.
**Não conserte agora** — com 49 impressões a amostra não separa canibalização
de coincidência. É o primeiro item da aba Páginas a olhar em 04/10.

### Celular ranqueia melhor e não converte

| Dispositivo | Impressões | Posição | Cliques |
|---|---|---|---|
| Computador | 28 | 18,29 | 1 |
| Celular | 21 | 10,52 | 0 |

O celular ranqueia **8 posições acima** do computador e não produziu clique.
**Com 1 clique no total, a amostra não distingue os dois.** Fica anotado como
métrica a separar em 04/10, não como achado.

### Impressões de fora do Brasil

Estados Unidos (3), Chile (1), Itália (1) em posições 2 a 2,67. Volume
irrelevante e posição alta demais para ser busca real de aula em português.
Tratar como ruído até que se repita com volume.

---

## 2 · O plano

Quatro trilhas. As duas primeiras produzem lead em semanas; a terceira torna
mensurável o que hoje é invisível; a quarta é o Ciclo 1, que continua em
04/10.

### Trilha A · Os canais onde a demanda já está (maior retorno medido)

A Fase 3 mediu 28 respostas de IA: o site apareceu em **zero**. A única
citação do negócio veio do **Superprof**. Na busca capturada em 06/09, o
**Google Business Profile aparece em primeiro lugar**. Se há demanda chegando
nesta operação hoje, ela chega por ali.

- [ ] **A1 · As cinco famílias avaliam no Google.** Ação de maior retorno do
      projeto inteiro. A Fase 3 estabeleceu que **volume de avaliação é o
      critério de ranqueamento em todas as listas de "melhores professores"
      das quatro IAs**, e que reputação sustenta preço enquanto credencial não
      sustenta (Henrique, mesma formação, R$ 100/h com 98 avaliações). O
      perfil tem hoje **1 avaliação, assinada pela dona do projeto** — na
      prática, zero de família atendida. As cinco famílias já autorizaram
      depoimento em 06/09; são as mesmas pessoas.
      Mandar o link direto de avaliação do painel do perfil, individualmente.
- [ ] **A2 · Corrigir o nome do perfil para "Taciane Andrade".** É a forma
      usada pelo site, pelo schema, pelo `llms.txt` e pelo Superprof.
      Consistência de nome é o que permite a buscador e a IA entenderem que
      são a mesma entidade — e essa ligação é justamente a que falta, já que
      o perfil é citado e o site não. O descritor "— Professora Particular de
      Matemática" no campo de nome é, além disso, motivo formal de suspensão
      pela diretriz do Google, e já está no campo categoria.
- [ ] **A3 · Corrigir o horário do perfil**, que fecha às 20h enquanto o site
      diz 21h, e **confirmar a configuração de área de atendimento** sem
      endereço público, cobrindo as 7 cidades do raio de 20 km.
- [ ] **A4 · Pegar a URL canônica do perfil** (`maps.google.com/?cid=...` ou
      `g.page/...`, não o `share.google`) e preencher
      `site.social.googleBusiness`, ligando as entidades via `sameAs`.
- [ ] **A5 · Publicar no perfil do Google as mesmas cinco mensagens** já
      autorizadas, como posts. O perfil aceita publicação e ela aparece na
      ficha que as IAs leem.

### Trilha B · Destravar o que já está construído e não rende nada

- [ ] **B1 · `/aulas-de-matematica-online` tem zero impressão em 8 dias.**
      É a página da modalidade **nacional**, o maior mercado endereçável da
      operação, e a única de prioridade 1 fora do índice desde 04/09.
      Verificado em 11/09 que **não há defeito técnico**: responde 200, tem
      canonical próprio, não é `noindex`, está no sitemap e recebe 3 links
      internos de todas as outras páginas. Não é página órfã.
      **O que fazer:** rodar Inspeção de URL e anotar o **rótulo exato**. Ele
      separa três causas diferentes:
      | Rótulo | Causa | Conserto |
      |---|---|---|
      | "Descoberta — não indexada" | fila do Google | repetir o pedido, esperar |
      | "Rastreada — não indexada" | julgada de baixo valor | diferenciar da home |
      | "Página duplicada, canônico diferente" | **canibalização confirmada** | diferenciar título e H1 |
      O terceiro rótulo confirmaria de uma vez a hipótese de canibalização,
      porque o título da home contém literalmente "Aulas particulares de
      matemática online".
      **Esta página está livre da regra de congelamento** — a exceção já
      escrita no `ciclo-1.md` diz que página não indexada não tem linha de
      base a proteger.
- [ ] **B2 · Pagar a dívida de reindexação de 06/09.** Os rastreamentos são
      de 04 e 05/09, anteriores à reescrita. O Google ainda serve a versão
      velha de `/aulas-particulares-matematica-bh`, que **mudou de título e
      descrição, de online para presencial** — na prática é outra página.
      Pedir de novo, nesta ordem: BH, home, `/sobre`, `/contato`.
- [ ] **B3 · `/blog/como-estudar-matematica-enem` entrou no índice** (1
      impressão, posição 9). Atualizar a coluna da
      [pendencias-indexacao.md](pendencias-indexacao.md).
- [ ] **B4 · Janela do ENEM é agora.** O termo sobe de setembro a outubro e
      atinge o pico nas duas semanas da prova, em novembro. Pedir indexação em
      novembro é tarde. `/enem-matematica` está indexada, com 1 impressão na
      posição 8. **Ressalva medida, que continua valendo:** lance de R$ 2,59 e
      concorrência baixa indicam aluno atrás de material, não família
      contratando. Essa página deve dar muita impressão e pouca conversa, e
      isso não será defeito de título.

### Trilha C · Tornar mensurável o que hoje é invisível

- [ ] **C1 · O gatilho de analytics foi atingido.** O critério combinado no
      Ciclo 0 era *uma página passar de ~100 impressões no mês com quase
      nenhuma conversa vinda dela*. No ritmo atual a propriedade projeta ~210
      impressões/mês e `/sobre` sozinha projeta ~100. A etapa "viu a página e
      não clicou" continua invisível, e é ela que separa "ninguém acha" de
      "acham e não clicam" — que pedem consertos opostos.
      Opções e trade-offs em [funil.md](funil.md#a-lacuna-conhecida).
      **Decisão da dona do projeto.** Recomendação: Plausible ou Umami, sem
      cookie e sem banner de consentimento.
- [ ] **C2 · Abrir a planilha de leads** com as cinco colunas do
      [funil.md](funil.md), mesmo vazia. Sem ela, a pergunta 6 da Fase 2 não
      tem como ser respondida em 04/10.
- [ ] **C3 · Filtrar as consultas por `taciane`** no Search Console e anotar o
      resultado. Responde se `/sobre` recebe busca de marca, e com isso a
      hipótese mais forte que existe hoje sobre a identidade do site.

### Trilha D · 04/10, com 30 dias de dado

Segue o [ciclo-1.md](ciclo-1.md) sem alteração. As decisões que **continuam
congeladas até lá**, e por quê:

- **Títulos e descrições.** 49 impressões e 1 clique não sustentam reescrita.
  A iniciativa de origem derrubou com dado de campo a hipótese "título longo
  mata o clique". Mexer agora é trocar uma opinião por outra.
- **Canibalização.** O sinal de 1,71 URLs por busca é forte, mas a aba
  Páginas com 30 dias é que diz qual página o Google escolheu para cada
  consulta.
- **`professor particular de matemática` no título.** A consulta mais valiosa
  do mercado tem 1 impressão de dado. Não é base para nada.
- **Linha do Ciclo 1 na tabela histórica.** Não preencher com estes números:
  a convenção fixa período de 12 meses, e misturar recortes transforma a série
  em ficção.

---

## 3 · O viés a vigiar

O registro de 06/09 anotou, sobre a própria Fase 4: *"eu concluí rápido demais
a partir do primeiro recorte disponível. Registrado como viés a vigiar quando
o Search Console trouxer os primeiros dados do Ciclo 1 — que serão, por
definição, o menor recorte que teremos."*

Este é esse momento. Por isso todo item deste plano que toca texto do site
está na trilha D, e as trilhas A, B e C mexem em indexação, perfil externo e
instrumentação — nada que consuma a linha de base que está se formando.
