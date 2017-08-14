import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'

const WebPage = ({
  translate,
  moment,
  about,
  contributor,
  dateModified,
  author,
  dateCreated
}) => (
  <div>
    <h1>{translate(about.name)}</h1>
    <p>
      {translate('WebPage.lastEdited', {
        contributor,
        dateModified: moment(dateModified).calendar()
      })}
    </p>
    <p>
      {translate('WebPage.created', {
        author,
        dateCreated: moment(dateCreated).calendar()
      })}
    </p>
    <pre>{JSON.stringify(about, null, 2)}</pre>
  </div>
)

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default translate(WebPage)
