
/* global mapboxConfig */
import React from 'react'
import { storiesOf } from '@storybook/react'

import MiniMap from '../src/components/MiniMap'
import WithStrings from './WithStrings'

import centroids from '../src/json/centroids.json'

const geometry = {
  "type": "Point",
  "coordinates": [
    13.3811317,
    52.4983995
  ]
}

const country = "de"

storiesOf('MiniMap', module)
  .add('Render', () => (
    <WithStrings lang={["en"]}>
      <MiniMap
        mapboxConfig={mapboxConfig}
        geometry={geometry}
        center={geometry ? undefined : (country && centroids[country])}
      />
    </WithStrings>
  ))