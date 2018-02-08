export const formatURL = (url) =>  {
  const re = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/
  return re.exec(url)[1] || url
}

export const getEntryByLocales = (locales, key) => {
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

export const getTitle = (data, locales=['en']) => (
  data.about && (data.about.name || data.about['@id'])
    ? getEntryByLocales(locales, data.about.name) || data.about['@id']
    : data.totalItems + " Entries"
)

export const getParams = (qstring) => {
  const params = {}
  if (qstring) {
    const q = qstring.replace('?', '').split('&')
    for (let i = 0; i < q.length; ++i) {
      const [param, val] = q[i].split('=', 2).map(
        s => decodeURIComponent(s).replace(/\+/g, " ")
      )
      if (!val) {
        params[param] = ""
      } else if (params[param] instanceof Array) {
        params[param].push(val)
      } else if (params[param]) {
        params[param] = [params[param], val]
      } else {
        params[param] = val
      }
    }
  }
  return params
}

export const getURL = (route) => {
  let url = route.path
  let params = []
  for (const param in route.params) {
    const value = encodeURIComponent(route.params[param])
    if (Array.isArray(value)) {
      value && (params = params.concat(value.map(value => `${param}=${value}`)))
    } else {
      value && params.push(`${param}=${value}`)
    }
  }
  if (params) {
    url += `?${params.join('&')}`
  }
  if (route.hash) {
    url += `#${route.hash}`
  }
  return url
}

export const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

export const mapNominatimResult = (result) => {
  return {
    about: {
      '@id': `info:${result.place_id}`,
      '@type': 'Place',
      name: [
        {
          '@language': 'en',
          '@value': result.display_name
        }
      ],
      geo: {
        lat: result.lat,
        lon: result.lon
      },
      address: {
        streetAddress: result.address.road ? (result.address.road + (
          result.address.house_number ? ` ${result.address.house_number}` : ''
        )) : '',
        postalCode: result.address.postcode,
        addressLocality: result.address.city || result.address.state,
        addressCountry: (result.address.country_code || '').toUpperCase()
      }
    }
  }
}

export const debounce = (func, wait, immediate) => {
  let timeout
  return function executedFunction() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}


const unicodeEscapes = /\\u([\d\w]{4})/gi
export const parseProperties = (properties) => properties.split(/\r?\n/)
  .map(s => s.trim()).filter(s => !!s).reduce((acc, cur) => {
    const [key, value] = cur.split(/=(.+)/).map(s => s.trim())
    if (key && value) {
      acc[key] = value.replace(unicodeEscapes, (match, grp) => String.fromCharCode(parseInt(grp, 16)))
    }
    return acc
  }, {})

export default {
  getTitle, formatURL, getParams, getURL, getEntryByLocales, triggerClick, mapNominatimResult,
  debounce, parseProperties
}
