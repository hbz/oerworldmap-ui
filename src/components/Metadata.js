import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'

import Icon from './Icon'
import Link from './Link'

const Metadata = ({type, about, dateModified, moment, translate, user}) => (
  <div className="Metadata">
    <Icon type={type} />
    {translate(type)}{' '}
    {dateModified && (
      user ? (
        <Link href={`/log/${about["@id"]}`}>
          {translate(
            'ResourceIndex.read.lastModified',
            {dateModified : moment(dateModified).format('YYYY-MM-DD')}
          )}
        </Link>
      ) : (
        <span>
          {translate(
            'ResourceIndex.read.lastModified',
            {dateModified : moment(dateModified).format('YYYY-MM-DD')}
          )}
        </span>
      )
    )}
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  dateModified: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.any)
}

Metadata.defaultProps = {
  dateModified: null,
  user: null
}

export default withI18n(Metadata)
