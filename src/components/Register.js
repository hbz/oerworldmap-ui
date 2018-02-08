import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import '../styles/components/Register.pcss'
import schema from '../json/schema.json'

const Register = ({translate, emitter}) => (
  <div className="Register">
    <FullModal>
      <div>
        <h2>{translate('login')}</h2>
        <p>{translate('UserIndex.register.loginMessage')}</p>
        <a className="btn" href="/.login">{translate('login')}</a>
      </div>

      <div className="block forgotPassword">
        <h2>{translate('UserIndex.register.forgotPassword')}</h2>
        <p>{translate('UserIndex.register.forgotPasswordMessage')}</p>
        <Composer
          value={{'@type': 'ResetPasswordAction'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/user/password/reset', data})}
          getLabel={value => translate(value)}
          submitLabel={translate('UserIndex.register.resetPassword')}
        />
      </div>

      <div className="block">
        <h2>{translate('UserIndex.register.register')}</h2>
        <Composer
          value={{'@type': 'RegisterAction'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/user/register', data})}
          getLabel={value => translate(value)}
          submitLabel={translate('UserIndex.register.register')}
        />
      </div>
    </FullModal>
  </div>
)

Register.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Register))
