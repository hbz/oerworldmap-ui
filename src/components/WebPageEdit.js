import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

import schema from '../json/schema.json'

const WebPageEdit = ({about, emitter, translate}) => (
  <Form
    data={about}
    validate={validate(JsonSchema(schema).get(`#/definitions/${about['@type']}`))}
    onSubmit={data => emitter.emit('submit', {url: `/resource/${about['@id'] || ''}`, data})}
  >
    <Builder schema={JsonSchema(schema).get(`#/definitions/${about['@type']}`)} />
    <p dangerouslySetInnerHTML={{__html: translate('ResourceIndex.index.agreeMessage')}} />
    <button className="btn" type="submit">{translate('publish')}</button>
  </Form>
)

WebPageEdit.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(withEmitter(WebPageEdit))
