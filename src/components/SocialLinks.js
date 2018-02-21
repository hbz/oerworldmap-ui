import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/SocialLinks.pcss'

const SocialLinks = ({links}) => (
  <div className="SocialLinks">
    {links.map(link => {

      let icon = 'external-link-square'

      if (link.includes('facebook')) {
        icon = 'facebook'
      } else if (link.includes('twitter')) {
        icon = 'twitter'
      } else if (link.includes('linkedin')) {
        icon = 'linkedin'
      } else if (link.includes('instagram')) {
        icon = 'instagram'
      } else if (link.includes('plus')) {
        icon = 'plus'
      } else if (link.includes('youtube')) {
        icon = 'youtube'
      }

      return (
        <a key={link} href={link} rel="noopener" target="_blank">
          <i className={`fa fa-${icon}`} />
        </a>
      )
    })}
  </div>
)

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SocialLinks
