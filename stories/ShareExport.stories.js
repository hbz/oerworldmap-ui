import React from 'react'
import { storiesOf } from '@storybook/react'

import ShareExport from '../src/components/ShareExport'
import WithStrings from './WithStrings'

storiesOf('ShareExport', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ShareExport />
    </WithStrings>
  ))