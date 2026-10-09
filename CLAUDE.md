# aulasdematematicabh.com.br

Site de aulas particulares de matemática da professora **Taciane Andrade**
(licencianda em Matemática pela UFMG). Astro estático, hospedado em Cloudflare
Workers, publicado a partir do `main`.

## Comandos

```sh
npm run dev        # servidor local
npm run build      # compila para dist/
npm run check      # build + varredura de conteúdo (Fase 5 do ciclo)
npm run indexnow   # avisa Bing/Yandex/DuckDuckGo (exige build antes)
```

`npm run check` é a trava do projeto. Ele varre `dist/` e **falha** se: título
ou descrição faltarem ou se repetirem entre páginas, faltar canonical, a
atribuição de lead quebrar (página sem WhatsApp, com duas frases diferentes,
ou repetindo a frase de outra página), houver promessa de resultado, houver
preço em R$ sem `data-preco-vigencia="AAAA-MM"` na página, um texto citar
preço da aula online ou do presencial diferente do oficial (lido do JSON-LD da
home), o JSON-LD contiver
`review` ou `aggregateRating`, uma página cair
numa linha congelada, uma página indexável faltar no `llms.txt` ou nas
pendências de indexação, uma URL entrar no sitemap **sem `lastmod`**, alguma página apontar para
um endereço do próprio domínio que redireciona (`http://`, `www.`, barra
final, `.html`, ou caminho de `public/_redirects`), ou uma
página indexável receber link interno de **menos de três páginas de origem**
(piso calibrado pelo Coverage de 16/09: as que ficaram fora do índice recebiam
uma ou duas).

Além dos erros, ele emite **avisos** que não falham: título acima de 60
caracteres, descrição acima de 160, e título sem número concreto. São
hipóteses ainda não medidas — viram pergunta do Ciclo 1, não conserto.

Regras em `scripts/check-conteudo.mjs`, com exceções nominais no topo do
arquivo.

## O Ciclo de Leads Orgânicos

Todo o trabalho de SEO/IA deste projeto segue um procedimento documentado em
**`docs/leads-organicos/`**. Antes de propor qualquer mudança de conteúdo,
título ou estratégia, **leia esses documentos** — eles contêm medições de campo
e várias hipóteses já derrubadas por dado.

| Documento | O que contém |
|---|---|
| **`ciclo-1.md`** | **Roteiro pronto da próxima rodada, a partir de 04/10/2026** |
| `README.md` | O procedimento: 7 fases, cadência, as 6 perguntas da Fase 2 |
| `registro-ciclos.md` | **Comece por aqui.** Diário do que foi feito e do que a medição derrubou |
| `mercado.md` | Google Trends + Planejador: volumes, sazonalidade, intenção |
| `citacao-ia.md` | Fase 3: 28 medições de citação por IA, com a síntese |
| `citacao-ia-planilha.csv` | Os dados brutos das 28 medições |
| `concorrentes.md` | Lista de concorrentes citados pelas IAs + preços de mercado |
| `funil.md` | Como a atribuição de lead funciona sem backend |
| **`plano-aceleracao.md`** | **Leitura do Search Console de 11/09 e o plano de 4 trilhas** |
| **`diagnostico-externo-2026-09-18.md`** | **Auditoria externa de 18/09: o que entrou, o que foi recusado e com qual evidência, e o que depende da dona do projeto** |
| **`relatorio-ciclo-1-2026-10-03.md`** | **Ciclo 1 com 30 dias: As-Is, To-Be (BH e Brasil), GAP e plano de ação** |
| **`plano-maquina-de-alunos-2026-10-09.md`** | **Plano de 09/10: a conta da máquina, as 5 frentes (ficha do Google, conteúdo, indicação, anúncio, universidade), conversão, medição e calendário** |
| `dados-2026-10-09/` | Search Console 3 meses (site, blog, recursos de IA), Planejador e Trends de 09/10 |
| `search-console-2026-09-11/` | Export bruto dos 7 primeiros dias |
| `tabela-historica.md` | A série do Search Console, uma linha por ciclo |
| `pendencias-indexacao.md` | Controle dos pedidos manuais de indexação no Google |
| `linhas-congeladas.md` | Onde se decidiu parar de investir, e por qual evidência |
| `../deploy-e-dns.md` | Deploy, DNS e verificação no Search Console |

## Fatos estabelecidos por medição — não re-litigar sem dado novo

- **Credencial UFMG não é diferencial.** 12+ professores da UFMG são nomeados
  pelas IAs, dois com o perfil exato (estudante de graduação, R$ 50/h).
- **Primeira aula gratuita não é diferencial.** 97% dos professores do
  Superprof oferecem.
