/* global document */
/* global window */
/* global localStorage */
/* global _paq */

import { hydrate } from 'react-dom'
import mitt from 'mitt'

import router from './router'
import { getParams, updateUser } from './common'
import Api from './api'
import Link from './components/Link'

require('formdata-polyfill')

const sendMatomoNavigate = (title, url, context) => {
  const referrer = Link.back

  if (typeof _paq !== 'undefined') {
    _paq.push(['setReferrerUrl', referrer])
    _paq.push(['setCustomUrl', url])
    _paq.push(['setDocumentTitle', title])
    _paq.push(['setDocumentTitle', title])
    _paq.push(['setCustomVariable', 1, 'context', context, 'page'])

    _paq.push(['deleteCustomVariables', 'page'])
    _paq.push(['setGenerationTimeMs', 0])
    _paq.push(['trackPageView'])
    _paq.push(['enableLinkTracking'])
  }
}

const client = () => {
  document.addEventListener('DOMContentLoaded', async () => {
    await updateUser()
    let state = window.__APP_INITIAL_STATE__.data
    const emitter = mitt()
    const context = {}
    Object.assign(context, window.__APP_INITIAL_STATE__)
    context.emitter = emitter

    const api = new Api(context.config.apiConfig)
    const routes = router(api, emitter, window.location)

    let referrer = window.location.href
    Link.back = '/resource/'
    const renderApp = (title, component) => {
      hydrate(component, document.getElementById('root'))
      emitter.emit('setLoading', false)
      window.location.hash
        ? document.getElementById(window.location.hash.replace('#', ''))
          && document.getElementById(window.location.hash.replace('#', '')).scrollIntoView()
        : document.querySelector('.webPageWrapper')
          && (document.querySelector('.webPageWrapper').scrollTop = 0)

      document.title = `${title} - OER World Map`
      referrer = window.location.href
    }

    // Transition to a new URL
    const navigate = (url) => {
      console.info('Navigate', url)
      const parser = document.createElement('a')
      parser.href = url
      Link.back = referrer
      window.history.pushState(null, null, url)
      window.dispatchEvent(new window.PopStateEvent('popstate'))
    }
    emitter.on('navigate', navigate)

    // Form submission
    const submit = ({ url, data, redirect }) => {
      emitter.emit('setLoading', true)
      routes.route(url, context).post(data)
        .then(({ title, data, render }) => {
          if (redirect) {
            routes.route(redirect.url, context).get(redirect.params)
              .then(({ title, data, render }) => {
                window.history.replaceState(null, null, redirect.url)
                state = data
                renderApp(title, render(data))
                sendMatomoNavigate(title, redirect.url, 'submit')
              })
          } else {
            state = data
            window.history.pushState(null, null, data._location || url)
            renderApp(title, render(data))
            sendMatomoNavigate(title, redirect.url, 'submit')
          }
        })
    }
    emitter.on('submit', submit)

    // Deletion
    const deleteResource = ({ url, redirect }) => {
      emitter.emit('setLoading', true)
      routes.route(url, context).delete()
        .then(({ title, data, render }) => {
          if (redirect) {
            routes.route(redirect.url, context).get(redirect.params)
              .then(({ title, data, render }) => {
                window.history.replaceState(null, null, redirect.url)
                state = data
                renderApp(title, render(data))
                sendMatomoNavigate(title, redirect.url, 'delete')
              })
          } else {
            state = data
            window.history.pushState(null, null, url)
            renderApp(title, render(data))
            sendMatomoNavigate(title, redirect.url, 'delete')
          }
        })
    }
    emitter.on('delete', deleteResource)

    let lastActivity = (window.location.pathname === '/activity/' && state && state.length && state[0].id)
      || (localStorage.getItem('lastActivity'))
    setInterval(() => {
      const until = lastActivity ? `?until=${lastActivity}` : ''
      api.get(`/activity/${until}`).then((response) => {
        if (response.length) {
          lastActivity = response[0].id
          emitter.emit('newActivity', response)
        }
      })
    }, 60000)

    window.addEventListener('message', (msg) => {
      if (msg.data.filter && msg.data.key) {
        const iframe = document.querySelector('iframe')
        const scope = msg.data.scope || (iframe && iframe.dataset && iframe.dataset.scope)

        const params = {
          [`filter.${msg.data.filter}`]: msg.data.key,
        }

        if (scope) {
          const [key, value] = scope.split('=')
          params[key] = value
        }

        emitter.emit('navigate', getURL({
          path: '/resource/',
          params,
        }))
      }
    })

    window.addEventListener('popstate', () => {
      emitter.emit('setLoading', true)
      const url = window.location.pathname
      const params = getParams(window.location.search)
      const load = referrer.split('#')[0] !== window.location.href.split('#')[0]
      routes.route(url, context, load ? null : state).get(params)
        .then(({ title, data, render }) => {
          state = data
          renderApp(title, render(data))
          sendMatomoNavigate(title, url, 'navigate')
        })
    })

    window.addEventListener('beforeunload', () => {
      emitter.off('navigate', navigate)
      emitter.off('submit', submit)
      emitter.off('delete', deleteResource)
    })

    const url = window.location.pathname
    const params = getParams(window.location.search)
    routes.route(url, context, state).get(params)
      .then(({ title, data, render }) => {
        renderApp(title, render(data))
      })
  })
}

client()
