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
// import Loading from './Loading'

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

      <Header user={user} />

      <div className="content">

        <Map
          emitter={emitter}
          mapboxConfig={mapboxConfig}
          features={features}
        />

        <Columns emitter={emitter}>
          <Column className={data['@type'] === 'WebPage' ? 'transparentColumn' : null}>
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

        {/* <Loading /> */}

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
