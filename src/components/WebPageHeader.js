/* global window */
import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import DropdownButton from './DropdownButton'
import Metadata from './Metadata'
import withEmitter from './withEmitter'


const WebPageHeader = ({user, about, author, contributor, dateModified, dateCreated, view, emitter}) => {
  const closeResource = () => {
    emitter.emit('navigate', '__back__')
  }

  return (
    <div className="WebPageHeader">
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
        {about['@id'] &&
          <div>
            <DropdownButton />
            {user && (view === 'edit' ? (
              <Link href="#view"><i className="fa fa-eye" /></Link>
            ) : (
              <Link href="#edit"><i className="fa fa-pencil" /></Link>
            ))}
            <Link href={`/log/${about["@id"]}`}><i className="fa fa-list-alt" /></Link>
          </div>
        }
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
}

WebPageHeader.defaultProps = {
  user: null,
  contributor: null,
  dateCreated: null,
  dateModified: null,
  author: null
}

export default withEmitter(WebPageHeader)
