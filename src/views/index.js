import favicon from '../public/favicon.png'
import piwik from './piwik'

export default ({
  body, title, initialState, env, piwikConfig, embed, metadata, locales,
}) => {
  const piwikEmbed = env === 'production' && (piwikConfig.id && piwikConfig.url)
    ? piwik(piwikConfig)
    : ''

  return `
    <!doctype html>
    <html dir="ltr" lang="${locales.length ? locales.shift() : 'en'}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">

        <script defer src="/public/client.js" ></script>
        <title>${title} - OER World Map</title>

        <meta property="og:site_name" content="OER World Map" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@oerworldmap" />
        <meta name="twitter:creator" content="@oerworldmap" />
        <meta name="twitter:card" content="${metadata && metadata.summary ? 'summary' : 'summary_large_image'}" />
        <meta property="og:title" content="${title} - OER World Map" />
        <meta name="twitter:title" content="${title} - OER World Map" />
        ${metadata && metadata.description ? `<meta name="description" content="${metadata.description}" />
          <meta property="og:description" content="${metadata.description}" />
          <meta name="twitter:description" content="${metadata.description}" />` : ''}
          ${metadata && metadata.image ? `<meta property="og:image" content="${metadata.image}" />
          <meta property="og:image:alt" content="${title}" />
          <meta property="twitter:image:alt" content="${title}" />
          <meta name="twitter:image" content="${metadata.image}" />` : ''}
        ${metadata && metadata.url ? `<meta property="og:url" content="${metadata.url}" />` : ''}
        <meta property="og:image" content="https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataBig.png" />

        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <link rel="shortcut icon" href="${favicon}" type="image/x-icon" />
        <link rel="stylesheet" href="/public/styles.css" rel="preload">
      </head>
      ${embed === undefined ? '<body>' : `<body data-embed="${embed}">`}
        <div id="root">${body}</div>
        ${piwikEmbed}
      </body>
    </html>
  `
}
