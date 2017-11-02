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
  return response.json().then(json => ({
    user: response.headers.get('X-Request-User'),
    data: json,
    links: linkHeader.parse(response.headers.get('Link'))
  }))
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
      .catch(err => {
        console.error("Error loading " + url, err)
        return Promise.resolve({
          data: {
            '@type': 'ErrorPage',
            'message': err.message
          }
        })
      })
  }

  find (term, types, callback) {
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
