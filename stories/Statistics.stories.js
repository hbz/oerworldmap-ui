import React from 'react'
import { storiesOf } from '@storybook/react'

import Statistics from '../src/components/Statistics'
import WithStrings from './WithStrings'

storiesOf('Statistics', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Statistics />
    </WithStrings>
  ))