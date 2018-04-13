/* global document */
import React from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import withFormData from './withFormData'
import Icon from '../Icon'
import withApi from '../withApi'
import { getURL, triggerClick } from '../../common'

class RemoteSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: "",
      options: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateOptions = debounce(this.updateOptions.bind(this), 200)
    this.optionList = this.optionList.bind(this)
    this.showOption = this.showOption.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick)
  }

  handleClick(e) {
    if (!this.wrapper.contains(e.target)) {
      this.setState({options: []})
    }
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
    const {name, translate, setValue, formId} = this.props

    return (
      <ul>
        {options.map(option => (
          <li key={option['@id']}>
            <input
              type="checkbox"
              name={`${name}/@id`}
              value={option['@id']}
              id={`${formId}-${name}-${option['@id']}`}
              onChange={e => setValue(e.target.checked ? option : undefined)}
            />
            <label
              htmlFor={`${formId}-${name}-${option['@id']}`}
              tabIndex="0"
              role="button"
              className={this.showOption(option) ? null : 'hidden'}
              onKeyDown={e => triggerClick(e, 13)}
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
    const {
      name, property, value, setValue, errors, title, translate, className, formId
    } = this.props

    return (
      <div
        ref={el => this.wrapper = el}
        className={`RemoteSelect ${property || ''} ${className} ${errors.length ? 'hasError': ''}`.trim()}
        aria-labelledby={`${formId}-${name}-label`}
        onKeyDown={(e) => {
          if (e.keyCode === 27) {
            this.setState({options: []})
          }
        }}
        role="button"
        tabIndex="0"
      >
        <div className="label" id={`${formId}-${name}-label`}>{translate(title)}</div>
        {errors.map((error, index) => (
          <div className="error" key={index}>{error.message}</div>
        ))}
        {value ? (
          <div className="selectedContainer">
            <input
              type="checkbox"
              name={`${name}/@id`}
              value={value['@id']}
              id={`${formId}-${name}-${value['@id']}`}
              checked
              onChange={e => setValue(e.target.checked ? value : undefined)}
            />
            <label htmlFor={`${formId}-${name}-${value['@id']}`} tabIndex="0" role="button">
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
                onFocus={() => this.props.schema.properties.inScheme && this.updateOptions()}
                placeholder={
                  translate('ClientTemplates.resource_typehead.search')
                    .concat(' ')
                    .concat(this.props.schema.properties['@type'].enum
                      .map(type => translate(type)).join(' or ')
                    )
                }
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
  className: PropTypes.string,
  formId: PropTypes.string.isRequired
}

RemoteSelect.defaultProps = {
  value: undefined,
  property: undefined,
  errors: [],
  title: '',
  className: ''
}

export default withApi(withFormData(RemoteSelect))
