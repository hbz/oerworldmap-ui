// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import '../styles/components/Footer.pcss'

const Footer = () => (
  <footer className="pageFooter">

    <section
      id="footer"
      className="pageSection bg-grey-lightest wide v-xs h-xs text-grey"
    >
      <div className="inner cf">

        <div className="left">

          <a
            href="https://creativecommons.org/licenses/by/4.0/"
          >
            <i className="cc cc-cc" />
            <i className="cc cc-by" />
          </a>

          <a href="/imprint">Imprint & Privacy</a>

          <a href="mailto:info@oerworldmap.org">info@oerworldmap.org</a>

          <a
            href="https://www.facebook.com/oerworldmap"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-official" />
          </a>
          <a
            href="https://twitter.com/oerworldmap"
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="https://github.com/hbz/oerworldmap"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>

        </div>

        <div className="right">

          <a href="#" className="btn hack-hover-invert-grey-lightest-background">Back to top</a>

        </div>

      </div>
    </section>

  </footer>
)


Footer.propTypes = {

}

export default Footer
