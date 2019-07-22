
/* global mapboxConfig */
import React from 'react'
import { storiesOf } from '@storybook/react'

import WebPageCover from '../src/components/WebPageCover'
import WithStrings from './WithStrings'

import about from '../test/resources/WebPage.json'

storiesOf('WebPageCover', module)
  .add('Render', () => (
    <WithStrings lang={["en"]}>
      <WebPageCover
        mapboxConfig={mapboxConfig}
        about={about}
      />
    </WithStrings>
  ))