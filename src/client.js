import './styles/main.less'
import React from 'react'
import ReactDOM from 'react-dom'
import OERWorldMap from './components/OERWorldMap'

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      <OERWorldMap {...window.__APP_INITIAL_STATE__} />,
      document.getElementById('root')
    )
    setTimeout(function () {
      ReactDOM.render(
        <OERWorldMap source='Client' />,
        document.getElementById('root')
      )
    }, 3000)
  })
})()
