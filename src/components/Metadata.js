import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'

import Icon from './Icon'
import '../styles/Metadata.pcss'

const Metadata = ({type, dateModified, moment, translate} ) => (
  <div className="Metadata">
    <div title={moment(dateModified).fromNow()} >
      <Icon type={type} /> <b>{translate(type)} </b>
      ({translate('Metadata.lastModified', {
        dateModified : moment(dateModified).format('D. MMM YYYY')
      })})
    </div>
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default translate(Metadata)
