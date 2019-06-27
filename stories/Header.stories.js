import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '../src/components/Header'
import WithStrings from './WithStrings'
import user from '../test/resources/user.json'
import mock from '../test/helpers/mock'
import EmittProvider from '../src/components/EmittProvider'

storiesOf('Header', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <EmittProvider emitter={mock.emitter}>
        <Header
          supportedLanguages={['en']}
          user={user}
        />
      </EmittProvider>
    </WithStrings>
  ))