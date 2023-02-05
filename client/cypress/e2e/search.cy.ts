
import { searchPage } from "./search/search"
const search = new searchPage()
describe('Search page', () => {
    beforeEach(() => {
        search.searchPageLanding()
    })
    it('Should have search page', () => {
        search.searchPageVerification()
    })
    it('Should have search input field', () => {
        search.searchInput()
    })
    it('Should have search input place holder', () => {
        search.searchPagePlaceHolder('Search by song title, artist, album, or genre')
    })

    it('Should able to see existing songs', () => {
        search.availableSongsOnDashBoard()
    })
    it('Should display song content', () => {
        search.songLayout()
    })
    it('Should able to see + add', () => {
        search.addNewSong()
    })
    
})