import React from 'react'
import PropTypes from 'prop-types'

import withFormData from './withFormData'

let changed = null
const autoFocus = (name) => {
  const focus = changed === name
  changed = focus ? null : changed
  return focus
}

const onFocus = (e) => {
  const tmp = e.target.value
  e.target.value = ''
  e.target.value = tmp
}

const Textarea = ({name, value, setValue, errors, property, title, className, translate}) => (
  <div className={`Textarea ${property || ''} ${className}`.trim()}>
    <label htmlFor={name}>{translate(title)}</label>
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <textarea
      name={name}
      value={value}
      id={name}
      placeholder={translate(title)}
      autoFocus={autoFocus(name)}
      onFocus={onFocus}
      onChange={(e) => (changed = name) && setValue(e.target.value)}
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
  translate: PropTypes.func.isRequired
}

Textarea.defaultProps = {
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: ''
}

export default withFormData(Textarea)
