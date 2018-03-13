import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Metadata from '../src/components/Metadata'
import I18nProvider from '../src/components/I18nProvider'
import EmittProvider from '../src/components/EmittProvider'
import about from './resources/WebPage.json'
import user from './resources/user.json'

const author = 'Test Author'
const contributor = 'Test Contributor'
const dateModified = "2018-02-22T16:26:27.753+01:00"

describe('<Metadata />', () => {
  const wrapper = render(
    <I18nProvider
      locales={['en']}
      phrases={{'ResourceIndex.read.lastModified': 'last modified %{dateModified}'}}
    >
      <EmittProvider emitter={{}}>
        <Metadata
          type={about['@type']}
          about={about}
          author={author}
          contributor={contributor}
          dateModified={dateModified}
          user={user}
        />
      </EmittProvider>
    </I18nProvider>
  )

  it("Generates the correct elements in metadata", () => {
    assert.equal(wrapper.find('i')[0].attribs.class.includes('fa fa-book'), true)
    assert.equal(wrapper.children()[0].next.data.trim(), about['@type'])
    //FIXME
    //assert.equal(wrapper.text().split(' ').slice(-1), "2018-02-22")
  })
})
