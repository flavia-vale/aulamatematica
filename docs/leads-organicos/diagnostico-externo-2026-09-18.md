# Diagnóstico externo de 18/09/2026 — o que entrou, o que não entrou

Auditoria feita **de fora do repositório**, em 18/09/2026: 30 páginas do
sitemap com `curl`, consulta ao índice do Bing (direto e via DuckDuckGo) e
leitura do HTML e do schema entregues aos robôs. Chegou como plano de doze
itens (M1 a M12) mais sete pautas de blog.

Este documento existe porque metade do plano é **achado novo e bom**, e a outra
metade **já estava respondida no repositório** ou **contraria medição própria**.
Misturar as duas coisas é como uma hipótese derrubada volta como opinião — é
o que o procedimento deste projeto existe para evitar.

## 1. O que a auditoria mediu que ninguém aqui sabia

Cinco achados novos, todos verificáveis de fora, todos mecânicos:

| # | Achado | Estado |
|---|---|---|
| A1 | **Zero páginas no índice do Bing**, por duas fontes. Como o ChatGPT busca no Bing, o site não pode ser citado nem por acidente | confirmado; o `indexnow` avisa o Bing desde 03/09, então isto é fila ou falta de cadastro no Bing Webmaster Tools — **pendência da dona do projeto** |
| A2 | `http://` responde **200**, e `www.` responde **200**. Cada página existe em quatro endereços | documentado em [../deploy-e-dns.md](../deploy-e-dns.md#7-redirecionamento-de-host--pendente-no-painel-medido-em-18092026); são dois cliques no painel da Cloudflare, e não dá para resolver no repo |
| A3 | `/sitemap.xml` responde **404** — é o caminho que todo mundo digita e o que o Bing Webmaster Tools oferece por padrão | **resolvido**: `public/_redirects`, 301 para `sitemap-index.xml` |
| A4 | **Nenhuma URL do sitemap declarava `lastmod`** | **resolvido**: 29 de 29 declaram, de data editorial real. Ver `src/config/atualizacoes.ts` |
| A5 | O `robots.txt` não lista `Claude-SearchBot` nem `Claude-User`, os nomes atuais da Anthropic | **resolvido** |

E um sexto, que é o mais incômodo porque é de leitura humana, não de robô:

**A6 — o telefone é DDD 32 (Juiz de Fora) numa marca que promete BH.** É a
única informação do site que o visitante consegue interpretar errado sozinho:
quem conhece DDD lê "a professora não é daqui" e fecha a aba sem perguntar.
O número aparece no rodapé de todas as páginas e em corpo 3xl em `/contato`.

Trocar o número é decisão da dona do projeto. **Explicar** é correção factual,
e foi o que entrou: uma linha ao lado do número, nos dois lugares, dizendo que
o DDD é 32 e o atendimento presencial é em BH e região.

## 2. O que a auditoria não sabia — e que o repositório já responde

Cinco pontos do diagnóstico partem de informação vencida. Ficam registrados
com a data em que foram resolvidos, para que não voltem no próximo ciclo:

| O que o plano afirma | O que o repositório registra |
|---|---|
| "No Google só o Search Console responde (**verificar**)" | Duas leituras já feitas: **132 impressões e 17 páginas indexadas em 16/09** (registro-ciclos.md). O site está no índice do Google. |
| "Ficha do Google: avaliações **verificar**; o site não mostra nenhuma nota" | **As cinco famílias avaliaram em 17/09.** Até 06/09 havia uma avaliação, da própria dona do projeto. |
| "Nenhum desses está no `sameAs` além do Superprof" | O Google Business Profile entrou no `sameAs` do `Person` e do `LocalBusiness` em **11/09**, com URL canônica pelo CID. |
| "Sem prova social" | Cinco depoimentos reais, autorizados em 06/09, visíveis na página, com link para as avaliações do perfil desde 17/09. |
| "Não existe medição nenhuma. A primeira ação de todas é medir" | **Decisão da dona do projeto em 11/09: não instalar analytics.** A consequência está registrada — a etapa "viu e não clicou" segue invisível. É decisão, não esquecimento. |

E o diagnóstico mais importante que a auditoria **não** tinha, porque ele só
aparece no Search Console: **o muro da posição 11**. Sete consultas de intenção
de contratação param entre as posições 11,0 e 12,0 — a primeira linha da
segunda página. O gargalo medido não é impressão nem CTR, é **posição**. Essa
leitura organiza a prioridade do Ciclo 1, e nenhum item de M1 a M12 a ataca.

## 3. O que entrou nesta entrega

Mudanças de mecânica e de conteúdo novo — **nenhum título, descrição ou copy
de página existente foi reescrito**, ver a seção 4.

**Mecânica (M6, M7, M10, M12)**

- `lastmod` em 29 de 29 URLs, de data editorial declarada em
  `src/config/atualizacoes.ts`. A tabela é fonte única de três coisas: o
  `lastmod`, a linha "Atualizado em" visível no fim de cada página e o
  `dateModified` do nó `WebPage` no JSON-LD.
- Nó `WebPage` com `dateModified` em toda página indexável, injetado no
  `SEO.astro` e não página por página — pelo mesmo princípio da varredura da
  Fase 5: uma lista de páginas a conferir deixa a próxima página nascer sem o
  campo e ninguém vê.
- `WebSite` e o nó de quem mantém o site passaram a aparecer em todas as
  páginas. Antes viviam só na home, e o `isPartOf` das outras 28 apontaria
  para um `@id` inexistente naquele documento.
- `public/_redirects` com o 301 de `/sitemap.xml`.
- `robots.txt` com `Claude-SearchBot` e `Claude-User`.
- Bloco "quem mantém este site" no rodapé, com `creator` e `maintainer` no
  `WebSite` apontando para um `Person` "Flávia Vale". **No rodapé, e não na bio
  da professora** — quem dá as aulas é a Taciane, e misturar as duas pessoas
  numa bio derrubaria a confiança que a página constrói.

**Duas regras novas na varredura da Fase 5**

Porque toda decisão de conteúdo deste projeto vira varredura com exceção
nominal, nunca lista do que conferir:

- `sitemap-lastmod` — falha se uma página indexável entrar no sitemap sem data.
- `links-internos` — falha se uma página indexável receber link de **menos de
  três páginas de origem distintas**. O piso não é opinião: no Coverage de
  16/09, os três artigos que ficaram em "Detectada, mas não indexada" recebiam
  **um ou dois** links internos, e os que indexaram rápido recebiam link de
  página com impressão.

A regra `links-internos` apanhou três páginas na primeira execução —
`/blog/atividades-de-matematica-para-praticar-em-casa` (1 origem),
`/blog/matematica-enem-conteudos-que-mais-caem` (2) e
`/blog/por-que-matematica-parece-dificil` (2). Nenhuma delas aparecia em
nenhum relatório. Corrigidas na mesma entrega.

**Correções factuais (não são experimento de copy)**

Da mesma natureza da remoção do "100% online" em 06/09 e da CTA do blog em
11/09 — o site afirmava coisa que deixou de ser verdade:

- O rodapé dizia "aulas de matemática **online**" e "reforço para fundamental
  e médio". O presencial existe desde 06/09 e o ensino superior desde 17/09.
- A CTA do fim de cada artigo dizia a mesma coisa.
- A nota sobre o DDD, no rodapé e em `/contato` (A6).

**Conteúdo novo: quatro artigos**

Os três primeiros atacam o que a auditoria identificou corretamente como o
vazio do blog — *"não existe UMA página para as buscas que uma mãe de BH faz e
os grandes não cobrem"*. E eles têm uma propriedade que nenhuma pauta anterior
teve: **data marcada**, verificada nos editais em 18/09/2026.

| Artigo | Prova | Janela |
|---|---|---|
| `matematica-coltec-ufmg-como-preparar` | Coltec (UFMG), 22/11/2026 | inscrições até 08/10 |
| `matematica-cefet-mg-prova-o-que-estudar` | CEFET-MG, prevista em 29/11/2026 | inscrições até 05/10 |
| `matematica-colegio-militar-bh-exame-intelectual` | Exame Intelectual, 18/10/2026 | **inscrições encerradas em 17/09** |
| `calculo-1-ufmg-puc-minas-por-que-reprova` | — | porta de entrada da linha de superior |

Sobre o Colégio Militar: as inscrições fecharam no dia anterior à auditoria, o
que **muda a pauta** em vez de invalidá-la. Quem se inscreveu tem quatro
semanas até a prova e um piso de 50% dos pontos em matemática para cruzar. O
artigo é sobre esse prazo, não sobre como se inscrever.

O quarto artigo existe por outro motivo: a linha de ensino superior nasceu em
17/09 com sete páginas e **nenhuma porta de entrada editorial** — nenhum texto
que um universitário encontre buscando o problema dele em vez do nome da
disciplina. Ele não exibe R$ em lugar nenhum, pela mesma razão das páginas:
`precoSuperior.valor` é nulo e aplicar os R$ 45 aqui ancoraria a linha uma
ordem de grandeza abaixo do mercado.

**A hipótese, registrada antes de medir.** Os três artigos de prova de admissão
são conteúdo local que nenhum marketplace nacional cobre, com busca concentrada
em setembro e outubro. Se a tese do projeto — *volume baixo com intenção alta
vale mais que volume alto com intenção de material* — estiver certa, eles
produzem **pouca impressão e conversa atribuída**, ao contrário do experimento
de 11/09 (`atividades-de-matematica-para-praticar-em-casa`, 50.000 buscas/mês,
que previa muita impressão e nenhuma conversa). Os dois experimentos se medem
no mesmo ciclo e apontam para lados opostos — é o par que torna a tese
falseável. Se os três não trouxerem nem impressão nem conversa até o fim de
novembro, a pauta de prova de admissão se congela com evidência própria.

## 4. O que NÃO entrou, e a evidência

### M5 — reescrever 16 títulos e descrições

**Não feito.** Três motivos independentes, e qualquer um deles bastaria:

1. **A regra de congelamento vale até 04/10.** A propriedade foi verificada em
   04/09 e o Search Console não é retroativo. Mexer agora destrói a linha de
   base que está se formando — é a regra do `ciclo-1.md`, e ela foi respeitada
   em 11/09, 16/09 e 17/09, inclusive quando era inconveniente.
2. **A hipótese que sustenta o item já foi derrubada com dado de campo.** "Título
   longo mata o clique" caiu no projeto de origem: lá, os dois títulos mais
   longos eram os que mais convertiam. A varredura deste projeto trata
   comprimento como **aviso**, não erro, exatamente por isso. Encurtar por
   intuição é trocar uma opinião por outra.
3. **O gargalo medido é outro.** Em 16/09 o site tinha 132 impressões e 1
   clique, com sete consultas de contratação paradas na posição 11. Título
   melhor não move página da segunda para a primeira posição — e é isso que
   falta.

Os títulos propostos também reintroduzem "BH" na posição de destaque, contra a
evidência da seção seguinte. A decisão fica para o Ciclo 1, **com o CTR real de
cada página na mão**, que é onde o `ciclo-1.md` já a colocou.

**Um dado mecânico para essa decisão, medido nesta entrega.** O `SEO.astro`
acrescenta ` | Aulas de Matemática BH` a todo título que não contenha a marca:
**25 caracteres**, em toda página. Os quatro artigos novos nasceram com títulos
de 50 a 58 caracteres — dentro do alvo de 60 que o diagnóstico pede — e chegam
ao HTML com 72 a 83. Ou seja: **para os artigos, o sufixo é o problema inteiro**,
e ele ancora num termo de volume zero que nunca aparece no resultado.

Isso não muda a recusa acima, porque mexer no sufixo é mexer no título de 33
páginas de uma vez, e é justamente o tipo de mudança que a linha de base não
suporta agora. Mas transforma o item do Ciclo 1 em algo mais barato do que
reescrever 16 títulos: é uma linha no `SEO.astro`, e o teste é o CTR antes e
depois.

### M4 — home "BH-primeiro" e H1 com BH e UFMG

**Não feito.** As duas metades da proposta contrariam medição própria:

- **"BH" no título, para captar busca local.** Zero interesse no Trends em 53
  semanas e em 27 estados; uma única aparição a 50 buscas/mês em 648 termos do
  Planejador; e, em 16/09, `aula particular matematica bh` apareceu na
  **posição 39**. Três instrumentos independentes, e a terceira confirmação.
  Isso não é motivo para tirar a marca geográfica do site — é argumento contra
  depender dela para captar busca.
- **"com professora da UFMG" como diferencial.** A Fase 3 nomeou **12 ou mais
  professores da UFMG** citados pelas IAs, dois com o perfil exato (graduação
  em curso, R$ 50/h). A credencial não separa. O que separa, medido em 28
  consultas, é o **contato direto sem assinatura de plataforma** — e é disso
  que a página de 17/09 já trata.

O diagnóstico de que o posicionamento está dividido está **correto**, e já foi
tratado por outro caminho em 06/09: BH virou a página presencial, o online
deixou de mencionar BH. O que sobrava da divisão era o DDD, e isso entrou.

### M1 — analytics e evento de clique no WhatsApp

**Não feito, por decisão da dona do projeto em 11/09.** O Plausible foi
recusado. A consequência está registrada e não é objeção: a etapa 3 do funil
segue invisível. O gatilho combinado para reabrir o assunto (uma página passar
de ~100 impressões/mês com quase nenhuma conversa) **foi atingido** — `/sobre`
projeta isso sozinha —, então a decisão volta como pergunta do Ciclo 1, não
como item de plano externo.

O resto do M1 já está feito: Search Console verificado, sitemap enviado,
IndexNow ligado e automatizado em CI desde 11/09. Falta o **Bing Webmaster
Tools** (A1), que é cadastro no painel.

### M8 e M11 — `sameAs` de Instagram, Facebook e LinkedIn

**Não feito.** O próprio diagnóstico marca os três como **verificar**: o
Instagram "aparece na busca pelo nome", e a página de Facebook com 3.246
curtidas pode ser colisão de nome. `sameAs` é afirmação de identidade —
declarar um perfil que talvez não seja dela é publicar dado que ninguém
confirmou, e `site.social.instagram` está vazio de propósito desde o começo
por essa razão.

Vira uma linha de código no dia em que a dona do projeto confirmar cada URL.
A recomendação de renomear a marca para "Taciane Andrade — Matemática BH", se
a página de Facebook não for dela, é decisão dela — e tem apoio no achado de
06/09: a entidade que ranqueia chama-se Taciane, não "Aulas de Matemática BH".

### O `sameAs` da própria mantenedora

A proposta trazia `espelhagrupos.com.br/quem-somos` e
`cuponito.com.br/quem-somos` como `sameAs` do `Person` "Flávia Vale". As duas
URLs respondem 200 — conferido em 18/09 — mas **nenhuma das duas nomeia a
Flávia Vale**: a de Espelha Grupos atribui o site apenas à empresa. Apontar
`sameAs` para página que não nomeia a pessoa é pedir ao buscador para acreditar
numa ligação que ele não pode confirmar. Entra no dia em que aquelas páginas
trouxerem o nome. Até lá, `url` aponta para o site que ela fundou.

### M9 — não marcar `review`/`aggregateRating`

**Já era regra.** A varredura falha com `avaliacao-no-schema` desde 06/09, e o
motivo está escrito em três lugares. A recomendação coincide com o projeto.

### Três das sete pautas de blog

- **"Recuperação de matemática em BH"** — canibalizaria
  `/blog/recuperacao-de-matematica-fim-do-ano`, que em 16/09 era o artigo com
  mais impressão do site (15, posição 8,47). Não se coloca uma página nova
  disputando a consulta do melhor ativo editorial que existe.
- **"Preço por região em BH"** — mesma coisa com
  `/blog/quanto-custa-aula-particular-matematica` (5 impressões, posição 7,60).
- **"Reforço para alunos do [Colégio X]"** — só faz sentido com escola onde já
  há aluno, e o nome dessas escolas é informação que a dona do projeto tem.
  Página por escola imaginada é o mesmo erro dos 50 bairros de 06/09.

## 5. O que depende da dona do projeto

Nada abaixo é código. Tudo é painel, canal externo ou decisão.

1. **Bing Webmaster Tools** — criar conta e importar do Search Console (um
   clique). É o que destrava A1, e com ele o ChatGPT.
2. **Cloudflare** — as duas regras de redirecionamento de host da seção 7 de
   [../deploy-e-dns.md](../deploy-e-dns.md).
3. **Indexação manual** dos quatro artigos novos e das oito páginas da linha de
   superior, em Search Console → Inspeção de URL, **só depois de estarem no
   ar**. Marcar cada pedido em
   [pendencias-indexacao.md](pendencias-indexacao.md). Cota de ~10 a 12/dia.
4. **Decidir sobre o número (31)** ou manter o 32 com a explicação que entrou.
   Se trocar, o número novo precisa ser o mesmo na ficha do Google.
5. **Confirmar Instagram, Facebook e LinkedIn**, um por um, para o `sameAs`.
6. **Ficha do Google**: a descrição abaixo, e os serviços das três provas de
   admissão cadastrados como serviço.
7. **Definir a faixa de ensino superior** — segue pendente desde 17/09. É uma
   edição de `precoSuperior` em `config/site.ts` e as sete páginas passam a
   exibir sozinhas.

### Descrição para a ficha do Google (pronta para colar)

> Aula particular de matemática em Belo Horizonte com Taciane Andrade,
> licencianda em Matemática pela UFMG. Reforço escolar do 6º ano ao 3º do
> ensino médio, preparação para o ENEM e para as provas de admissão do Coltec
> (UFMG), do CEFET-MG e do Colégio Militar, e apoio em Cálculo, GAAL,
> Estatística e Pré-cálculo para universitários. Presencial na casa do aluno em
> BH, Contagem, Nova Lima, Sabará, Santa Luzia, Ribeirão das Neves e
> Vespasiano, ou online ao vivo para todo o Brasil. Primeira aula diagnóstica
> gratuita, de 30 minutos. Aula online de 50 minutos R$ 45; presencial a partir
> de R$ 50, com deslocamento incluso. As matérias de faculdade têm faixa
> própria, fechada após a diagnóstica. Contato direto pelo WhatsApp, sem
> plataforma nem taxa.

Diferente da versão proposta em dois pontos, e os dois importam: as matérias de
superior aparecem **sem preço** (aplicar os R$ 45 ali ancoraria a linha abaixo
do mercado), e as três provas de admissão entram porque agora existe página no
site sustentando cada uma.

### Bio e anúncio do Superprof

O texto proposto para a bio descrevia só fundamental e médio na primeira
versão. A bio atual do site, reescrita em 17/09, já cobre as duas linhas e
serve para os dois canais — use `site.teacher.bio` em `src/config/site.ts` como
fonte, para os canais não divergirem entre si.

Título do anúncio, se for trocar:
`Professora de matemática (UFMG) — BH presencial e online, 1ª aula grátis`.
E a única coisa do Superprof que é operação, não texto: **responder em menos de
duas horas**, porque a plataforma ranqueia por tempo de resposta.

## 6. O que medir no Ciclo 1 por causa desta entrega

As metas de 30/60/90 dias que vieram no plano usam um ponto de partida que não
é o deste projeto — elas supõem zero indexação e zero avaliação. Refeitas a
partir da linha de base real de 16/09, e como **pergunta**, não como meta:

| O que perguntar em 04/10 | Linha de base (16/09) |
|---|---|
| As sete consultas paradas na posição 11 subiram? | 11,0 a 12,0, sete consultas |
| Alguma das quatro páginas antes fora do índice entrou? | 17 indexadas, 4 fora |
| O Bing passou de zero? | zero, por duas fontes |
| Os três artigos de prova de admissão produziram conversa? | não existiam |
| `atividades-...-em-casa` produziu impressão sem conversa, como previsto? | indexada, zero impressão |
| `/sobre` continua com a melhor posição e zero clique? | 33 impressões, posição 4,0, zero clique |
| As cinco avaliações no Google moveram alguma lista de IA? | 1 citação em 28 medições, apontando para o Superprof |

A última é a mais valiosa e a mais barata: são as **três consultas de
diretório** da Fase 3 (1, 3 e 6), 12 linhas em vez de 28, e são exatamente as
ranqueadas por volume de avaliação. A entrada mudou em 17/09; a saída pode ter
mudado.
