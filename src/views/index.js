import favicon from '../assets/favicon.png'

export default ({ body, title, initialState }) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/bundle.js" ></script>
        <title>${title}</title>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <link rel="shortcut icon" href="/${favicon}" type="image/x-icon" />
      </head>
      <body>
        <div id="root"><div>${body}</div></div>
      </body>
    </html>
  `
}
