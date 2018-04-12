import favicon from '../assets/favicon.png'
import piwik from './piwik'

export default ({body, title, initialState, env, piwikConfig, embed}) => {

  const piwikEmbed = env === 'production' && (piwikConfig.id && piwikConfig.url)
    ? piwik(piwikConfig)
    : ''

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/assets/bundle.js" ></script>
        <title>${title}</title>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <link rel="shortcut icon" href="/assets/${favicon}" type="image/x-icon" />
        ${env !== 'development' ? '<link rel="stylesheet" href="/assets/styles.css">' : ''}
      </head>
      ${embed === undefined ? '<body>': `<body data-embed="${embed}">`}
        <div id="root"><div>${body}</div></div>
        ${piwikEmbed}
      </body>
    </html>
  `
}
