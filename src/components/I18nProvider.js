import React from 'react'
import PropTypes from 'prop-types'

class I18nProvider extends React.Component {
  getChildContext() {
    const { i18n } = this.props
    return {
      locales: i18n.locales,
      translate: i18n.translate,
      moment: i18n.moment,
    }
  }

  render() {
    const { children } = this.props
    return React.Children.only(children)
  }
}

I18nProvider.childContextTypes = {
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  i18n: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default I18nProvider
