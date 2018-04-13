import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

import 'react-select/dist/react-select.css'

import withFormData from './withFormData'
import withApi from '../withApi'

class KeywordSelect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    this.props.api.get('/resource/?size=0').then(response => {
      const options = response.aggregations['about.keywords'].buckets
        .map(keyword => ({value: keyword.key, label: keyword.key}))
      this.setState({options})
    })
  }

  render() {
    const {
      name, value, setValue, property, className, title, translate, errors, formId
    } = this.props

    return (
      <div
        className={`KeywordSelect ${property || ''} ${className} ${errors.length ? 'hasError': ''}`.trim()}
        role="group"
        aria-labelledby={`${formId}-${name}-label`}
      >
        <div className="label" id={`${formId}-${name}-label`}>{translate(title)}</div>
        {errors.map((error, index) => (
          <div className="error" key={index}>{error.message}</div>
        ))}
        <Select.Creatable
          name={name}
          value={value.map(value => ({value, label:value}))}
          options={this.state.options}
          onChange={selected => setValue(selected.map(option => option.value))}
          placeholder={`${translate('ClientTemplates.resource_typehead.search')} ${translate(title)}`}
          arrowRenderer={() => <i className="fa fa-chevron-down" />}
          clearable={false}
          promptTextCreator={(label) => `${translate('create')} "${label}"`}
          multi
        />
      </div>
    )
  }

}

KeywordSelect.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  property: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  translate: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.any),
  api: PropTypes.objectOf(PropTypes.any).isRequired,
  setValue: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired
}

KeywordSelect.defaultProps = {
  errors: [],
  property: undefined,
  title: '',
  className: '',
  value: []
}

export default withApi(withFormData(KeywordSelect))
