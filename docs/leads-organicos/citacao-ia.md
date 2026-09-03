# Citação por IA — medição manual

Mensal, ~20 minutos. Não existe ferramenta: você pergunta e anota.

No projeto de origem esse foi **o canal que mais trouxe cliente** — 43% dos
cadastros vieram do ChatGPT com apenas 18% das visitas, enquanto o Google trazia
70% das visitas.

## Protocolo

**7 consultas fixas × 4 superfícies.** Sempre as mesmas perguntas, sempre na
mesma ordem, sempre em aba anônima (sessão logada personaliza a resposta e
contamina a série).

Superfícies: **ChatGPT · Gemini · Perplexity · resumo de IA do próprio Google**.

As sete consultas, adaptadas para esta operação:

| # | Tipo | Consulta |
|---|---|---|
| 1 | marca sozinha | `Aulas de Matemática BH` |
| 2 | marca + preço | `quanto custa aula com a professora Taciane Andrade de matemática` |
| 3 | categoria, como o cliente chama | `professor particular de matemática online` |
| 4 | consulta de lista | `melhores professores particulares de matemática online no Brasil` |
| 5 | o problema, em linguagem de cliente | `meu filho está indo mal em matemática no 9º ano, o que fazer` |
| 6 | o diferencial mais específico | `aula particular de matemática com professora da UFMG` |
| 7 | o maior concorrente | `Superprof matemática vale a pena` |

## Planilha

Uma linha por consulta × superfície (28 linhas/mês). Quatro colunas:

| Consulta | Superfície | Citou o site? | Acertou os fatos? | **Quem citou no lugar** |
|---|---|---|---|---|

**A última coluna é a mais valiosa.** No projeto de origem ela revelou 19
concorrentes que o Search Console nunca mostrou — as duas listas de concorrentes
eram quase disjuntas. Monte as duas: a do Search Console e a das IAs.

Nos fatos, confira especificamente: o nome da professora, "licencianda pela
UFMG" (e não "formada"), o atendimento 100% online para todo o Brasil, e a aula
diagnóstica gratuita de 30 minutos.

## Duas armadilhas que só a medição na mão pega

**Marca ambígua vira outra coisa.** "Aulas de Matemática BH" é uma descrição
genérica antes de ser um nome — o risco concreto aqui é a consulta 1 devolver
listas de cursinhos e escolas de Belo Horizonte sem citar o site. No projeto de
origem, três das quatro IAs devolviam calçado infantil quando perguntadas pelo
nome da marca. Nenhuma ferramenta de SEO conta isso.

**Página que não existe de forma citável vira alucinação.** Perguntado sobre a
metodologia da empresa, o resumo de IA do Google *inventou* uma metodologia com
pilares nomeados e citou fontes falsas. Se a consulta 5 ou 6 devolver uma
descrição errada do método de trabalho, o conserto é **publicar a página real**,
não reclamar. O `llms.txt` e as páginas de FAQ existem para isso.

## Histórico

| Ciclo | Data | Citações (de 28) | Superfícies que citam (de 4) | Observação |
|---|---|---|---|---|
| 0 | — | | | ainda não medido |
