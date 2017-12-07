import React from 'react'
import PropTypes from 'prop-types'
import translate from './translate'
import FullModal from './FullModal'
import '../styles/Register.pcss'
import Link from './Link'
import { Composer } from 'json-pointer-form'

const Register = ({translate}) => (
  <div className="Register">
    <FullModal>
      <div>
        <h2>{translate('Register.login')}</h2>
        <p>{translate('Register.loginInfo')}.</p>
        <Link className="btn" href="/.login">{translate('Register.login')}</Link>
      </div>

      <div className="block">
        <h2>{translate('Register.forgotPassword')}</h2>
        <p>{translate('Register.forgotPasswordInfo')}.</p>
        {/* <Composer
          value={about}
          schema={schema}
          submit={value => emitter.emit('save', value)}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        /> */}
      </div>

      <div className="block">
        <h2>{translate('Register.register')}</h2>
        {/* <Composer
          value={about}
          schema={schema}
          submit={value => emitter.emit('save', value)}
          getLabel={value => getLabel(translate, value)}
          submitLabel={translate('properties.submitLabel')}
        /> */}
      </div>
    </FullModal>
  </div>
)

Register.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default translate(Register)
