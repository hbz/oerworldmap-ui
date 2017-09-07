import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Metadata from './Metadata'
  
const WebPage = ({
  translate,
  about,
  contributor,
  dateModified,
  author,
  dateCreated
}) => (
  <div className="WebPage">
    <Metadata
      type={about['@type']}
      author={author}
      contributor={contributor}
      dateModified={dateModified}
      dateCreated={dateCreated}
    />
    <h1>{translate(about.name)}</h1>

    {about.description[0]['@value'] &&
      <p>{about.description[0]['@value']}</p>
    }

    {about.url &&
      <a href={about.url} className="boxedLink">
        <i className="fa fa-external-link" /> {about.url}
      </a>
    }

    <pre>{JSON.stringify(about, null, 2)}</pre>
  </div>
)

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default translate(WebPage)
