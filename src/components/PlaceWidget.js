import React from 'react'

import { Fieldset } from 'json-pointer-form'

import { debounce } from '../common'

class PlaceWidget extends Fieldset {

  constructor(props) {
    super(props)
    this.state.search = ""
    this.state.suggestions = []
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.select = this.select.bind(this)
  }

  componentWillMount() {
    this.delayedCallback = debounce(function(event) {
      this.setState({search: event.target.value})
      if (event.target.value) {
        this.props.getOptions(event.target.value, {properties: {mapzen: true}}, (result) => {
          this.setState( { suggestions: result.member.map(member => member.about) } )
        })
      } else {
        this.setState( { suggestions: [] } )
      }
    }.bind(this), 500)
  }

  handleFilterChange(event) {
    event.persist()
    this.setState({search: event.target.value})
    this.delayedCallback(event)
  }

  select(suggestion) {
    this.props.handleChange({
      target: {
        name: this.props.name,
        value: suggestion,
        type: "custom"
      }
    })
    this.setState( { search: '', suggestions: [] } )
  }

  render() {
    return (
      <div>
        <div className="filterContainer">
          <input
            type="text"
            className="filter"
            onChange={this.handleFilterChange}
            value={this.state.search}
          />
          <ul>
            {this.state.suggestions.map(suggestion => (
              <li key={suggestion['@id']}>
                <input
                  name={this.props.name}
                  type="checkbox"
                  value={suggestion['@id']}
                  id={suggestion['@id']}
                  onChange={() => this.select(suggestion)}
                />
                <label htmlFor={suggestion['@id']}>
                  {this.props.getLabel(suggestion)}
                </label>
              </li>
            ))}
          </ul>
        </div>
        {this.getChildren()}
      </div>
    )
  }

}

export default PlaceWidget
