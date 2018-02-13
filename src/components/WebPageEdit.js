import React from 'react'
import PropTypes from 'prop-types'
import { Composer } from 'json-pointer-form'

import Icon from './Icon'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import schema from '../json/schema.json'

const getLabel = (translate, value) => {
  if (!value) return ''
  if (typeof value === "object") {
    return (
      <span>
        <Icon type={value["@type"]} />
        &nbsp;{value["name"] ? translate(value["name"]) : value["@id"]}
      </span>
    )
  } else {
    return translate(value)
  }
}

const WebPageEdit = ({about, emitter, translate}) => (
  <Composer
    value={about}
    schema={schema}
    submit={data => emitter.emit('submit', {url: `/resource/${about['@id'] || ''}`, data})}
    getOptions={(term, schema, callback) => emitter.emit('getOptions', {term, schema, callback})}
    getLabel={value => getLabel(translate, value)}
    submitLabel={translate('publish')}
    submitNote={translate('ResourceIndex.index.agreeMessage')}
  />
)

WebPageEdit.propTypes = {
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(withEmitter(WebPageEdit))
