/* global document */
/* global confirm */
import React from 'react'
import PropTypes from 'prop-types'

import WebPageView from './WebPageView'
import WebPageEdit from './WebPageEdit'
import WebPageHeader from './WebPageHeader'

import expose from '../expose'
import withEmitter from './withEmitter'
import withI18n from './withI18n'
import withUser from './withUser'
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
  schema,
  showOptionalFields,
  emitter,
  translate,
  onSubmit,
}) => {
  const date = new Date().toJSON().split('T').shift()
  const isLiveEvent = (about.startDate && about.startDate <= date)
    && (about.endDate && about.endDate >= date) && !!about.hashtag

  return (
    <div
      className="webPageWrapper"
      role="presentation"
      onClick={(e) => {
        const modalDialog = document.querySelector('.WebPage')
        if (!modalDialog.contains(e.target)) {
          if (view === 'edit') {
            confirm(translate('WebPage.leaveEditView')) && emitter.emit('navigate', _self || Link.home)
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
        />


        <div className="webPageContent">
          {expose('editEntry', user, about) && (view === 'edit') ? (
            <div
              id="edit"
              data-userroles={user && user.groups ? user.groups.join(' ') : ''}
              className={view === 'edit' ? '' : 'hidden'}
            >
              <WebPageEdit
                about={about}
                action={about['@id'] ? 'edit' : 'add'}
                schema={schema}
                closeLink={about['@id'] ? _self : undefined}
                showOptionalFields={showOptionalFields}
                _self={_self}
                onSubmit={onSubmit}
              />
            </div>
          ) : (
            <div id="view">
              <WebPageView
                id="view"
                about={about}
                view={view}
                action={about['@id'] ? 'edit' : 'add'}
                schema={schema}
                _self={_self}
                isLiveEvent={isLiveEvent}
                feature={feature}
              />
            </div>
          )}
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
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  showOptionalFields: PropTypes.bool,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
}

WebPage.defaultProps = {
  feature: null,
  user: null,
  contributor: null,
  dateModified: null,
  _links: { refs: [] },
  showOptionalFields: true,
  onSubmit: formdata => console.log(formdata),
}

export default withEmitter(withI18n(withUser(WebPage)))
