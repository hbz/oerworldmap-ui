import { describe, it } from 'mocha'
import { render } from 'enzyme'
import React from 'react'
import assert from 'assert'

import I18nProvider from '../src/components/I18nProvider'
import withI18n from '../src/components/withI18n'
import i18n from '../src/i18n'

describe('<I18nProvider />', () => {
  it('localizes correctly', () => {
    const expected = {
      de: 'bar',
      es: 'bar',
      en: 'bar'
    }

    for (const language in expected) {
      const wrapper = render(
        <I18nProvider i18n={i18n([language], {'foo': 'bar'})}>
          {React.createElement(
            withI18n(({translate}) => <span>{translate('foo')}</span>)
          )}
        </I18nProvider>
      )
      assert.equal(wrapper.text(), 'bar')
    }
  })
})
