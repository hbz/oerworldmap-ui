import React from 'react'

import '../styles/Filters.pcss'

const Filters = () => (
  <div className="Filters">
    <form action="/resource/">
      <input type="search" name="q" />
      <input type="submit" />
    </form>
  </div>
)

export default Filters
