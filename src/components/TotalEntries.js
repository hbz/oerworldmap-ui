import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

const TotalEntries = ({ translate, emitter, className }) => {
  const [total, setTotal] = useState(null)
  useEffect(() => {
    const updateCount = total => setTotal(total)
    emitter.on('updateCount', updateCount)
    return () => emitter.off('updateCount', updateCount)
  }, [])

  return (
    <h3 className={className}>
      {total}
      &nbsp;
      {translate('CountryIndex.read.entriesShown')}
    </h3>
  )
}

TotalEntries.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string,
}

TotalEntries.defaultProps = {
  className: undefined,
}

export default withEmitter(withI18n(TotalEntries))
