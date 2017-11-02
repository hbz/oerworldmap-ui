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

    document.title = getTitle(state.data, state.locales)

    ReactDOM.render(
      <Init {...state} emitter={emitter} />,
      document.getElementById('root')
    )
    emitter.emit('setLoading', false)
  }

  document.addEventListener('DOMContentLoaded', () => {

    const api = new Api(window.__APP_INITIAL_STATE__.apiConfig)

    const emitter = mitt()
    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Save data to the API
    emitter.on('save', data => api.save(data)
      .then(response => {
        const state = window.__APP_INITIAL_STATE__
        state.data = response.data
        state.user = response.user
        renderApp(state, emitter)
      })
    )
    // Transition to a new URL
    emitter.on('navigate', url => {
      if (window.location.pathname + window.location.search + window.location.hash !== url) {
        window.history.pushState(null, null, url)
        window.dispatchEvent(new window.HashChangeEvent('hashchange'))
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

      document.querySelectorAll('[data-show]').forEach(el => {
        if (el.dataset.show === hash) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
        }
      })
    })

    let current_url = window.location.pathname + window.location.search
    window.addEventListener('popstate', () => {
      const url = window.location.pathname + window.location.search
      if (url !== current_url) {
        current_url = url
        emitter.emit('setLoading', true)
        api.load(url)
          .then(response => {
            const state = window.__APP_INITIAL_STATE__
            state.data = response.data
            state.features = response.data.features || state.features
            state.user = response.user
            renderApp(state, emitter)
          })
      }
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
