import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import withFormData from './withFormData'
import Icon from '../Icon'
import withApi from '../withApi'
import { getURL } from '../../common'

class RemoteSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateOptions = _.debounce(this.updateOptions.bind(this), 500)
    this.optionList = this.optionList.bind(this)
    this.showOption = this.showOption.bind(this)
  }

  handleChange(e) {
    this.setState({filter: e.target.value})
    e.target.value ? this.updateOptions() : this.setState({options: []})
  }

  updateOptions() {
    const {schema, api} = this.props
    let apiCall

    if (schema.properties.inScheme) {
      apiCall = api.vocab(schema.properties.inScheme.properties['@id'].enum[0])
    } else {
      const params = {
        q: `${this.state.filter}*`,
        'filter.about.@type': schema.properties['@type'].enum
      }
      const url = getURL({
        path: '/resource/',
        params
      })
      apiCall = api.get(url)
    }
    apiCall.then(result => this.setState({options: result.member.map(member => member.about)}))
  }

  showOption(option) {
    return !this.props.schema.properties.inScheme
      || option['@type'] !== 'Concept'
      || option.name.some(name =>
        name['@value'].toLowerCase().search(this.state.filter.trim().toLowerCase()) !== -1
      )
  }

  optionList(options) {
    const {name, translate, setValue} = this.props

    return (
      <ul>
        {options.map(option => (
          <li key={option['@id']}>
            <input
              type="checkbox"
              name={`${name}/@id`}
              value={option['@id']}
              id={`${name}-${option['@id']}`}
              onChange={e => setValue(e.target.checked ? option : undefined)}
            />
            <label
              htmlFor={`${name}-${option['@id']}`}
              tabIndex="0"
              role="button"
              className={this.showOption(option) ? null : 'hidden'}
            >
              <Icon type={option["@type"]} />
              &nbsp;{translate(option.name)}
            </label>
            {option.narrower && this.optionList(option.narrower)}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {name, property, value, setValue, errors, title, translate, className} = this.props
    return (
      <div
        className={`RemoteSelect ${property || ''} ${className}`.trim()}
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
              name={`${name}/@id`}
              value={value['@id']}
              id={`${name}-${value['@id']}`}
              checked
              onChange={e => setValue(e.target.checked ? value : undefined)}
            />
            <label htmlFor={`${name}-${value['@id']}`} tabIndex="0" role="button">
              <Icon type={value["@type"]} />
              &nbsp;{translate(value.name)}
            </label>
          </div>
        ) : (
          <div className="selectContainer">
            <div className="filterContainer">
              <input
                type="text"
                name={`${name}/@id`}
                value={this.state.filter}
                className="filter"
                placeholder="..."
                onChange={this.handleChange}
              />
            </div>
            {this.state.options.length > 0 &&
              <div className="optionsContainer">
                {this.optionList(this.state.options)}
              </div>
            }
          </div>
        )}
      </div>
    )
  }

}

RemoteSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.objectOf(PropTypes.any),
  property: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  translate: PropTypes.func.isRequired,
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string
}

RemoteSelect.defaultProps = {
  value: undefined,
  property: undefined,
  errors: [],
  title: '',
  className: ''
}

export default withApi(withFormData(RemoteSelect))
