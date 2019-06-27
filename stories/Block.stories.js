import React from 'react'
import { storiesOf } from '@storybook/react'

import Block from '../src/components/Block'
import WithStrings from './WithStrings'

storiesOf('Block', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Block title="Title">
        Test
      </Block>
    </WithStrings>
  ))
  .add('Collapsible', () => (
    <WithStrings lang="en">
      <Block title="Title" collapsible>
        Test
      </Block>
    </WithStrings>
  ))