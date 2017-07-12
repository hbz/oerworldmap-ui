import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'

import OERWorldMap from '../src/components/OERWorldMap'

describe('<OERWorldMap />', () => {
  it('localizes correctly', () => {
    const expected = {
      de: 'Hallo Welt vom Test.',
      es: 'Hola mundo desde Test.',
      en: 'Hello world from Test.'
    }
    for (let language in expected) {
      let wrapper = mount(<OERWorldMap language={language} />)
      assert.equal(wrapper.node.t('hello.world', {source: 'Test'}), expected[language])
    }
  })
})
