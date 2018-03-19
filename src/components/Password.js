import React from 'react'
import PropTypes from 'prop-types'

import JsonSchema from './JSONPointerForm/JsonSchema'
import Form from './JSONPointerForm/Form'
import Builder from './JSONPointerForm/Builder'
import validate from './JSONPointerForm/validate'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import Link from './Link'
import '../styles/components/Password.pcss'
import schema from '../json/schema.json'

const Password = ({translate, emitter}) => (
  <div className="Password">
    <FullModal closeLink={Link.back}>
      <Form
        validate={validate(JsonSchema(schema).get('#/definitions/ChangePasswordAction'))}
        onSubmit={data => emitter.emit('submit', {url: '/user/password/change', data})}
      >
        <Builder schema={JsonSchema(schema).get('#/definitions/ChangePasswordAction')} />
        <button type="submit">{translate('UserIndex.password.setPassword')}</button>
      </Form>
    </FullModal>
  </div>
)

Password.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Password))
