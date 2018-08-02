import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'
import Icon from './Icon'
import { triggerClick } from '../common'

import '../styles/components/Country.pcss'

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
        this.props.countryData["filter#champions"] &&
        this.props.countryData["filter#champions"]["top_hits#country_champions"] &&
        this.props.countryData["filter#champions"]["top_hits#country_champions"].hits.hits.length > 0 ?
          (
            <div className="countryChampion">
              <h3
                onKeyDown={triggerClick}
                tabIndex="0"
                role="button"
                onClick={() => this.setState({showCountryChampion:!this.state.showCountryChampion})}
              >
                <span>{this.props.translate('CountryIndex.read.countryChampion')}</span>
                &nbsp;<i className={`fa fa-${this.state.showCountryChampion ? 'minus' : 'plus'}`} />
              </h3>

              <div className={`countryChampionContainer ${this.state.showCountryChampion ? '' : 'collapsed'}`}>
                {this.props.countryData["filter#champions"]["top_hits#country_champions"].hits.hits.map(champion => (
                  <div className="user" key={champion._source.about['@id']}>
                    {champion._source.about.image ? (
                      <Link href={`/resource/${champion._source.about['@id']}`}>
                        <div className="frame">
                          <img
                            className={champion._source.about['@type']}
                            src={champion._source.about.image}
                            alt={this.props.translate(champion._source.about.name)}
                            onLoad={e => {
                              if (e.target.complete) {
                                e.target.classList.add('visible')
                              }}}
                          />
                          <Icon type={champion._source.about['@type']} />
                        </div>
                      </Link>
                    ) :(
                      <div className="frame">
                        <Icon type={champion._source.about['@type']} />
                      </div>
                    )}
                    <div className="text">
                      <Link href={`/resource/${champion._source.about['@id']}`}>
                        {this.props.translate(champion._source.about.name)}
                      </Link>
                      <br />
                      {champion._source.about.email &&
                        <a href={`mailto:${champion._source.about.email}`}>
                          {champion._source.about.email}
                        </a>
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
                <span>{this.props.translate('CountryIndex.read.countryChampion')}</span>
                &nbsp;<i className={`fa fa-${this.state.showCountryChampion ? 'minus' : 'plus'}`} />
              </h3>

              <div className={`countryChampionContainer ${this.state.showCountryChampion ? '' : 'collapsed'}`}>
                <div className="user">
                  <div className="frame">
                    <i className="fa fa-question" />
                  </div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{
                      __html: this.props.translate('CountryIndex.read.noChampion', {
                        country: this.props.translate(this.props.iso3166)
                      })
                    }}
                  />
                </div>
              </div>
            </div>
          )
        }

        {this.props.countryData &&
        this.props.countryData["filter#reports"]["top_hits#country_reports"] &&
        this.props.countryData["filter#reports"]["top_hits#country_reports"].hits.hits.length > 0 &&
          <div className="countryReports">
            <h3
              onKeyDown={triggerClick}
              tabIndex="0"
              role="button"
              onClick={() => this.setState({showReports:!this.state.showReports})}
            >
              <span>{this.props.translate('CountryIndex.read.countryReports')}</span>
              &nbsp;<i className={`fa fa-${this.state.showReports ? 'minus' : 'plus'}`} />
            </h3>

            <div className={`resourcesContainer ${this.state.showReports ? '' : 'collapsed'}`}>
              {this.props.countryData["filter#reports"]["top_hits#country_reports"].hits.hits
                .sort((a,b) => a._source.about.dateCreated < b._source.about.dateCreated)
                .map(report => (
                  <div className="resource" key={report._source.about['@id']}>
                    <i className="fa fa-book" />
                    <div className="text">
                      <Link href={`/resource/${report._source.about['@id']}`}>
                        {this.props.translate(report._source.about.name)}
                      </Link>
                    </div>
                  </div>
                ))}

            </div>
          </div>
        }

        {this.props.countryData &&
        this.props.countryData['sterms#by_type'] &&
        this.props.countryData['sterms#by_type'].buckets &&
        <div className="statistics">
          <h3
            onKeyDown={triggerClick}
            tabIndex="0"
            role="button"
            onClick={() => this.setState({showStatistics:!this.state.showStatistics})}
          >
            <span>{this.props.translate('CountryIndex.read.statistics')}</span>
            &nbsp;<i className={`fa fa-${this.state.showStatistics ? 'minus' : 'plus'}`} />
          </h3>
          <div className={`statisticsContainer ${this.state.showStatistics ? '' : 'collapsed'}`}>
            <table>
              <tbody>

                {this.props.countryData['sterms#by_type'].buckets.map(bucket => (
                  <tr key={bucket.key}>
                    <td>{bucket.doc_count}</td>
                    <td>
                      <Icon type={bucket.key} />
                      &nbsp;
                      <Link href={`/country/${this.props.iso3166.toLowerCase()}?filter.about.@type=${bucket.key}`}>
                        {this.props.translate(bucket.key)}
                      </Link>
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

export default withI18n(Country)
