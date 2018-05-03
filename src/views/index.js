import favicon from '../public/favicon.png'
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
        <script src="/public/bundle.js" ></script>
        <title>OER World Map - ${title}</title>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <link rel="shortcut icon" href="/public/${favicon}" type="image/x-icon" />
        ${env !== 'development' ? '<link rel="stylesheet" href="/public/styles.css">' : ''}
      </head>
      ${embed === undefined ? '<body>': `<body data-embed="${embed}">`}
        <div id="root"><div>${body}</div></div>
        ${piwikEmbed}
      </body>
    </html>
  `
}
