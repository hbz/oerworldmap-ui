
import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Icon from './Icon'

import '../styles/components/TopWrapper.pcss'

const TopWrapper = ({translate, about}) => (
  <div className="TopWrapper">
    {about.image &&
      <img
        style={{
          display: 'none'
        }}
        onLoad={e => {
          e.target.style.display = 'block'
        }}
        onError={e => {
          e.target.remove()
        }}
        src={about.image}
        alt={translate(about.name) || about['@id']}
      />
    }
    <div>
      <Icon type={about['@type']} /> <span>{translate(about['@type'])}</span>
      <br />
      <b>{translate(about.name) || about['@id']}</b>
    </div>
  </div>
)


TopWrapper.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withI18n(TopWrapper)