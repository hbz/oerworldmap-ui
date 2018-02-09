import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'

import Icon from './Icon'
import '../styles/components/Metadata.pcss'

const Metadata = ({type, dateModified, moment, translate} ) => (
  <div className="Metadata">
    <div
      title={
        translate(type) + ' ' + (dateModified ? translate('ResourceIndex.read.lastModified', {
          dateModified : moment(dateModified).format('YYYY-MM-DD')
        }) : '')
      }
    >
      <Icon type={type} />
      {translate(type)}&nbsp;{dateModified && translate('ResourceIndex.read.lastModified', {
        dateModified : moment(dateModified).format('YYYY-MM-DD')
      })}
    </div>
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dateModified: PropTypes.string
}

Metadata.defaultProps = {
  dateModified: null
}

export default withI18n(Metadata)
