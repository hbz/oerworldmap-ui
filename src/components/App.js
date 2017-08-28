import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'
import 'font-awesome/css/font-awesome.css'
import FeatureCollection from './FeatureCollection'
import Feature from './Feature'
import Header from './Header'
import Map from './Map'
import Filters from './Filters'
import Columns from './Columns'
import Column from './Column'
import NotificationWelcome from './NotificationWelcome'
import ActionButtons from './ActionButtons'
import FullModal from './FullModal'

import schema from '../json/schema.json'

import '../styles/form.pcss'

const App = ({ data, mapboxConfig, emitter }) => (
  <main className="main">

    <Header />

    <div className="content">

      <Map
        emitter={emitter}
        mapboxConfig={mapboxConfig}
        features={data}
      />

      <Columns emitter={emitter}>
        <Column>
          <Filters />
          {data['type'] && data['type'] === 'FeatureCollection' &&
            <FeatureCollection emitter={emitter} {...data} />
          }
        </Column>
        {data['type'] && data['type'] === 'Feature' &&
          <Column>
            <Feature emitter={emitter} {...data} />
          </Column>
        }
      </Columns>

      <NotificationWelcome data={data} />

      <ActionButtons />

      <FullModal >
        <Composer
          value={{"@type": "Organization"}}
          schema={schema}
          submit={value => emitter.emit('save', value)}
          getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
          getLabel={value => value && value["name"] ? value["name"] : value["@id"]}
        />
      </FullModal>

    </div>

  </main>
)

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  mapboxConfig: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default App
