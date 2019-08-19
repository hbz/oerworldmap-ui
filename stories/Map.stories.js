/* global mapboxConfig */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Map from '../src/components/Map'
import LoadData from './LoadData'

import WithStrings from './WithStrings'
import mock from '../test/helpers/mock'
import EmittProvider from '../src/components/EmittProvider'

const stories = storiesOf('Map')
  .add('render', () => (
    <LoadData
      url={`http://oerworldmap.local/country/${text('Country', 'BR')}`}
    >
      {data => (
        data !== null ? (
          <WithStrings lang="en">
            <EmittProvider emitter={mock.emitter}>
              <Map
                mapboxConfig={mapboxConfig}
                features={data.features}
                aggregations={data.aggregations}
                iso3166={text('Country', 'BR')}
                home={false}
              />
            </EmittProvider>
          </WithStrings>
        ) : (
          <div>No data yet</div>
        )
      )}
    </LoadData>
  ))

stories.addDecorator(withKnobs)