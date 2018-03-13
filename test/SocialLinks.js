import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import SocialLinks from '../src/components/SocialLinks'

const urls = [
  'https://oerworldmap.org',
  'https://youtube.com',
  'https://twitter.com'
]

describe('<Link />', () => {
  const wrapper = render(
    <SocialLinks links={urls} />
  )

  it(`Creates three links`, () => {
    const links = wrapper.find('a')
    assert.equal(links[0].attribs.href, urls[0])
    assert.equal(links[0].children[0].attribs.class.includes('fa-external-link-square'), true)

    assert.equal(links[1].attribs.href, urls[1])
    assert.equal(links[1].children[0].attribs.class.includes('fa-youtube'), true)

    assert.equal(links[2].attribs.href, urls[2])
    assert.equal(links[2].children[0].attribs.class.includes('fa-twitter'), true)
  })
})
