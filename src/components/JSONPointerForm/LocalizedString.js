import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import MarkdownArea from './MarkdownArea'
import DropdownSelect from './DropdownSelect'
import withFormData from './withFormData'

const LocalizedString = ({
  schema, translate, value, setValue, shouldFormComponentFocus, description
}) => {
  const TextInput = schema._display && schema._display.rows > 1 ? MarkdownArea : Input
  return (
    <div className="LocalizedString">
      <span className="fieldDescription">
        {(description
        && translate(description)
        !== description)
          ? translate(description)
          : ''}
      </span>
      {Object.keys(schema.properties)
        .filter(lang => (schema.required && schema.required.includes(lang))
          || (value && value[lang] != null)).map(lang => (
        <TextInput
          property={lang}
          translate={translate}
          shouldFormComponentFocus={shouldFormComponentFocus}
        />
      ))}
      {Object.keys(schema.properties)
        .filter(lang => !(schema.required && schema.required.includes(lang))
          && !(value && value[lang] != null)).map(lang => (
        <button type="button" onClick={() => setValue(Object.assign(value || {}, {[lang]: ''}), false)}>
          {translate('add', {type: translate(lang)})}
        </button>
      ))}
    </div>
  )
}

LocalizedString.propTypes = {
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  value: PropTypes.objectOf(PropTypes.any),
  setValue: PropTypes.func.isRequired,
  shouldFormComponentFocus: PropTypes.bool.isRequired,
  description: PropTypes.string
}

LocalizedString.defaultProps = {
  value: undefined,
  description: undefined
}

export default withFormData(LocalizedString)
