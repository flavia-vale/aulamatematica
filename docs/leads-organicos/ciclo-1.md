# Ciclo 1 — roteiro pronto, a partir de 04/10/2026

Este documento existe para que a próxima rodada não dependa de ninguém
lembrar de nada. Abra, execute de cima para baixo.

**Por que 04/10:** a propriedade foi verificada no Search Console em
04/09/2026, e o Search Console **não é retroativo**. Trinta dias é o mínimo
para haver dado que sustente as seis perguntas da Fase 2.

**Regra que vale até lá:** não alterar título, descrição ou copy. Há decisões
esperando esse dado — mexer antes destrói a linha de base que está se
formando agora.

---

## Passo 1 · Coletar (Fase 1, ~30 min)

Search Console → **Desempenho → Resultados da pesquisa**, período de 12 meses.

- [ ] **Ligar a métrica "posição média"** — costuma vir desligada, e sem ela
      metade das leituras do passo 2 é impossível.
- [ ] Exportar a aba **Consultas** em CSV
- [ ] Exportar a aba **Páginas** em CSV
- [ ] Exportar **Indexação / Cobertura**: quantas indexadas, quantas fora, e
      o motivo de cada uma

> **Convenção de contagem, imutável:** todos os números vêm da **soma da aba
> "Países"**, nunca do painel-resumo (que inclui linhas sem país atribuído).
> Misturar as duas entre ciclos transforma a série em ficção.

- [ ] Preencher a coluna `Indexada?` de
      [pendencias-indexacao.md](pendencias-indexacao.md) — as 11 páginas
      foram pedidas em 04 e 06/09. É essa contagem que responde se uma página
      não indexou por qualidade ou por ninguém ter pedido.

## Passo 2 · As seis perguntas (Fase 2)

Sempre estas seis, sempre nesta ordem.

1. [ ] **Quantas buscas distintas trouxeram gente?** É a métrica de progresso
       mais honesta. Ciclo 0 = 0.
2. [ ] **Que páginas têm muita impressão e zero clique?** Some as impressões
       desperdiçadas.
3. [ ] **Onde estamos na posição 8 a 20?** Falta pouco para a primeira
       página — prioridade sobre escrever qualquer coisa nova.
4. [ ] **A página que responde a consulta é a página certa?** *(ver a
       hipótese de canibalização no passo 4)*
5. [ ] **Quem chega, o que faz?** Cruzar com as conversas de WhatsApp,
       identificadas pela frase de origem — ver [funil.md](funil.md).
6. [ ] **De onde vieram os alunos que fecharam?** Não basta contar conversa.

- [ ] Preencher a linha do Ciclo 1 em
      [tabela-historica.md](tabela-historica.md)

## Passo 3 · Repetir a Fase 3 (~40 min)

As mesmas 7 consultas × 4 superfícies de [citacao-ia.md](citacao-ia.md).
**Não mudar o texto das consultas** — a série só compara se a pergunta for
idêntica.

- [ ] Conferir a higiene ANTES de cada consulta (chat temporário no ChatGPT,
      conversa nova no Gemini, anônima no resto). No Ciclo 0, **4 de 28
      linhas saíram contaminadas** por pular isso.
- [ ] Comparar com o Ciclo 0: **1 citação em 28, e ela apontava para o
      Superprof, não para o site.**

A pergunta que este ciclo responde: **o site passou a ser citado?** Se sim,
em quais consultas — e isso valida ou derruba a leitura de que consultas de
diretório são inalcançáveis para um site novo.

## Passo 4 · Decisões que estavam esperando este dado

### Títulos e descrições

Cinco páginas de serviço com título de 107 a 116 caracteres (Google mostra
~60) e descrição de 166 a 223 (corta ~160). Todos terminam no sufixo
`| Aulas de Matemática BH`, que nunca aparece e ancora num termo de volume
zero.

- [ ] Olhar o **CTR real** de cada página antes de encurtar qualquer coisa.

