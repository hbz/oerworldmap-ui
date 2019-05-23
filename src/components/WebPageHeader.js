import React from 'react'
import PropTypes from 'prop-types'

import Link from './Link'
import ShareExport from './ShareExport'
import Metadata from './Metadata'

import expose from '../expose'

import '../styles/components/WebPageHeader.pcss'

const WebPageHeader = ({
  user, about, dateModified, view, _self, _links, embedValue
}) => {
  return (
    <div className="WebPageHeader">
      <Metadata
        type={about['@type']}
        about={about}
        dateModified={dateModified}
        user={user}
      />
      <div className="webPageActions print-display-none">
        <div>

          {about['@id'] && [
            view !== 'edit' && (
              <div className="action" key="share">
                <ShareExport _self={_self} _links={_links} view={view} embedValue={embedValue} />
              </div>
            ),
            expose('editEntry', user, about) && (
              <div className="action" key="view">
                {view === 'edit' ? (
                  <Link href="#view" className="closePage">
                    &times;
                  </Link>
                ) : (
                  <Link href="#edit"><i aria-hidden="true" className="fa fa-pencil" /></Link>
                )}
              </div>
            )]}

          {(view !== 'edit' || !about['@id']) &&(
            <div className="action">
              <Link href={Link.back && Link.back.includes("/feed/") ? Link.back : Link.home} className="closePage">
                &times;
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

WebPageHeader.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  dateModified: PropTypes.string,
  view: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  _self: PropTypes.string.isRequired,
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  embedValue: PropTypes.string
}

WebPageHeader.defaultProps = {
  user: null,
  dateModified: null,
  embedValue: null
}

export default WebPageHeader
