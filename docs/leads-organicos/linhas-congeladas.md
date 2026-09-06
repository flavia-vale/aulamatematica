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

**Nenhuma ainda.** Não há dado para congelar coisa alguma: o Search Console não
foi verificado e o site tem zero rodadas de medição. Congelar agora seria trocar
uma opinião por outra.

## Candidatas a avaliar no Ciclo 1 (a cada 3 meses, Fase 4)

Não são decisões — são as linhas que **provavelmente** vão querer expansão e que
merecem o dado antes:

- **Páginas por bairro de BH** (`/aulas-matematica-<bairro>`). No projeto de
  origem, quinze páginas por cidade somaram ~25 impressões em dois meses e meio.
  O agravante aqui: as aulas são 100% online, então o valor da segmentação
  geográfica é ainda menor. Não criar nenhuma antes do Planejador de
  palavras-chave dizer o volume real de "aula de matemática \<bairro\>".
- **Páginas por série** (`/matematica-6-ano`, `/matematica-9-ano`, …). Nove
  páginas com conteúdo quase idêntico é receita de canibalização com as quatro
  páginas de serviço que já existem. Medir antes se a busca por série tem volume
  próprio.
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
