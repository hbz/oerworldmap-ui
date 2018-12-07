import React from 'react'
import PropTypes from 'prop-types'

const withI18n = (BaseComponent) => {
  const LocalizedComponent = (props, context) => {
    const { translate, locales, moment } = context
    return (
      <BaseComponent
        translate={translate}
        locales={locales}
        moment={moment}
        {...props}
      />
    )
  }

  LocalizedComponent.contextTypes = {
    translate: PropTypes.func.isRequired,
    locales: PropTypes.arrayOf(PropTypes.any).isRequired,
    moment: PropTypes.func.isRequired
  }

  return LocalizedComponent
}

export default withI18n
