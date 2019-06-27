import React from 'react'
import { storiesOf } from '@storybook/react'

import Columns from '../src/components/Columns'
import WithStrings from './WithStrings'

storiesOf('Columns', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Columns>
        <div style={{maxWidth: "250px", padding: "20px"}}>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptas, eius numquam
          ducimus eaque asperiores nihil ratione quae,
          corrupti quas veniam eveniet! Officia earum quod,
          natus id accusamus repudiandae neque maxime.
        </div>
      </Columns>

    </WithStrings>
  ))