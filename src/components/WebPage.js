import React from 'react'
import PropTypes from 'prop-types'

import WebPageView from './WebPageView'
import WebPageEdit from './WebPageEdit'
import WebPageHeader from './WebPageHeader'
import WebPageCover from './WebPageCover'

import '../styles/components/WebPage.pcss'
import '../styles/components/FormStyle.pcss'

const WebPage = ({
  user,
  about,
  contributor,
  dateModified,
  dateCreated,
  view,
  geo,
  _links,
  _self,
  mapboxConfig
}) => {

  return (
    <div className="WebPage">
      <div className="webPageContainer">

        <WebPageHeader
          user={user}
          about={about}
          contributor={contributor}
          dateModified={dateModified}
          dateCreated={dateCreated}
          view={view}
          _self={_self}
          _links={_links}
        />

        {(about.image || geo) &&
          <WebPageCover about={about} geo={geo} mapboxConfig={mapboxConfig} />
        }

        <div className="webPageContent">

          <div id="edit" className={view === 'edit' ? 'visible' : ''}>
            <WebPageEdit about={about} />
          </div>

          <div id="view" className={(view !== 'edit' || view === '') ? 'visible' : ''}>

            <WebPageView id="view" about={about} user={user} view={view} />

          </div>
        </div>
      </div>

    </div>
  )
}

WebPage.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
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
  contributor: null,
  dateCreated: null,
  dateModified: null,
  _links: { refs: [] }
}

export default WebPage
