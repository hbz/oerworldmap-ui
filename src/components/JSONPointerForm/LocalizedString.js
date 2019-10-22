import React from 'react'
import PropTypes from 'prop-types'

import Input from './Input'
import MarkdownArea from './MarkdownArea'
import withFormData from './withFormData'
import { objectMap } from '../../common'

const LocalizedString = ({
  schema, translate, value, setValue, shouldFormComponentFocus, description, title, required,
  formId, name, locales, errors,
}) => {
  const TextInput = schema._display && schema._display.rows > 1 ? MarkdownArea : Input
  const languagesPresent = Object.keys(schema.properties)
    .filter(lang => (schema.required && schema.required.includes(lang))
      || (schema.suggested && schema.suggested.includes(lang))
      || (locales.length && locales[0] === lang)
      || (value && value[lang] != null))
  const languagesAvailable = Object.keys(schema.properties)
    .filter(lang => !(schema.required && schema.required.includes(lang))
      && !(value && value[lang] != null))
    .map(key => [key, translate(key)])
    .sort((a, b) => a[1].localeCompare(b[1]))

  return (
    <div className={`LocalizedString ${errors.length ? 'hasError' : ''}`.trim()}>
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
      {errors.map((error, index) => (
        <div className="error" key={index}>
          {translate(`Error.${error.keyword}`, objectMap(error.params, translate))}
        </div>
      ))}
      {languagesPresent.map(lang => (
        <TextInput
          property={lang}
          translate={translate}
          shouldFormComponentFocus={shouldFormComponentFocus}
          title={lang}
          key={lang}
        />
      ))}
      {languagesAvailable.length > 0 && (
        <label>
          {translate('resourceFormWidgets.localizedTextarea.addLanguage')}
          :&nbsp;
          <select onChange={(event) => {
            const lang = event.target.options[event.target.selectedIndex].value
            lang && setValue(Object.assign(value || {}, { [lang]: '' }), false)
          }}
          >
            <option value="">&nbsp;</option>
            {languagesAvailable.map(lang => (
              <option value={lang[0]} key={lang[0]}>{lang[1]}</option>
            ))}
          </select>
        </label>
      )}
    </div>
  )
}

LocalizedString.propTypes = {
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  value: PropTypes.objectOf(PropTypes.any),
  setValue: PropTypes.func.isRequired,
  shouldFormComponentFocus: PropTypes.bool.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  formId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
}

LocalizedString.defaultProps = {
  value: undefined,
  description: undefined,
  title: '',
  required: false,
  errors: [],
}

export default withFormData(LocalizedString)
