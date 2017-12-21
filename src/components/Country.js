import React from 'react'
import PropTypes from 'prop-types'

import translate from './translate'
import Link from './Link'
import Icon from './Icon'

import '../styles/components/Country.pcss'

const triggerClick = (e) => {
  if (e.keyCode === 32) {
    e.target.click()
  }
}

class Country  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showCountryChampion: true,
      showReports: false,
      showStatistics: false,
    }
  }

  render() {
    return (
      <div className="Country">
        <div className="countryHeader">
          <img
            className="countryFlag"
            src={`https://lipis.github.io/flag-icon-css/flags/4x3/${this.props.iso3166.toLowerCase()}.svg`}
            alt={`Flag for ${this.props.translate(this.props.iso3166)}`}
          />
          <h2>{this.props.translate(this.props.iso3166)}</h2>
        </div>

        {this.props.countryData &&
        this.props.countryData.country_champions &&
        this.props.countryData.country_champions.hits.hits.length > 0 ?
          (
            <div className="countryChampion">
              <h3
                onKeyDown={triggerClick}
                tabIndex="0"
                role="button"
                onClick={() => this.setState({showCountryChampion:!this.state.showCountryChampion})}
              >
                <span>{this.props.translate('Country.countryChampion')}</span>
                &nbsp;<i className={`fa fa-${this.state.showCountryChampion ? 'minus' : 'plus'}`} />
              </h3>

              <div className={`countryChampionContainer ${this.state.showCountryChampion ? '' : 'collapsed'}`}>
                {this.props.countryData.country_champions.hits.hits.map(champion => (
                  <div className="user" key={champion._source.about['@id']}>
                    {champion._source.about.image ? (
                      <Link href={`/resource/${champion._source.about['@id']}`}>
                        <div className="frame">
                          <img
                            src={champion._source.about.image}
                            alt={this.props.translate(champion._source.about.name)}
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
                      <Link href={`/resource/${champion._source.about['@id']}`}>
                        {this.props.translate(champion._source.about.name)}
                      </Link>
                      <br />
                      {champion._source.about.email &&
                        <Link href={`/resource/${champion._source.about['@id']}`}>
                          {champion._source.about.email}
                        </Link>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="countryChampion">
              <h3
                onKeyDown={triggerClick}
                tabIndex="0"
                role="button"
                onClick={() => this.setState({showCountryChampion: !this.state.showCountryChampion})}
              >
                <span>{this.props.translate('Country.countryChampion')}</span>
                &nbsp;<i className={`fa fa-${this.state.showCountryChampion ? 'minus' : 'plus'}`} />
              </h3>

              <div className={`countryChampionContainer ${this.state.showCountryChampion ? '' : 'collapsed'}`}>
                <div className="user">
                  <div className="frame">
                    <i className="fa fa-question" />
                  </div>
                  <div className="text">
                    There is no <Link href="/contribute">contry champion</Link> for Colombia, yet. <a href="mailto:info@oerworldmap.org">Contact us</a> if you can jump in!
                  </div>
                </div>
              </div>
            </div>
          )
        }

        {this.props.countryData &&
        this.props.countryData.reports &&
        this.props.countryData.reports.doc_count > 0 &&
          <div className="countryReports">
            <h3
              onKeyDown={triggerClick}
              tabIndex="0"
              role="button"
              onClick={() => this.setState({showReports:!this.state.showReports})}
            >
              <span>{this.props.translate('Country.reports')}</span>
              &nbsp;<i className={`fa fa-${this.state.showReports ? 'minus' : 'plus'}`} />
            </h3>

            <div className={`resourcesContainer ${this.state.showReports ? '' : 'collapsed'}`}>
              {this.props.countryData.reports.country_reports.hits.hits.map(report => (
                <div className="resource">
                  <i className="fa fa-book" />
                  <div className="text">
                    <Link href={`/resource/${report._source.about['@id']}`}>
                      {report._source.about.name}
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          </div>
        }

        {this.props.countryData &&
        this.props.countryData.by_type &&
        this.props.countryData.by_type.buckets &&
        <div className="statistics">
          <h3
            onKeyDown={triggerClick}
            tabIndex="0"
            role="button"
            onClick={() => this.setState({showStatistics:!this.state.showStatistics})}
          >
            <span>{this.props.translate('Country.statistics')}</span>
            &nbsp;<i className={`fa fa-${this.state.showStatistics ? 'minus' : 'plus'}`} />
          </h3>
          <div className={`statisticsContainer ${this.state.showStatistics ? '' : 'collapsed'}`}>
            <table>
              <tbody>

                {this.props.countryData.by_type.buckets.map(bucket => (
                  <tr key={bucket.key}>
                    <td>{bucket.doc_count}</td>
                    <td>
                      <Icon type={bucket.key} />
                      &nbsp;<Link href={`/country/${this.props.iso3166.toLowerCase()}?filter.about.@type=${bucket.key}`}>{bucket.key}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        }
      </div>
    )}
}

Country.propTypes = {
  countryData: PropTypes.objectOf(PropTypes.any),
  translate: PropTypes.func.isRequired,
  iso3166: PropTypes.string.isRequired
}

Country.defaultProps = {
  countryData: null,
}

export default translate(Country)
