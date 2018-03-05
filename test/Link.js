import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Link from '../src/components/Link'
import EmittProvider from '../src/components/EmittProvider'

const id = 'urn:uuid:51ab33df-1acd-4a81-915c-e8174b3a321c'
const url = 'https://oerworldmap.org/'

describe('<Link />', () => {
  const wrapper = render(
    <EmittProvider emitter={{}}>
      <div>
        <Link href={id} >Test Link</Link>
        <Link href={url} >OER WORLD MAP</Link>
      </div>
    </EmittProvider>
  )

  it(`Creates a link to /resource/${id}`, () => {
    const link = wrapper.find('a')[0]
    assert.equal(link.attribs.href, `/resource/${id}`)
    assert.equal(link.children[0].data, 'Test Link')
  })

  it(`Creates a link to ${url}`, () => {
    const link = wrapper.find('a')[1]
    assert.equal(link.attribs.href, url)
    assert.equal(link.children[0].data, 'OER WORLD MAP')
  })
})
