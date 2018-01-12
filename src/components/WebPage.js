/* global window */
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
import FullModal from './FullModal'
import Export from './Export'
import Share from './Share'
import DropdownButton from './DropdownButton'
import Comments from './Comments'

import '../styles/components/WebPage.pcss'
import '../styles/components/FormStyle.pcss'

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
  user,
  about,
  contributor,
  dateModified,
  author,
  dateCreated,
  emitter,
  view,
  geo,
  _links,
  _self
}) => {

  const lighthouses = (about.objectIn || []).filter(action =>
    action['@type'] === 'LighthouseAction'
  ) || []
  const lighthouse = lighthouses.find(action =>
    action.agent.some(agent => agent['@id'] === user.id)
  ) || user ? {
      '@type': 'LighthouseAction',
      'object': about,
      'agent': [{
        '@id': user.id,
        '@type': 'Person'
      }]
    } : null

  const likes = (about.objectIn || []).filter(action =>
    action['@type'] === 'LikeAction'
  ) || []
  const like = likes.find(action =>
    action.agent.some(agent => agent['@id'] === user.id)
  )

  const toggleLike = (e) => {
    e.preventDefault()
    if (like) {
      emitter.emit('delete', {url: `/resource/${like['@id']}`})
    } else {
      emitter.emit('submit', {
        url: '/resource/',
        data: {
          '@type': 'LikeAction',
          'object': about,
          'agent': [{
            '@id': user.id,
            '@type': 'Person'
          }]
        }
      })
    }
  }

  const closeResource = () => {
    window.history.length
      ? window.history.back()
      : emitter.emit('navigate', '/resource/')
  }

  return (
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
                <form onSubmit={toggleLike}>
                  <button type="submit" title="Like">
                    <i className="fa fa-thumbs-up" /> <span>({likes.length})</span>
                  </button>
                </form>
              </div>
            }

            <DropdownButton />

            {view === 'edit' ? (
              <Link href="#view"><i className="fa fa-eye" /></Link>
            ) : (
              <Link href="#edit"><i className="fa fa-pencil" /></Link>
            )}
            <Link href={`/log/${about["@id"]}`}><i className="fa fa-list-alt" /></Link>
            {typeof window !== 'undefined' &&
              window.history.length ?
              (
                <span
                  onClick={closeResource}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) => {
                    if (e.keyCode === 27) {
                      e.target.click()
                    }
                  }}
                >
                  <i className="fa fa-close" />
                </span>
              ) : (
                <Link
                  href='/resource/'
                  className="closeModal"
                >
                  <i className="fa fa-close" />
                </Link>
              )
            }
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
              submit={data => emitter.emit('submit', {url: `/resource/${about['@id']}`, data})}
              getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
              getLabel={value => getLabel(translate, value)}
              submitLabel={translate('properties.submitLabel')}
            />
          </div>

          <div id="view" className={(view !== 'edit' || view === '') ? 'visible' : ''}>
            <h1>{translate(about.name)}</h1>

            <div className="lighthouse">
              <div className="lighthouseCounter">
                {lighthouses.length}
              </div>

              <a href="#addLighthouse">
                <img
                  src="/assets/lighthouse.svg"
                  alt="Lighthouse"
                />
              </a>
            </div>

            {about['@type'] === 'Action' &&
              (about.agent &&
              about.agent.map(agent => (
                <div key={agent['@id']} className="operator">
                  Operator: <Link href={agent['@id']}>{translate(agent.name)}</Link>
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

            <Comments comments={about['comment']} id={about['@id']} />

            { user &&
            view === 'addLighthouse' &&
              <FullModal>
                {console.log("about", about['@id'])}
                <h2>Lighthouse Action</h2>
                <Composer
                  value={lighthouse}
                  schema={schema}
                  submit={data => emitter.emit('submit', {url: `/resource/${lighthouse['@id'] || ''}`, data} )}
                  getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
                  getLabel={value => getLabel(translate, value)}
                  submitLabel={translate('properties.submitLabel')}
                />
              </FullModal>
            }

            {view === 'share' &&
              <Share _self={_self} />
            }

            {view === 'export' &&
              <Export _links={_links} />
            }

          </div>
        </div>
      </div>

    </div>
  )
}

WebPage.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  author: PropTypes.string.isRequired,
  contributor: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  dateModified: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  geo: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any)
}

WebPage.defaultProps = {
  geo: null,
  user: null,
  _links: { refs: [] }
}

export default withEmitter(translate(WebPage))
