import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import ActionButtons from '../src/components/ActionButtons'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

import user from './resources/user.json'
import mock from './helpers/mock'

describe('<ActionButtons />', () => {
  test('creates four items', () => {
    const wrapper = render(
      <I18nProvider i18n={mock.i18n}>
        <EmittProvider emitter={mock.emitter}>
          <ActionButtons />
        </EmittProvider>
      </I18nProvider>
    )
    assert.strictEqual(wrapper.children().length, 4)
  })
  test('creates six items', () => {
    const wrapper = render(
      <I18nProvider i18n={mock.i18n}>
        <EmittProvider emitter={mock.emitter}>
          <ActionButtons user={user} />
        </EmittProvider>
      </I18nProvider>
    )
    assert.strictEqual(wrapper.children().length, 6)
  })
})
