
const baseUrl = Cypress.env('baseUrl')
import { GlobalSelectors, Search } from "../selectors/tabTracker-selectors"

// CREATE 
export class AddNewSongs {
    NavigateToAddNewSong() {
        cy.visit(baseUrl)
        cy.contains('add')
            .should('exist')
            .and('be.visible')
            .click()
    }
    navigateToNewSongCreate() {
        cy.visit('http://localhost:8080/#/songs/create')
        return this
    }
    createSongPageToolBar() {
        cy.get(GlobalSelectors.toolBarItems)
            .should('exist')
            .and('be.visible')
    }

    songCreatePage() {
        cy.get(GlobalSelectors.toolbar)
            .should('exist')
            .and('be.visible')
    }
    createSong() {
        cy.get(GlobalSelectors.button)
            .should('exist')
            .and('be.visible')
            .click()
        return this
    }

    requiredAlert() {
        cy.get(GlobalSelectors.dangerAlert)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('Please fill in all the required fields.')
            })
    }
    titleInput() {
        cy.songTitle()
    }
    tittleValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(1).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('TitleRequired.')
            })
    }
    artistInput() {
        cy.songArtist()
    }
    artistValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(2).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('ArtistRequired.')
            })
        return this
    }
    genreInput() {
        cy.songGenre()
    }
    genreValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(3).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('GenreRequired.')
            })
        return this
    }
    albumInput() {
        cy.songAlbum()
    }
    albumValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(4).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('AlbumRequired.')
            })
        return this
    }

    albumImageInput() {
        cy.songAlbumImage()
    }
    albumImageValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(5).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('Album Image UrlRequired.')
            })
        return this
    }
    youTubeIdInput() {
        cy.songYouTubeId()
    }
    youTubeIdValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(6).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('YouTube IDRequired.')
            })
        return this
    }
    tabInput() {
        cy.songTab()
    }
    tabValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(7).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('TabRequired.')
            })
        return this
    }
    lyricsInput() {
        cy.songLyrics()
    }
    lyricsValidation() {
        cy.get(GlobalSelectors.inputFiled).eq(1).click()
        cy.get(GlobalSelectors.inputValidation).should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.text().trim()).to.equal('LyricsRequired.')
            })
        return this
    }

    addNewSongData(data) {
        cy.songTitle().type(data)
        cy.songArtist().type(data)
        cy.songGenre().type(data)
        cy.songAlbum().type(data)
        cy.songAlbumImage().type(data)
        cy.songYouTubeId().type(data)
        cy.songTab().type(data)
        cy.songLyrics().type(data)
        this.createSong()
    }

    verifySongAfterAdding() {
        cy.get(Search.dashBoardContent)
            .should('exist')
            .and('be.visible')
            .then(($el) => {
                expect($el.length).to.equal(7 +1)
            })
    }
}