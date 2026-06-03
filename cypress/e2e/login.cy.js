/// <reference types="cypress" />
const { faker } = require('@faker-js/faker'); //importa a biblioteca faker para gerar dados aleatórios
const email = faker.internet.email() //gera um email aleatório usando a biblioteca faker
const firstName1 = faker.person.firstName() //gera um nome aleatório usando a biblioteca faker

describe('Cadastrar usuário', () => {
    it('Acessar a página de cadastro', () => {
        cy.visit('http://automationexercise.com') //acessa a página inicial do site
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() //clica no botão de cadastro/login
        cy.get('.signup-form > h2').should('contain', 'New User Signup!') //verifica se o título da página de cadastro/login está correto
        cy.get('[data-qa="signup-name"]').type(firstName1) //preenche o nome
        cy.get('[data-qa="signup-email"]').type(email) //preenche o email
        cy.get('[data-qa="signup-button"]').click() //clica no botão de cadastro

        cy.get(':nth-child(1) > b').should('contain', 'Enter Account Information') //verifica se o título da página de cadastro de conta está correto

        cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').click() //seleciona o título
        cy.get('[data-qa="name"]').clear().type(firstName1) //preenche o nome

        cy.wait(5000) //espera 5 segundo para garantir que o campo de email esteja limpo antes de preenchê-lo novamente

        cy.get('[data-qa="email"]').should('have.value', email) //verifica se o email está preenchido corretamente

        cy.get('[data-qa="password"]').type('123456') //preenche a senha
        cy.get('[data-qa="days"]').select('12') //seleciona o dia de nascimento
        cy.get('[data-qa="months"]').select('February') //seleciona o mês de nascimento
        cy.get('[data-qa="years"]').select('1993') //seleciona o ano de nascimento
        cy.get('[name="newsletter"]').click() //marca a opção de receber newsletter
        cy.get('[name="optin"]').click() //marca a opção de receber ofertas

        cy.get('[data-qa="first_name"]').type(faker.person.firstName()) //preenche o primeiro nome
        cy.get('[data-qa="last_name"]').type(faker.person.lastName()) //preenche o sobrenome
        cy.get('[data-qa="company"]').type('Automation Solutions LTDA') //preenche a empresa
        cy.get('[data-qa="address"]').type('Rua da automação, 54321') //preenche o endereço
        cy.get('[data-qa="country"]').select('Canada') //seleciona o país
        cy.get('[data-qa="state"]').type('Ontario (Província)') //preenche o estado, no caso província
        cy.get('[data-qa="city"]').type('Toronto') //preenche a cidade
        cy.get('[data-qa="zipcode"]').type('A1A 1A1') //preenche o código postal
        cy.get('[data-qa="mobile_number"]').type('+1 234 567 8900') //preenche o número de telefone
        cy.get('[data-qa="create-account"]').click() //clica no botão de criar conta

        cy.get('b').should('contain', 'Account Created!') //verifica se o título da página de conta criada está correto
        cy.get('[data-qa="continue-button"]').click() //clica no botão de continuar

        cy.get(':nth-child(10) > a').should('contain', `Logged in as ${firstName1}`) //verifica se o nome do usuário logado está correto

        cy.get('.shop-menu > .nav > :nth-child(5) > a').click() //clica no botão de deletar conta
        cy.get('.col-sm-9 > :nth-child(2)').should('contain', 'Your account has been permanently deleted!') //verifica se o título da página de conta deletada está correto

        
    })

})