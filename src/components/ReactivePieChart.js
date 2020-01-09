/* global window */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import withEmitter from './withEmitter'

const ReactivePieChart = ({
  translate, emitter, dataField, title, componentId,
}) => {
  const id = dataField.replace('@', '').replace(/\./g, '-')

  const config = {
    type: 'donut',
    unload: true,
    onclick: (e) => {
      const url = new URL(window.location.href)
      url.searchParams.set(componentId, `["${e.id}"]`)
      window.location = url.href
    },
  }

  useEffect(() => {
    const c3 = require('c3')
    emitter.on('newAggregations', ({ buckets, dataField: newDf }) => {
      if (newDf === dataField) {
        const columns = buckets.map(({ key, doc_count: dc }) => [key, dc])

        const names = {}
        buckets.forEach((b) => {
          names[b.key] = translate(b.key)
        })

        c3.generate({
          bindto: `#${id}`,
          data: {
            ...config,
            columns,
            names,
          },
          pie: {
            label: {
              format: value => translate(value),
            },
          },
        })
      }
    })
  }, [])

  return (
    <div className="ReactivePieChart">
      <h2>{title}</h2>
      <div id={id} />
    </div>
  )
}

ReactivePieChart.propTypes = {
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
  dataField: PropTypes.string.isRequired,
  componentId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default withEmitter(withI18n(ReactivePieChart))
