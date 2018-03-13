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

    if (schema.remote) {
      if ('properties' in schema) {
        return <RemoteSelect schema={schema} translate={translate} />
      }
    }

    const className = schema._display ? schema._display.className : undefined

    switch (schema.type) {
    case 'string':
      return schema.enum
        ? (
          <DropdownSelect
            options={schema.enum}
            title={schema.title}
            description={schema.description}
            className={className}
            translate={translate}
          />
        )
        : schema._display && schema._display.rows > 1
          ? (
            <Textarea
              title={schema.title}
              description={schema.description}
              className={className}
              translate={translate}
            />
          )
          : (
            <Input
              type="text"
              title={schema.title}
              description={schema.description}
              className={className}
              translate={translate}
            />
          )
    case 'integer':
    case 'number':
      return (
        <Input
          type="number"
          title={schema.title}
          description={schema.description}
          className={className}
          translate={translate}
        />
      )
    case 'boolean':
      return (
        <Input
          type="checkbox"
          title={schema.title}
          description={schema.description}
          className={className}
          translate={translate}
        />
      )
    case 'array':
      return (
        <List
          title={schema.title}
          description={schema.description}
          className={className}
          translate={translate}
        >
          {this.getComponent(schema.items)}
        </List>
      )
    case 'object':
      return (
        <Fieldset
          title={schema.title}
          description={schema.description}
          className={className}
          translate={translate}
        >
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
      return (
        <Input
          type="text"
          title={schema.title}
          description={schema.description}
          className={className}
          translate={translate}
        />
      )
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
