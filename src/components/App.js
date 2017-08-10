import React from 'react'
import PropTypes from 'prop-types'
import 'font-awesome/css/font-awesome.css'
import FeatureCollection from './FeatureCollection'
import WebPage from './WebPage'
import Header from './Header'
import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import NotificationWelcome from './NotificationWelcome'
import ActionButtons from './ActionButtons'

const App = ({ data, mapboxConfig, emitter }) => (
  <main className="main">

    <Header />

    <div className="content">

      <Map
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        features={data['type'] && data['type'] === 'FeatureCollection' ? data : null}
      />

      <Columns emitter={emitter}>
        <Column>
          <Filters />
          {data['type'] && data['type'] === 'FeatureCollection' &&
            <FeatureCollection emitter={emitter} {...data} />
          }
        </Column>
        {data['@type'] && data['@type'] === 'WebPage' &&
          <Column>
            <WebPage emitter={emitter} {...data} />
          </Column>
        }
      </Columns>

      <NotificationWelcome data={data} />

      <ActionButtons />

    </div>

  </main>
)

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
