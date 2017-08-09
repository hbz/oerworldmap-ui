import React from 'react'
import PropTypes from 'prop-types'
import Column from './Column'
import Filters from './Filters'
import Resource from './Resource'
import ItemList from './ItemList'

import '../styles/Columns.pcss'

import resource from '../../test/resources/Resource.json'
import resources from '../../test/resources/resourceTest.json'

const Columns = ({ emitter }) => (
  <aside className="Columns">

    <Column>
      <Filters />
      <ItemList listItems={resources} emitter={emitter} /> 
    </Column>

    <Column>
      <Resource resource={resource} />
    </Column>

  </aside>
)

Columns.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Columns
