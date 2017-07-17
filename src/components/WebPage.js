import React from 'react'

import translate from './translate'

const WebPage = ({translate, moment, author, contributor, dateCreated, dateModified, about}) => (
  <div>
    <h1>{translate(about.name)}</h1>
    <p>{translate('WebPage.lastEdited', {contributor: contributor, dateModified: moment(dateModified).calendar()})}</p>
    <pre>{JSON.stringify(about, null, 2)}</pre>
  </div>
)

export default translate(WebPage)
