import favicon from '../assets/favicon.png'

export default ({ body, title, initialState, env, piwikConfig}) => {

  let piwik = ''
  if (env === 'production' && (piwikConfig.id && piwikConfig.url)) {
    piwik = `<script type="text/javascript">
    var _paq = _paq || [];
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
    var u='//${piwikConfig.url}';
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', ${piwikConfig.id}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();
    </script>
    <noscript>
      <p><img src="//piwik.hbz-nrw.de/analytics/piwik.php?idsite=4" style="border:0;" alt="" /></p>
    </noscript>
    `
  }

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/assets/bundle.js" ></script>
        <title>${title}</title>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        ${piwik}
        <link rel="shortcut icon" href="/assets/${favicon}" type="image/x-icon" />
        ${env !== 'development' ? '<link rel="stylesheet" href="/assets/styles.css">' : ''}
      </head>
      <body>
        <div id="root"><div>${body}</div></div>
      </body>
    </html>
  `
}
