import React from 'react'
import PropTypes from 'prop-types'

const translate = (BaseComponent) => {
  const LocalizedComponent = (props, context) => (
    <BaseComponent
      translate={context.translate}
      locales={context.locales}
      moment={context.moment}
      {...props}
    />
  )

  LocalizedComponent.contextTypes = {
    translate: PropTypes.func.isRequired,
    locales: PropTypes.array.isRequired,
    moment: PropTypes.func.isRequired
  }

  return LocalizedComponent
}

export default translate
