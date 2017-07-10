import path from 'path'
import express from 'express'
import template from './views/index'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.babel.js'

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

    webpackHotMiddleware(compiler)

  ])
}

server.use(express.static(path.join(__dirname, '/../dist')))

server.get(/^(.*)$/, function (req, res, next) {
  res.send(template({
    body: '<h1>Hello from server</h1>',
    title: 'Hello from server',
    initialState: JSON.stringify({})
  }))
})

server.listen(Config.port, Config.host, function () {
  console.log(`oerworldmap-ui server listening on http://${Config.host}:${Config.port}`)
})
