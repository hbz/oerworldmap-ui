import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Icon from './Icon'

const Resource = ({ resource, translate }) => (
  <div className="Resource">
    <div className="topline">
      <Icon type={resource.about['@type']} />
      <strong>{resource.about['@type']} </strong> ({resource.dateModified})
    </div>

    <h1>{translate(resource.about.name)}</h1>

    <p>{translate(resource.about.description)}</p>

    <a href={resource.about.url} className="boxedLink">
      <i className="fa fa-external-link" /> {resource.about.url}
    </a>

    <div className="ResourceDetails">
      <table>
        <tbody>
          <tr>
            <td>Email</td>
            <td>nele.hirsch@ebildungslabor.de</td>
          </tr>
          <tr>
            <td>Profiles elsewhere</td>
            <td><i className="fa fa-twitter-square" /></td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Goethehain 4 6772 Gräfenhainichen Germany</td>
          </tr>
          <tr>
            <td>Provides</td>
            <td><i className="fa fa-desktop" /> Leselerntexte.de</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

Resource.propTypes = {
  resource: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
}

export default withI18n(Resource)
