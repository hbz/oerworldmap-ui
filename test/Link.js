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
        <Link href={id}>Test Link</Link>
        <Link href={url}>OER WORLD MAP</Link>
      </div>
    </EmittProvider>
  )

  test(`Creates a link to /resource/${id}`, () => {
    const link = wrapper.find('a')[0]
    assert.strictEqual(link.attribs.href, `/resource/${id}`)
    assert.strictEqual(link.children[0].data, 'Test Link')
  })

  test(`Creates a link to ${url}`, () => {
    const link = wrapper.find('a')[1]
    assert.strictEqual(link.attribs.href, url)
    assert.strictEqual(link.children[0].data, 'OER WORLD MAP')
  })
})
