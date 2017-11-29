/* global document */
/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import mitt from 'mitt'
import { AppContainer } from 'react-hot-loader'

import Init from './components/Init'
import router from './router'
import { getTitle, getParams } from './common'
import './styles/main.pcss'

(function () {

  document.addEventListener('DOMContentLoaded', () => {

    const emitter = mitt()
    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Save data to the API
    emitter.on('save', data => api.save(data)
      .then(response => {
        state.data = response.data
        state.user = response.user
        renderApp(state, emitter)
      })
    )
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
        api.find(term, schema.properties['@type'].enum).then(response => callback(response.data))
      }
    })
    // Log in to the API
    emitter.on('login', () => api.login())
    // Log out of the API
    emitter.on('logout', () => api.logout())

    //let current_url = window.location.pathname + window.location.search
    const context = {}
    Object.assign(context, window.__APP_INITIAL_STATE__)
    context.emitter = emitter

    window.addEventListener('popstate', () => {
      const url = window.location.pathname + window.location.search
      emitter.emit('setLoading', true)
      router(context.apiConfig).route(url, context).then(component => {
        ReactDOM.render(
          <AppContainer>
            {component}
          </AppContainer>,
          document.getElementById('root')
        )
        emitter.emit('setLoading', false)
      })
    })

    const url = window.location.pathname + window.location.search
    router(context.apiConfig).route(url, context).then(component => {
      ReactDOM.render(
        <AppContainer>
          {component}
        </AppContainer>,
        document.getElementById('root')
      )
      emitter.emit('setLoading', false)
    })

  })
})()
