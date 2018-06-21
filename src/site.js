/* global document */
/* global window */
/* global ENVIRONMENT */
/* global $ */
/* global XMLHttpRequest */
/* global localStorage */
/* global i18ns */

import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'
import mitt from 'mitt'

import Header from './components/Header'
import I18nProvider from './components/I18nProvider'
import EmittProvider from './components/EmittProvider'
import i18n from './i18n'
import Overview from './components/Overview'

import './styles/main.pcss'
import './styles/static.pcss'
import './styles/components/Header.pcss'

const user = JSON.parse(localStorage.getItem('user'))
const locales = window.navigator.languages.filter(lang => !lang.includes('-'))
const emitter = mitt()

emitter.on('navigate', url => {
  const parser = document.createElement('a')
  parser.href = url
  window.open(url, "_self")
})

emitter.on('logout', () => {
  if (!document.execCommand("ClearAuthenticationCache")) {
    const request = new XMLHttpRequest()
    const url = `${window.location.protocol}//logout@${window.location.hostname}/.logout`
    request.open('GET', url, false)
    request.send(null)
  }
  localStorage.removeItem('user')
  window.location.reload()
})

const injectHeader = (() => {

  function init() {
    const target = document.querySelector('[data-inject-header]')

    if (target) {
      ReactDOM.render(
        <I18nProvider i18n={
          i18n(
            locales,
            i18ns[locales[0]]
          )}
        >
          <EmittProvider emitter={emitter}>
            <Header user={user} />
          </EmittProvider>
        </I18nProvider>,
        target
      )
    }
  }

  return { init }

})()


const animateScrollToFragment = (() => {

  const init_one = one => {
    one.addEventListener('click', event => {
      event.preventDefault()
      const id = one.hash.substr(1)
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      // See https://stackoverflow.com/a/1489802
      element.id = ''
      window.location.hash = one.hash
      element.id = id
    })
  }

  const init = () =>
    document.querySelectorAll('[data-animate-scroll-to-fragment]').forEach(el => init_one(el))

  return { init }

})()


const injectStats = (() => {

  function init() {
    const target = document.querySelector('[data-inject-stats]')
    if (target) {
      const url = ENVIRONMENT === 'development'
        ? 'https://oerworldmap.org/resource.json?size=0'
        : '/resource.json?size=0'
      fetch(url)
        .then(response => response.json())
        .then(json => {ReactDOM.render(
          <Overview buckets={json.aggregations['about.@type'].buckets} />, target)
        })
    }
  }

  return { init }

})()


const toggleShow = (() => {

  const init_one = one => {
    const target = document.querySelector(one.dataset.toggleShow)
    one.addEventListener('click', () => target && target.classList.toggle('show'))
  }

  const init = () =>
    document.querySelectorAll('[data-toggle-show]').forEach(el => init_one(el))

  return { init }

})()


$(() => {
  animateScrollToFragment.init()
  injectHeader.init()
  injectStats.init()
  toggleShow.init()

  $('[data-slick]').slick()

})
