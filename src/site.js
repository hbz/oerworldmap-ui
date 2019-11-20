/* global document */
/* global window */
/* global ENVIRONMENT */
/* global LANG */
/* global $ */
/* global i18ns */
/* global DOMParser */

import React from 'react'
import ReactDOM from 'react-dom'
import fetch from 'isomorphic-fetch'
import mitt from 'mitt'
import 'normalize.css'

import { getURL, updateUser } from './common'
import Header from './components/Header'
import Link from './components/Link'
import I18nProvider from './components/I18nProvider'
import EmittProvider from './components/EmittProvider'
import UserProvider from './components/UserProvider'
import i18n from './i18n'
import ItemList from './components/ItemList'
import Overview from './components/Overview'

import './styles/main.pcss'
import './styles/static.pcss'
import './styles/components/Header.pcss'

const locales = [LANG]
const emitter = mitt()

const baseURL = ENVIRONMENT === 'development'
  ? 'https://oerworldmap.org/'
  : '/'

emitter.on('navigate', (url) => {
  const parser = document.createElement('a')
  parser.href = url
  window.open(url, '_self')
})

const hideUserLoginButtons = (() => {
  function init() {
    const target = document.querySelector('#user-login-buttons')
    target && window.__APP_USER__ && target.remove()
  }

  return { init }
})()

const injectHeader = (() => {
  function init() {
    Link.self = window.location.href
    const target = document.querySelector('[data-inject-header]')

    if (target) {
      ReactDOM.render(
        <I18nProvider i18n={
          i18n(
            locales,
            i18ns[locales[0]],
          )}
        >
          <EmittProvider emitter={emitter}>
            <UserProvider>
              <Header />
            </UserProvider>
          </EmittProvider>
        </I18nProvider>,
        target,
      )
    }
  }

  return { init }
})()


const animateScrollToFragment = (() => {
  const initOne = (one) => {
    one.addEventListener('click', (event) => {
      event.preventDefault()
      const id = one.hash.substr(1)
      const element = document.getElementById(id)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // See https://stackoverflow.com/a/1489802
      element.id = ''
      window.location.hash = one.hash
      element.id = id
    })
  }

  const init = () => document.querySelectorAll('[data-animate-scroll-to-fragment]').forEach(el => initOne(el))

  return { init }
})()


const injectStats = (() => {
  function init() {
    const target = document.querySelector('[data-inject-stats]')
    if (target) {
      fetch(`${baseURL}resource.json?size=0`)
        .then(response => response.json())
        .then((json) => {
          ReactDOM.render(
            <Overview buckets={json.aggregations['sterms#about.@type'].buckets} />, target,
          )
        })
    }
  }

  return { init }
})()


const toggleShow = (() => {
  const initOne = (one) => {
    const target = document.querySelector(one.dataset.toggleShow)
    one.addEventListener('click', () => target && target.classList.toggle('show'))
  }

  const init = () => document.querySelectorAll('[data-toggle-show]').forEach(el => initOne(el))

  return { init }
})()

const createAccordeon = (() => {
  const init = () => {
    if (window.location.pathname.includes('FAQ')) {
      const titles = document.querySelectorAll('h2')
      titles.forEach((title) => {
        const accordion = document.createElement('div')
        accordion.classList.add('accordion')

        const accordionContainer = document.createElement('div')
        accordionContainer.classList.add('accordionContainer')

        let currentChild = title.nextElementSibling

        while (currentChild && currentChild.nodeName !== 'H2' && currentChild.nodeName !== 'SECTION') {
          const next = currentChild.nextElementSibling
          accordionContainer.appendChild(currentChild)
          currentChild = next
        }

        title.addEventListener('click', (e) => {
          document.querySelectorAll('.active').forEach(active => active.classList.remove('active'))
          e.target.parentElement.classList.toggle('active')
        })

        title.parentNode.insertBefore(accordion, title)

        accordion.appendChild(title)
        accordion.appendChild(accordionContainer)
      })
    }
  }

  return { init }
})()

const createKibanaListener = (() => {
  const init = () => {
    const newWindowLink = document.querySelector('[data-inject-newWindowLink]')

    if (newWindowLink) {
      newWindowLink.addEventListener('click', (e) => {
        e.preventDefault()

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
      })

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

          window.location.href = getURL({
            path: '/resource/',
            params,
          })
        }
      })
    }
  }
  return { init }
})()


