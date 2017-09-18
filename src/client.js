/* global document */
/* global window */

import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import mitt from 'mitt'

import Init from './components/Init'
import Api from './api'
import { getTitle } from './common'
import './styles/main.pcss'

(function () {

  const renderApp = (state, emitter) => {

    document.title = getTitle(state.data)

    ReactDOM.render(
      <Init {...state} emitter={emitter} />,
      document.getElementById('root')
    )
  }

  document.addEventListener('DOMContentLoaded', () => {

    const api = new Api(window.__APP_INITIAL_STATE__.apiConfig)

    const emitter = mitt()
    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Save data to the API
    emitter.on('save', data => api.save(data, response => {
      const state = window.__APP_INITIAL_STATE__
      state.data = response.data
      state.user = response.user
      renderApp(state, emitter)
    }))
    // Read data from the API
    emitter.on('load', url => {
      if (window.location.pathname + window.location.search + window.location.hash !== url) {
        window.history.pushState(null, null, url)
        window.dispatchEvent(new window.HashChangeEvent("hashchange"))
        window.dispatchEvent(new window.PopStateEvent('popstate'))
      }
    })
    // Find data from the API
    emitter.on('getOptions', ({term, types, callback}) => api.find(term, types, callback))
    // Log in to the API
    emitter.on('login', () => api.login())
    // Log out of the API
    emitter.on('logout', () => api.logout())

    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substr(1)
      document.querySelectorAll('.target').forEach(e => {
        e.classList.remove('target')
      })

      const target = document.getElementById(hash)
      if (target) {
        target.classList.add('target')
      }
    })

    window.addEventListener('popstate', () => {
      console.log('popstate')
      const url = window.location.pathname + window.location.search
      api.load(url, response => {
        const state = window.__APP_INITIAL_STATE__
        state.data = response.data
        state.features = response.features || state.features
        state.user = response.user
        renderApp(state, emitter)
      })
    })

    renderApp(window.__APP_INITIAL_STATE__, emitter)

    const hash = window.location.hash.substr(1)
    document.querySelectorAll('.target').forEach(e => {
      e.classList.remove('target')
    })

    const target = document.getElementById(hash)
    if (target) {
      target.classList.add('target')
    }
  })
})()
