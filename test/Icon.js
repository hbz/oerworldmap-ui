import React from 'react'
import assert from 'assert'
import { render } from 'enzyme'

import Icon from '../src/components/Icon'

describe('<Icon />', () => {
  test('generates correct icon element', () => {
    const wrapper = render(
      <div>
        <Icon type='Organization' />
      </div>
    )
    assert.strictEqual(wrapper.find('i').hasClass('fa-users'), true)
  })
})
