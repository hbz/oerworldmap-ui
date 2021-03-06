/* global window */
/* global fetch */
import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'

import '../styles/components/Export.pcss'

const CsvFields = [
  '/@id',
  '/@type',
  '/name/.*',
  '/description/.*',
  '/provider/\\d+/name/en',
  '/url',
  '/additionalType/\\d+/name/en',
  '/primarySector/\\d+/name/en',
  '/startDate',
  '/endDate',
  '/startTime',
  '/endTime',
  '/agent/\\d+/name/en',
  '/location/\\d+/address/.*',
  '/availableChannel/\\d+/serviceUrl',
]

const Export = ({ _links, translate }) => (
  <div className="Export">
    <h2>{translate('export.export')}</h2>
    <div className="exportContent">
      {
        _links.refs.map(link => (link.type === 'text/csv' ? (
          <button
            key={link.uri}
            className="btn exportBtn"
            type="button"
            onClick={() => {
              fetch(link.uri, {
                headers: { 'X-CSV-HEADERS': CsvFields.join(',') },
              }).then(res => res.blob())
                .then((blob) => {
                  const file = window.URL.createObjectURL(blob)
                  window.location.assign(file)
                })
            }}
          >
            {translate(link.type)}
          </button>
        ) : (
          <a key={link.uri} className="btn" href={link.uri}>
            {translate(link.type)}
          </a>
        )))
      }
    </div>
  </div>
)

Export.propTypes = {
  _links: PropTypes.objectOf(PropTypes.any).isRequired,
  translate: PropTypes.func.isRequired,
}

export default withI18n(Export)
