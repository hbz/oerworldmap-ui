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
import Link from './components/Link'

require('formdata-polyfill');

(function () {

  document.addEventListener('DOMContentLoaded', () => {

    let state = window.__APP_INITIAL_STATE__.data
    const emitter = mitt()
    const context = {}
    Object.assign(context, window.__APP_INITIAL_STATE__)
    context.emitter = emitter

    const api = new Api(context.apiConfig)
    const routes = router(api)

    let referrer = window.location.href
    Link.back = '/resource/'
    const renderApp = (title, component) => {
      ReactDOM.render(
        <AppContainer>
          {component}
        </AppContainer>,
        document.getElementById('root')
      )
      emitter.emit('setLoading', false)
      window.location.hash
        ? document.getElementById(window.location.hash.replace('#', ''))
          && document.getElementById(window.location.hash.replace('#', '')).scrollIntoView()
        : document.querySelector('.webPageWrapper')
          && (document.querySelector('.webPageWrapper').scrollTop = 0)

      document.title = `OER World Map - ${title}`
      referrer = window.location.href
    }

    // Log all emissions
    emitter.on('*', (type, e) => console.info(type, e))
    // Transition to a new URL
    emitter.on('navigate', url => {
      const parser = document.createElement('a')
      parser.href = url

      const newWindow = context.embed === "true" || (
        context.embed === 'country' && (
          parser.pathname === '/resource/' || (
            !window.location.pathname.startsWith('/resource/urn') && (
              parser.pathname.startsWith('/country') && (window.location.pathname.toLowerCase() !== parser.pathname.toLowerCase())
            )
          )
        )
      )

      if (newWindow) {
        window.open(parser.href, '_blank')
      } else if (parser.href !== window.location.href) {
        Link.back = referrer
        window.history.pushState(null, null, url)
        window.dispatchEvent(new window.PopStateEvent('popstate'))
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
    emitter.on('submit', ({url, data, redirect}) => {
      emitter.emit('setLoading', true)
      routes.route(url, context).post(data)
        .then(({title, data, render}) => {
          if (redirect) {
            routes.route(redirect.url, context).get(redirect.params)
              .then(({title, data, render}) => {
                window.history.replaceState(null, null, redirect.url)
                state = data
                renderApp(title, render(data))
              })
          } else {
            state = data
            window.history.pushState(null, null, data._location || url)
            renderApp(title, render(data))
          }
        })
    })
    // Deletion
    emitter.on('delete', ({url, redirect}) => {
      emitter.emit('setLoading', true)
      routes.route(url, context).delete()
        .then(({title, data, render}) => {
          if (redirect) {
            routes.route(redirect.url, context).get(redirect.params)
              .then(({title, data, render}) => {
                window.history.replaceState(null, null, redirect.url)
                state = data
                renderApp(title, render(data))
              })
          } else {
            state = data
            window.history.pushState(null, null, url)
            renderApp(title, render(data))
          }
        })
    })

    window.addEventListener('popstate', () => {
      emitter.emit('setLoading', true)
      const url = window.location.pathname
      const params = getParams(window.location.search)
      const load = referrer.split('#')[0] !== window.location.href.split('#')[0]
      routes.route(url, context, load ? null : state).get(params)
        .then(({title, data, render}) => {
          state = data
          renderApp(title, render(data))
        })
    })

    const url = window.location.pathname
    const params = getParams(window.location.search)
    routes.route(url, context, state).get(params)
      .then(({title, data, render}) => {
        renderApp(title, render(data))
      })

  })
})()
