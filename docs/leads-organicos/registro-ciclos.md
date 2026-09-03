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
