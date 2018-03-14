/* global document */
import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

const WebPageEdit = ({about, emitter, translate, action, mapboxConfig}) => (
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
    >
      {translate('needHelp')}
    </a>
    <Builder schema={JsonSchema(schema).get(`#/definitions/${about['@type']}`)} config={{mapboxConfig}} />
    <p className="agree" dangerouslySetInnerHTML={{__html: translate('ResourceIndex.index.agreeMessage')}} />
    <button className="btn" type="submit">{translate('publish')}</button>
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
  ).isRequired
}

WebPageEdit.defaultProps = {
  action: 'edit'
}

export default withI18n(withEmitter(WebPageEdit))
