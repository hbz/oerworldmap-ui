import React from 'react'

class Icon extends React.Component {
  constructor (props) {
    super(props)

    const icons = {
      'Service': 'desktop',
      'Person': 'user',
      'Organization': 'users',
      'Article': 'comment',
      'Action': 'gears',
      'Concept': 'tag',
      'ConceptScheme': 'sitemap',
      'Event': 'calendar',
      'WebPage': 'book'
    }

    this.state = {
      'icon': icons[props.for] || 'question'
    }
  }

  render () {
    return (
      <i className={'fa fa-fw fa-' + this.state.icon} />
    )
  }
}

export default Icon
