import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from '../src/components/Loading'
import WithStrings from './WithStrings'

import EmittProvider from '../src/components/EmittProvider'
import mock from '../test/helpers/mock'

storiesOf('Loading', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <EmittProvider emitter={mock.emitter}>
        <Loading />
      </EmittProvider>
    </WithStrings>
  ))