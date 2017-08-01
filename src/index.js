require('babel-core/register')
require('ignore-styles')
require('asset-require-hook')({
  extensions: [ 'png', 'svg', 'jpg', 'gif' ]
})
require('./server')
