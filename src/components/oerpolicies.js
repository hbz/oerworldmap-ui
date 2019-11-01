/* global window */
/* global document */
import React, { useEffect } from 'react'
import { getURL } from '../common'

import '../styles/components/oerpolicies.pcss'

const oerpolicies = () => {
  useEffect(() => {
    // Listen to messages
    window.addEventListener('message', (msg) => {
      if (msg.data.filter && msg.data.key) {
        const iframe = document.querySelector('iframe')
        const scope = msg.data.scope || (iframe && iframe.dataset && iframe.dataset.scope)

        const params = {
          [`filter.${msg.data.filter}`]: msg.data.key,
        }

        if (scope) {
          const [key, value] = scope.split('=')
          params[key] = value
        }

        // TODO: Refactor to use the normal URL
        window.location.href = getURL({
          path: '/resource/',
          params,
        })
      }
    })
  }, [])

  return (
    <button
      className="btn"
      onClick={() => {
        const documentBody = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <iframe
          src="/kibana/app/kibana#/dashboard/3f24aa90-e370-11e8-bc1a-bd36147d8400?embed=true&_g=()"
          height="750"
          width="800"
          style="border:0; width: 100%; margin: 0 auto;"
          data-scope="filter.about.@type=Policy"
        >
        </iframe>
        <script>

        const getURL = (route) => {
          let url = route.path
          let params = []
          for (const param in route.params) {
            const value = route.params[param]
            if (Array.isArray(value)) {
              value && (params = params.concat(value.map(value => param + '=' + encodeURIComponent(value))))
            } else {
              value && params.push(param + '=' + encodeURIComponent(value))
            }
          }
          if (params) {
            url += '?' + params.join('&')
          }
          if (route.hash) {
            url += '#' + route.hash
          }
          return url
        }

        window.addEventListener("message", (msg) => {

          if (msg.data.filter && msg.data.key) {

            const iframe = document.querySelector('iframe')
            const { scope } = iframe && iframe.dataset

            const info = {
              filter: msg.data.filter,
              key: msg.data.key,
              scope
            }
            window.opener.postMessage(info, "*")
          }

        })

        </script>
      </body>
      </html>
    `
        const options = 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=800,height=750'
        const newWindow = window.open('', 'OER Policies', options)
        newWindow.document.write(documentBody)
        newWindow.document.close()
      }}
    >
    Open in a new window
    </button>
  )
}

export default oerpolicies