const createPoliciesFeed = (() => {
  const init = async () => {
    if (window.location.pathname.includes('oerpolicies')) {
      // Request data for policies
      // ADD carry a tag called policy
      const rawResponse = await fetch(`${baseURL}resource.json?q=about.@type:Policy&sort=dateCreated:DESC`, {
        headers: {
          accept: 'application/json',
        },
      })

      const content = await rawResponse.json()

      if (content) {
        const feedContainer = document.querySelector('[data-inject-feed]')

        ReactDOM.render(
          <I18nProvider i18n={
            i18n(
              locales,
              i18ns[locales[0]],
            )}
          >
            <EmittProvider emitter={emitter}>
              <ItemList listItems={content.member.map(member => member.about)} />
            </EmittProvider>
          </I18nProvider>,
          feedContainer,
        )
      }
    }
  }

  return { init }
})()

const createPolicyRelated = (() => {
  const init = async () => {
    if (window.location.pathname.includes('oerpolicies')) {
      const rawResponse = await fetch(`${baseURL}resource.json?q=NOT%20about.@type:Policy%20AND%20about.keywords:policy&sort=dateCreated:DESC`, {
        headers: {
          accept: 'application/json',
        },
      })

      const content = await rawResponse.json()

      if (content) {
        const feedContainer = document.querySelector('[data-inject-policy-related]')

        ReactDOM.render(
          <I18nProvider i18n={
            i18n(
              locales,
              i18ns[locales[0]],
            )}
          >
            <EmittProvider emitter={emitter}>
              <ItemList listItems={content.member.map(member => member.about)} />
            </EmittProvider>
          </I18nProvider>,
          feedContainer,
        )
      }
    }
  }

  return { init }
})()

const createBlogPost = (() => {
  const init = async () => {
    const blogPostContainer = document.querySelector('[data-inject-blog-posts]')

    if (blogPostContainer) {
      try {
        const rawResponse = await fetch('https://cors-anywhere.herokuapp.com/https://oerworldmap.wordpress.com/feed/', {
          headers: {
            accept: 'application/rss+xml',
          },
        })

        const content = await rawResponse.text()
        const parser = new DOMParser()
        const rss = parser.parseFromString(content, 'text/xml')

        const items = [...rss.querySelectorAll('item')].slice(0, 3).map(item => ({
          title: item.querySelector('title').innerHTML,
          description: item.querySelector('description').innerHTML,
          category: item.querySelector('category').innerHTML,
          pubDate: item.querySelector('pubDate').innerHTML,
          link: item.querySelector('link').innerHTML,
          creator: item.getElementsByTagName('dc:creator')[0].innerHTML,
          thumbnail: ([...item.getElementsByTagName('media:thumbnail')].length > 0) && item.getElementsByTagName('media:thumbnail')[0].getAttribute('url'),
        }))

        ReactDOM.render(
          <section className="explanation sectionLanding">
            <div className="innerLanding">

              <h2>Our blog</h2>

              <div className="triple">

                {items.map(item => (
                  <div key={item.link} className="blogColumn">
                    {item.thumbnail
                      && <img src={item.thumbnail} alt={item.title} />
                    }
                    <h3>{item.title}</h3>

                    <div className="blogMetadata">
                      <span>{item.creator.replace('<![CDATA[', '').replace(']]>', '') }</span>
                      <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                      {(item.category.replace('<![CDATA[', '').replace(']]>', '') !== 'Uncategorized') && (
                        <span>{item.category.replace('<![CDATA[', '').replace(']]>', '') }</span>
                      )}
                    </div>

                    <p dangerouslySetInnerHTML={{ __html: item.description.replace('<![CDATA[', '').replace(']]>', '') }} />
                  </div>
                ))}

              </div>

              <div className="center">
                <a href="/about" className="btnLanding">About</a>
              </div>

            </div>
          </section>,
          blogPostContainer,
        )
      } catch (error) {
        console.log(error)
      }
    }
  }

  return { init }
})()


$(async () => {
  await updateUser()
  animateScrollToFragment.init()
  injectHeader.init()
  injectStats.init()
  toggleShow.init()
  createAccordeon.init()
  createPoliciesFeed.init()
  createPolicyRelated.init()
  createKibanaListener.init()
  hideUserLoginButtons.init()
  createBlogPost.init()

  $('[data-slick]').slick()
})
