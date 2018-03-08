import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import FullModal from './FullModal'
import withEmitter from './withEmitter'
import withI18n from './withI18n'

import schema from '../json/schema.json'

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

  const toggleLike = (e) => {
    e.preventDefault()
    if (like) {
      emitter.emit('delete', {url: `/resource/${like['@id']}`})
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

  return (
    <div className="WebPageUserActions">

      <div className="action">
        <form onSubmit={toggleLike}>
          <button className="btn" type="submit" title="Like">
            <i className="fa fa-star" />
            {translate('Like')}
          </button>
        </form>
      </div>

      <div className="action">
        <a href="#addLighthouse" className="btn">
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

      {about['@id'] && user && view === 'addLighthouse' &&
        <FullModal>
          <Form
            data={lighthouse}
            validate={validate(JsonSchema(schema).get('#/definitions/LighthouseAction'))}
            onSubmit={data => emitter.emit('submit', {url: `/resource/${lighthouse['@id'] || ''}`, data} )}
          >
            <Builder schema={JsonSchema(schema).get('#/definitions/LighthouseAction')} />
            <button type="submit">{translate('publish')}</button>
          </Form>
        </FullModal>
      }

      <div className="action">
        <a href="#subscribe" className="btn">
          <i className="fa fa-bell" />
          {translate('Subscribe')}
        </a>
      </div>

      <div className="action">
        <a href="#attend" className="btn">
          <i className="fa fa-flag" />
          {translate('I\'m attending')}
        </a>
      </div>

    </div>
  )
}

/*

TODO

* Add class "active" to buttons, where action was taken
* Make subscribe button working
* Show "relational actions" only where they are appropriate:
  - "I'm attending" and "I'm presenting" for events
  - "I'm a member" for projects and organizations
  - Use icon bullhorn for "I'm presenting"
  - Use icon sitemap for "I'm a member"

*/

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
