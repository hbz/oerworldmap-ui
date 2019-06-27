import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import MarkdownArea from './MarkdownArea'
import DropdownSelect from './DropdownSelect'
import withFormData from './withFormData'

const LocalizedString = ({
  schema, translate, value, setValue, shouldFormComponentFocus, description, title, required, formId, name
}) => {
  const TextInput = schema._display && schema._display.rows > 1 ? MarkdownArea : Input
  const languagesPresent = Object.keys(schema.properties)
    .filter(lang => (schema.required && schema.required.includes(lang))
      || (value && value[lang] != null))
  const languagesAvailable = Object.keys(schema.properties)
    .filter(lang => !(schema.required && schema.required.includes(lang))
      && !(value && value[lang] != null))
  return (
    <div className="LocalizedString">
      <div
        className={`label ${required ? 'required' : ''}`.trim()}
        id={`${formId}-${name}-label`}
      >
        {translate(title)}
        &nbsp;
        {required ? <span className="asterisk" title={translate('This is a required field!')}>*</span> : ''}
      </div>
      <span className="fieldDescription">
        {(description && translate(description) !== description)
          ? translate(description)
          : ''
        }
      </span>
      {languagesPresent.map(lang => (
        <TextInput
          property={lang}
          translate={translate}
          shouldFormComponentFocus={shouldFormComponentFocus}
          title={lang}
          key={lang}
        />
      ))}
      {languagesAvailable.length > 0 &&
        <select onChange={e => {
          const lang = event.target.options[event.target.selectedIndex].value
          lang && setValue(Object.assign(value || {}, {[lang]: ''}), false)
        }}>
          <option value="">{translate('add', {type: translate('Language')})}</option>
          {languagesAvailable.map(lang => (
            <option value={lang} key={lang}>{translate('add', {type: translate(lang)})}</option>
          ))}
        </select>
      }
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
