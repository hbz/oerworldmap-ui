import Polyglot from 'node-polyglot'
import moment from 'moment'

import { getEntryByLocales } from './common'

export default (locales, phrases) => {

  const polyglot = new Polyglot({
    locale: locales[0],
    phrases,
    warn: () => {}
  })

  const translate = (key, interpolationOptions) => {
    if (typeof key === 'string') {
      return polyglot.t(key, interpolationOptions)
    } else if (Array.isArray(key)) {
      return getEntryByLocales(locales, key)
    }
  }

  moment.locale(locales[0])

  return {translate, locales, moment}

}
