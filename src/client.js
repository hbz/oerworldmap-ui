/* global document */
/* global window */
/* global XMLHttpRequest */

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

    let referrer = window.location.href
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
      referrer = window.location.href
    }

    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Transition to a new URL
    emitter.on('navigate', url => {
      const parser = document.createElement('a')
      parser.href = url
      if (parser.href !== window.location.href) {
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
        const params = {
          q: term,
          'filter.about.@type': schema.properties['@type'].enum
        }
        router(api).route('/resource/', context).get(params).then(({data}) => callback(data))
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
    // Form submission
    emitter.on('submit', ({url, data}) => {
      router(api).route(url, context).post(data)
        .then(({title, data, render}) => {
          state = data
          window.history.pushState(null, null, data._location || url)
          renderApp(title, render(data))
        })
    })

    let state = window.__APP_INITIAL_STATE__.data
    window.addEventListener('popstate', () => {
      emitter.emit('setLoading', true)
      const url = window.location.pathname
      const params = getParams(window.location.search)
      const load = referrer.split('#')[0] !== window.location.href.split('#')[0]
      router(api).route(url, context, load ? null : state).get(params)
        .then(({title, data, render}) => {
          state = data
          renderApp(title, render(data))
        })
    })

    const url = window.location.pathname
    const params = getParams(window.location.search)
    router(api).route(url, context, state).get(params)
      .then(({title, data, render}) => {
        renderApp(title, render(data))
      })

  })
})()
