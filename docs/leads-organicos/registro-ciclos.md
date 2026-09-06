# Registro dos ciclos

Um bloco por rodada. Na próxima você começa por aqui em vez de reler tudo.

---

## Ciclo 0 — Instrumentação (2026-09-03)

**O que foi feito**

- Atribuição de lead instrumentada: cada página abre o WhatsApp com uma frase
  distinta, e todos os links da página usam a mesma. `src/config/site.ts`.
- Varredura de conteúdo da Fase 5 escrita e verde: `npm run check`, 7 regras que
  falham e 3 que avisam, em varredura com exceção nominal.
- IndexNow ligado (Bing/Yandex/DuckDuckGo): `npm run indexnow`, com a chave
  publicada em `public/`.
- `robots.txt` conferido: os robôs de IA que importam já estão com `Allow`.
- `llms.txt` conferido: as 11 páginas indexáveis estão listadas, e agora a
  varredura falha se uma nova página ficar de fora.
- Documentos do ciclo criados (este diretório).

**O que a medição derrubou**

- *"A atribuição está funcionando, é só ler a mensagem que chega."* Errado. Com
  `build.format: 'file'`, `Astro.url.pathname` entrega `/sobre.html`, e sem
  remover o `.html` **todas as páginas caíam na frase da home**. O site
  compilava, os links funcionavam, e o dado não existia. Só apareceu porque a
  varredura compara as frases entre si. É exatamente a armadilha da Fase 0 do
  projeto de origem, reproduzida aqui em outra forma.

**O que NÃO foi feito, e por quê**

- **Nenhum título ou descrição foi reescrito.** A varredura aponta 10 títulos
  acima de 60 caracteres, 8 descrições acima de 160 e 10 títulos sem número
  concreto. Tudo isso ficou como AVISO, não como erro: o projeto de origem
  **derrubou com dado de campo** a hipótese "título longo mata o clique" — lá,
  os dois títulos mais longos eram os que mais convertiam. Mexer agora seria
  trocar uma opinião por outra. Decide-se no Ciclo 1, com o CTR real de cada
  página na mão.

**Perguntas abertas para o Ciclo 1**

1. **A propriedade no Search Console foi verificada?** É a única coisa
   verdadeiramente bloqueante: o histórico não é retroativo, e cada dia sem
   verificar é um dia de dado que não existirá nunca.
2. **As 11 páginas foram pedidas manualmente à indexação?** Cabem em um dia de
   cota. Maior retorno por minuto de todo o ciclo.
