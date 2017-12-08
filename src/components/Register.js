import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import translate from './translate'
import FullModal from './FullModal'
import Link from './Link'
import '../styles/Register.pcss'
import schema from '../json/schema.json'

const Register = ({translate}) => (
  <div className="Register">
    <FullModal>
      <div>
        <h2>{translate('Register.login')}</h2>
        <p>{translate('Register.loginInfo')}.</p>
        <a className="btn" href="/.login">{translate('Register.login')}</a>
      </div>

      <div className="block">
        <h2>{translate('Register.forgotPassword')}</h2>
        <p>{translate('Register.forgotPasswordInfo')}.</p>
        <Composer
          value={{'@type': 'ResetPasswordAction'}}
          schema={schema}
          submit={value => console.log(value)}
          getLabel={value => translate(value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </div>

      <div className="block">
        <h2>{translate('Register.register')}</h2>
        <Composer
          value={{'@type': 'RegisterAction'}}
          schema={schema}
          submit={value => console.log(value)}
          getLabel={value => translate(value)}
          submitLabel={translate('properties.submitLabel')}
        />
      </div>
    </FullModal>
  </div>
)

Register.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default translate(Register)
