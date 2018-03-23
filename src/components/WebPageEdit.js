/* global document */
import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

import expose from '../expose'
import schema from '../json/schema.json'

const WebPageEdit = ({about, emitter, translate, action, mapboxConfig, user}) => (
  <Form
    data={about}
    validate={validate(JsonSchema(schema).get(`#/definitions/${about['@type']}`))}
    onSubmit={data => emitter.emit('submit', {url: `/resource/${about['@id'] || ''}`, data})}
    onError={() => document.querySelector('.webPageWrapper').scrollTop = document.querySelector('.error').offsetTop}
  >
    <h2>{translate(action, {type: translate(about['@type'])})}</h2>
    <a
      href="https://github.com/hbz/oerworldmap/wiki/FAQs-for-OER-World-Map-editors"
      target="_blank"
      rel="noopener noreferrer"
      className="needHelp"
    >
      {translate('needHelp')}
    </a>
    <Builder schema={JsonSchema(schema).get(`#/definitions/${about['@type']}`)} config={{mapboxConfig}} />
    <p className="agree" dangerouslySetInnerHTML={{__html: translate('ResourceIndex.index.agreeMessage')}} />
    <button className="btn" type="submit">{translate('publish')}</button>
    {expose('deleteEntry', user, about) &&
      <button
        className="btn"
        type="button"
        onClick={e => {
          e.preventDefault()
          emitter.emit('delete', {
            url: `/resource/${about['@id']}`
          })
        }}
      >
        {translate('ResourceIndex.read.delete')}
      </button>
    }
  </Form>
)

WebPageEdit.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  action: PropTypes.string,
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    }
  ).isRequired,
  user: PropTypes.objectOf(PropTypes.any)
}

WebPageEdit.defaultProps = {
  action: 'edit',
  user: null
}

export default withI18n(withEmitter(WebPageEdit))
