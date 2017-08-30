import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'

const Metadata = ({author, contributor, dateModified, dateCreated, moment, translate} ) => (
  <div>

    <p title={moment(dateModified).calendar()} className="alignRight">
      {translate('Metadata.lastEdited', {
        contributor,
        dateModified: moment(dateModified).fromNow()
      })}

    </p>
    <p title={moment(dateCreated).calendar()} className="alignRight">
      {translate('Metadata.created', {
        author,
        dateCreated: moment(dateCreated).fromNow()
      })}
    </p>
  </div>
)

Metadata.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default translate(Metadata)
