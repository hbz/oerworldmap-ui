import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import ButtonFilter from '../src/components/ButtonFilter'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

import mock from './helpers/mock'

const aggregation = {
  "doc_count_error_upper_bound": 0,
  "sum_other_doc_count": 0,
  "buckets": [
    {
      "doc_count": 0,
      "key": "WebPage"
    },
    {
      "doc_count": 0,
      "key": "Product"
    },
    {
      "doc_count": 0,
      "key": "Organization"
    },
    {
      "doc_count": 401,
      "key": "Service"
    },
    {
      "doc_count": 0,
      "key": "Person"
    },
    {
      "doc_count": 0,
      "key": "Action"
    },
    {
      "doc_count": 0,
      "key": "Event"
    },
    {
      "doc_count": 0,
      "key": "Article"
    }
  ]
}

describe('<ButtonFilter />', () => {
  it('creates eight items', () => {
    const wrapper = render(
      <I18nProvider i18n={mock.i18n}>
        <EmittProvider emitter={mock.emitter}>
          <ButtonFilter
            filter={[]}
            aggregation={aggregation}
            submit={e => e}
            filterName="Test"
          />
        </EmittProvider>
      </I18nProvider>
    )
    assert.equal(wrapper.hasClass('ButtonFilter'), true)
    assert.equal(wrapper.children().length, 8)
  })
})
