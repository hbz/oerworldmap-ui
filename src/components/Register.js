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

const Register = ({translate, emitter, schema}) => (
  <div className="Register">
    <FullModal closeLink={Link.back}>
      <div>
        <h1>{translate('login')}</h1>
        <p>{translate('UserIndex.register.loginMessage')}</p>
        <a
          className="btn"
          href="/.login"
          onClick={e => {
            e.preventDefault()
            emitter.emit("login", Link.back)
          }}
        >
          {translate('login')}
        </a>
      </div>

      <div className="block forgotPassword">
        <Form
          data={{'@type': 'ResetPasswordAction'}}
          validate={validate(JsonSchema(schema).get('#/definitions/ResetPasswordAction'))}
          onSubmit={data => emitter.emit('submit', {url: '/user/password/reset', data})}
        >
          <Builder schema={JsonSchema(schema).get('#/definitions/ResetPasswordAction')} />
          <div className="buttons">
            <button className="btn" type="submit">{translate('UserIndex.register.resetPassword')}</button>
          </div>
        </Form>
      </div>

      <div className="block registerForm newRegister">
        <Form
          data={{'@type': 'RegisterAction'}}
          validate={validate(JsonSchema(schema).get('#/definitions/RegisterAction'))}
          onSubmit={data => emitter.emit('submit', {url: '/user/register', data})}
        >
          <Builder schema={JsonSchema(schema).get('#/definitions/RegisterAction')} />
          <div className="buttons">
            <button className="btn" type="submit">{translate('UserIndex.register.register')}</button>
          </div>
        </Form>
      </div>

    </FullModal>
  </div>
)

Register.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withEmitter(withI18n(Register))
