import { describe, it } from 'mocha'
import { mount } from 'enzyme'
import React from 'react'
import assert from 'assert'

import I18nProvider from '../src/components/I18nProvider'

describe('<I18nProvider />', () => {
  it('localizes correctly', () => {
    const expected = {
      de: 'bar',
      es: 'bar',
      en: 'bar'
    }
    for (const language in expected) {
      const wrapper = mount(
        <I18nProvider locales={[language]} phrases={{'foo': 'bar'}}><div /></I18nProvider>
      ).instance()
      assert.equal(wrapper.t('foo'), expected[language])
    }
  })
})
