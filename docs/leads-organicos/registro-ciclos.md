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
