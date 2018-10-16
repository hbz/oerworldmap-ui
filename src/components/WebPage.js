import React from 'react'
import PropTypes from 'prop-types'

import WebPageView from './WebPageView'
import WebPageEdit from './WebPageEdit'
import WebPageHeader from './WebPageHeader'
import WebPageCover from './WebPageCover'
import Link from './Link'

import expose from '../expose'

import '../styles/components/WebPage.pcss'
import '../styles/components/FormStyle.pcss'

const WebPage = ({
  user,
  about,
  contributor,
  dateModified,
  view,
  feature,
  _links,
  _self,
  mapboxConfig,
  schema,
  embedValue,
  showOptionalFields
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

        <WebPageCover about={about} feature={feature} mapboxConfig={mapboxConfig} />

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
                showOptionalFields={showOptionalFields}
              />
            </div>
          }

          <div id="view" className={!user || view !== 'edit' ? '' : 'hidden'}>
            <WebPageView id="view" about={about} user={user} view={view} schema={schema} />
          </div>


        </div>

        {/* <div className="closeBtn">
          <a href="#a">
            x
          </a>
        </div> */}
        <div className="closeBtn">
          <Link href={Link.home}>
            &times;
          </Link>
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
  feature: PropTypes.objectOf(PropTypes.any),
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
  embedValue: PropTypes.string,
  showOptionalFields: PropTypes.bool
}

WebPage.defaultProps = {
  feature: null,
  user: null,
  contributor: null,
  dateModified: null,
  _links: { refs: [] },
  embedValue: null,
  showOptionalFields: true
}

export default WebPage
