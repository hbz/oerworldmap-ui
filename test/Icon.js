import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Icon from '../src/components/Icon'

describe('<Icon />', () => {
  it('generates correct icon element', () => {
    const wrapper = render(
      <div>
        <Icon type='Organization' />
      </div>
    )
    assert.equal(wrapper.find('i').hasClass('fa-users'), true)
  })
})
