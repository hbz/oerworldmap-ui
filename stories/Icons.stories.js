import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../src/components/Icon'

const icons = [
  'Service',
  'Person',
  'Organization',
  'Article',
  'Action',
  'Concept',
  'ConceptScheme',
  'Event',
  'WebPage',
  'Product',
  'Policy'
]

storiesOf('Icon', module)
  .add('Render', () => (
    <Icon type={icons[Math.floor(Math.random() * icons.length)]} />
  ))
  .add('All variants', () => (
    icons.map(icon => (
      <span>
        <Icon type={icon} />
        &nbsp;
        {icon}
        <br />
      </span>
    ))
  ))
