/* global document */
/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import mitt from 'mitt'
import { AppContainer } from 'react-hot-loader'

import router from './router'
import { getParams } from './common'
import './styles/main.pcss'
import Api from './api'

(function () {

  document.addEventListener('DOMContentLoaded', () => {


    const emitter = mitt()
    const context = {}
    Object.assign(context, window.__APP_INITIAL_STATE__)
    context.emitter = emitter

    const api = new Api(context.apiConfig)

    const renderApp = (title, component) => {
      ReactDOM.render(
        <AppContainer>
          {component}
        </AppContainer>,
        document.getElementById('root')
      )
      emitter.emit('setLoading', false)
      window.location.hash
        && document.getElementById(window.location.hash.replace('#', ''))
        && document.getElementById(window.location.hash.replace('#', '')).scrollIntoView()
      document.title = title
    }

    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Save data to the API
    emitter.on('save', data => {
      router(api).route('/resource/', context).post(data).then(({title, component}) => {
        renderApp(title, component)
      })
    })
    // Transition to a new URL
    emitter.on('navigate', url => {
      const actualUrl = url.startsWith('#')
        ? window.location.pathname + window.location.search + url
        : ( url.startsWith('/') ? url : window.location.pathname + url)
      if (window.location.pathname + window.location.search + window.location.hash !== actualUrl) {
        window.history.pushState(null, null, url)
        window.dispatchEvent(new window.PopStateEvent('popstate'))
      }
    })
    // Find data from the API
    emitter.on('getOptions', ({term, schema, callback}) => {
      console.log(schema)
      if (schema.properties.inScheme) {
        api.vocab(schema.properties.inScheme.properties['@id'].enum[0]).then(response => {
          callback(response.data)
        })
      } else {
        api.find(term, schema.properties['@type'].enum).then(response => callback(response))
      }
    })
    // Log in
    emitter.on('login', () => {
      const request = new XMLHttpRequest()
      request.open('GET', '/.login', false)
      request.send(null)
      window.location.reload()
    })
    // Log out
    emitter.on('logout', () => {
      if (!document.execCommand("ClearAuthenticationCache")) {
        const request = new XMLHttpRequest()
        const url = `${window.location.protocol}//logout@${window.location.hostname}/.logout`
        request.open('GET', url, false)
        request.send(null)
      }
      window.location.reload()
    })

    window.addEventListener('popstate', () => {
      const url = window.location.pathname
      const params = getParams(window.location.search)
      emitter.emit('setLoading', true)
      router(api).route(url, context).get(params).then(({title, component}) => {
        renderApp(title, component)
      })
    })

    const url = window.location.pathname
    const params = getParams(window.location.search)
    router(api).route(url, context, window.__APP_INITIAL_STATE__.data).get(params)
      .then(({title, component}) => {
        renderApp(title, component)
      })

  })
})()
