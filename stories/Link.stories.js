import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '../src/components/Link'
import mock from '../test/helpers/mock'
import EmittProvider from '../src/components/EmittProvider'

storiesOf('Link', module)
  .add('Render', () => (
    <EmittProvider emitter={mock.emitter}>
      <Link href="http://test.de">
        Test Link
      </Link>
    </EmittProvider>
  ))