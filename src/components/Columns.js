import React from 'react'
import Column from './Column'
import Filters from './Filters'
import Resource from './Resource'
import ItemList from './ItemList'

import '../styles/Columns.pcss'

import resource from '../../test/resources/Resource.json'
import resources from '../../test/resources/resourceTest.json'

const Columns = () => (
  <aside className="Columns">

    <Column>
      <Filters />
      <ItemList listItems={resources} /> 
    </Column>

    <Column>
      <Resource resource={resource} />
    </Column>

  </aside>
)

export default Columns
