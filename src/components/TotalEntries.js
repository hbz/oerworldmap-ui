import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

const TotalEntries = ({ translate, emitter }) => {
  const [total, setTotal] = useState(null)
  useEffect(() => {
    emitter.on('updateCount', (total) => {
      setTotal(total)
    })
  }, [])

  return (
    <h3>
      {total}
      &nbsp;
      {translate('CountryIndex.read.entriesShown')}
    </h3>
  )
}

TotalEntries.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
}

export default withEmitter(withI18n(TotalEntries))