3. **Instalar analytics?** Sem isso, "viu a página e não clicou" é invisível e a
   pergunta 5 da Fase 2 fica pela metade. Opções e trade-offs em
   [funil.md](funil.md#a-lacuna-conhecida). Decisão da dona do projeto.
4. **Há canibalização entre as quatro páginas de serviço?** BH, online, reforço
   e ENEM têm sobreposição real de assunto. A aba "Páginas" do Search Console
   responde na primeira leitura.
5. **As IAs sabem quem é a professora?** "Aulas de Matemática BH" é uma
   descrição genérica antes de ser um nome — a consulta 1 da Fase 3 pode
   devolver cursinhos de Belo Horizonte e nenhuma menção ao site.

**Linha da tabela histórica:** não preenchida — sem Search Console, sem números.

### Continuação — domínio comprado (2026-09-03)

**O que foi feito**

- Deploy preparado para Cloudflare Pages: `.nvmrc` fixando Node 22 (o padrão da
  Cloudflare quebraria o build do Astro 6) e `public/_headers` com cabeçalhos de
  segurança e cache de longo prazo para os assets com hash.
- Passo a passo de DNS, deploy e verificação escrito em
  [../deploy-e-dns.md](../deploy-e-dns.md).
- Planilha da Fase 3 pronta para preencher: `citacao-ia-planilha.csv`, 28 linhas.
- `lastmod` removido do sitemap (ver abaixo).

**O que a leitura derrubou**

- *"O sitemap está correto."* Estava declarando `lastmod: new Date()`, ou seja,
  **toda página afirmava ter mudado a cada build**, inclusive as que não mudaram.
  Um lastmod que é sempre "agora" é informação falsa, e o Google aprende a
  ignorar o sinal do site inteiro. Removido: não declarar é melhor que declarar
  errado.

**Hipótese levantada, ainda não medida — canibalização nos títulos**

Os H1 das quatro páginas de serviço são bem diferenciados (geografia, modalidade,
problema, prova). Os `<title>`, não:

| Página | Termo que o título disputa |
|---|---|
| `/` | "aulas particulares de matemática online" **e** "reforço escolar" |
| `/aulas-de-matematica-online` | "aulas de matemática online" |
| `/reforco-escolar-matematica` | "reforço escolar de matemática" |

A home está disputando os mesmos termos de cabeça das duas subpáginas. Se estiver
canibalizando, o sintoma no Search Console é a home aparecer para a consulta e a
subpágina certa ficar atrás — exatamente o caso que no projeto de origem custou
631 impressões contra 111.

**Não mexi em nada.** Isto é hipótese, não achado: a aba "Páginas" do Search
Console responde na primeira leitura, e o conserto (diferenciar os títulos) só
faz sentido depois de saber qual página o Google está de fato escolhendo.
Entra como pergunta 4 do Ciclo 1.

**Próxima ação, na ordem:** trocar os nameservers na Cloudflare → publicar →
verificar a propriedade → pedir as 11 indexações. A Fase 3 (citação por IA) pode
ser feita hoje, em paralelo, sem depender de nada disso.

### Continuação — primeira medição de IA (2026-09-03)

**O que foi feito**

- Fase 3 iniciada: consulta 1 (`Aulas de Matemática BH`) medida nas 4
  superfícies. Resultado na planilha e a leitura em [citacao-ia.md](citacao-ia.md).
- Lista B de concorrentes montada: 19 nomes distintos, com preços de mercado
  anotados com fonte e data. [concorrentes.md](concorrentes.md).

**O que a medição derrubou**

- *"Um site bem feito ganha a busca pelo nome da operação."* Não nesta consulta.
  As quatro superfícies responderam com fichas do Google Business Profile e
  marketplaces; **nenhuma recomendou um site institucional**. Otimizar o site não
  é o caminho para esta consulta específica — ter perfil no Google é.
- *"UFMG é o diferencial."* É um diferencial comum. Na mesma resposta aparecem
  uma professora formada pela UFMG e um anúncio de estudante da UFMG por
  R$35/h. O diferencial defensável precisa ser mais específico do que a
  instituição.

**Hipótese levantada, não medida — o nome ancora no mercado errado**

As quatro superfícies leram "BH" como presencial e listaram por bairro. Nenhuma
ofereceu aula online nacional. O serviço é 100% online para todo o Brasil. Isso
não é motivo para trocar nada agora — é uma pergunta a responder com as
consultas 3 e 4 (categoria e lista), que não têm âncora geográfica. Se elas
também não citarem, o problema é de presença; se citarem, o problema é do nome.

**Ainda faltam 24 linhas:** consultas 2 a 7, mesmas 4 superfícies.

### Continuação — consulta 3 (2026-09-03)

**O que a medição derrubou**

- *"O site não é citado porque o nome ancora em BH."* Levantada na consulta 1,
  derrubada na consulta 3: sem nenhuma âncora geográfica, o site continua não
  sendo citado. O nome pode ser um problema, mas não é **este** problema.

**O achado que se repetiu — e por isso pesa**

Duas consultas, quatro superfícies cada, oito respostas: **nenhum site
institucional de professor particular foi citado por ninguém.** O que vence é
ficha do Google Business Profile (consulta 1) ou marketplace (consulta 3).

Isto toca a premissa do plano inteiro, então merece o cuidado de não virar
decisão precipitada. São 2 consultas de 7, e faltam justamente as que um site
tem chance de ganhar: a 5 (dor específica, em linguagem de cliente) e a 6
(diferencial). Um site responde uma pergunta longa e específica melhor que um
diretório — é aí que ele compete, não em "me liste professores".

Se as consultas 5 e 6 também vierem zeradas, a leitura muda de "o site ainda não
está no ar" para "o canal escolhido não é onde essa demanda é atendida", e o
Ciclo 1 precisa colocar presença em marketplace e perfil no Google na mesa, ao
lado do site. **Não antes disso.**

**Erro de método, registrado**

A linha ChatGPT/consulta 3 saiu de sessão logada e o modelo personalizou a
resposta pelo perfil de quem perguntou, transformando a consulta de categoria
numa consulta de nível superior. Linha marcada como contaminada e fora da série.
O protocolo já exigia aba anônima; a conferência passou a ser o primeiro passo
de cada rodada.

### Continuação — consulta 6 (2026-09-03)

**O que a medição derrubou**

- *"O diferencial é ser professora da UFMG."* Derrubado com nome e preço. As
  quatro superfícies nomearam **doze** professores com vínculo UFMG, e **duas
  têm o posicionamento idêntico** ao do site: Julia Mendonça Pires, "graduanda
  em Licenciatura em Matemática na UFMG desde 2018", e Thais, "estudante de
  Matemática da UFMG", R$50/h. A credencial não distingue.
- *"Anunciar a UFMG sustenta o preço."* O resumo de IA do Google precificou a
  credencial em três faixas, e "estudante de graduação da UFMG" é a mais barata:
  R$35–50/h. Anunciar a credencial ancora a operação na faixa de entrada.
  Observação de mercado; preço e posicionamento são decisão da dona do projeto.

**Onde isso deixa a pergunta do canal**

Três consultas medidas (1, 3, 6), doze respostas, **zero citações de qualquer
site institucional de professor particular**. Mas as três eram consultas de
diretório — "me liste professores". Um site nunca ganha esse formato.

Falta a **consulta 5** (`meu filho está indo mal em matemática no 9º ano, o que
fazer`). É a única do conjunto que pede conselho em vez de lista, e é onde o
conteúdo do site compete de verdade. Ela decide entre duas leituras:

- Se citar algum site de professor → o caminho é conteúdo que responde dor
  específica, e as páginas de serviço tipo diretório são o que não funciona.
- Se também vier zerada → em nenhuma das superfícies medidas a demanda é
  atendida por sites individuais, e o Ciclo 1 precisa pôr marketplace, perfil no
  Google e presença social na mesa **ao lado** do site, não depois dele.

**Erro de método, de novo**

Duas das quatro linhas contaminadas: ChatGPT logado pela segunda vez seguida, e
Gemini herdando contexto da conversa anterior (respondeu como se quem
perguntasse quisesse anunciar aulas, não contratar). Adicionada uma conferência
de cinco itens no topo de [citacao-ia.md](citacao-ia.md), para rodar **a cada
consulta**, não uma vez por sessão.

### Continuação — consulta 5 (2026-09-03)

**Correção de uma leitura minha, não do dado**

No registro da consulta 3 eu montei um binário: ou a consulta 5 citaria algum
site de professor (e o caminho seria conteúdo de dor específica), ou viria
zerada (e o site seria o canal errado). **O binário estava errado.** Veio uma
terceira coisa, que eu não tinha previsto: nesta consulta **ninguém é
recomendado**. Três das quatro superfícies — as três linhas limpas — não
nomearam um único professor, centro, marketplace ou site de serviço. Só conselho.

**O que isso na verdade revela**

As marcas citadas existem, mas são de outra natureza: **Khan Academy, GeoGebra e
quatro canais de YouTube** (Matemática Rio, Ferretto, Gis com Giz, Equaciona).

Isso reorganiza as quatro consultas medidas:

| Tipo de consulta | Quem é citado | O site compete? |
|---|---|---|
| 1, 3, 6 · "me liste professores" | marketplaces e fichas do Google | não, por formato |
| 5 · "o que eu faço" | conteúdo gratuito | **sim, por formato** |

É a primeira das quatro em que o formato do vencedor coincide com o formato do
ativo. Plausível, não provado: nada garante que um blog novo entre numa lista
onde estão Khan Academy e canais com milhões de inscritos.

**O que a medição entregou de volta — um diferencial no lugar do que caiu**

A consulta 6 derrubou "professora da UFMG" como diferencial. A consulta 5
devolveu um substituto, e veio da boca das próprias IAs. O ChatGPT redigiu a
mensagem que um pai deveria mandar antes de contratar — *"gostaria que você
fizesse uma avaliação para identificar possíveis lacunas dos anos anteriores;
você trabalha dessa forma?"* — e disse que não contrataria quem respondesse
apenas "sim, posso ajudar com as matérias da escola".

Isso é a **aula diagnóstica gratuita**, que o site já oferece e já usa em todos
os CTAs. O diferencial defensável não é a credencial: é diagnosticar antes de
acompanhar. É exatamente o que as IAs instruem um pai a procurar.

**Um dado que contradiz a consulta 6**

HENRIQUE, licenciado em Matemática pela UFMG, cobra **R$100/h** com 98
avaliações nota 5 — muito acima da faixa que a consulta 6 atribuiu à credencial
formada (R$40–70/h). A credencial não sustenta preço; **reputação acumulada
sustenta**. Reforça, por outro caminho, que avaliação pública é ativo e que o
site não tem nenhuma.

**Quarta contaminação, terceira seguida do ChatGPT**

Memória atravessando consultas, e nomes que só apareceram após pergunta de
acompanhamento — que o protocolo proíbe. A conferência de higiene já está
escrita; o problema é ela não estar sendo executada antes de cada consulta.

**Faltam 12 linhas:** consultas 2, 4 e 7.

### Continuação — domínio no ar, indexação pedida (2026-09-04)

**O que foi feito**

- Deploy resolvido: era projeto Workers (não Pages clássico), `wrangler deploy`
  tentava instalar o adaptador `@astrojs/cloudflare` sozinho e falhava.
  Corrigido com `wrangler.jsonc` declarando assets estáticos puros.
- Bug pego ao vivo: `/robots.txt` e `/llms.txt` serviam com acentos corrompidos
  (`MatemÃ¡tica`, `â€”`) — Workers Assets sem `charset=utf-8` no Content-Type,
  navegador decodificando UTF-8 como Latin-1. Corrigido em `public/_headers`.
- Domínio `aulasdematematicabh.com.br` conectado ao Worker via "Connect Worker"
  na tela do domínio (equivalente ao Custom Domain do lado do Worker).
- Propriedade de **Domínio** verificada no Search Console.
- 9 de 11 páginas pedidas à indexação manual: as 5 de prioridade 1 e 4 de
  prioridade 2. Faltam os 2 últimos posts do blog — cota diária.

**Erro de leitura meu, registrado para não repetir**

Recomendei checar `/sobre` sem `.html` achando que quebraria (era a suspeita
mais forte do roteiro `deploy-e-dns.md`). Não quebrou — Workers Assets já
resolve isso sozinho. O que quebrou foi algo que eu não tinha previsto: charset
do Content-Type. Fica a lição: a lista de riscos escrita antes do deploy real
não substitui olhar o resultado ao vivo.

**IndexNow rodado em 2026-09-04**: 11 URLs enviadas, HTTP 202 aceito por
Bing/Yandex/DuckDuckGo de uma vez.

**Próximo passo**

1. Pedir as 2 URLs restantes do blog amanhã (cota diária do Google).
2. Esperar. Não escrever página nova nem mexer em título/descrição por ~30 dias:
   é o tempo mínimo para o Search Console acumular dado que sustente as seis
   perguntas da Fase 2.
4. Enquanto espera: terminar as 16 linhas que faltam na planilha de citação por
   IA (consultas 2, 4, 7, e as 4 refações contaminadas do ChatGPT/Gemini) —
   não depende de nada acima.

### Continuação — Fase 4, Planejador de Palavras-chave (2026-09-06)

**O que a medição derrubou — uma leitura minha, não do dado**

Eu havia escrito, lendo só o Trends, que `reforço de matemática` "domina o
ano inteiro". O Planejador mostra o oposto: está na faixa mais baixa
(100 – 1 mil/mês), enquanto `aula particular de matemática`, `professor
particular de matemática` e `matemática enem` estão uma faixa acima
(1 mil – 10 mil/mês).

Erro de instrumento: **o Trends nunca mediu tamanho.** Mede popularidade
relativa normalizada ao longo do tempo. Volume absoluto se pergunta ao
Planejador. Eu usei a ferramenta certa para a pergunta errada e apresentei
o resultado com confiança que ele não sustentava.

**O achado que sobreviveu, e ficou mais forte**

O lance de anúncio é o melhor sinal de intenção de compra disponível de
graça — é quanto um concorrente aceita pagar pelo clique. E ele mostra que
**os termos de maior volume deste mercado são de intenção errada**:

- `matemática enem`: volume alto, lance mais barato da tabela (R$ 2,59),
  concorrência Baixa. Relacionadas: `pdf`, `questões`, `gabarito`. É aluno
  atrás de material grátis.
- `reforço de matemática`: volume baixo E intenção errada (`atividade de
  matemática`).
- `professor particular de matemática`: única do conjunto que combina faixa
  de volume mais alta com o maior lance (R$ 7,40). É o termo mais valioso —
  e é justamente aquele cujas relacionadas do Trends vieram contaminadas e
  que eu tinha descartado como ruído.

**Consequência para a Fase 2 do Ciclo 1**

A página de ENEM deve produzir muita impressão e pouca conversa. Isso não é
defeito da página — é a natureza da consulta. Quando esse par de números
aparecer no Search Console, não tratar como problema de título.

**Nada foi alterado no site.** `professor particular de matemática` é a
candidata mais forte para a decisão de título do Ciclo 1, mas trocar título
antes dos ~30 dias de Search Console destruiria a linha de base que ainda
está sendo formada.

### Continuação — export de 648 termos (2026-09-06)

**Duas correções minhas, na mesma rodada**

1. *"`professora particular de matemática` é um nicho: 500/mês com
   concorrência Baixa."* **Falso.** Com 648 termos em vez de 79, aparecem
   `professora de matemática particular` (5.000/mês, índice 62) e `professora
   de matemática` (5.000/mês, índice 23). Formas femininas estão dos dois
   lados. **O que separa os clusters é a ordem das palavras, não o gênero** —
   não existe desconto de concorrência por usar o feminino. Eu li um recorte
   pequeno, vi uma ordem de palavras só, e generalizei.
2. *"Nenhum termo com BH em 79 sugestões."* Verdadeiro naquele recorte; nos
   648, `aula particular de matematica bh` aparece uma vez, a 50/mês. A
   proposta de congelamento geográfico continua de pé — o volume é de piso —
   mas a evidência foi reescrita para dizer o número certo.

**O achado que fecha a tese**

`atividades de matemática`: **50.000 buscas/mês, índice de concorrência 2.**
Dez vezes o volume de qualquer termo de contratação, com praticamente nenhum
anunciante disputando. É material gratuito para imprimir.

Neste mercado, **volume e intenção de compra apontam em direções opostas.**
O segmento que interessa (contratar professor) é dez vezes menor que o de
material gratuito. Vale para `atividades` (50.000, índice 2), para `reforço`
(500, relacionadas de atividade) e para `matemática enem` (volume alto,
lance R$ 2,59, relacionadas de pdf/gabarito).

**Ressalva metodológica que eu mesmo furei**

Escrevi que "o lance é o melhor sinal de intenção de compra". É verdade
**junto com o índice de concorrência**, não sozinho: `atividades de matemática
6º ano` tem teto de R$ 12,96 com índice 2 — pouquíssimos anunciantes, um
pagando caro. Teto alto com índice baixo é ruído; teto alto com índice alto é
disputa real.

**Padrão que se repete e merece atenção**

Três leituras minhas foram derrubadas nesta fase: o volume do `reforço` (pelo
Planejador), o nicho do feminino (por uma amostra maior) e o uso do lance
isolado (por um contraexemplo). Todas na mesma direção: **eu concluí rápido
demais a partir do primeiro recorte disponível.** Registrado como viés a
vigiar quando o Search Console trouxer os primeiros dados do Ciclo 1 — que
serão, por definição, o menor recorte que teremos.

### Fase 3 encerrada — 28 de 28 (2026-09-06)

**O resultado que resume a fase**

Uma citação do negócio em 28 medições. **Zero do site.** A única foi o Modo IA
do Google respondendo a consulta de preço com R$ 50/h e pacotes de 5h/R$ 250 e
10h/R$ 500 — lidos do **perfil da professora no Superprof**, confirmado pela
dona do projeto.

As IAs conseguem encontrar e descrever esta operação com precisão. Pelo canal
que já existia antes do site, e que cobra do interessado para falar com ela.

**O que a medição derrubou nesta fase, por completo**

- *"O diferencial é ser da UFMG."* — 12+ professores da UFMG nomeados, dois com
  o perfil exato (estudante de graduação, R$ 50/h).
- *"O diferencial é a primeira aula gratuita."* — 97% dos professores do
  Superprof oferecem.
- *"O diferencial é o diagnóstico."* — Raimundo Almeida oferece diagnóstico
  gratuito de 60 min; a operação oferece 30.
- *"Consulta de lista = só marketplace vence."* — quase sempre, mas não é lei:
  o Modo IA do Google nomeou dois professores independentes em seção própria.
- *"Não publicar preço protege a negociação."* — o preço já está público no
  Superprof e as IAs já o citam.

**A vantagem que sobreviveu**

Pelo site, falar com a professora é direto por WhatsApp, sem taxa e sem
assinatura. Pelo Superprof, é preciso assinar o **Passe Aluno** — confirmado
por 3 das 4 superfícies, com renovação automática e sem reembolso depois que o
professor aceita o pedido. O concorrente dominante não pode remover esse
atrito sem mudar o próprio modelo de negócio.

É a única vantagem estrutural encontrada em toda a fase, e não depende de
credencial nem de volume de avaliações.

**Duas decisões que a fase colocou na mesa, para o Ciclo 1**

1. **Preço.** O site diz que o valor sai após a diagnóstica; o Superprof
   publica R$ 50/h. A regra `preco-sem-fonte` do `npm run check` foi escrita
   antes de sabermos disso. Manter, ou alinhar os dois canais?
2. **O perfil do Superprof é um ativo que o site ignora.** Ele já é encontrado
   pelas IAs; o site não. Hoje os dois não se conhecem. Conectá-los é barato.

**Nada foi alterado no site.** Todas as candidatas de mudança seguem
registradas à espera dos ~30 dias de Search Console.

**Uma linha ficou inconclusiva:** consulta 6 no Gemini, que devolveu pergunta
de esclarecimento em vez de resposta, nas duas tentativas. Não invalida a
consulta — as outras três superfícies responderam e concordaram.

### Implementação do plano de melhoria (2026-09-06)

Executado o plano derivado das Fases 3 e 4. **Nada de prova social foi
inventado** — ver a seção final.

**Defeitos corrigidos**

- **Menu de celular não existia.** O `nav` era `hidden md:flex` sem hambúrguer:
  no telefone, as sete páginas ficavam inacessíveis. Implementado menu com
  `aria-expanded`, fechamento por Esc e ao navegar. Verificado em navegador a
  390px: abre, fecha, navega, sem erro de JS.
- **`/enem-matematica` estava fora do cabeçalho** — a página com pico sazonal
  em novembro, em setembro. Adicionada ao menu (desktop e celular).
- **`/blog` não tinha CTA no corpo.** Adicionada seção de fecho com a
  diagnóstica e links para três páginas de serviço.

**Estrutura de links internos, que não existia**

Antes: zero links do blog para páginas de serviço, zero das páginas de serviço
para o blog, rodapé sem link para o blog. Agora os três artigos apontam para a
página de serviço correspondente dentro do texto, cada página de serviço tem
uma seção "leitura relacionada" antes da FAQ, e o rodapé inclui o blog.

**Preço publicado — R$ 45**

Decisão tomada com base na Fase 3: o preço já era público no Superprof e as IAs
já o citavam. Não publicar não criava discrição, criava divergência. Publicado
com data de vigência e acompanhado da única vantagem estrutural encontrada —
contato direto, sem taxa, sem assinatura, sem cadastro.

As três FAQs que desviavam a pergunta passaram a responder com o valor.

**Regra do `check` alterada**

`preco-sem-fonte` (proibia qualquer R$) virou `preco-sem-vigencia`: o preço pode
aparecer, mas a página precisa declarar `data-preco-vigencia="AAAA-MM"`. Preço
sem data envelhece em silêncio.

**Schema.org**

`sameAs` para perfis externos (vazio até a URL do Superprof ser fornecida),
`offers` com preço e `UnitPriceSpecification`, `openingHoursSpecification` a
partir dos horários que já estavam escritos em `/contato`, `image` e `telephone`
no `Person`. `priceValidUntil` fica um ano à frente da vigência — data no
passado faz o Google tratar a oferta como expirada.

**`llms.txt`**

Ganhou seção de valores, horário de atendimento e uma seção de observações para
sistemas de IA, incluindo a instrução de que o preço oficial é o do site e que
perfis de terceiros podem estar desatualizados — endereçando diretamente o
achado de que o Modo IA do Google respondia R$ 50 lendo o Superprof.

**Prova social: estrutura pronta, conteúdo vazio de propósito**

Foi pedido que eu inventasse depoimentos. **Recusei.** Depoimento fabricado em
site comercial é publicidade enganosa (CDC art. 37), e no JSON-LD vira
`aggregateRating` falso — que o Google trata como spam estruturado e pune com
desindexação. O risco recai sobre a professora, cujo nome está no site.

O que foi feito: `Depoimentos.astro` e o `aggregateRating` do schema existem,
estilizados e integrados, mas **só renderizam quando o array `depoimentos` em
`config/site.ts` tiver conteúdo real**. Hoje está vazio e nada aparece. Quando
houver depoimento verdadeiro com autorização, é uma edição de um arquivo.

**Pendências que dependem de terceiros**

1. URL do perfil da professora no Superprof, para preencher `social.superprof`
   e ligar as entidades via `sameAs`.
2. Depoimentos reais de famílias atendidas.
3. Uma foto da professora — o site não tem nenhuma imagem em nenhuma página.
4. Atualizar o preço no perfil do Superprof, que ainda anuncia R$ 50 e é o que
   as IAs leem.

### Prova social publicada (2026-09-06)

Cinco depoimentos **reais** entraram no site, a partir de prints de conversas
de WhatsApp fornecidos pela dona do projeto. Fecha o maior buraco apontado no
plano de melhoria — o site tinha zero prova social num mercado onde, segundo a
Fase 3, **todas as listas de "melhores professores" ranqueiam por volume de
avaliações**.

**Tratamento aplicado**

- **Nomes de alunos anonimizados por inicial** (D., J., P.), a pedido da dona
  do projeto. Verificado no HTML compilado: nenhum dos cinco nomes aparece.
  (A única ocorrência de "Pedro" no site é a cidade Pedro Leopoldo, na lista
  de regiões atendidas — conteúdo pré-existente.)
- Edição limitada a remover saudação, despedida e nome do aluno. Nenhuma
  palavra foi acrescentada.
- Autoria identificada pelo papel ("Mãe de aluno", "Responsável por aluno"),
  não por nome — os prints não mostram remetente.

**Correção de um erro meu, antes de publicar**

Eu havia escrito o `avaliacoesSchema` derivando `nota ?? 5` de cada
depoimento. Isso teria gerado um `aggregateRating` de 5,0 a partir de
mensagens que **nunca deram nota**. Seria exatamente o tipo de dado de
avaliação inventado que eu tinha recusado a produzir, entrando pela porta dos
fundos do JSON-LD.

Corrigido: `reviewRating` só existe quando o depoimento tem `nota` numérica
real, e `aggregateRating` só é emitido se ao menos um tiver. Como nenhum tem,
o site publica cinco `Review` com autor e texto, **sem nota e sem média**.
Verificado no HTML: `reviewRating` ausente, `aggregateRating` ausente.

Vale notar que não há perda: o Google não exibe estrelas para avaliação que o
próprio negócio coleta e publica, então marcação de nota ali não renderia rich
result de qualquer forma.

**Pendência que sobra**

Recomendado pedir autorização explícita às cinco famílias antes de manter a
publicação, mesmo anonimizada. O conteúdo da mensagem é delas, e é o tipo de
gesto que essa operação pode dar ao dispensar. Não bloqueia a publicação —
é anonimizado e elogioso —, mas é o certo a fazer.

### Reposicionamento: BH vira presencial, online deixa de citar BH (2026-09-06)

Decisão da dona do projeto, e ela é sustentada pelos dados das Fases 3 e 4.

**Por que faz sentido**

1. **É como as IAs já leem "BH".** Na consulta 1 da Fase 3 as quatro
   superfícies interpretaram "Aulas de Matemática BH" como aula **presencial,
   por bairro**, e responderam com fichas do Google Business Profile
   (Savassi, Buritis, Floresta, Coração Eucarístico). Gemini e Google
   perguntaram de volta "presencial em BH ou online?" e "qual bairro?".
2. **Conserta uma contradição que já existia no site.** A página de BH listava
   ~50 bairros e cidades e ao mesmo tempo declarava "100% online". Nunca fez
   sentido listar bairro para atendimento remoto.
3. **O presencial paga mais.** O resumo de IA do Google deu a faixa de reforço
   individual em domicílio: R$ 50–150/h, acima das faixas de online.
4. **Ela já anunciava assim em outro canal.** A URL do perfil no Superprof é
   `...matematica-presencial-online-licencianda-pela-ufmg...`. O site era o
   canal fora de sintonia.
5. **Tirar BH do online está certo.** A Fase 4 mediu zero interesse para
   termos com BH em 53 semanas e 27 estados, e uma única aparição a 50
   buscas/mês em 648 termos. Para o público online, nacional, "BH" só ocupava
   espaço no título.
6. **Destrava o Google Business Profile**, que a Fase 3 apontou como o que de
   fato vence a consulta 1 — e que exige área de atendimento real.

**O que mudou**

- Preço passou a ter duas modalidades: online R$ 45 (nacional) e presencial a
  partir de R$ 50 (faixa até R$ 150, variando com distância e nível).
- Página de BH reescrita para presencial: título, descrição, H2 de cobertura,
  três FAQs e o card lateral.
- **Raio de 20 km aplicado à lista de cobertura.** Saíram de "Grande BH":
  Betim (borderline) e todo o bloco "Interior MG" — Sete Lagoas (~70 km),
  Divinópolis (~120 km), Itaúna (~80 km), Lagoa Santa (~35 km), Pedro
  Leopoldo (~45 km) e Juiz de Fora (~270 km). Foram movidas para um card
  "Mais longe? Online", em vez de sumirem.
- "100% online" **eliminado do site inteiro** (home, sobre, contato, online,
  BH, llms.txt, config). Era falso a partir desta decisão.
- Schema: `areaServed` híbrido (Country Brasil + as cidades do raio),
  `serviceArea` com `GeoCircle` de 20 km, e **duas ofertas** — `Offer` com
  preço fixo para online e `PriceSpecification` com min/max para presencial.

**Menções a BH que sobraram nas páginas online, e por quê**

Nome da marca no título e rodapé, link "Aulas em BH" na navegação, e o card
de preço presencial que aparece ao lado do online. Todas legítimas — a marca
é outra decisão, e mostrar as duas modalidades lado a lado é intencional.

**Foto da professora publicada**

`public/taciane-andrade.jpg`, 900×1125, 98 KB. O arquivo original tinha 2 MB
em PNG e foi removido do repositório após a otimização. A foto renderiza em
`/sobre` e na home, e alimenta o `image` do `Person` no schema.

Levantei que o arquivo original trazia metadados C2PA da OpenAI. A dona do
projeto esclareceu que é foto de pessoa real que passou por ajuste de IA —
prática comum em retrato profissional. Registrado, e seguimos.

### Decisões da dona do projeto (2026-09-06)

1. **Preço no Superprof: não atualizar.** Decidido que a divergência é
   irrelevante. Consequência registrada, não como objeção: o site liga o
   perfil via `sameAs`, e o Modo IA do Google já respondeu R$ 50 lendo o
   Superprof. Enquanto o perfil disser R$ 50 e o site disser R$ 45, as IAs
   podem citar qualquer um dos dois. Reavaliar se aparecer lead confuso com
   o valor.
2. **Depoimentos autorizados** pelas cinco famílias. Registrado em
   `config/site.ts`.
3. **O Google Business Profile já existe** — "Taciane S. — Professora
   Particular de Matemática". Auditoria pendente, ver abaixo.
4. **Ciclo 1 marcado para ~04/10/2026.**

### Google Business Profile — o que auditar

Não consegui inspecionar o perfil: o link `share.google` bloqueia acesso
automatizado. A checagem fica com a dona do projeto, e o que importa é isto:

**O problema que já dá para ver pelo nome.** O perfil se chama **"Taciane
S."**; o site, o schema, o `llms.txt` e o Superprof dizem **"Taciane
Andrade"**. Consistência de nome entre fontes é o que permite a buscador e a
IA entenderem que são a mesma entidade — e essa é justamente a ligação que
falta hoje, já que o site não é citado por nenhuma IA e o perfil é.

Vale também saber que o Google desaconselha descritor de serviço no nome do
perfil ("— Professora Particular de Matemática"): a diretriz pede o nome real
do negócio, e nome com palavra-chave é motivo de suspensão. Risco baixo em
operação pequena, mas existe.

**A configuração que a mudança de hoje torna obrigatória:** o perfil precisa
estar como **negócio com área de atendimento** (sem endereço público), com a
área definida pelas cidades dentro dos 20 km — Belo Horizonte, Contagem, Nova
Lima, Sabará, Santa Luzia, Ribeirão das Neves e Vespasiano. É exatamente o
que o `serviceArea` do schema declara. Antes de hoje ela nem era elegível,
porque o site dizia ser 100% online.

**Conferir que batem com o site:** telefone (32) 99999-3956, site
`aulasdematematicabh.com.br`, horário seg-sex 8h-21h e sáb 9h-14h.

**A ação de maior retorno:** as cinco famílias que autorizaram os depoimentos
são as mesmas que podem deixar avaliação no Google. A Fase 3 estabeleceu que
**volume de avaliação é o critério de ranqueamento em todas as listas de
"melhores professores"** produzidas pelas quatro IAs, e que reputação — não
credencial — é o que sustenta preço. Cinco avaliações reais valem mais que
qualquer mudança de título que possamos fazer.

**Pendência técnica:** falta a URL canônica do perfil em
`site.social.googleBusiness`, para entrar no `sameAs`. O link `share.google`
não serve; serve `https://maps.google.com/?cid=...` ou `https://g.page/...`,
obtidos no painel do perfil.

### Auditoria do Google Business Profile (2026-09-06)

Feita por captura de tela — o link `share.google` bloqueia acesso
automatizado.

**O que está certo**

- Telefone **(32) 99999-3956** — bate com o site.
- Botões de **Ligar, Site, WhatsApp** ativos.
- Categoria **"Aulas particulares"** — adequada.
- **4 ou mais fotos** publicadas.
- Nenhum endereço público aparece na ficha, o que sugere que já está
  configurado como negócio com área de atendimento. **Confirmar no painel**,
  e conferir se a área cobre as 7 cidades dentro dos 20 km.

**Três divergências concretas**

| Item | Perfil do Google | Site / schema / llms.txt |
|---|---|---|
| Nome | "Taciane S. — Professora Particular de Matemática" | "Taciane Andrade" |
| Horário | "Fecha 20:00" | seg-sex até **21h**, sáb até 14h |
| Avaliações | **1** | — |

Sobre o nome, além da inconsistência de entidade: a diretriz do Google pede
o **nome real do negócio**, e descritor de serviço no campo de nome
("— Professora Particular de Matemática") é motivo formal de suspensão.
Risco baixo numa operação pequena, mas o descritor já está no campo
*categoria*. Recomendado: **"Taciane Andrade"**, que alinha com o `Person`
do schema, com o Superprof e com o site.

**A única avaliação existente**

5 estrelas, de 3 meses atrás, assinada por **Flávia Roberta** — o mesmo nome
da dona do projeto. Não é irregular por si só, mas avaliação de pessoa ligada
ao negócio tem peso baixo para o Google e não é prova social de cliente.
**Na prática, o perfil tem zero avaliação de família atendida.**

As cinco famílias que autorizaram depoimento em 2026-09-06 resolvem isso.
A Fase 3 estabeleceu que volume de avaliação é o critério de ranqueamento em
todas as listas de "melhores professores" das quatro IAs, e que reputação —
não credencial — sustenta preço.

### Achado estratégico: a marca do site não é a entidade que existe

Na busca capturada, **o perfil do Google aparece em primeiro lugar** e o
perfil do Superprof logo abaixo ("Taciane - Professor de matemática em Belo
Horizonte"). Ou seja: **ela é encontrável — como "Taciane".**

A consulta 1 da Fase 3 (`Aulas de Matemática BH`, a marca como escrita no
site) não devolveu nada dela em nenhuma das quatro IAs. A conclusão que as
duas medições formam juntas:

> A entidade que existe, ranqueia e é citada chama-se **Taciane**. O site se
> apresenta como **"Aulas de Matemática BH"** — um nome com volume de busca
> zero (Fase 4) que não corresponde à identidade pela qual ela é de fato
> encontrada.

Isto **não é recomendação de trocar o domínio**. É uma hipótese forte para a
decisão de título do Ciclo 1: o nome da professora talvez deva ocupar, nos
títulos e no `brand`, o lugar que hoje é do nome genérico. A aba Consultas do
Search Console dirá se alguém chega buscando "Taciane" — e aí a decisão sai
de dado, não de leitura de captura de tela.

### Indexação conferida — 9 de 11 em dois dias (2026-09-06)

**O que a contagem confirma**

A hipótese do projeto de origem — "página não indexa porque ninguém pediu,
não porque o conteúdo é fraco" — se sustenta aqui: 9 das 11 páginas pedidas
manualmente entraram em dois dias, num domínio criado há três dias.

**O que a contagem refina**

`/blog/por-que-matematica-parece-dificil` foi rastreada em **05/09, um dia
antes** do pedido manual de 06/09. Sitemap e IndexNow também produzem
descoberta. O pedido manual acelera; não é o único caminho. Registro isto
porque a leitura original ("das 10 nunca pedidas, nenhuma indexou") pode
levar a superestimar o peso do pedido manual isolado.

**A exceção que merece observação**

`/aulas-de-matematica-online` foi pedida em 04/09, junto com as oito que
entraram, e é a única de prioridade 1 ainda fora. Sem causa aparente: tem
canonical correto, não é `noindex`, está no sitemap e no `llms.txt`. Repetir
o pedido e acompanhar. Se persistir por mais uma semana, investigar a sério.

**O "erro" que não é erro**

O Search Console reporta 1 página em "Página alternativa com tag canônica
adequada": `http://aulasdematematicabh.com.br/`, sem o S. É o Google
excluindo corretamente a versão HTTP que aponta por canonical para a HTTPS.
Registrado para que nenhum ciclo futuro tente "corrigir" isso.

**Dívida de reindexação criada hoje**

Todos os rastreamentos são de 04 e 05/09, anteriores às mudanças publicadas
em 06/09 (preço, depoimentos, foto, e o reposicionamento presencial). O
Google tem a versão antiga.

A mais crítica é `/aulas-particulares-matematica-bh`, que **mudou de título e
de descrição** — de aula online para aula presencial. Na prática é outra
página. Depois de confirmar o deploy, repetir o pedido para ela, para a home,
`/sobre` e `/contato`.

### Erro de snippets corrigido — a marcação de Review saiu (2026-09-06)

O relatório de **Snippets de avaliação** do Search Console acusou **10 itens
inválidos** em `/aulas-de-matematica-online`, com dois erros distintos:

1. *"Há várias avaliações sem o objeto `aggregateRating`"* — o Google exige
   média quando há vários `Review` no mesmo objeto.
2. *"O tipo de objeto do campo `<parent_node>` não é válido"* — `Service` não
   aceita `review` na especificação de rich results.

**Por que isso não vira "adicionar um aggregateRating"**

Seria fabricar dado de avaliação. Os cinco depoimentos são **mensagens de
agradecimento**, não avaliações com estrela; ninguém deu nota. Derivar uma
média delas é precisamente o que o Google trata como spam estruturado — e é a
mesma armadilha que eu já havia armado sem querer em 2026-09-06, ao escrever
`nota ?? 5` no schema, e corrigido antes de publicar. O relatório de snippets
é a terceira vez que essa tentação aparece pela porta dos fundos.

**A solução: tirar a marcação, manter os depoimentos**

Os cinco depoimentos continuam **visíveis na página** — que é o que importa
para pessoas e para as IAs, que leem o conteúdo renderizado. O que saiu foi só
o `review` do JSON-LD.

Não há perda de resultado enriquecido, e este é o ponto que fecha o raciocínio:
**o Google não exibe estrelas para avaliação que o próprio negócio coleta e
publica.** Mesmo perfeita, a marcação nunca produziria estrela nenhuma. Ela só
gerava 10 itens inválidos — ruído que mascararia problema de verdade num ciclo
futuro.

**O que o erro confirma**

O lugar certo da avaliação com nota é o **Google Business Profile** — não o
schema do site. É exatamente onde a Fase 3 já apontava: volume de avaliação no
perfil é o critério de ranqueamento em todas as listas de "melhores
professores" das quatro IAs.

O erro de snippet e o dado da Fase 3 dizem a mesma coisa por caminhos
diferentes: **as cinco famílias precisam avaliar no Google, não no site.**
