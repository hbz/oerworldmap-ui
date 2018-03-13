import React from 'react'
import PropTypes from 'prop-types'
import jsonPointer from 'json-pointer'

let lastUpdate

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
      return !!this.context.getValidationErrors(this.name).length
        || !this.path[0] || this.path[0] === lastUpdate
    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          name={this.name}
          value={this.context.getValue(this.name)}
          setValue={value => (lastUpdate = this.path[0])
            && this.context.setValue(this.name, value)
          }
          errors={this.context.getValidationErrors(this.name)}
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
    path: PropTypes.array
  }

  formComponent.contextTypes = {
    path: PropTypes.array,
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    getValidationErrors: PropTypes.func
  }

  return formComponent

}

export default withFormData
