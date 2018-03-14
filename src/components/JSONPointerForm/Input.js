import React from 'react'
import PropTypes from 'prop-types'

import withFormData from './withFormData'

import { appendOnFocus } from '../../common'

const castValue = (target) => {
  switch (target.type) {
  case 'checkbox':
    return target.checked ? "true" : null
  default:
    // TODO: properly cast number to int or float
    return target.value
  }
}

const Input = ({
  type, name, value, setValue, errors, property, title, className, translate,
  shouldFormComponentFocus
}) => (
  <div className={`Input ${type} ${property || ''} ${className}`.trim()}>
    <label htmlFor={name} dangerouslySetInnerHTML={{__html: translate(title)}} />
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <input
      type={type}
      name={name}
      value={value}
      id={name}
      placeholder={translate(title)}
      autoFocus={shouldFormComponentFocus}
      onFocus={appendOnFocus}
      onChange={e => setValue(castValue(e.target))}
    />
  </div>
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  shouldFormComponentFocus: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: '',
  shouldFormComponentFocus: false
}

export default withFormData(Input)
