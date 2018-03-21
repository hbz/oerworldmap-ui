import React from 'react'
import PropTypes from 'prop-types'
import jsonPointer from 'json-pointer'
import _ from 'lodash'

const prune = (current) => {
  _.forOwn(current, (value, key) => {
    if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
      (_.isString(value) && _.isEmpty(value)) ||
      (_.isObject(value) && _.isEmpty(prune(value)))) {
      delete current[key]
    }
  })
  if (_.isArray(current)) {
    _.pull(current, undefined)
  }
  return current
}

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formData: props.data,
      formErrors: []
    }
    this.lastUpdate = ""
  }

  getChildContext() {
    return {
      setValue: this.setValue.bind(this),
      getValue: this.getValue.bind(this),
      getValidationErrors: this.getValidationErrors.bind(this),
      shouldFormComponentUpdate: this.shouldFormComponentUpdate.bind(this),
      shouldFormComponentFocus: this.shouldFormComponentFocus.bind(this)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      formData: nextProps.data,
      formErrors: []
    })
  }

  setValue(name, value) {
    this.setState(prevState => {
      jsonPointer.set(prevState.formData, name, value)
      this.lastUpdate = name
      return {
        formData: prune(prevState.formData)
      }
    })
  }

  getValue(name) {
    return jsonPointer.has(this.state.formData, name)
      ? jsonPointer.get(this.state.formData, name)
      : undefined
  }

  getValidationErrors(name) {
    return this.state.formErrors.filter(error => error.keyword === 'required'
      ? `${error.dataPath}/${error.params.missingProperty}` === name
      : error.dataPath === name
    )
  }

  shouldFormComponentUpdate(name) {
    return !name
      || this.lastUpdate.startsWith(name)
      || name.startsWith(this.lastUpdate)
      || this.getValidationErrors(name).length
  }

  shouldFormComponentFocus(name) {
    return this.lastUpdate === name
  }

  render() {
    return (
      <form
        className="Form"
        action={this.props.action}
        method={this.props.method}
        onSubmit={e => {
          e.preventDefault()
          this.lastUpdate = ""
          this.props.validate(this.state.formData)
            ? this.props.onSubmit(this.state.formData)
            : this.setState(
              {formErrors: this.props.validate.errors},
              () => this.props.onError(this.props.validate.errors)
            )
        }}
      >
        {this.props.children}
      </form>
    )
  }

}

Form.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  validate: PropTypes.func,
  children: PropTypes.node.isRequired
}

Form.defaultProps = {
  data: {},
  action: '',
  method: 'get',
  onSubmit: formData => console.log(formData),
  onError: formErrors => console.error(formErrors),
  validate: () => true
}

Form.childContextTypes = {
  setValue: PropTypes.func,
  getValue: PropTypes.func,
  getValidationErrors: PropTypes.func,
  shouldFormComponentUpdate: PropTypes.func,
  shouldFormComponentFocus: PropTypes.func
}

export default Form
