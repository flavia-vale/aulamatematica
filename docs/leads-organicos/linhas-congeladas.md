# Linhas congeladas

Onde paramos de investir, e por qual evidência.

Duas regras que fazem o congelamento valer:

1. **Não apague as páginas congeladas.** Perder link e histórico não ajuda. Só
   pare de investir.
2. **Escreva a evidência junto da decisão.** Sem isso, daqui a dois meses alguém
   propõe a mesma coisa e ninguém lembra por que foi descartada.

E a regra que evita que isto vire dogma: **quem decide prioridade é a dona do
projeto.** Volume de busca é argumento de prioridade, não de correção. Uma linha
pode ser reaberta por decisão explícita — e isso se registra aqui como decisão,
não como exceção esquecida.

## Formato

Cada linha congelada declara um padrão de rota, que a varredura da Fase 5 passa
a bloquear (`npm run check` falha se uma página nova casar com ele):

```
### <nome da linha>
- rota: /padrao-*
- congelada em: AAAA-MM-DD
- evidência: <o número que sustenta a decisão>
```

## Linhas congeladas

**Nenhuma ainda.** As duas abaixo têm evidência suficiente e estão propostas —
falta a decisão explícita da dona do projeto para virarem congelamento de fato.

## Propostas de congelamento — Fase 4, 2026-09-06

Evidência completa em [mercado.md](mercado.md).

### Páginas por bairro ou cidade

```
- rota: /aulas-matematica-*
- rota: /matematica-*-bh
```

**Evidência, de três instrumentos independentes:**

1. Trends, série de 12 meses: `aula particular de matemática bh` e `professor
   particular de matemática belo horizonte` ficaram em **zero nas 53 semanas**.
2. Trends, mapa: **zero nos 27 estados**, sem exceção.
3. Planejador, gerador de ideias: num conjunto de **648 termos**, `aula
   particular de matematica bh` aparece **uma única vez, com 50 buscas/mês** —
   o piso da tabela. Num outro conjunto de 79 termos, nenhuma variante com BH
   apareceu, e as quatro variantes com Porto Alegre também ficaram em 50/mês.

Ou seja: a cidade *existe* como busca, com volume de piso. Página por
bairro estaria uma camada abaixo disso. Some-se o dado do projeto de origem
(quinze páginas por cidade, ~25 impressões em dois meses e meio) e o fato de o
serviço ser 100% online.

### Páginas por série

```
- rota: /matematica-*-ano
```

**Evidência:** `aula particular de matematica ensino fundamental` — a única
variante qualificada por nível que o Planejador devolveu em 79 termos —
registra **50 buscas/mês**, o piso da tabela. Nenhuma variante por ano
específico (6º, 7º, 9º…) apareceu.

Nove páginas de conteúdo quase idêntico disputando 50 buscas/mês, com risco de
canibalizar as quatro páginas de serviço que já existem e já cobrem série
dentro do próprio conteúdo.

## Candidatas ainda em aberto

Não são decisões — são as linhas que **provavelmente** vão querer expansão e que
merecem o dado antes:

- ~~**Páginas por bairro de BH**~~ e ~~**páginas por série**~~ — **o dado
  chegou, ver a proposta de congelamento abaixo.**
- **Páginas por vestibular** além do ENEM (UFMG, FUVEST…). Verificar no Trends
  se o volume justifica antes de escrever.
- **Termos que "parecem óbvios" — já medido, ver [mercado.md](mercado.md).**
  `reforço de matemática` domina em volume, mas a intenção por trás é
  material/exercício, não contratar professor — volume alto aqui não é sinal
  de bom lead. `reforço escolar de matemática`, a frase que é literalmente o
  H1 da página de reforço, tem volume baixíssimo como termo de busca.
- **Termos com "BH"/"Belo Horizonte" — já medido, ver [mercado.md](mercado.md).**
  Zero interesse mensurável no Trends, em todos os 27 estados, no ano
  inteiro. Não é motivo para remover a marca geográfica do site, mas é
  argumento contra depender dela no título para captar busca.
