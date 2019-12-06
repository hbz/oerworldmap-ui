/* global window */
/* global Headers */

import React from 'react'
import toRegExp from 'path-to-regexp'
import removeMd from 'remove-markdown'

import Init from './components/Init'
import WebPage from './components/WebPage'
import Country from './components/Country'
import Feed from './components/Feed'
import Timeline from './components/Timeline'
import Statistics from './components/Statistics'
import ResourceIndex from './components/ResourceIndex'
import Feedback from './components/Feedback'
import FullModal from './components/FullModal'
import ErrorPage from './components/ErrorPage'
import Log from './components/Log'
import Diffs from './components/Diffs'
import Link from './components/Link'
import { getURL, getTwitterId } from './common'
import { APIError } from './api'
import i18nWrapper from './i18n'
import MobileNavigation from './components/MobileNavigation'

export default (api, emitter, location) => {
  Link.home = '/resource/'
  Link.back = '/resource/'
  Link.self = location.href

  const routes = [
    {
      path: '/resource/',
      get: async (params, context, state) => {
        const {
          mapboxConfig, schema, phrases, embed, elasticsearchConfig,
        } = context
        const url = getURL({
          path: '/resource/',
          params,
        })
        if (!params.add) {
          Link.home = url
        }
        const data = state || {
          _self: location.href,
        }
        // const data = params.add ? {
        //   about: {
        //     '@type': params.add,
        //   },
        //   _self: location.href,
        // } : state || await api.get(url, new Headers(context.headers))
        const component = data => (params.add ? (
          <WebPage
            mapboxConfig={mapboxConfig}
            {...data}
            view="edit"
            schema={schema}
            showOptionalFields={false}
            onSubmit={data => emitter.emit('submit', { url: '/resource/', data })}
          />
        ) : (
          <ResourceIndex
            {...data}
            phrases={phrases}
            mapboxConfig={mapboxConfig}
            elasticsearchConfig={elasticsearchConfig}
            map={params.map}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            embedValue="true"
            isEmbed={embed === 'true' || embed === 'country'}
          >
            <MobileNavigation
              current={
                !url.endsWith('/resource/')
                || (typeof window !== 'undefined' ? window.location.hash.substr(1) : '').length > 0
                  ? 'list' : 'map'}
            />
          </ResourceIndex>
        ))

        const title = params.add
          ? context.i18n.translate('add', { type: context.i18n.translate(params.add) })
          : context.i18n.translate('ResourceIndex.index.showingEntities', {
            number: data.totalItems,
            query: data.filters
              && data.filters['about.@type']
              && context.i18n.translate(data.filters['about.@type'][0])
              || '',
          })

        const metadata = {
          description: context.i18n.translate('slogan'),
          url: data._self,
          image: 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataBig.png',
        }

        if (data && (data.query || (data.filters && Object.keys(data.filters).length > 0))) {
          metadata.image = 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataSmall.png'
          metadata.summary = 'summary'
        }

        return {
          title, data, component, metadata,
        }
      },
      post: async (params, context, state, body) => {
        const { mapboxConfig, schema } = context
        const data = await api.post('/resource/', body, new Headers(context.headers))
        const { about } = data
        const component = data => (
          <WebPage
            {...data}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={schema}
            mapboxConfig={mapboxConfig}
            onSubmit={data => emitter.emit('submit', { url: `/resource/${about['@id'] || ''}`, data })}
          />
        )

        const title = context.i18n.translate('ResourceIndex.upsertResource.created', {
          name: context.i18n.translate(data.about.name),
        })
        return { title, data, component }
      },
    },
    {
      path: '/resource/:id',
      get: async (id, params, context, state) => {
        const { mapboxConfig, schema } = context
        const url = getURL({ path: `/resource/${id}`, params })
        const data = state || await api.get(url, new Headers(context.headers))
        const { about } = data
        const component = data => (
          <WebPage
            {...data}
            mapboxConfig={mapboxConfig}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={schema}
            embedValue="true"
            onSubmit={data => emitter.emit('submit', { url: `/resource/${about['@id'] || ''}`, data })}
          />
        )
        const title = context.i18n.translate(data.about.name)
        const twitterId = getTwitterId(data.about.sameAs)
        const metadata = {
          description: data.about
            && data.about.description
            && removeMd(context.i18n.translate(data.about.description)).slice(0, 300),
          url: data._self,
          image: (data.about && data.about.image) || (twitterId && twitterId[1] && `https://avatars.io/twitter/${twitterId[1]}`),
        }

        return {
          title, data, component, metadata,
        }
      },
      post: async (id, params, context, state, body) => {
        const { mapboxConfig, schema } = context
        const data = await api.post(`/resource/${id}`, body, new Headers(context.headers))
        const { about } = data
        const component = data => (
          <WebPage
            {...data}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={schema}
            mapboxConfig={mapboxConfig}
            onSubmit={data => emitter.emit('submit', { url: `/resource/${about['@id'] || ''}`, data })}
          />
        )
        const title = context.i18n.translate('updated.updated', {
          name: context.i18n.translate(data.about.name),
        })
        return { title, data, component }
      },
      delete: async (id, params, context) => {
        const data = await api.delete(`/resource/${id}`, new Headers(context.headers))
        const component = data => (
          <FullModal closeLink={Link.home}>
            <Feedback>
              {data.message}
            </Feedback>
          </FullModal>
        )
        const title = context.i18n.translate('deleted.deleted', { id })
        return { title, data, component }
      },
    },
    {
      path: '/resource/:id/comment',
      post: async (id, params, context, state, body) => {
        const { mapboxConfig, schema } = context
        const data = await api.post(`/resource/${id}/comment`, body, new Headers(context.headers))
        const { about } = data
        const component = data => (
          <WebPage
            {...data}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={schema}
            mapboxConfig={mapboxConfig}
            onSubmit={data => emitter.emit('submit', { url: `/resource/${about['@id'] || ''}`, data })}
          />
        )
        const title = context.i18n.translate('ResourceIndex.upsertResource.created', {
          name: context.i18n.translate('Comment'),
        })
        return { title, data, component }
      },
    },
    {
      path: '/country/:id',
      get: async (id, params, context, state) => {
        const { phrases, mapboxConfig, embed } = context
        const url = getURL({
          path: `/country/${id}`,
          params,
        })
        Link.home = url
        const data = state || await api.get(url, new Headers(context.headers))
        const countryChampions = data.aggregations['global#champions']['sterms#about.countryChampionFor.keyword']
          .buckets.find(bucket => bucket.key === data.iso3166)
        const countryData = data.aggregations['global#facets']['filter#country']
        const component = data => (
          <ResourceIndex
            {...data}
            className="countryView"
            phrases={phrases}
            mapboxConfig={mapboxConfig}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            embedValue="country"
            isEmbed={embed === 'true' || embed === 'country'}
          >
            <MobileNavigation
              current="list"
              country={data.iso3166}
            />
            <Country
              iso3166={data.iso3166}
              countryChampions={countryChampions && countryChampions['top_hits#country_champions'].hits.hits}
              countryData={countryData}
            />
          </ResourceIndex>
        )
        const title = context.i18n.translate(id.toUpperCase())
        const metadata = {
          description: context.i18n.translate('CountryIndex.description', {
            countryName: context.i18n.translate(data.iso3166),
          }),
          url: data._self,
          image: 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataBig.png',
        }

        if (data && (data.query || Object.keys(data.filters).length > 0)) {
          metadata.image = 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataSmall.png'
          metadata.summary = 'summary'
        }

        return {
          title, data, component, metadata,
        }
      },
    },
    {
      path: '/country/:country/:region',
      get: async (country, region, params, context, state) => {
        const { phrases, mapboxConfig, embed } = context
        const url = getURL({
          path: `/country/${country}/${region}`,
          params,
        })
        Link.home = url
        const data = state || await api.get(url, context.authorization)
        const countryChampions = data.aggregations['global#champions']['sterms#about.countryChampionFor.keyword']
          .buckets.find(bucket => bucket.key === data.iso3166)
        const countryData = data.aggregations['global#facets']['filter#country']
        const regionalChampions = data.aggregations['global#champions']['sterms#about.regionalChampionFor.keyword']
          .buckets.find(bucket => bucket.key === `${country.toUpperCase()}.${region.toUpperCase()}`)
        const regionData = data.aggregations['global#facets']['filter#feature.properties.location.address.addressRegion']['sterms#feature.properties.location.address.addressRegion']
          .buckets.find(bucket => bucket.key === `${country.toUpperCase()}.${region.toUpperCase()}`)
        const component = data => (
          <ResourceIndex
            {...data}
            className="regionView"
            phrases={phrases}
            mapboxConfig={mapboxConfig}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            embedValue="country"
            region={region.toUpperCase()}
            isEmbed={embed === 'true' || embed === 'country'}
          >
            <MobileNavigation
              current="list"
              country={data.iso3166}
              region={region.toUpperCase()}
            />
            <Country
              iso3166={data.iso3166}
              region={region.toUpperCase()}
              countryChampions={countryChampions && countryChampions['top_hits#country_champions'].hits.hits}
              regionalChampions={regionalChampions && regionalChampions['top_hits#regional_champions'].hits.hits}
              countryData={countryData}
              regionData={regionData}
            />
          </ResourceIndex>
        )
        const title = `${context.i18n.translate((`${country}.${region}`).toUpperCase())} (${context.i18n.translate(country.toUpperCase())})`
        const metadata = {
          description: context.i18n.translate('CountryIndex.description', {
            countryName: context.i18n.translate(data.iso3166),
          }),
          url: data._self,
          image: 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataBig.png',
        }

        if (data && (data.query || Object.keys(data.filters).length > 0)) {
          metadata.image = 'https://raw.githubusercontent.com/hbz/oerworldmap-ui/master/docs/assets/images/metadataSmall.png'
          metadata.summary = 'summary'
        }

        return {
          title, data, component, metadata,
        }
      },
    },
    {
      path: '/aggregation/',
      get: async (params, context, state) => {
        const data = state
        const component = () => <Statistics />
        const title = context.i18n.translate('ClientTemplates.app.statistics')
        return { title, data, component }
      },
    },
    {
      path: '/feed/',
      get: async (params, context, state) => {
        const data = state || await api.get('/resource/?size=20&sort=dateCreated:desc', new Headers(context.headers))
        const component = data => (
          <FullModal closeLink={Link.home}>
            <Feed {...data} />
          </FullModal>
        )
        const title = context.i18n.translate('ClientTemplates.app.recentAdditions')
        return { title, data, component }
      },
    },
    {
      path: '/activity/',
      get: async (params, context, state) => {
        const data = state || await api.get('/activity/', context.authorization)
        const component = data => (
          <FullModal closeLink={Link.home}>
            <Timeline entries={data} />
          </FullModal>
        )
        const title = context.i18n.translate('Activity')
        return { title, data, component }
      },
    },
    {
      path: '/log/',
      get: async (params, context, state) => {
        const { i18n } = context
        const data = state || await api.get('/log/', new Headers(context.headers))
        const component = data => (
          <Log entries={data} />
        )
        const title = i18n.translate('ResourceIndex.log.log')
        return { title, data, component }
      },
    },
    {
      path: '/log/:id',
      get: async (id, params, context, state) => {
        const { phrases, schema } = context

        const url = params.compare && params.to
          ? getURL({ path: `/log/${id}`, params: { compare: params.compare, to: params.to } })
          : getURL({ path: `/log/${id}` })
        const data = state || await api.get(url, new Headers(context.headers))
        const component = data => (
          <Diffs {...data} phrases={phrases} schema={schema} />
        )
        const title = context.i18n.translate('ResourceIndex.log.logFor', { id })
        return { title, data, component }
      },
    },
    {
      path: '/user/profile',
      get: async (params, context, state) => {
        const { mapboxConfig, schema } = context
        const data = state || await api.get('/user/profile', new Headers(context.headers))
        const component = data => (
          <WebPage
            {...data.profile}
            _self="/user/profile"
            mapboxConfig={mapboxConfig}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            schema={schema}
            onSubmit={data => emitter.emit('submit', { url: '/user/profile', data })}
          />
        )
        const title = context.i18n.translate(data.profile.about.name)
        return { title, data, component }
      },
      post: async (params, context, state, body) => {
        const { mapboxConfig, schema } = context
        const data = await api.post('/user/profile', body, new Headers(context.headers))
        const component = data => (
          <WebPage
            {...data.profile}
            _self="/user/profile"
            mapboxConfig={mapboxConfig}
            view="view"
            schema={schema}
            onSubmit={data => emitter.emit('submit', { url: '/user/profile', data })}
          />
        )
        const title = context.i18n.translate('updated.updated', {
          name: context.i18n.translate(data.profile.about.name),
        })
        return { title, data, component }
      },
    },
  ]

  const matchURI = (path, uri) => {
    const match = toRegExp(path).exec(uri)
    return match ? match.slice(1) : null
  }

  const handle = async (method, uri, context, state, params, body) => {
    context.i18n = i18nWrapper(context.locales, context.phrases)
    const { i18n } = context
    try {
      if (context.err) {
        const { message, status } = context.err
        context.err = null
        throw new APIError(message, status)
      }
      // console.log(routes)
      // eslint-disable-next-line no-restricted-syntax
      for (const route of routes) {
        const uriParams = matchURI(route.path, uri)
        if (uriParams !== null) {
          if (typeof route[method] !== 'function') {
            throw new Error('Method not implemented')
          }
          // eslint-disable-next-line no-await-in-loop
          const result = await route[method](...uriParams, params, context, state, body)
          if (result) {
            result.render = (data) => {
              Link.self = (data && data._self) || Link.self
              return (
                <Init {...context}>
                  {result.component(data)}
                </Init>
              )
            }
            return result
          }
        }
      }
    } catch (err) {
      if (err instanceof APIError) {
        const component = err => <ErrorPage translate={i18n.translate} message={err.message} />
        const render = err => <Init {...context}>{component(err)}</Init>
        return {
          title: err.message, data: err, component, render, err,
        }
      }
      throw err
    }
    // 404
    const component = () => <ErrorPage translate={i18n.translate} message="Not Found" />
    const render = () => <Init {...context}>{component()}</Init>
    return {
      title: 'Not Found', data: {}, component, render,
    }
  }

  return {
    route: (uri, context, state) => ({
      get: async (params = {}) => (
        handle('get', uri, context, state, params, null)
      ),
      post: async (body, params = {}) => (
        handle('post', uri, context, state, params, body)
      ),
      delete: async (body, params = {}) => (
        handle('delete', uri, context, state, params, body)
      ),
    }),
  }
}
