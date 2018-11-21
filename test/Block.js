import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Block from '../src/components/Block'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

import mock from './helpers/mock'

describe('<Block />', () => {
  test('creates three items', () => {
    const wrapper = render(
      <I18nProvider i18n={mock.i18n}>
        <EmittProvider emitter={mock.emitter}>
          <Block className="testClass" collapsible collapsibleType="show-all" title="Test Title">
            <div className="tesDiv">Test</div>
          </Block>
        </EmittProvider>
      </I18nProvider>
    )
    assert.strictEqual(wrapper.hasClass('testClass'), true)
    assert.strictEqual(wrapper.children().length, 3)
  })
})
