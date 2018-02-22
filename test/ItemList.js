import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'
import testdata from './resources/ItemList.json'

import ItemList from '../src/components/ItemList'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

describe('<ItemList />', () => {
  it('creates list entry for each item', () => {
    const wrapper = render(
      <I18nProvider locales={['en']}>
        <EmittProvider emitter={{}}>
          <ItemList listItems={testdata} selected='none' />
        </EmittProvider>
      </I18nProvider>
    )
    assert.equal(wrapper.find('li').length, 6)
  })
})
