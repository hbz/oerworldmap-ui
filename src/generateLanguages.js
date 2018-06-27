import { i18nConfig } from '../config'

const supportedLanguages = i18nConfig.supportedLanguages.trim().split(/\s+/)
const defaultLanguage = i18nConfig.defaultLanguage
const bundles = ['ui', 'iso3166-1-alpha-2', 'iso639-1', 'iso3166-2', 'labels', 'descriptions']
const i18ns = {}
i18ns[defaultLanguage] = {
  descriptions: {}
}

bundles.forEach(bundle => {
  const obj = {}
  try {
    Object.assign(obj, require(`../docs/_data/locale/${bundle}.json`))
  } catch (e) {
    console.error("Missing i18n file ${bundle}.json")
    return
  }
  //FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
  if (bundle === 'descriptions') {
    Object.assign(i18ns[defaultLanguage]['descriptions'], obj)
  } else {
    Object.assign(i18ns[defaultLanguage], obj)
  }
})

supportedLanguages.filter(language => language !== defaultLanguage).forEach(language => {
  const i18n = JSON.parse(JSON.stringify(i18ns[defaultLanguage]))
  bundles.forEach(bundle => {
    const obj = {}
    try {
      Object.assign(obj, require(`../docs/_data/locale/${bundle}_${language}.json`))
    } catch (e) {
      console.error("Missing i18n file ${bundle}.json")
      return
    }
    //FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
    if (bundle === 'descriptions') {
      Object.assign(i18n['descriptions'], obj)
    } else {
      Object.assign(i18n, obj)
    }
  })
  i18ns[language] = i18n
})

export default i18ns
