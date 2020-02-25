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
import i18n from './i18n'
import { createGraph } from './components/imgGraph'

import Config, {
  mapboxConfig, apiConfig, piwikConfig, i18nConfig, elasticsearchConfig,
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
    .then((labels) => {
      labels.results.bindings.forEach((label) => {
        i18ns[label.label['xml:lang']] || (i18ns[label.label['xml:lang']] = {})
        i18ns[label.label['xml:lang']][label.uri.value] = label.label.value
      })
      next()
    })
    .catch(err => console.log(err) || res.status(err.status).send(err.message))
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
  req.phrases = locales
    .slice(0).reverse().reduce((acc, curr) => Object.assign(acc, i18ns[curr]), {})

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

server.get('/stats', async (req, res) => {
  const { translate } = i18n(req.locales, req.phrases)
  const {
    field, q, subField, sub, size, subSize, include, subInclude, w, download, filename,
  } = req.query
  const filters = Object.entries(req.query)
    .filter(([param]) => param.startsWith('filter.'))
    .map(([param, value]) => [param.replace(/^filter./, ''), JSON.parse(value)])

  const image = await createGraph({
    field,
    q,
    subField,
    sub,
    size,
    subSize,
    translate,
    elasticsearchConfig,
    include,
    subInclude,
    filters,
    w,
  })

  if (image) {
    res.setHeader('content-type', 'image/svg+xml')
    if (download && filename) {
      res.setHeader('Content-Disposition', `attachment; filename=${filename}.svg`)
    }
    res.send(image)
  } else {
    res.sendStatus(404)
  }
})

// Server-side render request
server.get(/^(.*)$/, (req, res) => {
  const headers = getHeaders(req.headers)
  headers.delete('Host')
  headers.delete('If-None-Match')
  const { locales, supportedLanguages, phrases } = req
  const config = {
    mapboxConfig,
    elasticsearchConfig,
    apiConfig,
  }
  const { schema } = req
  const context = {
    supportedLanguages,
    locales,
    headers,
    config,
    phrases,
    schema,
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
        config,
        locales,
        data,
        err,
        phrases,
        schema,
      })
        .replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'),
      title,
      piwikConfig,
      metadata,
      locales,
    }))
  })
})

server.listen(Config.port, Config.host, () => {
  console.info(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
