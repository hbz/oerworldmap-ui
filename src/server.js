import path from 'path'
import express from 'express'
import template from './views/index'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.babel.js'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Api from './api'

import Init from './components/Init'

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
  const defaultLanguage = 'en'
  const supportedLanguages = [ 'en', 'de', 'es' ]
  const requestedLanguages = req.headers['accept-language'].split(',').map(language => {
    return language.split(';')[0]
  })
  const acceptedLanguages = requestedLanguages.filter(language => {
    return supportedLanguages.includes(language)
  })
  if (!acceptedLanguages.includes(defaultLanguage)) {
    acceptedLanguages.push(defaultLanguage)
  }
  const api = new Api()
  api.load(req.url, function (response) {
    const data = {
      data: response,
      locales: acceptedLanguages
    }
    res.send(template({
      body: renderToString(<Init {...data} />),
      title: 'Hello from server',
      initialState: JSON.stringify(data)
    }))
  })
})

server.listen(Config.port, Config.host, function () {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
