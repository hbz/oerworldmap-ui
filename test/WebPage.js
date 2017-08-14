import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'
import testdata from './resources/WebPage.json'

import WebPage from '../src/components/WebPage'
import I18nProvider from '../src/components/I18nProvider'

describe('<WebPage />', () => {
  it('can be instantiated', () => {
    const wrapper = mount(
      <I18nProvider locales={['en']}>
        <WebPage {...testdata} emitter={{}} />
      </I18nProvider>
    )
    assert.equal(wrapper.find('h1').length, 1)
  })
})
