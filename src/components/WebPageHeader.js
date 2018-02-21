import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import ShareExport from './ShareExport'
import Metadata from './Metadata'

const WebPageHeader = ({user, about, author, contributor, dateModified, dateCreated, view, _self, _links}) => {
  return (
    <div className="WebPageHeader">
      <Metadata
        type={about['@type']}
        about={about}
        author={author}
        contributor={contributor}
        dateModified={dateModified}
        dateCreated={dateCreated}
        user={user}
      />
      <div className="webPageActions print-display-none">
        <div>

          {about['@id'] && [
            <div className="action" key="share">
              <ShareExport _self={_self} _links={_links} view={view} />
            </div>,
            user &&
              <div className="action" key="view">
                {view === 'edit' ? (
                  <Link href="#view"><i className="fa fa-eye" /></Link>
                ) : (
                  <Link href="#edit"><i className="fa fa-pencil" /></Link>
                )}
              </div>

          ]}

          <div className="action">
            <Link href={Link.home} className="closeModal">
              <i className="fa fa-close" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

WebPageHeader.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
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

export default WebPageHeader
