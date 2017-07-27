import React from 'react'
import Icon from './Icon'

const Resource = ({ resource }) => (
  <div className='Resource'>
    <div className='topline'>
      <Icon type={resource.about['@type']} /> <strong>{resource.about['@type']} </strong> ({resource['dateModified']})
    </div>

    <h1>{resource.about.name[0]['@value']}</h1>

    <p>{resource.about.description[0]['@value']}</p>

    <a href={resource.about.url} className='boxedLink'>
      <i className='fa fa-external-link' /> {resource.about.url}
    </a>

    <div className='ResourceDetails'>
      <table>
        <tbody>
          <tr>
            <td>Email</td>
            <td>nele.hirsch@ebildungslabor.de</td>
          </tr>
          <tr>
            <td>Profiles elsewhere</td>
            <td><i className='fa fa-twitter-square' /></td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Goethehain 4 6772 Gräfenhainichen Germany</td>
          </tr>
          <tr>
            <td>Provides</td>
            <td><i className='fa fa-desktop' /> Leselerntexte.de</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Resource
