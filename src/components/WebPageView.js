/* global btoa */
import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs'
import urlTemplate from 'url-template'
import ResourceImage from './ResourceImage'

import withI18n from './withI18n'
import withUser from './withUser'
import Block from './Block'
import ItemList from './ItemList'
import Link from './Link'
import ConceptTree from './ConceptTree'
import WebPageUserActions from './WebPageUserActions'
import SocialLinks from './SocialLinks'
import Comments from './Comments'
import Topline from './Topline'
import Lighthouses from './Lighthouses'
import LinkOverride from './LinkOverride'
import MiniMap from './MiniMap'

import { formatURL, formatDate } from '../common'
import centroids from '../json/centroids.json'
import expose from '../expose'
import '../styles/components/WebPageView.pcss'

const WebPageView = ({
  translate,
  moment,
  about,
  user,
  view,
  expandAll,
  schema,
  locales,
  isLiveEvent,
  feature,
  mapboxConfig,
}) => {
  const lighthouses = (about.objectIn || []).filter(action => action['@type'] === 'LighthouseAction') || []
  const likes = (about.objectIn || []).filter(action => action['@type'] === 'LikeAction') || []

  const sortedNames = about.name ? [
    ...Object.keys(about.name)
      .filter(n => locales.includes(n)).sort((a, b) => locales.indexOf(a) - locales.indexOf(b)),
    ...Object.keys(about.name)
      .filter(n => !locales.includes(n)),
  ] : []

  const sortedDescriptions = about.description ? [
    ...Object.keys(about.description)
      .filter(n => locales.includes(n)).sort((a, b) => locales.indexOf(a) - locales.indexOf(b)),
    ...Object.keys(about.description)
      .filter(n => !locales.includes(n)),
  ] : []

  const country = (about
    && about.location
    && about.location[0]
    && about.location[0].address
    && about.location[0].address.addressCountry) || null

  const geometry = feature && feature.geometry


  return (
    <div className={`WebPageView ${about['@type']}`}>

      <h2>
        {about.name && Object.keys(about.name).length > 1 ? (
          <Tabs>
            {sortedNames.map(lang => (
              <TabPanel className="inline" key={`panel-${lang}`}>
                {about.name[lang]}
              </TabPanel>
            ))}

            {about.alternateName && (
              <span className="alternate">
                &nbsp;
                (
                {translate(about.alternateName)}
                )
              </span>
            )}

            <br />
            <span className="hint">
              {translate('Also available in:')}
              &nbsp;
            </span>
            <TabList>
              {sortedNames.map((lang, i) => (
                <Tab key={`tab-${lang}`}>
                  {translate(lang)}
                  {i !== (Object.keys(about.name).length - 1) && (
                    <React.Fragment>
                      &nbsp;
                    </React.Fragment>
                  )}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        ) : (
          <React.Fragment>
            {translate(about.name)}

            {about.alternateName && (
              <span className="alternate">
                &nbsp;
                (
                {translate(about.alternateName)}
                )
              </span>
            )}
          </React.Fragment>
        )}
      </h2>

      <Topline about={about} />

      {isLiveEvent && (
        <div className="isLiveEvent">
          <a
            href={`https://twitter.com/hashtag/${about.hashtag.replace('#', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="liveBtn"
          >
            <button className="btn">
              <i className="fa fa-external-link" />
              &nbsp;
              {translate('Currently taking place: Follow the discussion on Social Media!')}
            </button>
          </a>
        </div>
      )}

      {expose('userActions', user)
        && <WebPageUserActions about={about} view={view} schema={schema} />
      }

      <div className="row stack-700 stack-gutter-2em">

        <div className="col two-third">


          <div
            className="border-top text-large"
            // style={{ paddingTop: '2em' }}
          >


            {about.sameAs
              && <SocialLinks links={about.sameAs} />
            }


            <Block
              className="first description"
              title={translate(`${about['@type']}.description`)}
              type={about['@type']}
            >
              {about.description ? (
                Object.keys(about.description).length > 1 ? (
                  <Tabs>
                    {sortedDescriptions.map(lang => (
                      <TabPanel key={`panel-${lang}`}>
                        <Markdown options={{
                          overrides: {
                            a: {
                              component: LinkOverride,
                            },
                          },
                        }}
                        >
                          {about.description[lang]}
                        </Markdown>
                      </TabPanel>
                    ))}

                    <span className="hint">
                      {translate('Also available in:')}
                      &nbsp;
                    </span>
                    <TabList>
                      {sortedDescriptions.map((lang, i) => (
                        <Tab key={`tab-${lang}`}>
                          <span>{translate(lang)}</span>
                          {i !== (Object.keys(about.description).length - 1) && (
                            <React.Fragment>
                              &nbsp;
                            </React.Fragment>
                          )}
                        </Tab>
                      ))}
                    </TabList>
                  </Tabs>
                ) : (
                  <Markdown options={{
                    overrides: {
                      a: {
                        component: LinkOverride,
                      },
                    },
                  }}
                  >
                    {translate(about.description)}
                  </Markdown>
                )
              ) : (
                <p>
                  <i>
                    {translate('A description for this entry is missing.')}
                    {expose('editEntry', user, about) && (
                      <Link href="#edit">
                        &nbsp;
                        {translate('Help us by adding some information!')}
                      </Link>
                    )}
                    {!user && about['@type'] !== 'Person' && (
                      <Link href="/user/register">
                        &nbsp;
                        {translate('Help us by adding some information!')}
                      </Link>
                    )}
                  </i>
                </p>
              )}
            </Block>

            {about.articleBody && (
              <Block
                className="first description"
                title=""
              >
                {about.articleBody && about.articleBody.length > 1 ? (
                  <Tabs>
                    {about.articleBody.map(article => (
                      <TabPanel key={`panel-${article['@value']}`}>
                        <Markdown options={{
                          overrides: {
                            a: {
                              component: LinkOverride,
                            },
                          },
                        }}
                        >
                          {article['@value']}
                        </Markdown>
                      </TabPanel>
                    ))}

                    <span className="hint">
                      {translate('Also available in:')}
                      &nbsp;
                    </span>
                    <TabList>
                      {about.articleBody.map((article, i) => (
                        <Tab key={`tab-${article['@value']}`}>
                          {translate(article['@language'])}
                          {i !== (about.articleBody.length - 1) && (
                            <React.Fragment>
                              &nbsp;
                            </React.Fragment>
                          )}
                        </Tab>
                      ))}
                    </TabList>
                  </Tabs>
                ) : (
                  <Markdown options={{
                    overrides: {
                      a: {
                        component: LinkOverride,
                      },
                    },
                  }}
                  >
                    {translate(about.articleBody)}
                  </Markdown>
                )}
              </Block>
            )}

            {about.url && (
              <>
                <h4>
                  {translate('link')}
                </h4>
                <p>
                  <a href={about.url} target="_blank" rel="noopener noreferrer" className="boxedLink">
                    <i className="fa fa-external-link" />
                    {' '}
                    {formatURL(about.url)}
                  </a>
                </p>
              </>
            )}

            {about.citation && (
              <p>
                <cite>{about.citation}</cite>
              </p>
            )}

            {about.availableChannel
              && about.availableChannel.map(link => (
                <a key={link.serviceUrl} href={link.serviceUrl} target="_blank" rel="noopener noreferrer">
                  {formatURL(link.serviceUrl)}
                </a>
              ))
            }

            <hr className="border-grey" />

            {about.keywords && (
              <Block
                title={translate(`${about['@type']}.keywords`)}
                addButton={expose('editEntry', user, about) && '.KeywordSelect.keywords'}
              >
                <ul className="spaceSeparatedList">
                  {about.keywords.sort((a, b) => a > b).map(keyword => (
                    <li key={keyword}>
                      <Link href={`/resource/?filter.about.keywords=${encodeURIComponent(keyword.toLowerCase())}`}>
                        {keyword}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {about.about && (
              <Block
                className="list"
                title={translate(`${about['@type']}.about`)}
                addButton={expose('editEntry', user, about) && '.List.about'}
              >
                <ConceptTree
                  concepts={require('../json/esc.json').hasTopConcept}
                  include={about.about.map(concept => concept['@id'])}
                  className="ItemList recursive"
                  linkTemplate="/resource/?filter.about.about.@id={@id}"
                />
              </Block>
            )}

            {about.audience && (
              <Block
                className="list"
                title={translate(`${about['@type']}.audience`)}
                addButton={expose('editEntry', user, about) && '.List.audience'}
              >
                <ConceptTree
                  concepts={require('../json/isced-1997.json').hasTopConcept}
                  include={about.audience.map(concept => concept['@id'])}
                  className="ItemList"
                  linkTemplate="/resource/?filter.about.audience.@id={@id}"
                />
              </Block>
            )}

            {['primarySector', 'secondarySector'].map(prop => (
              about[prop] && (
                <Block
                  key={prop}
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                  addButton={expose('editEntry', user, about) && `.List.${prop}`}
                >
                  <ConceptTree
                    concepts={require('../json/sectors.json').hasTopConcept}
                    include={about[prop].map(concept => concept['@id'])}
                    className="ItemList"
                    linkTemplate={`/resource/?filter.about.${prop}.@id={@id}`}
                  />
                </Block>
              )))}

            {about.isFundedBy && about.isFundedBy.some(grant => grant.isAwardedBy) && (
              <Block
                collapsible={!expandAll
                  && [].concat(...about.isFundedBy.filter(grant => grant.isAwardedBy)
                    .map(grant => grant.isAwardedBy)).length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate(`${about['@type']}.isFundedBy`)}
                addButton={expose('editEntry', user, about) && '.List.isAwardedBy'}
              >
                <ItemList
                  tooltip={false}
                  listItems={
                    [].concat(...about.isFundedBy.filter(grant => grant.isAwardedBy)
                      .map(grant => grant.isAwardedBy))
                      .sort((a, b) => translate(a.name) > translate(b.name))
                  }
                  className="prominent"
                />
              </Block>
            )}

            {about.isFundedBy && about.isFundedBy.some(grant => grant.hasMonetaryValue) && (
              <Block title={translate(`${about['@type']}.budget`)}>
                <ul className="commaSeparatedList">
                  {about.isFundedBy.filter(grant => grant.hasMonetaryValue).map((grant, i) => (
                    <li key={i}>
                      {grant.hasMonetaryValue}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {about.contactPoint && (
              <Block
                className="list"
                title={translate(`${about['@type']}.contactPoint`)}
                addButton={expose('editEntry', user, about) && '.List.contactPoint'}
              >
                <ItemList
                  tooltip={false}
                  listItems={about.contactPoint
                    .sort((a, b) => translate(a.name) > translate(b.name))}
                  className="prominent"
                />
              </Block>
            )}

            {about.isPartOf && (
              <Block
                className="list"
                title={translate(`${about['@type']}.isPartOf`)}
                addButton={expose('editEntry', user, about) && '.RemoteSelect.isPartOf'}
              >
                <ItemList
                  tooltip={false}
                  listItems={[about.isPartOf]
                    .sort((a, b) => translate(a.name) > translate(b.name))}
                  className="prominent"
                />
              </Block>
            )}

            {about.hasPart && (
              <Block
                collapsible={!expandAll && about.hasPart.length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate(`${about['@type']}.hasPart`)}
                addButton={expose('editEntry', user, about) && '.RemoteSelect.isPartOf'}
              >
                <ItemList
                  tooltip={false}
                  listItems={about.hasPart
                    .sort((a, b) => translate(a.name) > translate(b.name))}
                  className="prominent"
                />
              </Block>
            )}

            {
              ['result', 'resultOf', 'provides', 'provider', 'agent'].map(
                prop => (
                  about[prop] && (
                    <Block
                      key={prop}
                      collapsible={!expandAll && about[prop].length > 3}
                      collapsibleType="show-all"
                      className="list"
                      title={translate(`${about['@type']}.${prop}`)}
                    >
                      <ItemList
                        tooltip={false}
                        listItems={about[prop]
                          .sort((a, b) => translate(a.name) > translate(b.name))}
                        className="prominent"
                      />
                    </Block>
                  )),
              )
            }

            {about.agentIn && about.agentIn.some(item => item['@type'] === 'Action') && (
              <Block
                collapsible={!expandAll && about.agentIn.filter(item => item['@type'] === 'Action').length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate(`${about['@type']}.agentIn`)}
              >
                <ItemList
                  tooltip={false}
                  listItems={about.agentIn.filter(item => item['@type'] === 'Action')
                    .sort((a, b) => translate(a.name) > translate(b.name))}
                  className="prominent"
                />
              </Block>
            )}

            {about.agentIn && about.agentIn.some(item => item['@type'] === 'LighthouseAction') && (
              <Block
                collapsible={!expandAll && about.agentIn.filter(item => item['@type'] === 'LighthouseAction').length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate('Lighthouses')}
              >
                <ItemList
                  tooltip={false}
                  listItems={about.agentIn.filter(action => action['@type'] === 'LighthouseAction')
                    .map(lighthouseAction => lighthouseAction.object)
                    .sort((a, b) => translate(a['@id']) > translate(b['@id']))
                  }
                  className="prominent"
                />
              </Block>
            )}

            {about.agentIn && about.agentIn.some(item => item['@type'] === 'LikeAction') && (
              <Block
                collapsible={!expandAll && about.agentIn.filter(item => item['@type'] === 'LikeAction').length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate('Likes')}
              >
                <ItemList
                  tooltip={false}
                  listItems={about.agentIn.filter(action => action['@type'] === 'LikeAction')
                    .filter(LikeAction => !!LikeAction.object)
                    .map(LikeAction => LikeAction.object)
                    .sort((a, b) => translate(a['@id']) > translate(b['@id']))
                  }
                  className="prominent"
                />
              </Block>
            )}

            {about.awards && about.awards.some(grant => grant.funds) && (
              <Block
                collapsible={!expandAll
                  && [].concat(...about.awards.filter(grant => grant.funds)
                    .map(grant => grant.funds)).length > 3}
                collapsibleType="show-all"
                className="list"
                title={translate(`${about['@type']}.funds`)}
              >
                <ItemList
                  tooltip={false}
                  listItems={
                    [].concat(...about.awards.filter(grant => grant.funds)
                      .map(grant => grant.funds))
                      .sort((a, b) => translate(a.name) > translate(b.name))
                  }
                  className="prominent"
                />
              </Block>
            )}

            {
              ['participant', 'participantIn'].map(
                prop => (
                  about[prop] && (
                    <Block
                      key={prop}
                      collapsible={!expandAll && about[prop].length > 3}
                      collapsibleType="show-all"
                      className="list"
                      title={translate(`${about['@type']}.${prop}`)}
                      addButton={expose('editEntry', user, about) && `.List.${prop}`}
                    >
                      <ItemList
                        tooltip={false}
                        listItems={about[prop]
                          .sort((a, b) => translate(a.name) > translate(b.name))}
                        className="prominent"
                      />
                    </Block>
                  )),
              )
            }

            {['member', 'memberOf', 'affiliation', 'affiliate', 'organizer',
              'organizerFor', 'performer', 'performerIn', 'attendee', 'attends', 'created', 'creator', 'publication',
              'publisher', 'manufacturer', 'manufactured', 'mentions', 'mentionedIn', 'instrument', 'instrumentIn',
              'isRelatedTo', 'isBasedOn', 'isBasisFor'].map(prop => (
              about[prop] && (
                <Block
                  key={prop}
                  collapsible={!expandAll && about[prop].length > 3}
                  collapsibleType="show-all"
                  className="list"
                  title={translate(`${about['@type']}.${prop}`)}
                  addButton={expose('editEntry', user, about) && `.List.${prop}`}
                >
                  <ItemList
                    tooltip={false}
                    listItems={about[prop]
                      .sort((a, b) => translate(a.name) > translate(b.name))}
                    className="prominent"
                  />
                </Block>
              )))}

            {lighthouses.length > 0 && about['@id'] && (
              <Block id="lighthouses" title={translate('ResourceIndex.read.lighthouses.title')}>
                <Lighthouses lighthouses={lighthouses} about={about} />
              </Block>
            )}

            {about['@id'] && about['@type'] !== 'Person' && (
              <Block title={translate('ResourceIndex.read.comments')}>
                <Comments comments={about.comment} about={about} schema={schema} />
              </Block>
            )}

          </div>

        </div>

        <aside className="col one-third">

          <hr style={{ marginBottom: '0px' }} />

          <ResourceImage about={about} className="logo" view={view} disableDefault />

          {(lighthouses.length > 0 || likes.length > 0 || about['@type'] === 'Policy') && (
            <div className="Block" style={{ marginTop: '0px' }}>
              <ul className="ItemList prominent">
                {about['@type'] === 'Policy' && (
                  <li>
                    <a className="item" href="/oerpolicies">
                      <i aria-hidden="true" className="fa fa-balance-scale bg-highlight-color bg-important" />
                      <span>
                        {translate('This policy is part of the OER policy registry')}
                      </span>
                    </a>
                  </li>
                )}
                {lighthouses.length > 0 && (
                  <li>
                    <a href="#lighthouses">
                      <div className="item lighthouses">
                        <i aria-hidden="true" className="bg-highlight-color bg-important">
                          <img
                            src="/public/lighthouse_16px_white.svg"
                            alt="Lighthouse"
                          />
                        </i>
                        <span>
                          {translate('Lighthouses')}
                          &nbsp;
                          (
                          {lighthouses.length}
                          )
                        </span>
                      </div>
                    </a>
                  </li>
                )}
                {likes.length > 0 && (
                  <li>
                    <div className="item">
                      <i aria-hidden="true" className="fa fa-thumbs-up bg-highlight-color bg-important" />
                      <span>
                        {translate('Likes')}
                        &nbsp;
                        (
                        {likes.length}
                        )
                      </span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          )}

          {about.additionalType && (
            <Block title={translate(`${about['@type']}.additionalType`)}>
              {about.additionalType.map(type => (
                <React.Fragment key={type['@id']}>
                  <Link href={urlTemplate.parse('/resource/?filter.about.additionalType.@id={@id}').expand(type)}>
                    {translate(type.name)}
                  </Link>
                  <br />
                </React.Fragment>
              ))}
            </Block>
          )}

          {about.scope && (
            <Block title={translate(`${about['@type']}.scope`)}>
              {about.scope.map(scope => (
                <React.Fragment key={scope['@id']}>
                  <Link href={urlTemplate.parse('/resource/?filter.about.scope.@id={@id}').expand(scope)}>
                    {translate(scope.name)}
                  </Link>
                  <br />
                </React.Fragment>
              ))}
            </Block>
          )}

          {about.focus && (
            <Block title={translate(`${about['@type']}.focus`)}>
              {about.focus.map(focus => (
                <React.Fragment key={focus}>
                  <Link href={`/resource/?filter.about.focus.keyword=${focus}`}>
                    {translate(focus)}
                  </Link>
                  <br />
                </React.Fragment>
              ))}
            </Block>
          )}

          {about.award && (
            <Block className="list" title={translate(`${about['@type']}.award`)}>
              <ul className="ItemList award">
                {about.award.map(award => (
                  <li key={award}>
                    <a className="item" href={award} target="_blank" rel="noopener noreferrer">
                      <img src={award} className="awardImage" alt={translate(`${about['@type']}.award`)} />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {about.email && (
            <Block title={translate(`${about['@type']}.email`)}>
              <p>
                <a
                  href={`mailto:${Buffer ? Buffer.from(about.email).toString('base64') : btoa(about.email)}`}
                  onClick={(e) => {
                    e.target.href = `mailto:${about.email}`
                  }}
                >
                  {about.email}
                </a>
              </p>
            </Block>
          )}

          {about.contact && (
            <Block title={translate(`${about['@type']}.contact`)}>
              <p>
                {about.contact}
              </p>
            </Block>
          )}

          {about.status && (
            <Block title={translate(`${about['@type']}.status`)}>
              <Link href={`/resource/?filter.about.status=${about.status}`}>
                {about.status}
              </Link>
            </Block>
          )}

          {(about.location
          && about.location.filter(location => !!location.address).map((location, i) => (
            <Block title={translate(`${about['@type']}.location`)} key={i}>
              <>
                {about['@type'] !== 'Policy' && (
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '200px',
                    }}
                  >
                    <MiniMap
                      mapboxConfig={mapboxConfig}
                      geometry={geometry}
                      center={geometry ? undefined : (country && centroids[country])}
                      isLiveEvent={isLiveEvent}
                    />
                  </div>
                )}
                <p>
                  {location.address.streetAddress
                    && [location.address.streetAddress, <br key="br" />]
                  }
                  {location.address.postalCode}
                  {location.address.postalCode && location.address.addressLocality
                    && <span>,&nbsp;</span>
                  }
                  {location.address.addressLocality}
                  {(location.address.postalCode || location.address.addressLocality)
                    && <br />
                  }
                  {location.address.addressRegion
                    && [translate(location.address.addressRegion), <br key="br" />]
                  }
                  {location.address.addressCountry && (
                    <Link href={`/country/${location.address.addressCountry}`}>
                      {translate(location.address.addressCountry)}
                    </Link>
                  )}
                </p>
              </>
            </Block>
          )))}

          {about.spatial && (
            <Block title={translate(`${about['@type']}.spatial`)}>
              {translate(about.spatial.name)}
            </Block>
          )}

          {about.activityField && (
            <Block className="list" title={translate(`${about['@type']}.activityField`)}>
              <ConceptTree
                concepts={require('../json/activities.json').hasTopConcept}
                include={about.activityField.map(concept => concept['@id'])}
                className="ItemList recursive"
                linkTemplate="/resource/?filter.about.activityField.@id={@id}"
              />
            </Block>
          )}

          {about.spatialCoverage && (
            <Block title={translate(`${about['@type']}.spatialCoverage`)}>
              <Link href={`/resource/?filter.about.spatialCoverage=${about.spatialCoverage}`}>
                {about.spatialCoverage}
              </Link>
            </Block>
          )}

          {about.startTime && (
            <Block title={translate(`${about['@type']}.startTime`)}>
              {formatDate(about.startTime, moment)}
              {about.endTime && (
                <span>
                  &nbsp;–&nbsp;
                  {formatDate(about.endTime, moment)}
                </span>
              )}
            </Block>
          )}

          {about.startDate && (
            <Block title={translate(`${about['@type']}.startDate`)}>
              {formatDate(about.startDate, moment)}
              {about.endDate && (
                <span>
                  &nbsp;–&nbsp;
                  {formatDate(about.endDate, moment)}
                </span>
              )}
            </Block>
          )}

          {about.datePublished && [
            <Block title={translate(`${about['@type']}.datePublished`)}>
              {formatDate(about.datePublished, moment)}
            </Block>,
            about.endDate && (
              <Block title={translate(`${about['@type']}.endDate`)}>
                {formatDate(about.endDate, moment)}
              </Block>
            ),
          ]}

          {about.inLanguage && (
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
          )}

          {about.availableChannel
          && about.availableChannel.some(channel => channel.availableLanguage) && (
            <Block title={translate(`${about['@type']}.availableChannel.availableLanguage`)}>
              <ul className="commaSeparatedList">
                {[].concat(...about.availableChannel.map(channel => channel.availableLanguage))
                  .map(lang => (
                    <li key={lang}>
                      <Link href={`/resource/?filter.about.availableChannel.availableLanguage=${lang}`}>
                        {translate(lang)}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Block>
          )}

          {about.hashtag && (
            <Block title={translate(`${about['@type']}.hashtag`)}>
              <a
                href={`https://twitter.com/hashtag/${about.hashtag.replace('#', '')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {about.hashtag}
              </a>
            </Block>
          )}

          {about.recordedIn && (
            <Block title={translate(`${about['@type']}.recordedIn`)}>
              <ul className="unstyledList">
                {about.recordedIn.map(recording => (
                  <li key={recording}>
                    <a href={recording} target="_blank" rel="noopener noreferrer">
                      {formatURL(recording)}
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {about.license && (
            <Block title={translate(`${about['@type']}.license`)}>
              <ul className="spaceSeparatedList">
                {about.license.map(license => (
                  <li key={license['@id']}>
                    <img className="licenseImage" src={license.image} alt={translate(license.name)} />
                  </li>
                ))}
              </ul>
            </Block>
          )}

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
  schema: PropTypes.objectOf(PropTypes.any).isRequired,
  locales: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLiveEvent: PropTypes.bool,
  feature: PropTypes.objectOf(PropTypes.any),
  mapboxConfig: PropTypes.shape(
    {
      token: PropTypes.string,
      style: PropTypes.string,
      miniMapStyle: PropTypes.string,
    },
  ).isRequired,
}

WebPageView.defaultProps = {
  user: null,
  expandAll: false,
  isLiveEvent: undefined,
  feature: null,
}

export default withI18n(withUser(WebPageView))
