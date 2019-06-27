import React from 'react'
import { storiesOf } from '@storybook/react'

import WebPageUserActions from '../src/components/WebPageUserActions'
import WithStrings from './WithStrings'

import about from '../test/resources/WebPage.json'
import user from '../test/resources/user.json'
import mock from '../test/helpers/mock'

storiesOf('WebPageUserActions', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <WebPageUserActions
        about={about}
        user={user}
        view="edit"
        schema={mock.schema}
      />
    </WithStrings>
  ))