import React from 'react'
import PropTypes from 'prop-types'
import jsonPointer from 'json-pointer'
import { isEmpty } from 'lodash'

const withFormData = (BaseComponent) => {

  const formComponent = class FormComponent extends React.Component {

    constructor(props, context) {
      super(props)
      const parents = context.path || []
      this.path = props.property != null
        ? [...parents, props.property]
        : parents
      this.name = jsonPointer.compile(this.path)
    }

    getChildContext() {
      return {
        path: this.path
      }
    }

    shouldComponentUpdate() {
      return this.context.shouldFormComponentUpdate(this.name)
    }

    render() {
      return (
        <BaseComponent
          name={this.name}
          value={this.context.getValue(this.name)}
          empty={this.context.getValue(this.name) === undefined}
          formId={this.context.formId}
          setValue={value => this.context.setValue(this.name, value)}
          errors={this.context.getValidationErrors(this.name)}
          shouldFormComponentFocus={this.context.shouldFormComponentFocus(this.name)}
          {...this.props}
        />
      )
    }

  }

  formComponent.propTypes = {
    property: PropTypes.string
  }

  formComponent.defaultProps = {
    property: undefined
  }

  formComponent.childContextTypes = {
    path: PropTypes.arrayOf(PropTypes.any)
  }

  formComponent.contextTypes = {
    path: PropTypes.arrayOf(PropTypes.any),
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    getValidationErrors: PropTypes.func,
    shouldFormComponentUpdate: PropTypes.func,
    shouldFormComponentFocus: PropTypes.func,
    formId: PropTypes.string
  }

  return formComponent

}

export default withFormData
