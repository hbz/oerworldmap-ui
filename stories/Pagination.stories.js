import React from 'react'
import { storiesOf } from '@storybook/react'

import Pagination from '../src/components/Pagination'
import WithStrings from './WithStrings'

storiesOf('Pagination', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Pagination
        totalItems="400"
        nextPage="https://example.de/next"
        previousPage="https://example.de/prev"
        from="5"
        size="200"
      />
    </WithStrings>
  ))