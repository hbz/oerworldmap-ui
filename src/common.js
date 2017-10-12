export const formatURL = (url) =>  {
  const re = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/
  return re.exec(url)[1] || url
}

export const translateArray = (locales, key) => {
  if (Array.isArray(key)) {
    let localesString = false
    for (const i in locales) {
      localesString = key.find(value => 
        value['@language'] === locales[i]
      )
      if (localesString) {
        return localesString['@value']
      }
    }
    return key[0]['@value']
  }
}

export const getTitle = (data, locales='en') => (
  data.about && (data.about.name || data.about['@id'])
    ? translateArray(locales, data.about.name) || data.about['@id']
    : data.totalItems + " Entries"
)

export default {  
  getTitle, formatURL
}
