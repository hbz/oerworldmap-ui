import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import withI18n from './withI18n'
import { formatURL } from '../common'
import ResourceList from './ResourceList'
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
              <ReactMarkdown source={translate(about.description)} />
            }

            {about.articleBody &&
              <ReactMarkdown source={translate(about.articleBody)} />
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
          <div className="asideList">
            <h3>{translate('Email')}</h3>
            <ul>
              <li>
                <a href={`mailto:${about.email}`}>{about.email}</a>
              </li>
            </ul>
          </div>
        }

        {about.location &&
        about.location.address &&
          <div className="asideList">
            <h3>{translate('Location')}</h3>
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

              {about.location.address.postalCode &&
              <li>
                {translate(about.location.address.addressCountry)}
              </li>
              }

            </ul>
          </div>
        }

        {about.contactPoint &&
          <ResourceList
            title="Contact Person"
            list={about.contactPoint}
          />
        }

        {about.alternateName &&
          <div className="asideList">
            <h3>{translate('Abbreviation')}</h3>
            <ul>
              <li>{translate(about.alternateName)}</li>
            </ul>
          </div>
        }

        {about.about &&
          <div className="asideList">
            <h3>{translate('Subject')}</h3>
            <ul>
              {about.about.map(item => (
                <li key={item['@id']}>
                  <i className="fa fa-tag" /> {translate(item.name)}
                </li>
              ))
              }
            </ul>
          </div>
        }

        {about.audience &&
          <ResourceList
            title="Grade level"
            list={about.audience}
          />
        }

        {about.startTime && about.endTime &&
          <div className="asideList">
            <h3>{translate('Start - End')}</h3>
            <ul>
              <li>
                {`${about.startTime} - ${about.endTime}`}
              </li>
            </ul>
          </div>
        }

        {about.inLanguage &&
          <div className="asideList">
            <h3>{translate('Event language')}</h3>
            <ul>
              <li>
                {about.inLanguage.map(lang => (
                  <span key={lang}>`${translate(lang)}, `</span>
                )).join('').slice(0, -2)}
              </li>
            </ul>
          </div>
        }

        {about.hashtag &&
          <div className="asideList">
            <h3>{translate('Hashtag')}</h3>
            <ul>
              <li>
                {about.hashtag}
              </li>
            </ul>
          </div>
        }

        {about.keywords &&
          <div className="asideList">
            <h3>{translate('Tags')}</h3>
            <ul>
              <li>
                {about.keywords.map((key, i) => (
                  about.keywords.length - 1 === i ? (
                    <Link key={key} href={`/resource/?filter.about.keywords=${key}`}>{key}</Link>
                  ) : (
                    <span key={key}>
                      <Link href={`/resource/?filter.about.keywords=${key}`}>{key}</Link> &amp;&nbsp;
                    </span>
                  )
                ))}
              </li>
            </ul>
          </div>
        }

        {about.recordedIn &&
          <div className="asideList">
            <h3>{translate('Recordings')}</h3>
            <ul>
              {about.recordedIn.map(recording => (
                <li key={recording}>
                  <a href={recording} target="_blank">
                    <i className="fa fa-external-link-square" /> {formatURL(recording)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }

        {about.result &&
          <ResourceList
            title="Resulting service"
            list={about.result}
          />
        }

        {about.resultOf &&
          <ResourceList
            title="Result Of"
            list={about.resultOf}
          />
        }

        {about.provides &&
          <ResourceList
            title="Provides"
            list={about.provides}
          />
        }

        {about.provider &&
          <ResourceList
            title="Provider"
            list={about.provider}
          />
        }

        {about.agent &&
          <ResourceList
            title="Operator"
            list={about.agent}
          />
        }

        {/* FIXME: Add API response name */}

        {about.agentIn &&
          <ResourceList
            title="Project lead in"
            list={about.agentIn}
          />
        }

        {about.participant &&
          <ResourceList
            title="Partner"
            list={about.participant}
          />
        }

        {about.participantIn &&
          <ResourceList
            title="Partner in"
            list={about.participantIn}
          />
        }

        {about.isFundedBy &&
          <div className="asideList">
            <h3>{translate('Funded by')}</h3>
            <ul>
              {about.isFundedBy.map((item, i) => (
                <li key={i}>
                  {item.isAwardedBy && (
                    [<Icon key={`'icon${i}`} type={item.isAwardedBy[0]['@type']} />, <Link key={`'link${i}`} href={`/resource/${item.isAwardedBy[0]['@id']}`}>{translate(item.isAwardedBy[0].name)}</Link>]
                  )
                  }
                </li>
              ))}
            </ul>
          </div>
        }

        {about.isFundedBy &&
        about.isFundedBy[0] &&
        about.isFundedBy[0].hasMonetaryValue &&
          <div className="asideList">
            <h3>{translate('Budget')}</h3>
            <ul>
              {about.isFundedBy.map(item => (
                <li key={item.hasMonetaryValue}>
                  {item.hasMonetaryValue}
                </li>
              ))}
            </ul>
          </div>
        }

        {about.hasPart &&
          <ResourceList
            title="Sub Project"
            list={about.hasPart}
          />
        }

        {about.isPartOf &&
          <div className="asideList">
            <h3>{translate('Part of')}</h3>
            <ul>
              <li>
                <Icon type={about.isPartOf['@type']} /> <Link href={`/resource/${about.isPartOf['@id']}`}>{translate(about.isPartOf.name)}</Link>
              </li>
            </ul>
          </div>
        }

        {about.awards &&
          <div className="asideList">
            <h3>Funds</h3>
            <ul>
              {about.awards.map((award, i) => (
                <li key={i}>
                  {award.funds && (
                    [<Icon type={award.funds[0]['@type']} />, <Link href={`/resource/${award.funds[0]['@id']}`}>{translate(award.funds[0].name)}</Link>]
                  )
                  }
                </li>
              ))}
            </ul>
          </div>
        }

        {about.member &&
          <ResourceList
            title="Members"
            list={about.member}
          />
        }

        {about.memberOf &&
          <ResourceList
            title="Member of"
            list={about.memberOf}
          />
        }

        {about.affiliation &&
          <ResourceList
            title="Affiliation"
            list={about.affiliation}
          />
        }

        {about.affiliate &&
          <ResourceList
            title="Affiliated Persons"
            list={about.affiliate}
          />
        }

        {about.organizer &&
          <ResourceList
            title="Organizer"
            list={about.organizer}
          />
        }

        {about.organizerFor &&
          <ResourceList
            title="Organizer of"
            list={about.organizerFor}
          />
        }

        {about.performer &&
          <ResourceList
            title="Presenter"
            list={about.performer}
          />
        }

        {about.performerIn &&
          <ResourceList
            title="Presenter At"
            list={about.performerIn}
          />
        }

        {about.attendee &&
          <ResourceList
            title="People attending"
            list={about.attendee}
          />
        }

        {about.attends &&
          <ResourceList
            title="Attending"
            list={about.attends}
          />
        }

        {about.created &&
          <ResourceList
            title="Contributions"
            list={about.created}
          />
        }

        {about.creator &&
          <ResourceList
            title="Creator"
            list={about.creator}
          />
        }

        {about.publication &&
          <ResourceList
            title="Publications"
            list={about.publication}
          />
        }

        {about.publisher &&
          <ResourceList
            title="Published by"
            list={about.publisher}
          />
        }

        {about.manufacturer &&
          <ResourceList
            title="Manufacturer"
            list={about.manufacturer}
          />
        }

        {about.manufactured &&
          <ResourceList
            title="Develops"
            list={about.manufactured}
          />
        }

        {about.mentions &&
          <ResourceList
            title="Entries mentioned"
            list={about.mentions}
          />
        }

        {about.mentionedIn &&
          <ResourceList
            title="Mentioned in"
            list={about.mentionedIn}
          />
        }

        {about.instrument &&
          <ResourceList
            title="Instrument"
            list={about.instrument}
          />
        }

        {about.instrumentIn &&
          <ResourceList
            title="instrument in"
            list={about.instrumentIn}
          />
        }

        {/* Object */}

        {about.isRelatedTo &&
          <ResourceList
            title="Is used by"
            list={about.isRelatedTo}
          />
        }

        {about.primarySector &&
          <ResourceList
            title="Primary educational sector"
            list={about.primarySector}
          />
        }

        {about.secondarySector &&
          <ResourceList
            title="Secondary educational sector"
            list={about.secondarySector}
          />
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