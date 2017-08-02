import React from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'
import moment from 'moment'

class I18nProvider extends React.Component {
  getChildContext() {
    const locales = this.props.locales

    this.polyglot = new Polyglot({
      locale: locales[0],
      phrases: require(`../locale/${locales[0]}.json`),
    })

    moment.locale(locales[0])

    const translate = this.t.bind(this)
    return { locales, translate, moment }
  }

  t(key, interpolationOptions) {
    if (typeof key === 'string') {
      return this.polyglot.t(key, interpolationOptions)
    } else if (Array.isArray(key)) {
      let localesString = false
      for (let i = 0; i < this.props.locales.length; i += 1) {
        localesString = key.find(value =>
          value['@language'] === this.props.locales[i]
        )
        if (localesString) {
          return localesString['@value']
        }
      }
      return key[0]['@value']
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

I18nProvider.childContextTypes = {
  locales: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
}

I18nProvider.propTypes = {
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
}

export default I18nProvider
