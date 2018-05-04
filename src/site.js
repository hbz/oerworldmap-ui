/* global document */
/* global window */
/* global ENVIRONMENT */
/* global $ */

import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'

import Overview from './components/Overview'

import './styles/main.pcss'
import './styles/static.pcss'
import './styles/components/Header.pcss'

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
    const url = ENVIRONMENT === 'development'
      ? 'https://oerworldmap.org/resource.json?size=0'
      : '/resource.json?size=0'
    fetch(url)
      .then(response => response.json())
      .then(json => {
        ReactDOM.render(
          <Overview buckets={json.aggregations['about.@type'].buckets} />,
          document.querySelector('[data-inject-stats]')
        )
      })
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
  injectStats.init()
  toggleShow.init()

  $('[data-slick]').slick()

})
