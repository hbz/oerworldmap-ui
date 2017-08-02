import React from 'react'
import Column from './Column'
import Filters from './Filters'
import Resource from './Resource'

import '../styles/Columns.pcss'

import resource from '../../test/resources/Resource.json'

const Columns = () => (
  <aside className="Columns">

    <Column>
      <Filters />
    </Column>

    <Column>
      <Resource resource={resource} />
    </Column>

  </aside>
)

export default Columns
