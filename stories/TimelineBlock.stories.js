import React from 'react'
import { storiesOf } from '@storybook/react'

import TimelineBlock from '../src/components/TimelineBlock'
import WithStrings from './WithStrings'

const entry = {
  "about": {
    "@type": "Person",
    "name": [
      {
        "@language": "en",
        "@value": "fabio sinobre"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR"
      }
    },
    "@id": "urn:uuid:fbe93779-be15-4cee-93b9-f78f5f6dc0b6",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "1819976@aluno.univesp.br"
  },
  "action": {
    "time": "2019-05-06T02:27:47.372+02:00",
    "type": "add"
  },
  "id": "e2d5b93e7bf570b42635a35252b3955031d7e7fd"
}

storiesOf('TimelineBlock', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <TimelineBlock
        key={`${entry.id}-${entry.action.time}`}
        withBorder
        entry={entry}
      />
    </WithStrings>
  ))
  .add('Without border', () => (
    <WithStrings lang="en">
      <TimelineBlock
        key={`${entry.id}-${entry.action.time}`}
        entry={entry}
      />
    </WithStrings>
  ))