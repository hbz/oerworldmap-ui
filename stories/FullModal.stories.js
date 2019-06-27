import React from 'react'
import { storiesOf } from '@storybook/react'

import FullModal from '../src/components/FullModal'
import WithStrings from './WithStrings'

storiesOf('FullModal', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <FullModal>
        Test
      </FullModal>
    </WithStrings>
  ))