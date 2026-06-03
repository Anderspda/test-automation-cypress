# test-automation

Automação de testes de interface para o site Automation Exercise.

## Sobre

Este projeto usa Cypress para testar o fluxo de cadastro de usuário no site `http://automationexercise.com`.

## Stack

- Cypress `^15.16.0`
- Faker (`@faker-js/faker`) para gerar dados de cadastro aleatórios

## Estrutura principal

- `cypress.config.js` — configuração do Cypress
- `cypress/e2e/login.cy.js` — teste E2E de cadastro de usuário
- `package.json` — dependências do projeto

## Teste atual

O caso atual cobre:

1. Acessar a página inicial do Automation Exercise
2. Entrar na tela de cadastro/login
3. Preencher nome e email aleatórios
4. Completar a criação de conta
5. Validar a mensagem de conta criada
6. Confirmar que o usuário foi logado
7. Excluir a conta e validar a exclusão permanente

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o Cypress no modo interativo:

```bash
npx cypress open
```

3. Ou execute o teste em modo headless:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Observações

- O teste utiliza dados dinâmicos gerados pelo Faker para email, nome e sobrenome.
- A configuração atual do `cypress.config.js` desativa o watch de arquivos.
- Não há script `test` configurado em `package.json` no momento.

