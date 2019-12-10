import React, { useEffect, useState } from 'react'

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
      {translate('entries found')}
    </h3>
  )
}

export default withEmitter(withI18n(TotalEntries))