- **A vantagem estrutural é o contato direto.** Pelo Superprof, o aluno precisa
  assinar o "Passe Aluno" para falar com o professor (confirmado por 3 de 4
  superfícies de IA). Pelo site, o WhatsApp é direto e gratuito.
- **Volume e intenção de compra andam em direções opostas.** `atividades de
  matemática` tem 50.000 buscas/mês com índice de concorrência 2 — é material
  gratuito. Os termos de contratação têm 5.000/mês e índice 52–62.
- **Termos com "BH" não têm volume.** Zero no Trends em 53 semanas e 27
  estados; uma única aparição a 50 buscas/mês em 648 termos do Planejador.
- **`matemática enem` tem pico nas duas semanas da prova, em novembro**, com
  subida a partir de setembro. Mas o lance baixo (R$ 2,59) indica busca por
  material, não por aula.
- **A Taciane já tem perfil no Superprof**, e é o único ativo dela que as IAs
  encontram e citam. O site não é citado por nenhuma delas.
- **O gargalo se moveu da posição para o clique.** Em 16/09, sete consultas
  de contratação paravam entre as posições 11 e 12. Em 03/10, com 835
  impressões em 30 dias, o mesmo cluster está entre 8 e 11, com ~80
  impressões na primeira página e **zero clique**. No celular (67% das
  impressões) a taxa de clique é 0,71%; no computador, 3,03%. Acima da
  posição 8 ficam anúncio, pacote local e Visão geral por IA.
- **Intenção e data valem mais que volume.** O artigo para `atividades de
  matemática` (50.000 buscas/mês) fez zero impressão em 22 dias de índice.
  Os três artigos de prova de admissão de BH (Coltec, CEFET-MG, Colégio
  Militar), locais e com data, fizeram 216 impressões e 6 cliques em 12 dias.
- **Título longo não mata o clique**, derrubado duas vezes (projeto de origem
  e 03/10): os cinco títulos com clique têm 74 a 110 caracteres.
- **O Bing tem 2 URLs do site** (cadastro feito, descobertas em 23/09). Em
  03/10 o ChatGPT citou o site na consulta de marca mesmo assim, por busca
  própria. O índice do Bing continua importando para Copilot e Bing; não é
  condição para o ChatGPT.
- **O site passou a ser citado pelas IAs em 03/10:** 3 linhas limpas em 9
  (ChatGPT na marca; Visão geral por IA do Google em preço e em UFMG). O que
  as citações reproduzem é o que as páginas declaram em texto e `FAQPage`:
  R$ 45 por 50 minutos (o preço da época; desde 09/10 é R$ 60), diagnóstica
  gratuita, "todo o Brasil", UFMG.
- **O perfil do Google não aparece no Maps nem no pacote local** (03/10, três
  consultas). Hipótese mais forte: a verificação está pendente (exige vídeo),
  e perfil não verificado não é exibido. Aparecem perfis sem endereço com 2
  avaliações; o da Taciane tem 4, sendo 3 de famílias.
- **O WhatsApp é DDD 32 (Juiz de Fora) numa marca que promete BH.** O site
  explica isso ao lado do número, no rodapé e em `/contato`, desde 18/09.
  Trocar o número é decisão em aberto — nunca deixar o visitante descobrir o
  DDD sozinho.

## Datas de atualização

`src/config/atualizacoes.ts` é a **fonte única** da data de última mudança de
cada página que não é artigo, e alimenta três lugares: o `lastmod` do sitemap,
a linha "Atualizado em" visível no fim da página e o `dateModified` do nó
`WebPage` no JSON-LD. É declarada à mão de propósito — `new Date()` fazia toda
página mentir a cada build, e num clone raso (`fetch-depth: 1`) a data do git
não existe. Artigo não entra lá: a data dele é `updatedAt ?? publishedAt`, no
frontmatter.

Mudança de rodapé, cabeçalho ou estilo aplicada ao site inteiro **não** muda a
data das páginas. Declarar que 33 páginas mudaram porque o rodapé ganhou uma
linha é o erro do `new Date()` em câmera lenta.

## Modelo de atendimento

### Duas linhas de ensino (superior aberta em 2026-09-17)

- **Fundamental e médio** — reforço escolar, recuperação e ENEM. Preço
  publicado: R$ 60 online, a partir de R$ 70 presencial (desde 09/10/2026;
  antes, R$ 45 e R$ 50). Vale para novos alunos; quem já é aluno segue no
  valor combinado, e isso não aparece no site.
