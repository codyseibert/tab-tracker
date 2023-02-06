import { AddNewSongs } from "./create/createPage"
import { searchPage } from "./search/search"

import { RegisterPage } from "./signup/registration"
const search = new searchPage()
const baseUrl = Cypress.env('baseUrl')
const createSongPage = new AddNewSongs()
const registerNewUser = new RegisterPage()
describe('Navigate to create song', () => {
    before(() => {
       createSongPage.navigateToNewSongCreate()
    })
    it('Should navigate to create song page', () => {
        createSongPage.NavigateToAddNewSong()
    })
    it('Should have song metadata and song structure input fields', () => {
        createSongPage.navigateToNewSongCreate()
        .songCreatePage()
    })
    it('Should have tool bar in create song page', () => {
        createSongPage.navigateToNewSongCreate()
        .createSongPageToolBar()
       
    })

})

describe('Create song validation', () => {
    beforeEach(() => {
        createSongPage.navigateToNewSongCreate()
    })

    it('Should not able to submit form without input values', () => {
        createSongPage.createSong()
            .requiredAlert()
    })
    it('Should have validation message for title', () => {
        createSongPage.titleInput()
        createSongPage.tittleValidation()
    })
    it('Should have validation message for artist', () => {
        createSongPage
            .artistInput()
            createSongPage.artistValidation()
    })
    it('Should have validation message for genre', () => {
        createSongPage
            .genreInput()
            createSongPage.genreValidation()
    })
    it('Should have validation message for album', () => {
        createSongPage
            .albumInput()
            createSongPage.albumValidation()
    })
    it('Should have validation message for album image', () => {
        createSongPage
            .albumImageInput()
            createSongPage.albumImageValidation()
    })
    it('Should have validation message for you tube id', () => {
        createSongPage
            .youTubeIdInput()
            createSongPage.youTubeIdValidation()
    })
    it('Should have validation message for tab', () => {
        createSongPage
            .tabInput()
            createSongPage.tabValidation()
    })
    it('Should have validation message for lyrics', () => {
        createSongPage
            .lyricsInput()
            createSongPage.lyricsValidation()
    })
})
describe('Create song', () => {
    beforeEach(() => {
        createSongPage.navigateToNewSongCreate()
    })

    it.skip('Should create a new song', () => {
        createSongPage.addNewSongData('TEST')
    })
    it('Dashboard should have a new song', () => {
        cy.visit(baseUrl)
        createSongPage.verifySongAfterAdding()
    })

})