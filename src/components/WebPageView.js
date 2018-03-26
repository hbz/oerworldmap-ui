/* global btoa*/
import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import withI18n from './withI18n'
import Block from './Block'
import ItemList from './ItemList'
import Link from './Link'
import ConceptTree from './ConceptTree'
import WebPageUserActions from './WebPageUserActions'
import SocialLinks from './SocialLinks'
import Comments from './Comments'
import Topline from './Topline'
import Lighthouses from './Lighthouses'

import { formatURL, formatDate } from '../common'
import expose from '../expose'
import '../styles/components/WebPageView.pcss'

const WebPageView = ({translate, moment, about, user, view, expandAll, schema}) => {

  const lighthouses = (about.objectIn || []).filter(action => action['@type'] === 'LighthouseAction') || []

  const likes = (about.objectIn || []).filter(action => action['@type'] === 'LikeAction') || []

  return (
    <div className="WebPageView">

      <div className="row auto gutter-40 text-large">
        <div className="col">

          <Topline about={about} />

        </div>
        <div className="col">

          {about.sameAs &&
            <SocialLinks links={about.sameAs} />
          }

        </div>
      </div>

      <h2>
        {translate(about.displayName) || translate(about.name)}
        {about.alternateName &&
          <span className="alternate">
            &nbsp;({translate(about.alternateName)})
          </span>
        }
      </h2>

      {expose('userActions', user) &&
        <WebPageUserActions about={about} user={user} view={view} schema={schema} />
      }

      <div className="row stack-700 stack-gutter-2em">

        <div className="col two-third">

          <div className="border-top text-large" style={{paddingTop: '2em'}}>

            <Block
              className="first description"
              title={translate(`${about['@type']}.description`)}
              type={about['@type']}
            >
              {about.description ? (
                <ReactMarkdown
                  className='markdown'
                  escapeHtml={false}
                  source={translate(about.description)}
                  renderers={
                    {link: link => (
                      <a href={link.href} target="_blank" rel="noopener">
                        {link.children}
                      </a>
                    )}
                  }
                />
              ) : (
                <p>
                  <i>
                    {translate('A description for this entry is missing.')}
                    {expose('editEntry', user, about) &&
                      <Link href='#edit'>
                        &nbsp;{translate('Help us by adding some information!')}
                      </Link>
                    }
                    {!user && about['@type'] !== 'Person' &&
                      <Link href='/user/register'>
                        &nbsp;{translate('Help us by adding some information!')}
                      </Link>
                    }
                  </i>
                </p>
              )}
            </Block>

            {about.articleBody &&
              <Block
                className="first description"
                title=''
              >
                {about.articleBody &&
                  <ReactMarkdown
                    className='markdown'
                    escapeHtml={false}
                    source={translate(about.articleBody)}
                    renderers={
                      {link: link => (
                        <a href={link.href} target="_blank" rel="noopener">
                          {link.children}
                        </a>
                      )}
                    }
                  />
                }
              </Block>
            }

            {about.url &&
              <p>
                <a href={about.url} target="_blank" rel="noopener" className="boxedLink">
                  {formatURL(about.url)}
                </a>
              </p>
            }

            {about.availableChannel &&
              about.availableChannel.map(link => (
                <a key={link.serviceUrl} href={link.serviceUrl} target="_blank" rel="noopener">
                  {formatURL(link.serviceUrl)}
                </a>
              ))
            }

            <hr className="border-grey" />

            {about.keywords &&
              <Block title={translate(`${about['@type']}.keywords`)}>
                <ul className="spaceSeparatedList">
                  {about.keywords.map(keyword => (
                    <li key={keyword}>
                      <Link href={`/resource/?filter.about.keywords=${keyword.toLowerCase()}`}>
                        {keyword}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Block>
            }

            {about.about &&
              <Block className="list" title={translate(`${about['@type']}.about`)}>
                <ConceptTree
                  concepts={require('../json/esc.json').hasTopConcept}
                  include={about.about.map(concept => concept['@id'])}
                  className="ItemList recursive"
                  linkTemplate="/resource/?filter.about.about.@id={@id}"
                />
              </Block>
            }

            {about.audience &&
              <Block className="list" title={translate(`${about['@type']}.audience`)}>
                <ConceptTree
                  concepts={require('../json/isced-1997.json').hasTopConcept}
                  include={about.audience.map(concept => concept['@id'])}
                  className="ItemList"
                  linkTemplate="/resource/?filter.about.audience.@id={@id}"
                />
              </Block>
            }

            {['primarySector', 'secondarySector'].map(prop => (
              about[prop] &&
              <Block key={prop} className="list" title={translate(`${about['@type']}.${prop}`)}>
                <ConceptTree
                  concepts={require('../json/sectors.json').hasTopConcept}
                  include={about[prop].map(concept => concept['@id'])}
                  className="ItemList"
                  linkTemplate={`/resource/?filter.about.${prop}.@id={@id}`}
                />
              </Block>
            ))}

            {about.alternateName &&
              <Block title={translate(`${about['@type']}.alternateName`)}>
                {translate(about.alternateName)}
              </Block>
            }

            {lighthouses.length > 0 && about['@id'] &&
              <Block title={translate('ResourceIndex.read.lighthouses.title')}>
                <Lighthouses lighthouses={lighthouses} about={about} user={user} />
              </Block>
            }

            {about['@id'] &&
              <Block title={translate('ResourceIndex.read.comments')}>
                <Comments comments={about['comment']} about={about} user={user} schema={schema} />
              </Block>
            }

          </div>

        </div>

        <aside className="col one-third">

          <hr style={{marginBottom: '0px'}} />

          {(lighthouses.length > 0 || likes.length > 0 ) &&
            <div className="Block" style={{marginTop: '0px'}}>
              <ul className="ItemList prominent">
                {lighthouses.length > 0 &&
                  <li>
                    <div className="item">
                      <i className="bg-highlight-color bg-important" style={{lineHeight: '33px'}}>
                        <img
                          src="/assets/lighthouse_16px_white.svg"
                          alt="Lighthouse"
                        />
                      </i>
                      <span>{translate('Lighthouses')} ({lighthouses.length})</span>
                    </div>
                  </li>
                }
                {likes.length > 0 &&
                  <li>
                    <div className="item">
                      <i className="fa fa-star bg-highlight-color bg-important" />
                      <span>{translate('Likes')} ({likes.length})</span>
                    </div>
                  </li>
                }
              </ul>
            </div>
          }

          {about.email &&
            <Block title={translate(`${about['@type']}.email`)}>
              <p>
                <a
                  href={`mailto:${Buffer ? Buffer.from(about.email).toString('base64') : btoa(about.email)}`}
                  onClick={e => {
                    e.target.href = "mailto:" + about.email
                  }}
                >
                  {about.email}
                </a>
              </p>
            </Block>
          }

          {about.location && about.location.address &&
            <Block title={translate(`${about['@type']}.location`)}>
              <p>
                {about.location.address.streetAddress &&
                  [about.location.address.streetAddress, <br key="br" />]
                }
                {about.location.address.postalCode}
                {about.location.address.postalCode && about.location.address.addressLocality &&
                  <span>,&nbsp;</span>
                }
                {about.location.address.addressLocality}
                {(about.location.address.postalCode || about.location.address.addressLocality) &&
                  <br />
                }
                {about.location.address.addressRegion &&
                  [translate(about.location.address.addressRegion), <br key="br" />]
                }
                {about.location.address.addressCountry &&
                  <Link href={`/country/${about.location.address.addressCountry}`} >
                    {translate(about.location.address.addressCountry)}
                  </Link>
                }
              </p>
            </Block>
          }

          {about.contactPoint &&
            <Block className="list" title={translate(`${about['@type']}.contactPoint`)}>
              <ItemList listItems={about.contactPoint} className="prominent" />
            </Block>
          }

          {about.startTime &&
            <Block title={translate(`${about['@type']}.startTime`)}>
              {formatDate(about.startTime, moment)}
              {about.endTime &&
                <span> - {formatDate(about.endTime, moment)}</span>
              }
            </Block>
          }

          {about.startDate &&
            <Block title={translate(`${about['@type']}.startDate`)}>
              {formatDate(about.startDate, moment)}
              {about.endDate &&
                <span> - {formatDate(about.endDate, moment)}</span>
              }schema: PropTypes.objectOf(PropTypes.any).isRequired
            </Block>
          }

          {about.inLanguage &&
            <Block className="list" title={translate(`${about['@type']}.inLanguage`)}>
              <ul className="commaSeparatedList">
                {about.inLanguage.map(lang => (
                  <li key={lang}>
                    <Link href={`/resource/?filter.about.inLanguage=${lang}`}>
                      {translate(lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.availableChannel &&
          about.availableChannel.some(channel => channel.availableLanguage) &&
            <Block title={translate(`${about['@type']}.availableChannel.availableLanguage`)}>
              <ul className="commaSeparatedList">
                {[].concat.apply([], about.availableChannel.map(channel => channel.availableLanguage)).map(lang => (
                  <li key={lang}>
                    <Link href={`/resource/?filter.about.availableChannel.availableLanguage=${lang}`}>
                      {translate(lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.hashtag &&
            <Block title={translate(`${about['@type']}.hashtag`)}>
              <a
                href={`https://twitter.com/hashtag/${about.hashtag.replace('#', '')}`}
                rel="noopener"
                target="_blank"
              >
                {about.hashtag}
              </a>
            </Block>
          }

          {about.recordedIn &&
            <Block title={translate(`${about['@type']}.recordedIn`)}>
              <ul className="unstyledList">
                {about.recordedIn.map(recording => (
                  <li key={recording}>
                    <a href={recording} target="_blank" rel="noopener">
                      {formatURL(recording)}
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          }

          {
            ['result', 'resultOf', 'provides', 'provider', 'agent'].map(
              prop => (
                about[prop] &&
                <Block
                  key={prop}
                  collapsible={!expandAll && about[prop].length > 3}
                  collapsibleType="show-all"
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                >
                  <ItemList listItems={about[prop]} className="prominent" />
                </Block>
              )
            )
          }

          {about.agentIn && about.agentIn.some(item => item['@type'] === 'Action') &&
            <Block
              collapsible={!expandAll && about.agentIn.filter(item => item['@type'] === 'Action').length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.agentIn`)}
            >
              <ItemList listItems={about.agentIn.filter(item => item['@type'] === 'Action')} className="prominent" />
            </Block>
          }

          {
            ['participant', 'participantIn'].map(
              prop => (
                about[prop] &&
                <Block
                  key={prop}
                  collapsible={!expandAll && about[prop].length > 3}
                  collapsibleType="show-all"
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                >
                  <ItemList listItems={about[prop]} className="prominent" />
                </Block>
              )
            )
          }

          {about.isFundedBy && about.isFundedBy.some(grant => grant.isAwardedBy) &&
            <Block
              collapsible={!expandAll && [].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy)).length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.isFundedBy`)}
            >
              <ItemList
                listItems={
                  [].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy))
                }
                className="prominent"
              />
            </Block>
          }

          {about.isFundedBy && about.isFundedBy.some(grant => grant.hasMonetaryValue) &&
            <Block title={translate(`${about['@type']}.budget`)}>
              <ul className="commaSeparatedList">
                {about.isFundedBy.filter(grant => grant.hasMonetaryValue).map((grant, i) => (
                  <li key={i}>
                    {grant.hasMonetaryValue}
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.awards && about.awards.some(grant => grant.funds) &&
            <Block
              collapsible={!expandAll && [].concat.apply([], about.awards.filter(grant => grant.funds).map(grant => grant.funds)).length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.funds`)}
            >
              <ItemList
                listItems={
                  [].concat.apply([], about.awards.filter(grant => grant.funds).map(grant => grant.funds))
                }
                className="prominent"
              />
            </Block>
          }

          {about.hasPart &&
            <Block
              collapsible={!expandAll && about.hasPart.length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.hasPart`)}
            >
              <ItemList listItems={about.hasPart} className="prominent" />
            </Block>
          }

          {about.isPartOf &&
            <Block className="list" title={translate(`${about['@type']}.isPartOf`)}>
              <ItemList listItems={[about.isPartOf]} className="prominent" />
            </Block>
          }

          {['member', 'memberOf', 'affiliation', 'affiliate', 'organizer',
            'organizerFor', 'performer', 'performerIn', 'attendee', 'attends', 'created', 'creator', 'publication',
            'publisher', 'manufacturer', 'manufactured', 'mentions', 'mentionedIn', 'instrument', 'instrumentIn',
            'isRelatedTo'].map(prop => (
            about[prop] &&
            <Block
              key={prop}
              collapsible={!expandAll && about[prop].length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.${prop}`)}
            >
              <ItemList listItems={about[prop]} className="prominent" />
            </Block>
          ))}

          {about.award &&
            <Block className="list" title={translate(`${about['@type']}.award`)}>
              <ul className="ItemList award">
                {about.award.map(award => (
                  <li key={award}>
                    <a className="item" href={award} target="_blank" rel="noopener">
                      <img src={award} className="awardImage" alt={translate(`${about['@type']}.award`)} />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.license &&
            <Block title={translate(`${about['@type']}.license`)}>
              <ul className="spaceSeparatedList">
                {about.license.map(license => (
                  <li key={license['@id']}>
                    <img className="licenseImage" src={license.image} alt={translate(license.name)} />
                  </li>
                ))}
              </ul>
            </Block>
          }

        </aside>
      </div>

    </div>
  )
}

WebPageView.propTypes = {
  translate: PropTypes.func.isRequired,
  about: PropTypes.objectOf(PropTypes.any).isRequired,
  moment: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any),
  view: PropTypes.string.isRequired,
  expandAll: PropTypes.bool,
  schema: PropTypes.objectOf(PropTypes.any).isRequired
}

WebPageView.defaultProps = {
  user: null,
  expandAll: false
}

export default withI18n(WebPageView)
