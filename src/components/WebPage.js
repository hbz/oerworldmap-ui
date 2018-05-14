import React from 'react'
import PropTypes from 'prop-types'

import WebPageView from './WebPageView'
import WebPageEdit from './WebPageEdit'
import WebPageHeader from './WebPageHeader'
import WebPageCover from './WebPageCover'

import expose from '../expose'

import '../styles/components/WebPage.pcss'
import '../styles/components/FormStyle.pcss'

const WebPage = ({
  user,
  about,
  contributor,
  dateModified,
  view,
  geo,
  _links,
  _self,
  mapboxConfig,
  schema,
  embedValue
}) => {
  return (
    <div className="webPageWrapper">
      <div className="WebPage">

        <WebPageHeader
          user={user}
          about={about}
          contributor={contributor}
          dateModified={dateModified}
          view={view}
          _self={_self}
          _links={_links}
          embedValue={embedValue}
        />

        <WebPageCover about={about} geo={geo} mapboxConfig={mapboxConfig} />

        <div className="webPageContent">

          {expose('editEntry', user, about) &&
            <div id="edit" className={view === 'edit' ? '' : 'hidden'}>
              <WebPageEdit
                about={about}
                action={about['@id'] ? 'edit' : 'add'}
                mapboxConfig={mapboxConfig}
                user={user}
                schema={schema}
                closeLink={about['@id'] ? _self : undefined}
              />
            </div>
          }

          <div id="view" className={!user || view !== 'edit' ? '' : 'hidden'}>
            <WebPageView id="view" about={about} user={user} view={view} schema={schema} />
          </div>

        </div>
      </div>
    </div>
  )
}

WebPage.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  contributor: PropTypes.string,
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
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  embedValue: PropTypes.string
}

WebPage.defaultProps = {
  geo: null,
  user: null,
  contributor: null,
  dateModified: null,
  _links: { refs: [] },
  embedValue: null
}

export default WebPage
