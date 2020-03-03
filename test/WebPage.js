import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'
import testdata from './resources/WebPage.json'
import user from './resources/user.json'

import WebPage from '../src/components/WebPage'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'
import ConfigProvider from '../src/components/ConfigProvider'
import ApiProvider from '../src/components/ApiProvider'

import mock from './helpers/mock'

describe('<WebPage />', () => {
  test('can be instantiated', () => {
    const wrapper = render(
      <ConfigProvider config={mock.config}>
        <I18nProvider i18n={mock.i18n}>
          <EmittProvider emitter={mock.emitter}>
            <ApiProvider config={mock.config.apiConfig}>
              <WebPage
                {...testdata}
                geo={null}
                view=''
                schema={mock.schema}
              />
            </ApiProvider>
          </EmittProvider>
        </I18nProvider>
      </ConfigProvider>
    )
    assert.strictEqual(wrapper.find('h2').length, 1)
  })

  test('can render form for edit', () => {
    const wrapper = render(
      <ConfigProvider config={mock.config}>
        <I18nProvider i18n={mock.i18n}>
          <EmittProvider emitter={mock.emitter}>
            <ApiProvider config={mock.config.apiConfig}>
              <WebPage
                geo={null}
                user={user}
                _self="/resource/?add=Event&features=true"
                about={{"@type":"Event"}}
                view='edit'
                schema={mock.schema}
              />
            </ApiProvider>
          </EmittProvider>
        </I18nProvider>
      </ConfigProvider>
    )
    assert.strictEqual(wrapper.find('.Builder').length, 1)
  })
})
