import { existsSync, readFileSync } from 'fs'
import { i18nConfig } from '../config'

const supportedLanguages = i18nConfig.supportedLanguages.trim().split(/\s+/)
// const defaultLanguage = i18nConfig.defaultLanguage
const bundles = ['ui', 'iso3166-1-alpha-2', 'iso639-1', 'iso3166-2', 'labels', 'descriptions']
const i18ns = {}
supportedLanguages.map(language => {
  const i18n = {}
  bundles.forEach(bundle => {
    const i18nfile = existsSync(`./docs/_data/locale/${bundle}_${language}.json`)
      ? `./docs/_data/locale/${bundle}_${language}.json`
      : `./docs/_data/locale/${bundle}.json`
    const obj = JSON.parse(readFileSync(i18nfile, 'utf8'))
    //FIXME: special case descriptions, refactor so that all l10ns are segmented by bundle name
    if (bundle === 'descriptions') {
      i18n['descriptions'] = obj
    } else {
      Object.assign(i18n, obj)
    }
  })
  i18ns[language] = i18n
})

export default i18ns

