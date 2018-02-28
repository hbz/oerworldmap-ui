import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import ActionButtons from '../src/components/ActionButtons'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'

const user = {
  "username": "user@localhost",
  "groups": [
    "editor",
    "admin"
  ],
  "id": "FAKE-ID",
  "name": [
    {
      "@value": "Fake User",
      "@language": "en"
    }
  ],
  "_self": "http://oerworldmap.local:80/user/profile",
  "_status": "OK"
}

describe('<ActionButtons />', () => {
  it('creates four items', () => {
    const wrapper = render(
      <I18nProvider locales={['en']}>
        <EmittProvider emitter={{}}>
          <ActionButtons />
        </EmittProvider>
      </I18nProvider>
    )
    assert.equal(wrapper.children().length, 4)
  })
  it('creates six items', () => {
    const wrapper = render(
      <I18nProvider locales={['en']}>
        <EmittProvider emitter={{}}>
          <ActionButtons user={user} />
        </EmittProvider>
      </I18nProvider>
    )
    assert.equal(wrapper.children().length, 6)
  })
})
