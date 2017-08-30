import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import PagedCollection from './PagedCollection'
import WebPage from './WebPage'
import Header from './Header'
import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import NotificationWelcome from './NotificationWelcome'
import ActionButtons from './ActionButtons'
import withEmitter from './withEmitter'

const defaultAggregations = {
  'about.@type': {
    'buckets': [
      {key: 'Product'},
      {key: 'Organization'},
      {key: 'CustomerRelationship'},
      {key: 'ContactPoint'}
    ]
  }
}

const App = ({ data, mapboxConfig, user, features, emitter }) => (
  <div id="wrapper">

    <main className="container">

      <Header />

      <div className="content">

        <Map
          emitter={emitter}
          mapboxConfig={mapboxConfig}
          features={features}
        />

        <Columns emitter={emitter}>
          <Column>
            {user ? (
              <p>
                <a href="/.logout" onClick={(e) => {e.preventDefault(); emitter.emit('logout')}}>
                  Log out user {user}
                </a>
              </p>
            ) : (
              <p>
                <a href="/.login" onClick={(e) => {e.preventDefault(); emitter.emit('login')}}>
                  Log in
                </a>
              </p>
            )}
            <Filters
              query={data['query'] || ''}
              filters={data['filters'] || {'about.@type': [data.about['@type']]}}
              aggregations={data['aggregations'] || defaultAggregations}
              extended={data['@type'] === 'PagedCollection'}
            />
            {data['@type'] === 'PagedCollection' &&
              <PagedCollection {...data} />
            }
          </Column>
          {data['@type'] === 'WebPage' &&
            <Column>
              <WebPage {...data} />
            </Column>
          }
        </Columns>

        <NotificationWelcome data={data} />

        <ActionButtons />

      </div>

    </main>
  </div>
)

App.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  features: PropTypes.objectOf(PropTypes.any),
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.string
}

App.defaultProps = {
  user: null,
  features: null
}

export default withEmitter(App)
