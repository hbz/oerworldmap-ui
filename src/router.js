/* global window */

import React from 'react'
import toRegExp from 'path-to-regexp'

import Init from './components/Init'
import WebPage from './components/WebPage'
import ActionButtons from './components/ActionButtons'
import Country from './components/Country'
import Feed from './components/Feed'
import Statistics from './components/Statistics'
import ResourceIndex from './components/ResourceIndex'
import Register from './components/Register'
import Password from './components/Password'
import { getURL } from './common'

export default (api) => {

  const routes = [
    {
      path: '/resource/',
      get: async (params, context, state) => {
        const url = getURL({ path: '/resource/', params })
        const data = state || await api.load(url, context.authorization)
        const component = (
          <ResourceIndex
            {...data}
            mapboxConfig={context.mapboxConfig}
            selected={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
            map={params.map}
          >
            <ActionButtons />
          </ResourceIndex>
        )
        return { title: 'ResourceIndex', data, component }
      },
      post: async (params) => {
        const data = await api.save(params)
        const component = (
          <WebPage
            {...data}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'Updated WebPage', data, component }
      }
    },
    {
      path: '/resource/:id',
      get: async (params, context, state) => {
        const data = state || await api.load(`/resource/${params.id}`, context.authorization)
        const component = (
          <WebPage
            {...data}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'WebPage', data, component }
      }
    },
    {
      path: '/country/:id',
      get: async (params, context, state) => {
        const url = getURL({ path: `/country/${params.id}`, params })
        const data = state || await api.load(url, context.authorization)
        const component = (
          <ResourceIndex
            {...data}
            mapboxConfig={context.mapboxConfig}
            selected={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          >
            <Country {...data} />
          </ResourceIndex>
        )
        return { title: 'Country', data, component }
      }
    },
    {
      path: '/aggregation/',
      get: async (params, context, state) => {
        const data = state || await api.load('/aggregation/', context.authorization)
        const component = <Statistics aggregations={data} />
        return { title: 'Aggregation', data, component }
      }
    },
    {
      path: '/feed/',
      get: async (params, context, state) => {
        const data = state || await api.load('/resource/?size=20&sort=dateCreated:desc', context.authorization)
        const component = <Feed {...data} />
        return { title: 'Feed', data, component }
      }
    },
    {
      path: '/user/register',
      get: async (params, context, state) => {
        const data = state
        const component = (
          <Register />
        )
        return { title: 'Registration', data, component }
      }
    },
    {
      path: '/user/password',
      get: async (params, context, state) => {
        const data = state
        const component = (
          <Password />
        )
        return { title: 'Reset Password', data, component }
      }
    },
  ]

  const matchURI = (path, uri) => {
    const keys = []
    const pattern = toRegExp(path, keys)
    const match = pattern.exec(uri)
    if (!match) return null
    const params = Object.create(null)
    for (let i = 1; i < match.length; i++) {
      params[keys[i - 1].name] =
        match[i] !== undefined ? match[i] : undefined
    }
    return params
  }

  const handle = async (method, uri, context, state, params) => {
    try {
      for (const route of routes) {
        const uriParams = matchURI(route.path, uri)
        if (uriParams === null) continue
        if (typeof route[method] !== 'function') {
          throw "Method not implemented"
        }
        Object.assign(params, uriParams)
        const result = await route[method](params, context, state)
        if (result) {
          result.component = <Init {...context}>{result.component}</Init>
          return result
        }
      }
    } catch (err) {
      console.error(err)
      return {
        title: 'Error',
        data: err,
        component: <pre>{JSON.stringify(err, null, 2)}</pre>
      }
    }
    // 404
    return {
      title: 'Not found',
      data: {},
      component: <h1>Page not found</h1>
    }
  }

  return {
    route: (uri, context, state) => (
      {
        get: async (params) => (
          handle("get", uri, context, state, params)
        ),
        post: async (params) => (
          handle("post", uri, context, state, params)
        )
      }
    )
  }

}
