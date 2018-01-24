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
import Groups from './components/Groups'
import Feedback from './components/Feedback'
import ErrorPage from './components/ErrorPage'
import Log from './components/Log'
import Diffs from './components/Diffs'
import { getURL } from './common'
import { APIError } from './api'

export default (api) => {

  const routes = [
    {
      path: '/resource/',
      get: async (params, context, state) => {
        const url = getURL({ path: '/resource/', params })
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <ResourceIndex
            {...data}
            mapboxConfig={context.mapboxConfig}
            map={params.map}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          >
            <ActionButtons user={context.user} />
          </ResourceIndex>
        )
        return { title: 'ResourceIndex', data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/resource/', body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'Created WebPage', data, component }
      }
    },
    {
      path: '/resource/:id',
      get: async (params, context, state) => {
        const data = state || await api.get(`/resource/${params.id}`, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'WebPage', data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post(`/resource/${params.id}`, body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'Updated WebPage', data, component }
      },
      delete: async (params, context) => {
        const data = await api.delete(`/resource/${params.id}`, context.authorization)
        const component = (data) => (
          <Feedback>
            {data.message}
          </Feedback>
        )
        return { title: 'Deleted WebPage', data, component }
      }
    },
    {
      path: '/resource/:id/comment',
      post: async (params, context, state, body) => {
        const data = await api.post(`/resource/${params.id}/comment`, body, context.authorization)
        const component = (data) => (
          <WebPage
            {...data}
            user={context.user}
            view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}
          />
        )
        return { title: 'Updated Comment', data, component }
      }
    },
    {
      path: '/country/:id',
      get: async (params, context, state) => {
        const url = getURL({ path: `/country/${params.id}`, params })
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <ResourceIndex
            {...data}
            className="countryView"
            mapboxConfig={context.mapboxConfig}
          >
            <Country
              iso3166={data.iso3166}
              countryData={data.aggregations['about.location.address.addressCountry'].buckets[0]}
            />
          </ResourceIndex>
        )
        return { title: 'Country', data, component }
      }
    },
    {
      path: '/aggregation/',
      get: async (params, context, state) => {
        const data = state || await api.get('/aggregation/', context.authorization)
        const component = (data) => <Statistics aggregations={data} />
        return { title: 'Aggregation', data, component }
      }
    },
    {
      path: '/feed/',
      get: async (params, context, state) => {
        const data = state || await api.get('/resource/?size=20&sort=dateCreated:desc', context.authorization)
        const component = (data) => <Feed {...data} />
        return { title: 'Feed', data, component }
      }
    },
    {
      path: '/user/register',
      get: async (params, context, state) => {
        const data = state
        const component = () => <Register />
        return { title: 'Registration', data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/user/register', body, context.authorization)
        const component = (data) => (
          <Feedback>
            {data.username} registered{data.newsletter && " and signed up for newsletter"}.
          </Feedback>
        )
        return { title: 'Registered user', data, component }
      }
    },
    {
      path: '/user/password',
      get: async (params, context, state) => {
        const data = state
        const component = () => <Password />
        return { title: 'Reset Password', data, component }
      }
    },
    {
      path: '/user/password/reset',
      post: async (params, context, state, body) => {
        const data = await api.post('/user/password/reset', body, context.authorization)
        const component = () => (
          <Feedback>
            Your password was reset
          </Feedback>
        )
        return { title: 'Reset Password', data, component }
      }
    },
    {
      path: '/user/password/change',
      post: async (params, context, state, body) => {
        const data = await api.post('/user/password/change', body, context.authorization)
        const component = () => (
          <Feedback>
            Your password was changed
          </Feedback>
        )
        return { title: 'Change Password', data, component }
      }
    },
    {
      path: '/user/groups',
      get: async (params, context, state) => {
        const data = state || await api.get('/user/groups', context.authorization)
        const component = (data) => (
          <Groups {...data} />
        )
        return { title: 'Edit Groups', data, component }
      },
      post: async (params, context, state, body) => {
        const data = await api.post('/user/groups', body, context.authorization)
        const component = (data) => (
          <Groups {...data} />
        )
        return { title: 'Update Groups', data, component }
      }
    },
    {
      path: '/user/profile',
      get: async (params, context, state) => {
        console.log(context.authorization)
        const data = state || await api.get('/user/profile', context.authorization)
        const component = (data) => (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )
        return { title: 'Current User', data, component }
      }
    },
    {
      path: '/log/',
      get: async (params, context, state) => {
        const data = state || await api.get('/log/', context.authorization)
        const component = (data) => (
          <Log entries={data} />
        )
        return { title: 'Edit Groups', data, component }
      },
    },
    {
      path: '/log/:id',
      get: async (params, context, state) => {
        const url = params.compare && params.to
          ? getURL({ path: `/log/${params.id}`, params: { compare: params.compare, to: params.to } })
          : getURL({ path: `/log/${params.id}`})
        const data = state || await api.get(url, context.authorization)
        const component = (data) => (
          <Diffs {...data} />
        )
        return { title: 'Edit Groups', data, component }
      }
    }
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

  const handle = async (method, uri, context, state, params, body) => {
    try {
      if (context.err) {
        const message = context.err
        context.err = null
        throw new APIError(message)
      }
      for (const route of routes) {
        const uriParams = matchURI(route.path, uri)
        if (uriParams === null) continue
        if (typeof route[method] !== 'function') {
          throw "Method not implemented"
        }
        Object.assign(params, uriParams)
        const result = await route[method](params, context, state, body)
        if (result) {
          result.render = (data) => <Init {...context}>{result.component(data)}</Init>
          return result
        }
      }
    } catch (err) {
      if (err instanceof APIError) {
        console.error(err)
        const component = (err) => <ErrorPage translate={(key) => key} message={err.message} />
        const render = (err) => <Init {...context}>{component(err)}</Init>
        return { title: err.message, data: err, component, render, err: err.message }
      }
      throw err
    }
    // 404
    const component = () => <ErrorPage translate={(key) => key} message="Not Found" />
    const render = () => <Init {...context}>{component()}</Init>
    return { title: 'Not Found', data: {}, component, render }
  }

  return {
    route: (uri, context, state) => (
      {
        get: async (params = {}) => (
          handle("get", uri, context, state, params, null)
        ),
        post: async (body, params = {}) => (
          handle("post", uri, context, state, params, body)
        ),
        delete: async (body, params = {}) => (
          handle("delete", uri, context, state, params, body)
        )
      }
    )
  }

}
