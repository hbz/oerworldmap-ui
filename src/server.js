import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import compression from 'compression'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import fs from 'fs'
import properties from 'properties'

import template from './views/index'
import webpackConfig from '../webpack.config.babel'
import router from './router'
import Api from './api'

import Config, { mapboxConfig, apiConfig, piwikConfig } from '../config'

const server = express()
const api = new Api(apiConfig)

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

server.use(compression())

if (process.env.NODE_ENV === 'development'|| process.env.NODE_ENV === 'static') {
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

// Middleware to fetch user profile
server.use(function (req, res, next) {
  const authorization = req.get('authorization')
  const [user] = authorization
    ? Buffer.from(authorization.split(" ").pop(), "base64").toString("ascii").split(":") : []
  if (user) {
    api.get('/user/profile', authorization).then(user => (req.user = user) && next())
  } else {
    next()
  }
})

// I18n configuration
const supportedLanguages = [ 'en', 'de' ]
const defaultLanguage = 'en'
const bundles = ['ui', 'iso3166-1-alpha-2', 'iso639-1', 'iso3166-2', 'labels', 'descriptions']
const i18ns = {}
supportedLanguages.map(language => {
  const i18n = {}
  bundles.forEach(bundle => {
    const basename = language === defaultLanguage ? bundle : `${bundle}_${language}`
    properties.parse(`./src/locale/${basename}.properties`, {path: true}, (error, obj) => {
      if (error) {
        return console.error(error)
      }
      //FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
      if (bundle === 'descriptions') {
        i18n['descriptions'] = obj
      } else {
        Object.assign(i18n, obj)
      }
    })
  })
  i18ns[language] = i18n
})

// Middleware to extract locales
server.use(function (req, res, next) {
  const requestedLanguages = req.headers['accept-language']
    ? req.headers['accept-language'].split(',').map(language => language.split(';')[0])
    : [defaultLanguage]
  const locales = requestedLanguages.filter(language => supportedLanguages.includes(language))
  if (!locales.includes(defaultLanguage)) {
    locales.push(defaultLanguage)
  }
  req.locales = locales
  next()
})

// Server-side render request
server.get(/^(.*)$/, (req, res) => {
  const authorization = req.get('authorization')
  const user = req.user
  const locales = req.locales
  const phrases = i18ns[locales[0]]
  const context = { locales, authorization, user, mapboxConfig, phrases, apiConfig }
  //TODO: use actual request method
  router(api).route(req.path, context).get(req.query).then(({title, data, render, err}) => {
    res.send(template({
      env: process.env.NODE_ENV,
      body: renderToString(render(data)),
      initialState: JSON.stringify({apiConfig, locales, mapboxConfig, data, user, err, phrases})
        .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"),
      title,
      piwikConfig
    }))
  })
})

server.listen(Config.port, Config.host, function () {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
