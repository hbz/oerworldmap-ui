import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'

import Icon from './Icon'
import Link from './Link'

import { formatDate } from '../common'
import expose from '../expose'

const Metadata = ({type, about, dateModified, moment, translate, user}) => (
  <div className="Metadata">
    <Icon type={type} />
    {translate(type)}{' '}
    {dateModified && (
      expose('logEntry', user, about) ? (
        <Link
          target="_blank"
          href={`/log/${about["@id"]}`}
          title={formatDate(dateModified, moment)}
        >
          {translate(
            'ResourceIndex.read.lastModified',
            {dateModified : moment(dateModified).fromNow()}
          )}
        </Link>
      ) : (
        <span
          title={formatDate(dateModified, moment)}
        >
          {translate(
            'ResourceIndex.read.lastModified',
            {dateModified : moment(dateModified).fromNow()}
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
