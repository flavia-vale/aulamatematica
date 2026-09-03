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

**Já está pronta em [`citacao-ia-planilha.csv`](citacao-ia-planilha.csv)** — 28 linhas,
com as consultas e as superfícies preenchidas. Abra no Google Sheets ou no Excel
e preencha as colunas vazias. Duplique o bloco a cada ciclo, mudando a coluna
`Ciclo`.

Uma linha por consulta × superfície. As colunas que você preenche:

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

## Esta medição não depende do site estar no ar

Pelo contrário: rodar a Fase 3 **antes** do domínio propagar produz a linha de
base mais valiosa que existe — o retrato do "antes". Daqui a três meses ela é a
única prova de que alguma coisa mudou. São 20 minutos, e podem ser hoje.

## Histórico

| Ciclo | Data | Citações | Superfícies que citam | Observação |
|---|---|---|---|---|
| 0 | 2026-09-03 | 0 de 4 | 0 de 4 | só a consulta 1; site ainda não publicado |

### Ciclo 0 · consulta 1 — `Aulas de Matemática BH`

Quatro superfícies, zero citações. **O site ainda não está no ar, então isso era
o esperado** — o valor desta linha é ser a linha de base do "antes". O que ela
revela além do zero:

**A marca é ambígua, como previsto.** Nenhuma das quatro superfícies leu "Aulas
de Matemática BH" como nome de alguém. As quatro leram como descrição genérica e
devolveram lista de professores de Belo Horizonte. O risco levantado ao montar
esta consulta se confirmou na primeira medição.

**Quem vence essa consulta não são sites — são fichas do Google.** As respostas
mais ricas (resumo de IA do Google, Gemini) são feitas de perfis do Google
Business Profile: endereço, bairro, telefone, nota e número de avaliações. O
ChatGPT lista por bairro. Perplexity vai direto para marketplace. **Nenhuma
superfície recomendou um site institucional.** Um site bem otimizado, sozinho,
provavelmente não ganha esta consulta.

**"BH" no nome ancora num mercado presencial.** As quatro superfícies
interpretaram a consulta como aula presencial, por bairro. Nenhuma ofereceu aula
online de alcance nacional. O serviço é 100% online para todo o Brasil — há uma
tensão real entre o nome e o produto, e ela aparece já na primeira medição.

**O diferencial "UFMG" não é exclusivo.** O resumo de IA do Google cita Vanessa
Marçal, "formada pela UFMG", e um anúncio no Superprof de "estudante de
matemática na UFMG, 4º período, R$35/h" — posicionamento idêntico, preço
declarado. A consulta 6 (`aula particular de matemática com professora da UFMG`)
ficou muito mais interessante do que parecia.

Concorrentes e preços coletados: **[concorrentes.md](concorrentes.md)**.
