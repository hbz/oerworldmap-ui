import React from 'react'
import PropTypes from 'prop-types'

import { Composer } from 'json-pointer-form'

import FullModal from './FullModal'
import Icon from './Icon'
import withEmitter from './withEmitter'
import withI18n from './withI18n'

import schema from '../json/schema.json'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
      </span>
    )
  } else {
    return translate(value)
  }
}

const WebPageUserActions = ({user, about, emitter, view, translate}) => {

  const lighthouses = (about.objectIn || []).filter(action =>
    action['@type'] === 'LighthouseAction'
  ) || []

  const likes = (about.objectIn || []).filter(action =>
    action['@type'] === 'LikeAction'
  ) || []

  const lighthouse = lighthouses.find(action =>
    action.agent.some(agent => user && agent['@id'] === user.id)
  ) || ( user ? {
      '@type': 'LighthouseAction',
      'object': about,
      'agent': [{ '@id': user.id, '@type': 'Person' }],
      'description': [{'@language': 'en'}]
    } : null )

  const like = likes.find(action =>
    action.agent.some(agent => user && agent['@id'] === user.id)
  )

  const isAttendee = (about.attendee || []).some(attendee =>
    user && attendee['@id'] === user.id
  )

  const isPerformer = (about.performer || []).some(performer =>
    user && performer['@id'] === user.id
  )

  const isAffiliate = (about.affiliate || []).some(affiliate =>
    user && affiliate['@id'] === user.id
  )

  const toggleLike = () => {
    if (like) {
      emitter.emit('delete', {
        url: `/resource/${like['@id']}`
      })
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

  const toggle = (property, active) => {
    const data = JSON.parse(JSON.stringify(about))
    if (active) {
      data[property] = data[property].filter(entry => entry['@id'] !== user.id)
    } else {
      data[property]
        ? data[property].push({'@id': user.id})
        : data[property] = [{'@id': user.id}]
    }
    emitter.emit('submit', {url: `/resource/${about['@id']}`, data})
  }

  return (
    <div className="WebPageUserActions">

      {['Organization', 'Action', 'Service', 'Product'].indexOf(about['@type']) !== -1 &&
        <div className="action">
          <form onSubmit={(e) => e.preventDefault() || toggleLike()}>
            <button className={`btn ${like ? 'active': ''}`} type="submit" title={translate('Like')}>
              <i className="fa fa-star" />
              {translate('Like')}
            </button>
          </form>
        </div>
      }

      {['Organization', 'Action', 'Service'].indexOf(about['@type']) !== -1 &&
        <div className="action">
          <a href="#addLighthouse" className={`btn ${lighthouse['@id'] ? 'active': ''}`}>
            <img
              className="i hidden-hover"
              src="/assets/lighthouse_16px_blue.svg"
              alt="Lighthouse"
            />
            <img
              className="i visible-hover"
              src="/assets/lighthouse_16px_white.svg"
              alt="Lighthouse"
            />
            {translate('Lighthouse')}
          </a>
        </div>
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

      {about['@type'] === 'Event' &&
        <div className="action">
          <form onSubmit={(e) => e.preventDefault() || toggle('attendee', isAttendee)}>
            <button className={`btn ${isAttendee ? 'active': ''}`} type="submit" title={translate('I\'m attending')}>
              <i className="fa fa-star" />
              {translate('I\'m attending')}
            </button>
          </form>
        </div>
      }

      {about['@type'] === 'Event' &&
        <div className="action">
          <form onSubmit={(e) => e.preventDefault() || toggle('performer', isPerformer)}>
            <button className={`btn ${isPerformer ? 'active': ''}`} type="submit" title={translate('I\'m presenting')}>
              <i className="fa fa-bullhorn" />
              {translate('I\'m presenting')}
            </button>
          </form>
        </div>
      }

      {(about['@type'] === 'Organization' || about['@type'] === 'Action') &&
        <div className="action">
          <form onSubmit={(e) => e.preventDefault() || toggle('affiliate', isAffiliate)}>
            <button className={`btn ${isAffiliate ? 'active': ''}`} type="submit" title={translate('I\'m a member')}>
              <i className="fa fa-flag" />
              {translate('I\'m a member')}
            </button>
          </form>
        </div>
      }

    </div>
  )
}

WebPageUserActions.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  view: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired
}

WebPageUserActions.defaultProps = {
  user: null
}

export default withI18n(withEmitter(WebPageUserActions))
