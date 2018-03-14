import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from './Fieldset'
import Input from './Input'
import List from './List'
import DropdownSelect from './DropdownSelect'
import RemoteSelect from './RemoteSelect'
import Textarea from './Textarea'

import withI18n from '../withI18n'

class Builder extends React.Component {

  constructor(props) {
    super(props)
    this.getComponent = this.getComponent.bind(this)
    this.formComponents = this.getComponent(props.schema)
  }

  getComponent(schema) {

    const {translate} = this.props
    const className = schema._display ? schema._display.className : undefined

    // FIXME: not rendering form components for hidden fields due to performance issues
    // when handling long lists. This works because the corresponding data is still present
    // in the underlying formdata; non-js clients will send incomplete data, though.
    if (className === 'hidden') {
      return <div className="hidden" />
    }

    if (schema.remote) {
      if ('properties' in schema) {
        return <RemoteSelect schema={schema} translate={translate} />
      }
    }

    const props = {
      title: schema.title,
      description: schema.description,
      className,
      translate
    }

    switch (schema.type) {
    case 'string':
      return schema.enum
        ? <DropdownSelect {...props} options={schema.enum} />
        : schema._display && schema._display.rows > 1
          ? <Textarea {...props} />
          : <Input {...props} type="text" />
    case 'integer':
    case 'number':
      return <Input {...props} type="number" />
    case 'boolean':
      return <Input {...props} type="checkbox" />
    case 'array':
      return <List {...props}>{this.getComponent(schema.items)}</List>
    case 'object':
      return (
        <Fieldset {...props}>
          {Object.keys(schema.properties).map((property) => React.cloneElement(
            this.getComponent(schema.properties[property]), {
              property, key: property
            }
          ))}
        </Fieldset>
      )
    case 'null':
    default:
      console.warn('Could not determine form component for', schema)
      return <Input {...props} type="text" />
    }
  }

  render() {
    return (
      <div className="Builder">
        {this.formComponents}
      </div>
    )
  }

}

Builder.propTypes = {
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired
}

export default withI18n(Builder)
