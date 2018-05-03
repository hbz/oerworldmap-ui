import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import compression from 'compression'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { existsSync, readFileSync } from 'fs'

import template from './views/index'
import webpackConfig from '../webpack.config.babel'
import router from './router'
import Api from './api'

import Config, { mapboxConfig, apiConfig, piwikConfig, i18nConfig } from '../config'

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
server.use((req, res, next) => {
  const authorization = req.get('authorization')
  const [user] = authorization
    ? Buffer.from(authorization.split(" ").pop(), "base64").toString("ascii").split(":") : []
  if (user) {
    api.get('/user/profile', authorization)
      .then(user => (req.user = user) && next())
      .catch(err => err.status === 401
        ? res.redirect(`${apiConfig.scheme}://logout@${apiConfig.host}/.logout`)
        : res.status(err.status).send(err.message)
      )
  } else {
    next()
  }
})

// Middleware to fetch JSON schema
server.use((req, res, next) => {
  api.get('/assets/json/schema.json')
    .then(schema => (req.schema = schema) && next())
    .catch(err => res.status(err.status).send(err.message))
})

// I18n configuration
const supportedLanguages = i18nConfig.supportedLanguages.trim().split(/\s+/)
const defaultLanguage = i18nConfig.defaultLanguage
const bundles = ['ui', 'iso3166-1-alpha-2', 'iso639-1', 'iso3166-2', 'labels', 'descriptions']
const i18ns = {}
supportedLanguages.map(language => {
  const i18n = {}
  bundles.forEach(bundle => {
    const i18nfile = existsSync(`./src/locale/${bundle}_${language}.json`)
      ? `./src/locale/${bundle}_${language}.json`
      : `./src/locale/${bundle}.json`
    const obj = JSON.parse(readFileSync(i18nfile, 'utf8'))
    //FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
    if (bundle === 'descriptions') {
      i18n['descriptions'] = obj
    } else {
      Object.assign(i18n, obj)
    }
  })
  i18ns[language] = i18n
})

// Middleware to extract locales
server.use((req, res, next) => {
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
  const schema = req.schema
  const embed = req.query.embed
  const context = { locales, authorization, user, mapboxConfig, phrases, apiConfig, schema, embed }
  //TODO: use actual request method
  router(api).route(req.path, context).get(req.query).then(({title, data, render, err}) => {
    res.send(template({
      env: process.env.NODE_ENV,
      body: renderToString(render(data)),
      initialState: JSON.stringify({apiConfig, locales, mapboxConfig, data, user, err, phrases, schema, embed})
        .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"),
      title,
      piwikConfig,
      embed
    }))
  })
})

server.listen(Config.port, Config.host, () => {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
