import React from 'react'
import PropTypes from 'prop-types'


import withI18n from './withI18n'
import Link from './Link'
import { formatDate } from '../common'

import '../styles/components/Topline.pcss'

const Topline = ({translate, moment, about, className}) => {

  return (
    <div className={`Topline ${className}`}>

      {about.countryChampionFor &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span>{translate(`${about['@type']}.countryChampionFor`)}:&nbsp;</span>
            <ul className="commaSeparatedList">
              {about.countryChampionFor.map(country => (
                <li key={country}>
                  <Link href={`/country/${country}`}>{translate(country)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      }

      {about['@type'] === 'Service' &&
      about.provider &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span>{translate('Service.provider')}:&nbsp;</span>
            <ul className="commaSeparatedList">
              {about.provider.map(provider => (
                <li key={provider['@id']}>
                  <Link href={`/resource/${provider['@id']}`}>
                    {translate(provider.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      }

      {about['@type'] === 'Event' &&
      about.startDate &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span className="showInTooltip">{translate('Date')}:&nbsp;</span>
            <ul className="commaSeparatedList">
              <li>
                {formatDate(about.startDate, moment)}
                {about.endDate &&
                  <span> - {formatDate(about.endDate, moment)}</span>
                }
              </li>
            </ul>
          </div>
        </React.Fragment>
      }

      {about['@type'] === 'Event' &&
      about.location &&
      about.location.address &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span className="showInTooltip">{translate('Location:')}&nbsp;</span>
            <ul className="commaSeparatedList">
              <li>
                {about.location.address.addressLocality}
                {about.location.address.addressLocality &&
                about.location.address.addressCountry &&
                  <span>,&nbsp;</span>
                }
                {translate(about.location.address.addressCountry)}
              </li>
            </ul>
          </div>
        </React.Fragment>
      }

      {about.creator &&
      about['@type'] === 'Article' &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span>{translate('ResourceIndex.Article.subtitle.contributedBy')}:&nbsp;</span>
            <ul className="commaSeparatedList">
              {about.creator.map(creator => (
                <li key={creator['@id']}>
                  <Link href={`/resource/${creator['@id']}`}>
                    {translate(creator.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      }

      {about.agent &&
      about['@type'] === 'Action' &&
        <React.Fragment>
          <hr />
          <div className="toplineEntry">
            <span>{translate('Action.agent')}:&nbsp;</span>
            <ul className="commaSeparatedList">
              {about.agent.map(agent => (
                <li key={agent['@id']}>
                  <Link href={`/resource/${agent['@id']}`}>
                    {translate(agent.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      }

      {about['@type'] === 'Action' &&
      about.isFundedBy &&
      about.isFundedBy.some(grant => grant.isAwardedBy) &&
      <React.Fragment>
        <hr />
        <div className="toplineEntry">
          <span>{translate('Action.isFundedBy')}:&nbsp;</span>
          <ul className="commaSeparatedList">
            {[].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy)).map(awarded => (
              <li key={awarded['@id']}>
                <Link href={`/resource/${awarded['@id']}`}>
                  {translate(awarded.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
      }

      {about.inLanguage &&
        <div className="showInTooltip">
          <hr />
          <div className="toplineEntry">
            <span>{translate('availableLanguage')}:&nbsp;</span>
            <ul className="commaSeparatedList">
              {about.inLanguage.map(lang => (
                <li key={lang}>
                  <Link href={`/resource/?filter.about.inLanguage=${lang}`}>
                    {translate(lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }

      {about.keywords &&
        <div className="showInTooltip">
          <hr />
          <div className="toplineEntry">
            <span>{translate('Article.keywords')}:&nbsp;</span>
            <ul className="spaceSeparatedList">
              {about.keywords.sort((a,b) => a > b).map(keyword => (
                <li key={keyword}>
                  <Link href={`/resource/?filter.about.keywords=${keyword.toLowerCase()}`}>
                    {keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }

    </div>
  )
}

Topline.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  className: PropTypes.string
}

Topline.defaultProps = {
  className: ''
}

export default withI18n(Topline)
