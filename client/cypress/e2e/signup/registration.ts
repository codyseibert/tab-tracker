import { Registration } from "../selectors/tabTracker-selectors"
const baseUrl = Cypress.env('baseUrl')
export class RegisterPage {
    emailAlert = 'You must provide a valid email address'
    passwordAlert = 'The password provided failed to match the following rules:'
    '1. It must contain ONLY the following characters: lower case, upper case, numerics.'
    '2. It must be at least 8 characters in length and not greater than 32 characters in length.';

    
    navigateToSignUpPage() {
        cy.visit(baseUrl)
        cy.contains('Sign Up').click()
        cy.url().should('contain', '/#/register')
        cy.contains('Sign Up').should('have.attr', 'href').and('include', 'register')
        return this
    }
    registrationPage() {
        cy.visit('http://localhost:8080/#/register')
        cy.url().should('contain', '/#/register')
        cy.contains('Sign Up').should('have.attr', 'href').and('include', 'register')
        return this
    }
    registrationForm() {
        cy.get(Registration.regForm).should('exist')
            .and('be.visible')
        return this
    }

    registrationFormToolbarTitle(formTitle) {
        cy.get(Registration.regToolBar)
            .eq(1).should('exist')
            .and('be.visible')
            .invoke('text').should("eq", formTitle);
        return this
    }

    registrationPageToolbarTitle(regPageToolBarTitle) {
        cy.get(Registration.regToolBar)
            .eq(0).should('exist')
            .and('be.visible')
            .then(($el) => {
                const titleText = $el.text().trim()
                expect(titleText).to.equal(regPageToolBarTitle)
            })
    }
    registrationPageToolBarItems(regPageToolBarItems) {
        cy.get(Registration.regPageToolBarItems)
            .eq(0)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                const itemsText = $el.text().trim()
                expect(itemsText).to.equal(regPageToolBarItems)
            })
        return this
    }

    registrationPageLoginAnchorTag() {
        cy.contains('Login')
            .invoke('attr', 'href')
            .then(href => {
                expect(href).to.equal('#/login')

            })
        cy.contains('Login').should('have.attr', 'href').and('include', 'login')
        return this
    }

    registrationPageSongsAnchorTag() {
        cy.contains('Browse')
            .invoke('attr', 'href')
            .then(href => {
                expect(href).to.equal('#/songs')
            })
        cy.contains('Browse').should('have.attr', 'href').and('include', 'songs')
        return this
    }

    regEmail() {
        cy.get(Registration.inputFiled)
            .eq(0)
            .should('exist')
            .and('be.visible')
        return this
    }
    regPassword() {
        cy.get(Registration.inputFiled)
            .eq(1)
            .should('exist')
            .and('be.visible')
        return this
    }
    emailPlaceHolder(placeHolder) {
        cy.get(Registration.placeHolderText)
            .eq(0)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text()).to.equal(placeHolder)
            })
    }
    passwordPlaceHolder(placeHolder) {
        cy.get(Registration.placeHolderText)
            .eq(1)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text()).to.equal(placeHolder)
            })
    }
    regPageButton() {
        cy.get(Registration.regButton)
            .should('exist')
            .and('be.visible')
        return this
    }

    newUserSignUp(email, password) {
        cy.get(Registration.inputFiled)
            .eq(0)
            .type(email)
        cy.get(Registration.inputFiled)
            .eq(1)
            .type(password)
        cy.get(Registration.regButton).click()
        return this
    }
    emailDangerAlertText(alert) {
        cy.get(Registration.dangerAlert)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                const alertText = $el.text().replace(/(\r\n|\n|\r)/gm, "");
                expect(alertText).to.include(alert)
            })
    }
    waitForAlert() {
        cy.intercept({
            method: 'POST',
            url: '/register',
        }).as('waitForLoad')
        return cy.wait('@waitForLoad')

    }
    emailDangerAlert(email, password) {

        cy.intercept({
            method: 'POST',
            url: '/register',
        }).as('waitForLoad')
        this.newUserSignUp(email, password)
        cy.wait('@waitForLoad').then(() => {
            this.emailDangerAlertText(this.emailAlert)
        })
    }

    passwordDangerAlert(email, password) {
        cy.intercept({
            method: 'POST',
            url: '/register',
        }).as('waitForLoad')
        this.newUserSignUp(email, password)
        cy.wait('@waitForLoad').then(() => {
            this.emailDangerAlertText(this.passwordAlert)
        })
    }

}