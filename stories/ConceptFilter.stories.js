import React from 'react'
import { storiesOf } from '@storybook/react'

import ConceptFilter from '../src/components/ConceptFilter'
import WithStrings from './WithStrings'

const concepts = [
  {
    "name": [
      {
        "@value": "Pre-Primary Education",
        "@language": "en"
      },
      {
        "@value": "Frühkindliche Bildung",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:0"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level0",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 0",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "Primary education or first stage of basic education",
        "@language": "en"
      },
      {
        "@value": "Grundschule",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:1"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level1",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 1",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "Lower secondary education or second stage of basic education",
        "@language": "en"
      },
      {
        "@value": "Sekundarbereich I",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:2"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level2",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 2",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "Upper secondary education",
        "@language": "en"
      },
      {
        "@value": "Sekundarbereich II",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:3"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level3",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 3",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "Post-secondary non-tertiary education",
        "@language": "en"
      },
      {
        "@value": "Bildung im Anschluß an die Schule außerhalb der Hochschule",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:4"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level4",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 4",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "First stage of tertiary education",
        "@language": "en"
      },
      {
        "@value": "Tertiärer Bereich bis Bachelor",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:5"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level5",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 5",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  },
  {
    "name": [
      {
        "@value": "Second stage of tertiary education",
        "@language": "en"
      },
      {
        "@value": "Tertiärer Bereich bis Master",
        "@language": "de"
      }
    ],
    "notation": [
      "ISCED-1997:6"
    ],
    "topConceptOf": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@id": "https://w3id.org/isced/1997/level6",
    "narrower": [],
    "alternateName": [
      {
        "@value": "ISCED 1997, Level 6",
        "@language": "en"
      }
    ],
    "inScheme": {
      "@id": "https://w3id.org/isced/1997/scheme"
    },
    "@type": "Concept"
  }
]

const filterName = "filter.about.audience.@id"
const aggregation = {
  "doc_count_error_upper_bound": 0,
  "sum_other_doc_count": 0,
  "buckets": [
    {
      "key": "https://w3id.org/isced/1997/level3",
      "doc_count": 196
    },
    {
      "key": "https://w3id.org/isced/1997/level2",
      "doc_count": 187
    },
    {
      "key": "https://w3id.org/isced/1997/level5",
      "doc_count": 171
    },
    {
      "key": "https://w3id.org/isced/1997/level1",
      "doc_count": 146
    },
    {
      "key": "https://w3id.org/isced/1997/level6",
      "doc_count": 139
    },
    {
      "key": "https://w3id.org/isced/1997/level4",
      "doc_count": 100
    },
    {
      "key": "https://w3id.org/isced/1997/level0",
      "doc_count": 50
    }
  ]
}

storiesOf('ConceptFilter', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ConceptFilter
        concepts={concepts}
        aggregation={aggregation}
        filter={[]}
        filterName={filterName}
        submit={() => {}}
      />
    </WithStrings>
  ))