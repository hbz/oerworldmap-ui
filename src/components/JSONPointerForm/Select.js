import React from 'react'
import PropTypes from 'prop-types'

import withFormData from './withFormData'

const Select = ({
  name, value, setValue, errors, options, property, title, className, translate, formId, required
}) => (
  <div className={`Select ${property || ''} ${className} ${errors.length ? 'hasError': ''}`.trim()}>
    <label
      htmlFor={`${formId}-${name}`}
      className={required ? 'required' : ''}
    >
      {translate(title)} {required ? <span className="asterisk" title="${translate('This is a required field!')}">*</span> : ''}
    </label>
    {errors.map((error, index) => (
      <div className="error" key={index}>{error.message}</div>
    ))}
    <select
      name={name}
      value={value}
      id={`${formId}-${name}`}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value={null} />
      {options.map((option) => (
        <option key={option} value={option}>{translate(option)}</option>
      ))}
    </select>
  </div>
)

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  required: PropTypes.bool,
  empty: PropTypes.bool
}

Select.defaultProps = {
  value: '',
  errors: [],
  property: undefined,
  title: '',
  className: '',
  required: false,
  empty: true
}

export default withFormData(Select)
