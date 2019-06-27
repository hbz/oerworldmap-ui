import React from 'react'
import { storiesOf } from '@storybook/react'

import Feedback from '../src/components/Feedback'
import WithStrings from './WithStrings'

storiesOf('Feedback', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Feedback>
        Testing
      </Feedback>
    </WithStrings>
  ))