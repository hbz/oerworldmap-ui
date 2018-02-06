import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import withI18n from './withI18n'
import { formatURL } from '../common'
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
            {translate('Country champion for')}
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
          <Block className="asideList" title={translate(`${about['@type']}.email`)}>
            <ul>
              <li>
                <a href={`mailto:${about.email}`}>{about.email}</a>
              </li>
            </ul>
          </Block>
        }

        {about.location && about.location.address &&
          <Block className="asideList" title={translate(`${about['@type']}.location`)}>
            <ul>
              {about.location.address.streetAddress &&
              <li>
                {about.location.address.streetAddress}
              </li>
              }
              {about.location.address.postalCode &&
              <li>
                {about.location.address.postalCode} {about.location.address.addressLocality}
              </li>
              }
              {about.location.address.addressCountry &&
              <li>
                {translate(about.location.address.addressCountry)}
              </li>
              }
            </ul>
          </Block>
        }

        {about.contactPoint &&
          <Block className="asideList" title={translate(`${about['@type']}.contactPoint`)}>
            <ItemList listItems={about.contactPoint} />
          </Block>
        }

        {about.alternateName &&
          <Block className="asideList" title={translate(`${about['@type']}.alternateName`)}>
            <ul>
              <li>{translate(about.alternateName)}</li>
            </ul>
          </Block>
        }

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
            <ul>
              <li>
                {about.startTime} {about.endTime && ` - ${about.endTime}`}
              </li>
            </ul>
          </Block>
        }

        {about.inLanguage &&
          <Block className="asideList" title={translate(`${about['@type']}.inLanguage`)}>
            <ul className="commaSeparatedList">
              {about.inLanguage.map(lang => {
                <li key={lang}>{translate(lang)}</li>
              })}
            </ul>
          </Block>
        }

        {about.hashtag &&
          <Block className="asideList" title={translate(`${about['@type']}.hashtag`)}>
            <ul>
              <li>
                {about.hashtag}
              </li>
            </ul>
          </Block>
        }

        {about.keywords &&
          <Block className="asideList" title={translate(`${about['@type']}.keywords`)}>
            <ul className="commaSeparatedList">
              {about.keywords.map(keyword => {
                <li key={keyword}>
                  <Link href={`/resource/?filter.about.keywords=${keyword}`}>
                    {keyword}
                  </Link>
                </li>
              })}
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

        {about.result &&
          <Block className="asideList" title={translate(`${about['@type']}.result`)}>
            {/* <ItemList listItems={about.result} /> */}
          </Block>
        }

        {about.resultOf &&
          <Block className="asideList" title={translate(`${about['@type']}.resultOf`)}>
            <ItemList listItems={about.resultOf} />
          </Block>
        }

        {about.provides &&
          <Block className="asideList" title={translate(`${about['@type']}.provides`)}>
            <ItemList listItems={about.provides} />
          </Block>
        }

        {about.provider &&
          <Block className="asideList" title={translate(`${about['@type']}.provider`)}>
            <ItemList listItems={about.provider} />
          </Block>
        }

        {about.agent &&
          <Block className="asideList" title={translate(`${about['@type']}.agent`)}>
            <ItemList listItems={about.agent} />
          </Block>
        }

        {/* FIXME: Add API response name */}

        {about.agentIn &&
          <Block className="asideList" title={translate(`${about['@type']}.agentIn`)}>
            <ItemList listItems={about.agentIn} />
          </Block>
        }

        {about.participant &&
          <Block className="asideList" title={translate(`${about['@type']}.participant`)}>
            <ItemList listItems={about.participant} />
          </Block>
        }

        {about.participantIn &&
          <Block className="asideList" title={translate(`${about['@type']}.participantIn`)}>
            <ItemList listItems={about.participantIn} />
          </Block>
        }

        {about.isFundedBy &&
          <Block className="asideList" title={translate(`${about['@type']}.isFundedBy`)}>
            <ul>
              {about.isFundedBy.map((item, i) => (
                <li key={i}>
                  {item.isAwardedBy &&
                    ([
                      <Icon key={`'icon${i}`} type={item.isAwardedBy[0]['@type']} />,
                      <Link key={`'link${i}`} href={`/resource/${item.isAwardedBy[0]['@id']}`}>{translate(item.isAwardedBy[0].name)}</Link>
                    ])
                  }
                </li>
              ))}
            </ul>
          </Block>
        }

        {about.isFundedBy && about.isFundedBy[0] && about.isFundedBy[0].hasMonetaryValue &&
          <Block className="asideList" title={translate(`${about['@type']}.isFundedBy`)}>
            <ul>
              {about.isFundedBy.map(item => (
                <li key={item.hasMonetaryValue}>
                  {item.hasMonetaryValue}
                </li>
              ))}
            </ul>
          </Block>
        }

        {about.hasPart &&
          <Block className="asideList" title={translate(`${about['@type']}.hasPart`)}>
            <ItemList listItems={about.hasPart} />
          </Block>
        }

        {about.isPartOf &&
          <Block className="asideList" title={translate(`${about['@type']}.isPartOf`)}>
            <ItemList listItems={[about.isPartOf]} />
          </Block>
        }

        {about.awards &&
          <Block className="asideList" title={translate(`${about['@type']}.awards`)}>
            <ItemList listItems={[about.awards]} />
          </Block>
        }

        {about.member &&
          <Block className="asideList" title={translate(`${about['@type']}.member`)}>
            <ItemList listItems={about.member} />
          </Block>
        }

        {about.memberOf &&
          <Block className="asideList" title={translate(`${about['@type']}.memberOf`)}>
            <ItemList listItems={about.memberOf} />
          </Block>
        }

        {about.affiliation &&
          <Block className="asideList" title={translate(`${about['@type']}.affiliation`)}>
            <ItemList listItems={about.affiliation} />
          </Block>
        }

        {about.affiliate &&
          <Block className="asideList" title={translate(`${about['@type']}.affiliate`)}>
            <ItemList listItems={about.affiliate} />
          </Block>
        }

        {about.organizer &&
          <Block className="asideList" title={translate(`${about['@type']}.organizer`)}>
            <ItemList listItems={about.organizer} />
          </Block>
        }

        {about.organizerFor &&
          <Block className="asideList" title={translate(`${about['@type']}.organizerFor`)}>
            <ItemList listItems={about.organizerFor} />
          </Block>
        }

        {about.performer &&
          <Block className="asideList" title={translate(`${about['@type']}.performer`)}>
            <ItemList listItems={about.performer} />
          </Block>
        }

        {about.performerIn &&
          <Block className="asideList" title={translate(`${about['@type']}.performerIn`)}>
            <ItemList listItems={about.contactPoint} />
          </Block>
        }

        {about.attendee &&
          <Block className="asideList" title={translate(`${about['@type']}.attendee`)}>
            <ItemList listItems={about.attendee} />
          </Block>
        }

        {about.attends &&
          <Block className="asideList" title={translate(`${about['@type']}.attends`)}>
            <ItemList listItems={about.attends} />
          </Block>
        }

        {about.created &&
          <Block className="asideList" title={translate(`${about['@type']}.created`)}>
            <ItemList listItems={about.created} />
          </Block>
        }

        {about.creator &&
          <Block className="asideList" title={translate(`${about['@type']}.creator`)}>
            <ItemList listItems={about.creator} />
          </Block>
        }

        {about.publication &&
          <Block className="asideList" title={translate(`${about['@type']}.publication`)}>
            <ItemList listItems={about.publication} />
          </Block>
        }

        {about.publisher &&
          <Block className="asideList" title={translate(`${about['@type']}.publisher`)}>
            <ItemList listItems={about.publisher} />
          </Block>
        }

        {about.manufacturer &&
          <Block className="asideList" title={translate(`${about['@type']}.manufacturer`)}>
            <ItemList listItems={about.manufacturer} />
          </Block>
        }

        {about.manufactured &&
          <Block className="asideList" title={translate(`${about['@type']}.manufactured`)}>
            <ItemList listItems={about.manufactured} />
          </Block>
        }

        {about.mentions &&
          <Block className="asideList" title={translate(`${about['@type']}.mentions`)}>
            <ItemList listItems={about.mentions} />
          </Block>
        }

        {about.mentionedIn &&
          <Block className="asideList" title={translate(`${about['@type']}.mentionedIn`)}>
            <ItemList listItems={about.mentionedIn} />
          </Block>
        }

        {about.instrument &&
          <Block className="asideList" title={translate(`${about['@type']}.instrument`)}>
            <ItemList listItems={about.instrument} />
          </Block>
        }

        {about.instrumentIn &&
          <Block className="asideList" title={translate(`${about['@type']}.instrumentIn`)}>
            <ItemList listItems={about.instrumentIn} />
          </Block>
        }

        {/* Object */}

        {about.isRelatedTo &&
          <Block className="asideList" title={translate(`${about['@type']}.isRelatedTo`)}>
            <ItemList listItems={about.isRelatedTo} />
          </Block>
        }

        {about.primarySector &&
          <Block className="asideList" title={translate(`${about['@type']}.primarySector`)}>
            <ItemList listItems={about.primarySector} />
          </Block>
        }

        {about.secondarySector &&
          <Block className="asideList" title={translate(`${about['@type']}.secondarySector`)}>
            <ItemList listItems={about.secondarySector} />
          </Block>
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
