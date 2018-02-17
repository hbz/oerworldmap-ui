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

import { formatURL/*, obfuscate*/ } from '../common'
import '../styles/components/WebPageView.pcss'

const WebPageView = ({translate, moment, about, user, view}) => {

  const lighthouses = (about.objectIn || []).filter(action => action['@type'] === 'LighthouseAction') || []

  const likes = (about.objectIn || []).filter(action => action['@type'] === 'LikeAction') || []

  return (
    <div className="WebPageView">

      <div className="row auto gutter-40 text-large">
        <div className="col">

          {about.countryChampionFor &&
            <span>
              {about.countryChampionFor.map(country => (
                <span key={country}>
                  {translate(`${about['@type']}.countryChampionFor`)}{' '}
                  <Link href={`/country/${country}`}>{translate(country)}</Link>
                </span>
              ))}
            </span>
          }

        </div>
        <div className="col">

          {about.sameAs &&
            <SocialLinks links={about.sameAs} />
          }

        </div>
      </div>

      <h2>{translate(about.displayName) || translate(about.name)}</h2>

      {user &&
        <WebPageUserActions about={about} user={user} view={view} />
      }

      <div className="row">

        <div className="col grow-2">

          <div className="border-top text-large" style={{paddingTop: '2em'}}>

            {about.description &&
              <Block className="first description" title={translate(`${about['@type']}.description`)}>
                {about.description &&
                  <ReactMarkdown escapeHtml={false} source={translate(about.description)} />
                }
              </Block>
            }

            {about.articleBody &&
              <Block className="first description" title={translate(`${about['@type']}.articleBody`)}>
                {about.articleBody &&
                  <ReactMarkdown escapeHtml={false} source={translate(about.articleBody)} />
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

            <hr className="border-grey" />

            {about.availableChannel &&
              about.availableChannel.map(link => (
                <a key={link.serviceUrl} href={link.serviceUrl} target="_blank" rel="noopener" className="boxedLink">
                  {formatURL(link.serviceUrl)}
                </a>
              ))
            }

            {about.keywords &&
              <Block title={translate(`${about['@type']}.keywords`)}>
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

            {about.about &&
              <Block className="list" title={translate(`${about['@type']}.about`)}>
                <ConceptTree
                  concepts={require('../json/esc.json').hasTopConcept}
                  include={about.about.map(concept => concept['@id'])}
                  className="recursiveList linedList ItemList"
                  linkTemplate="/resource/?filter.about.about.@id={@id}"
                />
              </Block>
            }

            {about.audience &&
              <Block className="list" title={translate(`${about['@type']}.audience`)}>
                <ConceptTree
                  concepts={require('../json/isced-1997.json').hasTopConcept}
                  include={about.audience.map(concept => concept['@id'])}
                  className="linedList ItemList"
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
                  className="linedList ItemList"
                  linkTemplate={`/resource/?filter.about.${prop}.@id={@id}`}
                />
              </Block>
            ))}

            {lighthouses &&
              <Block className="lighthouseComments" title={translate('ResourceIndex.read.lighthouses.title')}>
                {lighthouses.map(lighthouse => (
                  <div className="Comment" key={lighthouse['@id']}>
                    <p>
                      <small>
                        {lighthouse.agent.map(author => (
                          <Link key={author["@id"]} href={`/resource/${author["@id"]}`}>
                            {translate(author.name)}
                          </Link>)
                        )}
                        &nbsp; {moment(lighthouse.dateCreated).fromNow()}
                      </small>
                    </p>
                    <form onSubmit={(e) => console.warn("Delete lighthouse not implemented", e)}>
                      <button className="btn" type="submit" title="Delete">
                        <i className="fa fa-fw fa-trash" />
                      </button>
                    </form>
                    <ReactMarkdown source={translate(lighthouse.description)} />
                  </div>
                ))}
              </Block>
            }

            {about['@id'] &&
              <Block title={translate('ResourceIndex.read.comments')}>
                <Comments comments={about['comment']} id={about['@id']} user={user} />
              </Block>
            }

          </div>

        </div>

        <aside className="col">

          <hr style={{marginBottom: '0px'}} />

          {(lighthouses.length > 0 || likes.length > 0 ) &&
            <div className="Block" style={{marginTop: '0px'}}>
              <ul className="linedList ItemList">
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
                      <i className="fa fa-star bg-highlight-color bg-important"></i>
                      <span>{translate('Likes')} ({likes.length})</span>
                    </div>
                  </li>
                }
              </ul>
            </div>
          }

          {about.email &&
            <Block title={translate(`${about['@type']}.email`)}>
              {/* FIXME: Find a way to set raw attribute value */}
              {/* <a href={`mailto:${obfuscate(about.email)}`}>{obfuscate(about.email)}</a> */}
              <p>
                <a href={`mailto:${about.email}`}>{about.email}</a>
              </p>
            </Block>
          }

          {about.location && about.location.address &&
            <Block title={translate(`${about['@type']}.location`)}>
              <p>
                {about.location.address.streetAddress &&
                  [about.location.address.streetAddress, <br key="br" />]
                }
                {(about.location.address.postalCode || about.location.address.addressLocality) &&
                  [about.location.address.postalCode, <span key="span">&nbsp;</span>, about.location.address.addressLocality, <br key="br" />]
                }
                {about.location.address.addressRegion &&
                  [translate(about.location.address.addressRegion), <br key="br" />]
                }
                {about.location.address.addressCountry &&
                  translate(about.location.address.addressCountry)
                }
              </p>
            </Block>
          }

          {about.contactPoint &&
            <Block className="list" title={translate(`${about['@type']}.contactPoint`)}>
              <ItemList listItems={about.contactPoint} />
            </Block>
          }

          {about.alternateName &&
            <Block className="list" title={translate(`${about['@type']}.alternateName`)}>
              {translate(about.alternateName)}
            </Block>
          }

          {about.startTime &&
            <Block className="list" title={translate(`${about['@type']}.startTime`)}>
              {about.startTime.includes('T00:00:00')
                ? moment(about.startTime).format('LL')
                : moment(about.startTime).format('LLL')}
              {about.endTime && ` - ${about.endTime.includes('T00:00:00')
                ? moment(about.endTime).format('LL')
                : moment(about.endTime).format('LLL')}`}
            </Block>
          }

          {about.inLanguage &&
            <Block className="list" title={translate(`${about['@type']}.inLanguage`)}>
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
            <Block className="list" title={translate(`${about['@type']}.hashtag`)}>
              {about.hashtag}
            </Block>
          }

          {about.recordedIn &&
            <Block className="list" title={translate(`${about['@type']}.recordedIn`)}>
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
            ['result', 'resultOf', 'provides', 'provider', 'agent'].map(
              prop => (
                about[prop] &&
                <Block
                  key={prop}
                  collapsible={about[prop].length > 3}
                  collapsibleType="show-all"
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                >
                  <ItemList listItems={about[prop]} />
                </Block>
              )
            )
          }

          {about.agentIn && about.agentIn.some(item => item['@type'] === 'Action') &&
            <Block
              collapsible={about.agentIn.filter(item => item['@type'] === 'Action').length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.agentIn`)}
            >
              <ItemList listItems={about.agentIn.filter(item => item['@type'] === 'Action')} />
            </Block>
          }

          {
            ['participant', 'participantIn'].map(
              prop => (
                about[prop] &&
                <Block
                  key={prop}
                  collapsible={about[prop].length > 3}
                  collapsibleType="show-all"
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                >
                  <ItemList listItems={about[prop]} />
                </Block>
              )
            )
          }

          {about.isFundedBy && about.isFundedBy.some(grant => grant.isAwardedBy) &&
            <Block
              collapsible={[].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy)).length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.isFundedBy`)}
            >
              <ItemList
                listItems={
                  [].concat.apply([], about.isFundedBy.filter(grant => grant.isAwardedBy).map(grant => grant.isAwardedBy))
                }
              />
            </Block>
          }

          {about.isFundedBy && about.isFundedBy.some(grant => grant.hasMonetaryValue) &&
            <Block className="list" title={translate(`${about['@type']}.budget`)}>
              <ul>
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
              collapsible={[].concat.apply([], about.awards.filter(grant => grant.funds).map(grant => grant.funds)).length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.funds`)}
            >
              <ItemList
                listItems={
                  [].concat.apply([], about.awards.filter(grant => grant.funds).map(grant => grant.funds))
                }
              />
            </Block>
          }

          {about.hasPart &&
            <Block
              collapsible={about.hasPart.length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.hasPart`)}
            >
              <ItemList listItems={about.hasPart} />
            </Block>
          }

          {about.isPartOf &&
            <Block className="list" title={translate(`${about['@type']}.isPartOf`)}>
              <ItemList listItems={[about.isPartOf]} />
            </Block>
          }

          {['member', 'memberOf', 'affiliation', 'affiliate', 'organizer',
            'organizerFor', 'performer', 'performerIn', 'attendee', 'attends', 'created', 'creator', 'publication',
            'publisher', 'manufacturer', 'manufactured', 'mentions', 'mentionedIn', 'instrument', 'instrumentIn',
            'isRelatedTo'].map(prop => (
            about[prop] &&
            <Block
              key={prop}
              collapsible={about[prop].length > 3}
              collapsibleType="show-all"
              className="list"
              title={translate(`${about['@type']}.${prop}`)}
            >
              <ItemList listItems={about[prop]} />
            </Block>
          ))}

          {about.award &&
            <Block title={translate(`${about['@type']}.award`)}>
              <ul>
                {about.award.map(award => (
                  <li>
                    <img key={award} src={award} className="awardImage" alt={translate(`${about['@type']}.award`)} />
                    {translate(award)}
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.license &&
            <Block title={translate(`${about['@type']}.license`)}>
              <ul className="commaSeparatedList">
                {about.license.map(license => (
                  <li key={license['@id']}>
                    <img className="licenseImage" src={license.image} alt={translate(license.name)} />
                  </li>
                ))}
              </ul>
            </Block>
          }

          {about.availableChannel &&
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

          {about.startDate &&
            <Block className="list" title={translate(`${about['@type']}.startDate`)}>
              {moment(about.startDate).format('LL')}
              {about.endDate && ` - ${moment(about.startDate).format('LL')}`}
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
  view: PropTypes.string.isRequired
}

WebPageView.defaultProps = {
  user: null
}

export default withI18n(WebPageView)
