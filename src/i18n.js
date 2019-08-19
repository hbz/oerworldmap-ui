import Polyglot from 'node-polyglot'
import moment from 'moment'

import { getEntryByLocales } from './common'

export default (locales, phrases) => {
  const polyglot = new Polyglot({
    locale: locales[0],
    phrases,
    warn: () => {},
  })

  const translate = (key, interpolationOptions) => {
    let result = key
    if (typeof key === 'string') {
      result = polyglot.t(key, interpolationOptions)
    } else if (key instanceof Array) {
      result = getEntryByLocales(locales, key)
    } else if (key instanceof Object) {
      result = key[locales[0]] || key[Object.keys(key).pop()]
    }
    return result
  }

  moment.locale(locales[0])

  return { translate, locales, moment }
}
