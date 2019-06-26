import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import FullModal from './FullModal'
import withEmitter from './withEmitter'
import withI18n from './withI18n'

import '../styles/components/WebPageUserActions.pcss'

const WebPageUserActions = ({
  user, about, emitter, view, translate, schema,
}) => {
  const lighthouses = (about.objectIn || []).filter(action => action['@type'] === 'LighthouseAction') || []

  const likes = (about.objectIn || []).filter(action => action['@type'] === 'LikeAction') || []

  const lighthouse = lighthouses.find(action => action.agent && action.agent.some(agent => user && agent['@id'] === user.id))
  || (user ? {
    '@type': 'LighthouseAction',
    description: [{ '@language': 'en' }],
    startTime: new Date().toISOString(),
  } : null)

  lighthouse && Object.assign(lighthouse, {
    object: {
      '@id': about['@id'],
      '@type': about['@type'],
    },
    agent: [{ '@id': user.id, '@type': 'Person' }],
  })

  const like = likes.find(action => action.agent && action.agent.some(agent => user && agent['@id'] === user.id))

  const isAttendee = (about.attendee || []).some(attendee => user && attendee['@id'] === user.id)

  const isPerformer = (about.performer || []).some(performer => user && performer['@id'] === user.id)

  const isAffiliate = (about.affiliate || []).some(affiliate => user && affiliate['@id'] === user.id)

  const toggleLike = () => {
    if (like) {
      emitter.emit('delete', {
        url: `/resource/${like['@id']}`,
        redirect: { url: `/resource/${about['@id']}` },
      })
    } else {
      emitter.emit('submit', {
        url: '/resource/',
        redirect: { url: `/resource/${about['@id']}` },
        data: {
          '@type': 'LikeAction',
          object: about,
          agent: [{
            '@id': user.id,
            '@type': 'Person',
          }],
          startTime: new Date().toISOString(),
        },
      })
    }
  }

  const toggle = (property, active) => {
    const data = JSON.parse(JSON.stringify(about))
    if (active) {
      data[property] = data[property].filter(entry => entry['@id'] !== user.id)
    } else {
      data[property]
        ? data[property].push({ '@id': user.id })
        : data[property] = [{ '@id': user.id }]
    }
    emitter.emit('submit', { url: `/resource/${about['@id']}`, data })
  }

  return (
    <div className="WebPageUserActions">

      {['Organization', 'Action', 'Service', 'Product', 'Event', 'Article', 'WebPage', 'Policy'].includes(about['@type']) && (
        <div className="action">
          <form onSubmit={e => e.preventDefault() || toggleLike()}>
            <button className={`btn ${like ? 'active' : ''}`} type="submit" title={translate('Like')}>
              <i aria-hidden="true" className="fa fa-thumbs-up" />
              {translate('Like')}
            </button>
          </form>
        </div>
      )}

      {['Organization', 'Action', 'Service', 'Product', 'Event', 'Article', 'WebPage', 'Policy'].includes(about['@type']) && (
        <div className="action">
          <a href="#addLighthouse" className={`btn ${lighthouse['@id'] ? 'active' : ''}`}>
            <img className="i blueLighthouse" src="/public/lighthouse_16px_blue.svg" alt="Lighthouse" />
            <img className="i whiteLighthouse" src="/public/lighthouse_16px_white.svg" alt="Lighthouse" />
            {translate('Lighthouse')}
          </a>
        </div>
      )}

      {view === 'addLighthouse' && (
        <FullModal className="Lighthouse" closeLink={`/resource/${about['@id']}`}>
          <Form
            data={lighthouse}
            validate={validate(JsonSchema(schema).get('#/definitions/LighthouseAction'))}
            onSubmit={data => emitter.emit('submit', {
              url: `/resource/${lighthouse['@id'] || ''}`,
              redirect: { url: `/resource/${about['@id']}` },
              data,
            })}
          >
            <h2>
              {translate('ResourceIndex.read.lightHouse')}
              &nbsp;
              {translate(about['@type'])}
            </h2>
            <p>
              <em>
                {translate('descriptions.LighthouseAction.description')}
                &nbsp;
                <a
                  href="https://oerworldmap.wordpress.com/2017/11/27/identifying-lighthouses/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {translate('needHelp')}
                </a>
              </em>
            </p>
            <hr />
            <Builder schema={JsonSchema(schema).get('#/definitions/LighthouseAction')} />
            <div className="buttons">
              <button className="btn" type="submit">{translate('publish')}</button>
            </div>
          </Form>
        </FullModal>
      )}

      {about['@type'] === 'Event' && (
        <div className="action">
          <form onSubmit={e => e.preventDefault() || toggle('attendee', isAttendee)}>
            <button className={`btn ${isAttendee ? 'active' : ''}`} type="submit" title={translate('I\'m attending')}>
              <i aria-hidden="true" className="fa fa-flag" />
              {translate('I\'m attending')}
            </button>
          </form>
        </div>
      )}

      {about['@type'] === 'Event' && (
        <div className="action">
          <form onSubmit={e => e.preventDefault() || toggle('performer', isPerformer)}>
            <button className={`btn ${isPerformer ? 'active' : ''}`} type="submit" title={translate('I\'m presenting')}>
              <i aria-hidden="true" className="fa fa-bullhorn" />
              {translate('I\'m presenting')}
            </button>
          </form>
        </div>
      )}

      {(about['@type'] === 'Organization' || about['@type'] === 'Action') && (
        <div className="action">
          <form onSubmit={e => e.preventDefault() || toggle('affiliate', isAffiliate)}>
            <button className={`btn ${isAffiliate ? 'active' : ''}`} type="submit" title={translate('I\'m a member')}>
              <i aria-hidden="true" className="fa fa-sitemap" />
              {translate('I\'m a member')}
            </button>
          </form>
        </div>
      )}

    </div>
  )
}

WebPageUserActions.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  view: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
}

WebPageUserActions.defaultProps = {
  user: null,
}

export default withI18n(withEmitter(WebPageUserActions))
