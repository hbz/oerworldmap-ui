import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import compression from 'compression'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import userAgent from 'express-useragent'
import cookieParser from 'cookie-parser'
import url from 'url'

import template from './views/index'
import webpackConfig from '../webpack.config.babel'
import router from './router'
import Api from './api'
import i18ns from './i18ns'

import Config, { mapboxConfig, apiConfig, piwikConfig, i18nConfig } from '../config'

const server = express()
const api = new Api(apiConfig)

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

server.use(compression())
server.use(cookieParser())

if (process.env.NODE_ENV === 'development'|| process.env.NODE_ENV === 'static') {
  const compiler = webpack(webpackConfig)

  server.use([
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
      stats: 'minimal'
    }),
    webpackHotMiddleware(compiler)
  ])
}

server.use(express.static(path.join(__dirname, '/../dist')))

// Middleware to check browser support
server.use((req, res, next) => {
  const ua = userAgent.parse(req.headers['user-agent'])
  ua.isIE && res.send('Sorry, your browser is not supported') || next()
})

// Middleware to fetch user profile
server.use((req, res, next) => {
  if (req.cookies.mod_auth_openidc_session) {
    const headers = new Headers(req.headers)
    headers.delete('Host')
    headers.delete('If-None-Match')
    // This will log a FetchError: invalid json response body
    // if for some reason mod_auth_openidc_session is not valid
    api.get('/user/profile', headers)
      .then(user => (req.user = user) && console.log(user))
      .catch(err => console.error(err))
  }
  next()
})

// Middleware to fetch labels
server.use((req, res, next) => {
  api.get('/label')
    .then(labels => (req.labels = labels) && next())
    .catch(err => res.status(err.status).send(err.message))
})

// Middleware to fetch JSON schema
server.use((req, res, next) => {
  api.get('/assets/json/schema.json')
    .then(schema => (req.schema = schema) && next())
    .catch(err => res.status(err.status).send(err.message))
})

// Middleware to extract locales
const supportedLanguages = i18nConfig.supportedLanguages.trim().split(/\s+/)
const defaultLanguage = i18nConfig.defaultLanguage

server.use((req, res, next) => {
  const requestedLanguages = req.headers['accept-language']
    ? req.headers['accept-language'].split(',').map(language => language.split(';')[0])
    : [defaultLanguage]
  req.query && req.query.language && requestedLanguages.unshift(req.query.language)
  const locales = requestedLanguages.filter(language => supportedLanguages.includes(language))
  if (!locales.includes(defaultLanguage)) {
    locales.push(defaultLanguage)
  }
  req.locales = locales
  req.supportedLanguages = supportedLanguages
  next()
})

// Middleware to set public host
server.use((req, res, next) => {
  req.publicHost = url.format({
    protocol: req.get('x-forwarded-proto') || req.protocol,
    host: req.get('x-forwarded-host') || req.get('host')
  })
  next()
})

// Handle login
server.get('/.login', (req, res) => {
  if (req.headers.oidc_claim_profile_id) {
    res.redirect(req.query.continue ? req.query.continue : '/resource/')
  } else {
    res.redirect('/user/profile#edit')
  }
})

// Server-side render request
server.get(/^(.*)$/, (req, res) => {
  const headers = new Headers(req.headers)
  headers.delete('Host')
  headers.delete('If-None-Match')
  const user = req.user
  const locales = req.locales
  const supportedLanguages = req.supportedLanguages
  if (req.labels) {
    req.labels.results.bindings.forEach(label => {
      i18ns[label.label['xml:lang']] || (i18ns[label.label['xml:lang']] = {})
      i18ns[label.label['xml:lang']][label.uri.value] = label.label.value
    })
  }
  const phrases = locales.slice(0).reverse().reduce((acc, curr) => Object.assign(acc, i18ns[curr]), {})
  const schema = req.schema
  const embed = req.query.embed
  const context = { supportedLanguages, locales, headers, user, mapboxConfig, phrases, apiConfig, schema, embed }
  //TODO: use actual request method
  router(api).route(req.path, context).get(req.query).then(({title, data, render, err, metadata}) => {
    console.info('Render from Server:', req.url)
    res.send(template({
      env: process.env.NODE_ENV,
      body: renderToString(render(data)),
      initialState: JSON.stringify({supportedLanguages, apiConfig, locales, mapboxConfig, data, user, err, phrases, schema, embed})
        .replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"),
      title,
      piwikConfig,
      embed,
      metadata,
      locales
    }))
  })
})

server.listen(Config.port, Config.host, () => {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
