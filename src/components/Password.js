import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import '../styles/components/Password.pcss'
import schema from '../json/schema.json'

const Password = ({translate, emitter}) => (
  <div className="Password">
    <FullModal>
      <div>
        <h2>{translate('UserIndex.password.changePassword')}</h2>
        <p>{translate('UserIndex.password.message')}</p>
        <Composer
          value={{'@type': 'ChangePasswordAction'}}
          schema={schema}
          submit={data => emitter.emit('submit', {url: '/user/password/change', data})}
          getLabel={value => translate(value)}
          submitLabel={translate('UserIndex.password.setPassword')}
        />
      </div>
    </FullModal>
  </div>
)

Password.propTypes = {
  translate: PropTypes.func.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Password))
