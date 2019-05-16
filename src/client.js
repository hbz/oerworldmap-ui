/* global document */
/* global window */
/* global location */
/* global localStorage */

import ReactDOM from 'react-dom'
import 'normalize.css'
import mitt from 'mitt'

import router from './router'
import { getParams, getURL } from './common'
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

    context.user
      ? localStorage.setItem('user', JSON.stringify(context.user))
      : localStorage.removeItem('user')

    const api = new Api(context.apiConfig)
    const routes = router(api, emitter, window.location)

    let referrer = window.location.href
    Link.back = '/resource/'
    const renderApp = (title, component) => {
      ReactDOM.render(component, document.getElementById('root'))
      emitter.emit('setLoading', false)
      window.location.hash
        ? document.getElementById(window.location.hash.replace('#', ''))
          && document.getElementById(window.location.hash.replace('#', '')).scrollIntoView()
        : document.querySelector('.webPageWrapper')
          && (document.querySelector('.webPageWrapper').scrollTop = 0)

      document.title = `${title} - OER World Map`
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

    let lastActivity = (location.pathname === '/activity/' && state && state.length && state[0].id) || (localStorage.getItem('lastActivity'))
    setInterval(() => {
      const until = lastActivity ? `?until=${lastActivity}` : ''
      api.get(`/activity/${until}`).then(response => {
        if (response.length) {
          lastActivity = response[0].id
          emitter.emit('newActivity', response)
        }
      })
    }, 60000)

    window.addEventListener("message",  (msg) => {
      if (msg.data.filter && msg.data.key) {

        const iframe = document.querySelector('iframe')
        const scope = msg.data.scope || (iframe && iframe.dataset && iframe.dataset.scope)

        const params = {
          [`filter.${msg.data.filter}`] : msg.data.key,
        }

        if (scope) {
          params[scope.split('=')[0]] = scope.split('=')[1]
        }

        emitter.emit('navigate', getURL({
          path: '/resource/',
          params
        }))
      }
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
