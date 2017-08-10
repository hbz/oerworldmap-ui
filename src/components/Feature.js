import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'

const Feature = ({
  translate,
  moment,
  properties,
}) => (
  <div>
    <h1>{translate(properties.about.name)}</h1>
    <p>
      {translate('Feature.lastEdited', {
        contributor: properties.contributor,
        dateModified: moment(properties.dateModified).calendar()
      })}
    </p>
    <p>
      {translate('Feature.created', {
        author: properties.author,
        dateCreated: moment(properties.dateCreated).calendar()
      })}
    </p>
    <pre>{JSON.stringify(properties.about, null, 2)}</pre>
  </div>
)

Feature.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired
}

export default translate(Feature)
