import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'

import Icon from './Icon'
import Link from './Link'

const Metadata = ({type, about, dateModified, moment, translate} ) => (
  <div className="Metadata">
    <Icon type={type} />
    {translate(type)}{' '}
    <Link href={`/log/${about["@id"]}`}>
      {dateModified && translate(
        'ResourceIndex.read.lastModified',
        {dateModified : moment(dateModified).format('YYYY-MM-DD')}
      )}
    </Link>
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  dateModified: PropTypes.string,
}

Metadata.defaultProps = {
  dateModified: null
}

export default withI18n(Metadata)
