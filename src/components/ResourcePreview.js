import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'

import Icon from './Icon'
import Link from './Link'
import ResourceImage from './ResourceImage'

import '../styles/components/ResourcePreview.pcss'

import withI18n from './withI18n'

const ResourcePreview = ({ translate, about }) => (
  <div className="ResourcePreview">

    <ResourceImage about={about} />

    <div className="previewContent">

      <div className="previewHeader">

        <div className="previewTypes">
          <Icon type={about['@type']} />
          &nbsp;&nbsp;
          <Link href={`/resource/?filter.about.@type=${about['@type']}&size=20`}>{translate(about['@type'])}</Link>
          {about.additionalType && (
            <React.Fragment>
              &nbsp;(
              {about.additionalType.map((type, i) => (
                <React.Fragment key={type['@id']}>
                  {!!i && ', '}
                  <Link href={urlTemplate.parse('/resource/?filter.about.additionalType.@id={@id}').expand(type)}>
                    {translate(type.name)}
                  </Link>
                </React.Fragment>
              ))}
              )
            </React.Fragment>
          )}
        </div>

      </div>

      <div>
        <Link className="previewTitle" href={`/resource/${about['@id']}`}>
          {translate(about.name) || about['@id']}
          {about.alternateName
            ? ` (${translate(about.alternateName)})`
            : ''}
        </Link>

        {about.location
        && about.location.filter(location => !!location.address).map((location, index) => (
          <div className="previewLocation" key={index}>
            {location.address.addressCountry && (
              <Link href={`/country/${location.address.addressCountry}`}>
                {translate(location.address.addressCountry)}
              </Link>
            )}
            {location.address.addressRegion && (
              <React.Fragment>
                ,&nbsp;
                <Link
                  href={`/resource/?filter.feature.properties.location.address.addressRegion=${location.address.addressRegion}`}
                >
                  {translate(location.address.addressRegion)}
                </Link>
              </React.Fragment>
            )}
          </div>
        ))}
      </div>
    </div>

  </div>
)

ResourcePreview.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
}

ResourcePreview.defaultProps = {
}

export default withI18n(ResourcePreview)
