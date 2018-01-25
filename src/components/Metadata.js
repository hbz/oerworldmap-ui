import React from 'react'
import PropTypes from 'prop-types'
import withi18n from './withi18n'

import Icon from './Icon'
import '../styles/components/Metadata.pcss'

const Metadata = ({type, dateModified, moment, translate} ) => (
  <div className="Metadata">
    <div title={moment(dateModified).fromNow()} >
      <Icon type={type} />
      {translate(type)}&nbsp;{translate('Metadata.lastModified', {
        dateModified : moment(dateModified).format('YYYY-MM-DD')
      })}
    </div>
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default withi18n(Metadata)
