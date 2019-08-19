import React from 'react'
import { storiesOf } from '@storybook/react'

import Export from '../src/components/Export'
import WithStrings from './WithStrings'

storiesOf('Export', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Export
        _self="httpss://example.com"
        _links={{refs:[
          {type: "Json", uri: "httpss://example.com/json"},
          {type: "CSV", uri: "httpss://example.com/csv"}
        ]}}
      />
    </WithStrings>
  ))