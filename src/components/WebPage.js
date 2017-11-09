import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Composer } from 'json-pointer-form'
import 'hypothesis'

import translate from './translate'
import Metadata from './Metadata'
import { formatURL } from '../common'
import Link from './Link'
import withEmitter from './withEmitter'

import '../styles/WebPage.pcss'

import schema from '../json/schema.json'


const WebPage = ({
  translate,
  moment,
  about,
  contributor,
  dateModified,
  author,
  dateCreated,
  emitter
}) => (
  <div className="WebPage">
    <div className="webPageContainer">
      <div className="webPageHeader">
        <b>
          <Metadata
            type={about['@type']}
            author={author}
            contributor={contributor}
            dateModified={dateModified}
            dateCreated={dateCreated}
          />
        </b>

        <div className="webPageActions">
          <Link to="#edit" dataShow="view" className="show"><i className="fa fa-pencil" /></Link>
          <Link to="#view" dataShow="edit"><i className="fa fa-eye" /></Link>
          <Link to="#view"><i className="fa fa-gear" /></Link>
          <Link to="/resource/"><i className="fa fa-close" /></Link>
        </div>

      </div>

      {(about.image || about.location) &&
        <div
          className="webPageCover"
          style={{
            backgroundImage:
              about.location && about.location.geo ?
                `url("https://api.mapbox.com/styles/v1/mapbox/basic-v9/static/pin-s-circle+000000(${about.location.geo.lon},${about.location.geo.lat})/${about.location.geo.lon-1},${about.location.geo.lat},7/800x225@2x?access_token=pk.eyJ1IjoiZG9ibGFkb3YiLCJhIjoiZjNhUDEzayJ9.1W8QaiWprorgwehETGK8bw")`
                : ''
          }}
        >
          {about.image &&
          <img
            src={about.image}
            onError={e => {
              e.target.remove()}}
            alt={translate(about.name)}
          />
          }
        </div>
      }

      <div className="webPageContent">

        <div id="edit" className="page">
          <Composer
            value={about}
            schema={schema}
            submit={value => emitter.emit('save', value)}
            getOptions={(term, types, callback) => emitter.emit('getOptions', {term, types, callback})}
            getLabel={value => value && value["name"] ? translate(value["name"]) : value["@id"]}
          />
        </div>

        <div className="page">
          <h1>{translate(about.name)}</h1>

          <b className="date">{moment(dateCreated).format('D.MMM YYYY')} by {author}</b>

          {about['@type'] === 'Action' &&
            (about.agent &&
            about.agent.map(agent => (
              <div className="operator">
                Operator: <Link key={agent['@id']} to={agent['@id']}>{translate(agent.name)}</Link>
              </div>
            )))
          }

          {about.provider &&
            about.provider.map(provider => (
              <div key={provider['@id']} className="provider">
                Provider: <Link
                  to={provider['@id']}
                >
                  {formatURL(translate(provider.name))}
                </Link>
              </div>
            ))
          }

          {about.description &&
            <ReactMarkdown source={translate(about.description)} />
          }

          {about.articleBody &&
            <ReactMarkdown source={translate(about.articleBody)} />
          }

          {about.url &&
            <a href={about.url} target="_blank" className="boxedLink">
              {formatURL(about.url)}
            </a>
          }

          {about.availableChannel &&
            <a href={about.availableChannel[0].serviceUrl} className="boxedLink">
              {formatURL(about.availableChannel[0].serviceUrl)}
            </a>
          }

          {about.license &&
            about.license.map(license => (
              <img key={license['@id']} className="licenseImage" src={license.image} alt={translate(license.name)} />
            ))
          }

          {/* Example of data, GENERATE THIS */}
          <table>
            <tbody>
              <tr>
                <td>Location</td>
                <td>
                  Whitehurst Freeway<br />
                  Washington <br />
                  United States
                </td>
              </tr>
              <tr>
                <td>Tags</td>
                <td>
                  OER
                </td>
              </tr>
              <tr>
                <td>Creator</td>
                <td>
                  Katy Jordan
                </td>
              </tr>
              <tr>
                <td>Entries mentioned</td>
                <td>
                  The Saylor Academy <br />
                  OER Hub
                </td>
              </tr>
            </tbody>
          </table>

          <pre>{JSON.stringify(about, null, 2)}</pre>
        </div>
      </div>
    </div>
  </div>
)

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  moment: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired
}

export default withEmitter(translate(WebPage))
