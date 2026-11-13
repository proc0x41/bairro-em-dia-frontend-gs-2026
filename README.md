# Bairro em Dia — Front-End Design Engineering

SPA em React + Vite + TypeScript + Tailwind CSS para registrar e acompanhar problemas urbanos. O código foi implementado especificamente para a proposta CitizenTech, com Fetch API integrada ao Java; não utiliza template pronto.

## Executar

Requisitos: Node.js 22.12+ e backend iniciado.

```powershell
npm.cmd ci
Copy-Item .env.example .env.local
npm.cmd run dev
```

Edite `VITE_API_URL` em `.env.local` para apontar para a API. Valor padrão: `http://localhost:8080`. A API Java é uma entrega separada. Para a avaliação final, informe a URL da API no Render; o código Java não faz parte deste repositório.

Build: `npm.cmd run build`. Prévia: `npm.cmd run preview`.

## Páginas e arquitetura

`/`, `/integrantes`, `/sobre`, `/faq`, `/contato`, `/ocorrencias`, `/registrar`, `/ocorrencias/:id` e tratamento de rota inexistente. As duas páginas de solução são consulta e cadastro; detalhes adicionam a rota com parâmetro.

`src/components`: layout, cards, badges e feedback. `src/pages`: telas. `src/services`: Fetch API e carregamento. `src/types`: contratos TypeScript. `src/assets`: ilustração SVG original. Componentes reutilizados: Feedback, PageHeading e OcorrenciaCard.

Responsividade verificada em 390×844, 768×1024 e 1440×900. Formulários apresentam validação, erros e confirmação; consultas apresentam loading, erro e ausência de dados. Contato prepara um arquivo de mensagem local, de forma explícita.

## Integrantes e links obrigatórios

| Nome completo | RM | Turma | E-mail institucional |
| --- | --- | --- | --- |
| Vinicius de Oliveira | 561862 | 1TDSPW | rm561862@fiap.com.br |
| Robison Custodio Junior | 572866 | 1TDSPW | rm572866@fiap.com.br |
| Lucas Fernando Silva | 564848 | 1TDSPW | rm564848@fiap.com.br |
| Thiago Shimizu Sodré dos Santos | 572867 | 1TDSPW | rm572867@fiap.com.br |
| Arthur Mendes Garcia | 571703 | 1TDSPW | rm571703@fiap.com.br |

Representante e contato principal: **Arthur Mendes Garcia — rm571703@fiap.com.br**.

- GitHub público: https://github.com/proc0x41/bairro-em-dia-frontend-gs-2026
- Histórico exigido: 5 commits por integrante e 15 no total; com cinco integrantes, no mínimo 25 contribuições distribuídas conforme a participação.
- Vercel: **PENDENTE**. Diretório raiz de build: `.` (raiz deste repositório), comando `npm run build`, saída `dist`. O arquivo `vercel.json` trata rotas SPA.
- API Java no Render: **PENDENTE**. Configurar URL HTTPS em `VITE_API_URL` antes do build remoto.
- YouTube (até 3 minutos): **PENDENTE**, gravação pelo grupo.

## Uso de IA

Implementação, documentação e verificações locais realizadas com apoio do Codex/OpenAI. O grupo deve revisar e compreender a entrega. Não foi declarada revisão humana ainda não realizada. Consulte `docs/USO-IA.md`.

## Escopo do repositório

Este repositório contém exclusivamente Front-End Design Engineering. Java e Engenharia têm entregas próprias. A disciplina de Banco está sob responsabilidade de outra pessoa.

## API Java integrada

Código da API, entregue separadamente: https://github.com/proc0x41/bairro-em-dia-java-gs-2026. A API usa Oracle na entrega e H2 no perfil local. Configure VITE_API_URL com a URL HTTP local ou HTTPS do Render.

Em 13/11/2026, a interface compilada passou em sete verificações com a API Java conectada ao Oracle FIAP: cadastro, comentário, mudança de situação e rota dinâmica em três resoluções. As chamadas à API e a persistência foram reais. Os arquivos estáticos foram servidos dentro do navegador isolado de testes; a publicação na Vercel continua pendente. Resultados em `docs/validacao-frontend-oracle.json`. Os dados temporários foram removidos após a verificação.
