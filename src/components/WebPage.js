import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Composer } from 'json-pointer-form'

import translate from './translate'
import Metadata from './Metadata'
import { formatURL } from '../common'
import Link from './Link'
import Icon from './Icon'
import ResourceTable from './ResourceTable'
import withEmitter from './withEmitter'
import lighthouse from '../assets/lighthouse.svg'
import FullModal from './FullModal'

import '../styles/WebPage.pcss'
import '../styles/FormStyle.pcss'

import schema from '../json/schema.json'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
      </span>
    )
  } else {
    return translate(`properties.${value}`)
  }
}

const WebPage = ({
  translate,
  moment,
  user,
  about,
  contributor,
  dateModified,
  author,
  dateCreated,
  emitter,
  view,
  geo
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

          {user &&
            <div className="like">
              <i className="fa fa-thumbs-up" /> <span>(0)</span>
            </div>
          }

          {view === 'edit' ? (
            <Link href="#view"><i className="fa fa-eye" /></Link>
          ) : (
            <Link href="#edit"><i className="fa fa-pencil" /></Link>
          )}
          <Link href="/resource/"><i className="fa fa-close" /></Link>
        </div>

      </div>

      {(about.image || geo) &&
      <div
        className="webPageCover"
        style={{
          backgroundImage:
          geo && geo.geometry && geo.geometry.coordinates
            ? `url("https://api.mapbox.com/styles/v1/mapbox/basic-v9/static/geojson(${encodeURIComponent(
              JSON.stringify(geo))})/${(Array.isArray(geo.geometry.coordinates[0])
              ? `${geo.geometry.coordinates[0][0]-1},${geo.geometry.coordinates[0][1]}`
              : `${geo.geometry.coordinates[0]-1},${geo.geometry.coordinates[1]}`)
            },7/800x225@2x?access_token=pk.eyJ1IjoiZG9ibGFkb3YiLCJhIjoiZjNhUDEzayJ9.1W8QaiWprorgwehETGK8bw")`
            : ''
        }}
      >
        {about.image &&
          <img
            src={about.image}
            alt={translate(about.name)}
            onError={e => {
              if (Object.keys(geo.geometry).length <= 0) {
                e.target.parentElement.remove()
              }
              e.target.remove()
            }}
            aria-label={translate(about.name)}
          />
        }
      </div>
      }

      <div className="webPageContent">

        <div id="edit" className={view === 'edit' ? 'visible' : ''}>
          <Composer
            value={about}
            schema={schema}
            submit={data => emitter.emit('submit', {url: '/resource/', data})}
            getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
            getLabel={value => getLabel(translate, value)}
            submitLabel={translate('properties.submitLabel')}
          />
        </div>

        <div id="view" className={(view === 'view' || view === '') ? 'visible' : ''}>
          <h1>{translate(about.name)}</h1>

          <div className="lighthouse">
            <div className="lighthouseCounter">
            0
            </div>
            <img
              src={lighthouse}
              alt="Lighthouse"
            />
          </div>

          {about['@type'] === 'Action' &&
            (about.agent &&
            about.agent.map(agent => (
              <div className="operator">
                Operator: <Link key={agent['@id']} href={agent['@id']}>{translate(agent.name)}</Link>
              </div>
            )))
          }

          {about.provider &&
            about.provider.map(provider => (
              <div key={provider['@id']} className="provider">
                Provider:&nbsp;
                <Link href={provider['@id']}>
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

          <ResourceTable value={about} schema={schema} />

          {user &&
            <FullModal>
              <h2>Lighthouse Action</h2>
              {/* <Composer
                value={{'@type': 'Organization'}}
                schema={schema}
                submit={data => emitter.emit('submit', {url: '/resource/', data})}
                getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
                getLabel={value => getLabel(translate, value)}
                submitLabel={translate('properties.submitLabel')}
              /> */}
            </FullModal>
          }

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
  dateModified: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  geo: PropTypes.objectOf(PropTypes.any)
}

WebPage.defaultProps = {
  geo: null,
}

export default withEmitter(translate(WebPage))
