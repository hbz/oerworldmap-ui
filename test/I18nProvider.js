import { describe, it } from 'mocha'
import { mount } from 'enzyme'
import React from 'react'
import assert from 'assert'

import I18nProvider from '../src/components/I18nProvider'

describe('<I18nProvider />', () => {
  it('localizes correctly', () => {
    const expected = {
      de: '1 Eintrag',
      es: '1 Entrada',
      en: '1 entry'
    }
    for (const language in expected) {
      const wrapper = mount(
        <I18nProvider locales={[language]}><div /></I18nProvider>
      ).instance()
      assert.equal(wrapper.t('PagedCollection.totalItems', {smart_count: 1}), expected[language])
    }
  })
})
