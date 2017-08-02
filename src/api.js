import PagedCollection from '../test/resources/PagedCollection'
import WebPage from '../test/resources/WebPage.json'

class Api {
  load (url, callback) {
    // console.log('requested', url)
    return callback(url.startsWith('/resource/urn:uuid') ? WebPage : PagedCollection)
  }
}

export default Api
