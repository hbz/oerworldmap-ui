import React from 'react'
import { storiesOf } from '@storybook/react'

import ResourcePreview from '../src/components/ResourcePreview'
import WithStrings from './WithStrings'

import about from '../test/resources/WebPage.json'

storiesOf('ResourcePreview', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ResourcePreview
        about={about}
      />
    </WithStrings>
  ))