/* global window */
/* global fetch */

export const formatURL = (url) => {
  const re = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www\.)?([^:/\n]+)/
  const result = re.exec(url)
  return result[1].split('.').pop() === result.input.split('.').pop().replace(/\//g, '')
    ? re.exec(url)[1]
    : `${re.exec(url)[1]}...`
}

export const getEntryByLocales = (locales, key) => {
  if (Array.isArray(key)) {
    let localesString = false
    locales.forEach((locale) => {
      localesString = key.find(value => value['@language'] === locales[locale])
      if (localesString) {
        return localesString['@value']
      }
    })
    return key[0]['@value']
  }
}

export const getTitle = (data, locales = ['en']) => (
  data.about && (data.about.name || data.about['@id'])
    ? getEntryByLocales(locales, data.about.name) || data.about['@id']
    : `${data.totalItems} Entries`
)

export const getParams = (qstring) => {
  const params = {}
  if (qstring) {
    const q = qstring.replace('?', '').split('&')
    for (let i = 0; i < q.length; i += 1) {
      const [param, val] = q[i].split('=', 2).map(
        s => decodeURIComponent(s).replace(/\+/g, ' '),
      )
      if (!val) {
        params[param] = ''
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

export const addParamToURL = (search, key, val) => {
  const newParam = `${key}=${val}`
  let params = `?${newParam}`

  // If the "search" string exists, then build params from it
  if (search) {
    // Try to replace an existance instance
    params = search.replace(new RegExp(`([?&])${key}[^&]*`), `$1${newParam}`)

    // If nothing was replaced, then add the new param to the end
    if (params === search) {
      params += `&${newParam}`
    }
  }
  return params
}

export const getURL = (route) => {
  let url = route.path
  let params = []
  // eslint-disable-next-line no-restricted-syntax
  for (const param in route.params) {
    const value = route.params[param]
    if (Array.isArray(value)) {
      value && (params = params.concat(value.map(value => `${param}=${encodeURIComponent(value)}`)))
    } else {
      value && params.push(`${param}=${encodeURIComponent(value)}`)
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

export const triggerClick = (e, code) => {
  if (e.keyCode === (code || 32)) {
    e.target.click()
  }
}

export const mapNominatimResult = result => ({
  '@id': `info:${result.place_id}`,
  '@type': 'Place',
  name: {
    en: result.display_name,
  },
  geo: {
    lat: +result.lat,
    lon: +result.lon,
  },
  address: {
    streetAddress: `${result.address.road || ''} ${result.address.house_number || ''}`.trim(),
    postalCode: result.address.postcode,
    addressLocality: result.address.city || result.address.state,
    addressCountry: (result.address.country_code || '').toUpperCase(),
  },
})

export const debounce = (func, wait, immediate) => {
  let timeout
  return function executedFunction(...args) {
    console.log('debounce')
    const context = this
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const getProp = (p, o) => p.reduce((xs, x) => ((xs && xs[x]) ? xs[x] : null), o)

export const clearForm = (form, exclude = []) => {
  // clearing inputs
  const inputs = [...form.getElementsByTagName('input')]
    .filter(input => !exclude.includes(input.name))
  for (let i = 0; i < inputs.length; i += 1) {
    switch (inputs[i].type) {
    case 'radio':
    case 'checkbox':
      inputs[i].checked = false
      break
    default:
      inputs[i].value = ''
      break
    }
  }

  // clearing selects
  const selects = [...form.getElementsByTagName('select')]
    .filter(select => !exclude.includes(select.name))
  for (let i = 0; i < selects.length; i += 1) {
    selects[i].selectedIndex = 0
  }

  // clearing textarea
  const textareas = [...form.getElementsByTagName('textarea')]
    .filter(textarea => !exclude.includes(textarea.name))
  for (let i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = ''
  }
}

export const appendOnFocus = (e) => {
  const tmp = e.target.value
  e.target.value = ''
  e.target.value = tmp
}

export const formatDate = (date, moment) => {
  let currentDate = date.replace('T00:00:00', '')

  if (moment(currentDate, 'YYYYMM', true).isValid()
    || moment(currentDate, 'YYYY-MM', true).isValid()) {
    currentDate = moment(currentDate).format('MM YYYY')
  } else if (moment(currentDate, 'YYYY-MM-D', true).isValid()
    || moment(currentDate, 'YYYYMMD', true).isValid()) {
    currentDate = moment(currentDate).format('LL')
  } else if (!moment(currentDate, 'YYYY', true).isValid()) {
    currentDate = moment(currentDate).format('LLL')
  }

  return currentDate
}

export const getTwitterId = (sameAs) => {
  const twitterURL = sameAs && sameAs.find(url => url.includes('twitter.com'))
  return /twitter.com\/([a-zA-Z0-9_]{1,15})/.exec(twitterURL)
}

export const objectMap = (obj, fn) => (
  Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key])
    return result
  }, {})
)

export const sortByProp = prop => (a, b) => ((a[prop] < b[prop])
  ? 1 : ((b[prop] < a[prop]) ? -1 : 0))

export const updateUser = async () => {
  try {
    window.__APP_USER__ = await fetch('/user/profile', {
      headers: {
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    }).then(res => res.json())
  } catch (e) {
    // no op - user not logged in, but mod_auth_openidc redirects to login page
  }
  setTimeout(updateUser, 1000 * 60 * 3)
}

export const types = ['Organization', 'Service', 'Person', 'Action', 'Event', 'Article', 'Product', 'WebPage', 'Policy']

export const isNode = (typeof module === 'object' && module.exports)

export const urlParser = (str) => {
  try {
    if (isNode) {
      const { URL } = require('url')
      return new URL(str)
    }
    return new URL(str)
  } catch (error) {
    // In case of sending a relative url we just return the string
    return str
  }
}

export default {
  getTitle,
  formatURL,
  getParams,
  getURL,
  getEntryByLocales,
  triggerClick,
  debounce,
  getProp,
  appendOnFocus,
  formatDate,
  getTwitterId,
  objectMap,
  sortByProp,
  addParamToURL,
  updateUser,
  types,
  isNode,
  urlParser,
}
