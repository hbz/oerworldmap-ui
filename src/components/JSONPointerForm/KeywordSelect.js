import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import fetch from 'isomorphic-fetch'

import 'react-select/dist/react-select.css'

import withFormData from './withFormData'
import withConfig from '../withConfig'
import { objectMap } from '../../common'

class KeywordSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
    }
  }

  componentDidMount() {
    const { config: { elasticsearchConfig } } = this.props

    fetch(`${elasticsearchConfig.url}${elasticsearchConfig.index}/_search`, {
      method: 'post',
      body: JSON.stringify({
        size: 0,
        aggs: {
          keywords: {
            terms: {
              field: 'about.keywords',
              size: 9999,
            },
          },
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then((data) => {
        const options = data.aggregations.keywords.buckets
          .map(keyword => ({ value: keyword.key, label: keyword.key }))
        this.setState({ options })
      })
  }

  render() {
    const {
      name, value, setValue, property, className, title,
      translate, errors, formId, required, description,
    } = this.props
    const { options } = this.state

    return (
      <div
        className={`KeywordSelect ${property || ''} ${className} ${errors.length ? 'hasError' : ''}`.trim()}
        role="group"
        aria-labelledby={`${formId}-${name}-label`}
      >
        <div
          className={`label ${required ? 'required' : ''}`.trim()}
          id={`${formId}-${name}-label`}
        >
          {translate(title)}
          &nbsp;
          {required ? <span className="asterisk" title={translate('Error.requiredField')}>*</span> : ''}
        </div>
        <span className="fieldDescription">
          {(description
          && translate(description)
          !== description)
            ? translate(description)
            : ''}
        </span>
        {errors.map((error, index) => (
          <div className="error" key={index}>
            {translate(`Error.${error.keyword}`, objectMap(error.params, translate))}
          </div>
        ))}
        <Select.Creatable
          name={name}
          value={value.map(value => ({ value, label: value }))}
          options={options}
          onChange={selected => setValue(selected.map(option => option.value))}
          placeholder={`${translate('ClientTemplates.resource_typehead.search')} ${translate(title)}`}
          arrowRenderer={() => <i aria-hidden="true" className="fa fa-chevron-down" />}
          clearable={false}
          promptTextCreator={label => `${translate('create')} "${label}"`}
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
  config: PropTypes.objectOf(PropTypes.any).isRequired,
  setValue: PropTypes.func.isRequired,
  formId: PropTypes.string.isRequired,
  required: PropTypes.bool,
  description: PropTypes.string,
}

KeywordSelect.defaultProps = {
  errors: [],
  property: undefined,
  title: '',
  className: '',
  value: [],
  required: false,
  description: undefined,
}

export default withConfig(withFormData(KeywordSelect))
