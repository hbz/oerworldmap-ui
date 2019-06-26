import React from 'react'
import { storiesOf } from '@storybook/react'

import Lighthouses from '../src/components/Lighthouses'
import WithStrings from './WithStrings'

import user from '../test/resources/user.json'
import about from '../test/resources/WebPage.json'

const lighthouses = [
  {
    "@id": "urn:uuid:b87704f0-fc4e-410c-befb-27921031bf00",
    "@type": "LighthouseAction",
    "agent": [
      {
        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
      }
    ],
    "description": [
      {
        "@language": "en",
        "@value": "The Open Education Consortium is a perfect example of a network of institutions, which connect to share experiences and resources. "
      }
    ],
    "object": {
      "@id": "urn:uuid:ff56c436-7e76-11e5-b76b-54ee7558c81f"
    }
  },
  {
    "@id": "urn:uuid:5671ca6f-cce8-4077-826b-cbf3acfbe09b",
    "@type": "LighthouseAction",
    "agent": [
      {
        "@id": "urn:uuid:b6725738-8495-11e5-a7a1-54ee7558c81f"
      }
    ],
    "description": [
      {
        "@language": "en",
        "@value": "The Open Education Consortium has long provided international co-ordination and sharing of OER advocacy efforts.  Their annual conference and awards ceremony is a really important point of orientation and system of recognition for the global OER movement."
      }
    ],
    "object": {
      "@id": "urn:uuid:ff56c436-7e76-11e5-b76b-54ee7558c81f"
    }
  }
]


storiesOf('Lighthouses', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Lighthouses
        lighthouses={lighthouses}
        user={user}
        about={about}
      />
    </WithStrings>
  ))