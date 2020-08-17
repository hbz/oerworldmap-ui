import { i18nConfig } from '../config'

const supportedLanguages = i18nConfig.supportedLanguages.trim().split(/\s+/)
const { defaultLanguage } = i18nConfig
const bundles = ['ui', 'iso3166-1-alpha-2', 'iso639-1', 'iso3166-2', 'labels', 'descriptions']
const vocabs = [
  'esc', 'isced-1997', 'licenses', 'organizations', 'persons', 'projects', 'publications',
  'sectors', 'services', 'activities', 'policies',
]
const extractLabels = (concepts, language) => concepts.reduce((acc, cur) => {
  const name = cur.name.find(name => name['@language'] === language)
  name && (acc[cur['@id']] = name['@value'])
  cur.narrower && Object.assign(acc, extractLabels(cur.narrower, language))
  return acc
}, {})
const i18ns = {}

supportedLanguages.forEach((language) => {
  i18ns[language] = {
    descriptions: {},
  }
  bundles.forEach((bundle) => {
    const obj = {}
    try {
      Object.assign(obj, require(`../docs/_data/locale/${bundle}.json`))
    } catch (e) {
      console.error(`Missing i18n file ${bundle}.json`)
      return
    }
    // FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
    if (bundle === 'descriptions') {
      Object.assign(i18ns[language].descriptions, obj)
    } else {
      Object.assign(i18ns[language], obj)
    }
  })
  vocabs.forEach(vocab => Object.assign(i18ns[language], extractLabels(
    require(`./json/${vocab}.json`).hasTopConcept, language,
  )))
})

supportedLanguages.filter(language => language !== defaultLanguage).forEach((language) => {
  const i18n = JSON.parse(JSON.stringify(i18ns[defaultLanguage]))
  bundles.forEach((bundle) => {
    const obj = {}
    try {
      Object.assign(obj, require(`../docs/_data/locale/${bundle}_${language}.json`))
    } catch (e) {
      console.error(`Missing i18n file ${bundle}.json`)
      return
    }
    // FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
    if (bundle === 'descriptions') {
      Object.assign(i18n.descriptions, obj)
    } else {
      Object.assign(i18n, obj)
    }
  })
  vocabs.forEach(vocab => Object.assign(i18n, extractLabels(require(`./json/${vocab}.json`).hasTopConcept, language)))
  i18ns[language] = i18n
})

export default i18ns
