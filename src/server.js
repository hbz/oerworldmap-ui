import { renderToString } from 'react-dom/server'
import path from 'path'
import express from 'express'
import compression from 'compression'
import userAgent from 'express-useragent'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import template from './views/index'
import router from './router'
import Api from './api'
import i18ns from './i18ns'
import i18n from './i18n'
import { MediaWikiOAuth2Client } from './mediawiki-oauth2'
import { createGraph } from './components/imgGraph'

import Config, {
  mapboxConfig, apiConfig, publicApiConfig, piwikConfig, i18nConfig, elasticsearchConfig, sessionConfig,
} from '../config'

global.URL = require('url').URL

const server = express()
const api = new Api(apiConfig)

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
        i18ns[label.label['xml:lang']]
          || (i18ns[label.label['xml:lang']] = {})
        i18ns[label.label['xml:lang']][label.uri.value]
          || (i18ns[label.label['xml:lang']][label.uri.value] = label.label.value)
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
  const protocol = req.get('x-forwarded-proto') || req.protocol
  const host = req.get('x-forwarded-host') || req.get('host')
  req.location = new URL(`${protocol}://${host}${req.originalUrl}`)
  next()
})

// Middleware to persist session
server.use(session({
  secret: sessionConfig.secret,
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
}))

// Handle login
server.get('/.login', (req, res) => {
  if (req.session.username) {
    res.redirect(req.query.continue ? req.query.continue : '/resource/')
  } else {
    res.redirect(MediaWikiOAuth2Client.code.getUri())
  }
})

server.get('/oauth2/callback', (req, res) => {
  if (req.query.error) {
    console.error("callback received error", req.query.error)
    // TODO: Send to an appropriate page.
    return
  }

  MediaWikiOAuth2Client.code.getToken(req.originalUrl)
    .then(user => {
      const url = 'http://dev.wiki/w/rest.php/oauth2/resource/profile'
      // const url = 'http://dev.wiki/wiki/Special:OAuth/identify'
      const signed = 
        user.sign({
          url
        })

      MediaWikiOAuth2Client.request(
        'get',
        url,
        null,
        signed.headers
      ).then(response => {
        const userData = JSON.parse(response.body)

        req.session.username = userData.username
        req.session.userid = userData.sub

        res.redirect('/.login')
      }, error =>
        console.error("Unhandled login error", error)
      )
    }, error =>
      console.error("token stuff failed", error)
    )
})

server.get('/logout', (req, res) => {
  req.session.destroy();
  // TODO: Logout of MediaWiki as well.
  res.redirect(req.query.continue || '/');
})

server.get('/stats', async (req, res) => {
  const { translate } = i18n(req.locales, req.phrases)
  const {
    field, q, subField, sub, size, subSize, include, subInclude, w, download, filename, basePath,
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
    basePath,
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
  const { locales, supportedLanguages, phrases } = req
  const config = {
    mapboxConfig,
    elasticsearchConfig,
    apiConfig,
    publicApiConfig,
  }
  const headers = {
    'X-username': req.session.username,
    'X-userid': req.session.userid,
  }
  const { schema } = req
  const context = {
    supportedLanguages,
    locales,
    config,
    phrases,
    schema,
    headers,
  }
  // TODO: use actual request method
  router(api, null, req.location).route(req.path, context).get(req.query).then(({
    title, data, render, err, metadata,
  }) => {
    console.log("routing...")
    if (req.accepts('application/json')) {
      console.log("accepting json...")
      // Delegate to the API.  TODO: Should also proxy for POST requests.
      api.get(req.originalUrl, new Headers(context.headers))
      .then(
        response => res.json(response.json),
        error => console.error("bad response from API", error)
      )
      console.log("should not reach")
    }
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
