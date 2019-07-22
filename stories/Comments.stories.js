import React from 'react'
import { storiesOf } from '@storybook/react'

import Comments from '../src/components/Comments'
import WithStrings from './WithStrings'
import user from '../test/resources/user.json'
import mock from '../test/helpers/mock'

const comments = [
  {
    "@id": "urn:uuid:7a530cbd-426e-4752-ad86-df9c76cd5cf5",
    "@type": "Comment",
    "author": [
      {
        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
      }
    ],
    "dateCreated": "2018-12-07T16:21:15.917+01:00",
    "text": [
      {
        "@language": "en",
        "@value": "I searched for \"education for sustainable development\" and received 115 hits. So I added the \"esd\" tag."
      }
    ]
  }
]

storiesOf('Comments', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Comments
        comments={comments}
        user={user}
        schema={mock.schema}
      />
    </WithStrings>
  ))