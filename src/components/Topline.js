import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'

const Topline = ({translate, moment, about}) => {

  return (
    <div className="Topline">

      {about.countryChampionFor &&
        <span>
          {about.countryChampionFor.map(country => (
            <span key={country}>
              {translate(`${about['@type']}.countryChampionFor`)}{' '}
              <Link href={`/country/${country}`}>{translate(country)}</Link>
            </span>
          ))}
        </span>
      }

      {about['@type'] === 'Service' &&
      about.provider &&
      about.provider.map(provider => (
        <span key={provider['@id']}>{translate('Service.provider')}: <Link href={`/resource/${provider['@id']}`}>{translate(provider.name)}</Link></span>
      ))
      }

      {about['@type'] === 'Event' &&
        <span>
          {about.startDate &&
          about.startDate.includes('T00:00:00')
            ? moment(about.startDate).format('LLL')
            : moment(about.startDate).format('LL')}
          {about.endDate && ` - ${
            about.endDate.includes('T00:00:00')
              ? moment(about.endDate).format('LLL')
              : moment(about.endDate).format('LL')
          }`}
        </span>
      }

      {about.location &&
      about.location.address &&
        <span>{about.location.address.addressLocality && about.location.address.addressLocality}, {about.location.address.addressCountry && translate(about.location.address.addressCountry)}</span>
      }

      {about.creator &&
      about['@type'] === 'Article' &&
      about.creator.map(creator => (
        <span key={creator['@id']}>{translate('ResourceIndex.Article.subtitle.contributedBy')} <Link href={`/resource/${creator['@id']}`}>{translate(creator.name)}</Link></span>
      ))
      }

      {about.agent &&
      about.agent.map(agent => (
        <span>{translate('Action.agent')}: <Link  href={`/resource/${agent['@id']}`}>{translate(agent.name)}</Link></span>
      ))
      }

      {about['@type'] === 'Action' &&
      about.isFundedBy &&
      about.isFundedBy.some(grant => grant.isAwardedBy) &&
      [].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy)).map(awarded => (
        <span>{translate('Action.isFundedBy')}: <Link  href={`/resource/${awarded['@id']}`}>{translate(awarded.name)}</Link></span>
      ))
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
