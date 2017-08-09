import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'
import testdata from './resources/resourceTest.json'

import ItemList from '../src/components/ItemList'
import I18nProvider from '../src/components/I18nProvider'

describe('<ItemList />', () => {
  it('creates list entry for each item', () => {
    const wrapper = mount(
      <I18nProvider locales={['en']}>
        <ItemList listItems={testdata} emitter={{}} />
      </I18nProvider>
    )
    assert.equal(wrapper.find('li').length, 64)
  })
})
