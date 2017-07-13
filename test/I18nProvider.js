import { describe, it } from 'mocha'
import { mount } from 'enzyme'
import React from 'react'
import assert from 'assert'

import I18nProvider from '../src/components/I18nProvider'

describe('<I18nProvider />', () => {
  it('localizes correctly', () => {
    const expected = {
      de: 'Hallo Welt vom Test.',
      es: 'Hola mundo desde Test.',
      en: 'Hello world from Test.'
    }
    for (let language in expected) {
      let wrapper = mount(
        <I18nProvider locales={[language]}><div /></I18nProvider>
      )
      assert.equal(wrapper.node.t('hello.world', {source: 'Test'}), expected[language])
    }
  })
})
