/* global window */
/* global XMLHttpRequest */

import React from 'react'
import toRegExp from 'path-to-regexp'
import removeMd from 'remove-markdown'

import Init from './components/Init'
import WebPage from './components/WebPage'
import ActionButtons from './components/ActionButtons'
import Country from './components/Country'
import Feed from './components/Feed'
import Statistics from './components/Statistics'
import ResourceIndex from './components/ResourceIndex'
import Register from './components/Register'
import Password from './components/Password'
import Groups from './components/Groups'
import Feedback from './components/Feedback'
import FullModal from './components/FullModal'
import ErrorPage from './components/ErrorPage'
import Log from './components/Log'
import Diffs from './components/Diffs'
import Link from './components/Link'
import { getURL } from './common'
import { APIError } from './api'
import i18n from './i18n'
import centroids from './json/centroids.json'

export default (api) => {

  Link.home = '/resource/'
  Link.back = '/resource/'

  const routes = [
    {
      path: '/resource/',
      get: async (params, context, state) => {
        const url = getURL({
          path: '/resource/',
          params: Object.assign(params, {features: true})
        })
        if (!params.add) {
          Link.home = url
        }
        const data = params.add ? {
          about: {
            '@type': params.add
          },
          _self: url
        } : state || await api.get(url, context.authorization)
        const component = (data) => params.add ? (
          <WebPage
            user={context.user}
            mapboxConfig={context.mapboxConfig}
            {...data}
            view="edit"
            schema={context.schema}
          />
        ) : (
          <ResourceIndex
            {...data}
            mapboxConfig={context.mapboxConfig}
            map={params.map}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            add={params.add}
            embedValue="true"
          >
            <ActionButtons user={context.user} />
          </ResourceIndex>
        )

        const title = params.add
          ? context.i18n.translate('add', {type: context.i18n.translate(params.add)})
          : context.i18n.translate('ResourceIndex.index.showingEntities', {
            number: data.totalItems,
            query: data.query
              || (data.filters
                && data.filters["about.@type"]
                && context.i18n.translate(data.filters["about.@type"][0])
              )
              || ''
          })

        const metadata = {
          description: context.i18n.translate('Discover the OER movement'),
          url: data._self,
          //TODO: Add static iamge with aggregations or custom logo
          image: `https://api.mapbox.com/styles/v1/${context.mapboxConfig.miniMapStyle}/static/0,30,1,0,0/1200x630?access_token=${context.mapboxConfig.token}`
        }

        return { title, data, component, metadata }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/resource/', body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={context.schema}
          />
        )

        const title = context.i18n.translate('ResourceIndex.upsertResource.created', {
          name: context.i18n.translate(data.about.name)
        })
        return { title, data, component }
      }
    },
    {
      path: '/resource/:id',
      get: async (id, params, context, state) => {
        const url = getURL({ path: `/resource/${id}`, params })
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            mapboxConfig={context.mapboxConfig}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={context.schema}
            embedValue="true"
          />
        )
        const title = context.i18n.translate(data.about.name)
        const metadata = {
          description: data.about
            && data.about.description
            && removeMd(context.i18n.translate(data.about.description)).slice(0, 300),
          url: data._self,
          image: data.about && data.about.image
        }

        return { title, data, component, metadata }
      },
      post: async (id, params, context, state, body) => {
        const data = await api.post(`/resource/${id}`, body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={context.schema}
          />
        )
        const title = context.i18n.translate('updated.updated', {
          name: context.i18n.translate(data.about.name)
        })
        return { title, data, component }
      },
      delete: async (id, params, context) => {
        const data = await api.delete(`/resource/${id}`, context.authorization)
        const component = (data) => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              {data.message}
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('deleted.deleted', {id})
        return { title, data, component }
      }
    },
    {
      path: '/resource/:id/comment',
      post: async (id, params, context, state, body) => {
        const data = await api.post(`/resource/${id}/comment`, body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={context.schema}
          />
        )
        const title = context.i18n.translate('ResourceIndex.upsertResource.created', {
          name: context.i18n.translate('Comment')
        })
        return { title, data, component }
      }
    },
    {
      path: '/country/:id',
      get: async (id, params, context, state) => {
        const url = getURL({
          path: `/country/${id}`,
          params: Object.assign(params, {features: true})
        })
        Link.home = url
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <ResourceIndex
            {...data}
            className="countryView"
            mapboxConfig={context.mapboxConfig}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            embedValue="country"
          >
            <Country
              iso3166={data.iso3166}
              countryData={data.aggregations['country']['feature.properties.location.address.addressCountry'].buckets[0]}
            />
          </ResourceIndex>
        )
        const title = context.i18n.translate(id.toUpperCase())
        const metadata = {
          description: context.i18n.translate('CountryIndex.description', {
            countryName: context.i18n.translate(data.iso3166)
          }),
          url: data._self,
          image: `https://api.mapbox.com/styles/v1/${context.mapboxConfig.miniMapStyle}/static/${centroids[data.iso3166]},4,0,0/1200x630?access_token=${context.mapboxConfig.token}`
        }

        return { title, data, component, metadata }
      }
    },
    {
      path: '/aggregation/',
      get: async (params, context, state) => {
        const data = state || await api.get('/aggregation/', context.authorization)
        const component = (data) => <Statistics aggregations={data} />
        const title = context.i18n.translate('ClientTemplates.app.statistics')
        return { title, data, component }
      }
    },
    {
      path: '/feed/',
      get: async (params, context, state) => {
        const data = state || await api.get('/resource/?size=20&sort=dateCreated:desc', context.authorization)
        const component = (data) => <Feed {...data} />
        const title = context.i18n.translate('ClientTemplates.app.recentAdditions')
        return { title, data, component }
      }
    },
    {
      path: '/user/register',
      get: async (params, context, state) => {
        const data = state
        const component = () => <Register schema={context.schema} />
        const title = context.i18n.translate('UserIndex.register.register')
        return { title, data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/user/register', body, context.authorization)
        const component = (data) => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              <p>
                {context.i18n.translate('UserIndex.registered.successfullyRegistere', {
                  username: data.username
                })}
              </p>
              {data.newsletter &&
                <p>
                  {context.i18n.translate('UserIndex.registered.signedUpForNewsletter', {
                    username: data.username
                  })}
                </p>
              }
              {data.newsletter ? (
                <p>
                  {context.i18n.translate('UserIndex.registered.sentMessageNewsletter')}
                </p>
              ) : (
                <p>
                  {context.i18n.translate('UserIndex.registered.sentMessage')}
                </p>
              )}
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('UserIndex.registered.successfullyRegistere', {
          username: data.username
        })
        return { title, data, component }
      }
    },
    {
      path: '/user/password',
      get: async (params, context, state) => {
        const data = state
        const component = () => <Password schema={context.schema} />
        const title = context.i18n.translate('UserIndex.register.resetPassword')
        return { title, data, component }
      }
    },
    {
      path: '/user/password/reset',
      post: async (params, context, state, body) => {
        const data = await api.post('/user/password/reset', body, context.authorization)
        const component = () => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              {context.i18n.translate('UserIndex.passwordReset.message')}
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('UserIndex.register.resetPassword')
        return { title, data, component }
      }
    },
    {
      path: '/user/password/change',
      post: async (params, context, state, body) => {
        const data = await api.post('/user/password/change', body, context.authorization)

        setTimeout(()=> {
          const request = new XMLHttpRequest()
          const url = `${window.location.protocol}//logout@${window.location.hostname}/.logout`
          request.open('GET', url, false)
          request.send(null)
          window.location = Link.home
        }, 5000)

        const component = () => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              {context.i18n.translate('UserIndex.passwordChanged.message')}
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('UserIndex.passwordChanged.message')
        return { title, data, component }
      }
    },
    {
      path: '/user/groups',
      get: async (params, context, state) => {
        const data = state || await api.get('/user/groups', context.authorization)
        const component = (data) => (
          <Groups {...data} />
        )
        const title = context.i18n.translate('UserIndex.groups.title')
        return { title, data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/user/groups', body, context.authorization)
        const component = (data) => (
          <Groups {...data} confirm />
        )
        const title = context.i18n.translate('UserIndex.groupsChanged.groupsUpdated')
        return { title, data, component }
      }
    },
    {
      path: '/user/verify',
      get: async (params, context, state) => {
        const url = getURL({path: '/user/verify', params})
        const data = state || await api.get(url, context.authorization)
        const component = (user) => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              <p
                dangerouslySetInnerHTML={
                  {__html: context.i18n.translate('UserIndex.verified.message', user) }
                }
              />
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('UserIndex.verified.title', data)
        return { title, data, component }
      }
    },
    {
      path: '/log/',
      get: async (params, context, state) => {
        const data = state || await api.get('/log/', context.authorization)
        const component = (data) => (
          <Log entries={data} />
        )
        const title = context.i18n.translate('ResourceIndex.log.log')
        return { title, data, component }
      },
    },
    {
      path: '/log/:id',
      get: async (id, params, context, state) => {
        const url = params.compare && params.to
          ? getURL({ path: `/log/${id}`, params: { compare: params.compare, to: params.to } })
          : getURL({ path: `/log/${id}`})
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <Diffs {...data} phrases={context.phrases} schema={context.schema} />
        )
        const title = context.i18n.translate('ResourceIndex.log.logFor', {id})
        return { title, data, component }
      }
    }
  ]

  const matchURI = (path, uri) => {
    const match = toRegExp(path).exec(uri)
    return match ? match.slice(1) : null
  }

  const handle = async (method, uri, context, state, params, body) => {
    context.i18n = i18n(context.locales, context.phrases)
    try {
      if (context.err) {
        const {message, status} = context.err
        context.err = null
        throw new APIError(message, status)
      }
      for (const route of routes) {
        const uriParams = matchURI(route.path, uri)
        if (uriParams === null) {
          continue
        }
        if (typeof route[method] !== 'function') {
          throw "Method not implemented"
        }
        const result = await route[method](...uriParams, params, context, state, body)
        if (result) {
          result.render = (data) => <Init {...context}>{result.component(data)}</Init>
          return result
        }
      }
    } catch (err) {
      if (err instanceof APIError) {
        const component = (err) => <ErrorPage translate={(key) => key} message={err.message} />
        const render = (err) => <Init {...context}>{component(err)}</Init>
        return { title: err.message, data: err, component, render, err }
      }
      throw err
    }
    // 404
    const component = () => <ErrorPage translate={(key) => key} message="Not Found" />
    const render = () => <Init {...context}>{component()}</Init>
    return { title: 'Not Found', data: {}, component, render }
  }

  return {
    route: (uri, context, state) => ({
      get: async (params = {}) => (
        handle("get", uri, context, state, params, null)
      ),
      post: async (body, params = {}) => (
        handle("post", uri, context, state, params, body)
      ),
      delete: async (body, params = {}) => (
        handle("delete", uri, context, state, params, body)
      )
    })
  }

}
