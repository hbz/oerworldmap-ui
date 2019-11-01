import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import Subscribe from './Subscribe'

import '../styles/components/PageWithSection.pcss'

const PageWithSection = ({ children, frontMatter: { class: className } }) => (
  <div className={`static-content${className ? ` ${className}` : ''}`}>

    <section className="pageSection markdown">
      <div className="inner">
        {children}
      </div>
    </section>

    <Subscribe />
    <Footer />

  </div>
)

PageWithSection.propTypes = {
  children: PropTypes.node.isRequired,
  frontMatter: PropTypes.objectOf(PropTypes.any),
}
PageWithSection.defaultProps = {
  frontMatter: undefined,
}

export default PageWithSection
