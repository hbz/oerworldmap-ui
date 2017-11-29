/* global Headers */
/* global window */
/* global document */
/* global XMLHttpRequest */

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'
import linkHeader from 'http-link-header'

promise.polyfill()

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const toJson = response => {
  return response.json().then(json => {
    if (response.headers.has('Link')) {
      json._links = linkHeader.parse(response.headers.get('Link'))
    }
    return json
  })
}

class Api {
  constructor (apiConfig) {
    this.host = apiConfig.host
    this.port = apiConfig.port
  }

  save (data) {
    const url = `/resource/${(data['@id'] || '')}`
    return fetch(`http://${this.host}:${this.port}${url}`, {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(checkStatus)
      .then(toJson)
      .catch(err => {
        console.error("Error saving to " + url, err)
        return Promise.resolve({
          data: {
            '@type': 'ErrorPage',
            'message': err.message
          }
        })
      })
  }

  load (url, authorization) {
    const headers = new Headers({
      'Accept': 'application/json'
    })
    if (authorization) {
      headers.append('Authorization', authorization)
    }
    return fetch(`http://${this.host}:${this.port}${url}`, {
      headers,
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
  }

  find (term, types) {
    const url = `/resource/?q=${term}*` + (types ? `&filter.about.@type=${types.join(',')}` : '')
    return fetch(`http://${this.host}:${this.port}${url}`, {
      headers: new Headers({
        'Accept': 'application/json'
      }),
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
      .catch(err => {
        console.error("Error loading " + url, err)
        return Promise.resolve({
          data: {
            member: []
          }
        })
      })
  }

  vocab (url) {
    switch(url) {
    case 'https://w3id.org/class/esc/scheme':
      return Promise.resolve({
        data: {
          member: require('./json/esc.json').hasTopConcept.map(entry => {return {about: entry}})
        }
      })
    case 'https://w3id.org/isced/1997/scheme':
      return Promise.resolve({
        data: {
          member: require('./json/isced-1997.json').hasTopConcept.map(entry => {return {about: entry}})
        }
      })
    case 'https://github.com/hbz/oerworldmap/public/json/licenses.json':
      return Promise.resolve({
        data: {
          member: require('./json/licenses.json').hasTopConcept.map(entry => {return {about: entry}})
        }
      })
    case 'https://github.com/hbz/oerworldmap/public/json/sectors.json':
      return Promise.resolve({
        data: {
          member: require('./json/sectors.json').hasTopConcept.map(entry => {return {about: entry}})
        }
      })
    default:
      return Promise.resolve({
        data: {
          member: []
        }
      })
    }
  }

  login () {
    const request = new XMLHttpRequest()
    request.open('GET', `http://${this.host}:${this.port}/.login`, false)
    request.send(null)
    window.location.reload()
  }

  logout () {
    if (!document.execCommand("ClearAuthenticationCache")) {
      const request = new XMLHttpRequest()
      request.open('GET', `http://logout@${this.host}:${this.port}/.logout`, false)
      request.send(null)
    }
    window.location.reload()
  }

}

export default Api
