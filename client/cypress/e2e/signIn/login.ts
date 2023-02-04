import { Login } from "../selectors/tabTracker-selectors"
export class loginPage {

    alert= 'The login information was incorrect'
    loginPage() {
        cy.visit('http://localhost:8080/#/login')
        cy.url().should('contain', '/#/login')
        cy.contains('Login').should('have.attr', 'href').and('include', 'login')
        return this
    }
    loginForm() {
        cy.get(Login.loginForm).should('exist')
            .and('be.visible')
        return this
    }

    loginFormToolbarTitle(formTitle) {
        cy.get(Login.loginToolBar)
            .eq(1).should('exist')
            .and('be.visible')
            .invoke('text').should("eq", formTitle);
        return this
    }

    loginPageToolbarTitle(regPageToolBarTitle) {
        cy.get(Login.loginToolBar)
            .eq(0).should('exist')
            .and('be.visible')
            .then(($el) => {
                const titleText = $el.text().trim()
                expect(titleText).to.equal(regPageToolBarTitle)
            })
    }
    loginPageToolBarItems(regPageToolBarItems) {
        cy.get(Login.loginPageToolBarItems)
            .eq(0)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                const itemsText = $el.text().trim()
                expect(itemsText).to.equal(regPageToolBarItems)
            })
        return this
    }

    signUpAnchorTag() {
        cy.contains('Sign Up')
            .invoke('attr', 'href')
            .then(href => {
                expect(href).to.equal('#/register')

            })
        cy.contains('Sign Up').should('have.attr', 'href').and('include', 'register')
        return this
    }

    loginPageSongsAnchorTag() {
        cy.contains('Browse')
            .invoke('attr', 'href')
            .then(href => {
                expect(href).to.equal('#/songs')
            })
        cy.contains('Browse').should('have.attr', 'href').and('include', 'songs')
        return this
    }

    loginEmial() {
        cy.get(Login.loginEmail)
            .should('exist')
            .and('be.visible')
        return this
    }
    loginPassword() {
        cy.get(Login.loginPassword)
            .should('exist')
            .and('be.visible')
        return this
    }
    loginButton() {
        cy.get(Login.loginButton)
            .should('exist')
            .and('be.visible')
        return this
    }

    emailDangerAlertText(alert) {
        cy.get(Login.loginDangerAlert)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                const alertText = $el.text().replace(/(\r\n|\n|\r)/gm, "");
                expect(alertText).to.include(alert)
            })
    }

    emailDangerAlert(email, password) {
        cy.intercept({
            method: 'POST',
            url: '/login',
        }).as('waitForLoad')
        cy.loginToTabTracker(email, password)
        cy.wait('@waitForLoad').then(() => {
            this.emailDangerAlertText(this.alert)
        })
    }

    passwordDangerAlert(email, password) {
        cy.intercept({
            method: 'POST',
            url: '/login',
        }).as('waitForLoad')
        cy.loginToTabTracker(email, password)
        cy.wait('@waitForLoad').then(() => {
            this.emailDangerAlertText(this.alert)
        })
    }

}