import Polyglot from 'node-polyglot'
import moment from 'moment'

const getEntryByLocales = (locales, key) => {
  let localesString = false
  // eslint-disable-next-line no-restricted-syntax
  for (const i in locales) {
    localesString = key.find(value => value['@language'] === locales[i])
    if (localesString) {
      return localesString['@value']
    }
  }
  return key[0]['@value']
}

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
