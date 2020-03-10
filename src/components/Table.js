import React from 'react'
import PropTypes from 'prop-types'
import withI18n from './withI18n'
import Link from './Link'
import urlTemplate from 'url-template'

const Table = ({
  translate, tableItems, linkTemplate, className
}) => (
  <table className={`Table BasicTable ${className}`}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Primary Sector</th>
      </tr>
    </thead>
    <tbody>
      {tableItems.map(tableItem => (
        <tr
          id={tableItem['@id']}
          key={tableItem['@id']}
        >
          <td className="tableItem-name">
            <Link href={urlTemplate.parse(linkTemplate).expand(tableItem)}>
              {translate(tableItem.name) || translate(tableItem['@id'])}
            </Link>
          </td>
          <td>{tableItem['@type']}</td>
          <td>{tableItem.primarySector && (translate(tableItem.primarySector[0].name) || translate(tableItem.primarySector[0]['@id']))}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

Table.propTypes = {
  translate: PropTypes.func.isRequired,
  tableItems: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTemplate: PropTypes.string,
  className: PropTypes.string,
}

Table.defaultProps = {
  linkTemplate: '/resource/{@id}',
  className: '',
}


export default withI18n(Table)
