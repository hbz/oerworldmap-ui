import React from 'react'
import PropTypes from 'prop-types'
import toRegExp from 'path-to-regexp'

import Init from './components/Init'
import App from './components/App'
import WebPage from './components/WebPage'
import ActionButtons from './components/ActionButtons'
import ErrorPage from './components/ErrorPage'
import Country from './components/Country'
import Feed from './components/Feed'
import Statistics from './components/Statistics'
import ResourceIndex from './components/ResourceIndex'
import Api from './api'

export default function (apiConfig) {

  const api = new Api(apiConfig)

  const routes = [
    {
      path: '/resource/',
      async action(params) {
        const data = await api.load('/resource/', params.authorization)
        return (
          <ResourceIndex {...data} mapboxConfig={params.mapboxConfig} selected={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''}>
            <ActionButtons />
          </ResourceIndex>
        )
      }
    },
    {
      path: '/resource/:id',
      async action(params) {
        const data = await api.load(`/resource/${params.id}`, params.authorization)
        console.log(data)
        return <WebPage {...data} view={typeof window !== 'undefined' ? window.location.hash.substr(1) : ''} />
      }
    },
    {
      'path': '/country/:id',
      async action(params) {
        const data = await api.load(`/country/${params.id}`, params.authorization)
        return <ResourceIndex {...data}><Country {...data}/></ResourceIndex>
      }
    },
    {
      'path': '/aggregation/',
      async action(params) {
        const data = await api.load('/aggregation/', params.authorization)
        return <Statistics aggregations={data} />
      }
    },
    {
      'path': '/feed/',
      async action(params) {
        const data = await api.load('/resource/?size=20&sort=dateCreated:desc', params.authorization)
        return <Feed {...data} />
      }
    }
  ]

  const matchURI = (path, uri) => {
    const keys = [];
    const pattern = toRegExp(path, keys);
    const match = pattern.exec(uri.split("?")[0]);
    if (!match) return null;
    const params = Object.create(null);
    for (let i = 1; i < match.length; i++) {
      params[keys[i - 1].name] =
        match[i] !== undefined ? match[i] : undefined;
    }
    //TODO: extract params from ?queryString
    return params;
  }

  return {
    async route(uri, context) {
      const [user, ...rest] = context.authorization
        ? new Buffer(context.authorization.split(" ").pop(), "base64").toString("ascii").split(":") : []
      try {
        for (const route of routes) {
          const params = matchURI(route.path, uri)
          if (params === null) continue
          Object.assign(context, params)
          const result = await route.action(context)
          if (result) return (
            <Init {...context} user={user}>{result}</Init>
          )
        }
      } catch (err) {
        console.error(err)
        return <pre>ERROR {JSON.stringify(err, null, 2)}</pre>
      }
      // 404
      return <h1>Page not found</h1>
    }
  }

}
