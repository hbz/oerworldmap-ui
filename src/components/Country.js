import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ReactiveComponent } from '@appbaseio/reactivesearch'

import '../styles/components/Country.pcss'

import Link from './Link'
import { triggerClick } from '../common'
import withI18n from './withI18n'
import Icon from './Icon'

const Country = ({ iso3166, region, translate }) => {
  const [showCountryChampions, setShowCountryChampions] = useState(true)
  const [showRegionalCountryChampion, setshowRegionalCountryChampion] = useState(false)
  const [showReports, setShowReports] = useState(false)

  return (
    <div>
      {iso3166 && (
        <div className="FilterBox Country">
          <img
            className="countryFlag"
            src={`https://lipis.github.io/flag-icon-css/flags/4x3/${iso3166.toLowerCase()}.svg`}
            alt={`Flag for ${translate(iso3166)}`}
          />
          {region ? (
            <>
              <h3>{translate(`${iso3166}.${region}`)}</h3>
              <Link href={`/country/${iso3166}`} className="closePage">
                &times;
              </Link>
            </>
          ) : (
            <>
              <h3>{translate(iso3166)}</h3>
              <Link href="/resource/" className="closePage">
                &times;
              </Link>
            </>
          )}
          <ReactiveComponent
            componentId="countryChampions"
            defaultQuery={() => ({
              _source: ['about.@id', 'about.name', 'about.email', 'about.image', 'about.@type'],
              query: {
                bool: {
                  filter: {
                    term: {
                      'about.countryChampionFor.keyword': iso3166,
                    },
                  },
                },
              },
            })}
            render={({ data }) => (
              <div>
                <h4
                  onKeyDown={triggerClick}
                  tabIndex="0"
                  role="button"
                  onClick={() => setShowCountryChampions(!showCountryChampions)}
                >
                  {translate('CountryIndex.read.countryChampion')}
                  <i aria-hidden="true" className={`fa fa-${showCountryChampions ? 'minus' : 'plus'}`} />
                </h4>
                <div hidden={!showCountryChampions}>
                  {(data.length > 0) ? (
                    data.map(champion => (
                      <div className="countryBlock" key={champion.about['@id']}>

                        {champion.about.image ? (
                          <Link href={`/resource/${champion.about['@id']}`}>
                            <div className="frame">
                              <img
                                className={champion.about['@type']}
                                src={champion.about.image}
                                alt={translate(champion.about.name)}
                                onLoad={(e) => {
                                  if (e.target.complete) {
                                    e.target.classList.add('visible')
                                  }
                                }}
                              />
                              <Icon type={champion.about['@type']} />
                            </div>
                          </Link>
                        ) : (
                          <div className="frame">
                            <Icon type={champion.about['@type']} />
                          </div>
                        )}

                        <div className="text">
                          <Link href={`/resource/${champion.about['@id']}`}>
                            {translate(champion.about.name)}
                          </Link>
                          <br />
                          {champion.about.email && (
                            <a href={`mailto:${champion.about.email}`}>
                              {champion.about.email}
                            </a>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="countryBlock">

                      <div className="frame">
                        <i aria-hidden="true" className="fa fa-user" />
                      </div>
                      <div
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: translate('CountryIndex.read.noChampion', {
                            country: translate(iso3166),
                          }),
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          />
          {region && (
            <ReactiveComponent
              componentId="regionalChampions"
              defaultQuery={() => ({
                _source: ['about.@id', 'about.name', 'about.email', 'about.image', 'about.@type'],
                query: {
                  bool: {
                    filter: {
                      term: {
                        'about.regionalChampionFor.keyword': `${iso3166}.${region}`,
                      },
                    },
                  },
                },
              })}
              render={({ data }) => (
                <div>
                  <h4
                    onKeyDown={triggerClick}
                    tabIndex="0"
                    role="button"
                    onClick={() => setshowRegionalCountryChampion(!showRegionalCountryChampion)}
                  >
                    {translate('CountryIndex.read.regionalChampion')}
                    <i aria-hidden="true" className={`fa fa-${showRegionalCountryChampion ? 'minus' : 'plus'}`} />
                  </h4>
                  <div hidden={!showRegionalCountryChampion}>
                    {(data.length > 0) ? (
                      data.map(champion => (
                        <div className="countryBlock" key={champion.about['@id']}>

                          {champion.about.image ? (
                            <Link href={`/resource/${champion.about['@id']}`}>
                              <div className="frame">
                                <img
                                  className={champion.about['@type']}
                                  src={champion.about.image}
                                  alt={translate(champion.about.name)}
                                  onLoad={(e) => {
                                    if (e.target.complete) {
                                      e.target.classList.add('visible')
                                    }
                                  }}
                                />
                                <Icon type={champion.about['@type']} />
                              </div>
                            </Link>
                          ) : (
                            <div className="frame">
                              <Icon type={champion.about['@type']} />
                            </div>
                          )}

                          <div className="text">
                            <Link href={`/resource/${champion.about['@id']}`}>
                              {translate(champion.about.name)}
                            </Link>
                            <br />
                            {champion.about.email && (
                              <a href={`mailto:${champion.about.email}`}>
                                {champion.about.email}
                              </a>
                            )}
                          </div>
                        </div>
                      ))

                    ) : (
                      <div className="countryBlock">

                        <div className="frame">
                          <i aria-hidden="true" className="fa fa-user" />
                        </div>
                        <div
                          className="text"
                          dangerouslySetInnerHTML={{
                            __html: translate('CountryIndex.read.noChampion', {
                              country: translate(`${iso3166}.${region}`),
                            }),
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            />
          )}
          <ReactiveComponent
            componentId="countryReports "
            defaultQuery={() => ({
              _source: ['about.@id', 'about.name', 'about.@type'],
              query: {
                bool: {
                  filter: {
                    term: {
                      'about.keywords': `countryreport:${iso3166}`,
                    },
                  },
                },
              },
            })}
            render={({ data }) => (
              (data.length > 0) && (
                <div>
                  <h4
                    onKeyDown={triggerClick}
                    tabIndex="0"
                    role="button"
                    onClick={() => setShowReports(!showReports)}
                  >
                    {translate('CountryIndex.read.countryReports')}
                    <i aria-hidden="true" className={`fa fa-${showReports ? 'minus' : 'plus'}`} />
                  </h4>

                  <div hidden={!showReports}>
                    {data
                      .sort((a, b) => a.about.dateCreated < b.about.dateCreated)
                      .map(report => (
                        <div className="countryBlock" key={report.about['@id']}>
                          <div className="frame">
                            <i aria-hidden="true" className="fa fa-book" />
                          </div>
                          <div className="text">
                            <Link href={`/resource/${report.about['@id']}`}>
                              {translate(report.about.name)}
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          />
        </div>
      )}
    </div>
  )
}

Country.propTypes = {
  translate: PropTypes.func.isRequired,
  iso3166: PropTypes.string.isRequired,
  region: PropTypes.string,
}

Country.defaultProps = {
  region: undefined,
}

export default withI18n(Country)
