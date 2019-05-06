import React from 'react'
import { storiesOf } from '@storybook/react'

import ConceptBlock from '../src/components/ConceptBlock'
import WithStrings from './WithStrings'

storiesOf('ConceptBlock', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ConceptBlock
        type="Service"
        conceptScheme={require('../src/json/services.json').hasTopConcept}
        linkTemplate="/resource/?filter.about.additionalType.@id={@id}"
      />
    </WithStrings>
  ))