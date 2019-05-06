import React from 'react'
import { storiesOf } from '@storybook/react'

import ConceptTree from '../src/components/ConceptTree'
import WithStrings from './WithStrings'

const webPage = {
  "contributor" : "urn:uuid:f51b3c26-c30d-4fe9-8552-9be47277198a",
  "dateCreated" : "2016-07-04T12:16:29.523+02:00",
  "feature" : {
    "properties" : {
      "@id" : "urn:uuid:4fc8d0c4-58c8-435c-94db-c17f799eed7a",
      "@type" : "Service",
      "name" : [ {
        "@language" : "en",
        "@value" : "Nolwazi Open Educational Resources"
      } ],
      "image" : "http://www.nolwazi.co.za/++theme++cozacares2015/images/nolwazi-logo.png",
      "alternateName" : [ {
        "@language" : "en",
        "@value" : "Nolwazi OERs"
      } ],
      "location" : {
        "address" : {
          "addressCountry" : "ZA",
          "addressLocality" : "Johannesburg",
          "postalCode" : "2194",
          "streetAddress" : "29 Coborn Road"
        }
      }
    },
    "type" : "Feature",
    "id" : "urn:uuid:4fc8d0c4-58c8-435c-94db-c17f799eed7a"
  },
  "@type" : "WebPage",
  "author" : "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
  "about" : {
    "image" : "http://www.nolwazi.co.za/++theme++cozacares2015/images/nolwazi-logo.png",
    "audience" : [ {
      "@id" : "https://w3id.org/isced/1997/level2",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Sekundarbereich I"
      }, {
        "@language" : "en",
        "@value" : "Lower secondary education or second stage of basic education"
      } ]
    }, {
      "@id" : "https://w3id.org/isced/1997/level1",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Grundschule"
      }, {
        "@language" : "en",
        "@value" : "Primary education or first stage of basic education"
      } ]
    }, {
      "@id" : "https://w3id.org/isced/1997/level0",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Frühkindliche Bildung"
      }, {
        "@language" : "en",
        "@value" : "Pre-Primary Education"
      } ]
    }, {
      "@id" : "https://w3id.org/isced/1997/level3",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Sekundarbereich II"
      }, {
        "@language" : "en",
        "@value" : "Upper secondary education"
      } ]
    } ],
    "availableChannel" : [ {
      "serviceUrl" : "https://www.nolwazi.co.za"
    } ],
    "@type" : "Service",
    "about" : [ {
      "@id" : "https://w3id.org/class/esc/n0714",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Elektronik und Automatisierung"
      }, {
        "@language" : "en",
        "@value" : "Electronics and automation"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n022",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Geisteswissenschaften (außer Sprachen)"
      }, {
        "@language" : "en",
        "@value" : "Humanities (except languages)"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n053",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Physikalische Wissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Physical sciences"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0612",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Entwurf und Verwaltung von Datenbanken und Netzwerken"
      }, {
        "@language" : "en",
        "@value" : "Database and network design and administration"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n054",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Mathematik und Statistik"
      }, {
        "@language" : "en",
        "@value" : "Mathematics and statistics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n071",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Ingenieurwesen"
      }, {
        "@language" : "en",
        "@value" : "Engineering and engineering trades"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n04",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Wirtschaft, Verwaltung und Recht"
      }, {
        "@language" : "en",
        "@value" : "Business, administration and law"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0232",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Literatur- und Sprachwissenschaft"
      }, {
        "@language" : "en",
        "@value" : "Literature and linguistics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0533",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Physik"
      }, {
        "@language" : "en",
        "@value" : "Physics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n05",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Naturwissenschaften, Mathematik und Statistik"
      }, {
        "@language" : "en",
        "@value" : "Natural sciences, mathematics and statistics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0213",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Bildende Künste"
      }, {
        "@language" : "en",
        "@value" : "Fine arts"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0532",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Geowissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Earth sciences"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n07",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Ingenieurwesen, Fertigung und Bauwesen"
      }, {
        "@language" : "en",
        "@value" : "Engineering, manufacturing and construction"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0511",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Biologie"
      }, {
        "@language" : "en",
        "@value" : "Biology"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n092",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Soziales"
      }, {
        "@language" : "en",
        "@value" : "Welfare"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0613",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Software- und Anwendungsentwicklung und -analyse"
      }, {
        "@language" : "en",
        "@value" : "Software and applications development and analysis"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0232-en",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Englische Literatur- und Sprachwissenschaft"
      }, {
        "@language" : "en",
        "@value" : "English literature and linguistics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0521",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Umweltwissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Environmental sciences"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n031",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Sozialwissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Social and behavioural sciences"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0922",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Kinderbetreuung und Jugendhilfe"
      }, {
        "@language" : "en",
        "@value" : "Child care and youth services"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0215",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Musik und darstellende Kunst"
      }, {
        "@language" : "en",
        "@value" : "Music and performing arts"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0522",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Naturschutz und Ökologie"
      }, {
        "@language" : "en",
        "@value" : "Natural environments and wildlife"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n002",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Lese- und Rechenfähigkeit"
      }, {
        "@language" : "en",
        "@value" : "Literacy and numeracy"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0415",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Büromanagement"
      }, {
        "@language" : "en",
        "@value" : "Secretarial and office work"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n00",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Allgemeine Programme und Qualifikationen"
      }, {
        "@language" : "en",
        "@value" : "Generic programmes and qualifications"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0723",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Textilien (Kleidung, Schuhe und Leder)"
      }, {
        "@language" : "en",
        "@value" : "Textiles (clothes, footwear and leather)"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n08",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Land- und Forstwirtschaft, Fischerei und Veterinärmedizin"
      }, {
        "@language" : "en",
        "@value" : "Agriculture, forestry, fisheries and veterinary"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n081",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Landwirtschaft"
      }, {
        "@language" : "en",
        "@value" : "Agriculture"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0222",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Geschichte und Archäologie"
      }, {
        "@language" : "en",
        "@value" : "History and archaeology"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n01",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Bildung"
      }, {
        "@language" : "en",
        "@value" : "Education"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n09",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Gesundheit und Soziales"
      }, {
        "@language" : "en",
        "@value" : "Health and welfare"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0812",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Gartenbau"
      }, {
        "@language" : "en",
        "@value" : "Horticulture"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0223",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Philosophie und Ethik"
      }, {
        "@language" : "en",
        "@value" : "Philosophy and ethics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0311",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Volkswirtschaftslehre"
      }, {
        "@language" : "en",
        "@value" : "Economics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0113",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Lehrerausbildung ohne Fachausrichtung"
      }, {
        "@language" : "en",
        "@value" : "Teacher training without subject specialisation"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n072",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Produktion und Verarbeitung"
      }, {
        "@language" : "en",
        "@value" : "Manufacturing and processing"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0811",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Pflanzen- und Tierproduktion"
      }, {
        "@language" : "en",
        "@value" : "Crop and livestock production"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0713",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Elektrizität und Energieversorgung"
      }, {
        "@language" : "en",
        "@value" : "Electricity and energy"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0512",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Biochemie"
      }, {
        "@language" : "en",
        "@value" : "Biochemistry"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n021",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Kunst"
      }, {
        "@language" : "en",
        "@value" : "Arts"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0541",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Mathematik"
      }, {
        "@language" : "en",
        "@value" : "Mathematics"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n051",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Biologie und verwandte Wissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Biological and related sciences"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0721",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Nahrungsmittelverarbeitung"
      }, {
        "@language" : "en",
        "@value" : "Food processing"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n06",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Informationstechnik (IT)"
      }, {
        "@language" : "en",
        "@value" : "Information and Communication Technologies (ICTs)"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0417",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Arbeitstechniken"
      }, {
        "@language" : "en",
        "@value" : "Work skills"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n052",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Umwelt"
      }, {
        "@language" : "en",
        "@value" : "Environment"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n02",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Geisteswissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Arts and humanities"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0231",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Spracherwerb"
      }, {
        "@language" : "en",
        "@value" : "Language acquisition"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0611",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Computerbenutzung"
      }, {
        "@language" : "en",
        "@value" : "Computer use"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0531",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Chemie"
      }, {
        "@language" : "en",
        "@value" : "Chemistry"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n03",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Sozialwissenschaften, Journalismus und Informationswissenschaften"
      }, {
        "@language" : "en",
        "@value" : "Social sciences, journalism and information"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n0715",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Mechanik und Metallverarbeitung"
      }, {
        "@language" : "en",
        "@value" : "Mechanics and metal trades"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n023",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Sprachen"
      }, {
        "@language" : "en",
        "@value" : "Languages"
      } ]
    }, {
      "@id" : "https://w3id.org/class/esc/n041",
      "@type" : "Concept",
      "name" : [ {
        "@language" : "de",
        "@value" : "Wirtschaft und Verwaltung"
      }, {
        "@language" : "en",
        "@value" : "Business and administration"
      } ]
    } ],
    "description" : [ {
      "@language" : "en",
      "@value" : "Nolwazi is a digital repository of resources intended to supplement teaching and learning throughout South Africa – created by teachers for teachers.\r\n\r\nAll content is CAPS-aligned and vetted by qualified content team.  It relates to both primary & high school subjects and includes past exam papers, videos, simulations, lesson plans, apps, worksheets, e-books and DBE/DoE curriculum documents. An e-library is in development.\r\n\r\nTeachers & learners can search for relevant content & download it directly to any device, both offline & online, 24 hours a day, 365 days a year.\r\n\r\nNolwazi content is delivered via kiosk, school server and on the web, with our dedicated Nolwazi site!"
    } ],
    "alternateName" : [ {
      "@language" : "en",
      "@value" : "Nolwazi OERs"
    } ],
    "@context" : "https://oerworldmap.org/assets/json/context.json",
    "license" : [ {
      "@id" : "https://oerworldmap.org/assets/json/licenses.json#by-nc-sa",
      "@type" : "Concept",
      "image" : "http://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png",
      "name" : [ {
        "@language" : "de",
        "@value" : "Creative Commons Namensnennung, nicht kommerziell, Weitergabe unter gleichen Bedingungen"
      }, {
        "@language" : "en",
        "@value" : "Creative Commons Attribution Non-Commercial Share-Alike"
      } ]
    } ],
    "provider" : [ {
      "@id" : "urn:uuid:0fa4771b-4302-4a2e-8359-3d65cbc1c361",
      "@type" : "Organization",
      "description" : [ {
        "@language" : "en",
        "@value" : "The Nolwazi OER platform was developed over many years of collaboration, research and piloting, into what has become a uniquely sourced, well curated and continually updated platform for the development of the basic education project in South Africa. It is an easily accessible resource for schools, educators and the South African community, delivered online or offline, via an eLearning kiosk, server or the Web. It has its roots in the collaboration between Breadbin and CoZa Cares Foundation. It is now an independent NPO (183-410 NPO)."
      } ],
      "image" : "https://pbs.twimg.com/media/CzjGODFWgAA8Q0N.jpg:large",
      "location" : {
        "address" : {
          "addressCountry" : "ZA",
          "addressLocality" : "Johannesburg",
          "addressRegion" : "ZA.GT",
          "postalCode" : "2123",
          "streetAddress" : "Randburg"
        },
        "geo" : {
          "lat" : -25.943936,
          "lon" : 28.140053
        }
      },
      "name" : [ {
        "@language" : "en",
        "@value" : "Nolwazi Open Education Resources"
      } ]
    } ],
    "name" : [ {
      "@language" : "en",
      "@value" : "Nolwazi Open Educational Resources"
    } ],
    "location" : {
      "address" : {
        "addressCountry" : "ZA",
        "addressLocality" : "Johannesburg",
        "postalCode" : "2194",
        "streetAddress" : "29 Coborn Road"
      }
    },
    "@id" : "urn:uuid:4fc8d0c4-58c8-435c-94db-c17f799eed7a",
    "email" : "wallacefionajean@gmail.com",
    "startDate" : "20120101",
    "sameAs" : [ "https://twitter.com/Nolwazi_ZA" ]
  },
  "dateModified" : "2017-11-14T22:58:15.517+01:00",
  "@id" : "urn:uuid:4fc8d0c4-58c8-435c-94db-c17f799eed7a.about"
}
storiesOf('ConceptTree', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <ConceptTree
        concepts={require('../src/json/esc.json').hasTopConcept}
        include={webPage.about.about.map(concept => concept['@id'])}
        className="ItemList recursive"
        linkTemplate="/resource/?filter.about.about.@id={@id}"
      />
    </WithStrings>
  ))