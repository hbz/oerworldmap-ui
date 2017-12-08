import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import translate from './translate'
import FullModal from './FullModal'
import '../styles/Password.pcss'
import schema from '../json/schema.json'

const Password = ({translate}) => (
  <div className="Password">
    <FullModal>
      <div>
        <h2>{translate('Password.changePassword')}</h2>
        <p>{translate('Password.info')}.</p>
        {/* <Composer
          value={{'@type': 'PasswordAction'}}
          schema={schema}
          submit={value => console.log(value)}
          getLabel={value => translate(`Password.${value}`)}
          submitLabel={translate('Password.setPassword')}
        /> */}
      </div>
    </FullModal>
  </div>
)

Password.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default translate(Password)
