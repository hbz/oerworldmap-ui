import React from 'react'
import { storiesOf } from '@storybook/react'

import Log from '../src/components/Log'

storiesOf('Log', module)
  .add('Render', () => (
    <Log
      entries={{test: "test"}}
    />
  ))