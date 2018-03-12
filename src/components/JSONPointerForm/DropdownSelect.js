import React from 'react'
import PropTypes from 'prop-types'

import withFormData from './withFormData'

import withI18n from '../withI18n'

const optionFilter = filter => option =>
  !filter || option.toLowerCase().search(filter.trim().toLowerCase()) !== -1

class DropdownSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      dropdown: false
    }
  }

  render() {
    const {name, property, value, options, setValue, errors, title, translate, className} = this.props
    return (
      <div
        className={`DropdownSelect ${property || ''} ${className}`.trim()}
        aria-labelledby={`${name}-label`}
      >
        <div className="label" id={`${name}-label`}>{title}</div>
        {errors.map((error, index) => (
          <div className="error" key={index}>{error.message}</div>
        ))}
        {value ? (
          <div className="selectedContainer">
            <input
              type="checkbox"
              name={name}
              value={value}
              id={`${name}-${value}`}
              checked
              onChange={e => setValue(e.target.checked ? e.target.value : undefined)}
            />
            <label htmlFor={`${name}-${value}`} tabIndex="0" role="button">
              {translate(value)}
            </label>
          </div>
        ) : (
          <div className="dropdownContainer">
            <button
              className="toggleDropdown"
              onClick={e => {
                e.preventDefault()
                this.setState({dropdown: !this.state.dropdown})
              }}
            >
              {title}
            </button>
            <div className={this.state.dropdown ? 'dropdownList' : 'hidden'}>
              <div className="filterContainer">
                <input
                  type="text"
                  className="filter"
                  placeholder="..."
                  onChange={e => this.setState({filter: e.target.value})}
                  value={this.state.filter}
                />
              </div>
              <ul className="optionsContainer">
                {options.filter(optionFilter(this.state.filter)).map(option => (
                  <li key={option}>
                    <input
                      type="checkbox"
                      name={name}
                      value={option}
                      id={`${name}-${option}`}
                      checked={value === option}
                      onChange={e => {
                        setValue(e.target.checked ? e.target.value : undefined)
                        this.setState({filter: "", dropdown: false})
                      }}
                    />
                    <label htmlFor={`${name}-${option}`} tabIndex="0" role="button">
                      {translate(option)}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }

}

DropdownSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  property: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string
}

DropdownSelect.defaultProps = {
  value: '',
  property: undefined,
  errors: [],
  title: '',
  className: ''
}

export default withI18n(withFormData(DropdownSelect))
