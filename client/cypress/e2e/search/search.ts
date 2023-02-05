import { Search } from "../selectors/tabTracker-selectors"

const baseUrl = Cypress.env('baseUrl')
export class searchPage {

    searchPageLanding() {
        cy.visit(baseUrl)
        cy.url().should('contain', '/#/songs')
        return this
    }
    searchPageVerification() {
        cy.get(Search.searchInput)
            .should('exist')
            .and('be.visible')
        cy.contains('Login').should('have.attr', 'href').and('include', 'login')
        cy.contains('Sign Up').should('have.attr', 'href').and('include', 'register')
    }
    searchInput() {
        cy.get(Search.searchInput)
            .should('exist')
            .and('be.visible')
    }
    searchPagePlaceHolder(searchPlaceHolderText) {
        cy.get(Search.searchInputPlaceHolder)

            .then(($el) => {
                expect($el.text()).to.equal(searchPlaceHolderText)
            })
    }
    availableSongsOnDashBoard() {
        cy.get(Search.dashBoardContent)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.length).to.equal(7)
            })
    }
    songLayout() {
        cy.get(Search.dashBoardContent).then(($el) => {
            const songs = $el.length
            for (let i = 0; i < songs; i++) {
                cy.get(Search.songLayout)
                    .should('exist')
                    .and('be.visible')
                cy.get(Search.songTitle)
                    .should('exist')
                    .and('be.visible')
                cy.get(Search.songArtist).should('exist')
                    .and('be.visible')
                cy.get(Search.songGenre)
                    .should('exist')
                    .and('be.visible')
                cy.get(Search.albumImage)
                    .should('exist')
                    .and('be.visible')
            }
        })
    }
    addNewSong() {
        cy.contains('add')
            .should('exist')
            .and('be.visible')
    }

}
