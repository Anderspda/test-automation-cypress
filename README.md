# Test Automation

Projeto de automação de testes end-to-end com Cypress para o site Automation Exercise.

## Descrição

Este repositório contém um conjunto de testes automatizados desenvolvidos com Cypress para validar fluxos de login e interações básicas no site de automação de testes "Automation Exercise".

## Pré-requisitos

- Node.js v16 ou superior
- npm ou yarn instalado

## Instalação

1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
npm install
```

## Executando os testes

Para abrir a interface do Cypress e executar os testes interativamente:

```bash
npx cypress open
```

Para executar os testes em modo headless:

```bash
npx cypress run
```

## Estrutura do projeto

- `cypress/`
  - `e2e/` — arquivos de teste
  - `fixtures/` — dados de teste/fixtures
  - `support/` — comandos customizados e configurações de suporte
- `cypress.config.js` — configuração do Cypress
- `package.json` — dependências e dados do projeto

## Dependências

- `cypress` — framework de testes end-to-end
- `@faker-js/faker` — geração de dados falsos para testes

## Uso

Adapte os testes existentes em `cypress/e2e/login.cy.js` conforme necessário para cobrir novos cenários e páginas do site.

## Licença

Projeto com licença `ISC`.
