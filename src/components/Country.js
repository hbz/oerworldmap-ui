/* global window */
import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'
import Icon from './Icon'
import FullModal from './FullModal'
import withEmitter from './withEmitter'
import { triggerClick,getURL } from '../common'
import '../styles/components/Country.pcss'

class Country  extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showCountryChampion: true,
      showReports: false,
      showStatistics: false,
    }
    this.listenMessage = this.listenMessage.bind(this)
  }

  componentDidMount() {
    window.addEventListener("message",  this.listenMessage, false)
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.listenMessage)
  }

  listenMessage(msg) {
    const { emitter, iso3166 } = this.props
    if (msg.data.filter && msg.data.key) {
      this.setState({showStatistics:false})
      emitter.emit('navigate', getURL({
        path: `/country/${iso3166}`,
        params: {
          [`filter.${msg.data.filter}`] : msg.data.key
        }
      }))
    }
  }

  render() {
    const { countryData, iso3166, translate } = this.props
    const { showCountryChampion, showReports, showStatistics } = this.state

    return (
      <React.Fragment>
        <div className="Country">
          <div className="countryHeader">
            <img
              className="countryFlag"
              src={`https://lipis.github.io/flag-icon-css/flags/4x3/${iso3166.toLowerCase()}.svg`}
              alt={`Flag for ${translate(iso3166)}`}
            />
            <h2>{translate(iso3166)}</h2>
          </div>

          {countryData &&
          countryData["filter#champions"] &&
          countryData["filter#champions"]["top_hits#country_champions"] &&
          countryData["filter#champions"]["top_hits#country_champions"].hits.hits.length > 0 ?
            (
              <div className="countryChampion">
                <h3
                  onKeyDown={triggerClick}
                  tabIndex="0"
                  role="button"
                  onClick={() => this.setState({showCountryChampion:!showCountryChampion})}
                >
                  <span>{translate('CountryIndex.read.countryChampion')}</span>
                  &nbsp;
                  <i aria-hidden="true" className={`fa fa-${showCountryChampion ? 'minus' : 'plus'}`} />
                </h3>

                <div className={`countryChampionContainer ${showCountryChampion ? '' : 'collapsed'}`}>
                  {countryData["filter#champions"]["top_hits#country_champions"].hits.hits.map(champion => (
                    <div className="user" key={champion._source.about['@id']}>
                      {champion._source.about.image ? (
                        <Link href={`/resource/${champion._source.about['@id']}`}>
                          <div className="frame">
                            <img
                              className={champion._source.about['@type']}
                              src={champion._source.about.image}
                              alt={translate(champion._source.about.name)}
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
                          {translate(champion._source.about.name)}
                        </Link>
                        <br />
                        {champion._source.about.email && (
                          <a href={`mailto:${champion._source.about.email}`}>
                            {champion._source.about.email}
                          </a>
                        )}
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
                  onClick={() => this.setState({showCountryChampion: !showCountryChampion})}
                >
                  <span>{translate('CountryIndex.read.countryChampion')}</span>
                  &nbsp;
                  <i aria-hidden="true" className={`fa fa-${showCountryChampion ? 'minus' : 'plus'}`} />
                </h3>

                <div className={`countryChampionContainer ${showCountryChampion ? '' : 'collapsed'}`}>
                  <div className="user">
                    <div className="frame">
                      <i aria-hidden="true" className="fa fa-user" />
                    </div>
                    <div
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: translate('CountryIndex.read.noChampion', {
                          country: translate(iso3166)
                        })
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          }

          {countryData &&
          countryData["filter#reports"]["top_hits#country_reports"] &&
          countryData["filter#reports"]["top_hits#country_reports"].hits.hits.length > 0 && (
            <div className="countryReports">
              <h3
                onKeyDown={triggerClick}
                tabIndex="0"
                role="button"
                onClick={() => this.setState({showReports:!showReports})}
              >
                <span>{translate('CountryIndex.read.countryReports')}</span>
                &nbsp;
                <i aria-hidden="true" className={`fa fa-${showReports ? 'minus' : 'plus'}`} />
              </h3>

              <div className={`resourcesContainer ${showReports ? '' : 'collapsed'}`}>
                {countryData["filter#reports"]["top_hits#country_reports"].hits.hits
                  .sort((a,b) => a._source.about.dateCreated < b._source.about.dateCreated)
                  .map(report => (
                    <div className="resource" key={report._source.about['@id']}>
                      <i aria-hidden="true" className="fa fa-book" />
                      <div className="text">
                        <Link href={`/resource/${report._source.about['@id']}`}>
                          {translate(report._source.about.name)}
                        </Link>
                      </div>
                    </div>
                  ))}

              </div>
            </div>
          )}

          {countryData &&
          countryData['sterms#by_type'] &&
          countryData['sterms#by_type'].buckets && (
            <div className="statistics">
              <h3
                onKeyDown={triggerClick}
                tabIndex="0"
                role="button"
                onClick={() => this.setState({showStatistics:!showStatistics})}
              >
                <span>{translate('CountryIndex.read.statistics')}</span>
                &nbsp;
                <i
                  onClick={() => this.setState({showStatistics: false})}
                  aria-hidden="true"
                  className={`fa fa-${showStatistics ? 'minus' : 'plus'}`}
                />
              </h3>
            </div>
          )}

          <Link href="/resource/" className="closePage">
            &times;
          </Link>

        </div>
        <FullModal className={`countryStatistics${showStatistics ? '' : ' hidden'}`}>
          <span
            className="closeModal"
            role="presentation"
            onClick={() => this.setState({showStatistics: false})}
          >
            ×
          </span>
          <iframe
            title="countryStatistics"
            src={`https://oerworldmap.org/kibana/app/kibana#/dashboard/026c73e0-0444-11e9-b10a-2128e9354d61?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'31e495b0-ad16-11e8-bc1a-bd36147d8400',key:feature.properties.location.address.addressCountry,negate:!f,params:(query:${iso3166},type:phrase),type:phrase,value:Germany),query:(match:(feature.properties.location.address.addressCountry:(query:${iso3166},type:phrase))))))`}
            height="800"
            width="100%"
          />
        </FullModal>
      </React.Fragment>
    )}
}

Country.propTypes = {
  countryData: PropTypes.objectOf(PropTypes.any),
  translate: PropTypes.func.isRequired,
  iso3166: PropTypes.string.isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired
}

Country.defaultProps = {
  countryData: null,
}

export default withEmitter(withI18n(Country))
