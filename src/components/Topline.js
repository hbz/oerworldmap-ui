import React from 'react'
import PropTypes from 'prop-types'

import withI18n from './withI18n'
import Link from './Link'

const Topline = ({translate, about}) => {

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

    </div>
  )
}

/*

TODO
* show provider
* show date and location for events (format: 23.-24. Jun 2018 – Hamburg, Germany)
* show author of articles
* show operator and funded by for projects

*/

Topline.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired
}

export default withI18n(Topline)
