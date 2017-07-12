import path from 'path'
import express from 'express'
import template from './views/index'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.babel.js'
import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './components/App'

import Config from '../config'

const server = express()

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig)

  server.use([

    webpackDevMiddleware(compiler, {
      filename: webpackConfig.output.filename,
      hot: true,
      overlay: true,
      stats: {
        colors: true
      }
    }),

    webpackHotMiddleware(compiler, {
      log: console.log
    })

  ])
}

server.use(express.static(path.join(__dirname, '/../dist')))

server.get(/^(.*)$/, function (req, res, next) {
  const language = req.acceptsLanguages( 'en', 'de', 'es' ) || 'en'
  const data = { source: 'Server', language: language }
  res.send(template({
    body: renderToString(<App {...data} />),
    title: 'Hello from server',
    initialState: JSON.stringify(data)
  }))
})

server.listen(Config.port, Config.host, function () {
  console.log(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
