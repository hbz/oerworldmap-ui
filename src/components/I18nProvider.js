import React from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'

class I18nProvider extends React.Component {
  getChildContext () {
    let locales = this.props.locales

    this.polyglot = new Polyglot({
      locale: locales[0],
      phrases: require('../locale/' + locales[0] + '.json')
    })

    const translate = this.t.bind(this)
    return { locales, translate }
  }

  render () {
    return React.Children.only(this.props.children)
  }

  t (key, interpolationOptions) {
    if (typeof key === 'string') {
      return this.polyglot.t(key, interpolationOptions)
    } else if (Array.isArray(key)) {
      let localesString = false
      for (let i = 0; i < this.props.locales.length; i++) {
        localesString = key.find(value => {
          return value['@language'] === this.props.locales[i]
        })
        if (localesString) {
          return localesString['@value']
        }
      }
      return key[0]['@value']
    }
  }
}

I18nProvider.childContextTypes = {
  locales: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired
}

I18nProvider.PropTypes = {
  locales: PropTypes.array.isRequired
}

export default I18nProvider
