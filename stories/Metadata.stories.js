import React from 'react'
import { storiesOf } from '@storybook/react'

import Metadata from '../src/components/Metadata'
import WithStrings from './WithStrings'
import about from '../test/resources/WebPage.json'
import user from '../test/resources/user.json'

const aboutWithAdditional  = JSON.parse(JSON.stringify(about))

aboutWithAdditional.additionalType = [ {
  "@id" : "https://oerworldmap.org/assets/json/organizations.json#fundingBody",
  "@type" : "Concept",
  "name" : [ {
    "@language" : "en",
    "@value" : "Funding body"
  }, {
    "@language" : "pt",
    "@value" : "Funding body"
  }, {
    "@language" : "de",
    "@value" : "Förderinstitution"
  } ]
}]

const story = storiesOf('Metadata', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Metadata
        type={about["@type"]}
        about={about}
        dateModified="2018-02-22T16:26:27.753"
      />
    </WithStrings>
  ))
  .add('With user', () => (
    <WithStrings lang="en">
      <Metadata
        type={about["@type"]}
        about={about}
        dateModified="2018-02-22T16:26:27.753"
        user={user}
      />
    </WithStrings>
  ))

story.add('With additionalType', () => (
  <WithStrings lang="en">
    <Metadata
      type={aboutWithAdditional["@type"]}
      about={aboutWithAdditional}
      dateModified="2018-02-22T16:26:27.753"
    />
  </WithStrings>
))