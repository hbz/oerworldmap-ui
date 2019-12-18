/* global Headers */

import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import compression from 'compression'
import userAgent from 'express-useragent'
import cookieParser from 'cookie-parser'
import url from 'url'

import template from './views/index'
import router from './router'
import Api from './api'
import i18ns from './i18ns'

import Config, {
  mapboxConfig, apiConfig, piwikConfig, i18nConfig,
} from '../config'

global.URL = require('url').URL

const server = express()
const api = new Api(apiConfig)

const getHeaders = headers => new Headers(Object.entries(headers)
  .filter(([key]) => !key.startsWith('oidc'))
  .reduce((acc, [key, value]) => Object.assign(acc, { [key]: value }), {}))

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

server.use(compression())
server.use(cookieParser())

server.use(express.static(
  path.resolve(process.env.NODE_ENV === 'production' ? 'dist' : 'dev'),
))

// Middleware to check browser support
server.use((req, res, next) => {
  const ua = req.headers['user-agent'] && userAgent.parse(req.headers['user-agent'])
  ua && ua.isIE && res.send('Sorry, your browser is not supported') || next()
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
const { defaultLanguage } = i18nConfig

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

// Middleware to set public URL
server.use((req, res, next) => {
  req.location = new URL(url.format({
    protocol: req.get('x-forwarded-proto') || req.protocol,
    host: req.get('x-forwarded-host') || req.get('host'),
    pathname: req.originalUrl,
  }))
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
  const headers = getHeaders(req.headers)
  headers.delete('Host')
  headers.delete('If-None-Match')
  const { locales, supportedLanguages } = req
  if (req.labels) {
    req.labels.results.bindings.forEach((label) => {
      i18ns[label.label['xml:lang']] || (i18ns[label.label['xml:lang']] = {})
      i18ns[label.label['xml:lang']][label.uri.value] = label.label.value
    })
  }

  const phrases = locales
    .slice(0).reverse().reduce((acc, curr) => Object.assign(acc, i18ns[curr]), {})
  const { schema, embed } = req
  const context = {
    supportedLanguages,
    locales,
    headers,
    mapboxConfig,
    phrases,
    apiConfig,
    schema,
    embed,
  }
  // TODO: use actual request method
  router(api, null, req.location).route(req.path, context).get(req.query).then(({
    title, data, render, err, metadata,
  }) => {
    console.info('Render from Server:', req.url)
    res.send(template({
      env: process.env.NODE_ENV,
      body: renderToString(render(data)),
      initialState: JSON.stringify({
        supportedLanguages,
        apiConfig,
        locales,
        mapboxConfig,
        data,
        err,
        phrases,
        schema,
        embed,
      })
        .replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'),
      title,
      piwikConfig,
      embed,
      metadata,
      locales,
    }))
  })
})

server.listen(Config.port, Config.host, () => {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
