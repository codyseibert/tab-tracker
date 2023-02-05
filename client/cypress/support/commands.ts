/// <reference types="cypress" />


import { GlobalSelectors, Login, Registration } from "../e2e/selectors/tabTracker-selectors"
declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            loginToTabTracker(email: string, password: any): Chainable<any>;
            email(): Chainable<any>;
            password(): Chainable<any>;
            songTitle(): Chainable<any>;
            songArtist(): Chainable<any>;
            songGenre(): Chainable<any>;
            songAlbum(): Chainable<any>;
            songAlbumImage(): Chainable<any>;
            songYouTubeId(): Chainable<any>;
            songTab(): Chainable<any>;
            songLyrics(): Chainable<any>;
        }
    }
}

Cypress.Commands.add('loginToTabTracker', (email, password) => {

    cy.get(Login.loginEmail)
        .type(email)
    cy.get(Login.loginPassword)
        .type(password)
    cy.get(Login.loginButton).click()
})
Cypress.Commands.add('email', () => {
    cy.get(GlobalSelectors.placeHolderText)
        .eq(0)
        .should('exist')
        .and('be.visible')
    return this
})
Cypress.Commands.add('password', () => {
    cy.get(GlobalSelectors.placeHolderText)
        .eq(1)
        .should('exist')
        .and('be.visible')
    return this
})
Cypress.Commands.add('songTitle', () => {
    cy.get(GlobalSelectors.inputFiled).eq(0)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songArtist', () => {
    cy.get(GlobalSelectors.inputFiled).eq(1)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songGenre', () => {
    cy.get(GlobalSelectors.inputFiled).eq(2)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songAlbum', () => {
    cy.get(GlobalSelectors.inputFiled).eq(3)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songAlbumImage', () => {
    cy.get(GlobalSelectors.inputFiled).eq(4)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songYouTubeId', () => {
    cy.get(GlobalSelectors.inputFiled).eq(5)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songTab', () => {
    cy.get(GlobalSelectors.inputFiled).eq(6)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})
Cypress.Commands.add('songLyrics', () => {
    cy.get(GlobalSelectors.inputFiled).eq(7)
    .should('exist')
    .and('be.visible')
    .click().type('{esc}')
})