> A iniciativa de origem **derrubou com dado de campo** a hipótese "título
> longo mata o clique" — lá, os dois títulos mais longos eram os que mais
> convertiam. Encurtar por intuição é trocar uma opinião por outra.
> **Exceção:** se a página não tiver indexado, não há linha de base a
> proteger e a mudança fica livre.

### Canibalização

O título da home disputa "aulas particulares de matemática online" **e**
"reforço escolar" — os mesmos termos de `/aulas-de-matematica-online` e
`/reforco-escolar-matematica`.

- [ ] Na aba **Páginas**, ver qual página o Google escolheu para cada
      consulta. Só depois diferenciar.

### Analytics

A etapa "viu a página e não clicou" segue invisível. Gatilho combinado para
instalar: **uma página passar de ~100 impressões no mês com quase nenhuma
conversa vinda dela**. Opções e trade-offs em
[funil.md](funil.md#a-lacuna-conhecida).

- [ ] O gatilho foi atingido?

### `professor particular de matemática`

Único termo que combina a faixa de volume mais alta (5.000/mês) com o maior
lance (R$ 7,40) — e não aparece com destaque em nenhuma página. Ver
[mercado.md](mercado.md).

- [ ] O Search Console mostra o site aparecendo para essa forma?

## Passo 5 · Google Business Profile

O perfil existe ("Taciane S."). A Fase 3 estabeleceu que **é ele que vence as
consultas de BH**, não o site.

- [ ] Nome alinhado com "Taciane Andrade" (site, schema, `llms.txt` e
      Superprof usam essa forma)
- [ ] Configurado como **negócio com área de atendimento**, sem endereço
      público, cobrindo as 7 cidades dentro dos 20 km
- [ ] Telefone, site e horários batendo com o site
- [ ] URL canônica preenchida em `site.social.googleBusiness`
- [ ] **Avaliações**: as 5 famílias que autorizaram depoimento foram
      convidadas a avaliar no Google?

Este último item é, pelos dados do Ciclo 0, a ação de maior retorno que
existe — volume de avaliação é o critério de ranqueamento em todas as listas
de "melhores professores" que as quatro IAs produziram.

## Passo 5b · Canais fora do site

Levantamento e critérios em [canais.md](canais.md). A Faixa 1 é gratuita e
**não toca o site** — pode (e deve) estar pronta antes de 04/10.

- [ ] **Suas Aulas Particulares**: perfil criado, com mesmo nome, foto, bio e
      preço do site, e WhatsApp com a frase do canal
- [ ] **Superprof**: bio alinhada e as 5 famílias convidadas a avaliar também lá
- [ ] **Instagram**: @ reservado, bio, foto e link (fecha o buraco no `sameAs`)
- [ ] **Indicação**: as famílias atendidas foram perguntadas se conhecem outra
- [ ] Botão de WhatsApp de **cada** perfil usando o link de `waLinkForCanal()`
      — sem isso a conversa chega sem canal e o ciclo não aprende nada
- [ ] Contar as conversas do mês **por canal**, na coluna nova de
      [funil.md](funil.md)

## Passo 6 · Fechar o ciclo

- [ ] `npm run check` verde
- [ ] `npm run build && npm run indexnow` se houve página nova ou reescrita
- [ ] Pedir indexação manual no Google do que mudou — **só depois de estar no
      ar**
- [ ] Escrever o registro do ciclo em [registro-ciclos.md](registro-ciclos.md):
      o que foi feito, **o que a medição derrubou**, e as perguntas do Ciclo 2

## Sazonalidade — atenção específica de outubro

`matemática enem` sobe de setembro a outubro e **atinge o pico nas duas
semanas da prova, em novembro** (100 contra base de 10–20 no resto do ano).

- [ ] `/enem-matematica` está indexada e atualizada? Pedir indexação em
      novembro é tarde: o volume já estará caindo quando o Google processar.

> **Ressalva de intenção:** o lance de R$ 2,59 e a concorrência Baixa indicam
> que boa parte dessa busca é aluno atrás de prova e gabarito, não família
> contratando aula. A página deve dar **muita impressão e pouca conversa** —
> e isso **não é defeito de título**.
