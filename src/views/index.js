import favicon from '../public/favicon.png'
import piwik from './piwik'

export default ({body, title, initialState, env, piwikConfig, embed, metadata}) => {

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
        <title>${title} - OER World Map</title>

        ${metadata && metadata.title ? `<meta property="og:title" content="${metadata.title}"/>
        <meta name="twitter:title" content="${metadata.title}">` : ''}
        ${metadata && metadata.description ? `<meta name="description" content="${metadata.description}">
        <meta property="og:description" content="${metadata.description}"/>
        <meta name="twitter:description" content="${metadata.description}">` : ''}
        ${metadata && metadata.image ? `<meta property="og:image" content="${metadata.image}"/>
        <meta property="og:image:alt" content="${metadata.title}" />
        <meta property="twitter:image:alt" content="${metadata.title}" />
        <meta name="twitter:image" content="${metadata.image}">`: ''}
        <meta property="og:site_name" content="OER World Map"/>
        ${metadata && metadata.url ? ` <meta property="og:url" content="${metadata.url}" />` : ''}
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@oerworldmap">
        <meta name="twitter:creator" content="@oerworldmap">
        <meta name="twitter:card" content="summary_large_image">

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
