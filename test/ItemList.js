import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'
import testdata from './resources/ItemList.json'

import ItemList from '../src/components/ItemList'

describe('<ItemList />', () => {
  it('creates list entry for each item', () => {
    const wrapper = mount(<ItemList listItems={testdata} />)
    assert.equal(wrapper.find('li').length, 6)
  })
})
