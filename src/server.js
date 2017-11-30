import React from 'react'
import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import template from './views/index'
import webpackConfig from '../webpack.config.babel'

import router from './router'
import Init from './components/Init'
import { getTitle } from './common'

import Config, { mapboxConfig, apiConfig } from '../config'

const server = express()

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

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

server.get(/^(.*)$/, (req, res) => {
  const defaultLanguage = 'en'
  const supportedLanguages = [ 'en', 'de', 'es' ]
  const requestedLanguages = req.headers['accept-language']
    ? req.headers['accept-language'].split(',').map(language => {
      return language.split(';')[0]
    }) : [defaultLanguage]
  const locales = requestedLanguages.filter(language => {
    return supportedLanguages.includes(language)
  })
  if (!locales.includes(defaultLanguage)) {
    locales.push(defaultLanguage)
  }
  const authorization = req.get('authorization')
  const context = { locales, authorization, mapboxConfig }
  router(apiConfig).route(req.path, context).get(req.params).then(({title, data, component}) => {
    res.send(template({
      env: process.env.NODE_ENV,
      body: renderToString(component),
      initialState: JSON.stringify({apiConfig, locales, mapboxConfig, data})
        .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"),
      title: title
    }))
  })
})

server.listen(Config.port, Config.host, function () {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