- **Ensino superior** — pré-cálculo, Cálculo I, II e III, Estatística e
  Probabilidade, e GAAL. **Nenhuma página de ensino superior exibe R$**, e o
  schema delas usa `serviceSchemaSuperior`, sem oferta com preço. O motivo:
  a Fase 4 mediu este segmento com os **três maiores tetos de lance de toda a
  tabela** (R$ 9,41 a R$ 10,02) e a Fase 3 encontrou professores de cálculo
  cobrando R$ 80–140/h. Aplicar os R$ 60 aqui ancoraria a operação muito
  abaixo do mercado. **O valor de ensino superior ainda não foi definido pela
  dona do projeto** — enquanto `precoSuperior.valor` for nulo em
  `config/site.ts`, as páginas dizem que o valor sai após a diagnóstica.
- **Volume esperado do superior é baixo por natureza:** 50 buscas/mês por
  termo, contra 5.000 do cluster de fundamental e médio. Pouca impressão nessas
  páginas **não é defeito de título**. O que se mede ali é conversa por
  impressão.
- As seis matérias vivem em `materiasSuperior`, em `config/site.ts`, e as
  páginas são geradas por `aula-particular-de-[materia].astro`. O conteúdo que
  as diferencia (onde o aluno trava, ementa, pré-requisitos) fica no config —
  páginas quase idênticas disputando o mesmo termo canibalizam.

### Duas modalidades, deliberadamente separadas

- **Online — R$ 60/aula, todo o Brasil.** As páginas de aula online **não
  mencionam BH**: a Fase 4 mediu que termos com "BH" têm volume zero, e o
  público online é nacional.
- **Presencial — a partir de R$ 70, até 20 km do centro de BH**, na casa do
  aluno ou em local público. Cobre Contagem, Nova Lima, Sabará, Santa Luzia,
  Ribeirão das Neves e Vespasiano. Cidades além do raio (Lagoa Santa, Sete
  Lagoas, Divinópolis, Juiz de Fora) são atendidas **só online**.

A separação veio da Fase 3: as quatro IAs leem "BH" como consulta de aula
**presencial, por bairro**, e respondem com fichas do Google Business Profile.
O site disputava esse termo oferecendo aula remota — e listava 50 bairros para
um serviço que dizia ser 100% online.

**Não reintroduzir "100% online" em lugar nenhum.** É falso desde 2026-09-06.

## Quem mantém o site

As aulas são da **Taciane Andrade**; o site, o conteúdo e a tecnologia são da
**Flávia Vale**, fundadora do Espelha Grupos. A atribuição fica no **rodapé** e
no `creator`/`maintainer` do `WebSite` — **nunca na bio da professora**.
Misturar as duas pessoas na mesma bio derruba a confiança que a página
constrói, e é um erro fácil de cometer.

## Ativos externos

- **Superprof** — ligado via `sameAs`. Anuncia R$ 50; o site anuncia R$ 60
  desde 09/10 (antes, R$ 45). A dona do projeto decidiu **não corrigir** a
  divergência em 2026-09; com a mudança de preço, a diferença inverteu de
  lado e é decisão dela de novo.
- **Google Business Profile** — existe como "Taciane S. — Professora
  Particular de Matemática". Falta a URL canônica em
  `site.social.googleBusiness`, e o nome diverge do resto ("Taciane
  Andrade"). Auditoria detalhada em `registro-ciclos.md`.
- **Depoimentos** — publicação autorizada pelas cinco famílias em 2026-09-06.
  Ficam **visíveis na página, sem marcação `Review` no JSON-LD**. Não
  reintroduzir: `Service` não aceita `review`, o Google exige
  `aggregateRating` quando há vários, e não exibe estrela para avaliação que o
  próprio negócio publica. Derivar nota de mensagem de agradecimento é
  fabricar dado de avaliação. O lugar da nota é o Google Business Profile.

## Regras de trabalho

- **Não alterar título, descrição ou copy sem dado do Search Console.** O
  Ciclo 1 foi lido em 03/10/2026 (`relatorio-ciclo-1-2026-10-03.md`). As duas
  mudanças de título propostas lá (home e página de reforço) são decisão da
  dona do projeto, com o risco declarado. O Ciclo 2 lê a partir de 03/11.
- **`docs/leads-organicos/ciclo-1.md` é o roteiro de cada rodada**; o
  relatório de cada ciclo fica em `relatorio-ciclo-N-AAAA-MM-DD.md`.
- **Toda decisão de conteúdo vira regra no `check-conteudo.mjs`**, escrita como
  varredura com exceção nominal — nunca como lista do que conferir.
- **Registrar o que a medição derrubou**, sempre, em `registro-ciclos.md`.
  Hipótese contrariada por número não volta como opinião.
- **Quem decide prioridade é a dona do projeto.** Volume de busca é argumento
  de prioridade, não de correção.
