import './styles/main.less'
import React from 'react'
import ReactDOM from 'react-dom'
import Init from './components/Init'

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      <Init {...window.__APP_INITIAL_STATE__} />,
      document.getElementById('root')
    )
    setTimeout(function () {
      ReactDOM.render(
        <Init source='Client' locales={['es']} />,
        document.getElementById('root')
      )
    }, 3000)
  })
})()
