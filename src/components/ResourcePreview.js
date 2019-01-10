import React from 'react'
import PropTypes from 'prop-types'
import urlTemplate from 'url-template'

import Icon from './Icon'
import Link from './Link'
import ResourceImage from './ResourceImage'

import '../styles/components/ResourcePreview.pcss'

import withI18n from './withI18n'

const ResourcePreview = ({ translate, about }) => {

  return (
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
                  <React.Fragment key={type}>
                    {!!i && ", "}
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

          {about.location &&
          about.location.address && (
            <div className="previewLocation">
              {about.location.address.addressCountry && (
                <Link href={`/country/${about.location.address.addressCountry}`}>
                  {translate(about.location.address.addressCountry)}
                </Link>
              )}
              {about.location.address.addressRegion && (
                <React.Fragment>
                  ,&nbsp;
                  <Link
                    href={`/resource/?filter.feature.properties.location.address.addressRegion=${about.location.address.addressRegion}`}
                  >
                    {translate(about.location.address.addressRegion)}
                  </Link>
                </React.Fragment>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

ResourcePreview.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
}

ResourcePreview.defaultProps = {
}

export default withI18n(ResourcePreview)
