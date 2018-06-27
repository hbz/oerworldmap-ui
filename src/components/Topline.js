import React from 'react'
import PropTypes from 'prop-types'

import urlTemplate from 'url-template'

import withI18n from './withI18n'
import Link from './Link'
import { formatDate } from '../common'

const Topline = ({translate, moment, about}) => {

  return (
    <div className="Topline">

      {about.additionalType &&
        <div className="toplineEntry">
          <ul className="commaSeparatedList">
            {about.additionalType.map(type => (
              <li key={type}>
                <Link href={urlTemplate.parse('/resource/?filter.about.additionalType.@id={@id}').expand(type)}>
                  {translate(type.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      }

      {about.countryChampionFor &&
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
      }

      {about['@type'] === 'Service' &&
      about.provider &&
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
      }

      {about['@type'] === 'Event' &&
      about.startDate &&
      <div className="toplineEntry">
        {formatDate(about.startDate, moment)}
        {about.endDate &&
          <span> - {formatDate(about.endDate, moment)}</span>
        }
      </div>
      }

      {about['@type'] === 'Event' &&
      about.location &&
      about.location.address &&
        <div className="toplineEntry">
          {about.location.address.addressLocality}
          {about.location.address.addressLocality &&
          about.location.address.addressCountry &&
            <span>,&nbsp;</span>
          }
          {translate(about.location.address.addressCountry)}
        </div>
      }

      {about.creator &&
      about['@type'] === 'Article' &&
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
      }

      {about.agent &&
      about['@type'] === 'Action' &&
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
      }

      {about['@type'] === 'Action' &&
      about.isFundedBy &&
      about.isFundedBy.some(grant => grant.isAwardedBy) &&
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
      }

    </div>
  )
}

Topline.propTypes = {
  translate: PropTypes.func.isRequired,
  moment: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withI18n(Topline)
