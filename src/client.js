import 'normalize.css'
import './styles/main.pcss'
import React from 'react'
import ReactDOM from 'react-dom'
import Init from './components/Init'
import Api from './api'

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      <Init {...window.__APP_INITIAL_STATE__} />,
      document.getElementById('root')
    )
  })

  let currentPathname = window.location.pathname + window.location.search
  window.addEventListener('popstate', function (e) {
    let url = window.location.pathname + window.location.search
    if (currentPathname === url) {
      return
    } else {
      currentPathname = url
    }
    const api = new Api()
    api.load(url, function (data) {
      document.title = data.select ? data.select.name[0]['@value'] : '?'
      ReactDOM.render(
        <Init data={data} />,
        document.getElementById('root')
      )
    })
  })
})()
