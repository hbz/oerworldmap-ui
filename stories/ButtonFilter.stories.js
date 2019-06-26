import React from 'react'
import { storiesOf } from '@storybook/react'

import ButtonFilter from '../src/components/ButtonFilter'
import WithStrings from './WithStrings'

const aggregation = {
  "doc_count_error_upper_bound": 0,
  "sum_other_doc_count": 0,
  "buckets": [
    {
      "key": "Organization",
      "doc_count": 1027
    },
    {
      "key": "Service",
      "doc_count": 510
    },
    {
      "key": "Person",
      "doc_count": 800
    },
    {
      "key": "Action",
      "doc_count": 455
    },
    {
      "key": "Event",
      "doc_count": 356
    },
    {
      "key": "Article",
      "doc_count": 146
    },
    {
      "key": "Product",
      "doc_count": 42
    },
    {
      "key": "WebPage",
      "doc_count": 275
    },
    {
      "key": "Policy",
      "doc_count": 148
    }
  ]
}

storiesOf('ButtonFilter', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ButtonFilter
        aggregation={aggregation}
        filter={[]}
        order={[
          "Organization",
          "Service",
          "Person",
          "Action",
          "Event",
          "Article",
          "Product",
          "WebPage",
          "Policy"
        ]}
        filterName="Test"
      >
        Test
      </ButtonFilter>
    </WithStrings>
  ))
