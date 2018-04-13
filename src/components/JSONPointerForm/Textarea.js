import React from 'react'
import PropTypes from 'prop-types'

import withFormData from './withFormData'

import { appendOnFocus } from '../../common'

const Textarea = ({
  name, value, setValue, errors, property, title, className, translate, shouldFormComponentFocus,
  formId
}) => (
  <div className={`Textarea ${property || ''} ${className} ${errors.length ? 'hasError': ''}`.trim()}>
    <label htmlFor={`${formId}-${name}`}>{translate(title)}</label>
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <textarea
      name={name}
      value={value}
      id={`${formId}-${name}`}
      placeholder={translate(title)}
      autoFocus={shouldFormComponentFocus}
      onFocus={appendOnFocus}
      onChange={e => setValue(e.target.value)}
    />
  </div>
)

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  shouldFormComponentFocus: PropTypes.bool,
  formId: PropTypes.string.isRequired
}

Textarea.defaultProps = {
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: '',
  shouldFormComponentFocus: false
}

export default withFormData(Textarea)
