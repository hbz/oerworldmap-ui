import { describe, it } from 'mocha'
import React from 'react'
import assert from 'assert'
import { mount } from 'enzyme'

import Icon from '../src/components/Icon'

describe('<Icon />', () => {
  it('generates correct icon element', () => {
    const wrapper = mount(<Icon type='Organization' />)
    assert.equal(wrapper.find('i').hasClass('fa-users'), true)
  })
})
