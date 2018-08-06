require('babel-core/register')
require('babel-polyfill')
require('ignore-styles')
require('asset-require-hook')({
  extensions: [ 'png', 'svg', 'jpg', 'gif' ]
})
global.URL = require('url').URL
require('./server')
