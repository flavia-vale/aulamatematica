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
ou descrição se repetirem, faltar canonical, a atribuição de lead quebrar,
houver promessa de resultado, houver preço em R$ numa página, uma página cair
numa linha congelada, ou uma página indexável faltar no `llms.txt` ou nas
pendências de indexação. Regras em `scripts/check-conteudo.mjs`, com exceções
nominais no topo do arquivo.

## O Ciclo de Leads Orgânicos

Todo o trabalho de SEO/IA deste projeto segue um procedimento documentado em
**`docs/leads-organicos/`**. Antes de propor qualquer mudança de conteúdo,
título ou estratégia, **leia esses documentos** — eles contêm medições de campo
e várias hipóteses já derrubadas por dado.

| Documento | O que contém |
|---|---|
| `README.md` | O procedimento: 7 fases, cadência, as 6 perguntas da Fase 2 |
| `registro-ciclos.md` | **Comece por aqui.** Diário do que foi feito e do que a medição derrubou |
| `mercado.md` | Google Trends + Planejador: volumes, sazonalidade, intenção |
| `citacao-ia.md` | Fase 3: 28 medições de citação por IA, com a síntese |
| `citacao-ia-planilha.csv` | Os dados brutos das 28 medições |
| `concorrentes.md` | Lista de concorrentes citados pelas IAs + preços de mercado |
| `funil.md` | Como a atribuição de lead funciona sem backend |
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

## Regras de trabalho

- **Não alterar título, descrição ou copy sem dado do Search Console.** A
  propriedade foi verificada em 04/09/2026; o primeiro ciclo de leitura ocorre
  ~04/10/2026. Mexer antes destrói a linha de base.
- **Toda decisão de conteúdo vira regra no `check-conteudo.mjs`**, escrita como
  varredura com exceção nominal — nunca como lista do que conferir.
- **Registrar o que a medição derrubou**, sempre, em `registro-ciclos.md`.
  Hipótese contrariada por número não volta como opinião.
- **Quem decide prioridade é a dona do projeto.** Volume de busca é argumento
  de prioridade, não de correção.
