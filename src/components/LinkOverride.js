import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

const LinkOverride = ({ children, title, href }) => (
  href.startsWith('#')
    ? <Link href={href} title={title}>{children}</Link>
    :
    <a href={href} title={title} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
)

LinkOverride.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string
}

LinkOverride.defaultProps = {
  title: null
}


export default LinkOverride
