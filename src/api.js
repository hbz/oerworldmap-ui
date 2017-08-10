import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

promise.polyfill()

class Api {
  constructor (apiConfig) {
    this.host = apiConfig.host
    this.port = apiConfig.port
  }

  load (url, callback) {
    if (url === '/') {
      callback({})
    }
    const init = {
      headers: {
        'Accept': 'application/geo+json'
      }
    }
    console.log('requested', url)
    fetch(this.host + ':' + this.port + url, init)
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then(data => {
        callback(data)
      })
  }
}

export default Api
