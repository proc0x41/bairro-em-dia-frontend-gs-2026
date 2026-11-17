# Bairro em Dia — Front-End Design Engineering

SPA para registrar e acompanhar problemas urbanos: buracos, iluminação pública e descarte irregular. React 19 + Vite 7 + TypeScript 5.9 + Tailwind CSS 4, React Router e Lucide. A integração utiliza Fetch API e a API Java do grupo.

## Integrantes e contato

| Nome | RM | Turma | E-mail |
| --- | --- | --- | --- |
| Vinicius de Oliveira | 561862 | 1TDSPW | rm561862@fiap.com.br |
| Robison Custodio Junior | 572866 | 1TDSPW | rm572866@fiap.com.br |
| Lucas Fernando Silva | 564848 | 1TDSPW | rm564848@fiap.com.br |
| Thiago Shimizu Sodré dos Santos | 572867 | 1TDSPW | rm572867@fiap.com.br |
| Arthur Mendes Garcia | 571703 | 1TDSPW | rm571703@fiap.com.br |

Representante: Arthur Mendes Garcia — rm571703@fiap.com.br.

## Links de entrega

- Front End na Vercel: https://bairro-em-dia-frontend-gs-2026-pygm.vercel.app
- API no Render: https://bairro-em-dia-java-gs-2026.onrender.com
- GitHub Front End: https://github.com/proc0x41/bairro-em-dia-frontend-gs-2026
- GitHub Java: https://github.com/proc0x41/bairro-em-dia-java-gs-2026

URLs de publicação atualizadas em 17/11/2026. O resultado da verificação remota está em docs/CONFERENCIA-ENTREGA.txt.

## Executar a partir da raiz deste ZIP

Requisito: Node.js 22.12 ou superior.

```powershell
npm.cmd ci
Copy-Item .env.example .env.local
npm.cmd run dev
```

No Linux/macOS use npm e cp .env.example .env.local. O exemplo aponta para a API publicada no Render. Para executar com Java local, altere VITE_API_URL em .env.local para http://localhost:8080 e inicie o backend separado. O comando de desenvolvimento atende em http://127.0.0.1:5173; essa origem precisa estar permitida no CORS da API.

Build: npm.cmd run build. Prévia: npm.cmd run preview. Variáveis VITE_* são públicas e não devem conter senhas ou chaves.

## Estrutura, rotas e interação

- src/components: Layout, Feedback, PageHeading, Loading, StatusBadge, OcorrenciaCard e AcessoGestao.
- src/pages: Home, Integrantes, Sobre, FAQ, Contato, consulta, cadastro e detalhes.
- src/services: Fetch API e carregamento; src/types: contratos TypeScript; src/assets: ilustração SVG.
- Rotas institucionais: /, /integrantes, /sobre, /faq e /contato.
- Solução: /ocorrencias, /registrar e /ocorrencias/:id; há tratamento de rota inexistente.

A interface consulta registros com GET e cadastra ocorrências/comentários com POST real. PUT de situação e DELETE exigem a chave da equipe na API. Formulários têm validação e feedback; consultas têm loading, erro e estado vazio. Contato prepara um arquivo de mensagem local, explicitamente, e não envia e-mail.

Na página de detalhes, Acesso da equipe → Entrar na gestão recebe a chave configurada somente no backend. A chave fica na memória da página. Veja ACESSO-AVALIACAO.txt.

## Vercel e responsividade

Build na raiz deste projeto: npm run build; saída dist; vercel.json reescreve rotas para a SPA. Configure VITE_API_URL=https://bairro-em-dia-java-gs-2026.onrender.com e libere https://bairro-em-dia-frontend-gs-2026-pygm.vercel.app no CORS do backend.

As evidências de 13/11/2026 registram verificações em 390×844, 768×1024 e 1440×900, com GET/POST reais, navegação e tratamento de estados. Não houve nova inspeção visual nesta sessão devido à restrição de execução do navegador.

## GitHub e entrega

Repositório público confirmado em 17/11/2026: 28 commits, sendo 8 atribuídos a Arthur e 5 a cada um dos outros quatro integrantes. A contagem atende ao mínimo do PDF; metadados não comprovam participação efetiva. A documentação revisada nesta sessão está no ZIP local e ainda não foi enviada ao GitHub.

Enviar somente FrontEnd-BairroEmDia.zip na disciplina de Front, sem node_modules, com tamanho inferior a 50 MB. Java é uma entrega separada.

## Verificação e uso de IA

Conferência de 17/11/2026: 21 testes de integração Java aprovados (11 de API, 9 de segurança e 1 de gestão desabilitada); TypeScript aprovado com tsc -b --force. A tentativa de build Vite e de navegador nesta sessão encontrou bloqueio de processo/permissão (spawn EPERM). As evidências anteriores de 13/11/2026 registram build e testes de navegador/Oracle; elas não são apresentadas como uma nova execução. Veja docs/CONFERENCIA-ENTREGA.txt e docs/evidencias/validacao-remota-20261117.json para os resultados e limites da verificação remota.

Implementação e documentação realizadas com apoio do Codex/OpenAI. Os integrantes devem revisar, compreender e registrar as próprias contribuições. Não foi realizada pesquisa de campo; dados demonstrativos são sintéticos. Consulte docs/USO-IA.md.
