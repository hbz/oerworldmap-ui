/* global window */
import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import ShareExport from './ShareExport'
import Metadata from './Metadata'
import withEmitter from './withEmitter'


const WebPageHeader = ({user, about, author, contributor, dateModified, dateCreated, view, emitter, _self, _links}) => {
  const closeResource = () => {
    emitter.emit('navigate', '__back__')
  }

  return (
    <div className="WebPageHeader">
      <Metadata
        type={about['@type']}
        about={about}
        author={author}
        contributor={contributor}
        dateModified={dateModified}
        dateCreated={dateCreated}
      />
      <div className="webPageActions print-display-none">
        {about['@id'] &&
          <div>

            <div className="action">
              <ShareExport _self={_self} _links={_links} view={view} />
            </div>

            <div className="action">
              {user && (view === 'edit' ? (
                <Link href="#view"><i className="fa fa-eye" /></Link>
              ) : (
                <Link href="#edit"><i className="fa fa-pencil" /></Link>
              ))}
            </div>

            <div className="action">
              {typeof window !== 'undefined' &&
                window.history.length ?
                (
                  <span
                    onClick={closeResource}
                    role="button"
                    tabIndex="0"
                    className="btn-grey"
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
                    className="btn-grey"
                  >
                    <i className="fa fa-close" />
                  </Link>
                )
              }
            </div>

          </div>
        }
      </div>
    </div>
  )
}

WebPageHeader.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  contributor: PropTypes.string,
  dateCreated: PropTypes.string,
  dateModified: PropTypes.string,
  view: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  author: PropTypes.string,
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
}

WebPageHeader.defaultProps = {
  user: null,
  contributor: null,
  dateCreated: null,
  dateModified: null,
  author: null
}

export default withEmitter(WebPageHeader)
