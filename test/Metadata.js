import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Metadata from '../src/components/Metadata'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'
import about from './resources/WebPage.json'
import user from './resources/user.json'

import mock from './helpers/mock'
import i18n from '../src/i18n'

const dateModified = "2018-02-22T16:26:27.753"

describe('<Metadata />', () => {
  const wrapper = render(
    <I18nProvider
      i18n={i18n(['en'], {'ResourceIndex.read.lastModified': 'last modified %{dateModified}'})}
    >
      <EmittProvider emitter={mock.emitter}>
        <Metadata
          type={about['@type']}
          about={about}
          dateModified={dateModified}
          user={user}
        />
      </EmittProvider>
    </I18nProvider>
  )

  test("Generates the correct elements in metadata", () => {
    assert.strictEqual(wrapper.find('i')[0].attribs.class.includes('fa fa-file'), true)
    assert.strictEqual(wrapper.children()[0].next.children[0].data, about['@type'])
    assert.strictEqual(wrapper.find('a')[1].attribs.title, "February 22, 2018 4:26 PM")
  })
})
