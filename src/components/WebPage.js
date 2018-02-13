/* global window */
import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import withI18n from './withI18n'
import Metadata from './Metadata'
import Link from './Link'
import Icon from './Icon'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import Export from './Export'
import Share from './Share'
import DropdownButton from './DropdownButton'
import Comments from './Comments'
import WebpageView from './WebpageView'
import MiniMap from './MiniMap'

import '../styles/components/WebPage.pcss'
import '../styles/components/FormStyle.pcss'

import schema from '../json/schema.json'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@type"] || value["@id"]}
      </span>
    )
  } else {
    return translate(value)
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
  _self,
  mapboxConfig
}) => {

  const lighthouses = (about.objectIn || []).filter(action =>
    action['@type'] === 'LighthouseAction'
  ) || []
  const lighthouse = lighthouses.find(action =>
    action.agent.some(agent => user && agent['@id'] === user.id)
  ) || ( user ? {
      '@type': 'LighthouseAction',
      'object': about,
      'agent': [{ '@id': user.id, '@type': 'Person' }],
      'description': [{'@language': 'en'}]
    } : null )

  const likes = (about.objectIn || []).filter(action =>
    action['@type'] === 'LikeAction'
  ) || []
  const like = likes.find(action =>
    action.agent.some(agent => user && agent['@id'] === user.id)
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
    emitter.emit('navigate', '__back__')
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

          {about['@id'] ? (
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

              {user && (view === 'edit' ? (
                <Link href="#view"><i className="fa fa-eye" /></Link>
              ) : (
                <Link href="#edit"><i className="fa fa-pencil" /></Link>
              ))}
              <Link href={`/log/${about["@id"]}`}><i className="fa fa-list-alt" /></Link>
              {typeof window !== 'undefined' &&
                window.history.length ?
                (
                  <span
                    onClick={closeResource}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
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
          ) : (
            <div className="webPageActions">
              {typeof window !== 'undefined' &&
                window.history.length ?
                (
                  <span
                    onClick={closeResource}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.keyCode === 13) {
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
          )}

        </div>

        {(about.image || geo) &&
        <div
          className="webPageCover"
        >
          {geo &&
            <MiniMap
              mapboxConfig={mapboxConfig}
              features={geo && geo.geometry}
              zoom={7}
              center={(geo &&
                geo.geometry &&
                geo.geometry.coordinates) &&
                Array.isArray(geo.geometry.coordinates[0])
                ? [geo.geometry.coordinates[0][0]-1, geo.geometry.coordinates[0][1]]
                : [geo.geometry.coordinates[0]-1, geo.geometry.coordinates[1]]
              }
            />
          }

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
              submit={data => emitter.emit('submit', {url: `/resource/${about['@id'] || ''}`, data})}
              getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
              getLabel={value => getLabel(translate, value)}
              submitLabel={translate('publish')}
              submitNote={translate('ResourceIndex.index.agreeMessage')}
            />
          </div>

          <div id="view" className={(view !== 'edit' || view === '') ? 'visible' : ''}>

            <WebpageView
              id="view"
              about={about}
              lighthouses={lighthouses}
            />

            {about['@id'] &&
              <Comments
                comments={about['comment']}
                id={about['@id']}
                user={user}
              />
            }

            {about['@id'] && user && view === 'addLighthouse' &&
              <FullModal>
                <Composer
                  value={lighthouse}
                  schema={schema}
                  submit={data => emitter.emit('submit', {url: `/resource/${lighthouse['@id'] || ''}`, data} )}
                  getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
                  getLabel={value => getLabel(translate, value)}
                  submitLabel={translate('publish')}
                  className="Forms Lighthouse"
                />
              </FullModal>
            }

            {about['@id'] && view === 'share' &&
              <Share _self={_self} />
            }

            {about['@id'] && view === 'export' &&
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
  author: PropTypes.string,
  contributor: PropTypes.string,
  dateCreated: PropTypes.string,
  dateModified: PropTypes.string,
  view: PropTypes.string.isRequired,
  geo: PropTypes.objectOf(PropTypes.any),
  user: PropTypes.objectOf(PropTypes.any),
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any),
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired,
}

WebPage.defaultProps = {
  geo: null,
  user: null,
  author: null,
  contributor: null,
  dateCreated: null,
  dateModified: null,
  _links: { refs: [] }
}

export default withEmitter(withI18n(WebPage))
