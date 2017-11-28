
import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import translate from './translate'
import FullModal from './FullModal'
import '../styles/Newsletter.pcss'

const Newsletter = ({translate}) => (
  <div className="Newsletter">
    <FullModal>
      <h2 className="title">
        {translate('Newsletter.title')}
      </h2>

      <form action="/user/newsletter" method="post">
        <p>{translate('Newsletter.leaveMessage')}</p>
        <input
          type="email"
          required
          placeholder={translate('Newsletter.emailPlaceholder')}
        />
        <p>
          {translate('Newsletter.policyMessage')}
          &nbsp;
          <Link href="/user/newsletter">{translate('Newsletter.privacyPolicy')}</Link>.
        </p>

        <button className="btn" type="submit">
          {translate('Newsletter.subscribe')}
        </button>
        &nbsp;
        <button className="btn" type="cancel">
          {translate('Newsletter.cancel')}
        </button>
      </form>
    </FullModal>
  </div>
)

Newsletter.propTypes = {
  translate: PropTypes.func.isRequired,
}

export default translate(Newsletter)