/* global document */
/* global confirm */
import React from 'react'
import PropTypes from 'prop-types'

import WebPageView from './WebPageView'
import WebPageEdit from './WebPageEdit'
import WebPageHeader from './WebPageHeader'
import WebPageCover from './WebPageCover'

import expose from '../expose'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import Link from './Link'

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
  showOptionalFields,
  emitter,
  translate,
}) => (
  <div
    className="webPageWrapper"
    role="presentation"
    onClick={(e) => {
      const modalDialog = document.querySelector('.WebPage')
      if (!modalDialog.contains(e.target)) {
        if (view === 'edit') {
          confirm(translate('Do you want to go leave the edit view?')) && emitter.emit('navigate', _self || Link.home)
        } else {
          emitter.emit('navigate', Link.home)
        }
      }
    }}
  >
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

      {about['@type'] !== 'Policy'
        && <WebPageCover about={about} feature={feature} mapboxConfig={mapboxConfig} />
      }

      <div className="webPageContent">

        {expose('editEntry', user, about) && (
          <div id="edit" className={view === 'edit' ? '' : 'hidden'}>
            <WebPageEdit
              about={about}
              action={about['@id'] ? 'edit' : 'add'}
              mapboxConfig={mapboxConfig}
              user={user}
              schema={schema}
              closeLink={about['@id'] ? _self : undefined}
              showOptionalFields={showOptionalFields}
              _self={_self}
            />
          </div>
        )}

        <div id="view" className={!user || view !== 'edit' ? '' : 'hidden'}>
          <WebPageView id="view" about={about} user={user} view={view} schema={schema} _self={_self} />
        </div>

      </div>
    </div>
  </div>
)

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
    },
  ).isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  embedValue: PropTypes.string,
  showOptionalFields: PropTypes.bool,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
}

WebPage.defaultProps = {
  feature: null,
  user: null,
  contributor: null,
  dateModified: null,
  _links: { refs: [] },
  embedValue: null,
  showOptionalFields: true,
}

export default withEmitter(withI18n(WebPage))
