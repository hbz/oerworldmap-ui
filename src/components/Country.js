/* global document */

import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Link from './Link'
import Icon from './Icon'

import '../styles/Country.pcss'

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

const hideContainer = (header, container) => {

  const icon = header.target.querySelector('i')
    || (header.target.classList.contains('fa')
      ? header.target
      : header.target.parentElement.querySelector('i'))

  icon.classList.toggle('fa-plus')
  icon.classList.toggle('fa-minus')

  const el = document.querySelector(`.${container}`)
  el.classList.toggle('collapsed')
}

const Country = ({iso3166, countryData, translate}) => (

  <div className="Country">
    <h2>{translate(iso3166)}</h2>

    {countryData &&
    countryData.country_champions &&
    countryData.country_champions.hits.hits.length > 0 &&
    <div className="countryChampion">
      <h3
        onKeyDown={triggerClick}
        tabIndex="0"
        role="button"
        onClick={(e) => hideContainer(e,'countryChampionContainer')}
      >
        <span>Country Champion</span> <i className="fa fa-minus" />
      </h3>

      <div className="countryChampionContainer">
        {countryData.country_champions.hits.hits.map(champion => (
          <div className="user" key={champion._source.about['@id']}>
            {champion._source.about.image ? (
              <Link to={`/resource/${champion._source.about['@id']}`}>
                <div className="frame">
                  <img
                    src={champion._source.about.image}
                    alt={translate(champion._source.about.name)}
                    onLoad={e => {
                      if (e.target.complete) {
                        e.target.classList.add('visible')
                      }}}
                  />
                  <Icon type={champion._type} />
                </div>
              </Link>
            ) :(
              <div className="frame">
                <Icon type={champion._type} />
              </div>
            )
            }
            <div className="text">
              <Link to={`/resource/${champion._source.about['@id']}`}>
                {translate(champion._source.about.name)}
              </Link>
              <br />
              <Link to={`/resource/${champion._source.about['@id']}`}>
                {champion._source.about.email}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    }

    {countryData &&
    countryData.reports &&
    countryData.reports.doc_count > 0 &&
      <div className="countryReports">
        <h3
          onKeyDown={triggerClick}
          tabIndex="0"
          role="button"
          onClick={(e) => hideContainer(e,'resourcesContainer')}
        >
          <span>Country Reports</span> <i className="fa fa-minus" />
        </h3>
        <div className="resourcesContainer">

          {countryData.reports.country_reports.hits.hits.map(report => (
            <div className="resource">
              <i className="fa fa-book" />
              <div className="text">
                <Link to={`/r   esource/${report._source.about['@id']}`}>
                  {report._source.about.name}
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    }

    {countryData &&
    countryData.by_type &&
    countryData.by_type.buckets &&
    <div className="statistics">
      <h3
        onKeyDown={triggerClick}
        tabIndex="0"
        role="button"
        onClick={(e) => hideContainer(e,'statisticsContainer')}
      >
        <span>Statistics</span> <i className="fa fa-minus" />
      </h3>
      <div className="statisticsContainer">
        <table>
          <tbody>

            {countryData.by_type.buckets.map(bucket => (
              <tr key={bucket.key}>
                <td>{bucket.doc_count}</td>
                <td>
                  <Icon type={bucket.key} />
                  &nbsp;<Link to={`/country/${countryData.key.toLowerCase()}?filter.about.@type=${bucket.key}`}>{bucket.key}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    }

  </div>
)

Country.propTypes = {
  countryData: PropTypes.objectOf(PropTypes.any),
  translate: PropTypes.func.isRequired,
  iso3166: PropTypes.string.isRequired
}

Country.defaultProps = {
  countryData: null,
}

export default translate(Country)
