/* global Headers */
/* global window */
/* global document */
/* global XMLHttpRequest */

import fetch from 'isomorphic-fetch'
import promise from 'es6-promise'

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
    data: json
  }))
}

class Api {
  constructor (apiConfig) {
    this.host = apiConfig.host
    this.port = apiConfig.port
  }

  save (data, callback) {
    const url = `/resource/${(data['@id'] || '')}`
    fetch(`http://${this.host}:${this.host}${url}`, {
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
      .then(data => {
        callback(data)
      }).catch(err => {
        console.error(err)
      })
  }

  load (url, callback, authorization) {
    url = url === '/' ? '/resource/' : url
    const headers = new Headers({
      'Accept': 'application/json'
    })
    if (authorization) {
      headers.append('Authorization', authorization)
    }
    fetch(`http://${this.host}:${this.port}${url}`, {
      headers,
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
      .then(data => {
        callback(data)
      }).catch(err => {
        console.error(err)
      })
  }

  find (term, types, callback) {
    const url = `/resource/?q=${term}*` + (types ? `&filter.about.@type=${types.join(',')}` : '')
    fetch(`http://${this.host}:${this.port}${url}`, {
      headers: new Headers({
        'Accept': 'application/json'
      }),
      credentials: 'include'
    }).then(checkStatus)
      .then(toJson)
      .then(data => {
        callback(data.data)
      }).catch(err => {
        console.error(err)
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
