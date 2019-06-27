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
      } else if (link.includes('github')) {
        icon = 'github'
      } else if (link.includes('xing')) {
        icon = 'xing'
      } else if (link.includes('linkedin')) {
        icon = 'linkedin-in'
      } else if (link.includes('reddit')) {
        icon = 'reddit-alien'
      } else if (link.includes('slack')) {
        icon = 'slack'
      } else if (link.includes('soundcloud')) {
        icon = 'soundcloud'
      } else if (link.includes('stack-overflow')) {
        icon = 'stack-overflow'
      } else if (link.includes('vimeo')) {
        icon = 'vimeo'
      } else if (link.includes('wikipedia')) {
        icon = 'wikipedia-w'
      } else if (link.includes('wordpress')) {
        icon = 'wordpress'
      } else if (link.includes('slideshare')) {
        icon = 'slideshare'
      } else if (link.includes('pinterest')) {
        icon = 'pinterest-p'
      }

      return (
        <a key={link} href={link} rel="noopener noreferrer" target="_blank">
          <i aria-hidden="true" className={`fa fa-${icon}`} />
        </a>
      )
    })}
  </div>
)

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SocialLinks
