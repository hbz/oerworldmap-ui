import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import withI18n from './withI18n'
import { formatURL, obfuscate } from '../common'
import Block from './Block'
import ItemList from './ItemList'
import Link from './Link'
import Icon from './Icon'

import '../styles/components/WebpageView.pcss'

const WebpageView = ({translate, about, lighthouses}) => (
  <div className="WebpageView">

    {about.sameAs &&
      <div className="social">
        {about.sameAs.map(link => {

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
            <a key={link} href={link} target="_blank">
              <i className={`fa fa-${icon}`} />
            </a>
          )
        })
        }
      </div>
    }

    {about.countryChampionFor &&
      <div className="subtitle">
        {about.countryChampionFor.map(country => (
          <div key={country}>
            {translate(`${about['@type']}.countryChampionFor`)}
            &nbsp;<Link href={`/country/${country}`}>{translate(country)}</Link>
          </div>
        ))}
      </div>
    }

    <div className="lighthouse">
      <div className="lighthouseCounter">
        {lighthouses.length}
      </div>

      <a href="#addLighthouse">
        <img
          src="/assets/lighthouse.svg"
          alt="Lighthouse"
        />
      </a>
    </div>

    <h2>{translate(about.displayName) || translate(about.name)}</h2>

    <div className="information">
      <div className="main">
        {(about.description || about.articleBody) &&
          <div className="description">
            <h3>{translate('Description')}</h3>

            {about.description &&
              <ReactMarkdown escapeHtml={false} source={translate(about.description)} />
            }

            {about.articleBody &&
              <ReactMarkdown escapeHtml={false} source={translate(about.articleBody)} />
            }
          </div>
        }

        {about.url &&
          <a href={about.url} target="_blank" className="boxedLink">
            {formatURL(about.url)}
          </a>
        }

        {about.availableChannel &&
          about.availableChannel.map(link => (
            <a key={link.serviceUrl} href={link.serviceUrl} className="boxedLink">
              {formatURL(link.serviceUrl)}
            </a>
          ))
        }

        {about.license &&
          about.license.map(license => (
            <img key={license['@id']} className="licenseImage" src={license.image} alt={translate(license.name)} />
          ))
        }

        {about.award &&
          <div>
            {about.award.map(award => (
              <img key={award} src={award} className="awardImage" alt={translate('Award')} />
            ))
            }
          </div>
        }
      </div>

      <aside className="webpageColumn">

        {about.email &&
          <Block title={translate(`${about['@type']}.email`)}>
            {/* FIXME: Find a way to set raw attribute value */}
            {/* <a href={`mailto:${obfuscate(about.email)}`}>{obfuscate(about.email)}</a> */}
            <a href={`mailto:${about.email}`}>{about.email}</a>
          </Block>
        }

        {about.location && about.location.address &&
          <Block title={translate(`${about['@type']}.location`)}>
            <p>
              {about.location.address.streetAddress} <br />
              {about.location.address.postalCode} {about.location.address.addressLocality} <br />
              {translate(about.location.address.addressRegion)} <br />
              {translate(about.location.address.addressCountry)}
            </p>
          </Block>
        }

        {about.contactPoint &&
          <Block className="asideList" title={translate(`${about['@type']}.contactPoint`)}>
            <ItemList listItems={about.contactPoint} />
          </Block>
        }

        {about.alternateName &&
          <Block className="asideList" title={translate(`${about['@type']}.alternateName`)}>
            {translate(about.alternateName)}
          </Block>
        }

        {/* TODO: write component to show about.about and about.audience hierarchie */}

        {about.about &&
          <Block className="asideList" title={translate(`${about['@type']}.about`)}>
            <ItemList listItems={about.about} />
          </Block>
        }

        {about.audience &&
          <Block className="asideList" title={translate(`${about['@type']}.audience`)}>
            <ItemList listItems={about.audience} />
          </Block>
        }

        {about.startTime &&
          <Block className="asideList" title={translate(`${about['@type']}.startTime`)}>
            {about.startTime} {about.endTime && ` - ${about.endTime}`}
          </Block>
        }

        {about.inLanguage &&
          <Block className="asideList" title={translate(`${about['@type']}.inLanguage`)}>
            <ul className="commaSeparatedList">
              {about.inLanguage.map(lang => {
                <li key={lang}>
                  <Link href={`/resource/?filter.about.inLanguage=${lang}`}>
                    {translate(lang)}
                  </Link>
                </li>
              })}
            </ul>
          </Block>
        }

        {about.hashtag &&
          <Block className="asideList" title={translate(`${about['@type']}.hashtag`)}>
            {about.hashtag}
          </Block>
        }

        {about.keywords &&
          <Block className="asideList" title={translate(`${about['@type']}.keywords`)}>
            <ul className="commaSeparatedList">
              {about.keywords.map(keyword => (
                <li key={keyword}>
                  <Link href={`/resource/?filter.about.keywords=${keyword}`}>
                    {keyword}
                  </Link>
                </li>
              ))}
            </ul>
          </Block>
        }

        {about.recordedIn &&
          <Block className="asideList" title={translate(`${about['@type']}.recordedIn`)}>
            <ul>
              {about.recordedIn.map(recording => (
                <li key={recording}>
                  <a href={recording} target="_blank">
                    <i className="fa fa-external-link-square" /> {formatURL(recording)}
                  </a>
                </li>
              ))}
            </ul>
          </Block>
        }

        {
          ['result', 'resultOf', 'provides', 'provider', 'agent', 'agentIn', 'participant', 'participantIn'].map(
            prop => (
              about[prop] &&
              <Block className="asideList" title={translate(`${about['@type']}.${prop}`)}>
                <ItemList listItems={about[prop] || []} />
              </Block>
            )
          )
        }

        {about.isFundedBy &&
          <Block className="asideList" title={translate(`${about['@type']}.isFundedBy`)}>
            <ItemList listItems={
              [].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy))
            } />
          </Block>
        }

        {about.isFundedBy &&
          <Block className="asideList" title={translate(`${about['@type']}.budget`)}>
            <ul>
              {about.isFundedBy.map(grant => (
                <li key={grant.hasMonetaryValue}>
                  {grant.hasMonetaryValue}
                </li>
              ))}
            </ul>
          </Block>
        }

        {about.awards &&
          <Block className="asideList" title={translate(`${about['@type']}.funds`)}>
            <ItemList listItems={
              [].concat.apply([], about.awards.filter(grant => grant.funds).map(grant => grant.funds))
            } />
          </Block>
        }

        {
          ['hasPart', 'isPartOf', 'member', 'memberOf', 'affiliation', 'affiliate', 'organizer',
          'organizerFor', 'performer', 'performerIn', 'attendee', 'attends', 'created', 'creator', 'publication',
          'publisher', 'manufacturer', 'manufactured', 'mentions', 'mentionedIn', 'instrument', 'instrumentIn',
          'isRelatedTo', 'primarySector', 'secondarySector'
          ].map(prop => (
            about[prop] &&
            <Block className="asideList" title={translate(`${about['@type']}.${prop}`)}>
              <ItemList listItems={about[prop] || []} />
            </Block>
          ))
        }

      </aside>
    </div>

  </div>
)

WebpageView.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  lighthouses: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default withI18n(WebpageView)
