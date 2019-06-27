
/* global mapboxConfig */
import React from 'react'
import { storiesOf } from '@storybook/react'

import WebPageHeader from '../src/components/WebPageHeader'
import WithStrings from './WithStrings'

import user from '../test/resources/user.json'
import about from '../test/resources/WebPage.json'

const contributor = "urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957"
const dateModified = "2019-03-18T11:27:11.109+01:00"
const _self = "https://oerworldmap.org/resource/urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957?"
const _links = {
  "refs": [
    {
      "uri": "/resource/urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957.geojson?disposition=",
      "rel": "alternate",
      "type": "application/geo+json"
    },
    {
      "uri": "/resource/urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957.json?disposition=",
      "rel": "alternate",
      "type": "application/json"
    },
    {
      "uri": "/resource/urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957.csv?disposition=",
      "rel": "alternate",
      "type": "text/csv"
    }
  ]
}

storiesOf('WebPageHeader', module)
  .add('Render', () => (
    <WithStrings lang={["en"]}>
      <WebPageHeader
        user={user}
        about={about}
        author={null}
        contributor={contributor}
        dateModified={dateModified}
        view=""
        _self={_self}
        _links={_links}
        embedValue
      />
    </WithStrings>
  ))
  .add('Without user', () => (
    <WithStrings lang={["en"]}>
      <WebPageHeader
        about={about}
        author={null}
        contributor={contributor}
        dateModified={dateModified}
        view=""
        _self={_self}
        _links={_links}
        embedValue
      />
    </WithStrings>
  ))
  .add('In edit view', () => (
    <WithStrings lang={["en"]}>
      <WebPageHeader
        user={user}
        about={about}
        author={null}
        contributor={contributor}
        dateModified={dateModified}
        view="edit"
        _self={_self}
        _links={_links}
        embedValue
      />
    </WithStrings>
  ))