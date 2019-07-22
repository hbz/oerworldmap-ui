import React from 'react'
import { storiesOf } from '@storybook/react'

import Share from '../src/components/Share'
import WithStrings from './WithStrings'

storiesOf('Share', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Share
        _self="httpss://example.com"
      />
    </WithStrings>
  ))