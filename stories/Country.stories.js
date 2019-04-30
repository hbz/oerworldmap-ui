import React from 'react'
import { storiesOf } from '@storybook/react'

import Country from '../src/components/Country'
import WithStrings from './WithStrings'

const countryData = {
  "doc_count": 988,
  "filter#reports": {
    "doc_count": 4,
    "top_hits#country_reports": {
      "hits": {
        "total": 4,
        "max_score": 1,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a767ce48-9d23-4099-964a-a3ab4bf4ff90.about",
            "_score": 1,
            "_source": {
              "contributor": "urn:uuid:8082d2c7-8f40-449f-bd0b-581ce770ca27",
              "dateCreated": "2017-03-13T10:42:19.7+01:00",
              "like_count": "0",
              "feature": {
                "properties": {
                  "@id": "urn:uuid:a767ce48-9d23-4099-964a-a3ab4bf4ff90",
                  "@type": "WebPage",
                  "name": [
                    {
                      "@language": "en",
                      "@value": "The German speaking OER landscape in numbers (2016)"
                    }
                  ],
                  "location": {
                    "address": {
                      "addressCountry": "DE"
                    }
                  }
                },
                "type": "Feature",
                "id": "urn:uuid:a767ce48-9d23-4099-964a-a3ab4bf4ff90"
              },
              "@type": "WebPage",
              "author": "urn:uuid:701c2bae-c918-45af-85dd-7805ad83ccab",
              "link_count": "1",
              "about": {
                "keywords": [
                  "countryreport:de"
                ],
                "@type": "WebPage",
                "name": [
                  {
                    "@language": "en",
                    "@value": "The German speaking OER landscape in numbers (2016)"
                  }
                ],
                "description": [
                  {
                    "@language": "en",
                    "@value": "The OER World Map Team recently published the OER Atlas, which gives a good overview on the actual state of the OER landscape in Germany, Austria and Switzerland. The following article is a translation of the second chapter, which analyses and summarizes the collected data. This article was written by <a href=\"https://oerworldmap.org/resource/urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf\">Jan Naumann</a> in march 2016)"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:a767ce48-9d23-4099-964a-a3ab4bf4ff90",
                "@context": "https://oerworldmap.org/assets/json/context.json",
                "url": "https://oerworldmap.wordpress.com/2016/03/18/the-german-speaking-oer-landscape-in-numbers/"
              },
              "dateModified": "2018-08-02T19:28:32.567+02:00",
              "@id": "urn:uuid:a767ce48-9d23-4099-964a-a3ab4bf4ff90.about",
              "lighthouse_count": "0"
            }
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8.about",
            "_score": 1,
            "_source": {
              "contributor": "urn:uuid:8082d2c7-8f40-449f-bd0b-581ce770ca27",
              "dateCreated": "2017-09-22T09:59:43.196+02:00",
              "like_count": "0",
              "feature": {
                "properties": {
                  "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8",
                  "@type": "WebPage",
                  "name": [
                    {
                      "@language": "en",
                      "@value": "German OER Practices and Policy – from Bottom-up to Top-down Initiatives"
                    }
                  ],
                  "additionalType": [
                    {
                      "@id": "https://oerworldmap.org/assets/json/publications.json#report",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Report"
                        },
                        {
                          "@language": "de",
                          "@value": "Bericht"
                        },
                        {
                          "@language": "en",
                          "@value": "Report"
                        }
                      ]
                    }
                  ],
                  "location": {
                    "address": {
                      "addressCountry": "DE"
                    }
                  }
                },
                "type": "Feature",
                "id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8"
              },
              "@type": "WebPage",
              "author": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
              "link_count": "5",
              "about": {
                "additionalType": [
                  {
                    "@id": "https://oerworldmap.org/assets/json/publications.json#report",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Report"
                      },
                      {
                        "@language": "de",
                        "@value": "Bericht"
                      },
                      {
                        "@language": "en",
                        "@value": "Report"
                      }
                    ]
                  }
                ],
                "keywords": [
                  "oer in non-english speaking countries",
                  "countryreport:de",
                  "germany"
                ],
                "@type": "WebPage",
                "name": [
                  {
                    "@language": "en",
                    "@value": "German OER Practices and Policy – from Bottom-up to Top-down Initiatives"
                  }
                ],
                "description": [
                  {
                    "@language": "en",
                    "@value": "UNESCO Institute for Information Technologies in Education (UNESCO IITE) published the book on Open Educational Resources in Germany within its project on Open Educational Resources (OER) in non-English-speaking countries. The authors of the report – Dominic Orr, Jan Neumann and Joeran Muuss-Merholz – used holistic approach to explore diverse issues related to OER, including the policy perspective, as well as technical, legal, social and didactical aspects. The report provides a brief overview of the OER-related developments in Germany, describes the structure of the German education system and reveals major educational challenges. The state of advancement of OER in Germany is analyzed using bottom-up and top-down perspectives.\r\n \r\nThough Germany could be characterized as a relatively latecomer to the OER scene, there is a strong OER community in the country: the OER World Map data for Germany shows 166 organisations involved in OER-related practices. Recent government activities in the field of OER include the OERinfo funding programme, which was launched in November 2016. There are some important initiatives at the level of federal entities, for example, the establishment of the Hamburg Open Online University, which is currently the most ambitious OER project in Germany. Considering the fact that for the German educational community and the authorities of different levels OER are recognized for their potential in fostering innovation, it is expected that the recent and forthcoming grassroots OER initiatives and those triggered by the authorities will favour the advancement of open education in Germany."
                  }
                ],
                "publisher": [
                  {
                    "@id": "urn:uuid:ff333f15-4347-4504-b633-ccf787f5b7c2",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The UNESCO Institute for Information Technologies in Education was established as an integral part of UNESCO by the General Conference of UNESCO at its 29th session (November 1997) and is located in Moscow, Russian Federation. At the same session, the Statutes of IITE were adopted.\r\nAccording to its Statutes, the Institute contributes to the design and implementation of the programmes of the Organization in regard to application of information and communication technologies in education. Hence, IITE serves a specific purpose within the fields of competence of UNESCO. It is principally programme-driven, responds to both global and country needs, is a part of an operational network of UNESCO structures and supports the achievement of the  strategic objectives of the Medium-Term Strategy as well as the programme priorities of UNESCO, as approved by the General Conference.  \r\nFollowing the intention to assist the Organization, IITE, within its status and functions,  supports bridging the digital divide in education and building inclusive knowledge societies by reinforcement of national capacities in promoting e-environments for increasing access to education and lifelong learning, facilitating policy dialogue and initiate development of national strategies on application of ICTs in education.\r\nIITE’s mission therefore is to serve as a centre of excellence and provider of technical support and expertise in the area of ICT usage in education.   Accumulated experience allowed IITE to become a unique international expertise and resource centre, offering advice and guidance on reinforcing national potentials in ICT usage in education in the world."
                      }
                    ],
                    "image": "https://www.iite.unesco.org/images/logo/iite_logo_en.gif",
                    "location": {
                      "address": {
                        "addressCountry": "RU",
                        "addressLocality": "Moscow",
                        "addressRegion": "RU.MS"
                      },
                      "geo": {
                        "lat": 55.741469,
                        "lon": 37.615561
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "UNESCO Institute for Information Technologies in Education "
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5",
                    "@type": "Person",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Jöran Muuß-Merholz ist Diplom-Pädagoge und Inhaber der Agentur „J&K – Jöran und Konsorten. Unter diesem Dach gründete er 2012 open-educational-resources.de – Transferstelle für OER, die vielfältige Veröffentlichungen rund um freie Lehr-Lern-Materialien herausgab, darunter ein Blog, eine Podcastreihe sowie Whitepaper für die Bereiche Schule, Hochschule und Weiterbildung. Zum 1.11.2016 ist die Transferstelle in die neue OERinfo Informationsstelle zu OER aufgegangen.\r\n2012 organisierte Jöran Muuß-Merholz das OERcamp, das erste Barcamp zu Open Educational Resources in Deutschland. Im Auftrag der Wikimedia Deutschland e.V. verantwortete er die Programmkoordination zur OER-Konferenz 2013 (#OERde13) und 2014 (#OERde14), der größten Konferenz zu OER in Europa. Seit 2016 leitet er das OER-Festival, das OER-Award, OER-Fachforum, OER-Atlas und OERcamp unter einem Dach beherbergt. Jöran ist auch bei internationalen Tagungen zu OER aktiv, beispielsweise im Programme Committee von OER16 in Schottland und OER17 in England."
                      }
                    ],
                    "image": "https://www.joeran.de/wp-content/dox/sites/10/J_K_Team_Q_OER_Joeran_EINZEL_Hanna_Birr_CC_BY.png",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "postalCode": "20099",
                        "streetAddress": "Schmilinskystraße 45"
                      },
                      "geo": {
                        "lat": 53.555118,
                        "lon": 9.995295
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Jöran Muuß-Merholz"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
                    "@type": "Person",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Jan L. Neumann is working as Head of Legal Affairs and Organization at the North Rhine-Westphalian Library Service Centre (hbz) in Cologne, Germany. He studied law, economy and systems thinking and has more than 15 years of experience within international project management for different publishing houses and libraries. He is a member of the Education Expert Committee of the German Commission for UNESCO and blogs about Open Educational Resources (OER) on OER-SYS.org. Since 2013 he manages the OER World Map project, which is funded by the William and Flora Hewlett Foundation and aims at providing the most complete and comprehensible picture of the global Open Educational Resources (OER) movement so far. Jan is a frequent speaker at OER conferences and participated in the organization of OERde 14, OERde 15 and OERde 16 Festival. Nevertheless he considers himself a non-expert in OER to stress that having the courage to think by yourself is one important aspect of the empowerment which comes along with open education."
                      }
                    ],
                    "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "postalCode": "50674",
                        "streetAddress": "Jülicher Straße 6"
                      },
                      "geo": {
                        "lat": 50.934119,
                        "lon": 6.935572
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Jan Neumann"
                      }
                    ]
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8",
                "@context": "https://oerworldmap.org/assets/json/context.json",
                "url": "https://www.iite.unesco.org/publications/3214746/"
              },
              "dateModified": "2018-08-02T19:28:10.194+02:00",
              "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8.about",
              "lighthouse_count": "0"
            }
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a27400fc-68a7-4f2e-9316-76de13aebe56.about",
            "_score": 1,
            "_source": {
              "contributor": "urn:uuid:8082d2c7-8f40-449f-bd0b-581ce770ca27",
              "dateCreated": "2018-01-08T10:32:28.424+01:00",
              "like_count": "0",
              "feature": {
                "properties": {
                  "@id": "urn:uuid:a27400fc-68a7-4f2e-9316-76de13aebe56",
                  "@type": "WebPage",
                  "name": [
                    {
                      "@language": "de",
                      "@value": "OER Atlas 2017: Open Educational Resources - Deutschsprachige Angebote und Projekte im Überblick"
                    }
                  ],
                  "location": {
                    "address": {
                      "addressCountry": "DE"
                    }
                  }
                },
                "type": "Feature",
                "id": "urn:uuid:a27400fc-68a7-4f2e-9316-76de13aebe56"
              },
              "@type": "WebPage",
              "author": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
              "link_count": "6",
              "about": {
                "keywords": [
                  "country report",
                  "countryreport:de"
                ],
                "@type": "WebPage",
                "name": [
                  {
                    "@language": "de",
                    "@value": "OER Atlas 2017: Open Educational Resources - Deutschsprachige Angebote und Projekte im Überblick"
                  }
                ],
                "description": [
                  {
                    "@language": "en",
                    "@value": "The OER Atlas 2017 is the second approach to generate a printed book based on OER World Map data. It gives a detailed overview of the state of OER in Germany 2017."
                  }
                ],
                "publisher": [
                  {
                    "@id": "urn:uuid:43526b28-66f8-49bb-bf1c-c3cb8d4bbbcd",
                    "@type": "Action",
                    "agent": [
                      {
                        "@id": "urn:uuid:625f2554-46bd-4c1a-8033-c5cf799491c4"
                      },
                      {
                        "@id": "urn:uuid:e08975fe-acc0-4733-8496-2cfc034a120a",
                        "@type": "Organization",
                        "description": [
                          {
                            "@language": "de",
                            "@value": "Das Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen (hbz) ist eine zentrale Dienstleistungs- und Entwicklungseinrichtung für die Hochschulbibliotheken in Nordrhein-Westfalen und Rheinland-Pfalz. Es wurde 1973 gegründet. Im Mittelpunkt der Dienstleistungen des hbz stehen die Bereitstellung und Verwaltung eines Verbundkatalogs für Universitätsbibliotheken und andere Bibliotheken. So finden Sie innerhalb des hbz viel Know-how in den Bereichen Datenaggregation, Datennormalisierung und Bereitstellung von Discovery-Schnittstellen.\r\n\r\nDas hbz ist seit 2002 im Bereich Open Access (OA) aktiv, beginnend mit dem Hosting institutioneller Repositorien und seit 2004 mit der Bereitstellung einer Open-Access-Zeitschriftenplattform Digital Peer Publishing (DiPP). Seit vielen Jahren setzt sich hbz aktiv für Webstandards und die offene Lizenzierung von Daten ein, die über Bibliotheken veröffentlicht werden. Das hbz war eine der Bibliotheksorganisationen, die bei der Freigabe von Bibliotheksdaten unter einer offenen Lizenz Pionierarbeit geleistet haben."
                          },
                          {
                            "@language": "en",
                            "@value": "The North Rhine-Westphalian Library Service Center (hbz) is a central service and development organization for university libraries in Northrhine-Westphalia and Rhineland-Palatinate. It was founded in 1973. At the center of hbz's services are the provision and management of a union catalog for university libraries and other libraries. Thus, you will find a lot of expertise in data aggregation, data normalization and provision of discovery interfaces within the hbz.\r\n\r\nThe hbz is active in the area of Open Access (OA) since 2002, beginning with hosting of institutional repositories and since 2004 with providing an OA journal platform Digital Peer Publishing (DiPP). Since many years hbz is actively promoting web standards and the open licensing of data published through libraries. hbz was one of the library organizations worldwide pioneering with opening up library data. "
                          }
                        ],
                        "image": "https://www.hbz-nrw.de/service/mediathek/logos/hbz/hbz-logo-gross",
                        "location": {
                          "address": {
                            "addressCountry": "DE",
                            "addressLocality": "Köln",
                            "addressRegion": "DE.NW",
                            "postalCode": "50674",
                            "streetAddress": "Jülicher Straße 6"
                          },
                          "geo": {
                            "lat": 50.934082,
                            "lon": 6.935474
                          }
                        },
                        "name": [
                          {
                            "@language": "de",
                            "@value": "Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen"
                          },
                          {
                            "@language": "en",
                            "@value": "North Rhine-Westphalian Library Center"
                          }
                        ]
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "<section>\r\nFor more than a decade the creation and use of Open Educational Resources (OER) has been increasing around the globe. The OER World Map collects and visualizes data on the growing number of actors and activities in the field of open education worldwide. The goal is to support the evolution of the global OER ecosystem by providing a comprehensive and responsive picture of the OER movement. The information provided can be used for a wide range of purposes, including:\r\n<ul>\r\n<li>Connecting actors with each other facilitating co-operation and sharing of resources and knowledge</li>\r\n<li>Providing qualified lists of repositories and other OER services to help teachers and learners find educational resources relevant to them</li>\r\n<li>Supporting policy makers in taking and defending strategic decisions by providing meaningful statistics and overviews of the open education movement and its associated impacts</li>\r\n</ui>\r\n</section>\r\n<section>\r\nThe OER World Map is intended to provide the information needed to support the self-organization processes of the OER movement.  In addition to mapping relevant organisations, projects, people and services, the platform provides social networking, allows the identification of OER collections, and supports decision making. Taken together, the OER World Map can be seen as a kind of ‘operations room’ for the open education community.\r\n</section>"
                      }
                    ],
                    "image": "https://pbs.twimg.com/profile_images/719433584558387200/GvaYg6E4.jpg",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER World Map"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e08975fe-acc0-4733-8496-2cfc034a120a",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen (hbz) ist eine zentrale Dienstleistungs- und Entwicklungseinrichtung für die Hochschulbibliotheken in Nordrhein-Westfalen und Rheinland-Pfalz. Es wurde 1973 gegründet. Im Mittelpunkt der Dienstleistungen des hbz stehen die Bereitstellung und Verwaltung eines Verbundkatalogs für Universitätsbibliotheken und andere Bibliotheken. So finden Sie innerhalb des hbz viel Know-how in den Bereichen Datenaggregation, Datennormalisierung und Bereitstellung von Discovery-Schnittstellen.\r\n\r\nDas hbz ist seit 2002 im Bereich Open Access (OA) aktiv, beginnend mit dem Hosting institutioneller Repositorien und seit 2004 mit der Bereitstellung einer Open-Access-Zeitschriftenplattform Digital Peer Publishing (DiPP). Seit vielen Jahren setzt sich hbz aktiv für Webstandards und die offene Lizenzierung von Daten ein, die über Bibliotheken veröffentlicht werden. Das hbz war eine der Bibliotheksorganisationen, die bei der Freigabe von Bibliotheksdaten unter einer offenen Lizenz Pionierarbeit geleistet haben."
                      },
                      {
                        "@language": "en",
                        "@value": "The North Rhine-Westphalian Library Service Center (hbz) is a central service and development organization for university libraries in Northrhine-Westphalia and Rhineland-Palatinate. It was founded in 1973. At the center of hbz's services are the provision and management of a union catalog for university libraries and other libraries. Thus, you will find a lot of expertise in data aggregation, data normalization and provision of discovery interfaces within the hbz.\r\n\r\nThe hbz is active in the area of Open Access (OA) since 2002, beginning with hosting of institutional repositories and since 2004 with providing an OA journal platform Digital Peer Publishing (DiPP). Since many years hbz is actively promoting web standards and the open licensing of data published through libraries. hbz was one of the library organizations worldwide pioneering with opening up library data. "
                      }
                    ],
                    "image": "https://www.hbz-nrw.de/service/mediathek/logos/hbz/hbz-logo-gross",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "postalCode": "50674",
                        "streetAddress": "Jülicher Straße 6"
                      },
                      "geo": {
                        "lat": 50.934082,
                        "lon": 6.935474
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen"
                      },
                      {
                        "@language": "en",
                        "@value": "North Rhine-Westphalian Library Center"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b8b89c85-5d56-4fca-b78f-decce9e56952",
                    "@type": "Organization",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "streetAddress": "Hamburg"
                      },
                      "geo": {
                        "lat": 53.576158,
                        "lon": 10.007046
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Zentralstelle für Lehren und Lernen im 21. Jahrhundert - ZLL 21 e.V."
                      }
                    ]
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:a27400fc-68a7-4f2e-9316-76de13aebe56",
                "@context": "https://oerworldmap.org/assets/json/context.json",
                "url": "https://oerworldmap.wordpress.com/2017/11/28/printing-the-oer-world-map-oer-atlas-2017/"
              },
              "dateModified": "2018-08-02T19:27:37.523+02:00",
              "@id": "urn:uuid:a27400fc-68a7-4f2e-9316-76de13aebe56.about",
              "lighthouse_count": "0"
            }
          }
        ]
      }
    }
  },
  "filter#champions": {
    "doc_count": 2,
    "top_hits#country_champions": {
      "hits": {
        "total": 2,
        "max_score": 1,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5.about",
            "_score": 1,
            "_source": {
              "contributor": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5",
              "dateCreated": "2016-06-30T16:45:38.307+02:00",
              "like_count": "0",
              "feature": {
                "properties": {
                  "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5",
                  "@type": "Person",
                  "name": [
                    {
                      "@language": "de",
                      "@value": "Jöran Muuß-Merholz"
                    }
                  ],
                  "image": "https://www.joeran.de/wp-content/dox/sites/10/J_K_Team_Q_OER_Joeran_EINZEL_Hanna_Birr_CC_BY.png",
                  "additionalType": [
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#consultant",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Consultant"
                        },
                        {
                          "@language": "de",
                          "@value": "Berater/in"
                        },
                        {
                          "@language": "en",
                          "@value": "Consultant"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#instructionalDesigner",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Instructional designer"
                        },
                        {
                          "@language": "de",
                          "@value": "Instruktionsdesigner/in"
                        },
                        {
                          "@language": "en",
                          "@value": "Instructional designer"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#teacher",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Teacher"
                        },
                        {
                          "@language": "de",
                          "@value": "Lehrperson"
                        },
                        {
                          "@language": "en",
                          "@value": "Teacher"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#eLearningProfessional",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "E-learning professional"
                        },
                        {
                          "@language": "de",
                          "@value": "E-Learning-Experte"
                        },
                        {
                          "@language": "en",
                          "@value": "E-learning professional"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#other",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Other"
                        },
                        {
                          "@language": "de",
                          "@value": "Sonstige"
                        },
                        {
                          "@language": "en",
                          "@value": "Other"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#oerAdvocate",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "OER advocate"
                        },
                        {
                          "@language": "de",
                          "@value": "OER-Befürworter"
                        },
                        {
                          "@language": "en",
                          "@value": "OER advocate"
                        }
                      ]
                    }
                  ],
                  "location": {
                    "address": {
                      "addressCountry": "DE",
                      "addressLocality": "Hamburg",
                      "addressRegion": "DE.HH",
                      "postalCode": "20099",
                      "streetAddress": "Schmilinskystraße 45"
                    },
                    "geo": {
                      "lat": 53.555118,
                      "lon": 9.995295
                    }
                  }
                },
                "type": "Feature",
                "id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    9.995295,
                    53.555118
                  ]
                }
              },
              "@type": "WebPage",
              "author": null,
              "link_count": "63",
              "about": {
                "image": "https://www.joeran.de/wp-content/dox/sites/10/J_K_Team_Q_OER_Joeran_EINZEL_Hanna_Birr_CC_BY.png",
                "organizerFor": [
                  {
                    "@id": "urn:uuid:7b0c8f88-379c-4103-8154-7177ceeebf43",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.\r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Ost"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a7a55e8a-9705-481f-a26a-a43a1509fbee",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Am 31. Mai 2017 findet an der Universität Graz das erste österreichische OER-Festival statt. Die Veranstaltung bietet spannende Vorträge und Workshops rund um das Thema Open Educational Resources und wird vom Forum neue Medien in der Lehre Austria gemeinsam mit dem Projekt Open Education Austria organisiert."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "AT",
                        "addressLocality": "Graz",
                        "addressRegion": "AT.ST",
                        "postalCode": "8010",
                        "streetAddress": "8 Mozartgasse"
                      },
                      "geo": {
                        "lat": 47.079768,
                        "lon": 15.447293
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7237e8db-fe4d-41ef-9d05-cd7fb7e3b5af",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands. \r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "streetAddress": "Yu Garden"
                      },
                      "geo": {
                        "lat": 53.568585,
                        "lon": 9.990353
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Nord"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:926e5242-6eb7-4f88-be74-98663c6167c7",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "München",
                        "addressRegion": "DE.BY"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Süd"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Das zweite OER-Festival\r\n\r\n21 Monate nach dem ersten OER-Festival #OERde16 wird es bei der #OERde17 weiter darum gehen, den Austausch untereinander und die Sichtbarkeit der OER-Community zu katalysieren. Denn darauf kommt es an, wenn das Jahr 2017 rückblickend nicht als Strohfeuer, sondern als Tipping Point gelten soll. Das OER-Festival 2017 #OERde17 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen die bisherigen Aktivitäten feiern und über die nächsten Schritte der OER-Entwicklung beratschlagen.\r\n\r\n(Das „de“ in #OERde17 steht übrigens nicht für „Deutschland“, sondern für „deutschsprachig“. Denn wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.)\r\n\r\n## OERcamp, OER-Fachforum, OER-Award, OER-Atlas\r\n\r\nDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können:\r\n\r\n- das OERcamp – das Treffen der Praktiker*innen (27./28.11.)\r\n- das OER-Fachforum – als Dialog der Macher*innen und Multiplikator*innen (28./29.11.)\r\n- der OER-Award – die Auszeichnung für Open Educational Resources im deutschsprachigen Raum (mit Preisverleihung am 27.11.)\r\n- der OER-Atlas – die gebündelte Bestandsaufnahme der #OERde-Landschaft (veröffentlicht am 28.11.)"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "streetAddress": "Ubierring 48"
                      },
                      "geo": {
                        "lat": 50.921624,
                        "lon": 6.964928
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 West"
                      }
                    ]
                  }
                ],
                "countryChampionFor": [
                  "DE"
                ],
                "keywords": [
                  "referent"
                ],
                "@type": "Person",
                "created": [
                  {
                    "@id": "urn:uuid:32d8c7e0-13b1-4d4f-93cb-9dd5f4faf1e8",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das OER-Projekt openUP hat mit seinem train-the-trainer-Ansatz MultiplikatorInnen an Hochschulen angesprochen und mit dem Service-Netzwerk OER dafür sorgen wollen, dass Open Educational Resources sich an Hochschulen etablieren können. Wie openUP dabei vorgegangen ist, welche Schwierigkeiten auftauchten und wie Nachhaltigkeit gesichert werden kann, erläutert Projektmitarbeiterin Pia Honikel in ihrer Rückschau."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "openUP – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5c4b48f0-427d-427e-b6a8-996b21d24668",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "OERinForm hat nach dem Motto „von Medienzentren für Medienzentren“ OER an Hochschulen gebracht. Hanno Langfelder, Mitarbeiter des Projekts bilanziert für OERinfo, was vom Projekt bleibt und wo er weiteren Handlungsbedarf sieht."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERinForm – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:97a63a77-5060-4f08-be11-9e711bac8e4e",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Im Projekt LOERSH – OER in die Schule! Landesweite OER-Qualifizierung Schleswig-Holstein wurde ein besonderer Ansatz verfolgt: hier wurden auch Schüler\\*innen als Multiplikator\\*innen ausgebildet. Dies ist nicht die einzige Besonderheit des Projekts, auf das die Projektverantwortliche Claudia Kuttner zurückblickt."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "LOERSH – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:4cb279ff-1b35-40ee-b52e-ed28aa14c464",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Ganz schön komplex und verunsichernd, so lautet das Fazit zu OER aus dem Verbundprojekt OpERA – Open Educational Resources in der Akademischen Weiterbildung. Trotzdem zeigen die Lessons Learned aus dem Projekt, dass es sich lohnt, sich diesen Schwierigkeiten zu stellen."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OpERA – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:2e6df970-5d44-496c-9bb0-35a9bf5d5503",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "OERsax hatte den Anspruch, OER an Hochschulen in Sachsen zu verankern. Berücksichtigt wurde dabei von Anfang an die komplexe Verbindung von technischer, rechtlicher und didaktischer Perspektive, die für die OER-Praxis oftmals eine besondere Herausforderung darstellt. Für OERinfo stellt das Projektteam Höhepunkte des Projekts zum Ende seiner Laufzeit vor und sagt, was in Deutschland fehlt, um OER noch wirksamer zu machen."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OERsax – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:40fa71aa-e21b-4993-83fa-c0d21f2dc7ce",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "OER in der Erwachsenen- und Weiterbildung bekannt zu machen und für eine Nachhaltigkeit zu sorgen, war das Anliegen des Projekts „OER (Open Educational Resources) – Macher und Multiplikatoren in der Weiterbildung“ (MuMiW). Sabine Preusse, Vizepräsidentin des BDVT e.V., schildert ihre Erfahrungen mit dem Projekt."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OER-Fachexperten mit MuMiW – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9087f0ab-6b7e-42b3-be16-2550415c8b72",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Dass OER und Verwaltungen gut zusammen passen, ist die feste Überzeugung von Jan Pawlowski, der als Professor an der Hochschule Ruhr West arbeitet. Mit dem Projekt Offene Wissensressourcen im öffentlichen Sektor (ÖWR) sollten öffentliche Verwaltungen für OER sensibilisiert werden und Interessierte sich vernetzen können. Welche Erkenntnisse er aus dem Projektverlauf gewonnen hat, schildert Jan Pawlowski für OERinfo."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "ÖWR – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:cf55f2e6-7508-4343-8375-f2608e28749e",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Was verbindet Service Learning und OER? Eine ganze Menge, davon waren die Initiator\\*innen von CivicOER – Offene Bildungsressourcen für das Lernen durch Verantwortung in Schule, Hochschule und Zivilgesellschaft überzeugt. Worin die Erkenntnisse aus der Projektlaufzeit bestehen, berichtet Claudia Leitzmann von der Stabsabteilung für Bildungsinnovation und Wissenstransfer der Katholischen Universität Eichstätt-Ingolstadt."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "civicOER – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7f7bb672-a113-4cba-8da9-6899cf712637",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Die Bildungsbereich übergreifende Kooperation von MOIN – Multiplikator\\*innen für Open Educational Resources in Niedersachsen konnte zeigen, dass Open Educational Resources in Schule, Hochschule und Erwachsenenbildung das Potenzial zur Veränderung didaktischer Ansätze hat. Über die Erfahrungen aus dem Projekt berichten Mitarbeiterinnen der fünf beteiligten Kooperationspartner."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "MOIN – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:93d11dbf-8867-4398-872e-870a02061f91",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Zum Ende seiner Laufzeit befragen wir Susanne Friz vom FWU zu dem von ihr geleiteten Projekt „LOERn – Lehrerfortbildung durch Nutzung und Produktion von OER-Materialien“. Wir wollen wissen, welche Erfahrungen sie weitergeben möchte."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "LOERn – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:6ff52192-30cb-4a56-9b3b-f75d3abca0e7",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "7 Projektpartner – 18 Monate – 100 Qualifizierungsmaßnahmen – mehr als 1300 Teilnehmer*innen. Mit diesen Zahlen wartet das Projekt OER@RLP auf, das bildungsbereichsübergreifend Multiplikator*innen für OER begeistern wollte. Für OERinfo schaut Tim Wiegers auf Highlights und Hindernisse des Projekts."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OER@RLP – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:3266fb2a-dd6b-4318-a793-926588283db9",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Projekt OERlabs startete im April 2017 mit dem Ziel, Akteursgruppen der Hochschule zur Beschäftigung mit OER anzuregen und für den selbstverständlichen Umgang mit Open Educational Resources zu sensibilisieren. Matthias Andrasch, Constanze Reder und Bence Lukacs aus dem OERlabs-Projektteam berichten über ihre Ansätze und Methoden, um Stakeholder im Kontext der Lehrerinnen- und Lehrerausbildung zum Thema OER zu erreichen und darüber, was die größten Hindernisse auf dem Weg dorthin waren."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERlabs – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5c542645-13c6-48dd-a547-47660354233b",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Bildungsbereichsübergreifend OER in zwei Bundesländern bekannt machen – diesen großen Anspruch an das Projekt OSM@BB hatten die Mitwirkenden zu Beginn der Projektlaufzeit. Martin „lOERling“ Nestler, wissenschaftlicher Mitarbeiter und Projektkoordinator zieht Bilanz: er benennt strukturelle Herausforderungen, Überraschungen und gibt einen Ausblick auf zukünftige Entwicklungen."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OSM@BB OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7926cd87-a80d-4b22-8e11-a046a88fcec8",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Projekt OER.UP hatte zum Ziel, die nachhaltige Nutzung von offenen Bildungsressourcen (OER) in den verschiedenen Bildungsbereichen der Universität Potsdam sowie den angrenzenden Hochschulen zu stärken. Neben der Sensibilisierung und Qualifizierung von Multiplikator\\*innen sollten insbesondere durch deren Vernetzung, OER-Best-Practices generiert und sichtbar gemacht werden. Über die Erfahrungen im Verlauf des Projektes spricht Robert Etzdorf vom Projekt OER.UP mit OERinfo."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER.UP – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:dbc4cbc2-d583-41a3-bf64-7111ba20c56f",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Open Educational Resources (OER) als festen Bestandteil der Lehre an der Universität Bremen zu verankern, das war das Ziel von ProOER. Für OERinfo berichten Franziska Richter und Yildiray Ogurol über die Erfolge und Herausforderungen im Projektverlauf."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "ProOER – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:d1945eac-d29a-4e02-a4df-2059e093ed56",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Dass Wirksamkeit und Nachhaltigkeit auch ganz anders aussehen können, als geplant zeigen Erfahrungen aus dem Projekt MINT-L-OER-amt von der rwth Aachen. Dr. Nadine Berger, Lubna Ali und René Röpke über unerwartete Erfolge und das, was nach Projektende nachwirkt."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "MINT-L-OER-amt OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:d05a38ae-5868-4f7e-b479-68caf696a6cf",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das BMBF-geförderte Projekt Mainstreaming OER widmete sich der Sensibilisierung und Schulung von MultiplikatorInnen. Die Projektleiterin Bettina Waffner beantwortet für OERinfo zum Ende der Projektlaufzeit Fragen nach ihrem Erkenntnisgewinn."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Mainstreaming OER – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:dcb93d4c-bd1e-4e86-b347-1ad61a2b0e54",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Der Anspruch des Projekts SynLLOER ist umfassend: Neben Workshops für Schulen und Universitäten gibt es auch das Angebot einer offenen WOERkstatt (openLab), in der Materialien erprobt, Fragen gestellt und ein Austausch vertieft werden kann. So soll OER über Bildungsbereiche und Altersgrenzen hinweg bekannt gemacht werden. Tobias Steiner, Projektkoordinator von SynLLOER schaut für OERinfo auf die Erfahrungen mit dem Projekt zurück."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "SynLLOER – OERinfo – Lessons Learned in 5×5 Zeilen"
                      }
                    ]
                  }
                ],
                "agentIn": [
                  {
                    "@id": "urn:uuid:5668e9eb-2bfe-46b4-bfbf-9c56d9ae2858",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5"
                      }
                    ],
                    "description": [
                      {
                        "@language": "de",
                        "@value": "ein Vorreiter mit großer Reichweite"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:52cc61b1-4619-4ac5-955d-49bd4fdae718",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Projekte, Ideen und Materialien für den Deutschunterricht"
                        }
                      ],
                      "image": "http://www.zum.de/Faecher/D/BW/gym/dautel/grafik/kd-logo100px.jpg",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "K. Dautels ZUM-Seiten"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:28d1a6e8-0f59-4075-a4e4-14149852b2bc",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place from October the 15th till October the 16th in  Warsaw, Poland."
                        }
                      ],
                      "image": "https://oerpolicy.eu/wp-content/uploads/sites/4/2017/03/oer-policy-forum_logo-e1498825169421.png",
                      "location": {
                        "address": {
                          "addressCountry": "PL",
                          "addressLocality": "Warschau",
                          "addressRegion": "PL.MZ"
                        },
                        "geo": {
                          "lat": 52.2319237,
                          "lon": 21.0067265
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Policy Forum 2018"
                        }
                      ]
                    },
                    "startTime": "2018-07-11T09:37:37.793Z"
                  }
                ],
                "description": [
                  {
                    "@language": "de",
                    "@value": "Jöran Muuß-Merholz ist Diplom-Pädagoge und Inhaber der Agentur „J&K – Jöran und Konsorten. Unter diesem Dach gründete er 2012 open-educational-resources.de – Transferstelle für OER, die vielfältige Veröffentlichungen rund um freie Lehr-Lern-Materialien herausgab, darunter ein Blog, eine Podcastreihe sowie Whitepaper für die Bereiche Schule, Hochschule und Weiterbildung. Zum 1.11.2016 ist die Transferstelle in die neue OERinfo Informationsstelle zu OER aufgegangen.\r\n2012 organisierte Jöran Muuß-Merholz das OERcamp, das erste Barcamp zu Open Educational Resources in Deutschland. Im Auftrag der Wikimedia Deutschland e.V. verantwortete er die Programmkoordination zur OER-Konferenz 2013 (#OERde13) und 2014 (#OERde14), der größten Konferenz zu OER in Europa. Seit 2016 leitet er das OER-Festival, das OER-Award, OER-Fachforum, OER-Atlas und OERcamp unter einem Dach beherbergt. Jöran ist auch bei internationalen Tagungen zu OER aktiv, beispielsweise im Programme Committee von OER16 in Schottland und OER17 in England."
                  }
                ],
                "@context": "https://oerworldmap.org/assets/json/context.json",
                "url": "http://www.joeran.de",
                "primarySector": [
                  {
                    "@id": "https://oerworldmap.org/assets/json/sectors.json#general",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Cross-sector"
                      },
                      {
                        "@language": "de",
                        "@value": "Sektorenübergreifend"
                      }
                    ]
                  }
                ],
                "additionalType": [
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#consultant",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Consultant"
                      },
                      {
                        "@language": "de",
                        "@value": "Berater/in"
                      },
                      {
                        "@language": "en",
                        "@value": "Consultant"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#instructionalDesigner",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Instructional designer"
                      },
                      {
                        "@language": "de",
                        "@value": "Instruktionsdesigner/in"
                      },
                      {
                        "@language": "en",
                        "@value": "Instructional designer"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#teacher",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Teacher"
                      },
                      {
                        "@language": "de",
                        "@value": "Lehrperson"
                      },
                      {
                        "@language": "en",
                        "@value": "Teacher"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#eLearningProfessional",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "E-learning professional"
                      },
                      {
                        "@language": "de",
                        "@value": "E-Learning-Experte"
                      },
                      {
                        "@language": "en",
                        "@value": "E-learning professional"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#other",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Other"
                      },
                      {
                        "@language": "de",
                        "@value": "Sonstige"
                      },
                      {
                        "@language": "en",
                        "@value": "Other"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#oerAdvocate",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "OER advocate"
                      },
                      {
                        "@language": "de",
                        "@value": "OER-Befürworter"
                      },
                      {
                        "@language": "en",
                        "@value": "OER advocate"
                      }
                    ]
                  }
                ],
                "affiliation": [
                  {
                    "@id": "urn:uuid:efed6ca2-b228-480f-be03-090a19de7b42",
                    "@type": "Action",
                    "agent": [
                      {
                        "@id": "urn:uuid:f4f8af31-ac5d-497c-9c96-ec958c465b09"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Informationsstelle OER is a topic-specific online platform that provides the public and specialist target groups with comprehensive information on the subject of Open Educational Resources, gives the current state of knowledge for practical use, bundles information on best practice examples and illustrates the diversity of existing initiatives. The broad visualization of the topic takes place via the functional and informational interlocking of the relevant information stocks and media offers of the German Education Server, the former Transferstelle OER and the North Rhine-Westphalian Library Center (OER World Map/OER-Atlas), which enables easy access to current information in the form of an integrated and user-oriented internet presence. To address new potential target groups and to open up the thematic field across educational areas in the context of lifelong learning, previously missing address- and domain-specific information modules are to be developed in cooperation with stakeholders, interest groups and OER initiatives.\r\n\r\nThe result is an extensive knowledge base in the form of editorial dossiers and systematically structured information collections, whose reach is extended by integrating multimedia formats (e.g. podcasts, videos, didactically built online modules) and communication platforms based on social media applications. The project also aims to support the cooperation and networking of the various OER actors and initiatives through appropriate communication tools, project-accompanying workshops and the public relations work of the Informationsstelle OER. In this context, one task is also to document and bundle the discussion processes and the results of the BMBF OERinfo funding measure to sensitise and qualify OER multipliers in dialogue with the projects funded.\r\n"
                      },
                      {
                        "@language": "de",
                        "@value": "Mit der Informationsstelle OER wird eine themenspezifische Online-Plattform geschaffen, die für Öffentlichkeit und fachliche Zielgruppen umfassende Informationen zum Thema Open Educational Resources zur Verfügung stellt, den aktuellen Kenntnisstand für die Praxis aufbereitet, Informationen zu Best-Practice-Beispielen bündelt und die Vielfalt vorhandener Initiativen abbildet. Die breite Sichtbarmachung des Themas erfolgt über die inhaltliche, funktionale und informationelle Verzahnung einschlägiger Informationsbestände und Medienangebote des Deutschen Bildungsservers, der bisherigen Transferstelle OER und des Hochschulbibliothekszentrums NRW (OER World Map/OER-Atlas), die in Form einer integrierten, informationsmethodisch abgestimmten und nutzerorientiert konzipierten Internet-Präsenz den einfachen Zugriff auf aktuelle Informationen ermöglicht. Mit Blick auf die Adressierung auch neuer potenzieller Zielgruppen und die bildungsbereichsübergreifende Erschließung des Themenfeldes im Kontext des Lebenslangen Lernens sollen in Zusammenarbeit mit Stakeholdern, Interessengruppen und OER-Initiativen bislang desiderate adressaten- und domänenspezifische Informationsmodule entwickelt werden.\r\n\r\nIm Ergebnis entsteht eine umfangreiche Wissensbasis in Gestalt u.a. von redaktionellen Dossiers und systematisch strukturierten Informationssammlungen, deren Reichweite durch die Integration multimedialer Formate (z.B. Podcasts, Videos, didaktisch aufbereitete Online-Module) und Kommunikationsplattformen auf der Basis von Social-Media-Anwendungen erweitert wird. Das Vorhaben zielt zudem darauf, die Zusammenarbeit und Vernetzung der unterschiedlichen OER-Akteure und Initiativen durch geeignete Kommunikationsinstrumente, projektbegleitende Workshops und die Öffentlichkeitsarbeit der Informationsstelle zu unterstützen. In diesem Zusammenhang besteht eine Aufgabe auch in der Dokumentation und Bündelung von Diskussionsprozessen und Ergebnissen der Fördermaßnahme des BMBF OERinfo zur Sensibilisierung und Qualifizierung von OER-Multiplikatoren im Dialog mit den geförderten Projekten."
                      }
                    ],
                    "image": "https://open-educational-resources.de/wp-content/themes/oer2017/img/oer_info_logo.svg",
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Informationsstelle OER: Information, Transfer und Vernetzung zu Open Educational Resources"
                      }
                    ],
                    "startTime": "2016-11-01"
                  },
                  {
                    "@id": "urn:uuid:8cf07e97-c7fb-4dfc-a748-3a2f99e65a0a",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The team at J&K - Jöran und Konsorten around Jöran Muuß-Merholz are connecting the educational and the digital world doing consulting, public speaking writing, editing, designing events and online projects. Since 2012 OER has been a focus of their work. They founded and operated “Transferstelle für OER“ which provided information on OER in Germany. J&K are also the founders and the organizers of the OERcamps, regular unconferences on OER, of the OER-Awards and the OER-Festival.\r\nTransferstelle OER served as a focus point to the emerging OER community in Germany, providing information on the subject. The OERcamps and OER-Festivals also helped connecting the community and widening the play field. The team at J&K is furthermore active in the production of OER in various sectors.\r\nJ&K – Jöran und Konsorten is a company with eight permanent employees and a network of freelancers. \r\nAgency founded in 2009, started working on OER in 2012, delegated the “Transferstelle” to the newly founded OERinfo in November 2016. J&K are still operating the blog of OERinfo, organizing events and providing consulting and training on OER."
                      },
                      {
                        "@language": "de",
                        "@value": "Jöran und Konsorten bieten individuelle Projekt- und Programmentwicklungen im Bildungsbereich, Veranstaltungsorganisation und -moderation sowie redaktionelle Tätigkeiten für Online-Projekte und andere Publikationen.  Daneben produzieren J&K selbst Bildungsmedien."
                      }
                    ],
                    "image": "http://www.joeran.de/wp-content/themes/wordpress_joeran/i/logo2.gif",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "postalCode": "20099",
                        "streetAddress": "Schmilinskystraße 45"
                      },
                      "geo": {
                        "lat": 53.551316,
                        "lon": 9.981946
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "J&K - Jöran und Konsorten (\"Jöran and Fellows\")"
                      },
                      {
                        "@language": "de",
                        "@value": "J&K - Jöran und Konsorten"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:08b0cfbb-823d-49f6-99a3-285438828883",
                    "@type": "Service",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Die Transferstelle für OER war ein Think-and-Do-Tank zum Thema Open Educational Resources (OER). Im November 2016 ging ihre Tätigkeit in die neu gegründete Informationsstelle OER auf."
                      },
                      {
                        "@language": "en",
                        "@value": "\"Transferstelle für OER\" was a Think-and-Do-Tank on Open Educational Resources (OER). In November 2016 it was devolved to the newly founded project OERinfo."
                      }
                    ],
                    "image": "http://wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2014/08/cropped-oer_header1.jpg",
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Transferstelle für OER"
                      }
                    ]
                  }
                ],
                "performerIn": [
                  {
                    "@id": "urn:uuid:5c40dc59-6343-4fdc-a6d7-ffbcd8fbb6ae",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Treffen zu digitalen und offenen Lehr-Lern-Materialien, am 15./16.6.2018 in Hamburg in der Beruflichen Schule für Medien und Kommunikation (BMK).\n\nDas #OERcamp\n\nDas #OERcamp ist seit 2012 das Treffen der Praktiker*innen zu digitalen und offene Lehr-Lern-Materialien im deutschsprachigen Raum.\n\nEs findet in 2018 an vier Orten in Deutschland statt – also auch in Deiner Nähe!\n\nBeim #OERcamp treffen sich Akteure aus allen Bildungsbereichen und Bundesländern, um miteinander und voneinander zu lernen.\n\nIm zweitägigen Programm gibt es keinen einzigen Vortrag im Hörsaal, dafür aber jede Menge Praxis-Workshops, aus denen man nach eigenen Interessen wählen kann. Von allgemeinen Einführungen ins Thema bis zu vertieften Diskussionen. Im Barcamp-Teil kann man eigene Fragen und Interessen einbringen. Und auf einem Markt der Möglichkeiten lernt man konkrete Materialien und Projekte kennen.\nWas bedeutet das OER in #OERcamp?\n\nOER steht für Open Educational Resources, also Lehr-Lern-Materialien, die frei und offen zur Nutzung, zur Veränderung und zur Weitergabe sind.\n\nDas „Open“ gilt auch für die Bildungsbereiche: Praktiker*innen aus Schule und Hochschule, Aus- und Weiterbildung sowie allen anderen Bildungsbereichen tauschen sich beim #OERcamp aus."
                      }
                    ],
                    "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2018/04/logo_oercamp_blau_mit_2018_wortmarke.jpg",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "postalCode": "22049",
                        "streetAddress": "Eulenkamp 46"
                      },
                      "geo": {
                        "lat": 53.58056296422987,
                        "lon": 10.070850567984962
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 2018 Nord"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "streetAddress": "Ubierring 48"
                      },
                      "geo": {
                        "lat": 50.921624,
                        "lon": 6.964928
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 West"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5a85d2bc-e7ad-4354-8a5e-8413dd48849d",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Das berufliche Lernen mit neuen Medien steht in vielen Ausbildungsbetrieben – trotz der großen Potenziale – noch am Anfang. Der erste Schritt in die digital gestützte Berufsausbildung beginnt häufig mit der Suche nach passenden Lerninhalten.\nStehen auch Sie vor der Frage, woher die digitalen Lernmaterialien (Content) für Ihre Ausbildung kommen sollen? Gibt es zum gesuchten Thema bereits passende Lösungen am Markt? Oder lohnt es sich, den Content selbst zu erstellen?\nWelche Chancen bieten offene Bildungsmaterialien? Wie darf ich diesen Content nutzen? Mit der neuen Konferenz NEXTLEARN helfen wir Ihnen, dass Sie die Materialien und Tools finden, die die individuellen Lehr-Lern-Prozesse in Ihrer Ausbildung optimal unterstützen.\nIn Kooperation mit dem Bundesinstitut für Berufsbildung (BIBB) wird die NEXTLEARN Sie fortan bei der Umsetzung des digitalen Lernens in der Ausbildung begleiten und Ihnen neue Impulse geben. Sind Sie zum Auftakt mit dabei? Wir freuen uns auf Sie!"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10789",
                        "streetAddress": "Nürnberger Str. 50-55"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "NEXTLEARN"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7237e8db-fe4d-41ef-9d05-cd7fb7e3b5af",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands. \r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "streetAddress": "Yu Garden"
                      },
                      "geo": {
                        "lat": 53.568585,
                        "lon": 9.990353
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Nord"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Das zweite OER-Festival\r\n\r\n21 Monate nach dem ersten OER-Festival #OERde16 wird es bei der #OERde17 weiter darum gehen, den Austausch untereinander und die Sichtbarkeit der OER-Community zu katalysieren. Denn darauf kommt es an, wenn das Jahr 2017 rückblickend nicht als Strohfeuer, sondern als Tipping Point gelten soll. Das OER-Festival 2017 #OERde17 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen die bisherigen Aktivitäten feiern und über die nächsten Schritte der OER-Entwicklung beratschlagen.\r\n\r\n(Das „de“ in #OERde17 steht übrigens nicht für „Deutschland“, sondern für „deutschsprachig“. Denn wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.)\r\n\r\n## OERcamp, OER-Fachforum, OER-Award, OER-Atlas\r\n\r\nDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können:\r\n\r\n- das OERcamp – das Treffen der Praktiker*innen (27./28.11.)\r\n- das OER-Fachforum – als Dialog der Macher*innen und Multiplikator*innen (28./29.11.)\r\n- der OER-Award – die Auszeichnung für Open Educational Resources im deutschsprachigen Raum (mit Preisverleihung am 27.11.)\r\n- der OER-Atlas – die gebündelte Bestandsaufnahme der #OERde-Landschaft (veröffentlicht am 28.11.)"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is the annual opportunity for researchers, practitioners, policy makers and educators to deeply explore open education and its impact on global education.  Conference participants engage with thought leaders in open education and have the opportunity to share ideas, practices and discuss issues important to the future of education worldwide. The Open Education Global Conference is the largest conference devoted exclusively to open education, attracting participants from more than 30 countries around the world.\r\n\r\nThe Open Education Global Conference 2017 is organized jointly by the Open Education Consortium and the University of Cape Town.\r\n\r\n \r\n\r\n  \r\n"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "ZA",
                        "addressLocality": "Cape Town",
                        "addressRegion": "ZA.WC",
                        "streetAddress": "Cape Town International Convention Centre (CTICC)"
                      },
                      "geo": {
                        "lat": -33.915682,
                        "lon": 18.426776
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:66a6f5e3-184d-43ce-b4b3-10f3ecaa6b3f",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Worum geht’s?\n\nBeim AfterwOERk wollen wir die OER-Produzierenden der Stadt zusammenbringen und einen Raum schaffen, in dem man sich austauschen und vernetzen kann. \nGleichzeitig bieten wir die Möglichkeit, von Expert*innen zu lernen: Im ca. 40-minütigen Interview erzählen sie von ihren Erfahrungen und stehen für Fragen zur Verfügung. Im Anschluss daran ist Zeit dafür, in lockerer Atmosphäre bei Getränken und Snacks miteinander ins Gespräch zu kommen.\n\nAm 14.06. ist Jöran Muuß-Merholz zu Gast, der schon seit Jahren das Thema OER und die Diskussion darüber in Deutschland grundlegend mitgestaltet. Im Gespräch mit Jessica Schlage, Moderatorin und Journalistin, erzählt er seine Geschichte mit OER und den Erfahrungen, die er unterwegs gesammelt hat. \n\nFür wen ist es gedacht? \n\nZum AfterwOERk sind alle eingeladen, die schon selbst Erfahrungen in der OER-Produktion gesammelt haben und mit anderen über z.B. Best Practices oder Zukunftsfragen in Kontakt kommen wollen. \nWillkommen sind aber genauso alle, die das Thema interessiert und die anfangen möchten, selbst Materialien unter freien Lizenzen zu veröffentlichen. \n\nGrundsätzliches \n\nDas Meetup ist nichtkommerziell und die Teilnahme kostenfrei, eine Anmeldung aber nötig.\n\n\nWann und wo?\n\nDas AfterwOERk findet statt am Donnerstag, den 14.06.18, von 18.30 Uhr bis 20.30 Uhr \nim Betasalon des Betahauses Hamburg, im Haus 73, 1. OG am Schulterblatt 73, 22765 Hamburg.\n\nDie Anmeldung ist möglich über Xing: https://www.xing.com/events/afterwoerk-hamburg-1950816. Falls es damit Probleme geben sollte, melden Sie sich gern beim Team HOOU@HAW via team_hoou (at) haw-hamburg (dot) de.\n\nDas HOOU AfterwOERk ist das offizielle Vorabendprogramm zum OERCamp Nord, das am 15. und 16.06.18 in Hamburg stattfindet. Weitere Informationen dazu finden Sie hier: www.oercamp.de.\n\nUnser Veranstaltungspartner ist das Betahaus Hamburg."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "postalCode": "20357",
                        "streetAddress": "Schulterblatt 73"
                      },
                      "geo": {
                        "lat": 53.5623976,
                        "lon": 9.9612198
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "HOOU AfterwOERk"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "„Im deutschsprachigen Raum sind wir in Sachen Open Educational Resources im internationalen Vergleich eher noch rückständig.“ Diesen oder ähnliche Sätze äußern Experten in Interviews oder auf Podien gerne, und zwar seit Jahren. Der Satz stimmt heute nicht mehr. Es gibt inzwischen zahlreiche Ideen, Initiativen, Akteure, Projekte und Institutionen zu OER in allen Bildungsbereichen.\r\n\r\nDas OER-Festival 2016 #OERde16 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen gleichzeitig die bisherigen Aktivitäten feiern und die nächste Phase der OER-Entwicklung einleiten. Das „de“ in #OERde16 steht dabei nicht für „Deutschland“, sondern für „deutschsprachig“. Wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.\r\n\r\nOER-Festival KomponentenDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können."
                      }
                    ],
                    "image": "http://i0.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/09/oerde16_logo.png?w=608",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10117",
                        "streetAddress": "In den Ministergärten 8"
                      },
                      "geo": {
                        "lat": 52.5125,
                        "lon": 13.37828
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OER-Festival 2016"
                      }
                    ]
                  }
                ],
                "publication": [
                  {
                    "@id": "urn:uuid:c7d202a9-82f1-4561-8780-cfd96c600737",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Open Educational Resources (OER) sind Lehr-Lern-Materialien, die kostenlos genutzt, weiterbearbeitet und frei weitergegeben werden können. Die internationale Debatte wird seit 2001 geführt. In Deutschland ist das Thema in den letzten Jahren in den Fokus geraten. Das Papier bietet Einstieg und Überblick für Betroffene, Interessierte und Entscheidungsträger. Es gibt einen Überblick über die Grundlagen und rechtliche Rahmenbedingungen und stellt die wichtigsten Akteure und Ereignisse vor."
                      }
                    ],
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Whitepaper Open Educational Resources (OER) an Hochschulen in Deutschland"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:fed2cff3-8132-4963-ad90-a6948f489152",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Jöran Muuß-Merholz and Jan Neumann are giving an overview of the German OER policy process in less than 10 minutes."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Is Germany taking the fast track to OER?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5f438530-21fc-4d6d-8166-7c0adfc131cf",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Open Educational Resources (OER) sind Lehr-Lern-Materialien, die kostenlos genutzt, weiterbearbeitet und frei weitergegeben werden können. Die internationale Debatte wird seit 2001 geführt. In Deutschland ist das Thema in den letzten Jahren in den Fokus geraten.\r\n\r\nDas Papier bietet Einstieg und Überblick für Betroffene, Interessierte und Entscheidungsträger. Es gibt einen Überblick über die Grundlagen und rechtliche Rahmenbedingungen und stellt die wichtigsten Akteure und Ereignisse vor.\r\n\r\n2014 erscheint dieses Whitepaper als komplette Überarbeitung der ersten Auflage aus 2012. In Deutschland hat es viele neue Entwicklungen gegeben – in den letzten zwei Jahren mehr als in den zehn Jahren zuvor."
                      }
                    ],
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Whitepaper OER für Schulen in Deutschland"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "UNESCO Institute for Information Technologies in Education (UNESCO IITE) published the book on Open Educational Resources in Germany within its project on Open Educational Resources (OER) in non-English-speaking countries. The authors of the report – Dominic Orr, Jan Neumann and Joeran Muuss-Merholz – used holistic approach to explore diverse issues related to OER, including the policy perspective, as well as technical, legal, social and didactical aspects. The report provides a brief overview of the OER-related developments in Germany, describes the structure of the German education system and reveals major educational challenges. The state of advancement of OER in Germany is analyzed using bottom-up and top-down perspectives.\r\n \r\nThough Germany could be characterized as a relatively latecomer to the OER scene, there is a strong OER community in the country: the OER World Map data for Germany shows 166 organisations involved in OER-related practices. Recent government activities in the field of OER include the OERinfo funding programme, which was launched in November 2016. There are some important initiatives at the level of federal entities, for example, the establishment of the Hamburg Open Online University, which is currently the most ambitious OER project in Germany. Considering the fact that for the German educational community and the authorities of different levels OER are recognized for their potential in fostering innovation, it is expected that the recent and forthcoming grassroots OER initiatives and those triggered by the authorities will favour the advancement of open education in Germany."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "German OER Practices and Policy – from Bottom-up to Top-down Initiatives"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:0ed468de-d612-43a3-ae09-27f61e707363",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Open Educational Resources (OER) sind Lehr-Lern-Materialien, die kostenlos genutzt, weiterbearbeitet und frei weitergegeben werden können. Die internationale Debatte wird seit 2001 geführt. In Deutschland ist das Thema in den letzten Jahren in den Fokus geraten. Das Papier bietet Einstieg und Überblick für Betroffene, Interessierte und Entscheidungsträger. Es gibt einen Überblick über die Grundlagen und rechtliche Rahmenbedingungen und stellt die wichtigsten Akteure und Ereignisse vor."
                      }
                    ],
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Whitepaper Open Educational Resources (OER) in Weiterbildung / Erwachsenenbildung – Bestandsaufnahme und Potenziale 2015"
                      }
                    ]
                  }
                ],
                "name": [
                  {
                    "@language": "de",
                    "@value": "Jöran Muuß-Merholz"
                  }
                ],
                "attends": [
                  {
                    "@id": "urn:uuid:a7a55e8a-9705-481f-a26a-a43a1509fbee",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Am 31. Mai 2017 findet an der Universität Graz das erste österreichische OER-Festival statt. Die Veranstaltung bietet spannende Vorträge und Workshops rund um das Thema Open Educational Resources und wird vom Forum neue Medien in der Lehre Austria gemeinsam mit dem Projekt Open Education Austria organisiert."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "AT",
                        "addressLocality": "Graz",
                        "addressRegion": "AT.ST",
                        "postalCode": "8010",
                        "streetAddress": "8 Mozartgasse"
                      },
                      "geo": {
                        "lat": 47.079768,
                        "lon": 15.447293
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7237e8db-fe4d-41ef-9d05-cd7fb7e3b5af",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands. \r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Hamburg",
                        "addressRegion": "DE.HH",
                        "streetAddress": "Yu Garden"
                      },
                      "geo": {
                        "lat": 53.568585,
                        "lon": 9.990353
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Nord"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:926e5242-6eb7-4f88-be74-98663c6167c7",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "München",
                        "addressRegion": "DE.BY"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Süd"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "„Im deutschsprachigen Raum sind wir in Sachen Open Educational Resources im internationalen Vergleich eher noch rückständig.“ Diesen oder ähnliche Sätze äußern Experten in Interviews oder auf Podien gerne, und zwar seit Jahren. Der Satz stimmt heute nicht mehr. Es gibt inzwischen zahlreiche Ideen, Initiativen, Akteure, Projekte und Institutionen zu OER in allen Bildungsbereichen.\r\n\r\nDas OER-Festival 2016 #OERde16 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen gleichzeitig die bisherigen Aktivitäten feiern und die nächste Phase der OER-Entwicklung einleiten. Das „de“ in #OERde16 steht dabei nicht für „Deutschland“, sondern für „deutschsprachig“. Wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.\r\n\r\nOER-Festival KomponentenDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können."
                      }
                    ],
                    "image": "http://i0.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/09/oerde16_logo.png?w=608",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10117",
                        "streetAddress": "In den Ministergärten 8"
                      },
                      "geo": {
                        "lat": 52.5125,
                        "lon": 13.37828
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OER-Festival 2016"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "streetAddress": "Ubierring 48"
                      },
                      "geo": {
                        "lat": 50.921624,
                        "lon": 6.964928
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 West"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Das zweite OER-Festival\r\n\r\n21 Monate nach dem ersten OER-Festival #OERde16 wird es bei der #OERde17 weiter darum gehen, den Austausch untereinander und die Sichtbarkeit der OER-Community zu katalysieren. Denn darauf kommt es an, wenn das Jahr 2017 rückblickend nicht als Strohfeuer, sondern als Tipping Point gelten soll. Das OER-Festival 2017 #OERde17 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen die bisherigen Aktivitäten feiern und über die nächsten Schritte der OER-Entwicklung beratschlagen.\r\n\r\n(Das „de“ in #OERde17 steht übrigens nicht für „Deutschland“, sondern für „deutschsprachig“. Denn wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.)\r\n\r\n## OERcamp, OER-Fachforum, OER-Award, OER-Atlas\r\n\r\nDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können:\r\n\r\n- das OERcamp – das Treffen der Praktiker*innen (27./28.11.)\r\n- das OER-Fachforum – als Dialog der Macher*innen und Multiplikator*innen (28./29.11.)\r\n- der OER-Award – die Auszeichnung für Open Educational Resources im deutschsprachigen Raum (mit Preisverleihung am 27.11.)\r\n- der OER-Atlas – die gebündelte Bestandsaufnahme der #OERde-Landschaft (veröffentlicht am 28.11.)"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place from October the 15th till October the 16th in  Warsaw, Poland."
                      }
                    ],
                    "image": "https://oerpolicy.eu/wp-content/uploads/sites/4/2017/03/oer-policy-forum_logo-e1498825169421.png",
                    "location": {
                      "address": {
                        "addressCountry": "PL",
                        "addressLocality": "Warschau",
                        "addressRegion": "PL.MZ"
                      },
                      "geo": {
                        "lat": 52.2319237,
                        "lon": 21.0067265
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Policy Forum 2018"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7b0c8f88-379c-4103-8154-7177ceeebf43",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.\r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Ost"
                      }
                    ]
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH",
                    "postalCode": "20099",
                    "streetAddress": "Schmilinskystraße 45"
                  },
                  "geo": {
                    "lat": 53.555118,
                    "lon": 9.995295
                  }
                },
                "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5",
                "email": "buero@joeran.de",
                "sameAs": [
                  "https://plus.google.com/+JöranMuußMerholz",
                  "https://www.xing.com/profile/Joeran_MuussMerholz",
                  "http://de.linkedin.com/in/joeran/",
                  "https://twitter.com/joeranEN",
                  "https://twitter.com/joeranDE",
                  "https://www.facebook.com/jmm.hamburg"
                ]
              },
              "dateModified": "2019-02-21T10:28:07.442+01:00",
              "@id": "urn:uuid:4e6f0a59-30c2-4045-9f6f-b599740c42c5.about",
              "lighthouse_count": "0"
            }
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf.about",
            "_score": 1,
            "_source": {
              "contributor": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
              "dateCreated": "2015-10-08T15:09:22Z",
              "like_count": "0",
              "feature": {
                "properties": {
                  "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
                  "@type": "Person",
                  "name": [
                    {
                      "@language": "en",
                      "@value": "Jan Neumann"
                    }
                  ],
                  "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
                  "additionalType": [
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#oerAdvocate",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "OER advocate"
                        },
                        {
                          "@language": "de",
                          "@value": "OER-Befürworter"
                        },
                        {
                          "@language": "en",
                          "@value": "OER advocate"
                        }
                      ]
                    },
                    {
                      "@id": "https://oerworldmap.org/assets/json/persons.json#librarian",
                      "@type": "Concept",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Librarian"
                        },
                        {
                          "@language": "de",
                          "@value": "Bibliothekar/in"
                        },
                        {
                          "@language": "en",
                          "@value": "Librarian"
                        }
                      ]
                    }
                  ],
                  "location": {
                    "address": {
                      "addressCountry": "DE",
                      "addressLocality": "Köln",
                      "addressRegion": "DE.NW",
                      "postalCode": "50674",
                      "streetAddress": "Jülicher Straße 6"
                    },
                    "geo": {
                      "lat": 50.934119,
                      "lon": 6.935572
                    }
                  }
                },
                "type": "Feature",
                "id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
                "geometry": {
                  "type": "Point",
                  "coordinates": [
                    6.935572,
                    50.934119
                  ]
                }
              },
              "@type": "WebPage",
              "author": null,
              "link_count": "896",
              "about": {
                "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
                "countryChampionFor": [
                  "DE"
                ],
                "keywords": [
                  "referent",
                  "oer-librarian",
                  "UNESCO",
                  "business models",
                  "library",
                  "esd - education for sustainable development ",
                  "programm management",
                  "organization development",
                  "OER Policy",
                  "systems thinking on oer"
                ],
                "@type": "Person",
                "agentIn": [
                  {
                    "@id": "urn:uuid:a6af47d0-79c9-420a-a9ac-8ed2ae7e2ee2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:706a238a-77eb-11e5-9f9f-c48e8ff4ea31",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Massachusetts Institute of Technology (MIT) is a world-class teaching and research institution, committed to the advancement of knowledge and education of students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century. MIT is independent, coeducational, and privately endowed. Its five schools and one college encompass 33 academic departments, as well as numerous interdisciplinary centers and programs whose work cuts across traditional departmental boundaries."
                        }
                      ],
                      "image": "http://www.oeconsortium.org/media/logos/mit.gif",
                      "location": {
                        "@type": "Place",
                        "address": {
                          "@type": "PostalAddress",
                          "addressCountry": "US",
                          "addressLocality": "Cambridge",
                          "postalCode": "02139",
                          "streetAddress": "Broad Canal Way"
                        },
                        "geo": {
                          "lat": 42.362805,
                          "lon": -71.084037
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Massachusetts Institute of Technology"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:04:33.046Z"
                  },
                  {
                    "@id": "urn:uuid:19cd7174-cd73-42f9-890e-c855770819a6",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9d52fccc-9ac3-460d-9e00-6a44341b13c1",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "TU Delft (Delft University of Technology) was established as a Royal Academy in 1842 to facilitate the education of civil engineers.\r\n\r\nThe Logo of the University resembles the flame of Prometheus, who, against the will of Zeus, brought mankind the mighty fire from the mountain Olympus. TU Delft can follow in Prometheus' footsteps by developing innovative, durable and environment-friendly technology. Prometheus' flame thereby makes a worthy symbol for TU Delft.\r\n\r\nTU Delft exhibits eight faculties: Aerospace Engineering; Applied Sciences; Architecture and Built Environment; Civil Engineering and Geosciences; Electrical Engineering, Mathematics and Computer Science; Industrial Design Engineering; Mechanical, Maritime and Materials Engineering; Technology and Policy Management."
                        }
                      ],
                      "image": "https://dtt3vfay88ed6.cloudfront.net/Websections/TU%20Delft%20Huisstijl/logogebruik-tudelft.png",
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "Delft",
                          "addressRegion": "NL.ZH",
                          "postalCode": "2628 CA",
                          "streetAddress": "TU Delft Warmtekrachtcentrale"
                        },
                        "geo": {
                          "lat": 51.999791,
                          "lon": 4.369171
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "TU Delft"
                        }
                      ]
                    },
                    "startTime": "2018-06-04T13:42:17.350Z"
                  },
                  {
                    "@id": "urn:uuid:d55581a8-97a2-4f5f-bd6a-2921684d5ac8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:706a40cc-77eb-11e5-9f9f-c48e8ff4ea31",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": " The National Open University of Nigeria is a Federal Open and Distance Learning (ODL) institution, the first of its kind in the West African sub-region. It is Nigeria's largest tertiary institution in terms of student numbers and is popularly referred to as  NOUN. It currently runs  70 Study Centers across Nigeria.\r\n"
                        }
                      ],
                      "image": "https://www.nounstudentportal.org/wp-content/uploads/2015/04/national-open-university-of-nigeria-noun.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "NG",
                          "addressLocality": "Lagos",
                          "addressRegion": "NG.LA",
                          "streetAddress": "14/16 Ahmadu Bello Way Victoria Island"
                        },
                        "geo": {
                          "lat": 6.4299078,
                          "lon": 3.4087254
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "National Open University of Nigeria"
                        }
                      ]
                    },
                    "startTime": "2018-06-11T19:28:05.576Z"
                  },
                  {
                    "@id": "urn:uuid:3b4deb02-2520-4e30-8032-17b2a4a12c2b",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Where would Open Education be without the William and Flora Hewlett Foundation? The strong commitment of the foundation for OER from its very beginning on is unique, its influence for the global uptake of Open Education cannot be overestimated. "
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0801e4d4-3c7e-11e5-9f0e-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The William and Flora Hewlett Foundation is a private foundation, established by Hewlett-Packard cofounder William Redington Hewlett and his wife Flora Lamson Hewlett in 1966. It awards grants to a variety of liberal and progressive causes. The Hewlett Foundation was the main financial supporter of open educational resources in the early years and has spent more than $110 million in the 2002 to 2010 period."
                        }
                      ],
                      "image": "http://glasspockets.org/var/ezflow_site/storage/images/site_glasspockets/glasspockets-gallery/who-has-glass-pockets/the-william-and-flora-hewlett-foundation/3483996-4-eng-US/the-william-and-flora-hewlett-foundation.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Menlo Park",
                          "addressRegion": "US.CA",
                          "postalCode": "94025",
                          "streetAddress": "2121 Sand Hill Road"
                        },
                        "geo": {
                          "lat": 37.428592,
                          "lon": -122.192244
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The William and Flora Hewlett Foundation"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:a7ed770f-a895-4434-8cff-825980c844df",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4c9803fd-c149-42a3-8639-04450bcb080e",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:c4a55240-bbdb-48fd-b40e-6bd96f4ba8f5"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "A collaborative project that has being brought to life just a few days before #openeducationwk in 2017 to  curate open stories by educators, researchers, students and other learners and connect individuals and ideas from around the world during #openeducatiowk and the #yearofopen 2017. The team consists of individuals from 6 continents. We are all PhD students and members of the GO-GN."
                        }
                      ],
                      "image": "http://www.101openstories.org/wp-content/uploads/2017/04/cropped-banner1380.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressRegion": "US.FL"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "#101openstories"
                        }
                      ],
                      "startTime": "2017-03"
                    },
                    "startTime": "2018-07-03T13:17:47.779Z"
                  },
                  {
                    "@id": "urn:uuid:2af2a501-c43c-4148-9ba8-9b8d1d9c299e",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "„Im deutschsprachigen Raum sind wir in Sachen Open Educational Resources im internationalen Vergleich eher noch rückständig.“ Diesen oder ähnliche Sätze äußern Experten in Interviews oder auf Podien gerne, und zwar seit Jahren. Der Satz stimmt heute nicht mehr. Es gibt inzwischen zahlreiche Ideen, Initiativen, Akteure, Projekte und Institutionen zu OER in allen Bildungsbereichen.\r\n\r\nDas OER-Festival 2016 #OERde16 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen gleichzeitig die bisherigen Aktivitäten feiern und die nächste Phase der OER-Entwicklung einleiten. Das „de“ in #OERde16 steht dabei nicht für „Deutschland“, sondern für „deutschsprachig“. Wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.\r\n\r\nOER-Festival KomponentenDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können."
                        }
                      ],
                      "image": "http://i0.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/09/oerde16_logo.png?w=608",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10117",
                          "streetAddress": "In den Ministergärten 8"
                        },
                        "geo": {
                          "lat": 52.5125,
                          "lon": 13.37828
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "OER-Festival 2016"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:40:31.041+02:00"
                  },
                  {
                    "@id": "urn:uuid:31cf9983-e6d2-415e-baed-d577b17102f9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7af0a341-e522-4abb-a810-2c632f9b7ac9",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "**OpenDataPortal**\nKartenübersicht zu Open Data Portalen und Geodateninfrastrukturen in Deutschland, Österreich und der Schweiz."
                        }
                      ],
                      "image": "https://www.opengeoedu.de/images/logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OpenGeoEdu - Open Data Portal"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T20:31:44.133Z"
                  },
                  {
                    "@id": "urn:uuid:92cb680f-0662-4ff8-8ab8-1602f13bb3d7",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:dcfd0fbc-a5ba-4764-8430-2c127a11e873",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "A new annual global conference to bring together leaders and developers of Open Educational Technology projects."
                        }
                      ],
                      "image": "https://pbs.twimg.com/profile_images/1072184484496400384/WS5WKB2T_400x400.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "ES",
                          "addressLocality": "Barcelona",
                          "addressRegion": "ES.CT"
                        },
                        "geo": {
                          "lat": 41.3828939,
                          "lon": 2.1774322
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OpenEdTech Festival"
                        }
                      ]
                    },
                    "startTime": "2018-12-15T16:58:55.707Z"
                  },
                  {
                    "@id": "urn:uuid:abe8423a-0af5-44b1-9096-78ecd561b3d9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:001ca1c1-4f98-4219-8349-8ded2c2d75f1",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Das Thema OER ist im Kontext der UNESCO oder der Europäischen Kommission schon seit mehreren Jahren auf der Agenda. Im September 2017 fand der zweite UNESCO-Weltkongress zu OER in Ljubljana statt. Auch in Deutschland hat die Diskussion um offene Bildungsmaterialien deutlich an Fahrt aufgenommen. Im Vergleich zu anderen Bildungsbereichen steht die berufliche Bildung jedoch noch am Anfang der Entwicklung. Der Artikel skizziert Chancen und Herausforderungen, die mit dem Thema OER verbunden sind, und verdeutlicht diese anhand zweier Praxisbeispiele aus der beruflichen Bildung."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Educational Resources (OER) in der beruflichen Bildung "
                        }
                      ]
                    },
                    "startTime": "2019-03-28T21:05:31.978Z"
                  },
                  {
                    "@id": "urn:uuid:bfaa7f1d-cee9-4683-adaa-bf999135dc52",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:db8ba740-67af-42a4-926e-3014e2b3ec6b",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:d6df7d5c-b19e-4244-8143-f9621167da00"
                        },
                        {
                          "@id": "urn:uuid:968b2d2a-5442-4527-bb7a-41b45a51c84d"
                        },
                        {
                          "@id": "urn:uuid:86365dfe-15ae-11e5-83b8-001999ac7930"
                        },
                        {
                          "@id": "urn:uuid:513cac9e-ab79-4441-842d-c9fa13e99165"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open Education Italia is a community of experts, teachers and other stakeholders aimed at promoting Open Education in Italy, in a broad sense, in full connection with areas such as Open Data, open science, civic participation, and with particular attention the social impact of open education practices. Born in 2017 to respond to the fragmentation of the sector in Italy, the community counts with more than 50 members, active from school education to higher education to Lifelong Learning.\n\nOur objectives are to:\n- facilitate collaboration between experts and institutions from different sectors (school, university, public administration, associations, museums, libraries, etc.)\n- valorise and transfer innovative practices\n-. improve the ability to work with open approaches "
                        }
                      ],
                      "image": "https://educazioneaperta.eu/wp/wp-content/uploads/Schermata-2019-02-15-alle-13.18.38.png",
                      "location": {
                        "address": {
                          "addressCountry": "IT",
                          "addressRegion": "IT.BO"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Italia"
                        }
                      ],
                      "startTime": "2017-03-18"
                    },
                    "startTime": "2019-02-15T18:37:23.770Z"
                  },
                  {
                    "@id": "urn:uuid:3360486b-b0ac-40d7-9f8e-a30b29e5b568",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ef63568b-9e81-4003-9aa5-54ddff99f9d3",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Hier finden Sie Unterstützung bei der Veranstaltung von (Jugend-)BarCamps. Das Projekt „Kombischulung eKultur“ beinhaltete die Konzeptentwicklung und Durchführung einer barrierearmen, inklusiven, gender- und diversitysensiblen Kombischulung als Fortbildung für Fachkräfte und als Tutor_innenschulung für Jugendliche und junge Erwachsene zur Durchführung von Jugendbarcamps.\r\nHiermit steht nun ein Curriculum für eine innovative Kombischulung zur Verfügung, welche als freies Lehr- und Lernmaterial genutzt und weiterentwickelt werden kann.\r\n"
                        }
                      ],
                      "image": "http://jbc.medialepfade.de/wp-content/uploads/2013/04/ekultur_ordner_mini.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Jugend-Barcamps: Ressourcen, Texte, Tools"
                        }
                      ]
                    },
                    "startTime": "2017-11-27T11:57:36.757+01:00"
                  },
                  {
                    "@id": "urn:uuid:8594a67c-e582-498c-90ec-97d0af900710",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:2b9f47fc-072c-4306-b09c-af97d204623d",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:682837b6-3c42-4c92-b5b3-dbb1e6c2c0a9"
                        },
                        {
                          "@id": "urn:uuid:8a099b65-15b3-4660-82a9-fceba458bd59"
                        },
                        {
                          "@id": "urn:uuid:10f27280-ef7f-47fd-859e-ffca2a29b6d7"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Unterrichtsmaterialien zum Lernen mit digitalen Bildungsmedien sind anregende Beispiele und motivieren zum Ausprobieren und Weiterentwickeln. Die Behörde für Schule und Berufsbildung und die Joachim Herz-Stiftung werden daher in den Jahren 2018 und 2019 „Digitale Unterrichtsbausteine“ entwickeln lassen. Diese konkret nutzbaren, motivierenden Bausteine sollen in die Fächer integriert und so die digitalen Kompetenzen der Schülerinnen und Schüler an Hamburgs weiterführenden Schulen weiterentwickelt werden."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Digitale Unterrichtsbausteine"
                        }
                      ],
                      "startTime": "2018"
                    },
                    "startTime": "2018-05-15T10:44:38.848Z"
                  },
                  {
                    "@id": "urn:uuid:9324ca9a-735c-4586-bafb-7f1de79226d7",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9843bac3-028f-4be8-ac54-92dcfea8cb01",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Unglue.it is a place for individuals and institutions to join together to make ebooks free to the world. We work together to support authors, publishers, or other rights holders who want their ebooks to be free. We support Creative Commons licensing as an enabling tool to \"unglue\" the ebooks. \r\n\r\nWe have three types of Ungluing Campaigns: Pledge Campaigns, Buy-to-Unglue Campaigns and Thanks-for-Ungluing campaigns.\r\n\r\n * In a Pledge Campaign, book lovers pledge their support for ungluing a book. If enough support is found to reach the goal (and only then), the supporter's credit cards are charged, and an unglued ebook is released.\r\n  * In a Buy-to-Unglue Campaign, every ebook copy sold moves the book's ungluing date closer to the present. And you can donate ebooks to your local library- that's something you can't do in the Kindle or Apple Stores!\r\n   * In a Thanks-for-Ungluing Campaign, the ebook is already released with a Creative Commons license. Supporters can express their thanks by paying what they wish for the license and the ebook.\r\n\r\nWe also support distribution and preservation of free ebooks through our growing catalog of free-licensed ebooks. "
                        }
                      ],
                      "image": "https://unglue.it/static/images/logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "unglue.it"
                        }
                      ]
                    },
                    "startTime": "2017-11-27T12:20:05.6+01:00"
                  },
                  {
                    "@id": "urn:uuid:9ab0d80c-a862-47ee-a3b1-f04e7ca5d985",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e3d7ab3f-e991-45e2-801e-a31aa08241e8",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "ABSTRACT. Open educational practices (OEP) is a broad descriptor of practices that include the creation, use, and reuse of open educational resources (OER) as well as open pedagogies and open sharing of teaching practices. As compared with OER, there has been little empirical research on individual educators’ use of OEP for teaching in higher education. This research study addresses that gap, exploring the digital and pedagogical strategies of a diverse group of university educators, focusing on whether, why, and how they use OEP for teaching. The study was conducted at one Irish university; semi-structured interviews were carried out with educators across multiple disciplines. Only a minority of educators used OEP. Using constructivist grounded theory, a model of the concept “Using OEP for teaching” was constructed showing four dimensions shared by open educators: balancing privacy and openness, developing digital literacies, valuing social learning, and challenging traditional teaching role expectations. The use of OEP by educators is complex, personal, and contextual; it is also continually negotiated. These findings suggest that research-informed policies and collaborative and critical approaches to openness are required to support staff, students, and learning in an increasingly complex higher education environment."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Openness and praxis: Exploring the use of open educational practices in higher education"
                        }
                      ]
                    },
                    "startTime": "2019-01-29T20:34:34.335Z"
                  },
                  {
                    "@id": "urn:uuid:2d063043-7567-42c0-bd52-b3d5fd3a3f21",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Great project for many reasons. A good example, that reuse by translation is working, especially for easy texts. It also is a great example for the use of OER in lesser used languages. Actually many of the covered African Languages are not yet included in the OER World Map list."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0c066016-4807-11e5-8ec6-54ee7558c81f",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The African Storybook initiative aims to address the shortage of contextually appropriate books for early reading in the languages of Africa. Our vision is for all young African children to have enough enjoyable books to read in a familiar language to practise their reading skills and learn to love reading.\r\n\r\nOn the African Storybook website, www.africanstorybook.org , users can find, create, translate or adapt stories for early reading. They can download and copy the stories and/or illustrations without having to ask for permission or pay a fee. The stories can be read online or offline or printed from the website.\r\n\r\nOur digital open licence publishing model is providing a growing number of stories in a growing number of languages without having to consider the size of the market for stories of a particular type in a particular language. In just of over two years, over 400 stories with nearly 2000 translations in over 60 languages have been generated and published, and the site grows each month.\r\n\r\nTo encourage and learn from use, the project is working with teachers, librarians, teacher educators and literacy development organisations in Eastern and Southern Africa.\r\n\r\nThe project is an initiative of Saide, a registered Non-Profit Organisation governed by a Trust and based in Johannesburg. The first four years of the project (2013 to 2016) are being funded by the UK based funder, Comic Relief."
                        }
                      ],
                      "image": "https://upload.wikimedia.org/wikipedia/en/5/5a/African_Storybook_logo_blue.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "African Storybook Initiative"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:c7135f3b-c5db-47b4-a226-3b46328eea34",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:1df7c2e6-00e4-470c-a363-48cef008ea7a",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open Design Kit is a living collection of guides and best practices to help you to make and design openly.\n\nThe Kit was originally incubated at Bocoup and became a community owned project in Summer 2017.\n\nPlease help us make it better by contributing to it with feedback on Github or on the #opendesignkit channel in the Open Design Foundation Slack community."
                        }
                      ],
                      "image": "http://jessklein.is/project/odk/_featured.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Boston",
                          "addressRegion": "US.MA"
                        },
                        "geo": {
                          "lat": 42.3604823,
                          "lon": -71.0595678
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Design Kit "
                        }
                      ]
                    },
                    "startTime": "2018-07-05T22:26:23.026Z"
                  },
                  {
                    "@id": "urn:uuid:ad974d01-a080-4d6f-9e1a-236ab4224b16",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5bc302ed-9550-4c74-82b8-0536dc6132b5",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "We are looking forward to welcome you in 2019, when the OER Conference will focus on the following themes:\n\nBack to basics – asking difficult questions about open education:\n\n* Why open?\n\n  * Open for whom?\n\n  * Whose interests are served?\n\n  * In what ways has the open agenda been appropriated, and what are the implications of this?\n\n * The geopolitics of open education, bringing open in from the periphery\n\n* The open ecosystem: How is open education part of the broader ecosystem of “opens”?\n\n* What does it mean to illuminate open by considering context?\n\n* How can historical perspectives contribute to understanding the issues faced in the open education movement today?\n\n* Links between critical digital literacies, critical data literacies, and openness\n\n* What open business models are emerging? What are the paths to sustainability?\n\n* What are the risks and challenges to the open education agenda?\n\nThe conference will be co-chaired by Laura Czerniewicz and Catherine Cronin."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "IE",
                          "addressLocality": "Galway City",
                          "addressRegion": "IE.GY",
                          "postalCode": "H91 E1NY",
                          "streetAddress": "University Road"
                        },
                        "geo": {
                          "lat": 53.2761205,
                          "lon": -9.059963
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER19 Recentering open: Critical and global perspectives"
                        }
                      ]
                    },
                    "startTime": "2019-04-05T10:03:32.542Z"
                  },
                  {
                    "@id": "urn:uuid:35719b8f-d6e4-48a5-9f73-b5e0d263e474",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:39144fe4-4e4d-4bfb-8aa9-75069403b9c1",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The OEF platform allows university educators to self-assess their capacity and level of development in terms of Open Education and provides some guidelines to further adopt openness in all dimensions of their activities.\n\nIf you are a university educator, just fill a short questionnaire and you will see how you “position” with respect to different openness dimensions. You will also receive immediate feedback with some ideas, suggestions and inspirations that shall improve your work in terms of openness, effectiveness and impact.\n\nIf you are a university manager and you want to improve the openness capacity of your teaching staff, get in touch with us so that we can add your institution to the system; then educators from your university will fill the questionnaire and you will be able to see how they “position” with respect to different openness dimensions. "
                        }
                      ],
                      "image": "http://rd.unir.net/pub/oef/img/ited_banner.png",
                      "location": {
                        "address": {
                          "addressCountry": "ES",
                          "addressLocality": "Madrid",
                          "addressRegion": "ES.MD",
                          "postalCode": "28001",
                          "streetAddress": "Calle Almansa 101"
                        },
                        "geo": {
                          "lat": 40.4486857,
                          "lon": -3.7042714
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Educators Factory"
                        }
                      ]
                    },
                    "startTime": "2018-07-10T15:48:37.589Z"
                  },
                  {
                    "@id": "urn:uuid:42ce7b05-1d66-4ac7-87a1-7cce7d323d4b",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:15629569-2faa-4714-b06f-02bdda475540",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Arising from National Forum work on building digital capacity, this Review of the Existing Higher Education Policy Landscape for Digital Teaching and Learning in Ireland is designed to inform, guide and support all those responsible for the development of key policies in teaching and learning throughout our higher education sector."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "IE"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "A review of the existing higher education policy landscape for digital teaching and learning in Ireland"
                        }
                      ]
                    },
                    "startTime": "2019-04-09T18:13:06.694Z"
                  },
                  {
                    "@id": "urn:uuid:44d105ce-deee-459a-b76a-a6f4decc164a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:fc07a39b-78e3-440b-ba9a-a2cc3049194a",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Mit einer breiten Palette von Referaten, Workshops und Kurzpräsentationen vermittelt die kostenlose Tagung Wissen und Erfahrung zu Open Source Technologien, Open Content und Informatikkompetenzen im Lehrplan 21."
                        }
                      ],
                      "image": "https://openeducationday.ch/wp-content/uploads/sites/5/2019/02/OED2019_Cover.pdf",
                      "location": {
                        "address": {
                          "addressCountry": "CH",
                          "addressLocality": "Bern",
                          "addressRegion": "CH.BE",
                          "postalCode": "3012"
                        },
                        "geo": {
                          "lat": 46.95315875,
                          "lon": 7.42233608943152
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Open Education Day"
                        }
                      ]
                    },
                    "startTime": "2019-04-05T11:04:37.914Z"
                  },
                  {
                    "@id": "urn:uuid:2621663d-2bdb-4620-83e9-16ab0c894f63",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9d8c62d1-df60-4a5d-90ea-2e381551f560",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "fr",
                          "@value": "L'UCA est une jeune université, créée en 1978, qui n’a cessé d’évoluer et de confirmer son positionnement au niveau national et international autant par l’évolution de son effectif d’étudiants que par la diversification de son offre de formation ou encore par la recherche et le rayonnement national et international.\r\n\r\nSes missions :\r\n- Formation initiale et continue ;\r\n- Recherche Scientifique et Technologique ;\r\n- Diffusion de la culture et Information Scientifique et Technique ;\r\n- Coopération Nationale et Internationale ;\r\n- Orientation et Insertion Professionnelle ;\r\n- Participation au développement économique régional et national.\r\n\r\nSes principes :\r\n- Pluridisciplinarité ;\r\n- Autonomie pédagogique et scientifique ;\r\n- Autonomie administrative et financière ;\r\n- Ouverture."
                        }
                      ],
                      "image": "https://www.uca.ma/public/files/images/site-1-2525ed2b2ad29dfbbe242515dda9cf43-2143650689.png",
                      "location": {
                        "address": {
                          "addressCountry": "MA",
                          "addressLocality": "Marrakech",
                          "addressRegion": "MA.MK",
                          "streetAddress": "Av Abdelkrim Khattab"
                        },
                        "geo": {
                          "lat": 31.64384253321181,
                          "lon": -8.019406036182772
                        }
                      },
                      "name": [
                        {
                          "@language": "fr",
                          "@value": "Université Cadi Ayyad"
                        }
                      ]
                    },
                    "startTime": "2019-03-22T07:33:28.445Z"
                  },
                  {
                    "@id": "urn:uuid:e85d30f2-668b-4b77-a2dd-acd44799a474",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:22c5a15b-0cc1-4b25-aebe-d0b8129c77b2",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Within X5GON (http://x5gon.org/) we have developed an extensive architecture, where state-of-the-art machine learning, recommender and learning algorithms are deployed to crawl, classify and understand OER resources so that we can then determine how best to help people learn in a way most suited to them. We, therefore, have succeeded in harvesting OER data and creating the first AI-powered platform for OERs that will allow teachers and students, businesses and educational institutions to access OER from everywhere at any time in various formats such as video, text or pictures, different topics and languages."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Using OER data and AI services - convergence among OER sites offers unprecedented opportunities"
                        }
                      ]
                    },
                    "startTime": "2019-02-14T12:08:51.927Z"
                  },
                  {
                    "@id": "urn:uuid:faf9678f-be61-4d92-963b-49f793ee1408",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:dc1aca2d-d9f2-419b-9a32-70dc7822b797",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The African Virtual University’s (AVU) Open Education Resources repository, OER@AVU, is an opportunity for African educators to share open educational resources with each other, and the world. High quality resources can serve to inspire teachers, be directly used by students, and be improved upon, or localized by others. The AVU has seeded the repository with 219 high-quality modules, written by educators from many countries in Africa, but the repository depends on your contributions and participation. OER@AVU provides course materials for several science and education courses in three languages."
                        }
                      ],
                      "image": "https://oer.avu.org/themes/Mirage2//images/new_logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "African Virtual University's Open Education Resources Repository"
                        }
                      ]
                    },
                    "startTime": "2019-02-03T10:36:33.304Z"
                  },
                  {
                    "@id": "urn:uuid:aee83c3a-6664-4b93-852b-0f5cefcc39de",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The OER Hub is the role model for institutionalized research on openness per se. We should have oerhubs in every country!"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9a37e4f5-cd0f-4f1e-b685-cb09845f4dbf",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<P>OER Hub is a research team based at The Institute of Educational Technology at The Open University, UK.  They provide research consultancy and capacity building in open education.</P>\r\n<P>The OER Hub team have won several awards including the <a href=\"http://www.open.ac.uk/iet/main/news/oer-research-hub-wins-2014-open-research-award-excellence\" target=\"_blank\">Open Research Award</a> from<a href=\"http://www.oeconsortium.org/projects/open-education-awards-for-excellence/2014-winners-of-ace-awards/2014-ace-winners-projects-categories/\" target=\"_blank\">OEGlobal</a> (2014), the OU <a href=\"http://oerhub.net/collaboration-2/oer-research-hub-wins-engaging-research-award/\">Engaging Research Award</a> for the Open Researcher Course (2015) and <a href=\"http://www.oeconsortium.org/2016/03/the-oec-announces-2016-winners-of-site-course-and-project-awards-for-open-education-excellence/\" target=\"_blank\">Open MOOC award</a> for the ExplOERer course from OEGlobal (2016). Martin Weller was also awarded a Professorial chair by the International Council for Open and Distance Education (ICDE) in <a href=\"https://www3.open.ac.uk/media/fullstory.aspx?id=27431\" target=\"_blank\">particular recognition of the OER Hub project</a>.</P>"
                        }
                      ],
                      "image": "http://oerhub.net/wp-content/uploads/2016/06/oer-header-logo-390.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "Milton Keynes",
                          "addressRegion": "GB.MK",
                          "postalCode": "MK7 7SS",
                          "streetAddress": "Institute of Educational Technology, The Open University (UK)"
                        },
                        "geo": {
                          "lat": 52.0252737590406,
                          "lon": -0.7101202011108398
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Hub"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:0c30b6e7-3ebd-4f40-9834-f8ae72592135",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3d2061a8-a299-4458-80c0-351fb496430c",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Im ILIAS-Bereich der Universitätsbibliothek der JLU Gießen sind verschiedene Lernmaterialien verfügbar, z.B. der Online-Kurs zu Citavi inkl. Test und Zertifikatsausgabe. In aller Regel stehen die Inhalte unter einer CC BY SA-Lizenz, können also gerne nachgenutzt werden. Die Exportdateien können dazu auf Anfrage bereitgestellt werden."
                        }
                      ],
                      "name": [
                        {
                          "@language": "de",
                          "@value": "ILIAS-Angebote der Universitätsbibliothek der JLU Gießen"
                        }
                      ]
                    },
                    "startTime": "2018-06-19T10:20:27.095Z"
                  },
                  {
                    "@id": "urn:uuid:15d62791-9c34-491c-8ca7-5aad9a4e18aa",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:04d5f1ad-91d8-45c0-95d5-9b904e76ac05",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "During the qualitative research SBCTC conducted in 2014, faculty stressed the need for web resources that provide easy and organized access to OER. They experienced significant difficulty in using currently available OER due to a lack of guidance and organization of the materials. In response to this need, SBCTC launched this site in 2014; it is an open educational resources network for Washington State Community and Technical College (WA CTC) faculty."
                        }
                      ],
                      "image": "http://www.openwa.org/wp-content/uploads/2017/03/cropped-OpenWA_Full-Wordmark_Navy349x134.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OPEN Washington"
                        }
                      ]
                    },
                    "startTime": "2018-06-11T19:46:21.049Z"
                  },
                  {
                    "@id": "urn:uuid:6dcfc51f-7080-4d90-bd6e-9ca686b2f218",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:be86e453-6658-4d32-befa-320120f677c2",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The National Repository of Open Education Resources is a collaborative platform, which brings together everyone interested in school and teacher education in India. NROER has evolved from an e-Library to course maker (CMS) and course player (LMS) and collaborative Workspace for special interest groups.\n\nInitiated by the Department of School Education and Literacy, Ministry of Human Resource Development, Government of India and managed by the Central Institute of Educational Technology, National Council of Educational Research and Training, the Repository runs on the gStudio platform, an initiative of the Gnowledge Labs, Homi Bhabha Centre for Science Education."
                        }
                      ],
                      "image": "https://nroer.gov.in/static/ndf/css/themes/nroer/logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "National Repository of OER"
                        }
                      ]
                    },
                    "startTime": "2018-07-26T13:40:01.536Z"
                  },
                  {
                    "@id": "urn:uuid:0ae46026-2fb4-4d1d-9ec7-e2edafef3348",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-06-04T13:05:24.349Z"
                  },
                  {
                    "@id": "urn:uuid:ceb2ab96-5316-41a5-bac0-fed11708cb23",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:71d836c6-7ce4-4c1a-8b22-dd350aeae529",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This policy outlines the University’s position on Open Educational Resources (OERs) and provides\nguidelines for practice in learning and teaching.\nThe University encourages staff and students to use, create, and publish OERs to enhance the quality of the\nstudent experience, enhance the provision of learning opportunities for all, and improve teaching practices. It\nalso recognises that use, creation, and publication of OERs are consistent with the University’s reputation,\nvalues, and mission to “make a significant, sustainable and socially responsible contribution to Scotland, the\nUK and the world, promoting health and economic and cultural wellbeing”.\n\nThis document provides background, University position and guidance for the use of OERs in learning and\nteaching at the University of Edinburgh."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "University of Edinburgh OER Policy"
                        }
                      ]
                    },
                    "startTime": "2019-02-05T20:41:23.426Z"
                  },
                  {
                    "@id": "urn:uuid:db5eb61a-4e4e-40f2-ba38-81d05457a9bd",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7ee2bf94-028b-4bb1-a4b7-e0635b7c2420",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": " Permaculture Design is a method of land planning that can be applied at scales from the home garden to city block to village to farm. It is an ethically based whole-systems design approach that uses concepts, principles, and methods derived from ecosystems, indigenous technologies, and other time-tested practices to create sustainable human settlements and institutions. Although rooted in horticulture and agriculture, Permaculture design is interdisciplinary, touching on a wide range of subjects including regional planning, ecology, animal husbandry, appropriate technology, architecture, social justice, and international development.\n\nThis open text book is derived from the content of the Massive Open Online Course “Intro to Permaculture”. The original course also included interactive mapping and design tools that accompanied this content. The course and book provide a general overview of the Permaculture design system. The book can be downloaded as a print version. However, there are many accompanying videos and content pages that are linked to throughout the text, so it is best viewed online where the links can be accessed."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Introduction to Permaculture"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T18:18:08.113Z"
                  },
                  {
                    "@id": "urn:uuid:acbeb261-3fba-44fb-a414-369e2d49a1bc",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ccc8e233-616b-4ac9-b9f9-69d8ec6e26ed",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Find high resolution fotos of the artworks from Rijksmuseum under CC0."
                        }
                      ],
                      "image": "https://cdn.rijksmuseum.nl/v-0617319451984520097bd8ed4a9ec85e/WebStatic/Images/Logo/Rijksstudio.svg",
                      "name": [
                        {
                          "@language": "nl",
                          "@value": "Rijksstudio"
                        }
                      ]
                    },
                    "startTime": "2018-10-11T21:01:38.460Z"
                  },
                  {
                    "@id": "urn:uuid:33acc2b8-f084-4baf-9322-dd25aef89ec8",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Great resource, provides a solid overview of OE realted policy making on the state level. "
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5a533d20-680b-41b9-b21d-a7fc42830104",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open educational resources (OER) has increasingly become a go-to strategy for legislators seeking to make college education more affordable and effective. Nearly half of all U.S. states have considered OER legislation in past years, and the trend is likely to continue. Given the increasing activity at the state level, SPARC is expanding the support we provide to our members in this arena.\n\nThis page is updated weekly, and tracks the latest state-by-state policy activity relevant to the SPARC community, along with policies enacted in past years. SPARC’s state policy tracking is done in conjunction with Foresight Law + Policy, and a full dataset of legislation tracked since 2015 is published in GitHub. Note that page is for tracking purposes only and being listed does not imply endorsement. For information about SPARC’s policy positions, visit our Policy & Advocacy page. Check out our additional state policy resources below."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER State Policy Tracker"
                        }
                      ]
                    },
                    "startTime": "2018-12-01T10:24:50.406Z"
                  },
                  {
                    "@id": "urn:uuid:b80dbc22-2c3c-4c74-a0f1-b94aef7f8002",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c50abaf0-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open.Michigan is a University of Michigan initiative that enables faculty, students, and others to share their educational resources and research with the global learning community."
                        }
                      ],
                      "image": "https://open.umich.edu/sites/default/files/openmichiganlogo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OpenMichigan"
                        }
                      ]
                    },
                    "startTime": "2018-06-13T07:07:12.825Z"
                  },
                  {
                    "@id": "urn:uuid:440b23c2-5f10-4d6c-a261-9a1158b8e1e3",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0cdf2128-360d-11e5-980a-7bb55dcbead6",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The media portal supports educational professionals with a wide range of teaching and learning materials relating to science and technology. The portal offers more than 5,500 media in German, English, and Spanish. The free materials are designed for use in preschools, primary schools, and secondary schools."
                        },
                        {
                          "@language": "de",
                          "@value": "Das Medienportal unterstützt das Lehren und Lernen mit vielfältigen Materialien zu naturwissenschaftlich-technischen Themen. Es bietet über 5.500 Medien in Deutsch, Englisch und Spanisch. Das kostenfreie Angebot eignet sich für den Einsatz vom Kindergarten bis zum Schulabschluss.\r\n\r\nDie Siemens Stiftung hat beschlossen, die enthaltenen Lehr- und Lernressourcen unter einer offenen Lizenz (CC BY-SA) zu stellen. Zurzeit sind bereits mehr als 600 einzelne Ressourcen als OER verfügbar. \r\n\r\nAlle veröffentlichten Materialien unterlaufen einen standardisierten Qualitätssicherungsprozess und werden im Hinblick auf technische, inhaltliche und sprachliche Aspekte überprüft.\r\n"
                        }
                      ],
                      "image": "https://medienportal.siemens-stiftung.org/custom/img/header-logo.png",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Das Medienportal der Siemens Stiftung"
                        },
                        {
                          "@language": "en",
                          "@value": "The Siemens Stiftung Media Portal"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T15:26:25.173+02:00"
                  },
                  {
                    "@id": "urn:uuid:68354588-6812-4fef-aa13-364c033d3b19",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8d8beef8-bdd7-4e4a-bea1-199edfce992b",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:706a1dcc-77eb-11e5-9f9f-c48e8ff4ea31"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Lord Fairfax Community College (LFCC) received a Round 4, Trade Adjustment Assistance Community College and Career Training (TAACCCT) grant that is designed to help people put “Knowledge to Work.” As a key feature of this grant, LFCC created the KnowledgeToWork.com web portal for personalized learning tied to competencies using open educational resources (OER).\r\nKnowledgeToWork.com uses nationally-recognized competency frameworks mapped to instructional content. The portal focuses on career pathways in high-wage, high-growth industries: information technology (IT), including cybersecurity and network administration; health care, including health information management (HIM) and IT in healthcare; and manufacturing, including soft skills and supervision. KnowledgeToWork.com was designed to meet the needs of three audiences: learners, job seekers, and employers. For learners, it provides access to free and low-cost educational resources (including OER) for learning skills and competencies and offers personalized learning plans with customized dashboards to track progress. For job seekers, it enables them to explore career pathways with job search tools to find employers. For employers, it helps them manage the talent pipeline with competencies and to find and use training and professional development resources at lower cost."
                        }
                      ],
                      "image": "https://www.knowledgetowork.com/img/k2w-logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Knowledge to Work"
                        }
                      ]
                    },
                    "startTime": "2018-02-06T21:12:06.154+01:00"
                  },
                  {
                    "@id": "urn:uuid:1a44b1fc-3d37-490a-a93b-aea2c565a391",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e17dcbb9-1352-4003-a877-8e36004f5ad2",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Three documents have been developed in the framework of the 2nd World OER Congress. The two documents: Open Educational Resources: From Commitment to Action and the Open Educational Resources: Global Report 2017 provide the outcomes of the six regional consultations and global surveys conducted prior to the 2nd World OER Congress. The third document, Ljubljana OER Action Plan 2017, will be the outcome document of the 2nd World OER Congress and is based on the outputs of the regional consultations, a global online consultation of the document in the months leading up to the Congress and the deliberations of the 2nd World OER Congress. All three documents are complementary and provide a framework for both understanding the current status of OER worldwide and identifying concrete actions to mainstream OER to achieve SDG4."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Educational Resources: Global Report 2017"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T20:11:44.349Z"
                  },
                  {
                    "@id": "urn:uuid:cb8d463a-783b-4158-8c12-17ffcb9bb700",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:f67108bc-b723-493c-a0ca-18e3da69e0d0",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "CDE is teaming up with OEC and the French Ministry for Higher Education and Research to organize its annual Leadership Summit as the Open Education Leadership Summit 2018 on 3-4 December in Paris, hosted by Le Conservatoire des Arts et Métiers (CNAM).\n    \nThe Open Education Leadership Summit 2018 is organized by ICDE, the Open Education Consortium, OEC and the French Ministry of Higher Education and Research, MESR.\n     \nParticipants: Leaders on all levels of online learning and open education at higher education institutions, leaders from organizations, companies, and agencies engaged in advocating for and leading adoption of open, governmental senior officials and newcomers to Open, who are looking to lead.\n   \nTentative topics:\n\n- Setting the scene: How Open Education unveils in different regions of the world, leadership approaches.\n- The Open Education leadership challenges: Policy, Quality, Digitalization, Transformation and Sustaining educational offerings.\n- Open Education strategies for break through achievements, designing a roadmap.\n- How can collaboration increase impact from Open Education?\n- Leading Open Education - Best practice cases.\n- Open Education as a catalyst for innovation.\n- Students voice for open education.\n- I want to start up Open Education, what are the pathways and stepping stones.\n- The collaborative roadmap for achieving more.\n- Format: Highly interactive, panels, roundtables and workshop formats. A few, engaging plenaries. "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "FR",
                          "addressLocality": "Paris",
                          "addressRegion": "FR.VP"
                        },
                        "geo": {
                          "lat": 48.8566101,
                          "lon": 2.3514992
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Leadership Summit"
                        }
                      ]
                    },
                    "startTime": "2018-07-12T20:57:17.127Z"
                  },
                  {
                    "@id": "urn:uuid:b49e31eb-3d86-4afc-b75f-f2ad335fa570",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e5d7c77f-7416-4a13-8007-bd7d1b238836",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Kennisnet is the public organization for Education & ICT. We provide a national ICT-infrastructure, advise the sector councils and share our knowledge with the primary education, secondary education and vocational education and training. Together with the sector counsels we enable the educational sector to realize their ambitions with ICT.\r\n\r\nKennisnet is a public organization and is part of education and for education. "
                        }
                      ],
                      "image": "https://d21buns5ku92am.cloudfront.net/27552/images/88706-kennisnet-logo-original-1365623894.png",
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "Zoetermeer",
                          "addressRegion": "NL.ZH",
                          "postalCode": "2718NT",
                          "streetAddress": "32"
                        },
                        "geo": {
                          "lat": 52.0456774,
                          "lon": 4.4925766
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Kennisnet"
                        }
                      ]
                    },
                    "startTime": "2018-05-04T10:37:24.060Z"
                  },
                  {
                    "@id": "urn:uuid:1cf6eee9-fa3e-4bf8-b3a7-22a29b746412",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0ab0199a-b1db-4e74-84c7-3ad7e42c21af",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "# Who we are\n\nWe are the UK higher, further education and skills sectors’ not-for-profit organisation for digital services and solutions.\n\nWe are:\n\n *   Dedicated entirely to the sectors’ individual and collective needs\n *   Not a vendor: we deal with and/or work with vendors and publishers on the collective behalf\n *   Not for profit: every pound is used for the sectors’ benefit\n *   Objective, but not unbiased: we put the sectors’ interests above all else\n\n# What does Jisc do?\n\nWe champion the importance and potential of digital technologies for UK education and research; and do three main things:\n\n *  We operate shared digital infrastructure and services\n *  We negotiate sector-wide deals with IT vendors and commercial publishers\n *  We provide trusted advice and practical assistance for universities, colleges and learning providers\n\nOur research and development work is integrated across these three areas.\n\nWorking closely with colleagues and sector bodies our aim is to:\n\n*    Deliver considerable collective digital advantage, financial savings and efficiencies for UK universities, colleges and learning providers today\n*    Ensure these benefits are sustained and intelligently further enhanced"
                        }
                      ],
                      "image": "https://ux.jisc.ac.uk/ui/img/jisc-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "London",
                          "addressRegion": "GB.CN",
                          "postalCode": "WC2E7EN",
                          "streetAddress": "Brettenham House, 5 Lancaster Place"
                        },
                        "geo": {
                          "lat": 51.51039055,
                          "lon": -0.118864379082899
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Jisc"
                        }
                      ]
                    },
                    "startTime": "2018-06-05T09:58:09.808Z"
                  },
                  {
                    "@id": "urn:uuid:3e309a3a-3755-4e2e-859d-4718e6f5d59b",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-04-05T14:43:43.793+02:00"
                  },
                  {
                    "@id": "urn:uuid:101b857f-9b50-42f4-9f6b-721d463d54a2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:d6e33424-9234-46ba-9118-43db67e0f1ce",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:90e1068a-00d4-41d7-a8d4-0f9420fadb15",
                          "@type": "Organization",
                          "description": [
                            {
                              "@language": "en",
                              "@value": "The <i>tutory UG (haftungsbeschränkt)</i> is a startup based in Leipzig/Berlin, Germany which offers a free OER-editor called <i>tutory</i>."
                            }
                          ],
                          "image": "https://www.tutory.de/static/images/logo_full_right.png",
                          "location": {
                            "address": {
                              "addressCountry": "DE",
                              "addressLocality": "Leipzig",
                              "addressRegion": "DE.SN",
                              "postalCode": "4177",
                              "streetAddress": "Endersstraße 33"
                            },
                            "geo": {
                              "lat": 51.333553,
                              "lon": 12.328219
                            }
                          },
                          "name": [
                            {
                              "@language": "de",
                              "@value": "tutory UG (haftungsbeschränkt)"
                            }
                          ]
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "tutory is an online editor documents and is specifically designed for the needs of open educational resources (OER). It offers teachers a web application which allows them to create, individualize, organize and share learning materials within the shortest amount of time. \r\n</br></br>\r\n<b>tutory BETA marks the time between the first launch of the free version of the service until the start of paid programs<b>\r\n</br></br>"
                        },
                        {
                          "@language": "de",
                          "@value": "tutory ist ein Online-Editor für Dokumente, der speziell auf die Eigenschaften von offenen Lehr- und Lernmaterial (OER) zugeschnitten ist. Im Handumdrehen können Lehrende mit tutory gut aussehende Materialien erstellen, individualisieren, organisieren und anderen zur Verfügung stellen.\r\n</br></br>\r\n<b>tutory BETA beschreibt den Zeitraum zwischen dem Launch des kostenlosen Angebots von tutory bis zur Veröffentlichung eines kostenpflichtigen Jahresabonnements<b>\r\n</br></br>"
                        }
                      ],
                      "image": "https://www.tutory.de/static/images/logo_full_right_beta.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "tutory.de"
                        },
                        {
                          "@language": "de",
                          "@value": "tutory.de"
                        }
                      ],
                      "startTime": "2015-02-05"
                    },
                    "startTime": "2018-04-08T15:35:44.601+02:00"
                  },
                  {
                    "@id": "urn:uuid:ec830c58-d2e2-4cfc-ba43-7886ddb35f28",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:cc0b18cc-3b5d-11e5-b315-54ee7558c81f",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "OpenLearn gives free access to learning materials from The Open University. OpenLearn gives access to topical and interactive content, from expert blogs, to videos and games. This 'open media' often links to BBC television and radio programmes. Amongst others, there are over 800 free courses on OpenLearn. Content is mostly published under a CC-BY-NC-SA license."
                        }
                      ],
                      "image": "http://www.open.edu/openlearn/sites/all/themes/OpenLearn/static/images/main_logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OpenLearn"
                        }
                      ]
                    },
                    "startTime": "2018-04-06T11:20:04.101+02:00"
                  },
                  {
                    "@id": "urn:uuid:d539f127-ee44-49c5-a149-735a0a66cb7a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b9888bc3-9cf4-4c47-adc0-289d29bd73d9",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Das Portal Globales Lernen bündelt Informations- und Bildungsangebote zum Globalen Lernen und zur Bildung für nachhaltige Entwicklung (BNE). Zielgruppen sind Multiplikator/-innen in Schule, Jugend- und Gemeindearbeit, in der Lehreraus- und –fortbildung, staatliche und nichtstaatliche Akteure in Entwicklungspolitik und entwicklungspolitischer Bildungsarbeit sowie die entwicklungspolitisch interessierte Öffentlichkeit. In der Rubrik „Bildungsmaterialien“ werden ausgewählte Unterrichtseinheiten und –materialien zum kostenlosen Download bereitgestellt, die über eine kombinierte Themen-, Länder-, Zielgruppen-, Schulfach- und Autorensuche erschlossen werden können. OER-Materialien im Themenfeld Globales Lernen/BNE werden hier integriert und als solche gekennzeichnet. Ziel ist die Erstellung eines eigenen Repositoriums mit OER-Bildungsmaterialien zu Globalem Lernen und BNE."
                        },
                        {
                          "@language": "en",
                          "@value": "The portal Global Learning bundles information and educational offers on Global Learning and Education for Sustainable Development (ESD). Target groups are multipliers in schools, youth and community work, in teacher training and further education, governmental and non-governmental actors in development policy and development education, and the general public interested in development policy. Under the heading \"Educational Materials\", selected teaching units and materials are made available for free download, which can be accessed via a combined search for topics, countries, target groups, school subjects and authors. OER materials in the field of Global Learning/BNE are integrated here and marked as such. The aim is to create a separate repository with OER educational materials on Global Learning and ESD.\n\nTranslated with www.DeepL.com/Translator"
                        }
                      ],
                      "image": "https://www.globaleslernen.de/sites/default/files/logo-globales-lernen.png",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Portal Globales Lernen"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T14:40:04.490Z"
                  },
                  {
                    "@id": "urn:uuid:ee065d9d-9144-4881-ab9d-26015ce9b19c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0115570c-3c81-11e5-ad4b-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The International Council for Open and Distance Education, or ICDE, is a global membership organisation in the field of open and distance education, and in formal consultative relations with UNESCO. It was founded in 1938 in Canada as the International Council for Correspondence Education. ICDE conducts world conferences on open and distance education on alternate years. Regional conferences are held more frequently."
                        }
                      ],
                      "image": "http://www.icde.org/assets/site/icdelogo322x130.png",
                      "location": {
                        "address": {
                          "addressCountry": "NO",
                          "addressLocality": "Oslo",
                          "addressRegion": "NO.OS",
                          "postalCode": "283",
                          "streetAddress": "Lilleakerveien 23"
                        },
                        "geo": {
                          "lat": 59.91894,
                          "lon": 10.63664
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "International Council for Open and Distance Education"
                        }
                      ]
                    },
                    "startTime": "2018-06-28T12:59:14.113Z"
                  },
                  {
                    "@id": "urn:uuid:b38f78b1-c13e-408a-9578-2ce1dc9f2729",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-04-10T22:24:12.471+02:00"
                  },
                  {
                    "@id": "urn:uuid:dbecc868-3e3b-4df5-a211-bd1855e7f5c8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8afb5809-57f6-4dcd-bcfb-f4b58e1747ae",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Bei dieser Plattform handelt es sich um eine Suchmaschine für Unterrichtsmaterialien zum Unterrichtsfach Informatik. Zielsetzung dieser Plattform ist Unterstützung der Lehrkräfte bei der Suche nach Unterrichtsmaterialien und die Verwirklichung einer zentralen Anlaufstelle zur Beschaffung von kompetenzorientierten Materialien für den Informatikunterricht.\n\nDie Entwicklung selbst ist jedoch noch nicht abgeschlossen. Das bisherige Ergebnis zeigt lediglich einen ersten Zwischenstand bis zum gewünschten Endprodukt."
                        }
                      ],
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Materialsucher"
                        }
                      ]
                    },
                    "startTime": "2018-10-11T20:51:16.524Z"
                  },
                  {
                    "@id": "urn:uuid:0bf2e909-92ef-4ac1-b518-70288e92511d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:fec93b81-7fba-4017-a92d-46f4dff06482",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The purpose of this policy is to provide direction in the use of open educational resources (hereinafter referred to as OER) to increase access to and support quality learning and teaching in Fiji’s education and training system. In doing so, the policy seeks to strengthen commitment to OER by all concerned including the Government."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "FJ"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Fiji: OER National Policy"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T21:27:16.728Z"
                  },
                  {
                    "@id": "urn:uuid:a2337298-6bd3-4f7c-8fd6-985ccc6f1c22",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4a7c8b54-9b7b-4f1c-8620-bae6f3e8a50d",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>ILIAS provides services on multiple level such as a system for web-based teaching and learning. </p>\r\n<p>Furthermore ILIAS is a multi-purpose tool that can be used as a flexible course room, as an authoring tool, but also as a communication and collaboration platform. ILIAS is open source software published under the General Public Licence and free of charge for every institution and organisation.</p>"
                        },
                        {
                          "@language": "de",
                          "@value": "Der Verein ILIAS open source e-Learning e.V. sichert die Nachhaltigkeit der ILIAS LMS-Software. Zu seinen Aufgaben gehören:\r\n\r\n* Strategische Entwicklung von ILIAS\r\n* Koordination der Softwareentwicklung\r\n* Prozessgestaltung, Qualitätskontrolle\r\n* Community-Events wie Development Conference\r\n* Außendarstellung der Software\r\n* Releasemanagement, Bugtracking\r\n* Koordination der Dokumentation\r\n"
                        }
                      ],
                      "image": "https://www.ilias.de/docu/data/docu/mobs/mm_26879/Logo-ILIAS_240.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Köln",
                          "addressRegion": "DE.NW",
                          "postalCode": "50668",
                          "streetAddress": "Ebertplatz 14-16"
                        },
                        "geo": {
                          "lat": 50.950018,
                          "lon": 6.958191
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "ILIAS open source e-Learning e.V."
                        }
                      ]
                    },
                    "startTime": "2018-06-19T10:33:40.431Z"
                  },
                  {
                    "@id": "urn:uuid:5d1032b6-58a4-438e-abd6-c4544fa5c335",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b0f23c69-8bf9-4d0c-a284-9168744e8bf4",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Created on March 15, 2001 (World Consumer Day), the Akatu Institute is a non-profit non-governmental organization that works to raise awareness and mobilize society for conscious consumption.\n\nThe activities are focused on changing consumer behavior and are carried out from two fronts of action: Education and Communication, with the development of campaigns, content and methodologies, research and events.\n\nAkatu also works together with companies that seek paths to the new economy, helping to identify opportunities that lead to new models of production and consumption, that respect the environment and well-being, without neglecting prosperity.\n\nTranslated with www.DeepL.com/Translator"
                        },
                        {
                          "@language": "pt",
                          "@value": "Criado em 15 de março de 2001 (Dia Mundial do Consumidor), o Instituto Akatu é uma organização não governamental sem fins lucrativos que trabalha pela conscientização e mobilização da sociedade para o consumo consciente.\n\nAs atividades estão focadas na mudança de comportamento do consumidor e são realizadas a partir de duas frentes de atuação: Educação e Comunicação, com o desenvolvimento de campanhas, conteúdos e metodologias, pesquisas e eventos.\n\nO Akatu também atua junto a empresas que buscam caminhos para a nova economia, ajudando a identificar oportunidades que levem a novos modelos de produção e consumo, que respeitem o ambiente e o bem-estar, sem deixar de lado a prosperidade."
                        }
                      ],
                      "image": "https://www.akatu.org.br/wp-content/themes/akatu/img/logo1.svg",
                      "location": {
                        "address": {
                          "addressCountry": "BR",
                          "addressLocality": "São Paulo",
                          "addressRegion": "BR.SP",
                          "postalCode": "01407-200",
                          "streetAddress": "Avenida Nove de Julho, 5593"
                        },
                        "geo": {
                          "lat": -23.580651180215128,
                          "lon": -46.678677558702724
                        }
                      },
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Instituto Akatu"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T14:31:22.121Z"
                  },
                  {
                    "@id": "urn:uuid:efbce7fa-5737-43c8-b99f-9789a2b70eed",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b2353040-0bfa-4e81-a2d0-c536acad2b38",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:2d10acf8-4c43-48ec-8b69-a599db4f8bc5"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Der Lizenz Shortener erzeugt rechtssichere und kurze Lizenzhinweise. Das lizenzierte Werk wird mit einem Kurzlink zu einer Webseite versehen, wo alle erforderlichen Informationen strukturiert dargestellt werden. Das Angebot befindet sich in der Entwicklung und wird kostenfrei verfügbar sein."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Lizenz Shortener"
                        }
                      ]
                    },
                    "startTime": "2018-04-30T09:59:45.602Z"
                  },
                  {
                    "@id": "urn:uuid:1c2e6c53-6820-41e1-b825-1a783829bf84",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ab51d517-5614-4ba7-813f-37b89f2f15fd",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Because TWB was created for teachers, by teachers, its website contains an array of content geared towards multiple backgrounds and cultures. We ascribe to the power and impact of Open Educational Resources – free, high-quality content available for remix, reuse, and translation, provided the user attributes the source to its author. Numerous TWB volunteers are currently working to translate already posted curriculum into different languages to allow for wider access to curricula."
                        }
                      ],
                      "image": "https://teacherswithoutborders.org/wp-content/uploads/2013/08/TWB_Logo_Blue_SQUARE2.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Teachers Without Borders"
                        }
                      ]
                    },
                    "startTime": "2019-02-03T10:21:21.026Z"
                  },
                  {
                    "@id": "urn:uuid:8b4b6228-1c12-466a-9915-bdca0f05c6a1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5cef5b5f-1a06-4398-9c2c-0b5d2e1c7b3e",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This study provides the first-ever EU-wide overview of the state of play with policies on open education involving all the 28 Member States. For each Member State, a full account of their understanding of open education and strategic policy approach is given. "
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Policy Approaches to Open Education - Case Studies from 28 EU Member States (OpenEdu Policies)"
                        }
                      ]
                    },
                    "startTime": "2018-11-27T19:31:06.569Z"
                  },
                  {
                    "@id": "urn:uuid:3da47231-d72e-49ce-91d7-c9f35f3d3110",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7069807e-77eb-11e5-9f9f-c48e8ff4ea31",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Peer 2 Peer University is a grassroots open education project that organizes learning outside of institutional walls and gives learners recognition for their achievements. P2PU creates a model for lifelong learning alongside traditional formal higher education. Leveraging the internet and educational materials openly available online, P2PU enables high-quality low-cost education opportunities. P2PU - learning for everyone, by everyone about almost anything."
                        }
                      ],
                      "image": "https://www.p2pu.org/assets/images/p2pu-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Kalifornien",
                          "addressRegion": "US.CA"
                        },
                        "geo": {
                          "lat": 36.7014631,
                          "lon": -118.7559974
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Peer 2 Peer University "
                        }
                      ]
                    },
                    "startTime": "2018-03-19T12:09:31.32+01:00"
                  },
                  {
                    "@id": "urn:uuid:36385249-c618-4917-a47d-4a2ecb3bde56",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Even without being an expert on TAACCCT it has to be stated that the programme was perceived world wide for spending $ 2 Billion for the production of OER. As far as I know actual spendings on OER where much less. The produced OER are collected on Skillscommons."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:48d81e50-a9dd-411c-a343-13cee33d668c",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "To ensure that the Federal investment of these funds has as broad an impact as possible and to encourage innovation in the development of new learning materials, as a condition of the receipt of a TAACCCT grant, the grantee will be required to license to the public all work (except for computer software source code, discussed below) created with the support of the grant under a Creative Commons Attribution 4.0 (CC BY) license. Work that must be licensed under the CC BY includes both new content created with the grant funds and modifications made to pre-existing, grantee-owned content using grant funds.\n\nBroad additional information on the TAACCCT programme can be found here: http://www.doleta.gov/taaccct/"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "US"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Trade Adjustment Assistance Community College and Career Training (TAACCCT) grant program"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T19:10:18.889Z"
                  },
                  {
                    "@id": "urn:uuid:98eebdea-b660-4dda-88c1-9f32f8dc995e",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Wikiwijs is one of the very few examples of a mature modular state infrastructure for OER which includes the development, metadata creation, harvesting and discovery of material created in the Netherlands."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c71b92e2-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Wikiwijs is a public platform use to create (web based) OER materials. It also offers a search engine and all materials are downloadable in open standards in order to be integrated in other educational platforms within the Netherlands. It is provided for by Kennisnet.\r\n\r\nIts main area is now Primary, Secondary and Vocational Institutions but is also used by Universities (of Applied Science)"
                        }
                      ],
                      "image": "https://www.kennisnet.nl/fileadmin/kennisnet/_processed_/a/a/csm_wikiwijs_ba09c74ad8.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Wikiwijs"
                        }
                      ]
                    },
                    "startTime": "2019-01-25T11:17:21.809Z"
                  },
                  {
                    "@id": "urn:uuid:93f84642-85a9-4ec9-b86c-7d88b793be69",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:17865934-0eeb-43c3-89f1-dc1ec5ddc4b3",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:cfef010f-eac8-46a1-8dbe-3e2e62943b6e"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "##Mission Statement\r\n\r\nThe overarching goal of OpenMed is to raise awareness and facilitate the adoption of Open Educational Resources (OER) and Open Educational Practices (OEP) in the Arab Mediterranean countries, with a particular focus on higher education in Egypt, Jordan, Morocco and Palestine.\r\n\r\nOpenMed fosters the role of universities as knowledge providers not only to their on-campus students but also beyond the walls of institutions, especially towards disadvantaged groups (e.g. low income peoples, disabled students, people living in rural areas, learners at risk of low achievement, refugees).\r\n\r\nOpenMed is an international cooperation project co-funded by the Erasmus+ Capacity Building in Higher Education programme of the European Union during the period 15 October 2015 – 14 October 2018."
                        }
                      ],
                      "image": "http://openmedproject.eu/wp-content/uploads/2016/01/logoOpnMed.jpg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OpenMed - Opening up Education in South-Mediterranean countries"
                        }
                      ],
                      "startTime": "2015-10-15"
                    },
                    "startTime": "2019-04-09T18:29:29.346Z"
                  },
                  {
                    "@id": "urn:uuid:4dc4b7e2-72ad-4ecf-9213-190e3dd07df1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:96f21350-18ad-4139-a7ee-644385254069",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Salzburg Research ist ein unabhängiges Forschungsinstitut mit dem Schwerpunkt Informationstechnologien (IT).  Die Forschungsgesellschaft versteht sich als visionärer Ideengeber, verbindender Netzwerker und professioneller Forschungspartner. Die Forschungslinien beraten in technischen IT- und Innovationsthemen und gestalten in nationalen und internationalen Forschungsprogrammen sowie im Auftrag der Industrie."
                        },
                        {
                          "@language": "en",
                          "@value": "Salzburg Research is an independent, innovation-driven research & technology organisation (RTO) in the area of information technologies (IT). The institute sees itself as a visionary thinktank, connecting networker and professional research partner.The different research groups provide consulting in technical IT and innovation issues and conduct research in national and international research programmes and on behalf of the industry."
                        }
                      ],
                      "image": "http://www.salzburgresearch.at/wp-content/themes/salzburgresearch/images/salzburgresearch.png",
                      "location": {
                        "address": {
                          "addressCountry": "AT",
                          "addressLocality": "Salzburg",
                          "addressRegion": "AT.SZ",
                          "postalCode": "5020",
                          "streetAddress": "Jakob Haringer Straße 5/3"
                        },
                        "geo": {
                          "lat": 47.822679,
                          "lon": 13.040952
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Salzburg Research Forschungsgesellschaft mbH"
                        },
                        {
                          "@language": "de",
                          "@value": "Salzburg Research Forschungsgesellschaft mbH"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:30:29.796Z"
                  },
                  {
                    "@id": "urn:uuid:18503d8f-5d87-44c5-ab5c-6b1e20e02f9a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:51a5437c-1a08-4a58-b996-0ca32849c7f3",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "HU - OCW is a website that publishes lectures at Hokkaido University as OERs. We provide information related to lectures, such as lectures of Hokkaido University and video materials and lecture materials of public lectures. You can browse contents suitable for your purpose by using the keyword search and the list by academic areas. Please use this website as self-study, teaching materials at school and university."
                        }
                      ],
                      "image": "https://ocw.hokudai.ac.jp/commons/images/logo_large_4x.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Hokkaido University OpenCourseWare"
                        }
                      ]
                    },
                    "startTime": "2018-06-11T13:08:59.871Z"
                  },
                  {
                    "@id": "urn:uuid:7d6e13e7-71d7-457a-b388-ef8144131ee5",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:727611de-49cc-4685-a644-b0e001b75685",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:2e368265-6980-46ec-af81-57122b6e8258"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": " The Global Digital Library (GDL) is being developed to increase the availability of high quality mother tongue learning resources worldwide.\r\n\r\nThe GDL-project is currently in an initial stage; establishing the implementation plan and steering structure and piloting the technical platform. \r\n The Global Digital Library will expand access to mother tongue (MT) content by providing openly licensed, downloadable materials that allow sharing, electronic use and large scale printing, as well as linking to other sources for those materials.\r\n\r\nThe initial focus will be on learning resources that can support children’s literacy learning. Other learning resources will be included at a later stage. \r\nThe GDL platform will hold digital copies of Creative Commons or otherwise openly licensed, publicly accessible materials in print-ready formats. The primary licenses for the GDL will be CC BY and CC BY-SA. These licenses drive innovation and creativity, including commercial reuse. They also support the overall goal of sharing, translation and re-contextualization of early grade reading educational materials, open textbooks and other open educational resources.\r\nTarget audience\r\n\r\nThe target audiences for the GDL include ministries of education, school managers, teachers, donor agencies and their implementing partners, international and national non-governmental organizations, local publishers and households in developing countries. The platform will be open for all users, including end users with access to mobile devices and internet. The GDL’s initial purpose is to support access to early-grade reading materials in children’s mother tongues. Other types of learning resources are expected to be included at a later stage. "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "NO"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Global Digital Library"
                        }
                      ]
                    },
                    "startTime": "2018-02-08T13:45:37.323+01:00"
                  },
                  {
                    "@id": "urn:uuid:b1ed3ed0-e4f5-4377-bcfd-99ea2da34c2d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:f181695e-6025-4060-ae15-26530489b92f",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Die vorliegende Grafik beschreibt eine exemplarische Auswahl von Handlungsmöglichkeiten für die im Regenbogen-Spektrum bezeichneten Anwendungsfelder anhand des Paradigmas offener Bildungspraktiken.\r\n\r\nAusgehend von der Vorbereitung einer Unterrichtseinheit (Seminar, Schulstunde) mit entsprechend offenem Material (bspw. OER) (hellrot) über das Teilen mit (orange) und die kollaborative Nutzung im Lehr-Lernkontext (bspw. in einer Seminar- oder Arbeitsgruppe) (gelb) bis hin zur gemeinsamen Überarbeitung und Optimierung anhand der im Lehr-Lern-Einsatz gewonnenen Erfahrungen / Feedback (grün) sowie der Auffindbarmachung im größeren Kontext des offenen WWW (blau) werden hier Möglichkeiten (Text rechts) mit diesen Möglichkeiten entsprechende offene Tools (idealerweise Open Source) (Icons unterhalb des Regenbogens) in Verbindung gesetzt.\r\n\r\nZu betonen ist die Möglichkeit der iterativen Prozessoptimierung, so dass nicht ein Schritt linear auf den nächsten folgen muss bis hin zur Fertigstellung eines finalen Produkts, sondern stetige Rück- und Querbeziehungen möglich sind (in der Grafik durch fluide Farbübergänge impliziert).\r\n\r\n***\r\n\r\nDie Grafik wird in verschiedenen Formaten (ai, psd, png, jpg, eps, svg) bereitgestellt. Zur Weiterentwicklung / Remix wird herzlich eingeladen.\r\n\r\n***\r\n\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Offene Bildungspraxis: mögliche Szenarien'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Offene Bildungspraxis: mögliche Szenarien"
                        }
                      ]
                    },
                    "startTime": "2018-02-28T23:43:47.285+01:00"
                  },
                  {
                    "@id": "urn:uuid:fd734e72-e189-4f94-bebd-cd59542b5ee4",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:cac631ca-7068-41b5-b0b8-c28d8ec4a327",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "KU has so far ‘unlatched’ two collections of over 100 front list HSS titles, supported by 380 libraries and consortia around the world. The first collection so far has an average of 2,400 downloads per title in 180 countries, which is vastly more than the couple of hundred copies sold of similar monographs that remain closed. These books can be viewed [here](http://www.knowledgeunlatched.org/the-books/).\r\n\r\nKnowledge Unlatched is an opportunity for libraries to ensure that monograph spending secures the widest possible access to scholarly books. It also offers libraries cost saving opportunities that will increase as the project scales."
                        }
                      ],
                      "image": "http://www.knowledgeunlatched.org/wp-content/themes/agility/images/logos/knowledge-unlatched-logo@2x.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "London",
                          "addressRegion": "GB.CN",
                          "postalCode": "EC4R 1BE",
                          "streetAddress": "10 Queen Street Place"
                        },
                        "geo": {
                          "lat": 51.51022,
                          "lon": -0.092705
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Knowledge Unlatched"
                        }
                      ]
                    },
                    "startTime": "2018-09-09T20:46:32.673Z"
                  },
                  {
                    "@id": "urn:uuid:f4e284f9-5576-45bc-8c00-2ae5a9863def",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5b1ee95e-6050-4168-8d56-6ea6de74a8c4",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Ein Podcast zur Fragen der Erziehungswissenschaft und Bildungsphilosophie von Dr. Tim Schmidt (Universität zu Köln). In dem Podcast spreche ich mit Studierenden und Lehrenden aus Köln über ihre Projekte. "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Transformatorische Bildung"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T21:11:05.275Z"
                  },
                  {
                    "@id": "urn:uuid:6c5e49a4-aa0b-493e-ae57-f863638d789d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:25e7d97b-5137-4d63-800d-aab697e1981d",
                      "@type": "Article",
                      "dateCreated": "2017-08-16",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "On July 6th 2017, once the declaration was ready, it was published in French and English as the **[Déclaration du Maroc sur les Ressources Educatives Libres – OER Morocco Declaration](https://www.change.org/p/universit%C3%A9s-d%C3%A9claration-du-maroc-sur-les-ressources-educatives-libres-oer-morocco-declaration?source_location=minibar)** as a petition, towards requesting international endorsement from the Open Education global community before being presented to the Moroccan Educational authorities at governmental level, and other dignitaries such as rectors and deans. The declaration aims at supporting, enhancing, and developing Open Education in the country, and so far, less than a week after being launched, it has gathered over 85 signatures out of the initial 100 requested."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "MA",
                          "addressLocality": "Marrakesh",
                          "addressRegion": "MA.MK",
                          "postalCode": "40000",
                          "streetAddress": "Cadi Ayyad University (Faculté des Sciences)"
                        },
                        "geo": {
                          "lat": 31.64902,
                          "lon": -8.01542
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Morocco Declaration"
                        }
                      ]
                    },
                    "startTime": "2019-03-22T07:16:06.990Z"
                  },
                  {
                    "@id": "urn:uuid:b3e95df8-6aec-4e0a-b875-4dbb987b9101",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e536b1e8-8d7b-4048-8c0f-061e41228842",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "It was on October 16, 2012 at the annual OpenEd conference in Vancouver that then British Columbia Minister of Advanced Education, John Yap, announced the creation of the B.C. Open Textbook Project.  The goal of the project was to make higher education more accessible by reducing student cost through the use of openly licensed textbooks. BCcampus was tasked with co-ordination of the project because of our 10-year experience funding open educational resources (OER) through the Online Program Development Fund.\r\nSpecifically, the project was asked to create a collection of open textbooks aligned with the top 40 highest-enrolled subject areas in the province. A second phase was announced in the spring of 2014 in which an additional 20 textbooks targeting trades, technology, and skills training would be developed."
                        }
                      ],
                      "image": "https://open.bccampus.ca/files/2013/11/opened-logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "BC Campus OpenEd"
                        }
                      ]
                    },
                    "startTime": "2018-06-04T22:02:54.292Z"
                  },
                  {
                    "@id": "urn:uuid:5107e8e5-2455-42a9-9a0e-99c945c1b8a1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7fa615c7-c8ea-4379-bbfb-f2f5411ae6d2",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Our vision: Empower everyone to create, share and reuse interactive content\r\n\r\nWe are going to change how people think of rich interactive content. We will make it easy for everyone to create and share interactive content with a great user experience for both the content creators and the content consumers.\r\n\r\nAn exponentially growing number of websites in the world use our technology H5P to provide their users with great content. Joubel provides the website owners and content creators with tools and services to help them create and distribute state of the art H5P content.\r\n\r\nJoubel has customers all over the world and some of the most high profile investors in the region. We're very well set up to continue our fast growth.\r\n\r\nJoubel was established in Norway in 2013 and is working hard every day to create richer Internet experiences with H5P."
                        }
                      ],
                      "image": "https://joubel.com/img/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "NO",
                          "addressLocality": "Tromsø",
                          "postalCode": "9008",
                          "streetAddress": "Storgata 5"
                        },
                        "geo": {
                          "lat": 69.645398,
                          "lon": 18.950174
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Joubel"
                        }
                      ]
                    },
                    "startTime": "2018-04-27T12:27:02.730Z"
                  },
                  {
                    "@id": "urn:uuid:e0e548c0-292c-4c97-b18e-c191f2fe6ee7",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:1d4ea437-e376-45a3-a3c0-03ba20fbcadd",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Der gemeinnützige Verein wirkt als Impulsgeber zur stetigen Qualitätsverbesserung der medienbasierten Lehre an niedersächsischen Hochschulen und befördert durch seine Unterstützungsmaßnahmen die Kooperation der Mitgliedshochschulen und weiterer Mitglieder im Bereich standortübergreifender und E-Learning-gestützter Lehre.\r\n\r\nZur Unterstützung der Mitglieder wurden verschiedene Kompetenzbereiche aufgebaut, die sich jeweils mit folgenden Themen beschäftigen:\r\n\r\n- Software für Lehre, Studium und deren Management\r\n- Rechtsfragen des E-Learning\r\n- Audiovisuelle Medien und Medientechnik\r\n- E-Assessment\r\n- Mediendidaktik\r\n\r\nDer Verein fördert die Zusammenarbeit seiner Mitglieder bei E-Learning-gestützten sowie standortübergreifenden Lehrveranstaltungen und gibt Impulse zur stetigen Verbesserung der Qualität von Hochschullehre durch Einsatz neuer Medien.\r\n\r\nDer ELAN e.V. setzt sich aktuell aus 11 Mitgliedshochschulen mit über 117.000 Studierenden zusammen. In zahlreichen Projekten und mit unterschiedlichen Kooperationspartnern agiert er auch über die niedersächsische Landesgrenze hinaus.\r\n"
                        }
                      ],
                      "image": "https://buendnis-freie-bildung.de/wp-content/uploads/2018/06/elan-ev.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Oldenburg",
                          "addressRegion": "DE.NI",
                          "postalCode": "26123",
                          "streetAddress": "Karlstr. 23"
                        },
                        "geo": {
                          "lat": 53.146293690706585,
                          "lon": 8.221132662131522
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "ELAN e.V. – E-Learning Academic Network"
                        }
                      ]
                    },
                    "startTime": "2019-03-26T06:56:55.297Z"
                  },
                  {
                    "@id": "urn:uuid:9e70533f-287f-4df4-be2f-6e03999ed38c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:2dc0b8a7-f464-47ba-b285-a0fc26cd1ecd",
                      "@type": "Product",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "ILIAS is an open source Learning Management System (LMS) developed sind 1998.\n\n * ILIAS is versatile: Course management, learning modules, test & assessment, portfolios, surveys, wikis and blogs are all built into the core, making ILIAS a \"one-stop solution\" for your e-learning needs..\n * ILIAS is open source: No licensing fees, ever. Any special requirements can be implemented by our service providers. A voluntary membership to the ILIAS Society is inexpensive and grants you direct influence on the long-term development process.\n * ILIAS is yours: Change its look, implement your preferred learning scenarios, integrate it with your website or intranet, activate only the modules you need, give each user the exact access and permissions you specify.\n * ILIAS is standard-compliant: SCORM 1.2 and SCORM 2004 learning modules. LOM metadata. IMS QTI Test&Assessment. XML, CSV and Excel exports. IMS LTI to embed external applications. Once installed, the complete ILIAS suite runs directly in your browser: No further software is needed for either learners, tutors or content creators.\n * ILIAS is trusted: In development since 1998, it is now supported by 11 premium partners and more than 40 institutional ILIAS Society members. It has thousands of active installations, and is being used by millions of users worldwide.\n * ILIAS is the Learning Management System that can cope with anything you throw at it: 100 or 100.000 users. Desktop or mobile. Use it as a simple course player, a complex authoring tool, a full-fledged collaboration platform - or all of these combined!"
                        }
                      ],
                      "image": "https://www.ilias.de/docu/Customizing/global/skin/ios/images/HeaderIcon.svg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "ILIAS"
                        }
                      ]
                    },
                    "startTime": "2018-06-19T10:33:05.656Z"
                  },
                  {
                    "@id": "urn:uuid:23c52adf-108c-4002-ba39-5381f6a9bd72",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0a7536ac-3b85-11e5-be26-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Creative Commons (CC) is a global non-profit organization at the center of a high-profile, international movement to promote sharing of creativity and knowledge. Its goal is to help realize the full potential of the Internet—universal access to research and education, full participation in culture—to drive a new era of development growth, and productivity. CC provides the well-known suite of licenses that have become the global standard used by leading companies, institutions and individuals across culture, education, government, science, and more to promote digital collaboration and innovation. \r\nThe CC licenses are everywhere—1.1 billion+ CC licenses in use across 9 million websites—making it easy for anyone to use and re-use content. For example, CC licenses help the world gain access to NASA’s most iconic images from space, help educators create curriculum that will bring down the cost of college for everyone, and allow scientists to freely share their work with medical professionals around the world. CC also works with foundations and governments to ensure that when they fund new content, like research and educational materials, those materials are made available for us to freely use, share, and improve."
                        }
                      ],
                      "image": "http://mirrors.creativecommons.org/presskit/logos/cc.logo.large.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressRegion": "US.CA"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Creative Commons"
                        }
                      ]
                    },
                    "startTime": "2018-06-05T10:02:52.287Z"
                  },
                  {
                    "@id": "urn:uuid:7d62f513-0a69-4dcd-8f23-ae9a95ff0e17",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:30f0f8fc-2535-46b2-acaa-7f0fb61c5074",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Metadaten stellen für offene Bildungsmaterialien einen essenziellen Bestandteil dar, erfahren bei der Produktion von OER aber leider immer noch nicht genügend Beachtung. Der vorliegende Beitrag hat sich daher zum Ziel gesetzt, eine historisch-diachrone Perspektive auf die Entwicklung von Metadaten im Allgemeinen und insbesondere auf den OER-Kontext zur thematischen Rahmung und Kontextualisierung beizutragen. Darauffolgend werden aktuelle Hauptstandards vorgestellt sowie zukünftige Herausforderungen und Potentiale von OER-Metadaten im größeren Kontext der Openness herausgearbeitet."
                        }
                      ],
                      "name": [
                        {
                          "@language": "de",
                          "@value": "\"Metadaten und OER : Geschichte einer Beziehung\" in Fachmagazin Synergie #04: Schwerpunkt: OER und Metadaten"
                        }
                      ]
                    },
                    "startTime": "2017-12-11T20:54:47.804+01:00"
                  },
                  {
                    "@id": "urn:uuid:a6b9ba98-6d90-4b78-a254-df908b931dd0",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e513f61a-341d-46b7-a26f-3fd1bb3fb887",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The SPARC Libraries & OER Forum (LibOER) is a vibrant community of practice for academic and research librarians interested in open education. Established in 2013, this network connects more than 800 subscribers primarily in the U.S. and Canada through a public email discussion list and a monthly community call. The goals of this forum are:\n\n* Enable librarians (and others connected to the library community) to share ideas, resources and best practices pertaining to OER and open educational practices.\n* Support coordination on librarian-focused events and educational programming about OER.\n* Disseminate important updates about policy, research, projects and other news from the broader OER movement.\nIt provides a mailing list as well as monthy community calls."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "SPARC Libraries & OER Forum"
                        }
                      ]
                    },
                    "startTime": "2018-06-04T16:49:52.377Z"
                  },
                  {
                    "@id": "urn:uuid:0be4a93f-205b-48a1-9158-b096f5523191",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:30c3b5c7-e867-458e-8ad1-a1b5376125d6",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open educational resources (OER) have gained popularity and demonstrated their early potential to improve student outcomes through rigorously developed, customizable materials at low cost. As a result, it has become increasingly important to consider the long-term viability of the ecosystem of content and organizations, institutions, and people who create, share, and use OER.\n\nThe following report is based on stakeholder interviews and a literature review of OER and other open-driven industries. It presents a definition of sustainability for the OER ecosystem and a series of challenges and potential solutions to realizing a sustainable ecosystem. While the report considers international contexts, examples are largely focused on the US context of K-12 and higher education procurement practices and Common Core standards alignment."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "US"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Seeking a Sustainable OER Ecosystem"
                        }
                      ]
                    },
                    "startTime": "2019-02-21T07:11:29.022Z"
                  },
                  {
                    "@id": "urn:uuid:a2e2c1d8-e269-4fe2-b9e6-da7bcf16e31f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:11b10e73-b8de-4412-9a30-be128852e37b",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Knowledge 4 All Foundation Ltd (K4A) is a distributed institute based in London (UK), with two main streams of activities, on one side pioneering Machine Learning methods of pattern analysis, statistical modeling, and computational learning and on the other transform these into technologies for large scale applications in Open Education. It is therefore an advocate of Artificial Intelligence and Big data in Open Education."
                        }
                      ],
                      "image": "https://www.k4all.org/wp-content/themes/k4all-child/img/logo@2x.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "Reigate and Banstead",
                          "addressRegion": "GB.SR",
                          "postalCode": "RH1 1DL",
                          "streetAddress": "Station Road 57-65"
                        },
                        "geo": {
                          "lat": 51.2406351,
                          "lon": -0.1704663
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Knowledge 4 All Foundation"
                        }
                      ]
                    },
                    "startTime": "2019-03-03T15:30:44.677Z"
                  },
                  {
                    "@id": "urn:uuid:c025c4c7-b998-435b-b4ff-e96271e98088",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:a6bf875b-9bb0-46cf-b9c0-1868ecb31a9a",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open educational resources for Primary and Secondary education created with the exelearning.net tool and based on the Project Based Learning focusing.\r\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "ES",
                          "addressLocality": "Mérida",
                          "addressRegion": "ES.EX",
                          "postalCode": "6800",
                          "streetAddress": "Lope de Vega, 21"
                        },
                        "geo": {
                          "lat": 38.913603,
                          "lon": -6.342739
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "CEDEC Repository"
                        }
                      ]
                    },
                    "startTime": "2018-03-30T09:30:32.3+02:00"
                  },
                  {
                    "@id": "urn:uuid:325175c2-e1a6-4c11-9f8e-6359a956700e",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:164a5d61-8d20-401f-a157-7132b60f22ff",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Das OER Librarian Network Germany ist  eine Graswurzelbewegung, die aus einer Barcamp-Session des OER-Festivals 2017 in Berlin hervorgegangen ist. Ziel der Initiative ist es, Bibliothekarinnen und Bibliothekare, die sich für OER interessieren oder bereits mit OER arbeiten, zu vernetzen um Informationen und Erfahrungen auszutauschen und gemeinsame Antworten auf Fragen zu finden, die sich in der Schnittmenge von Open Education und Bibliothek ergeben. Alle interessierten Bibliothekarinnen und Bibliothekare sind herzlich eingeladen an der Initiative teilzunehmen. Als Kommunikationsplattform ist ein Moodle-Kurs eingerichtet worden, nähere Informationen zur Registrierung dort finden sich im unten stehenden Kommentar. "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "streetAddress": "Atelierhaus Pfefferberg"
                        },
                        "geo": {
                          "lat": 52.532209,
                          "lon": 13.41024
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Librarian Network: Chapter Germany"
                        }
                      ]
                    },
                    "startTime": "2017-11-30T13:16:17.688+01:00"
                  },
                  {
                    "@id": "urn:uuid:17dc2f15-a7ce-44b4-9582-856dfc3603c5",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0db31313-e226-44d6-8ea3-a94f00c2a1ab",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This is an open resource and course, with no registration. It runs parallel to a F2F university module at the University of Chichester, UK, every year from September-December. The aims are to allow people to consider the component aspects of a music curriculum, the concepts involved in teaching and curriculum, and to build their own resources through interactive tasks that also encourage reaching out into the wider community to create wider learning and teaching networks."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "MUS654 Open course on Creating a Music Curriculum"
                        }
                      ]
                    },
                    "startTime": "2018-11-28T10:23:25.632Z"
                  },
                  {
                    "@id": "urn:uuid:230cc420-7712-46f2-b02d-0f035fd9c175",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ee73232f-855f-4784-bf40-bf5d01a5a426",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The alliance for free education is an association of organizations, that are willing to promote the idea of open educational resources in society and politics. Therefore only contents that require the definition of OER are determined free and open."
                        },
                        {
                          "@language": "de",
                          "@value": "Das Bündnis Freie Bildung vereinigt Organisationen, Institutionen und Einzelpersonen, die sich für freie Bildung, frei zugängliche Bildungsmaterialien, offene Bildungspraktiken und offene Lizenzen in der Bildung einsetzen.\n\nVision:\n\n*     Alle Bildungsmaterialien sind ohne rechtliche und technische Hürden zugänglich, nutz- und veränderbar.\n*     Offene Praktiken beim Lehren und Lernen fördern ganzheitliche Bildungsprozesse, verringern soziale Bildungsungleichheit und stärken gesellschaftliche Partizipation.\n*     Software und Infrastrukturen sind frei und offen zugänglich.\n\nMission:\n\nDas Bündnis Freie Bildung ist zugleich Forum und Plattform für Akteurinnen und Akteure, die sich die Öffnung von Lehren, Lernen und Bildung zum Ziel setzen und sich der Förderung Freien Wissens widmen. Es ist somit Impulsgeber für politischen und gesellschaftlichen Wandel in einer vielfältigen Bildungslandschaft."
                        }
                      ],
                      "image": "https://www.wikimedia.de/w/images.homepage/thumb/d/d9/Logo_BFB.png/300px-Logo_BFB.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10963",
                          "streetAddress": "Tempelhofer Ufer 23–24"
                        },
                        "geo": {
                          "lat": 52.4983995,
                          "lon": 13.3811317
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Bündnis Freie Bildung"
                        },
                        {
                          "@language": "de",
                          "@value": "Bündnis Freie Bildung"
                        }
                      ]
                    },
                    "startTime": "2019-02-15T20:03:56.919Z"
                  },
                  {
                    "@id": "urn:uuid:a1974779-3c71-4dec-8565-e1fcad7eff9e",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:37fbc2f3-3983-4eb0-8c95-05509e1d30dd",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Die Aufgabe der Professur besteht laut Widmung in der Verringerung der Umweltwirkungen des Verkehrs. Dabei arbeiten wir an der TU Dresden vorrangig in folgenden Arbeitsfeldern:\r\n\r\n– Abschätzung der Umweltbelastungen aus dem Verkehr: Messung und Modellierung der Emissionen von Luftschadstoffen, Lärm und CO2; Emissionsfaktoren von Fahrzeugen, Fahrmuster sowie Verkehrssituationen; Energieverbräuche, Energieflussmodelle und kumulierte Energieaufwände\r\n\r\n– Monetarisierung von Umweltwirkungen: Bewertungsmethoden, Monetarisierungsansätze und Maßnahmen zur Internalisierung\r\n\r\n– Konzeptionierung und Bewertung von Maßnahmen zur Reduktion der Umweltbelastungen: Handlungsansätze verschiedener Akteure und Ebenen sowie deren Umsetzung; Rad- und Fußverkehr, öffentlicher Verkehr und Naherreichbarkeit, Klimaschutzstrategien\r\n\r\n– Mobilität und Bedüfnisabdeckung: Welche Mobilitätsbedürfnisse werden mit welchen Aufwänden, welche werden nicht abgedeckt? Mobilitätsbedingte soziale Exklusion\r\n\r\n– Bewusstseinsbildung und Information: Erarbeitung von Leitfäden, Lehrmaterialien, Informationen oder Schulungskonzepten; Nachhaltige Verkehrsentwicklung, Verkehr in Entwicklungsländern."
                        },
                        {
                          "@language": "en",
                          "@value": "The task of the professorship, according to its dedication, is to reduce the environmental impact of transport. At the TU Dresden we work primarily in the following fields:\n\n- Estimation of environmental impacts of transport: measurement and modelling of emissions of air pollutants, noise and CO2; emission factors of vehicles, driving patterns and traffic situations; energy consumption, energy flow models and cumulative energy expenditure\n\n- Monetarisation of environmental impacts: Assessment methods, monetisation approaches and internalisation measures\n\n- Conception and evaluation of measures to reduce environmental pollution: Approaches to action by various actors and levels and their implementation; cycling and pedestrian traffic, public transport and local accessibility, climate protection strategies\n\n- Mobility and coverage of needs: Which mobility needs are covered by which expenses, which are not? Mobility-related social exclusion\n\n- Awareness raising and information: development of guidelines, teaching materials, information or training concepts; sustainable transport development, transport in developing countries."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Dresden",
                          "postalCode": "1069",
                          "streetAddress": "Hettnerstr. 1"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Professur für Verkehrsökologie, Institut für Verkehrsplanung und Straßenverkehr der TU Dresden"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T14:49:11.459Z"
                  },
                  {
                    "@id": "urn:uuid:1563ad35-5ca2-4d62-b39d-078af4f171df",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4aa3d23c-57df-4af2-b75e-c3ca2fdd1dd5",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Joint Research Centre (JRC) is the European Commission's science and knowledge service which employs scientists to carry out research in order to provide independent scientific advice and support to EU policy.\r\n\r\nIn this section, you can learn more about the JRC's role, how it is structured, its resources and the people that make it work. You'll also find contact details and information about where we are located across the EU."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "ES",
                          "addressLocality": "Sevilla",
                          "streetAddress": "Edificio Expo"
                        },
                        "geo": {
                          "lat": 37.395184,
                          "lon": -6.01098
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "European Commission - Joint Research Centre"
                        }
                      ]
                    },
                    "startTime": "2018-04-25T12:23:24.928Z"
                  },
                  {
                    "@id": "urn:uuid:c44b7567-e50c-4cea-9de7-8cae2dd58e98",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:97d56f8a-894b-42a1-b07c-797b69cda1e9",
                      "@type": "Article",
                      "dateCreated": "2018-04-09",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Das Projekt [\"LOERn: Lehrerfortbildung durch Nutzung und Produktion von OER-Materialien\"](https://oerworldmap.org/resource/?q=loern#urn:uuid:ac3e7245-eca6-4b63-904f-f85d677eec62) des OERinfo-Förderprogramms des BMBF mit einer Laufzeit vom 1.11.2016 bis 30.4.2018 steht kurz vor Projektende.  Ziel des Projekts war es, ein Praxiskonzept und multimediale Materialien für die flächendeckende Fortbildung von Multiplikatoren im Bereich Schule zum Thema OER durch Nutzung und Produktion offener Lehr- und Lernmaterialien zu entwickeln und anschließend in einer Fortbildungsinitiative in Bayern im Zusammenarbeit mit der Akademie für Lehrerfortbildung und Personalführung Dillingen (ALP) zu erproben. Der Bericht zeigt, welche Ergebnisse erzielt wurden."
                        }
                      ],
                      "image": "https://loern.sodis.de/wp-content/uploads/sites/6/2018/03/Plakat_LOERn_Info.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Bayern",
                          "addressRegion": "DE.BY",
                          "postalCode": "82031",
                          "streetAddress": "Bavariafilmplatz 3"
                        },
                        "geo": {
                          "lat": 48.0677575,
                          "lon": 11.5467897
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Projekt LOERn: Lessons Learned und wie es weiter geht"
                        }
                      ]
                    },
                    "startTime": "2018-09-18T15:45:10.524Z"
                  },
                  {
                    "@id": "urn:uuid:3b117618-0a56-46fb-beb7-f41c9c6d8843",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:311ad28b-83b2-406b-a53f-a34be89d29e2",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:6dcdc72a-c9ec-4230-b99d-ce445f8de321"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "OER@RLP ist eine Initiative und übergreifende Zusammenarbeit zu offenen Bildungsmaterialien und Praktiken in Rheinland-Pfalz. Das Verbundvorhaben verfolgt in erster Linie die Zielstellung einer breiten Sensibilisierung und Qualifizierung von Multiplikatorinnen und Multiplikatoren in Rheinland- Pfalz. Mit OER@RLP wird eine bildungsbereichsübergreifende Initiative gestartet, die OER stärkere Aufmerksamkeit und Präsenz im Bildungsalltag verleihen soll. Die Maßnahmen orientieren sich inhaltlich an den Themenfeldern OER finden, OER nutzen, OER erstellen, OER teilen und bereitstellen. Das Verständnis von Sensibilisierung und Qualifizierung umfasst die Aspekte Information, Beratung und Kompetenzaufbau. Die Qualifizierungsmaßnahmen sind sowohl als Präsenzformate als auch in hybriden Lernformaten (blended learning) gestaltet. OER@RLP hat durch die Beteiligung zentraler Einrichtungen aus den Bereichen Weiterbildung, Schule und Hochschule in Rheinland-Pfalz einen besonderen Hebel, Wirkung und Verbreitung zu entfalten."
                        },
                        {
                          "@language": "en",
                          "@value": "OER@RLP is an initiative and conjoint collaboration in regards to open educational resources and coherent practices in Rhineland-Palatinate, Germany. The joint research project primarily aims at sensitising and qualifying multipliers in Rhineland-Palatinate. Covering all sectors of the German education system, OER@RLP starts an initiative that focuses on fostering awareness and strengthening the presence of open educational recources in the educational community. In form and content the project activity is mainly based on the topics finding OER, using OER, making OER and sharing as well as providing OER. The understanding of sensitisation and qualification covers the aspects of informing, counselling and building competencies. The qualification courses provided by OER@RLP are planned in form of presence events as well as hybrid learning scenarios (blended learning). By combining the sectors of further vocational education, school and higher education in Rhineland-Palatinate OER@RLP provides an effective lever to support the impact and distribution of open educational resources. "
                        }
                      ],
                      "image": "https://www.oer-at-rlp.de/wp-content/uploads/thegem-logos/logo_f8c356e5b12db435fae9a677673f1c58_3x.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Kaiserslautern",
                          "addressRegion": "DE.RP",
                          "postalCode": "67663",
                          "streetAddress": "Erwin-Schrödinger-Str. 57"
                        },
                        "geo": {
                          "lat": 49.42197763862717,
                          "lon": 7.756776809692381
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "OER@RLP"
                        }
                      ],
                      "startTime": "2016-11-01"
                    },
                    "startTime": "2018-05-05T08:58:44.846Z"
                  },
                  {
                    "@id": "urn:uuid:159ffeec-ebf5-45bd-bfa2-a3f9c89ea7fa",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5db0a906-c104-4b2d-bc83-e6154f87f126",
                      "@type": "Action",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Digital Polarization Initiative is an attempt to build student web literacy by having students participating in a broad, cross-institutional projects around issues of digital polarization.\r\n\r\nThe primary purpose of this wiki is to provide a place for students to fact-check, annotate, and provide context to the different news stories that show up in their Twitter and Facebook feeds. It's like a student-driven Snopes, but with a broader focus: we don't aim to just investigate myths, but to provide context and sanity to all the news – from the article about voter fraud to the health piece on a new cancer treatment.\r\n\r\nThis wiki will also form a hub for other resources around political polarization in a net-mediated world. For more information on each subproject choose one of the options below or click on the option on the side menu.\r\n\r\nThis initiative is spearheaded by Mike Caulfield with support from the American Democracy Project of the American Association of State Colleges and Universities. If you or your class would like to participate, contact michael.caulfield@wsu.edu."
                        }
                      ],
                      "image": "https://adpaascu.files.wordpress.com/2016/12/digipoblog2.png?w=620",
                      "location": {
                        "address": {
                          "addressCountry": "CA",
                          "addressLocality": "Vancouver",
                          "addressRegion": "CA.BC",
                          "streetAddress": "Vancouver"
                        },
                        "geo": {
                          "lat": 49.255176,
                          "lon": -123.114695
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The Digital Polarization Initiative"
                        }
                      ]
                    },
                    "startTime": "2018-02-15T12:26:24.942+01:00"
                  },
                  {
                    "@id": "urn:uuid:2fb71145-ccab-4f71-88f7-2e602fe9a7d5",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:11aa2901-e1cc-40b5-9f2f-cff9133e81ed",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Open Education Group is an interdisciplinary research group that (1) conducts original, rigorous, empirical research on the impact of OER adoption on a range of educational outcomes and (2) designs and shares methodological and conceptual frameworks for studying the impact of OER adoption. We also teach courses in topics relating to open education.\n\nOur goal is to make the world a better place by increasing the affordability and effectiveness of education."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "US"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Group"
                        }
                      ]
                    },
                    "startTime": "2018-05-11T14:00:01.746Z"
                  },
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
                      "@id": "urn:uuid:ff56c436-7e76-11e5-b76b-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Open Education Consortium (OEC) is a global network of educational institutions, individuals and organizations that support an approach to education based on openness, including collaboration, innovation and collective development and use of open educational materials. The OEC is a non-profit, social benefit organization registered in the United States and operating worldwide."
                        }
                      ],
                      "image": "http://www.oeconsortium.org/wp-content/themes/ocwc-mainsite/images/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Concord",
                          "addressRegion": "US.MA",
                          "postalCode": "1742",
                          "streetAddress": "60 Thoreau St, Suite 238"
                        },
                        "geo": {
                          "lat": 42.45709,
                          "lon": -71.35834
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Consortium"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:72397075-de13-4ccf-a003-d06dfffdbe56",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9eb11f70-bd0a-4d61-b334-52db88cc3a9b",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "OERs.\n\nStarting in February 2017, UCLouvain has launched its own repository of Open Educational Resources. Educators of UCLouvain are encouraged to deposit their material on this platform (http://www.uclouvain.be/oer); this can be existing material, transformed existing material, or newly developed material. \n\nThe repository oer.uclouvain.be contains a growing numbers of OERs and references to OERs made by the members of UCLouvain : open textbooks, open courseware, videos, assessment rubrics, problem-based learning material, serious games, pedagogical software, etc. The number of monthly accesses shows a growing community of returning users, from all around the world. \nTo increase the visibility of our OERs, they are systematically referenced in known OER portals such as OER Commons  and Merlot.\n\nURLs :  uclouvain.be/oer ; oer.uclouvain.be \n"
                        },
                        {
                          "@language": "en",
                          "@value": "UCLouvain is a comprehensive university founded in 1425. It is located in the center of Belgium and is organized around 14 faculties and schools, 30.000 students, 1.900 teachers, 3.000 researchers and 150.000 Alumni.\n\nPlacing 149th in the 2016 QS ranking of the world’s universities, UCLouvain is ranked first among Belgian francophone universities. \n\nErasmus, Gerardus Mercator and Andreas Vesalius are among the greats to have graced its halls; it’s where Georges Lemaître formulated his Big Bang theory and Christian de Duve conducted research that won him the 1974 Nobel Prize in Medicine.\n\nAt UCLouvain, a digital strategy, set up in 2015, aims to exploit digital capabilities to enhance the creation, dissemination, and diffusion of knowledge.  It is based on a three-pronged approach: Open Education, Open Publication, and Open Source.  \n\nIn 2015, UCLouvain decided to seize the opportunities offered by the coming of age of digital technologies and their attendant capabilities by formulating a digital strategy. \n\nThis strategy aims to exploit digital capabilities to enhance the creation, dissemination, and diffusion of knowledge. UCLouvain choose, to articulate its strategy simultaneously on three areas of openness: open education, open publication, and open source.\n\nIn its digital strategy (http://www.uclouvain.be/unum), UCLouvain stretches the importance of the quality of services provided by means of technology rather than emphasizing technology itself. As stated in (OCDE, 2010), the quality of a policy lies in its capability to meet the needs of the members of the university which are not, primarily, concerns for new digital techniques per se.\nUClouvain supports the Open Education movement in several ways : \n-\tby making available open educational resources (OER) through its own repository of OER (oer.uclouvain.be) . \n-\tby offering courses open to all (MOOCs). "
                        }
                      ],
                      "image": "https://cdn.uclouvain.be/groups/cms-editors-arec/charte-graphique/Logo_UCL_DEF_cadre_UCL_RVB.jpg?itok=sLcdCkf4",
                      "location": {
                        "address": {
                          "addressCountry": "BE",
                          "addressLocality": "Louvain-la-Neuve",
                          "addressRegion": "BE.BW",
                          "postalCode": "1348",
                          "streetAddress": "Place de l'Université, 1"
                        },
                        "geo": {
                          "lat": 50.6699511,
                          "lon": 4.61526433005919
                        }
                      },
                      "name": [
                        {
                          "@language": "fr",
                          "@value": "Université catholique de Louvain"
                        }
                      ]
                    },
                    "startTime": "2018-07-04T10:53:31.599Z"
                  },
                  {
                    "@id": "urn:uuid:809c1eb3-7bba-46cb-a578-8f398d3faa20",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:2eedf9a0-0f60-4c5a-8a8b-a05af1275761",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Europeana has been promoting the richness and diversity of our shared European cultural heritage through digital technology since 2008.\r\n\r\nTo do so, the Europeana Foundation brings together the organisations that have digital cultural heritage to share with the people and sectors who want to view, share and build with that heritage, including Education, Research and the Creative Industries. \r\n\r\nWe are a team of around 60 people, based mostly in the Hague (the KB) but also in London (the British Library) and Paris (the Bibliothèque Nationale de France). Our Network Association of over 1.500 cultural heritage professionals, creatives, educators and policy makers help to shape Europeana's strategic direction, improve data quality and make it more open. This helps us to reach the relevant professional audiences, but also to connect people with their shared cultural heritage through campaigns (such as #BigArtRide and #JumpingJacks bringing art to the street), or crowdsourcing events engaging people with their past (Europeana 1914-1918 Transcribathon http://transcribathon.com/en/). \r\n\r\nIf you are interested in using our API to access our content or otherwise featuring Europeana content in your resources, please get in touch."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "The Hague",
                          "addressRegion": "NL.ZH",
                          "postalCode": "2595 BE",
                          "streetAddress": "c/o Koninklijke Bibliotheek, Prins Willem-Alexanderhof 5"
                        },
                        "geo": {
                          "lat": 52.081436,
                          "lon": 4.32731
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Europeana Foundation"
                        }
                      ]
                    },
                    "startTime": "2018-06-05T10:35:07.540Z"
                  },
                  {
                    "@id": "urn:uuid:80b35e29-358f-4420-af0e-83525104163d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:efed6ca2-b228-480f-be03-090a19de7b42",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:f4f8af31-ac5d-497c-9c96-ec958c465b09",
                          "@type": "Organization",
                          "description": [
                            {
                              "@language": "de",
                              "@value": "<p>Das DIPF betreibt international vernetzte Bildungsforschung und kooperiert dazu mit supranationalen Organisationen und Partnern in anderen Nationen. Die Forschungsarbeiten und Analysen der Wissenschaftlerinnen und Wissenschaftler zur nationalen Schulqualität, zu Steuerungsfragen sowie zu wissenschaftlicher Infrastruktur bilden eine solide Basis für die internationale Vergleichbarkeit des deutschen Bildungswesen.</p>\r\n\r\n<p>Auf Projektebene werden vielfältige Kontakte zu Wissenschaftlerinnen und Wissenschaftlern weltweit gepflegt. Aus mancher Zusammenarbeit entsteht eine tiefere Vernetzung - zum Beispiel mit dem Australian Council for Educational Research (ACER), cApStAn in Belgien oder der International Association for the Evaluation of Educational Achievement (IEA).</p> \r\n<p>Im Rahmen groß angelegter OECD-Bildungsvergleichsstudien wie PISA und PIAAC bringt das DIPF seine Expertise im Bereich der Fragebogenerstellung sowie des technologiebasierten Testens in die internationalen Konsortien ein.</p>"
                            },
                            {
                              "@language": "en",
                              "@value": "<p>DIPF actively conducts internationally networked educational research. To this end, it co-operates with supranational organisations and partners in other countries. Research and analyses of the scientists on topics such as national school quality, educational governance and science infrastructure provide a sound foundation for the international comparability of the German education system.</p>\r\n\r\n<p>At the level of projects, many contacts are held with scientists from all over the world. In quite a number of cases, co-operations have led to intrinsic networking – for example, with the Australian Council for Educational Research (ACER), cApStAn in Belgium or the International Association for the Evaluation of Educational Achievement (IEA).</p>\r\n<p> Subject to the framework of large-scale educational assessments commissioned by the OECD such as PISA and PIAAC, DIPF contributes its expertise to international consortia, in the field of questionnaire design and technology-based testing.</p>"
                            }
                          ],
                          "image": "http://www.dipf.de/++resource++dipf.diazotheme/header_dipf_logo_de.gif",
                          "location": {
                            "address": {
                              "addressCountry": "DE",
                              "addressLocality": "Frankfurt am Main",
                              "addressRegion": "DE.HE",
                              "postalCode": "60486",
                              "streetAddress": "Schloßstraße 29"
                            },
                            "geo": {
                              "lat": 50.12254,
                              "lon": 8.638396
                            }
                          },
                          "name": [
                            {
                              "@language": "de",
                              "@value": "DIPF - Deutsches Institut für Internationale Pädagogische Forschung"
                            },
                            {
                              "@language": "en",
                              "@value": "DIPF - German Institute for International Educational Research"
                            }
                          ]
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Mit der Informationsstelle OER wird eine themenspezifische Online-Plattform geschaffen, die für Öffentlichkeit und fachliche Zielgruppen umfassende Informationen zum Thema Open Educational Resources zur Verfügung stellt, den aktuellen Kenntnisstand für die Praxis aufbereitet, Informationen zu Best-Practice-Beispielen bündelt und die Vielfalt vorhandener Initiativen abbildet. Die breite Sichtbarmachung des Themas erfolgt über die inhaltliche, funktionale und informationelle Verzahnung einschlägiger Informationsbestände und Medienangebote des Deutschen Bildungsservers, der bisherigen Transferstelle OER und des Hochschulbibliothekszentrums NRW (OER World Map/OER-Atlas), die in Form einer integrierten, informationsmethodisch abgestimmten und nutzerorientiert konzipierten Internet-Präsenz den einfachen Zugriff auf aktuelle Informationen ermöglicht. Mit Blick auf die Adressierung auch neuer potenzieller Zielgruppen und die bildungsbereichsübergreifende Erschließung des Themenfeldes im Kontext des Lebenslangen Lernens sollen in Zusammenarbeit mit Stakeholdern, Interessengruppen und OER-Initiativen bislang desiderate adressaten- und domänenspezifische Informationsmodule entwickelt werden.\r\n\r\nIm Ergebnis entsteht eine umfangreiche Wissensbasis in Gestalt u.a. von redaktionellen Dossiers und systematisch strukturierten Informationssammlungen, deren Reichweite durch die Integration multimedialer Formate (z.B. Podcasts, Videos, didaktisch aufbereitete Online-Module) und Kommunikationsplattformen auf der Basis von Social-Media-Anwendungen erweitert wird. Das Vorhaben zielt zudem darauf, die Zusammenarbeit und Vernetzung der unterschiedlichen OER-Akteure und Initiativen durch geeignete Kommunikationsinstrumente, projektbegleitende Workshops und die Öffentlichkeitsarbeit der Informationsstelle zu unterstützen. In diesem Zusammenhang besteht eine Aufgabe auch in der Dokumentation und Bündelung von Diskussionsprozessen und Ergebnissen der Fördermaßnahme des BMBF OERinfo zur Sensibilisierung und Qualifizierung von OER-Multiplikatoren im Dialog mit den geförderten Projekten."
                        },
                        {
                          "@language": "en",
                          "@value": "Informationsstelle OER is a topic-specific online platform that provides the public and specialist target groups with comprehensive information on the subject of Open Educational Resources, gives the current state of knowledge for practical use, bundles information on best practice examples and illustrates the diversity of existing initiatives. The broad visualization of the topic takes place via the functional and informational interlocking of the relevant information stocks and media offers of the German Education Server, the former Transferstelle OER and the North Rhine-Westphalian Library Center (OER World Map/OER-Atlas), which enables easy access to current information in the form of an integrated and user-oriented internet presence. To address new potential target groups and to open up the thematic field across educational areas in the context of lifelong learning, previously missing address- and domain-specific information modules are to be developed in cooperation with stakeholders, interest groups and OER initiatives.\r\n\r\nThe result is an extensive knowledge base in the form of editorial dossiers and systematically structured information collections, whose reach is extended by integrating multimedia formats (e.g. podcasts, videos, didactically built online modules) and communication platforms based on social media applications. The project also aims to support the cooperation and networking of the various OER actors and initiatives through appropriate communication tools, project-accompanying workshops and the public relations work of the Informationsstelle OER. In this context, one task is also to document and bundle the discussion processes and the results of the BMBF OERinfo funding measure to sensitise and qualify OER multipliers in dialogue with the projects funded.\r\n"
                        }
                      ],
                      "image": "https://open-educational-resources.de/wp-content/themes/oer2017/img/oer_info_logo.svg",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Informationsstelle OER: Information, Transfer und Vernetzung zu Open Educational Resources"
                        }
                      ],
                      "startTime": "2016-11-01"
                    },
                    "startTime": "2018-04-08T15:45:29.569+02:00"
                  },
                  {
                    "@id": "urn:uuid:ea489e00-9730-486c-81e8-559e97671d8c",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "For me an Open Education Lighthouse, since DS109 empowers studends to take control of their learning experience. The high acceptance of the course speaks for itself."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4c1303c2-f7bc-4c96-a586-9e4849f5e6f0",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Digital Storytelling (also affectionately known as ds106) is an open, online course that happens at various times throughout the year at the University of Mary Washington… but you can join in whenever you like and leave whenever you need. This course is free to anyone who wants to take it, and the only requirements are a real computer, a hardy internet connection, preferably a domain of your own and some commodity web hosting, and all the creativity you can muster.\r\n\r\nThis course will require you to both design and build an online identity (if you don’t have one already) and narrate your process throughout the fifteen week semester. Given this, you will be expected to openly frame this process and interact with one another throughout the course as well as engage and interact with the world beyond as a necessary part of such a development.\r\n\r\nIn many ways this course will be part storytelling workshop, part technology training, and, most importantly, part critical interrogation of the digital landscape that is ever increasingly mediating how we communicate with one another.\r\n\r\nThe course objectives are rather straightforward:\r\n\r\n* Develop skills in using technology as a tool for networking, sharing, narrating, and creative self-expression\r\n* Frame a digital identity wherein you become both a practitioner in and interrogator of various new modes of networking\r\n* Critically examine the digital landscape of communication technologies as emergent narrative forms and genres\r\n"
                        }
                      ],
                      "image": "http://ds106.us/wp-content/uploads/2011/12/ds106.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Digital Storytelling"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:2f5b7172-9394-4838-ad74-88f517714607",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-02-08T11:31:02.365+01:00"
                  },
                  {
                    "@id": "urn:uuid:9a9b2908-2e60-4386-8027-0b7a8143e415",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Open Education Global Conference is the annual opportunity for researchers, practitioners, policy makers and educators to deeply explore open education and its impact on global education.  Conference participants engage with thought leaders in open education and have the opportunity to share ideas, practices and discuss issues important to the future of education worldwide. The Open Education Global Conference is the largest conference devoted exclusively to open education, attracting participants from more than 30 countries around the world.\r\n\r\nThe Open Education Global Conference 2017 is organized jointly by the Open Education Consortium and the University of Cape Town.\r\n\r\n \r\n\r\n  \r\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "ZA",
                          "addressLocality": "Cape Town",
                          "addressRegion": "ZA.WC",
                          "streetAddress": "Cape Town International Convention Centre (CTICC)"
                        },
                        "geo": {
                          "lat": -33.915682,
                          "lon": 18.426776
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Global Conference 2017"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T15:28:42.369+02:00"
                  },
                  {
                    "@id": "urn:uuid:4b0d07df-2ee2-4daf-aada-63f119b9396d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b8b89c85-5d56-4fca-b78f-decce9e56952",
                      "@type": "Organization",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Hamburg",
                          "addressRegion": "DE.HH",
                          "streetAddress": "Hamburg"
                        },
                        "geo": {
                          "lat": 53.576158,
                          "lon": 10.007046
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Zentralstelle für Lehren und Lernen im 21. Jahrhundert - ZLL 21 e.V."
                        }
                      ]
                    },
                    "startTime": "2018-05-15T11:24:19.376Z"
                  },
                  {
                    "@id": "urn:uuid:cffe96a3-6eb7-4d03-ba90-51a1dc8ab982",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5a533d20-680b-41b9-b21d-a7fc42830104",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open educational resources (OER) has increasingly become a go-to strategy for legislators seeking to make college education more affordable and effective. Nearly half of all U.S. states have considered OER legislation in past years, and the trend is likely to continue. Given the increasing activity at the state level, SPARC is expanding the support we provide to our members in this arena.\n\nThis page is updated weekly, and tracks the latest state-by-state policy activity relevant to the SPARC community, along with policies enacted in past years. SPARC’s state policy tracking is done in conjunction with Foresight Law + Policy, and a full dataset of legislation tracked since 2015 is published in GitHub. Note that page is for tracking purposes only and being listed does not imply endorsement. For information about SPARC’s policy positions, visit our Policy & Advocacy page. Check out our additional state policy resources below."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER State Policy Tracker"
                        }
                      ]
                    },
                    "startTime": "2018-12-01T10:24:44.375Z"
                  },
                  {
                    "@id": "urn:uuid:e6a83b4f-4870-4f15-ac4c-acb86f03c4dd",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5125c7df-dbb3-401b-bd43-1da6e9adc1de",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Qualität bei OER ist ein “heißes Eisen”. Wie lässt sich diese Qualität überprüfen? Unabhängig vom Bildungsbereich und vom Fach? Gibt es Kriterien dafür? Gemeinsam mit Ihnen wollen wir einzelne Praxisbeispiele unter die Lupe nehmen. Dabei ist uns Ihre Meinung und Erfahrung wichtig. Nach einer kurzen Einführung treten Praktikerinnen in einen Austausch über bisherige Erfahrungen mit Qualitätskriterien im Umgang mit OER. Das Webinar wird zur Nachverfolgung aufgezeichnet."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Internet"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Die Suche nach Qualität bei OER - Ein Austausch mit allen Bildungsbereichen!"
                        }
                      ]
                    },
                    "startTime": "2019-04-05T08:30:44.679Z"
                  },
                  {
                    "@id": "urn:uuid:1fedd8b7-1fca-4b8d-b053-8d8c5f043615",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "As far as I know the first major collection of OER in the vocational education sector! Looks very professional. I especially love the way SkillsCommons provides metadata about the included contents and its usage. I hope many other initiatives will follow this example!"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3331a161-d35f-4ec7-ac51-47b0d9516fda",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The US Department of Labor’s Trade Adjustment Assistance Community College and Career Training (TAACCCT) program has created a free and open online library called SkillsCommons containing free and open learning materials and program support materials for job-driven workforce development.  The $1.9 billion investment by the US Department of Labor produced a comprehensive collection of workforce-related Open Educational Resources (OER) created by over 700 community colleges across the nation.  The OER can be found, reused, revised, retained, redistributed and remixed by an individual, institution, and industry for FREE with the proper attribution to the original author of the resources.\r\n\r\nSkillsCommons.org is designed and managed by the California State University and its MERLOT program for the Department of Labor’s TAACCCT program under a 4+ year cooperative agreement. The California State University/MERLOT team works with other TAACCCT partners to support the TAACCCT grantees in the creation and contribution of quality OER that are stored in the SkillsCommons online library. SkillsCommons will be sustained as a CSU-MERLOT service after the cooperative agreement has concluded."
                        }
                      ],
                      "image": "http://support.taaccct.org/wp-content/uploads/2016/07/skillscommons-wordmark-1.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "SkillsCommons"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:06aafe5e-318b-41c2-9dcc-ffb1dd5e8c81",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b084ddc2-313a-11e5-a56e-001999ac7927",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "MERLOT is a curated collection of free and open online teaching, learning, and faculty development services contributed and used by an international education community."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "MERLOT"
                        }
                      ]
                    },
                    "startTime": "2019-01-31T22:41:15.663Z"
                  },
                  {
                    "@id": "urn:uuid:aaf2fa8b-4f17-4a54-8a03-772cf201ad35",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c54efe5f-46ce-42c6-8f70-f7c461b2cb31",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "OER18 turns the focus on one of the often-cited benefits of “open” – the promise of inclusivity. How do the resources, methods and projects that make up open education support making education available to all? As a movement over 15 years old, has open education made an impact – on learners, on society and on education? What can we do to to support learning in the open – and how can we use open to support learning?\r\n\r\nThe conference will be chaired by academic and open education researcher Vivien Rolfe, alongside Wonkhe Associate Editor David Kernohan."
                        }
                      ],
                      "image": "https://www.alt.ac.uk/sites/alt.ac.uk/files/images/page/oer18-edit.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "Bristol",
                          "addressRegion": "GB.BS",
                          "streetAddress": "Bristol"
                        },
                        "geo": {
                          "lat": 51.45489572796052,
                          "lon": -2.596542711639404
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER18: Open to All"
                        }
                      ]
                    },
                    "startTime": "2018-04-18T10:42:59.422Z"
                  },
                  {
                    "@id": "urn:uuid:05d63c18-3881-43bc-9b68-02b0d4fe9b85",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b3f51e62-5145-4f48-9da4-306f3365fde4",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "We are making the world more inclusive, more cooperative and more open by changing the way people learn, participate in culture, use the internet and exercise their rights as internet users.\n\nWe work in the field of Open Education by combining policymaking and strategic work with projects focusing on changing educational practices. We have four strategic goals:\n1. Competent users. We support users of digital technologies in improving their skills and competences related to openness and cooperation.\n2. Open institutions. We cooperate with institutions to make sure that they work in an open manner in order to carry out their social mission.\n3. Good regulations. We work towards adjusting regulations and using legal tools to support the needs and rights of users, as they participate in open circulations of resources online.\n4. The social dimension of technology. We diagnose social and cultural changes taking place in our society with the influence of digital technologies. We introduce a perspective of civic responsibility and caring about openness and the common good to the public debate on technology.\n"
                        }
                      ],
                      "image": "https://centrumcyfrowe.pl/wp-content/uploads/sites/16/2019/03/CC_logopion_RGB-small.png",
                      "location": {
                        "address": {
                          "addressCountry": "PL",
                          "addressLocality": "Warszawa",
                          "addressRegion": "PL.MZ",
                          "postalCode": "00-020",
                          "streetAddress": "Chmielna 24"
                        },
                        "geo": {
                          "lat": 52.2323383,
                          "lon": 21.0139172383683
                        }
                      },
                      "name": [
                        {
                          "@language": "pl",
                          "@value": "Centrum Cyfrowe Foundation"
                        }
                      ]
                    },
                    "startTime": "2019-03-21T18:34:00.397Z"
                  },
                  {
                    "@id": "urn:uuid:dc5aa01c-0be1-4408-b75c-bd9d70e60247",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ab167876-aa97-49a9-b73d-99c82ffbfb2b",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>edutags is a social bookmarking platform profiled for the educational sector. The service is provieded by the German Educational Server in cooperation with the learning lab at the University Duisburg/Essen.</p>\r\n<p>The website allows to set and manage bookmarks on all kinds of resources around the internet, regardless of the used license. The tool can be used for personal causes and/or for group activities, can be shared and collaboratively worked on. Edutags offers connections and networking with OER producers of which both parties can befenfit from.</p>"
                        },
                        {
                          "@language": "de",
                          "@value": "<p>edutags ist eine Social Bookmarking-Plattform für den Bildungsbereich. Der Service wird vom Deutschen Bildungsserver in Kooperation mit dem Learning Lab der Universität Duisburg Essen angeboten.</p>\r\n\r\n<p>Auf edutags können Lesezeichen zu allen Ressourcen im Web unabhängig von Lizenzen gespeichert, geordnet, gesucht und geteilt werden. Die Plattform eignet sich als persönliches Arbeitswerkzeug sowie zur gemeinsamen Nutzung in Gruppen. Eigene Sammlungen können erstellt, mit anderen geteilt sowie kollaborativ gepflegt werden. </p>\r\n\r\n<p>Edutags zeichnet sich insbesondere durch das Ausweisen von und Filtern nach CC Lizenzen aus. Zusätzlich zu den Lesezeichensammlungen der User unterhält edutags auch Kooperationen mit OER-Produzenten, so dass auf einen großen Pool an Ressourcen zurückgegriffen werden kann.</p>"
                        }
                      ],
                      "image": "http://www.edutags.de/themes/edutheme/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Essen",
                          "addressRegion": "DE.NW",
                          "postalCode": "45141",
                          "streetAddress": "Universitätsstraße 2"
                        },
                        "geo": {
                          "lat": 51.468739,
                          "lon": 7.019603
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "edutags"
                        },
                        {
                          "@language": "de",
                          "@value": "edutags"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:02:55.255+02:00"
                  },
                  {
                    "@id": "urn:uuid:41109433-ba26-4260-a4d1-3937666c36a6",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:1173e5ad-fa6f-4f06-8b40-dd859d591456",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "**Interactive Learning Objects: Toolkit for Teachers and Learners** free and available as an open educational resource (OER) is based on the Scratch programming language. [Scratch](https://scratch.mit.edu/)  is a project of the Lifelong Kindergarten Group at the MIT Media Lab.\nThis publication commissioned by [Commonwealth of Learning](http://www.col.org) (COL) will help you learn and teach coding even with no prior/background coding skills \nAdditionally, several of the tutorials in the toolkit are #TVeT skill based. Usage can be self-paced, in a computing class/lab, at a workshop, a recommended text etc. There is simply no limit to how you can use the toolkit. You are welcome to freely use and adapt as you deem fit as it is on a CC-BY license. It is available on COL's OAsis repository here http://oasis.col.org/handle/11599/3072\n![](https://pbs.twimg.com/media/DjN7B3_VsAARz-Y.jpg)"
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Interactive Learning Objects: Toolkit for Teachers and Learners"
                        }
                      ]
                    },
                    "startTime": "2018-10-13T07:52:52.616Z"
                  },
                  {
                    "@id": "urn:uuid:55994e87-65cc-4038-9856-8789d26ed4a9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:02074fd0-9614-4673-9a12-820a11ad5a2c",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Das OER-Meetup für Köln und Umgebung (#OERcgn) verfolgt das Ziel, OER-Akteure sowie interessierte Personen zusammenbringen, um sich in lockerer Runde über vielfältige Themen im Kontext von freien Lern- und Lehrmaterialien sowie freier Bildung auszutauschen.\n\nAnmeldung (unverbindlich): https://oercgn.wordpress.com/zum-naechsten-meetup-anmelden/\n\nOrt: TH Köln, Ubierring 48, Bildungswerkstatt W3"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Köln",
                          "addressRegion": "DE.NW",
                          "postalCode": "50678",
                          "streetAddress": "Ubierring 48"
                        },
                        "geo": {
                          "lat": 50.9214289,
                          "lon": 6.96536772698248
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER-Meetup Köln"
                        }
                      ]
                    },
                    "startTime": "2018-05-04T07:16:14.412Z"
                  },
                  {
                    "@id": "urn:uuid:f70e9638-ec74-434c-8532-edefa7605641",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c27c383c-ecab-44e7-be67-24a741586afe",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>The 2012 Paris OER Declaration was formally adopted at the 2012 World Open Educational Resources (OER) Congress held at the UNESCO Headquarters in Paris from 20 – 22 June 2012. </p>\r\n<p>\r\nOver 400 delegates including representatives of Government, educators, NGOs, and universities attended the Congress which was organized in full partnership with the Commonwealth of Learning (COL) and supported by a generous grant from the William and Flora Hewlett Foundation (USA).</p>\r\n\r\nThe goals of the Congress were to:\r\n<ul>\r\n    <li>Release the 2012 Paris OER Declaration</li>\r\n    <li>Showcase through an Open Seminar & Exhibition the world’s best practices in OER policies and initiatives  and</li>\r\n\r\n   <li> Celebrating the 10th anniversary of the 2002 UNESCO Forum that coined the term Open Educational Resources (OER).</li>\r\n</ul>\r\n\r\n<p>The Congress was organized as an open multi-stakeholder event. Physical and remote participants were able to continually follow and participate in all sessions and directly contribute to the Paris OER Declaration via live-webstreaming or through Twitter and Identi.ca using the hashtag #oercongress.</p>"
                        }
                      ],
                      "image": "http://www.unesco.org/new/fileadmin/unesco/images/logo_en.gif",
                      "location": {
                        "address": {
                          "addressCountry": "FR",
                          "addressLocality": "Paris",
                          "addressRegion": "FR.VP",
                          "postalCode": "75007",
                          "streetAddress": "7 Place de Fontenoy"
                        },
                        "geo": {
                          "lat": 48.849888,
                          "lon": 2.306503
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "World Open Educational Resources Congress"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:46:06.324+02:00"
                  },
                  {
                    "@id": "urn:uuid:f1b6ce3f-b5de-4ac2-8f3a-8a08337985ad",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:01d658df-04e0-47d9-bc96-8122e96db54a",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:11b10e73-b8de-4412-9a30-be128852e37b",
                          "@type": "Organization",
                          "description": [
                            {
                              "@language": "en",
                              "@value": "Knowledge 4 All Foundation Ltd (K4A) is a distributed institute based in London (UK), with two main streams of activities, on one side pioneering Machine Learning methods of pattern analysis, statistical modeling, and computational learning and on the other transform these into technologies for large scale applications in Open Education. It is therefore an advocate of Artificial Intelligence and Big data in Open Education."
                            }
                          ],
                          "image": "https://www.k4all.org/wp-content/themes/k4all-child/img/logo@2x.png",
                          "location": {
                            "address": {
                              "addressCountry": "GB",
                              "addressLocality": "Reigate and Banstead",
                              "addressRegion": "GB.SR",
                              "postalCode": "RH1 1DL",
                              "streetAddress": "Station Road 57-65"
                            },
                            "geo": {
                              "lat": 51.2406351,
                              "lon": -0.1704663
                            }
                          },
                          "name": [
                            {
                              "@language": "en",
                              "@value": "Knowledge 4 All Foundation"
                            }
                          ]
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "X5GON is a breakthrough EU H2020 project, creating a solution that will help users/students find what they need not just in OER repositories, but across all open educational resources on the web.\nThis solution will adapt to the user’s needs and learn how to make ongoing customized recommendations and suggestions through a truly interactive and impactful learning experience.\nThis new AI-driven platform will deliver OER content from everywhere, for the students’ need at the right time and place. This learning and development solution will use the following solutions to accomplish this goal:\n\n* Aggregation: It will gather relevant content in one place, from the projects case studies as well as external providers and other preferred resources.\n* Curation: AI and machine learning will be key to curate relevant and contextual content and external students at the right time and point of need.\n* Personalization: It will make increasingly personalized recommendations for learning content to suit students’ needs, based on the analysis of relevant factors.\n* Creation: Large, small and medium-sized universities have tacit knowledge that can be unlocked and re-used. This approach will allow any organization to release and build their own content libraries quickly and conveniently to share with the world and vice versa.\n"
                        }
                      ],
                      "image": "https://www.x5gon.org/wp-content/themes/x5gon/dist/assets/img/logo.svg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "X5GON"
                        }
                      ]
                    },
                    "startTime": "2019-03-03T15:35:15.832Z"
                  },
                  {
                    "@id": "urn:uuid:2211a576-549f-4253-b2ec-7e1c74d8d96e",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8cb2be66-45b1-4b08-90b8-87c56aa68195",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Minnesota State University, Mankato has developed several projects to help students access and utilize OER. Initiatives at MSU to encourage OER adoption include an OER graduate student handbook, an OER professional development course and plan, and an interactive game for teaching faculty about OER. These OER initiatives have benefited from institutional resources including some funding and staffing dedicated to OER, an OER campus interest group and faculty cohort, and faculty contracts that encourage OER content creation.  "
                        }
                      ],
                      "image": "https://mankato.mnsu.edu/globalassets/globalassets/mnsu-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Mankato",
                          "addressRegion": "US.MN"
                        },
                        "geo": {
                          "lat": 44.1634663,
                          "lon": -93.9993505
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Minnesota State University"
                        }
                      ]
                    },
                    "startTime": "2019-02-21T07:23:19.041Z"
                  },
                  {
                    "@id": "urn:uuid:4848e1b4-bedf-4109-8bb9-b455b8b55aef",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:d878ac55-fc3e-4e74-8077-6379b350d14a",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The SPARC Open Education Leadership Program is an intensive professional development program to empower library professionals with the knowledge, skills, and connections to lead successful open education initiatives that benefit students. The two-semester program blends online, peer-to-peer, and project-based learning to build a comprehensive understanding of the open education space coupled with practical know-how to take action on campus and beyond. Fellows participate as part of a cohort that becomes a vibrant community of practice, enhanced by expert instructors and mentorship support. The program enrolls library professionals across the U.S. and Canada. \n\nMore information is available at: https://sparcopen.org/our-work/open-education-leadership-program/"
                        }
                      ],
                      "image": "http://sparcopen.org/wp-content/uploads/2019/03/logo-square-e1551924656116.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Washington",
                          "addressRegion": "US.DC",
                          "postalCode": "20036",
                          "streetAddress": "21 Dupont Circle NW, Suite 800"
                        },
                        "geo": {
                          "lat": 38.9109436,
                          "lon": -77.0427259
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Leadership Program"
                        }
                      ]
                    },
                    "startTime": "2019-04-11T20:47:42.826Z"
                  },
                  {
                    "@id": "urn:uuid:c4e4a1ba-fc42-4c00-ad83-d25919ac595e",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ffb043ce-365f-46f6-be98-79014da5e5c5",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:fc4e408a-e725-4588-bbc5-0404b9ca8687"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "JOINTLY organizes co-operation activities between OER actors and supports OER multipliers in the development and dissemination of their open educational ressources.\r\n\r\nIn the \"OER Content Buffet\" they can cooperate and collect content for OER qualification and awareness-raising activities, prepare it for their target groups and ensure quality. Therefore JOINTLY organizes workshops, support of experts, webinars, courses and much more.\r\n\r\nOER-promoting software solutions arise in developer cooperations, whose results are open source and freely usable. JOINTLY organizes several “Hack4OER” hackathons to i.e. improve learning platforms with OER extensions, automatic metadata generation and interfaces between OER portals.\r\n\r\nJOINTLY brings together educational and IT experts. Together we develop concepts, for example for OER-promoting infrastructures. Ideas and concepts are presented in transfer workshops and discussed in the community;  IT concepts are previously tested in the \"OER-IT laboratory\".\r\n\r\nJOINTLY 4 OER - Just JOIN!  - http://www.jointly.info/interesse\r\n\r\nJOINTLY is a collaborative project of iRights e.V., the University of Applied Sciences Lübeck, edu-sharing NETWORK e.V. and the GWDG."
                        },
                        {
                          "@language": "de",
                          "@value": "JOINTLY organisiert Kooperationsaktivitäten zwischen OER-Akteuren und unterstützt OER-Multiplikatoren darin, ihre  offenen Bildungsmaterialien zu entwickeln und zu verbreiten. \r\n\r\nIm „OER-Contentbuffet“ können sie kooperieren und gemeinsam Inhalte für OER-Qualifzizerungs- und Sensibilisierungsmaßnahmen sammeln, für ihre Zielgruppen aufbereiten und die Qualität sichern. JOINTLY organisiert dafür Workshops und ExpertInnen-Unterstützung, Webinare, Lehrgänge und vieles mehr. \r\nIn Entwicklerkooperationen, deren Ergebnisse Open Source, also frei nutzbar sind, entstehen OER-förderliche Softwarelösungen. JOINTLY organisiert mehrere #Hack4OER-Hackathons, etwa zu OER-Erweiterungen für Lernplattformen, zu automatischer Metadatengenerierung sowie zu Schnittstellen zwischen OER-Portalen.\r\nJOINTLY bringt Bildungs- und IT-ExpertInnen zusammen, gemeinsam entwickeln wir Konzepte, beispielsweise für OER-förderliche Infrastrukturen. Ideen und Konzepte werden in Transferworkshops vorgestellt und in der Community diskutiert; IT-Konzepte werden zuvor in der „OER-IT-Werkstatt“ erprobt.\r\n\r\nJOINTLY 4 OER – Just JOIN!  -  http://www.jointly.info/interesse\r\n\r\nJOINTLY ist ein Verbundprojekt von iRights e.V., der Fachhochschule Lübeck, dem edu-sharing NETWORK e.V. und der Gesellschaft für die Wissenschaftliche Datenverarbeitung Göttingen."
                        }
                      ],
                      "image": "http://wp.edu-sharing.de/jointly/wp-content/uploads/sites/14/2016/11/jointly-Logo.svg",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "OER_JOINTLY: Qualifizierung und kooperative Unterstützung für OER - Ein Buffet der Kooperation"
                        },
                        {
                          "@language": "en",
                          "@value": "OER_JOINTLY: Qualification and cooperative support for OER - A buffet of cooperation"
                        }
                      ],
                      "startTime": "2016-11-01"
                    },
                    "startTime": "2018-04-08T16:26:39.779+02:00"
                  },
                  {
                    "@id": "urn:uuid:42d54531-02ee-4ca6-b586-bcf281f08e08",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:f28009b2-3b5e-11e5-8709-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Open University (OU) is a public distance learning and research university, and one of the biggest universities in the UK for undergraduate education. The OU provides around 5% of its course materials as free open educational content every year."
                        }
                      ],
                      "image": "http://www.open.ac.uk/ouheaders/gui/sprite-x3.png?1.0.1.56",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "Milton Keynes",
                          "addressRegion": "GB.MK",
                          "postalCode": "MK7 6AA",
                          "streetAddress": "Walton Hall"
                        },
                        "geo": {
                          "lat": 52.02493,
                          "lon": -0.71087
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The Open University"
                        }
                      ]
                    },
                    "startTime": "2018-03-19T09:50:25.59+01:00"
                  },
                  {
                    "@id": "urn:uuid:c419dfbf-1e08-40c2-98a4-fc81ed74938f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:064bdf30-37f5-46ec-b9b3-95ea17f69f74",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Institute for the Study of Knowledge Management in Education (ISKME), is a 501(c)(3) non-profit organization founded in 2002. Located in Half Moon Bay, California, its mission is to help schools, colleges, and other educational institutions to gather and use data, share information, and make knowledge openly accessible to students, educators, and the public."
                        }
                      ],
                      "image": "https://oercommons.s3.amazonaws.com/media/upload/landingpages/design-challenge/slides/08072013_ISKME-Logo-copy.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Half Moon Bay",
                          "addressRegion": "US.CA",
                          "postalCode": "94019",
                          "streetAddress": "323 Harvard Ave"
                        },
                        "geo": {
                          "lat": 37.4635519,
                          "lon": -122.4285862
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Institute for the Study of Knowledge Management in Education"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T11:50:39.714Z"
                  },
                  {
                    "@id": "urn:uuid:0a485c6c-a5c3-4231-a977-5d4d0ecb06a0",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8b02602c-ee34-4396-89ee-4e259b9322a1",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "From the text of the tender: \n\n\"As part of the Fellowships for Innovations in Higher Education programme, the Ministry of Culture and Science of the State of North Rhine-Westphalia and the Stifterverband  are announcing again for Teachers who work at state-run universities or at state-financed universities in the State of North Rhine-Westphalian up to 40 fellowships for innovations in digital higher education in 2019. Fellowships can also be awarded to lecturers who cooperate with a university didactician or a teaching researcher or with a lecturer from another subject or university (tandem fellowships). Both applicants must be employed at a state-run higher education institution or at a state-financed higher education institution in North Rhine-Westphalia.\n\nThe aim of the programme is,\n\n* To create incentives for the development and testing of digitally supported teaching and examination formats (e.g. MOOCS, flipped/inverted classroom, games, simulations, e-exams) or the redesign of modules and study sections using digital technologies;\n* to promote the exchange on (digital) university teaching and the dissemination of the teaching innovations developed by networking the Fellows;\n* to contribute to the sustainability of digital higher education teaching in the universities themselves\".\n\nThe following paragraph concerning the use of open licences is also included in the call for tenders:\n\n\"The digital teaching/learning materials developed in the context of the Fellowship must be placed in the future state-wide online portal for studies and teaching in NRW (heureka.nrw) as Open Educational Resources (at least under the licence CC BY-SA 4.0 DE).\"\n\nTranslated with www.DeepL.com/Translator"
                        },
                        {
                          "@language": "de",
                          "@value": "Aus dem Text der Ausschreibung: \n\n\"Im Rahmen des Programms Fellowships für Innovationen in der Hochschullehre schreiben das Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen und der Stifterverband für Lehrende, die an Hochschulen in staatli-cher Trägerschaft oder an staatlich refinanzierten Hochschulen des Landes Nordrhein-Westfalen tätig sind, 2019 erneut bis zu 40 Fellowships für Innovationen in der digitalen Hochschullehre aus. Es können auch Fellowships an Lehrende vergeben werden, die mit ei-nem/einer Hochschuldidaktiker/in oder einem/einer Lehr-/Lernforscher/in oder mit einem/einer Lehrenden aus einem anderen Studienfach oder von ei-ner anderen Hochschule kooperieren (Tandem-Fellowships). Beide Antragstel-ler/innen müssen an einer Hochschule in staatlicher Trägerschaft oder an einer staatlich refinanzierten Hochschule des Landes Nordrhein-Westfalen tätig sein.\n\nZiel des Programms ist es,\n\n* Anreize für die Entwicklung und Erprobung digital gestützter Lehr- und Prüfungsformate (beispielsweise MOOCS, flipped/inverted classroom, Games, Simulationen, E-Prüfungen) oder die Neugestaltung von Modu-len und Studienabschnitten unter konsequenter Nutzung digitaler Technologien zu schaffen;\n* den Austausch über (digitale) Hochschullehre und die Verbreitung der entwickelten Lehrinnovationen durch eine Vernetzung der Fellows zu befördern;\n* zur Verstetigung digitaler Hochschullehre in den Hochschulen selbst beizutragen.\"\n\nIn der Ausschreibung findet sich weiterhin folgender Absatz bezüglich der Verwendung von offenen Lizenzen:\n\"Die im Kontext des Fellowship entwickelten digitalen Lehr-/Lernmaterialien müssen im zukünftigen landesweiten Onlineportal für Studium und Lehre in NRW (heureka.nrw) als Open Educational Ressources (mindestens unter der Lizenz CC BY-SA 4.0 DE) eingestellt werden.\"\n\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Fellowships for Innovations within digital higher education teaching (2019)"
                        },
                        {
                          "@language": "de",
                          "@value": "Fellowships für Innnovationen in der digitalen Hochschullehre (2019)"
                        }
                      ]
                    },
                    "startTime": "2019-04-03T12:39:46.611Z"
                  },
                  {
                    "@id": "urn:uuid:cadcda89-057b-4763-bf82-44e29274165f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0d2da4ae-5446-4b4f-9c5a-119369bedd51",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>ELIXIER is a community resource pool of the German National Education Server, the German Education Server and the National Media Institute. <div>The offer includes links to 60.000 editorial chosen educational media of which almost 10% are creative commons licensed.</div></p>"
                        },
                        {
                          "@language": "de",
                          "@value": "ELIXIER ist der gemeiname Ressourcenpool der Bildungsserver der Länder, des Deutschen Bildungsservers und des FWU. Das Angebot umfasst Links zu etwa 60.000 redaktionell ausgewählten Bildungsmedien, von denen annähernd 10% Creative Commons-lizenziert sind. \r\n\r\nIn der Pariser OER Deklaration der UNESCO vom Juni 2012 heißt es, die Entwicklung nutzerfreundlicher Werkzeuge, um freie Bildungsmedien auffindbar und zugänglich zu machen, welche spezifisch und relevant für individuelle Bedarfe sind, solle unterstützt werden. Freie Inhalte im Bildungswesen sollten an zentraler Stelle leicht auffindbar, strukturiert, inhaltlich geprüft, als frei gekennzeichnet und idealerweise bereits didaktisch aufbereitet sein. \r\n\r\nDieser Aufgabe widmen sich die Bildungsserver in Deutschland schon seit ihrer Gründung und damit natürlich auch deren Kooperationsprojekt ELIXIER. Um die rechtlich unbedenkliche Verwendbarkeit und \"Remixability\" der mit ELIXIER recherchierbaren Inhalte zu erleichtern, gibt es daher in ELIXIER einen speziellen Bereich von Ressourcen, die unter freien Lizenzen, insbesondere einer der Creative Commons-Lizenzen stehen."
                        }
                      ],
                      "image": "http://www.bildungsserver.de/elixier/style/img/main-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Frankfurt am Main",
                          "addressRegion": "DE.HE",
                          "postalCode": "60486",
                          "streetAddress": "Schloßstr. 29"
                        },
                        "geo": {
                          "lat": 50.12254,
                          "lon": 8.638396
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "ELIXIER"
                        },
                        {
                          "@language": "de",
                          "@value": "ELIXIER"
                        }
                      ]
                    },
                    "startTime": "2018-04-06T12:55:21.379+02:00"
                  },
                  {
                    "@id": "urn:uuid:9c0bd285-c120-4019-a71c-6e35b66276e9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:33dce0c0-9983-481d-841b-aea3545bbd26",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The mission of SUNY Geneseo Milne Library is to connect the College community to information, ideas, and works of imagination. To support the College as a center of excellence in undergraduate education, we provide instruction and expertise in the organization, evaluation, and use of information resources. We strive to create an intellectual environment that promotes the search for knowledge and a passion for lifelong learning."
                        }
                      ],
                      "image": "https://www.geneseo.edu/sites/default/files/sites/library/milne_logo-suny-geneseo-Horizontal-Transparent-800px.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "New York",
                          "addressRegion": "US.NY",
                          "postalCode": "14454",
                          "streetAddress": "College Circle 1"
                        },
                        "geo": {
                          "lat": 42.7965185,
                          "lon": -77.8206437
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "SUNY Geneseo Milne Library"
                        }
                      ]
                    },
                    "startTime": "2018-12-15T16:26:28.210Z"
                  },
                  {
                    "@id": "urn:uuid:a1a09ed7-c4a2-4e19-98d1-19e34c33b5dd",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4b0ce58c-4705-4116-9700-32b2f6e43c42",
                      "@type": "Action",
                      "description": [
                        {
                          "@language": "de",
                          "@value": " In einer ersten Pilotphase werden sich 20 Lehrkräfte an zehn Schulen der Entwicklung innovativer digitaler Bildungsmaterialien und Bildungsformate widmen. Im Mittelpunkt der Arbeit steht zunächst die Erstellung von offen lizenzierten digitalen Lehr- und Lernmaterialien (Open Educational Resources, OER) und deren Einbindung in den jeweiligen Fachunterricht.\r\n\r\nDie Senatsverwaltung für Bildung, Jugend und Familie berät und qualifiziert die Digitalbotschafterinnen und Digitalbotschafter und stellt ihnen zur gemeinsamen Entwicklung und Veröffentlichung der Lehr- und Lernmaterialien eine OER-Medienplattform zur Verfügung. Die integrierte Softwarelösung wird zunächst als Testversion laufen, und nach einer Probephase allen Berliner Lehrkräften zur Verfügung stehen. Berliner Lehrende werden durch die Plattform unterstützt, rechtssicher zu lizenzieren und zu veröffentlichen. Open Educational Resources können dabei in jeder Form vorliegen: Arbeitsblätter, Bücher, Videos, Apps oder Unterrichtseinheiten und Lehrszenarien."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10117"
                        },
                        "geo": {
                          "lat": 52.5170365,
                          "lon": 13.3888599
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Digitalbotschafterinnen und -botschafter für Berliner Schulen"
                        }
                      ]
                    },
                    "startTime": "2018-05-15T10:42:33.024Z"
                  },
                  {
                    "@id": "urn:uuid:70f5572e-12f8-4b81-beca-db6d87588583",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:edb4045b-0a1c-4f72-b302-4568d09f36ef",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Open Education Global Conference is where the world meets to discuss how opening education helps us achieve universal access, equity, innovation and opportunity in education. The OE Global conference is the most internationally diverse conference devoted exclusively to open education, attracting researchers, practitioners, policy makers, educators and students from more than 35 countries to discuss and explore how Open Education advances educational practices around the world.\r\n\r\nOE Global 2018 will take place from 24-26 April 2018 in Delft, the Netherlands, hosted by the Open Education Consortium and Delft University of Technology. The theme of OE Global 2018 is Transforming Education through Open."
                        }
                      ],
                      "image": "http://conference.oeconsortium.org/2018/wp-content/themes/conf2018/images/logo.svg",
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "Delft",
                          "addressRegion": "NL.ZH",
                          "postalCode": "2628CC",
                          "streetAddress": "TU Delft Aula Conference Centre, 5 Mekelweg"
                        },
                        "geo": {
                          "lat": 52.002109,
                          "lon": 4.373221
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Global Conference 2018"
                        }
                      ]
                    },
                    "startTime": "2018-04-26T22:49:27.406Z"
                  },
                  {
                    "@id": "urn:uuid:1bb032db-b5a4-49cc-9b5c-e272aed1c99f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:af927952-0194-4ff2-8bd8-9343e149f0e9",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "pt",
                          "@value": "O objetivo desta proposta foi realizar a formação dos professores da Universidade Federal de Mato Grosso do Sul para iniciar as reflexões sobre a educação aberta, os recursos educacionais abertos e as licenças flexíveis a partir de uma perspectiva de criação, produção, adaptação e disseminação de recursos e materiais educativos.\n\nA formação foi organizada em duas etapas. Na primeira etapa (presencial) abordamos  o histórico, conceitos e princípios dos Recursos Educacionais Abertos (REA), passando por fundamentos da cultura digital e da cultura livre, que são pano de fundo dos REA. Na segunda etapa (online) os participantes tiveram a oportunidade de fazer uma autoavaliação sobre práticas abertas e realizar uma curadoria de um REA.\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "BR",
                          "addressLocality": "Campo Grande",
                          "postalCode": "79070-900",
                          "streetAddress": "Avenida Senador Antônio Mendes Canale"
                        },
                        "geo": {
                          "lat": -20.5045581,
                          "lon": -54.6135331151763
                        }
                      },
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Curso de Formação Inicial em REA (UFMS)"
                        }
                      ]
                    },
                    "startTime": "2019-04-09T09:53:17.281Z"
                  },
                  {
                    "@id": "urn:uuid:425ec7a3-b590-4da5-92d0-825a4e262507",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:446e6f66-a51d-4ee0-a8ad-68063c11333f",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "“The idea is simple: to publish all of our course materials online and make them widely available to everyone.”\nDick K.P. Yue, Professor, MIT School of Engineering \n\nMIT OpenCourseWare is often considered to be the start of the OER movement. Since 2002 it has published  more than 2400 courses, which have been visited by more than 300 million users. "
                        }
                      ],
                      "image": "http://ocw.mit.edu/images/ocw_mast.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "MIT OpenCourseWare"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T17:21:03.975Z"
                  },
                  {
                    "@id": "urn:uuid:903b76a5-aa9e-4f2d-9e45-3471a12daed6",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8d8beef8-bdd7-4e4a-bea1-199edfce992b",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:706a1dcc-77eb-11e5-9f9f-c48e8ff4ea31"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Lord Fairfax Community College (LFCC) received a Round 4, Trade Adjustment Assistance Community College and Career Training (TAACCCT) grant that is designed to help people put “Knowledge to Work.” As a key feature of this grant, LFCC created the KnowledgeToWork.com web portal for personalized learning tied to competencies using open educational resources (OER).\r\nKnowledgeToWork.com uses nationally-recognized competency frameworks mapped to instructional content. The portal focuses on career pathways in high-wage, high-growth industries: information technology (IT), including cybersecurity and network administration; health care, including health information management (HIM) and IT in healthcare; and manufacturing, including soft skills and supervision. KnowledgeToWork.com was designed to meet the needs of three audiences: learners, job seekers, and employers. For learners, it provides access to free and low-cost educational resources (including OER) for learning skills and competencies and offers personalized learning plans with customized dashboards to track progress. For job seekers, it enables them to explore career pathways with job search tools to find employers. For employers, it helps them manage the talent pipeline with competencies and to find and use training and professional development resources at lower cost."
                        }
                      ],
                      "image": "https://www.knowledgetowork.com/img/k2w-logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Knowledge to Work"
                        }
                      ]
                    },
                    "startTime": "2018-02-06T21:12:01.899+01:00"
                  },
                  {
                    "@id": "urn:uuid:1f3dac78-d4e4-4ee1-992c-14420adc01b2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8f12c375-7142-4398-8fc6-0cac0cff8587",
                      "@type": "Organization",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Braunschweig",
                          "addressRegion": "DE.NI",
                          "postalCode": "38100",
                          "streetAddress": "Am Fallersleber Tore 1"
                        },
                        "geo": {
                          "lat": 52.269718,
                          "lon": 10.53055
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "TU Braunschweig, Projektgruppe Lehre und Medienbildung"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:47:08.530Z"
                  },
                  {
                    "@id": "urn:uuid:9da8a924-1e35-481a-83c6-f2cc67392112",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5a3bb8ed-5657-483f-b297-659c08b592e7",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The OER Policy Development Tool supports institutions in fomulating their own OER policy by providing pre-formulated text blocks, which can be combined according to the individual needs of the institution."
                        }
                      ],
                      "location": {},
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Policy Development Tool"
                        }
                      ]
                    },
                    "startTime": "2017-12-05T21:04:35.109+01:00"
                  },
                  {
                    "@id": "urn:uuid:5465a5d0-7b9e-44c8-835b-3d417e8b0120",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b59fb65a-f3a6-4228-b4cf-86b995ae6b50",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The University’s mission is the creation, dissemination and curation of knowledge.\r\n\r\nAs a world-leading centre of academic excellence we aim to:\r\n\r\n- Enhance our position as one of the world’s leading research and teaching universities and to measure our performance against the highest international standards\r\n- Provide the highest quality learning and teaching environment for the greater wellbeing of our students\r\n- Produce graduates fully equipped to achieve the highest personal and professional standards\r\n- Make a significant, sustainable and socially responsible contribution to Scotland, the UK and the world, promoting health and economic and cultural wellbeing.\r\n\r\nAs a great civic university, Edinburgh especially values its intellectual and economic relationship with the Scottish community that forms its base and provides the foundation from which it will continue to look to the widest international horizons, enriching both itself and Scotland."
                        }
                      ],
                      "image": "https://www.ed.ac.uk/sites/all/themes/uoe/assets/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "Scotland",
                          "addressRegion": "GB.EB",
                          "postalCode": "EH8 9YL",
                          "streetAddress": "South Bridge"
                        },
                        "geo": {
                          "lat": 55.94743165,
                          "lon": -3.18651744851981
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The University of Edinburgh"
                        }
                      ]
                    },
                    "startTime": "2019-02-05T20:38:23.477Z"
                  },
                  {
                    "@id": "urn:uuid:28c72e7f-cbbd-4ff5-abef-ae07fe4f1603",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:374cce8a-2fbc-11e5-a656-001999ac7927",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "BCcampus is a publicly funded organization that aims to unify B.C.'s post-secondary system and make higher education available to everyone, through the smart use of collaborative information technology services."
                        }
                      ],
                      "image": "https://bccampus.ca/wp-content/themes/wordpress-bootstrap-child/images/bccampus-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "CA",
                          "addressLocality": "Vancouver",
                          "addressRegion": "CA.BC",
                          "postalCode": "V6B 3H6",
                          "streetAddress": "200-555 Seymour Street"
                        },
                        "geo": {
                          "lat": 49.28341,
                          "lon": -123.11498
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "BCcampus"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:25:01.488Z"
                  },
                  {
                    "@id": "urn:uuid:f4720c9c-b7b6-4ea0-b9aa-7b160521f7d9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c71b92e2-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Wikiwijs is a public platform use to create (web based) OER materials. It also offers a search engine and all materials are downloadable in open standards in order to be integrated in other educational platforms within the Netherlands. It is provided for by Kennisnet.\r\n\r\nIts main area is now Primary, Secondary and Vocational Institutions but is also used by Universities (of Applied Science)"
                        }
                      ],
                      "image": "https://www.kennisnet.nl/fileadmin/kennisnet/_processed_/a/a/csm_wikiwijs_ba09c74ad8.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Wikiwijs"
                        }
                      ]
                    },
                    "startTime": "2018-05-04T10:37:57.210Z"
                  },
                  {
                    "@id": "urn:uuid:6e58729c-b318-4adc-9201-98f016a34a8b",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e9854e6d-be3d-4ef0-93e4-c3bc01fab07f",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "In cooperation with the OER19 conference team and the Centrum Cyfrowe, the OER World Map project organizes the first OER POLICY Lab. The event will take place one day before the start of the official OER19 conference:\n\nThis satellite event of OER19 will aim at: \n\n* Develop a global network of OE Policy Experts who want to cooperate in order to facilitate global mainstreaming of Open Education\n*  Identifying new functionality needed for the OER Policy Registry\n* Collecting global OER policies, with a special focus on Europe\n\n* The new OER policy registry: https://oerworldmap.org/oerpolicies?language=en \n* Agenda: https://kurzelinks.de/ced9\n* Etherpad with outcome: https://etherpad.wikimedia.org/p/oerpolicylab\n* Hashtag: #OERPolicyLab - https://twitter.com/search?q=%23OERPolicyLab&src=typd\n "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "IE",
                          "addressLocality": "Galway City",
                          "addressRegion": "IE.GY",
                          "postalCode": "H91 E1NY",
                          "streetAddress": "Lower Newcastle Road"
                        },
                        "geo": {
                          "lat": 53.2796576,
                          "lon": -9.06226384917072
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Policy Lab @OER19"
                        }
                      ]
                    },
                    "startTime": "2019-04-05T11:02:56.372Z"
                  },
                  {
                    "@id": "urn:uuid:2837f6a7-1468-4d57-91ee-a280cea685ff",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7a98b2af-4f90-4b50-aa3e-f669c15d7c45",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Wiki In Africa, a non-profit organisation that is based in South Africa, was founded in November 2016 and legally registered in March 2017 as a financial and legal structure that operates global initiatives in support of the WikiAfrica movement.\n\nOur objective is to empower and engage citizens of Africa and its diaspora to collect, develop and contribute educational and relevant content that relates to the theme of Africa under a free license; and to engage in global knowledge systems by encouraging access to, awareness of, and support for open knowledge, the open movement and the Wikimedia projects, working in collaboration with like-minded organisations."
                        }
                      ],
                      "image": "https://www.givengain.com/content_cause/images/logos/9/2/6/3/KYXQVHISOG_original.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "ZA",
                          "addressLocality": "Western Cape",
                          "addressRegion": "ZA.WC",
                          "postalCode": "7995",
                          "streetAddress": "Runciman Drive"
                        },
                        "geo": {
                          "lat": -34.1944602,
                          "lon": 18.4293186
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Wiki In Africa"
                        }
                      ]
                    },
                    "startTime": "2019-03-14T21:11:38.496Z"
                  },
                  {
                    "@id": "urn:uuid:6211a8b0-e786-427b-94ea-cc1edf970dd9",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Serlo is a quite unique initiative which reached significant size an quality while being driven consequently bottom up. Serlo was funded by studends and still most contents are developed by studends."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:6fc9d260-23bb-11e5-bba4-001999ac7927",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Serlo is an open online learning platform used by hundreds of thousands school and university students each month. All learning resources on Serlo are free of charge and without advertisement. Like on Wikipedia, every user can create new content or improve upon existing materials. "
                        },
                        {
                          "@language": "de",
                          "@value": "Serlo ist eine freie Online-Lernplattform, mit der monatlich hunderttausende Schüler und Studenten lernen. Die Plattform bietet einfache Erklärungen, tausende Aufgaben und Musterlösungen komplett kostenlos und werbefrei. Wie bei der Wikipedia kann jeder Nutzer neue Inhalte erstellen und vorhandene Inhalte verbessern. Serlo arbeitet an der Vision, hochwertige Bildung weltweit frei verfügbar zu machen.\r\n\r\nAlle Inhalte sind nach Themen sortiert, Lehrplänen zugeordnet und in unser pädagogisches Konzept integriert. Aktuell lernen 774.000 Personen pro Monat auf Serlo.\r\n\r\nSeit 2016 sind wir mit den Serlo Lab Schools in das Nachmittagsangebot von Schulen integriert und begleiten SchülerInnen direkt vor Ort beim selbstständigen Lernen mit serlo.org. Wie Sie als Lehrkraft serlo.org gewinnbringend für Ihren Unterricht einsetzen können, erfahren Sie in unserem Handbuch für LehrerInnen."
                        }
                      ],
                      "image": "https://de.serlo.org/attachment/file/59786/6585",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Serlo.org"
                        },
                        {
                          "@language": "de",
                          "@value": "Serlo.org"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:27eb3c53-a0e0-44e8-93e2-4e85c7ba7cc1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b6e2156c-5954-47a8-843d-8a8c72b3103c",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Solvonauts is about Open Education, Open Data, Open Source – basically trying to be as open as possible in as many ways as possible.\r\n\r\nWe’re working towards creating an open source open educational resource repository any one can install and run. The goal is that people anywhere can curate and maintain a list of open resources and then share them with the world, allowing different communities and organisations to be express how they want to use open content. We’ve aimed to take the spirit of openness in this sense, and try to extend it to everything we do."
                        }
                      ],
                      "image": "http://solvonauts.org/community/wp-content/uploads/2013/11/front_page_logo-300x216.png",
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressLocality": "England",
                          "addressRegion": "GB.LI"
                        },
                        "geo": {
                          "lat": 52.7954791,
                          "lon": -0.540240286617432
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Solvonauts"
                        }
                      ]
                    },
                    "startTime": "2018-03-30T10:35:40.683+02:00"
                  },
                  {
                    "@id": "urn:uuid:0051101b-cea2-40f6-8fa7-3206b6ae6980",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e59165e4-09e4-4bdb-81dc-e345584ae6e9",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:6c6f56ed-3865-4f17-8e72-1cdf356c1299"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "On Friday, March 8, 2019 beginning at 00:00 GMT and going for 24 hours, the Open Education Week 24 Hour Web-a-thon team will host and share 24 hours of open education presentations (maximum 30 minutes each presentation) with interested open advocates around the world. If you're interested in participating as a presenter keep an eye out for our call for presentations. If you would like to assist as a co-host in your region, please reach out by email!"
                        }
                      ],
                      "image": "https://www.oeconsortium.org/wp-content/uploads/2018/10/oew-logo@2x.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Week 2019 24 Hour Web-a-thon"
                        }
                      ],
                      "startTime": "2018-12-08"
                    },
                    "startTime": "2018-12-08T09:55:56.589Z"
                  },
                  {
                    "@id": "urn:uuid:7810ee2a-53ae-4a56-b4ed-110eb4fd192c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e0f344db-6c77-4a31-9112-dc98c29a6195",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "In the beginning of 2018, the TU Delft presented a new strategic framework for the coming years: the Strategic Framework 2018-2024.\n\nThis Strategic Framework serves as a high-level compass for TU Delft, and provides guidelines for the myriad decisions, both big and small, that are taken in every part and level of the University.\n\nThe framework mentions Open Education and Open Educational Resources several times:\n\nPage 11:\n\"We promote and facilitate Open Education. We strengthen online education.\"\n\nPage 20: \n\"We make Open Educational Resources part of TU Delft’s education policy by:\n\n* Structurally supporting lecturers and students with the use of such means.\n* Encouraging lecturers to publish their educational material under an open license.\n* Making open education part of the basic teaching qualification programme and the evaluation criteria of courses.\n* Replacing commercial textbooks by open resources in all BSc programmes as much as possible.\"\n\nPage 36:\n\"We value a variety of career paths for our academic staff that each in its own way contributes to the various goals and values of TU Delft. To this end, the R&O cycle will include a more explicit recognition of:\n\n* Education. We strengthen a culture and create a career structure that gives academic staff the opportunity to excel in education, educational leadership and/or educational research.\n* Team effort. We value each person’s individual contribution to team performance.\n* Impact activities, knowledge transfer and outreach. For example, we will explore the option to have an impact paragraph in PhD dissertations and Master’s theses.\n* Engagement with Open Science and Open Education. For example, we support (inter) national initiatives aimed at finding alternative indicators that positively value open access publications\"\n\nPage 47:\n\"We support the implementation of Open Science and Open Education. In particular, we: \n\n* Facilitate a central place of support for researchers who want to use open source software.\n* Implement a TU Delft policy for research data, and enable researchers to control their own research data in accordance with this policy.\n* Create low-barrier data management systems across the research lifecycle, and involve researchers in contributing to TU Delft’s policy for research data management.\n* Set up an integrity policy that protects scientific data and personal data in line with the EU directives.\""
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "NL"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Impact for a  better society: TU Delft Strategic Framework 2018-2024"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T14:26:11.891Z"
                  },
                  {
                    "@id": "urn:uuid:8064223f-b28a-4776-919e-35f787f25cd8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:34e7c4d3-0a51-4a39-93f4-ea07dbe3e30f",
                      "@type": "Action",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "GreenSkills4VET provides knowledge and skills for trainees AND teachers / trainers in Logistics & Health Care. Learn about sustainability and generate *green* competences in your workplace. The core result of the project is the GreenSkills4VET-LearnBox, which can be found on greenskills4vet.eu in the form of Learning-Units and additional, methodical-didactical materials. They all have been published as OER and can be downloaded here."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressRegion": "DE.NI"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "GreenSkills4VET"
                        }
                      ],
                      "startTime": "2016-10-01"
                    },
                    "startTime": "2019-03-13T08:11:56.162Z"
                  },
                  {
                    "@id": "urn:uuid:7778c48b-16b1-4641-8784-1cf7d64c90b3",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "KlasCement is an amazing example for governments, which engage in OER by taking over a recognized grassroots initiative, assuring its sustainability and expanding its reach."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:bfb0ecf4-792b-4e03-b6d5-6311a494c8f1",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "KlasCement is a free OER-platform where teachers help each other by sharing resources for students of all ages (kindergarten, special needs, primary and secondary education and teacher training). \r\n\r\nKlasCement started as a project of one teacher and his students in 1998 and grew thanks to the help of many teachers and the Ministry of Education (MoE) in Flanders to one of the most successful OER-networks in Europe. Since 2013 KlasCement is part of the MoE. \r\nIn December 2017 KlasCement had 47000 resources shared by more than 125000 members. \r\n\r\nThe website is very well known and used by teachers in Flanders. The metadata is adjusted to teachers from the Netherlands so they can use the portal as well and the interface is also translated to English, which makes international use possible. "
                        }
                      ],
                      "image": "https://www.klascement.net/template/default/img/layout/logo_en.png",
                      "location": {
                        "address": {
                          "addressCountry": "BE",
                          "addressLocality": "Brussel",
                          "postalCode": "1210",
                          "streetAddress": "Koning Albert II-laan 15"
                        }
                      },
                      "name": [
                        {
                          "@language": "nl",
                          "@value": "KlasCement.net"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:b16a2953-6d5e-4a50-b6a6-9569b9f5b49c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:90e1068a-00d4-41d7-a8d4-0f9420fadb15",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The <i>tutory UG (haftungsbeschränkt)</i> is a startup based in Leipzig/Berlin, Germany which offers a free OER-editor called <i>tutory</i>."
                        }
                      ],
                      "image": "https://www.tutory.de/static/images/logo_full_right.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Leipzig",
                          "addressRegion": "DE.SN",
                          "postalCode": "4177",
                          "streetAddress": "Endersstraße 33"
                        },
                        "geo": {
                          "lat": 51.333553,
                          "lon": 12.328219
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "tutory UG (haftungsbeschränkt)"
                        }
                      ]
                    },
                    "startTime": "2019-03-26T07:12:42.481Z"
                  },
                  {
                    "@id": "urn:uuid:caf83371-7d2b-43b3-a9d1-11a57e31bed2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:bfb0ecf4-792b-4e03-b6d5-6311a494c8f1",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "KlasCement is a free OER-platform where teachers help each other by sharing resources for students of all ages (kindergarten, special needs, primary and secondary education and teacher training). \r\n\r\nKlasCement started as a project of one teacher and his students in 1998 and grew thanks to the help of many teachers and the Ministry of Education (MoE) in Flanders to one of the most successful OER-networks in Europe. Since 2013 KlasCement is part of the MoE. \r\nIn December 2017 KlasCement had 47000 resources shared by more than 125000 members. \r\n\r\nThe website is very well known and used by teachers in Flanders. The metadata is adjusted to teachers from the Netherlands so they can use the portal as well and the interface is also translated to English, which makes international use possible. "
                        }
                      ],
                      "image": "https://www.klascement.net/template/default/img/layout/logo_en.png",
                      "location": {
                        "address": {
                          "addressCountry": "BE",
                          "addressLocality": "Brussel",
                          "postalCode": "1210",
                          "streetAddress": "Koning Albert II-laan 15"
                        }
                      },
                      "name": [
                        {
                          "@language": "nl",
                          "@value": "KlasCement.net"
                        }
                      ]
                    },
                    "startTime": "2018-03-20T10:50:06.528+01:00"
                  },
                  {
                    "@id": "urn:uuid:054ab12c-3533-4144-9b7d-1e6780c86aff",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7bfe09c5-9d77-448f-929c-903d591293e7",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Am 28. + 29. Januar 2019 findet in Luzern die erste Konferenz zur Förderung, Sensibilisierung und Weiterentwicklung von OER an Schweizerischen Hochschulen und der Vernetzung und Zusammenarbeit in nationalen und internationalen Projekten statt. Die vielschichtigen Aspekte von Open Education Resources sollen aufgezeigt, kontrovers diskutiert und der Meinungsbildungsprozess unterstützt werden.\n\nOn January 28 & 29, 2019, the first conference to promote, raise awareness and further develop OER at Swiss universities and to intensify networking and cooperation in international projects will take place in Lucerne. The multifaceted aspects of Open Education Resources shall be made visible,  controversially discussed and support the opinion-forming process."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "CH",
                          "addressLocality": "Luzern",
                          "addressRegion": "CH.LU",
                          "postalCode": "6002",
                          "streetAddress": "Frohburgstrasse 3"
                        },
                        "geo": {
                          "lat": 47.0505452,
                          "lon": 8.3054682
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Internationale Konferenz zu OER 2019"
                        },
                        {
                          "@language": "en",
                          "@value": "International Conference OER 2019"
                        }
                      ]
                    },
                    "startTime": "2019-01-29T20:24:46.904Z"
                  },
                  {
                    "@id": "urn:uuid:e798aa60-a50b-4b7c-8666-f941283ca92a",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Creative Commons certainly is one of the widest shining lighthouses in the field of OER. CC-licenses have become a synonym for open licensing in general. Who steps into OER has to deal with CC-licenses. So CC is kind of unavoidable."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0a7536ac-3b85-11e5-be26-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Creative Commons (CC) is a global non-profit organization at the center of a high-profile, international movement to promote sharing of creativity and knowledge. Its goal is to help realize the full potential of the Internet—universal access to research and education, full participation in culture—to drive a new era of development growth, and productivity. CC provides the well-known suite of licenses that have become the global standard used by leading companies, institutions and individuals across culture, education, government, science, and more to promote digital collaboration and innovation. \r\nThe CC licenses are everywhere—1.1 billion+ CC licenses in use across 9 million websites—making it easy for anyone to use and re-use content. For example, CC licenses help the world gain access to NASA’s most iconic images from space, help educators create curriculum that will bring down the cost of college for everyone, and allow scientists to freely share their work with medical professionals around the world. CC also works with foundations and governments to ensure that when they fund new content, like research and educational materials, those materials are made available for us to freely use, share, and improve."
                        }
                      ],
                      "image": "http://mirrors.creativecommons.org/presskit/logos/cc.logo.large.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressRegion": "US.CA"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Creative Commons"
                        }
                      ]
                    },
                    "startTime": "2018-06-05T10:03:05.895Z"
                  },
                  {
                    "@id": "urn:uuid:053f92d8-8045-4dd4-941c-8c8d84427e43",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7308d4fc-e6bf-43a9-bd3b-136255757fc6",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "National Expert Group for Open Education is one of the four Expert Groups in Finnish National Open Science and Scholarship Coordination.\n\nThe aim of the Expert Group is to support the use and development of open educational resources and practices in Finland by 1) developing national open education policies, 2) developing and spreading word about good open education practices, 3) helping to develop the necessary infrastructure for open educational resources, and 4) communicating about the latest trends of open education to Finnish open education practitioners.\n\nExpert Group is open for all Finnish open education practitioners, enthusiasts and support personnel. The secretary of Expert Group is provided by Federation of Finnish Learned Societies"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "FI",
                          "addressLocality": "Helsinki"
                        },
                        "geo": {
                          "lat": 60.1674086,
                          "lon": 24.9425683
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "National Expert Group for Open Education"
                        }
                      ]
                    },
                    "startTime": "2019-04-16T17:28:24.790Z"
                  },
                  {
                    "@id": "urn:uuid:9f79241d-f98f-4c05-b48f-3e68a591758d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:36229317-1381-452a-ab01-28852e2ef953",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Undergraduate Certificate in First Year Foundations is a 30-credit certificate offered completely online that provides students with a solid foundation in General Education. The certificate is a stackable credential that can be applied toward an undergraduate degree at Thomas Edison State University, satisfying up to half of the general education requirements for a bachelor's degree and all or most of the general education requirements for the Associate in Arts or Associate in Science degrees at the University.  The certificate can be completed using the University's online courses and TECEP® exams, or free open courses in conjunction with an assessment, including TECEP® exams, or a combination of both."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressRegion": "US.NJ",
                          "postalCode": "+ 08608",
                          "streetAddress": "111 W. State St. Trenton"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "First-Year Foundations Certificate"
                        }
                      ]
                    },
                    "startTime": "2018-02-02T14:35:12.663+01:00"
                  },
                  {
                    "@id": "urn:uuid:5e310756-b061-4fd3-85d2-056d9bda434c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8ad792ff-84e8-497e-a2f2-5abaa83d2753",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Openly Available Sources Integrated Search (OASIS) is a search tool that aims to make the discovery of open content easier. OASIS currently searches open content from 73 different sources and contains 171,280 records (December 2018).\n\nOASIS is being developed at SUNY Geneseo's Milne Library in consultation with Alexis Clifton, SUNY OER Services Executive Director."
                        }
                      ],
                      "image": "https://oasis.geneseo.edu/images/OASISwidget.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Openly Available Sources Integrated Search"
                        }
                      ]
                    },
                    "startTime": "2018-12-15T16:34:09.603Z"
                  },
                  {
                    "@id": "urn:uuid:f955ff3f-6538-47fa-b93f-a95d8271278a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:205f3bc6-1439-4fb1-8c0b-ebd1f4f05a58",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:9c135dfb-9ee1-4edf-970a-6920c5735730"
                        },
                        {
                          "@id": "urn:uuid:c2b94b87-5861-444a-b797-3875e800fb78"
                        },
                        {
                          "@id": "urn:uuid:c3c51da6-3a9d-4c15-900f-31e493881ebf"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Initiativen in den Bereichen Open  Access (OA) und Open Educational Resources (OER) verfolgen verstärkt seit Anfang des 21. Jahrhunderts das Ziel einer Öffnung von Wissen. Wie nutzen insbesondere Ingenieurwissenschaftler_innen Open Access und Open Educational Resources und warum tun Sie es unter Umständen noch nicht?\nDiese Frage steht im Fokus des vom Bundesministerium für Bildung und Forschung geförderten Projekts „OpenIng“.\n\nDie TU Darmstadt, TU Braunschweig und Universität Stuttgart untersuchen rechtliche, organisatorische, reputationsbezogene und finanzielle Barrieren und werfen hierbei einen besonderen Blick auf die möglichen Synergien von OA und OER. Die gewonnenen Erkenntnisse werden genutzt, um neue technische und organisatorische Services, Unterstützungsangebote, Info-materialien und Kommunikationskonzepte für die Ingenieurwissenschaften zu entwickeln, zu erproben und zu evaluieren. Die Bereitschaft zur Veröffentlichung von Publikationen und Lehrmaterialien als OA bzw. OER soll bei den Lehrenden in den Ingenieurwissenschaften deutlich intensiviert werden. Eine offene Nachnutzung der entwickelten Angebote durch andere interessierte Einrichtungen ist hierbei selbstverständlich möglich."
                        }
                      ],
                      "image": "http://opening-projekt.rz.tu-bs.de/wp-content/uploads/2018/07/OpenIng_logo_h_1-300x76.png",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "OpenIng"
                        }
                      ]
                    },
                    "startTime": "2019-01-08T07:31:11.136Z"
                  },
                  {
                    "@id": "urn:uuid:dc717a9b-fb83-4539-a0a6-7ba7057aeb83",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7a4886c1-b219-4b8d-a242-b869dcbcb7e5",
                      "@type": "Product",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "H5P makes it easy to create interactive content by providing a range of content types for various needs. Preview and explore these content types below.\r\n\r\nYou can create interactive content by adding the H5P plugin to your WordPress, Moodle or Drupal site, or you can create content directly on H5P.org and embed it on your website."
                        },
                        {
                          "@language": "pt",
                          "@value": "O H5P facilita a criação de conteúdo interativo, fornecendo uma variedade de tipos de conteúdo para várias necessidades. O H5P é um projeto orientado para a comunidade de código aberto. Junte-se à comunidade.\n\n"
                        }
                      ],
                      "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/H5P_Logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "H5P"
                        }
                      ]
                    },
                    "startTime": "2018-06-04T13:49:49.491Z"
                  },
                  {
                    "@id": "urn:uuid:6195c3ce-fbab-4165-90ea-647f40134a59",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place from October the 15th till October the 16th in  Warsaw, Poland."
                        }
                      ],
                      "image": "https://oerpolicy.eu/wp-content/uploads/sites/4/2017/03/oer-policy-forum_logo-e1498825169421.png",
                      "location": {
                        "address": {
                          "addressCountry": "PL",
                          "addressLocality": "Warschau",
                          "addressRegion": "PL.MZ"
                        },
                        "geo": {
                          "lat": 52.2319237,
                          "lon": 21.0067265
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Education Policy Forum 2018"
                        }
                      ]
                    },
                    "startTime": "2018-04-30T08:53:15.816Z"
                  },
                  {
                    "@id": "urn:uuid:d81b7387-e2e0-43a2-ae3e-4ccc551a68a1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:f297cb82-af9c-4b14-91bd-a1c15483ff5a",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Wikipedia ist eine der zehn beliebtesten Websites der Welt. Ihre Inhalte und die aller anderen Wikimedia-Projekte werden von Freiwilligen erstellt, verbessert und verbreitet. Wikimedia Deutschland unterstützt ihre Arbeit vor allem an Wikipedia, Wikimedia Commons, Wikidata, aber auch den kleineren Projekten. Unser Vereinsziel ist es, den freien Zugang zu Wissen zu fördern.\r\n\r\nDafür genügt es nicht, Wissen nur konsumieren zu können. Menschen müssen auch selber Wissen beitragen und formen dürfen. Wir verstehen die Freiwilligen der Wikimedia-Bewegung deshalb als Botschafter des Freien Wissens. Weil Bildung eine Kernaufgabe der gesamten Gesellschaft ist, arbeiten wir einerseits mit diesen engagierten Menschen zusammen, andererseits auch mit Institutionen und Akteuren im politischen Bereich.\r\n\r\nAll dies tun wir nicht alleine, sondern mit Partnern, in einem internationalen Netzwerk mit anderen Wikimedia-Organisationen und mit der Wikimedia Foundation."
                        }
                      ],
                      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Wikimedia_Deutschland_Logo.png/1599px-Wikimedia_Deutschland_Logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10963",
                          "streetAddress": "Tempelhofer Ufer 24/24"
                        },
                        "geo": {
                          "lat": 52.498457075415615,
                          "lon": 13.38120379266911
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Wikimedia Germany e.V."
                        },
                        {
                          "@language": "de",
                          "@value": "Wikimedia Deutschland e.V."
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:24:10.749+02:00"
                  },
                  {
                    "@id": "urn:uuid:863838d5-535f-47d0-8ff4-ae2906ab63a6",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3d3a4921-06a8-4697-bcf0-fb4ad2f460f3",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:e2202c12-1816-45fb-b830-6f7e8dcd66ef"
                        },
                        {
                          "@id": "urn:uuid:b403f5b6-b1b8-4ed5-84df-a34b0000f102"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Etwa einmal im Monat reden A und O in diesem Podcast über das, was man früher mal E-Learning nannte. Alle Folgen sind [CC0](https://creativecommons.org/publicdomain/zero/1.0/)-lizenziert."
                        }
                      ],
                      "image": "https://bldg-alt-entf.de/wp-content/uploads/2018/05/Logo_color_3000px.png",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Bildung + ALT + ENTF"
                        }
                      ],
                      "startTime": "2018-03-12"
                    },
                    "startTime": "2018-11-16T08:25:50.120Z"
                  },
                  {
                    "@id": "urn:uuid:cf3c3806-555c-4fbd-8084-cd34ee166bba",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5be060b1-3276-4419-9e33-26543d91e8a0",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>ZUM contributes to educational ressources by offering various editcational materials, that are openly created and meant to be used freely for any educational cause, especially for school. Given examples for work in progress are different Wikis, ZUMpad and a primary school learning portal.</p>"
                        },
                        {
                          "@language": "de",
                          "@value": "<p>Die ZUM ist durch ihre vielfältigen Angebote eine feste Größe in der deutschen Bildungslandschaft. Ob Wikis, ZUMpad oder Grundschullernportal - die ZUM hat sich von der reinen Downloadplattform zur Mitmachplattform gewandelt. Viele unserer Angebote können direkt im Unterricht genutzt werden.</p>\r\n\r\n<p>Über 200 Mitglieder (Stand November 2017) und eine Vielzahl weiterer Benutzer_innen beteiligen sich mit ganz unterschiedlichen Beiträgen an der ZUM, z.B. mit eigenen Autorenseiten oder über vielfältige Beiträge in den Wikis auf ZUM.de.</p>"
                        }
                      ],
                      "image": "https://wiki.zum.de/images/b/bf/ZUM-Logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Gerabronn",
                          "addressRegion": "DE.BW",
                          "postalCode": "74582",
                          "streetAddress": "Bahnhofstr. 20"
                        },
                        "geo": {
                          "lat": 49.25529,
                          "lon": 9.920757
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Zentrale für Unterrichtsmedien im Internet e. V."
                        },
                        {
                          "@language": "de",
                          "@value": "Zentrale für Unterrichtsmedien im Internet e. V."
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:01:31.439+02:00"
                  },
                  {
                    "@id": "urn:uuid:9329749d-bc8b-4f6e-bfb3-94179763f313",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:35c9cffa-960b-4a32-ac62-533911afafca",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This draft was authored by the Open Scotland initiative which includes representatives of Cetis, SQA, Jisc RSC Scotland, and the ALT Scotland SIG.\n\n\"Scotland has a distinctive and highly regarded tradition of education, the benefits of which can be extended both nationally and internationally through the adoption of open education policies and practice across all sectors of Scottish education.\""
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressRegion": "Scotland"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Scottish Open Education Declaration"
                        }
                      ]
                    },
                    "startTime": "2019-02-28T07:51:58.608Z"
                  },
                  {
                    "@id": "urn:uuid:4ed2bc47-0e10-4556-8c6e-863bb978ca07",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:738088ec-bdf4-4bab-9cb7-4477048b7b78",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Cape Town Open Education Declaration was published on January 22, 2008, sparking a global call to action that has grown into the vibrant open education movement that exists today. In honor of the ten year anniversary, we took a look back at the last decade and identified ten key directions to move open education forward. Click on the cards below to read more about each topic, or consider suggesting your own."
                        },
                        {
                          "@language": "de",
                          "@value": "Die Cape Town Open Education Declaration wurde am 22. Januar 2008 veröffentlicht. Sie war der Ausgangspunkt eines weltweiten Aufrufs zum Handeln, aus dem die dynamische Open-Education-Bewegung entstand, die wir heute sehen. Als Würdigung des zehnjährigen Jubiläums haben wir einen Blick zurück auf das vergangene Jahrzehnt geworfen und zehn zentrale Richtungen herausgearbeitet, um Open Education voran zu treiben. Klicken Sie auf die Karten unten, um mehr zu jedem Thema zu lesen. Oder schlagen Sie selbst ein eigenes Thema vor."
                        }
                      ],
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Cape Town Open Education Declaration zum 10. Jahrestag - Zehn Richtungen, um Open Education voran zu bringen"
                        },
                        {
                          "@language": "en",
                          "@value": "Cape Town Open Education Declaration 10th Anniversary - Ten Directions to Move Open Education Forward"
                        }
                      ]
                    },
                    "startTime": "2019-04-03T19:42:55.461Z"
                  },
                  {
                    "@id": "urn:uuid:7b18f95d-4935-4b6a-a607-b24dbcce9eb2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:11360ab7-2d65-4f9f-a0c6-36ba75949150",
                      "@type": "Action",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Research on Open Educational Resources for Development (ROER4D) project aims to provide evidence-based research from a number of countries in South America, Sub-Saharan Africa and South / South East Asia. The primary objective of the programme is to improve educational policy, practice, and research in developing countries by better understanding the use and impact of OER. \r\n# Objectives\r\nIn order to address this objective, the specific objectives of the programme are to:\r\n\r\n1. Build an empirical knowledge base on the adoption and impact of OER in education\r\n2. Develop the capacity of OER researchers\r\n3. Build a network of OER scholars\r\n4. Communicate research to inform education policy and practice. To help meet these objectives, an implicit intent has been framed as an additional objective, namely to\r\n5. Develop a strategic approach towards the curation, publication, and dissemination of research documents and data collected in the project.\r\n\r\nAs a number of philanthropic foundations and a few governments have already committed substantial funding to OER initiatives, it is necessary to search for evidence of how OER creation and use are influencing educational practices and policy in the Global South. This will help to ensure that education policy development initiatives and further expenditure by philanthropic foundations and governments are indeed achieving the outcomes of resourcing easily accessible, socially acceptable, high quality and affordable education in the Global South.\r\n\r\n# Research questions\r\n\r\nThe primary research question of the project asks:\r\n\r\nWhether, how, for whom and under what circumstances can engagement with open educational practices and resources provide equitable access to relevant, high quality, affordable and sustainable education in the Global South?\r\n\r\nThe project is subdivided into 18 sub-projects, each headed by a research lead within the country or region to which the sub-project refers. These sub-projects will address specific objectives of the overall project, using methodologies appropriate to the subsidiary questions they will be interrogating.\r\n\r\n# Outcomes\r\nThe ROER4D project’s main research output comprises an edited volume entitled [OER Adoption and Impact in the Global South](http://roer4d.org/edited-volume-2 \"ROER4D edited volume - OER Adoption and Impact in the Global South\"). This will comprise 16 chapters and will be published in December 2017. Currently we are releasing chapters as part of our advanced publication strategy."
                        }
                      ],
                      "image": "http://roer4d.org/wp-content/uploads/2014/02/ROER4D-website-banner1.png",
                      "location": {
                        "address": {
                          "addressCountry": "ZA",
                          "addressLocality": "Cape Town",
                          "addressRegion": "ZA.WC",
                          "postalCode": "7700",
                          "streetAddress": "University of Cape Town"
                        },
                        "geo": {
                          "lat": -33.95685446075717,
                          "lon": 18.460330367088318
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Research on Open Education Resources for Development in the Global South"
                        }
                      ],
                      "startTime": "2013-08"
                    },
                    "startTime": "2018-01-04T13:33:10.554+01:00"
                  },
                  {
                    "@id": "urn:uuid:964901de-9749-4980-bb75-2ed437c8ef3b",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3daec301-d1e8-4200-8004-ac546021f445",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This presentation was hold by Caroline Surman and Charlotte Echterhoff at the Dini Jahrestagung 2019. It gives an overview of the levels of policymaking relevant for Germany at the moment and mentions respective policy papers and quotations."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Policy - ein Überblick"
                        }
                      ]
                    },
                    "startTime": "2018-11-16T06:44:52.849Z"
                  },
                  {
                    "@id": "urn:uuid:6ea1437d-41a2-48d9-841a-c7e3590d19b8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:231aef51-5fac-4944-acd4-dd37d65f95b3",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Center for Open Education Research (COER) is an international research consortium, that was established in 2018 in order to increase international collaborative research projects, furthering innovation and understanding in the areas of open education, educational technology, lifelong learning and international education. COER will also offer a fully online Master of Technology-Enhanced Learning (MTEL) program, which addresses a market need for leadership and management in realizing digital transformation within educational institutions, connecting students with a faculty of leading and renowned scholars and researchers in the field of online, distance, and open education.\r\n\r\nThe goals of the research center include, but are not limited to:\r\n * increasing and supporting collaborative and interdisciplinary research activities;\r\n * obtaining increased external grant funding;\r\n * performing quality, cutting-edge international research and scholarship;\r\n * addressing problems recognized as having important societal impact;\r\n * creating an intellectually stimulating environment for internal and external fellows;\r\n * attracting world-class research faculty and scientists, and the highest quality graduate students and postdoctoral fellows; and\r\n * offering an international, interdisciplinary Master's program to translate research and scholarship into teaching, knowledge transfer, and practice.\r\n\r\nEmphasis is placed on international research projects in the context of open education on the level of global educational systems (macro level research), on the level of educational institutions (meso level research) and on aspects related to individual learning and teaching (micro level research)[1]. Three broad lines of research are followed in the fields of:\r\n * educational technology & learning design\r\n * open and distance learning\r\n * international education"
                        }
                      ],
                      "image": "https://www.uni-oldenburg.de/fileadmin/user_upload/coer/coer-banner1.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Oldenburg",
                          "addressRegion": "DE.NI",
                          "postalCode": "26129",
                          "streetAddress": "Ammerländer Heerstraße 114-118"
                        },
                        "geo": {
                          "lat": 53.1489187,
                          "lon": 8.182067010963
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Center for Open Education Research"
                        }
                      ]
                    },
                    "startTime": "2018-04-16T13:56:03.069+02:00"
                  },
                  {
                    "@id": "urn:uuid:3639898d-2cf0-4eb9-b24b-bc97d5fa9960",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c4c5c4ae-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "OER Commons is a freely accessible online library that allows teachers and others to search and discover open educational resources (OER) and other freely available instructional materials."
                        }
                      ],
                      "image": "https://www.oercommons.org/static/newdesign/images/header/oerc-logo-2x.png?7f774a7d031b",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Commons"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T15:14:38.842Z"
                  },
                  {
                    "@id": "urn:uuid:0e565de1-bbfa-43bc-8bb9-7d25dcc2710a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8a72a96e-ded1-4d13-bf9a-15f14be4e94e",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The OLH recognises that the economics of the humanities are different. The majority of research in the humanities remains unfunded except through institutional time. For this reason, Article Processing Charges are not a palatable option for these disciplines. We are funded instead through a model of Library Partnership Subsidies to collectively fund the venue and its array of journals. A large number of libraries and institutions worldwide already support us, which makes for a sustainable, safe platform. "
                        }
                      ],
                      "image": "https://library.uoregon.edu/sites/default/files/olh_0.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Library of Humanities"
                        }
                      ]
                    },
                    "startTime": "2018-04-19T22:13:32.258Z"
                  },
                  {
                    "@id": "urn:uuid:494c61b2-0af7-43e6-9ea9-e17945c00145",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c45ceb70-e128-4e63-ae52-b3f2a1f55c43",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The United Nations Organization for Education, Science and Culture (UNESCO) was founded on 16 November 1945.\r\n\r\nUNESCO has 195 Members and eight Associate Members. It is governed by the General Conference and the Executive Board. The Secretariat, headed by the Director-General, implements the decisions of these two bodies.\r\n\r\nThe Organization has more than 50 field offices around the world. Its headquarters are located at Place de Fontenoy in Paris, France, in in an outstanding, Modernist building inaugurated in 1958 and recently renovated."
                        }
                      ],
                      "image": "http://www.unesco.org/new/fileadmin/unesco/images/logo_en.gif",
                      "location": {
                        "address": {
                          "addressCountry": "FR",
                          "addressLocality": "Paris",
                          "addressRegion": "FR.VP",
                          "postalCode": "75352",
                          "streetAddress": "7 Place de Fontenoy"
                        },
                        "geo": {
                          "lat": 48.850033,
                          "lon": 2.306153
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "United Nations Organization for Education, Science and Culture"
                        }
                      ]
                    },
                    "startTime": "2018-11-16T15:27:52.832Z"
                  },
                  {
                    "@id": "urn:uuid:b5fb6392-1fd1-4f48-8cca-2813a3a1dec8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:a3feeab2-cd40-4b7e-9f33-c5098f0de2e4",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "By Bernard Nkuyubwatsi\n\nABSTRACT: The marketing of the Massachusetts Institute of Technology (MIT) Open Courseware gives the impression that it has the potential to contribute to quality open learning and opening up higher education globally. It is from this perspective that the potential contribution of Open Educational Resources (OER) units in the MIT Open Courseware to opening up higher education in Rwanda was investigated. Ten OER units were sampled as objects of the study. I took the role of an archive analyst, giving full attention to any item that constituted each unit. Results indicate that only one unit had enough openly licensed resources to enable its potential adaptation for use in opening up higher education. In other units, only metadata (course information, the syllabus, course calendar, and the list of required and suggested readings), assignments and/or quizzes/exams were openly licensed. Most (if not all) of the required and suggested readings, which are the core learning materials learners need to engage with for quality learning, had to be purchased, mostly from the Amazon website. On the basis of these findings, I argue that the MIT Open Courseware served the marketing agenda (probably for the purpose of acquiring funding), rather than the open access agenda. The study may benefit funding organisations, educators and institutions that are interested in supporting or engaging in the production, adaptation and use of OER with an agenda to contribute to opening up higher education."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "RW"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Revisiting the Reusability and Openness of Resources in the Massachusetts Institute of Technology Open Courseware"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T21:17:50.970Z"
                  },
                  {
                    "@id": "urn:uuid:d60ae450-b0c4-4536-ac29-f1c811ec9b85",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "NDLA performs incredible professional since years and proves, that public financed systematic production of high quality contents based on tendering is a viable solution for supplying teachers with the OER-stock they need."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c4ace24a-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Norwegian Digital Learning Arena (NDLA) (Norwegian: Nasjonal digital læringsarena) is a joint county enterprise offering open digital learning assets for upper secondary education. In addition to being a compilation of open educational resources (OER), NDLA provides a range of other online tools for sharing and cooperation. The legal liability for the joint county programme is carried by Hordaland County Council."
                        },
                        {
                          "@language": "no",
                          "@value": "NDLAs visjon er å lage gode, åpne digitale læremidler for alle fag i videregående opplæring og støtte opp om elever og lærere i aktivt og deltakende læringsarbeid.\r\nInterfylkeskommunalt samarbeid\r\nNasjonal digital læringsarena (NDLA) er et interfylkeskommunalt samarbeid som tilbyr fritt tilgjengelige åpne digitale læringsressurser for videregående opplæring. Hordaland fylkeskommune er juridisk ansvarlige enhet for det interfylkeskommunale samarbeidet, der 18 fylkeskommuner deltar. Kun Oslo står utenfor."
                        }
                      ],
                      "image": "http://ndla.no/sites/default/files/images/ndla_svart_norsk.png",
                      "location": {
                        "address": {
                          "addressCountry": "NO"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "National Digital Learning Arena"
                        },
                        {
                          "@language": "no",
                          "@value": "Nasjonal digital læringsarena"
                        }
                      ]
                    }
                  },
                  {
                    "@id": "urn:uuid:7c9b0bd1-38da-4ba9-b6c2-85096ecfc9d1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:6fc9d260-23bb-11e5-bba4-001999ac7927",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Serlo is an open online learning platform used by hundreds of thousands school and university students each month. All learning resources on Serlo are free of charge and without advertisement. Like on Wikipedia, every user can create new content or improve upon existing materials. "
                        },
                        {
                          "@language": "de",
                          "@value": "Serlo ist eine freie Online-Lernplattform, mit der monatlich hunderttausende Schüler und Studenten lernen. Die Plattform bietet einfache Erklärungen, tausende Aufgaben und Musterlösungen komplett kostenlos und werbefrei. Wie bei der Wikipedia kann jeder Nutzer neue Inhalte erstellen und vorhandene Inhalte verbessern. Serlo arbeitet an der Vision, hochwertige Bildung weltweit frei verfügbar zu machen.\r\n\r\nAlle Inhalte sind nach Themen sortiert, Lehrplänen zugeordnet und in unser pädagogisches Konzept integriert. Aktuell lernen 774.000 Personen pro Monat auf Serlo.\r\n\r\nSeit 2016 sind wir mit den Serlo Lab Schools in das Nachmittagsangebot von Schulen integriert und begleiten SchülerInnen direkt vor Ort beim selbstständigen Lernen mit serlo.org. Wie Sie als Lehrkraft serlo.org gewinnbringend für Ihren Unterricht einsetzen können, erfahren Sie in unserem Handbuch für LehrerInnen."
                        }
                      ],
                      "image": "https://de.serlo.org/attachment/file/59786/6585",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Serlo.org"
                        },
                        {
                          "@language": "de",
                          "@value": "Serlo.org"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T15:22:31.969+02:00"
                  },
                  {
                    "@id": "urn:uuid:d947f3a4-1896-461f-89df-c076097a3c70",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:cfa7ac94-2db8-4552-b6ba-b8083ae2a135",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Freie und offene Bildung kann einen Beitrag dazu leisten, dem gesamtgesellschaftlichen Ziel der Bildungsgerechtigkeit näher zu kommen. Wie es gelingen kann, partizipative Bildungsprozesse zu fördern und Teilhabe für alle zu erleichtern, beschreibt das im September 2018 veröffentlichte Positionspapier des Bündnis Freie Bildung."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Positionspapier Bündnis Freie Bildung"
                        }
                      ]
                    },
                    "startTime": "2019-03-26T07:14:55.182Z"
                  },
                  {
                    "@id": "urn:uuid:3b88ebb6-d3d9-46fa-b725-de9d1895d785",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4860f714-2c67-414b-bc51-18eb84691e48",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Cape Town Open Education Declaration arises from a small but lively meeting convened in Cape Town in September 2007. The aim of this meeting was to accelerate efforts to promote open resources, technology and teaching practices in education.\r\n\r\nConvened by the Open Society Institute and the Shuttleworth Foundation, the meeting gathered participants with many points of view from many nations. This group discussed ways to broaden and deepen their open education efforts by working together.\r\n\r\nThe first concrete outcome of this meeting is the Cape Town Open Education Declaration. It is at once a statement of principle, a statement of strategy and a statement of commitment. It is meant to spark dialogue, to inspire action and to help the open education movement grow."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "ZA"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Cape Town Open Education Declaration: Unlocking the promise of open educational resources"
                        }
                      ]
                    },
                    "startTime": "2019-03-26T07:25:34.704Z"
                  },
                  {
                    "@id": "urn:uuid:97a8fd9f-8b26-45c0-b583-be9c2f60b6f5",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:d74c65f5-618c-4334-9fea-d5d3671d14a0",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This declaration is addressed the Moroccan Government, education agencies, schools, middle schools, high schools, universities, the third sector, and all organizations and individuals involved in teaching and learning including galleries, libraries, archives and museums."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "MA"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Morocco Declaration"
                        }
                      ]
                    },
                    "startTime": "2019-03-22T07:21:51.726Z"
                  },
                  {
                    "@id": "urn:uuid:3d05b2e2-b370-4d2b-a3a1-f4b96ce64d2a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e29ea878-1b4e-4db7-aea4-f84c63055679",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "**Vision**\n\nThe Rijksmuseum links individuals with art and history.\n\n**Mission**\n\nAt the Rijksmuseum, art and history take on new meaning for a broad-based, contemporary national and international audience.\n\nAs a national institute, the Rijksmuseum offers a representative overview of Dutch art and history from the Middle Ages onwards, and of major aspects of European and Asian art.\n\nThe Rijksmuseum keeps, manages, conserves, restores, researches, prepares, collects, publishes, and presents artistic and historical objects, both on its own premises and elsewhere."
                        }
                      ],
                      "image": "https://cdn.rijksmuseum.nl/v-a2ef8847dba086ccee5f471bf1d7f9b9/WebStatic/Images/Logo/rijksmuseum-logo-combined.png",
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "Amsterdam",
                          "postalCode": "1071XX",
                          "streetAddress": "Museumstraat 1"
                        },
                        "geo": {
                          "lat": 52.3600036,
                          "lon": 4.8853311045935
                        }
                      },
                      "name": [
                        {
                          "@language": "nl",
                          "@value": "Rijksmuseum"
                        }
                      ]
                    },
                    "startTime": "2018-10-11T21:00:11.227Z"
                  },
                  {
                    "@id": "urn:uuid:32e7408f-48f0-426b-a95b-6da31bc702b8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:8cf07e97-c7fb-4dfc-a748-3a2f99e65a0a",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Jöran und Konsorten bieten individuelle Projekt- und Programmentwicklungen im Bildungsbereich, Veranstaltungsorganisation und -moderation sowie redaktionelle Tätigkeiten für Online-Projekte und andere Publikationen.  Daneben produzieren J&K selbst Bildungsmedien."
                        },
                        {
                          "@language": "en",
                          "@value": "The team at J&K - Jöran und Konsorten around Jöran Muuß-Merholz are connecting the educational and the digital world doing consulting, public speaking writing, editing, designing events and online projects. Since 2012 OER has been a focus of their work. They founded and operated “Transferstelle für OER“ which provided information on OER in Germany. J&K are also the founders and the organizers of the OERcamps, regular unconferences on OER, of the OER-Awards and the OER-Festival.\r\nTransferstelle OER served as a focus point to the emerging OER community in Germany, providing information on the subject. The OERcamps and OER-Festivals also helped connecting the community and widening the play field. The team at J&K is furthermore active in the production of OER in various sectors.\r\nJ&K – Jöran und Konsorten is a company with eight permanent employees and a network of freelancers. \r\nAgency founded in 2009, started working on OER in 2012, delegated the “Transferstelle” to the newly founded OERinfo in November 2016. J&K are still operating the blog of OERinfo, organizing events and providing consulting and training on OER."
                        }
                      ],
                      "image": "http://www.joeran.de/wp-content/themes/wordpress_joeran/i/logo2.gif",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Hamburg",
                          "addressRegion": "DE.HH",
                          "postalCode": "20099",
                          "streetAddress": "Schmilinskystraße 45"
                        },
                        "geo": {
                          "lat": 53.551316,
                          "lon": 9.981946
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "J&K - Jöran und Konsorten"
                        },
                        {
                          "@language": "en",
                          "@value": "J&K - Jöran und Konsorten (\"Jöran and Fellows\")"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:38:48.759+02:00"
                  },
                  {
                    "@id": "urn:uuid:867bc77a-cf30-40d1-873f-420bca6f2cce",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c923ceb3-1d1a-4c2d-863e-5872ec323333",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Achieving the Dream is a national, nonprofit leader in championing evidence-based institutional improvement at America's community colleges. ATD leads and supports a national network of 200+ community colleges, helping them achieve sustainable institutional transformation by sharing knowledge, investigating innovative solutions, and adopting effective practices and policies that lead to improved outcomes for all students. \n\nATD leads the OER Degree Initiative, supporting 38 community colleges in 13 states creating full OER degree pathways.  The project is designed to help remove financial roadblocks that can derail students’ educational progress and  spur changes in teaching and learning and course design that will increase the likelihood of degree and certificate completion. "
                        }
                      ],
                      "image": "http://www.achievingthedream.org/sites/default/files/body-files/atd-logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "20910",
                          "addressRegion": "US.MD",
                          "postalCode": "Silver Spring",
                          "streetAddress": "8403 Colesville Road, Suite 450"
                        },
                        "geo": {
                          "lat": 38.9949323673469,
                          "lon": -77.0301470816327
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Achieving the Dream"
                        }
                      ]
                    },
                    "startTime": "2018-05-11T13:27:10.028Z"
                  },
                  {
                    "@id": "urn:uuid:f3f2bd2b-f700-4254-9d40-ed23c0257b4f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:6e1d8db7-2f5b-448c-85a5-928d5abb6c7d",
                      "@type": "Action",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "“Open Policies can develop Scotland’s unique education offering, support social inclusion and inter-institutional collaboration and sharing and enhance quality and sustainability.”\r\n\r\nOpen Scotland is a voluntary cross sector initiative that aims to raise awareness of open education, encourage the sharing of open educational resources, and explore the potential of open policy and practice to benefit all sectors of Scottish education. Open Scotland is supported by the University of Edinburgh and the ALT Scotland SIG.\r\n\r\nThe Open Scotland blog acts as a focal point to engage the community and disseminate news and developments relating to all aspects of openness in education in Scotland and further afield."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB",
                          "addressRegion": "GB.EB"
                        },
                        "geo": {
                          "lat": 55.947438,
                          "lon": -3.187263
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Open Scotland"
                        }
                      ],
                      "startTime": "2013"
                    },
                    "startTime": "2018-04-06T11:27:43.196+02:00"
                  },
                  {
                    "@id": "urn:uuid:10d2068f-da80-4626-bab7-5cfeef537e55",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:15528935-87e5-42d3-8ea5-7bcd89c15539",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "CK-12 offers a wide range of high quality learning materials including textbooks, simulations, learning games and study guides."
                        }
                      ],
                      "image": "https://d7xhsdl7qa50.cloudfront.net/media/common/images/logo_ck12.svg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "CK-12"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:10:22.841+02:00"
                  },
                  {
                    "@id": "urn:uuid:788af80e-1f6c-4cc0-b866-73c015cdae44",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:da60dfc4-a87f-4295-b11b-d83ef017ee0a",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "## Allgemeine Event-Beschreibung\nAuf der diesjährigen OR-Fachtagung soll die Diskussion um die Chancen einer wechselseitigen Ergänzung von Bildung für Nachhaltige Entwicklung (BNE) und Digitaler Bildung im Bereich Schule fortgesetzt werden. Im Ergebnis der letzten Fachtagung ist ein gleichnamiges Diskussionspapier entstanden, das im Fokus der diesjährigen Diskussion stehen wird.\n\nZudem soll der Blick auf die geplante Fortsetzung des UNESCO Weltaktionsprogramms BNE im Jahr 2020 und auf die Herausforderungen, Lern- und Lehrmaterialien diskriminierungssensibel zu gestalten, gerichtet werden. Aktuelle und geplante Maßnahmen zur Umsetzung und Weiterentwicklung des OR sollen gemeinsam mit den Teilnehmerinnen und Teilnehmern der Fachtagung in unterschiedlichen Workshops diskutiert werden. Die Fachtagung wird von Engagement Global im Auftrag der KMK und des BMZ organisiert.\n\n## Bezug zu OER\nIm Rahmen der Veranstaltung fand der Workshop \"OR goes OER – Schnittstellen von Open Educational Resources und BNE\" statt, in dem Synergieen und Kooperationspotentiale zwischen beiden Bewegungen (BNE und OER) diskutiert wurden. Im Rahmen des Workshop wurde mit der Erstellung eines Thesenpapiers begonnen, das im Anschluss an den Workshop weiterentwickelt und veröffentlicht werden soll.    "
                        },
                        {
                          "@language": "en",
                          "@value": "## General event description\nAt this year's OR symposium, the discussion about the chances of a mutual supplementation of Education for Sustainable Development (ESD) and Digital Education in schools will be continued. As a result of the last symposium, a discussion paper of the same name was produced, which will be the focus of this year's discussion.\n\nIn addition, the focus will be on the planned continuation of the UNESCO World Action Programme on ESD in 2020 and on the challenges of making learning and teaching materials sensitive to discrimination. Current and planned measures for the implementation and further development of the OR will be discussed together with the participants of the symposium in various workshops. The symposium will be organised by Engagement Global on behalf of the KMK and the BMZ.\n\n## Reference to OER\nThe workshop \"OR goes OER - Schnittstellen von Open Educational Resources und ENE\" (OR goes OER - Interfaces of Open Educational Resources and ESD) took place within the framework of the event, in which synergies and cooperation potentials between both movements (ESD and ESD) were discussed. The workshop started with the preparation of a theses paper, which will be further developed and published after the workshop.    "
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Köln",
                          "addressRegion": "DE.NW",
                          "postalCode": "50672",
                          "streetAddress": "Magnusstraße 20"
                        },
                        "geo": {
                          "lat": 50.9403031,
                          "lon": 6.9421013
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "9th KMK/BMZ symposium on \"Implementation and further development of the Global Development Orientation Framework"
                        },
                        {
                          "@language": "de",
                          "@value": "9. KMK/BMZ-Fachtagung „Umsetzung und Weiterentwicklung des Orientierungsrahmens Globale Entwicklung“"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T17:54:54.101Z"
                  },
                  {
                    "@id": "urn:uuid:e51ff8d3-c1fa-4b0f-9dd7-3a2eb620a09c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:83cdcbf8-159d-452c-b1cd-c7371f57ee77",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "With Open Educational Resources, opportunities for better and more exciting teaching are being made available, shared in an increasing way. In the European project X5GON we are investigating ways in which Artificial Intelligence can enhance the learning experience and how teachers can be encouraged to produce and share their lectures in the knowledge that these will be made simple to find and use by other teachers and learners.\n\nThe creation, maintenance and quality assurance of OER are resource-intensive processes, which are provided by many supporters and volunteers. The appreciation of this achievement should consist not only of the use of this learning material, but also of creating lasting sustainability. This creates a foundation that motivates people to contribute to OER and drive technological development.\n\nThe EU-project “X5GON” and the University of Osnabrueck invite to the international workshop “Sustainability of Open Educational Resources” in Osnabrueck, Germany on March 12th 2019. The workshop will take place in Osnabrueck Castle, which is the main building of the University of Osnabrueck."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Osnabrück",
                          "addressRegion": "DE.NI",
                          "postalCode": "49504"
                        },
                        "geo": {
                          "lat": 52.27163072516976,
                          "lon": 8.044241299606227
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Workshop on Sustainability of Open Educational Resources"
                        }
                      ]
                    },
                    "startTime": "2019-03-12T10:36:35.981Z"
                  },
                  {
                    "@id": "urn:uuid:a0babd06-6274-4107-8b4e-505b1d2349e9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:9784d85c-3f56-11e5-9a19-001999ac7927",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "ps",
                          "@value": "د افغانستان د ښځو لپاره د کاناډايي ښځو ټولنه په دې عقيده ده چې د افغانستان د ښه راتلوونکي لپاره تر ټولو مهمه پانګونه د ښوونکو پر روزنه ده. پر ښوونکو پانګونه په دې معنی ده چې د دوی پر مسلکي پرمختيا پانګونه وشي او هغوی لپاره د پوهې او معلوماتو ته د لاسرسي داسې زمينه مساعده شي چې په دوی کې د خپلکارې زدکړې انکیزه راوټوکوي. دا کار به پخپل نوبت د افغانستان ځوان نسل لپاره د باکيفيته زدکړو د برابرولو په څير مهم کار ته لاره هواره کړي. \r\n\r\nد باکيفيته زدکړو پر وړاندې پروت يو لوی خڼد د ښوونکو او زده کوونکو لپاره دهغوی په مورني ژبه د درسي موادو او سرچينو نشتوالی دی. زیاترو اورګانونو او افرادو ددې تشې د ډکولو لپاره د ټاکلو سرچينو تابيا کړې ده خو دغه کار يې يوازې د خپلو پروګرامونو لپاره کړی دی.  \r\n\r\nد درخت دانش کتابتون په دې لټه کې دی چې د کيدون تر بريده دا ډول سرچينې راغونډې کړي، په بهرنيو ژبو بلد افغانان د ګټورو سرچينو د ژباړې مرستې ته وهڅوي او دا ژباړې کليکسيو ته زياتې کړي او ښوونکي هم وهڅوي چې خپل ښوونيز مواد له کتابتون سره شريک کړي. موږ په دې لټه کې يو چې افغان ښوونکي د پرانستو ښوونيزو سرچينو د ټولنې برخه وګرځي او د دې پرانستو سرچينو زيرمه د افغانو ټولګيوالو په ګټه وکاروي.\r\n\r\nموږ په دې لټه کې یو چې له افغان ښوونکو سره مرسته وکړو او دوی وهڅوو چې د پوهنې د وړتيا او د پوهنيزو توکو له غورځنګ سره پيوستون وښيي او د درخت دانش کتابتون بشپړ شي چې د درسي ټولګيو په باکيفته کولو کې اغيزمنه ونډه لري.\r\n\r\nله کتابتون څخه د ګټه اخيستنې لپاره تاسې په دې ويبسايټ کې ځان راجستر کړئ، او بيا د کتابتون دري، پښتو او انګريزي ټولګې وپلټئ، خپله پرانستې سرچينه د کتابتون اړونده ټولګې ته ورزياته کړئ. له موږ سره مرسته وکړئ چې د کتابتون د ټولګو د رغونې لپاره لا زياتې سرچينې پيدا کړو. په افغانستان کې د ښوونې او روزنې په اړه د معلوماتو او د ښونې او روزنې څخه د ملاتړ لپاره دا ځای وګورئ."
                        },
                        {
                          "@language": "fa",
                          "@value": "سازمان \"زنان کانادا برای زنان افغانستان\" بر این باور است  که بزرگترین سرمایه گذاری برای آینده افغانستان باید روی معلمین این کشور صورت گیرد. سرمایه گذاری روی معلمین، به معنی سرمایه گذاری روی انکشاف تخصص آنان و همچنان حصول اطمینان از اینکه معلمین  به اطلاعات و موادی که بتواند آن ها را به خودآموزی یاری رساند، دسترسی داشته باشند می باشد.  این کار به نوبه خود به امر بی نهایت مهم دیگری می انجامد که همانا تربیه جوانان افغانستان مطابق به موازین و کیفیت های بالای تعلیمی می باشد.\r\n\r\nمهمترین مانع در برابر ارایه تعلیمات با کیفیت بالا، نبود منابع لازم تعلیمی به زبان های ملی هم برای شاگردان و هم برای معلمین است. بسیاری از سازمان ها و افراد تلاش کردند تا مواد  مشخصی برای پر کردن این خلا برای پیشبرد برنامه های خود به وجود آورند.  کتابخانه \"درخت دانش\" می کوشد تا جایی که ممکن است این مواد را جمع آوری کند. همچنان در پهلوی اینکه تلاش می ورزد تا با دخیل ساختن لسانهای دری و پشتو در این مجموعه ،  معلمین را تشویق کنند تا خود مواد لازم درسی را تهیه و به غنای این مجموعه بیفزایند. ما در پی آنیم تا معلمین افغان را کمک کنیم که به \"جنبش مواد رایگان تعلیمی\" بپیوندند و کیفیت کتابخانه درخت دانش را که به ارتقای کیفی صنوف درسی افغانستان می انجامد، بهبود بخشند.\r\n\r\nبرای استفاده از کتابخانه شما می توانید در این وب سایت  ثبت نام کنید و بعد از ثبت نام می توانید از منابع دری و پشتو کتابخانه دیدن نمایید. شما می توانید منابع خویش را نیز به کتابخانه اضافه نموده ما را در امر غنامندی کتابخانه با منابع بیشتر کمک کنید. همچنان شما می توانید در مورد چگونگی حمایت از معارف افغانستان معلومات حاصل نموده و درباره معارف افغانستان بیشترآشنا شوید."
                        },
                        {
                          "@language": "en",
                          "@value": "At Darakht-e Danesh, we believe that the greatest investment that can be made in Afghanistan’s future is in its human capital. Our aim is to invest in learning and teaching, ensuring that people have access to knowledge and information that will stimulate their minds, and their personal and professional development. In particular, we hope this collection of educational material will support teachers, who are tasked with the overwhelmingly important work of providing a high quality education to the children and youth of Afghanistan.\r\n\r\nA major impediment to quality education is the lack of local language educational resources for both teachers and students. Many organizations and individuals have undertook to create specific resources to address this gap for their own programs. The Darakht Danesh Library seeks to bring together as many of these resources as possible, engaging bilingual Afghans to help translate good resources to add to the collection, and encouraging teachers to create and contribute their own educational materials to the Library. We seek to support Afghan teachers to become part of the Open Educational Resource movement, and to harness the potential of OERs for the benefit of Afghan classrooms."
                        }
                      ],
                      "image": "http://www.darakhtdanesh.org/sites/default/files/themes/dd-logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The Darakht-e Danesh Library"
                        }
                      ]
                    },
                    "startTime": "2018-03-30T10:16:48.878+02:00"
                  },
                  {
                    "@id": "urn:uuid:83aa3578-dc4f-46da-8ed8-4483d2bedaab",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "A true and wide shining lighthouse. More than 10 years after its first publication it is still one of the strongest texts advocating Open Education."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:4860f714-2c67-414b-bc51-18eb84691e48",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Cape Town Open Education Declaration arises from a small but lively meeting convened in Cape Town in September 2007. The aim of this meeting was to accelerate efforts to promote open resources, technology and teaching practices in education.\r\n\r\nConvened by the Open Society Institute and the Shuttleworth Foundation, the meeting gathered participants with many points of view from many nations. This group discussed ways to broaden and deepen their open education efforts by working together.\r\n\r\nThe first concrete outcome of this meeting is the Cape Town Open Education Declaration. It is at once a statement of principle, a statement of strategy and a statement of commitment. It is meant to spark dialogue, to inspire action and to help the open education movement grow."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "ZA"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Cape Town Open Education Declaration: Unlocking the promise of open educational resources"
                        }
                      ]
                    },
                    "startTime": "2019-03-26T07:25:40.993Z"
                  },
                  {
                    "@id": "urn:uuid:ec1d86b0-a62a-472f-9a73-256738b44d9b",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The most elaborated search engine for OER I know. OER Common currently sets the standard for OER search - anybody disagree?"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c4c5c4ae-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "OER Commons is a freely accessible online library that allows teachers and others to search and discover open educational resources (OER) and other freely available instructional materials."
                        }
                      ],
                      "image": "https://www.oercommons.org/static/newdesign/images/header/oerc-logo-2x.png?7f774a7d031b",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Commons"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T15:14:46.699Z"
                  },
                  {
                    "@id": "urn:uuid:71b01cc5-58f6-45d1-a17c-c430364973c9",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:1111c470-c067-4dc6-816f-490839408eda",
                      "@type": "Product",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Discourse is a from-scratch reboot, an attempt to reimagine what a modern Internet discussion platform should be today, in a world of ubiquitous smartphones, tablets, Facebook, and Twitter.\r\nWe’re civilized.\r\n\r\nOur trust system means that the community builds a natural immune system to defend itself from trolls, bad actors, and spammers — and the most engaged community members can assist in the governance of their community. We put a trash can on every street corner with a simple, low-friction flagging system. Positive behaviors are encouraged through likes and badges. We gently, constantly educate members in a just-in-time manner on the universal rules of civilized discourse.\r\nUncompromisingly open source.\r\n\r\nThere is only one version of Discourse – the awesome open source version. There’s no super secret special paid commercial version with better or more complete features. Because Discourse is 100% open source, now and forever, it belongs to you as much as it belongs to us. That’s how community works.\r\n\r\nEverything that most communities would want is included out of the box; a giant collection of complex plugins should not be required to have a great experience.\r\nSimple. Modern. Fun.\r\n\r\nDiscourse pares all the complexity away and puts just the essential stuff on screen – the conversations you care most about, based on your participation.\r\n\r\nAll the modern amenities you’d expect from a big social website like Twitter or Facebook are present in Discourse. Mention someone by @name. Paste in a link or an image, and we make it awesome on your behalf. Simple quoting and linking of replies and topics. Reply wherever you are, online or via email.\r\n\r\nAnd it \"just works\" on your phone and tablet"
                        }
                      ],
                      "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Discourse_logo.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Discourse"
                        }
                      ]
                    },
                    "startTime": "2018-03-21T16:18:36.755+01:00"
                  },
                  {
                    "@id": "urn:uuid:26e1726b-d573-4205-9236-04e3825ed2cb",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3b589ecf-aadf-45f7-811c-5cbb885a17a1",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The European Open Education Librarian Network was established on 28 June 2018 after a workshop at [OE Global in Delft in 2018](https://conference.oeconsortium.org/2018/). \nThe network curently has members from 9 European countries and we are looking forward to increasing it substantialy in the coming months. \n\nWe are also currently developing our programme for the coming period; please join us as it shoudl help serve to reach your goals!\n\nIf you are working in a library and you are interested in making educational material more easily accessible and re-useable to improve teaching and learning, increase quality in education, or save costs, please contact <oer@sparceurope.org>. We look forward to hearing from you.\n\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressRegion": "NL.NB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "European Open Education Librarian Network"
                        }
                      ]
                    },
                    "startTime": "2018-06-28T13:30:16.250Z"
                  },
                  {
                    "@id": "urn:uuid:e5e4ea5e-5692-40fc-80b2-ad2ad6877349",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0d2586a7-64b5-4e2d-a725-b29a5c1493f9",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>A+ Click helps students become problem solvers. No fees, no ads, no calculators, and no sign in. The website features a graduated set of 5000+ challenging problems for students in grades one through twelve, starting from the very simple to the extremely difficult. The questions are based on the Common Core Standards in Math and go beyond by adding hundreds of meaningful practical problems and brainteasers.</p>\r\n\r\n<p>The questions concentrate on understanding, spatial reasoning, usefulness, and problem solving rather than math rules and theorems. The problems include a short description and an illustration to help problem solvers visualize the model. The problems can be solved within one minute and without using a calculator.</p>\r\n\r\n<p>The tests adapt to student ability. To progress to a higher level, you must correctly answer five consecutive questions. Younger kids in grade 1 through 5 have two chances to get it right. If you correctly answer 16 questions, the system suggests you enter the competition (click on Leaderboard in the left menu). The self-study learning site includes game elements: star scoring system, cheering sounds for young kids, statistics (click on Statistics in the left menu), and a Leaderboard. The Leaderboard shows the best performers of the last 10 days.</p>\r\n\r\n<p>Igor Kokcharov launched the project in 2010. Igor explains in the A+Click blog: \"When I was a young boy, I studied mathematics in school and also on my own using Martin Gardner's puzzle books. Now, as an adult, I am eager to help children throughout the world who are in the same position that I was in as a child to discover interesting, practical, and challenging math and logic puzzles.\"</p>"
                        }
                      ],
                      "image": "http://www.aplusclick.com/image/AplusclickMathProblems_logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "CH",
                          "addressLocality": "Lausanne"
                        },
                        "geo": {
                          "lat": 46.519653,
                          "lon": 6.632273
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "A+ Click"
                        }
                      ]
                    },
                    "startTime": "2018-06-04T21:22:55.563Z"
                  },
                  {
                    "@id": "urn:uuid:df71dc9c-f89d-497d-800d-e4c3e5cdcf28",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3f11cdbd-a74a-4aa4-83b3-b4148bfdbe82",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:e495cc00-9377-48b6-8c9a-ba5ced16f8ba"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Im Fokus der BMBF-Bekanntmachung zur Förderung offener Bildungsmaterialien stehen vor allem die Sichtbarmachung und die Erschließung eines höheren Nutzerkreises durch  die Sensibilisierung in der Breite für die Potenziale der Nutzung offener Bildungsmaterialien. Konkret umfasst die Förderbekanntmachung zwei Handlungsfelder: \n \n* Es wird eine Informationsstelle geschaffen, die Informationen zum Thema bündeln und in die Breite tragen wird. Die Laufzeit beträgt zunächst zwei Jahre. \n* Es werden insgesamt 23 Projekte gefördert, in denen Personen sensibilisiert und qualifiziert werden, die mit der Fort- und Weiterbildung von Bildungspersonal betraut sind.  \n\nMit der Förderbekanntmachung leistet das BMBF einen weiteren Beitrag zur Umsetzung der [Empfehlungen der Bund-Länder-Arbeitsgruppe zu offenen Bildungsmaterialien](https://oerworldmap.org/resource/urn%3Auuid%3Ab66664c9-8f5c-459a-9f13-1e9773c151c3?). \n\nDas Bundesministerium für Bildung und Forschung (BMBF) und die Kultusministerkonferenz (KMK) hatten sich im Laufe des Jahres 2014 darauf geeinigt, die weitere Verbreitung von OER in Deutschland zu unterstützen.  In ihrem Anfang 2015 erschienen Bericht hält die Bund-Länder-Arbeitsgruppe fest, dass OER Potenziale für das Lebenslange Lernen bereithalten und deren  Verbreitung in Deutschland zu unterstützen sei. \n"
                        }
                      ],
                      "image": "https://upload.wikimedia.org/wikipedia/commons/5/5c/BMBF_Logo.svg",
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Richtlinie zur Förderung von Offenen Bildungsmaterialien (Open Educational Resources – OERinfo)"
                        }
                      ],
                      "startTime": "2016-01-15"
                    },
                    "startTime": "2018-01-08T09:53:26.745+01:00"
                  },
                  {
                    "@id": "urn:uuid:fe817f81-461d-4911-9fc8-751d7e0a0ab8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:0297912a-930e-437e-9e52-c2fcfca4a7cc",
                      "@type": "Organization",
                      "image": "https://www.mkw.nrw/fileadmin/templates/img/branding.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Dusseldorf",
                          "addressRegion": "DE.NW",
                          "postalCode": "40221",
                          "streetAddress": "Völklinger Straße 49"
                        },
                        "geo": {
                          "lat": 51.2090991,
                          "lon": 6.756414
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen"
                        }
                      ]
                    },
                    "startTime": "2019-04-03T13:03:22.625Z"
                  },
                  {
                    "@id": "urn:uuid:d180beae-de35-45ad-97a5-aa9757e3520f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7f87ed6e-0861-479b-8e9b-fde3d9cf98ca",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Mason OER Metafinder helps you find Open Educational Resources.  Unlike other OER repositories  (e.g, OER Commons, MERLOT, OpenStax, etc.) with our Metafinder you aren’t searching a database that we built.  Many other sites already perform this important curation service and to be honest, we don’t have the time or staff to build or even maintain currency in that sort of database.  Instead, our contribution to the progress of Open Education is to concentrate on OER discovery—helping you find current content wherever it resides–even if it’s a new OER title that just dropped earlier today.\n\nThe OER Metafinder performs a simultaneous search across 18 different sources of open educational materials.   Because it is a real-time, federated search, it can take a bit longer than searches of pre-indexed, curated content; however, as compensation the results returned are absolutely up-to-the-minute for each search target.  Additional results will continue to trickle in as the search continues running and you begin examining your results.\n\nA distinct feature of the Mason OER Metafinder is the scope of our discovery service.  We’re searching well-known OER repositories like OpenStax, OER Commons, MERLOT but also sites like HathiTrust, DPLA, Internet Archive and NYPL Digital Collections where valuable but often overlooked open educational materials may be found.\n\nOur OER Metafinder is built using the Explorit Everywhere! software developed by Deep Web Technologies in Santa Fe, New Mexico. We use their software to provide a number of different metafinders for Mason researchers (e.g., our Sciences Metafinder is a quite popular example)."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The Mason OER Metafinder"
                        }
                      ]
                    },
                    "startTime": "2019-01-31T22:15:43.091Z"
                  },
                  {
                    "@id": "urn:uuid:2810d968-d467-4b6e-ae3e-a7f8b787992a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:43aa13b9-76c0-4844-b258-1e29626f315d",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The second World Open Educational Resources (OER) Congress closed as experts and national delegates from 111 countries adopted by acclamation the 2017 Ljubljana OER Action Plan.\n\nThe 2017 Ljubljana OER Action Plan presents 41 recommended actions to mainstream open-licensed resources to help all Member States to build Knowledge Societies and achieve the 2030 Sustainable Development Goal 4 on “quality and lifelong education.”\n\nThe 2017 Ljubljana OER Action Plan provides recommendations to stakeholders in five strategic areas, namely: building the capacity of users to find, re-use, create and share OER; language and cultural issues; ensuring inclusive and equitable access to quality OER; developing sustainability models; and developing supportive policy environments."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Lbjubeljana OER Action Plan"
                        }
                      ]
                    },
                    "startTime": "2018-11-16T15:23:05.345Z"
                  },
                  {
                    "@id": "urn:uuid:86fc4df3-889b-4327-91be-b9f3639dca8b",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:27541dc9-6096-4546-ac5a-e635e0bbcb9e",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Aktuelle OER-Multiplikatoren kooperieren im OER-Contentbuffet und sammeln hier  Konzepte, Materialien und Softwaretools rund um OER.  Diese Inhalte sind öffentlich verfügbar unter www.oer-contentbuffet.info oder unter https://open-educational-resources.de/materialien/contentbuffet/. \r\nOER-Multiplikatoren können mit diesen Inhalten ihre OER-Qualifizierungen oder OER-Einführungsprojekte unterstützen.\r\n\r\nInhalte des OER-Contentbuffets sind beispielsweise:\r\n* OER-Trainerkoffer mit Wissensspeicher, Folien, Übungen und Arbeitsblättern\r\n* Handlungsempfehlungen für die Einführung von OER\r\n* Konzepte für die Planung OER-förderlicher IT-Infrastrukturen\r\n* OER-Softwarewerkzeuge"
                        },
                        {
                          "@language": "en",
                          "@value": "Current OER multipliers cooperate in the OER content buffet and collect concepts, materials and software tools related to OER. These contents are publicly available at www.oer-contentbuffet.info or at https://open-educational-resources.de/materialien/contentbuffet/.\r\nOER multipliers can use this content to support their OER qualification or OER implementation projects.\r\n\r\nContents of the OER content buffet include:\r\n* OER trainer case with knowledge storage, slides, exercises and worksheets\r\n* Recommended actions for the introduction of OER\r\n* Concepts for planning OER-friendly IT infrastructures\r\n* OER software tools"
                        }
                      ],
                      "image": "http://jointly.info/wp-content/uploads/sites/14/2016/11/jointly-Logo.svg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER-Contentbuffet"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T16:09:38.917+02:00"
                  },
                  {
                    "@id": "urn:uuid:12ba0c1e-78cf-4f7b-bfee-d0e806df9c9c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2019-03-22T13:23:48.898Z"
                  },
                  {
                    "@id": "urn:uuid:c236f1bb-3689-4000-b336-c157db54e620",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-03-21T15:19:16.139+01:00"
                  },
                  {
                    "@id": "urn:uuid:62aa34ca-28b3-4935-856f-886a936e6dfd",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:729ed34c-cc6e-481b-a01c-be128fe83e1f",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This document specifies a broad policy to promote and inform the development and use of OER in the Commonwealth of Learning"
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Commonwealth of Learning Policy on Open Educational Resources"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T20:03:10.844Z"
                  },
                  {
                    "@id": "urn:uuid:7b1c7878-0e9d-4865-a2bf-3fb23b3dbf12",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:dea9fc46-4d78-4e24-9886-8d46998ddeaf",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:0e6fc783-b1a5-4867-878a-45bd9695443c"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "GoOpen, is a campaign launched by the U.S. Department of Education to encourage states, school districts and educators to use openly licensed educational materials. As part of the campaign, the Department is proposing a new regulation that would require all copyrightable intellectual property created with Department grant funds to have an open license."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "GoOpen"
                        }
                      ],
                      "startTime": "2015-10-29"
                    },
                    "startTime": "2018-03-30T09:58:28.991+02:00"
                  },
                  {
                    "@id": "urn:uuid:a5c05b41-0348-478e-9e50-f5aed756db83",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:00027670-6eca-4dab-ae89-b7e1855f3d6d",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "<p>Die Wiki-Family auf ZUM.de bietet Wikis rund um Unterricht und Schule. Die Wiki-Family steht also für Schulwikis oder andere Wikis im Bildungsbereich unter bestimmten Bedingungen zur Verfügung. </p>\r\n\r\n<p>Innerhalb dieser Wiki-Family der \"Zentrale für Unterrichtsmedien im Internet e.V.\" (ZUM.de) können eigenständige Wikis eingerichtet werden, die für sich verwaltet werden, aber gleichzeitig in Wechselbeziehung mit dem ZUM-Wiki sowie den anderen Wikis der Wiki-Family stehen und alle technischen Möglichkeiten des ZUM-Wikis nutzen können.</p>"
                        },
                        {
                          "@language": "en",
                          "@value": "<p>The Wiki-family auf ZUM.de provides multiple wikis revolving around topics related to education, teaching and school. The wiki-family is open for school-wikis and wikis from other educational institutions (under specific conditions).</p>\r\n<p>The wiki plattform offers either an operation under own resposibility or under networking conditions.</p>"
                        }
                      ],
                      "image": "https://www.zum.de/portal/sites/default/files/images/Wiki-Family-Logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Gerabronn",
                          "addressRegion": "DE.BW",
                          "postalCode": "74582",
                          "streetAddress": "Bahnhofstr. 20"
                        },
                        "geo": {
                          "lat": 49.25529,
                          "lon": 9.920757
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "ZUM-Wiki-Family"
                        },
                        {
                          "@language": "en",
                          "@value": "ZUM-Wiki-Family"
                        }
                      ]
                    },
                    "startTime": "2018-06-19T11:01:43.248Z"
                  },
                  {
                    "@id": "urn:uuid:9b07671f-707d-4e33-842d-1b2f23075c36",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "startTime": "2018-03-21T11:51:39.01+01:00"
                  },
                  {
                    "@id": "urn:uuid:06ffbb3f-abf1-4741-a582-810d83033142",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:35d310dc-88c7-4dba-baa3-3b5f3a7e7444",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "MOOCs are an opportunity for libraries to provide leadership and guidance in advising faculty and students about open access, open educational resources (OER), copyright issues and other licensing models in higher education.\n\nThe experience of an open access micro-MOOC can be an example of an effective strategy for encouraging users to get involved in open access and MOOCs, as well as for showing how librarians and libraries can support the MOOC movement. \n\nLibraries also can encourage the faculty members to get involvedm in MOOCs for their respective areas and also acted as advisers.In this advisory capacity, librarians can provide help and expertise in certain aspects of production of the MOOCs such as interpreting copyright laws, selecting and providing open source materials which can be used in MOOCs, and also creating open educational resources. "
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "The Role of the Academic Libraries in MOOCs"
                        }
                      ]
                    },
                    "startTime": "2018-10-11T20:53:44.011Z"
                  },
                  {
                    "@id": "urn:uuid:7e76082e-f7c1-46b3-9517-6ea286c21d63",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b0b9880f-6b1d-4d68-8961-c2eabf4a85d2",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Der Stifterverband ist die Gemeinschaftsinitiative von Unternehmen und Stiftungen, die als einzige ganzheitlich in den Bereichen Bildung, Wissenschaft und Innovation berät, vernetzt und fördert."
                        }
                      ],
                      "image": "https://www.stifterverband.org/sites/all/themes/stifterverband/images/logos/sv.svg",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Essen",
                          "addressRegion": "DE.NW",
                          "postalCode": "45239",
                          "streetAddress": "Barkhovenallee"
                        },
                        "geo": {
                          "lat": 51.3751489,
                          "lon": 7.015219
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Stifterverband für die Deutsche Wissenschaft e.V."
                        }
                      ]
                    },
                    "startTime": "2019-04-03T12:52:40.968Z"
                  },
                  {
                    "@id": "urn:uuid:5a902270-97fa-4280-b393-a8d99046ba22",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:37fbdbc5-982a-45a9-b0e8-fc4f26d7107a",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The 2012 Paris OER Declaration was formally adopted at the 2012 World Open Educational Resources (OER) Congress held at the UNESCO Headquarters in Paris from 20 – 22 June 2012. The Declaration marks a historic moment in the growing movement for Open Educational Resources and calls on governments worldwide to openly license publicly funded educational materials for public use. It has been translated into 16 languages so far."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "2012 Paris OER Declaration"
                        }
                      ]
                    },
                    "startTime": "2019-02-28T11:49:37.770Z"
                  },
                  {
                    "@id": "urn:uuid:6ec6ea9a-6ce5-462d-94c1-b6220458a9ec",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:15171773-dad0-485d-955f-13161c80acd2",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The OER State Policy Playbook provides policy recommendations for U.S. state legislators interested in tackling college affordability through Open Educational Resources (OER).\n\nThe rising cost of higher education is about more than tuition—expensive textbooks and course materials remain a looming barrier to college affordability and access. Open Educational Resources (OER) are a solution to high-cost materials and state legislators are starting to take notice. Nearly half of all states have considered OER legislation in past years, and it has increasingly become a go-to strategy for legislators seeking to make college education more affordable and effective. States can catalyze and support action at institutions by providing resources, incentives, and policy frameworks.\n\nDownload the OER State Policy Playbook and share it with interested policymakers. Also check out the companion OER State Legislative Guide from Creative Commons USA for more in-depth analysis of state legislation. To stay up to date on OER policy in your state visit SPARC’s OER State Policy Tracker."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER State Policy Play Book"
                        }
                      ]
                    },
                    "startTime": "2018-12-01T10:38:04.135Z"
                  },
                  {
                    "@id": "urn:uuid:8a3d38e9-86a1-4fe1-baa8-4bea819b4b62",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:efb6d7e1-d8c7-4e4a-9f18-e7b724ac2239",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Referatory containing more than 100 (Dutch) resources for education, about 360,000 which are lessons which can be used freely (not always under an open licence). Using the referatory is free as it a publicly funded service. Documentarion for the SRU interface is available at: https://developers.wiki.kennisnet.nl/index.php/Edurep:Hoofdpagina\n"
                        }
                      ],
                      "image": "https://www.kennisnet.nl/fileadmin/kennisnet/dienst/edurep/edurep.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Edurep"
                        }
                      ]
                    },
                    "startTime": "2018-04-27T08:39:53.048Z"
                  },
                  {
                    "@id": "urn:uuid:e25853aa-cce7-418e-a8a6-bf82cfadfec8",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:ff1bea3d-c91a-48d4-b921-13fe511aae18",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "SHMS is a National program that aims in enriching the educational content to support education. This program seeks to find a sustainable path to partnership in design, improvement, maintenance, and enhancing the quality of the digital educational content and it will contribute in providing more educational opportunities for those who speak the Arabic language. This would be achieved through partnerships with leading international and Arabic institutions for building digital repository, and localizations of the OER and building high-quality Arabic educational content. In addition, it will be opening the way for academics and students in Saudi Arabia to enrich the content through well-defined process to ensure quality.\r\n\r\nThe objectives of the program are:\r\n\r\n * Contributing to the quality of lifelong education.\r\n * Enhancing the quality and accessibility of teaching and learning resources.\r\n * Coordinating in developing creative digital content services and educational practices within the pedagogical framework.\r\n* Strengthen the coordination in design, development and quality assurance of OER.\r\n * Establish the best open educational practices, products, and outstanding processes through self-evaluation and peer review.\r\n * Encourage researchers and developers to conduct studies and propose guidelines and solutions to enhance the OER system.\r\n\r\n"
                        }
                      ],
                      "image": "https://shms.sa/static/shms/images/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "SA",
                          "addressLocality": "Riad",
                          "addressRegion": "SA.RI",
                          "postalCode": "11131"
                        },
                        "geo": {
                          "lat": 24.6319692,
                          "lon": 46.7150648
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Saudi OER Network"
                        }
                      ]
                    },
                    "startTime": "2018-03-06T13:20:07.156+01:00"
                  },
                  {
                    "@id": "urn:uuid:64526033-7b60-4a78-abc0-0a5c0f9b0db1",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:a53d5dc2-5112-4dab-862c-e4940e916ae1",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Together with UNESCO, Slovenia is inviting other countries to collaborate, explore and exchange good practices in the digital transformation of education. From 18 - 20 September 2017, Slovenia will host and organize the 2nd World OER Congress in Ljubljana in cooperation with the Commonwealth of Learning, Creative Commons, the UNESCO Chair on Open Technologies for Open Educational Resources and Open Learning, the Knwoledge for All Foundation and other partners as well as with the generous support by the Slovenian Ministry of Education, Science and Sport and the William and Flora Hewlett Foundation."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "SI",
                          "addressLocality": "Ljubljana"
                        },
                        "geo": {
                          "lat": 46.0498146,
                          "lon": 14.5067824
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "2nd World OER Congress"
                        }
                      ]
                    },
                    "startTime": "2019-03-29T11:02:59.945Z"
                  },
                  {
                    "@id": "urn:uuid:c44cc402-f4e8-40ef-9674-aac70c4cf872",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:efdeb7a5-4975-4ac0-b55b-00b9b371b579",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "##Kompetenzzentrum zur Erforschung und Weiterentwicklung der Berufsbildung\r\n\r\nDas Bundesinstitut für Berufsbildung (BIBB) ist das anerkannte Kompetenzzentrum zur Erforschung und Weiterentwicklung der beruflichen Aus- und Weiterbildung in Deutschland. Das BIBB identifiziert Zukunftsaufgaben der Berufsbildung, fördert Innovationen in der nationalen wie internationalen Berufsbildung und entwickelt neue, praxisorientierte Lösungsvorschläge für die berufliche Aus- und Weiterbildung."
                        },
                        {
                          "@language": "en",
                          "@value": "The Federal Institute for Vocational Education and Training (BIBB) is recognized as a center of excellence for vocational research and for the progressive development of vocational education and training (VET) in Germany.\r\nBIBB works to identify future challenges in VET, stimulate innovation in national and international vocational systems, and develop new, practiceoriented solutions for both initial and continuing vocational education and training."
                        }
                      ],
                      "image": "https://www.bibb.de/system/layout/logo.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Bonn",
                          "addressRegion": "DE.NW",
                          "postalCode": "53175",
                          "streetAddress": "Robert-Schuman-Platz 3  "
                        },
                        "geo": {
                          "lat": 50.706490785412115,
                          "lon": 7.138207718089687
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Bundesinstitut für Berufsbildung"
                        },
                        {
                          "@language": "en",
                          "@value": "Federal Institute for Vocational Education and Training"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T13:25:35.100Z"
                  },
                  {
                    "@id": "urn:uuid:fc19da7c-226a-41f1-b85b-05851b20e393",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "## Das zweite OER-Festival\r\n\r\n21 Monate nach dem ersten OER-Festival #OERde16 wird es bei der #OERde17 weiter darum gehen, den Austausch untereinander und die Sichtbarkeit der OER-Community zu katalysieren. Denn darauf kommt es an, wenn das Jahr 2017 rückblickend nicht als Strohfeuer, sondern als Tipping Point gelten soll. Das OER-Festival 2017 #OERde17 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen die bisherigen Aktivitäten feiern und über die nächsten Schritte der OER-Entwicklung beratschlagen.\r\n\r\n(Das „de“ in #OERde17 steht übrigens nicht für „Deutschland“, sondern für „deutschsprachig“. Denn wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.)\r\n\r\n## OERcamp, OER-Fachforum, OER-Award, OER-Atlas\r\n\r\nDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können:\r\n\r\n- das OERcamp – das Treffen der Praktiker*innen (27./28.11.)\r\n- das OER-Fachforum – als Dialog der Macher*innen und Multiplikator*innen (28./29.11.)\r\n- der OER-Award – die Auszeichnung für Open Educational Resources im deutschsprachigen Raum (mit Preisverleihung am 27.11.)\r\n- der OER-Atlas – die gebündelte Bestandsaufnahme der #OERde-Landschaft (veröffentlicht am 28.11.)"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10119",
                          "streetAddress": "Pfefferwerk, Christinenstraße 18"
                        },
                        "geo": {
                          "lat": 52.53204,
                          "lon": 13.410474
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER-Festival 2017"
                        }
                      ]
                    },
                    "startTime": "2018-04-05T14:41:23.792+02:00"
                  },
                  {
                    "@id": "urn:uuid:15255017-ccc8-4117-933e-df256772fd0d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:24af1159-f5c7-4756-8c48-2030789fca1e",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:0ab0199a-b1db-4e74-84c7-3ad7e42c21af",
                          "@type": "Organization",
                          "description": [
                            {
                              "@language": "en",
                              "@value": "# Who we are\n\nWe are the UK higher, further education and skills sectors’ not-for-profit organisation for digital services and solutions.\n\nWe are:\n\n *   Dedicated entirely to the sectors’ individual and collective needs\n *   Not a vendor: we deal with and/or work with vendors and publishers on the collective behalf\n *   Not for profit: every pound is used for the sectors’ benefit\n *   Objective, but not unbiased: we put the sectors’ interests above all else\n\n# What does Jisc do?\n\nWe champion the importance and potential of digital technologies for UK education and research; and do three main things:\n\n *  We operate shared digital infrastructure and services\n *  We negotiate sector-wide deals with IT vendors and commercial publishers\n *  We provide trusted advice and practical assistance for universities, colleges and learning providers\n\nOur research and development work is integrated across these three areas.\n\nWorking closely with colleagues and sector bodies our aim is to:\n\n*    Deliver considerable collective digital advantage, financial savings and efficiencies for UK universities, colleges and learning providers today\n*    Ensure these benefits are sustained and intelligently further enhanced"
                            }
                          ],
                          "image": "https://ux.jisc.ac.uk/ui/img/jisc-logo.png",
                          "location": {
                            "address": {
                              "addressCountry": "GB",
                              "addressLocality": "London",
                              "addressRegion": "GB.CN",
                              "postalCode": "WC2E7EN",
                              "streetAddress": "Brettenham House, 5 Lancaster Place"
                            },
                            "geo": {
                              "lat": 51.51039055,
                              "lon": -0.118864379082899
                            }
                          },
                          "name": [
                            {
                              "@language": "en",
                              "@value": "Jisc"
                            }
                          ]
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Widely available learning content, and informational content, is fundamentally changing the relationship between students and their institutions as sources of expertise. This presents a challenge to existing models of the production of academic knowledge and the role of the institution in supporting student learning. Coupled to this, HE funding models are changing in response economic pressures, many institutions are re-examining their own business models in response to this.\r\n\r\nBetween 2009 and 2012 HEFCE invested in this area through the JISC and the Academy to promote the sharing and reuse of learning resources, and to provide a reputational benefit to UK higher education through the promotion of high quality learning resources worldwide.\r\n\r\nDuring the UKOER Programme more than 80 projects benefited from funding, many with multiple partners across a wide range of sectors. The institutions involved experienced significant benefits and the UK HE sector as a whole has experienced increased academic reputation as a result of the work undertaken by this programme.\r\n\r\nThe Programme built on previous work in the areas of digital content, repositories and sharing of learning materials and involved three phases of activity as illustrated by the following diagram:\r\n\r\n<img src=\"https://openeducationalresources.pbworks.com/f/1358163674/ukoer.png\"style=\"width:600px\">\r\n"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "UK Open Educational Resources Programme"
                        }
                      ],
                      "startTime": "2009"
                    },
                    "startTime": "2018-04-05T14:55:36.286+02:00"
                  },
                  {
                    "@id": "urn:uuid:3b3243e3-8b37-4b92-884f-7b5f6fd4f46f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:55c2b26d-af3c-4112-9946-b930d74abfb4",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open Educational Resources (OER) are gaining momentum in higher education. To build up regional partnerships and collaborations on OER, the first GWLA/Alliance OER conference themed “From Vision to Action” is here! If you are interested in or working on OER, please see more details below. To receive news about the conference, please subscribe to the conference listserv. Contact events@gwla.org with questions.\n\nThe Greater Western Library Alliance (GWLA) and Colorado Alliance of Research Libraries (Alliance) joint conference, \"From Vision to Action, on Open Educational Resources (OER) in higher education will take place August 1-2, 2018, in Denver, Colorado."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Denver",
                          "addressRegion": "US.CO"
                        },
                        "geo": {
                          "lat": 39.7391428,
                          "lon": -104.984696
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "From Vision to Action, on Open Educational Resources (OER) in higher education"
                        }
                      ]
                    },
                    "startTime": "2018-07-09T13:36:50.788Z"
                  },
                  {
                    "@id": "urn:uuid:30a14865-1ff0-4f86-86ec-2a846409c6d7",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e08975fe-acc0-4733-8496-2cfc034a120a",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Das Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen (hbz) ist eine zentrale Dienstleistungs- und Entwicklungseinrichtung für die Hochschulbibliotheken in Nordrhein-Westfalen und Rheinland-Pfalz. Es wurde 1973 gegründet. Im Mittelpunkt der Dienstleistungen des hbz stehen die Bereitstellung und Verwaltung eines Verbundkatalogs für Universitätsbibliotheken und andere Bibliotheken. So finden Sie innerhalb des hbz viel Know-how in den Bereichen Datenaggregation, Datennormalisierung und Bereitstellung von Discovery-Schnittstellen.\r\n\r\nDas hbz ist seit 2002 im Bereich Open Access (OA) aktiv, beginnend mit dem Hosting institutioneller Repositorien und seit 2004 mit der Bereitstellung einer Open-Access-Zeitschriftenplattform Digital Peer Publishing (DiPP). Seit vielen Jahren setzt sich hbz aktiv für Webstandards und die offene Lizenzierung von Daten ein, die über Bibliotheken veröffentlicht werden. Das hbz war eine der Bibliotheksorganisationen, die bei der Freigabe von Bibliotheksdaten unter einer offenen Lizenz Pionierarbeit geleistet haben."
                        },
                        {
                          "@language": "en",
                          "@value": "The North Rhine-Westphalian Library Service Center (hbz) is a central service and development organization for university libraries in Northrhine-Westphalia and Rhineland-Palatinate. It was founded in 1973. At the center of hbz's services are the provision and management of a union catalog for university libraries and other libraries. Thus, you will find a lot of expertise in data aggregation, data normalization and provision of discovery interfaces within the hbz.\r\n\r\nThe hbz is active in the area of Open Access (OA) since 2002, beginning with hosting of institutional repositories and since 2004 with providing an OA journal platform Digital Peer Publishing (DiPP). Since many years hbz is actively promoting web standards and the open licensing of data published through libraries. hbz was one of the library organizations worldwide pioneering with opening up library data. "
                        }
                      ],
                      "image": "https://www.hbz-nrw.de/service/mediathek/logos/hbz/hbz-logo-gross",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Köln",
                          "addressRegion": "DE.NW",
                          "postalCode": "50674",
                          "streetAddress": "Jülicher Straße 6"
                        },
                        "geo": {
                          "lat": 50.934082,
                          "lon": 6.935474
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen"
                        },
                        {
                          "@language": "en",
                          "@value": "North Rhine-Westphalian Library Center"
                        }
                      ]
                    },
                    "startTime": "2017-12-11T18:36:00.136+01:00"
                  },
                  {
                    "@id": "urn:uuid:2898e69f-c7bf-4a83-860b-7a31415d37ff",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e46174c0-3c84-11e5-a256-54ee7558c81f",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Lumen Learning helps institutions and faculty replace commercial educational materials with open educational resources. "
                        }
                      ],
                      "image": "http://lumenlearning.com/wp-content/uploads/2014/02/LumenLogo200x70.png",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Portland",
                          "addressRegion": "US.OR",
                          "postalCode": "97209",
                          "streetAddress": "600 NW 14th Ave, Suite 200"
                        },
                        "geo": {
                          "lat": 45.5271201,
                          "lon": -122.6883411
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Lumen Learning"
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:31:22.335Z"
                  },
                  {
                    "@id": "urn:uuid:0189b498-de10-4c86-8368-520499b56931",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:a3e60b58-f52a-4cef-a2f6-8c76418204c5",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Default Creative Commons Attribution intellectual property policy."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "NZ"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Otago Polytechnic Intellectual Property Policy"
                        }
                      ]
                    },
                    "startTime": "2019-03-22T12:52:59.930Z"
                  },
                  {
                    "@id": "urn:uuid:e90cb9f1-4ea8-4e67-acc6-07bc8dde94f6",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5b43a1bb-d6eb-4bc6-a8a9-924f8db16916",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Monterrey Institute of Technology and Higher Education (in Spanish: Instituto Tecnológico y de Estudios Superiores de Monterrey, ITESM) commonly shortened as Monterrey Institute of Technology (Tecnológico de Monterrey) or Monterrey Tech (Tec de Monterrey) is one of the largest private, nonsectarian and coeducational multi-campus universities in Latin America with over 90,000 students at the high school, undergraduate, and postgraduate levels.\n\nTecnologico de Monterrey is a private, non-profit academic institution with 65 years of experience. It is composed of 33 campuses across Mexico that offer high-school programs, undergraduate and graduate degrees, continuing education, as well as social programs. There are 10 International liaison offices, located in Canada, the United States of America, France, Spain, Belgium and Switzerland.\n\nThrough technology-based distance programs, Tecnologico de Monterrey is a pioneer in distance education with more than 19 years of experience through its Virtual University, reaching 29 countries. At present, the Virtual University offers totally online undergraduate, postgraduate, continuing education, and social programs.\n\nThe institution enjoys national and international accreditations, including: SACS, AACSB, EFME, ABET, CACEI, AMFEM, IFT, NHSA, SECAI, CACECA."
                        }
                      ],
                      "image": "http://vignette3.wikia.nocookie.net/logopedia/images/b/b7/Tecnol%C3%B3gico_de_Monterrey_old.svg/revision/latest/scale-to-width-down/640?cb=20140916190339",
                      "location": {
                        "address": {
                          "addressCountry": "MX",
                          "addressLocality": "Monterrey",
                          "addressRegion": "MX.NL",
                          "postalCode": "C.P. 64849",
                          "streetAddress": "Ave. Eugenio Garza Sada 2501 Sur Col. Tecnológico"
                        },
                        "geo": {
                          "lat": 25.6764922,
                          "lon": -100.3060828
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Tecnológico de Monterrey"
                        }
                      ]
                    },
                    "startTime": "2018-05-16T07:09:23.090Z"
                  },
                  {
                    "@id": "urn:uuid:5229c2b1-6bb1-45af-b275-176049b47878",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7af683fb-ca16-4f8b-8983-6877757f0adb",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Mahatma Gandhi Institute of Education for Peace and Sustainable Development was established with the generous support of the Government of India. We are an integral part of UNESCO, and the organization’s specialist institute on education for peace and sustainable development to foster global citizenship. In 2009, the UNESCO General Conference decided to set up an institute focusing on peace and sustainability education based in the vast and rapidly growing Asia-Pacific region. In 2012, the Director-General of UNESCO, Irina Bokova, and the President of India, Pranab Mukherjee, launched the institute."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "IN",
                          "addressLocality": "New Delhi",
                          "addressRegion": "IN.DL",
                          "postalCode": "110001",
                          "streetAddress": "UNESCO MGIEP ICSSR Building First Floor 35 Ferozshah Road"
                        },
                        "geo": {
                          "lat": 28.624066338272698,
                          "lon": 77.23046450828132
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Mahatma Gandhi Institute of Education for Peace and Sustainable Development"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T15:03:52.067Z"
                  },
                  {
                    "@id": "urn:uuid:d8b5dd44-1803-49d0-aaed-2dc216b01444",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:7067ff60-77eb-11e5-9f9f-c48e8ff4ea31",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "<p>The African Virtual University (AVU) is a Pan African Intergovernmental Organization established by charter with the mandate of significantly increasing access to quality higher education and training through the innovative use of information communication technologies.</p><p>Eighteen (18) African Governments - Kenya, Senegal, Mauritania, Mali, Cote d'Ivoire, Tanzania, Mozambique, the Democratic Republic of Congo, Benin, Ghana, Guinea, Burkina Faso, Niger, South Sudan, Sudan, The Gambia, Guinea Bissau, and Nigeria have signed the Charter establishing the AVU as an Intergovernmental Organization.</p><p>The AVU has its headquarters in Nairobi, Kenya and a Regional office in Dakar Senegal.  The AVU has Host Country Agreements with the governments of Kenya and Senegal and the AVU has diplomatic status in these countries.</p>"
                        }
                      ],
                      "image": "https://oerworldmap.org/assets/images/avu.png",
                      "location": {
                        "address": {
                          "addressCountry": "KE",
                          "addressLocality": "Nairobi",
                          "addressRegion": "KE.NB",
                          "streetAddress": "Ring Road, Kilimani"
                        },
                        "geo": {
                          "lat": -1.2925052,
                          "lon": 36.7872652
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "African Virtual University"
                        }
                      ]
                    },
                    "startTime": "2018-07-03T13:21:50.986Z"
                  },
                  {
                    "@id": "urn:uuid:59aeb4f6-bbf9-467c-b0b8-5764f5e8e141",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:56605dcb-9064-4266-8259-8eedafc6bf38",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:e495cc00-9377-48b6-8c9a-ba5ced16f8ba"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "<p>Das optes-Projekt möchte die Fähigkeit der Studierenden zum Selbststudium, insbesondere in den Mathematik-affinen Grundlagenfächern, verbessern und damit die Chance für einen erfolgreichen Studienabschluss erhöhen.</p>\r\n<p> Dazu entwickeln und erproben die beteiligten Hochschulen verschiedene Angebote, Inhalte und Konzepte für das begleitete Selbststudium der Mathematik. Nach erfolgreicher Erprobung durch die Projektpartner können diese von allen interessierten Lehrenden und Bildungseinrichtungen übernommen und angepasst werden.</p>\r\n<p> Veröffentlicht werden alle erstellten Lern- und Übungsmaterialien unter einer Creative Commons-Lizenz und alle Softwareentwicklungen im Rahmen von optes unter der General Public Licence (GPL3). </p>"
                        },
                        {
                          "@language": "en",
                          "@value": "<p>The optes project aims at improving students self-learning skills, especially in basic mathematics related classes and increase chances of successful studies and graduation.</p> <p>Therefore the participating universities develope and test different offerings, contents and concepts for guided self-studies in mathematics.  Following the successful testing phase the project contents can be adopted and adjusted by interested teachers and educational institutions.</p>\r\n<p> All contents are published under a creative common license and all software developments under General Public License (GPL3). </p>"
                        }
                      ],
                      "image": "https://www.hs-owl.de/kom/fileadmin/_processed_/csm_optes-logo_b18e4dee03.jpg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "optes - Optimierung der Selbststudiumsphase"
                        },
                        {
                          "@language": "de",
                          "@value": "optes - Optimierung der Selbststudiumsphase"
                        }
                      ],
                      "startTime": "2012-01-01"
                    },
                    "startTime": "2018-07-19T09:40:48.275Z"
                  },
                  {
                    "@id": "urn:uuid:e4003a02-008b-41f9-87b1-c4c283d6f5fa",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "This is where it all started."
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:446e6f66-a51d-4ee0-a8ad-68063c11333f",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "“The idea is simple: to publish all of our course materials online and make them widely available to everyone.”\nDick K.P. Yue, Professor, MIT School of Engineering \n\nMIT OpenCourseWare is often considered to be the start of the OER movement. Since 2002 it has published  more than 2400 courses, which have been visited by more than 300 million users. "
                        }
                      ],
                      "image": "http://ocw.mit.edu/images/ocw_mast.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "MIT OpenCourseWare"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T17:27:49.778Z"
                  },
                  {
                    "@id": "urn:uuid:945c7a87-42ba-4d77-969b-6dcd2b5607c4",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c560e277-254d-4021-837c-c49a4172cc8b",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "<p>Der BIMS e.V. ist eine Plattform für das gemeinnützige Engagement einiger Wissenschaftler und Praktiker (\"think-and-do-tank\") aus dem Bildungsbereich.  </p>\r\n<p>BIMS e.V. beschäftigt sich in  unterschiedlichen Initiativen damit, wie Bildung und Bildungsangebote für alle erreichbar und frei zugänglich werden können: Entwicklung und Erprobung von und die Forschung zu freien Bildungsmaterialien (OER) und offene Lernangeboten (MOOC), dem Einsatz von Technologien am Arbeitsplatz und für das Lernen sowie die kreative Nutzung stehen dabei derzeit im Vordergrund.</p>\r\n<p> Politisches Engagement in unterschiedlichen Initiativen bei politischen Entscheidungsträgern und der Bevölkerung soll ein entsprechend erweitertes Bewusstsein für offene Bildung und freien Zugang zur Bildung bewirken.</p>"
                        },
                        {
                          "@language": "en",
                          "@value": "<p>The BIMS e.V. is a platform for the non-profit encouragement of some researchers and practitioners (\"think-and-do-tank\") from the educational field. In various initiatives, BIMS e.V. aks for and develops solutions to education and educational offerings that are freely available for users.  </p>\r\n<p>At the time a main focus is set on development, trial and research in the field of OER and open learning offerings (MOOCS). The application of technology on workplaces and for learning causes as well as creative usage of those are in the centre of scientific attention.</p> \r\n<p>Political activities in different initiatives is deployed to raise the public interest for open materials and education in general. </p>"
                        }
                      ],
                      "image": "http://www.bimsev.de/n/templates/greyblack_float760_m800/images/bgheader.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Bad Reichenhall",
                          "addressRegion": "DE.BY",
                          "postalCode": "83435",
                          "streetAddress": "Fallbacherstr. 2a"
                        },
                        "geo": {
                          "lat": 47.726426,
                          "lon": 12.87526
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Bildung Migration Innovation Soziale Exzellenz gem. e.V."
                        },
                        {
                          "@language": "de",
                          "@value": "Bildung Migration Innovation Soziale Exzellenz gem. e.V."
                        }
                      ]
                    },
                    "startTime": "2018-06-21T12:42:17.426Z"
                  },
                  {
                    "@id": "urn:uuid:780aef8e-60ef-43ea-8790-c157e3b5afe2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:b66664c9-8f5c-459a-9f13-1e9773c151c3",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Der Bericht der Arbeitsgruppe der Länder und des Bundes bezieht Position zur Frage der Nutzbarkeit von „Open Educational Resources“ in Lehr- und Lernprozessen sowie zu Maßnahmen und Rahmenbedingungen für die Entwicklung einer entsprechenden pädagogischen und technischen Infrastruktur. Ausgehend von einer inhaltlichen Bestimmung für „Open Educational Resources“ diskutiert der Bericht zunächst die Potenziale und Herausforderungen für eine systematische Integration bzw. Förderung von OER im deutschen Bildungssystem. Dabei werden pädagogische, organisatorisch-funktionale, technische, juristische und wirtschaftliche\nAspekte beleuchtet. Anschließend werden kurz- und mittelfristig umzusetzende Maßnahmen empfohlen, in deren Mittelpunkt der zentrale Nachweis und die gesicherte Verfügbarkeit von OER stehen, begleitet von Aktivitäten zur inhaltlichen Qualitätssicherung und zur Förderung der Erstellung von OER. Im Fazit werden die positiven Wirkungsmöglichkeiten für OER im Kontext aktueller Anforderungen an Lehren und Lernen betont. Gleichzeitig wird auf die notwendige Unterstützung dieses Entwicklungsprozesses seitens des Bundes und der Länder hingewiesen."
                        },
                        {
                          "@language": "en",
                          "@value": "The report of the Working Group of the Länder and the Federal Government takes a position on the question of the usability of \"Open Educational Resources\" in teaching and learning processes as well as on measures and framework conditions for the development of a corresponding pedagogical and technical infrastructure. Starting from a definition of the of \"Open Educational Resources\", the report first discusses the potential and challenges for the systematic integration and promotion of OER in the German education system. Pedagogical, organisational-functional, technical, legal and economic aspects are examined. Subsequently, measures to be implemented in the short and medium term will be recommended, focusing on the central search mechanism and the secure availability of OER, accompanied by activities to ensure quality assurance as well as to promote the creation of OER. In conclusion, the positive impact possibilities for OER in the context of current demands on teaching and learning are emphasised. At the same time, the necessary support for this development process on the part of the Federal Government and the Länder is pointed out.\n\nThe report includes six recommendations:\n 1. Establishment of a new or the support of already existing (national) platforms on the Internet, on which references to various OER-sources - and if useful also on individual OER - can be made available, found and downloaded.\n 2. Improve legal certainty in OER licensing\n 3. Sensitize to the potentials of OER\n 4. Promote knowledge through research on OER\n 5. Intensify European and international cooperation on OER\n 6. Creation of an information and coordination point for OER, in particular for schools and lifelong learning.\n\nThe report prepared the [OERinfo Funding programme](https://oerworldmap.org/resource/urn%3Auuid%3A3f11cdbd-a74a-4aa4-83b3-b4148bfdbe82?), which was published in early 2016. It was created by a joint working group which consisted of members from both the federal and the state level as well as by external experts."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE"
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Bericht der Arbeitsgruppe aus Vertreterinnen und Vertretern der Länder und des Bundes zu Open Educational Resources (OER)"
                        }
                      ]
                    },
                    "startTime": "2018-11-27T17:19:59.107Z"
                  },
                  {
                    "@id": "urn:uuid:6b8e001f-3ae3-4742-a5eb-73c81e5a10cd",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c21f22ae-7f00-11e5-a636-c48e8ff4ea31",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Curriki is an online, free, open education service. Curriki is structured as a nonprofit organization to provide open educational resources primarily in support of K-12 education. Curricula and instructional materials are available at the Curriki website to teachers, professional educators, students, lifelong learners, and parents."
                        }
                      ],
                      "image": "http://ionutmaxim.com/site/wp-content/uploads/2014/10/curriki-logo1.jpg",
                      "location": {
                        "address": {
                          "addressCountry": "US",
                          "addressLocality": "Cupertino",
                          "addressRegion": "US.CA",
                          "postalCode": "95014",
                          "streetAddress": "20660 Stevens Creek Boulevard, #332 "
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Curriki"
                        }
                      ]
                    },
                    "startTime": "2018-05-16T06:19:59.190Z"
                  },
                  {
                    "@id": "urn:uuid:64cd4ae9-6498-4673-8638-9ecb1dfc3813",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:10a0c842-2fa6-11e5-a60f-001999ac7927",
                      "@type": "Article",
                      "image": "https://oerworldmap.org/assets/images/oerhub.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "OER Research Hub"
                        }
                      ]
                    },
                    "startTime": "2019-02-20T08:50:23.876Z"
                  },
                  {
                    "@id": "urn:uuid:e4202f44-e5e7-480e-b99a-f02587b34975",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:372e5970-aafa-47c6-b75e-9f08ad0e7a1c",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Offene Bildungsmaterialien (Open Educational Resources, OER) bedeuten: gute Materialien können von vielen geteilt, weiter entwickelt und verbessert werden – statt immer wieder neu entwickelter Broschüren, die nach Projektende im Altpapier landen, könnten Umweltorganisationen auf die Arbeit anderer aufbauen und Wissen sinnvoll weiter entwicklen. Voraussetzung dafür ist die Lizenzierung unter einer CreaticeCommons-Lizenz. Hilfreich sind ferner Plattformen, auf denen die Ressourcen geteilt werden. \n\nWir geben Impulse, wollen aber auch mit euch diskutieren, welche Herausforderungen bewältigt werden müssten, um diesen Ansatz weiter zu verbreiten. \nNele Hirsch berät und unterstützt in dem von ihr gegründeten eBildungslabor Schulen und zivilgesellschaftliche Organisationen zu allen Aspekten einer zeitgemäßen Bildung. Ihr Schwerpunktthema sind OER und die Potentiale einer offenen Bildungspraxis. \nRasmus Grobe ist Weiterbildner und Bildungsforscher, u.a. leitet er das Weiterbildungsprogramm Kurs ZukunftsPiloten für junge Umweltengagierte (Deutscher Naturschutzring / Bewegungsakademie)."
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Berlin",
                          "addressRegion": "DE.BE",
                          "postalCode": "10623",
                          "streetAddress": "Straße des 17. Juni 135"
                        },
                        "geo": {
                          "lat": 52.5108574,
                          "lon": 13.3276087
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Offene Bildungsmaterialien (OER) für die Umweltbewegung!"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T14:13:45.014Z"
                  },
                  {
                    "@id": "urn:uuid:a92ebf02-8f1b-4072-958f-e7a86b47657a",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:fee9afb7-79d7-41d5-9c07-e16b598ab2ed",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Edukatu is a learning network that aims to encourage the exchange of knowledge and practices on conscious consumption among teachers and students of elementary schools throughout Brazil.\n\nIn addition to gathering information and reference materials on the subject, Edukatu invites participants to carry out activities through learning circuits. This guided navigation is an innovative experience that will take them: 1. to solve research and study challenges; 2. to comment and debate with other internet users; 3. to share their productions and/or creations on the theme; and 4. to promote practical actions of intervention in the school communities involved.\n\nThrough learning circuits and other interactive tools, Edukatu also aims to be an instrument of mobilization, facilitating the development of a community of continuous engagement in favor of conscious consumption. In this network, each participant will become a disseminator of what he or she has learned, expanding the scope of the debates in a collaborative manner and intervening directly in the daily life and daily practices of those around him or her.\n\nTranslated with www.DeepL.com/Translator"
                        },
                        {
                          "@language": "pt",
                          "@value": "O Edukatu é uma rede de aprendizagem que visa incentivar a troca de conhecimentos e práticas sobre consumo consciente entre professores e alunos do Ensino Fundamental de escolas em todo o Brasil.\r\n\r\nAlém de reunir informações e materiais de referência sobre o tema, o Edukatu convida os participantes a realizar atividades por meio de circuitos de aprendizagem. Essa navegação guiada é uma experiência inovadora que os levará: 1. a solucionar desafios de pesquisa e estudo; 2. a comentar e debater com outros internautas; 3. a compartilhar suas produções e/ou criações sobre o tema; e 4. a promover ações práticas de intervenção nas comunidades escolares envolvidas.\r\n\r\nPor meio dos circuitos de aprendizagem e de outras ferramentas interativas, o Edukatu visa ser também um instrumento de mobilização, facilitando o desenvolvimento de uma comunidade de engajamento contínuo em favor do consumo consciente. Nessa rede, cada participante se tornará um disseminador do que aprendeu, ampliando de forma colaborativa o alcance dos debates e intervindo diretamente no dia a dia e nas práticas cotidianas daqueles que o cercam."
                        }
                      ],
                      "image": "https://edukatu.org.br/assets/edukatu_logo-fa10f28cc0d7a12a27277e0ccdd24221.png",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "Edukatu - Rede de Aprendizagem para o Consumo Consciente"
                        }
                      ]
                    },
                    "startTime": "2018-12-07T14:25:05.617Z"
                  },
                  {
                    "@id": "urn:uuid:62e6df4e-2aa5-49f8-abd4-68e1cb415d7c",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5f5b3a39-ba43-4876-a189-d1302ca87036",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "This policy sets out the University’s position and guidance on the use and publication of Open Educational Resources (OERs) within educational situations at the University. It was endorsed by the Vice Chancellor’s Executive Group and the Taught Student Education Board (as TSEB/12-15) in November 2012.\n\nThe policy mandates and encourages staff and students to make use of OER to enhance teaching and learning. It specifies that any OER created are expected to be of the the same quality and inclusiveness as other course materials. Where OER are published it is expected that whole courses are not shared so that commercial interests can be protected.\n\nThe policy also contains specific information about licensing options and sharing with the university library.\n\n(Description taken from [OER Impact Map](http://oermap.org/policy/university-of-leeds-open-educational-resource-policy-2012/))"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "GB"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "University of Leeds Open Educational Resources"
                        }
                      ]
                    },
                    "startTime": "2019-03-22T14:03:59.982Z"
                  },
                  {
                    "@id": "urn:uuid:1a73d996-139f-41f0-895a-0988f9f359a4",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:5a6e5e66-6f8e-4a7d-8193-69d66eebcb51",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "AU Press operates on the model of a knowledge-based economy, to which we contribute by providing peer-reviewed publications unfettered by the desire to commodify thought or to restrict access to ideas.\r\n\r\nAU Press is the first university press to be established by a Canadian university in the twenty-first century. We are dedicated to the dissemination of knowledge and research through open access digital journals and monographs, as well as through new electronic media.\r\n\r\nAU Press will offer its imprint only to scholarship of the highest quality, as determined through peer review. In keeping with Athabasca University’s mission of overcoming barriers to education, we intend to work with emerging writers and researchers to promote success in scholarly publishing.\r\n\r\nOur geographical focus is on Canada, the North American West, and the Circumpolar North. One of our mandates is to publish innovative and experimental works (in both fiction and non-fiction) that challenge established canons, subjects, and formats. We plan to develop series that contribute to the scholarship of established and new disciplines. As we are dedicated to making AU Press publications accessible to a broad readership through open access technologies, we cultivate the areas of open-, distance-, and e-learning. We promote neglected forms such as diary, memoir, and oral history. AU Press also publishes websites (under its imprint) with content that has scholarly parameters and standards, especially grey literature on distance learning; and primary sources in labour studies, Métis and Aboriginal Studies, gender studies, and the environment."
                        }
                      ],
                      "image": "http://aupress.ca/images/logo_main.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "AU Press "
                        }
                      ]
                    },
                    "startTime": "2018-06-04T21:51:45.923Z"
                  },
                  {
                    "@id": "urn:uuid:81750882-6bd5-4626-b90d-32b4a341d396",
                    "@type": "LighthouseAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "A true milestone for the global mainsteaming of OER and Open Education. I doubt that OER would have developed the way it did in Germany withouth the declaration!"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:37fbdbc5-982a-45a9-b0e8-fc4f26d7107a",
                      "@type": "Policy",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The 2012 Paris OER Declaration was formally adopted at the 2012 World Open Educational Resources (OER) Congress held at the UNESCO Headquarters in Paris from 20 – 22 June 2012. The Declaration marks a historic moment in the growing movement for Open Educational Resources and calls on governments worldwide to openly license publicly funded educational materials for public use. It has been translated into 16 languages so far."
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "2012 Paris OER Declaration"
                        }
                      ]
                    },
                    "startTime": "2019-02-28T11:50:13.878Z"
                  },
                  {
                    "@id": "urn:uuid:4f5d421f-9633-4e84-9908-12b4738b7246",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3425c57c-159c-4316-8b8b-6a7899cfa06d",
                      "@type": "Product",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Mit edu-sharing Software können Lernplattformen, u.a. Bildungssoftware-Systeme, miteinander vernetzt werden, um Lerninhalte, Metadaten und Tools auszutauschen und in einer Bildungscloud auffindbar und in allen angeschlossenen Systemen nutzbar zu machen."
                        }
                      ],
                      "image": "https://edu-sharing.com/wp-content/uploads/sites/17/2017/03/edu-sharing-Logo-1.svg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "edusharing"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T16:19:23.024+02:00"
                  },
                  {
                    "@id": "urn:uuid:1a759dd5-56a3-4a5e-847d-e75a3791b09f",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:822ef755-4722-4f82-8440-7bf4ada179c7",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:fd2d07ba-acc1-4155-888a-1af2e6375c8a"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Open Educational Resources (OER) verbinden das humanistische Ideal der „Bildung für alle“ mit kostensparender, auf kooperativer Arbeit beruhender Produktion hochwertiger Lehrmaterialien. Um die Entwicklung von OER im Land wirksam zu fördern, bedarf es einer nichtkommerziellen institutionellen Rahmenstruktur für die Recherche, Veröffentlichung und Kommunikation. Deshalb soll am Informations-, Kommunikations- und Medienzentrum (IKM) der Universität Tübingen das zentrale OER-Repositorium des Landes Baden-Württemberg zur Nutzung durch sämtliche Hochschulen aller Hochschularten aufgebaut werden. Das IKM als klassischer Anbieter für Wissenschaftsinformation wird mit seiner Erfahrung als eLearning-Dienstleister die Versorgung mit OER als auf Dauerhaftigkeit konzipierte Dienstleistung entwickeln, die in Kooperation mit engagierten Hochschulen des Landes nachhaltig betrieben wird. Funktionale Besonderheiten der OER (Stichworte: „Revise, Remix, Redistribute“, die deutlich über die mit einer OpenAccess-Lizensierung möglichen Nutzungsarten „Retain“ und „Reuse“ hinausgehen) werden durch zusätzliche Kommunikationskomponenten in der Lösung adressiert. Im Repositorium wird die Qualität der Lehre an den Hochschulen des Landes durch die freie, technisch niederschwellige, öffentliche Bereitstellung von OER sichtbar werden."
                        }
                      ],
                      "image": "https://www.e-teaching.org/praxis/erfahrungsberichte/ein-zentrales-oer-repositorium-fuer-die-hochschulen-in-baden-wuerttemberg/@@download/image/ZOERR_180.png",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Zentrales Repositorium für Open Educational Resources des Landes Baden Würtemberg"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T16:30:34.611+02:00"
                  },
                  {
                    "@id": "urn:uuid:7ca9e010-22fd-4342-8fd1-a99f214cda0d",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:3d86a789-d9af-4981-b812-e42574b56f5c",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Books for languages is an Open Second Languages Publishing Company. We aim at democratising the second language teaching and learning trought the creation of Open Educational Resources for Teaching and Learning Second Languages which can be reused, modified, and shared and that provide unconstrained materials for the benefit and the enjoyment of others."
                        }
                      ],
                      "image": "https://miro.medium.com/fit/c/240/240/1*eLAq3l08FxsaCKHhkXa8sw.png",
                      "location": {
                        "address": {
                          "addressCountry": "ES",
                          "addressRegion": "ES.VC"
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Books for Languages"
                        }
                      ]
                    },
                    "startTime": "2019-02-26T18:23:31.154Z"
                  },
                  {
                    "@id": "urn:uuid:007384a6-b535-4629-a355-c8a065147538",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:467a111e-3470-45ad-aeda-42d8f160079e",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:d3c6e687-6054-41ec-a190-71266843fa55"
                        }
                      ],
                      "description": [
                        {
                          "@language": "en",
                          "@value": "CO-LAB is a forward-looking project focused on making collaborative teaching and learning a reality in the classroom. Being able to collaborate effectively is a valuable 21st century skill, yet teaching about or through collaboration remains rare in schools because of a lack of understanding of what real collaboration in an educational setting means, and because existing policy conditions do not always enable it to flourish. Practitioners and policy makers need a dedicated space and time to experiment and better understand what collaborative teaching and learning means in terms of policy and practice. CO-LAB provides these stakeholders with that opportunity.\r\n\r\nCO-LAB aims to:\r\n * Design as well as enrich existing collaborative teaching and learning scenarios and train teacher trainers, student teachers and teachers to implement them\r\n * Allow teachers to test these scenarios in the classroom and report back concerning the enablers and obstacles they faced\r\n * Evaluate the process and define how education policy frameworks could be adapted to better support collaborative teaching and learning in the classroom\r\n\r\nCO-LAB’s expected achievements are to:\r\n * Make a considerable contribution to capacity building through collaborative teaching and learning scenarios and a MOOC training teachers how to most effectively use these, all of which will be made available as Open Educational Resources\r\n * Impact on national and European policy development on collaborative teaching and learning through evidence-based results\r\n * Help to mainstream effective collaborative teaching & learning in schools through the project’s final recommendations\r\n\r\nCO-LAB (December 2015 – January 2018) is coordinated by European Schoolnet (a network of 31 Ministries of Education aimed at bringing innovation in teaching and learning to key stakeholders within the education community), and funded by the European Commission’s Erasmus+ Programme. The project’s partnership is rich and diverse consisting of Ministries of Education, teacher training organizations and research institutes from Austria, Belgium, Estonia, Ireland, Poland, and Portugal. Each of these countries has recruited teacher trainers, student teachers, teachers, head teachers, policy makers and other relevant stakeholders at national level to participate in the project."
                        }
                      ],
                      "image": "https://eeducation.at/fileadmin/_processed_/2/7/csm_colab_b994cd2b8b.jpg",
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Co-Lab"
                        }
                      ],
                      "startTime": "2015-12"
                    },
                    "startTime": "2018-01-10T09:55:47.589+01:00"
                  },
                  {
                    "@id": "urn:uuid:2c1a9e72-78a7-40f3-9907-259f824d6584",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:fdf9f5cf-7af5-4a7c-aa10-2f9a2ae37da6",
                      "@type": "WebPage",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Open education policies are formal regulations regarding support, funding, adoption, and use of open educational resources (OER) and/or open education practices (OEP). Such policies are designed to support the creation, adoption, and sharing of OER and the design and integration of OEP into programs of study. Open education policies underscore the viability and value of OER in teaching and learning and can help inculcate OEP at colleges and universities. The development of open education policies will help move OER and OEP from the periphery to the center of education practice.\n\nThis publication is one in a three-part series designed to provide a point of departure for conversations about all aspects of open education\n\n* Open Education: Content\n* Open Education: Practices\n* Open Education: Policies"
                        }
                      ],
                      "name": [
                        {
                          "@language": "en",
                          "@value": "7 Things You Should Know About... Open Education: Policy"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T20:48:27.732Z"
                  },
                  {
                    "@id": "urn:uuid:e498fb56-e22c-46bd-84f9-620c115c0726",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:898ed543-ce9a-4199-bd6d-7c9af29e9774",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Auf dieser Homepage finden Sie mathematische, physikalische und technische Erläuterungen über die Radartechnologie. Viele Radargeräte werden beispielhaft kurz mit einigen technischen Daten vorgestellt. Für das Verständnis der Radartechnologie werden hier nur wenige mathematisch- technische Kenntnisse vorausgesetzt.\n\nDie Informationen dieser Homepage sind für die Ausbildung von Bedienungspersonal an Radargeräten gedacht. In vielen Blockschaltbildern kann der Mauszeiger an den eingezeichneten Testpunkten als Tastkopf für ein virtuelles Oszilloskop verwendet werden. Für Studenten in elektrotechnischen Fächern kann diese Homepage als Einstieg in das Verständnis der Radartechnologien dienen.\n\nDie einzelnen Seiten existieren auch als für den Druck optimierte Version. Für bestimmte Anwendungen sind auch die unter Service → Druckversionen zusammengefassten Dokumente geeignet.\n\nDiese Homepage hat keine kommerziellen Ziele. Sie wurde ausschließlich für Schulungszwecke erstellt und dient als Ausbildungshilfe für Radarbediener und Radarwartungspersonal. Die Gestaltung ist absichtlich nur auf das Wesentliche konzentriert: es werden keine speicherintensiven Spezialeffekte verwendet, um auch bei sehr langsamen Internetverbindungen einen zügigen Seitenaufbau zu gewährleisten."
                        }
                      ],
                      "image": "http://www.radartutorial.eu/pic/preview.new.png",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Köln",
                          "postalCode": "50733",
                          "streetAddress": "Josefine-Clouth-Straße"
                        },
                        "geo": {
                          "lat": 50.9650167,
                          "lon": 6.9632913
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Grundlagen der Radartechnik"
                        }
                      ]
                    },
                    "startTime": "2018-07-19T16:02:17.528Z"
                  },
                  {
                    "@id": "urn:uuid:d5128e4f-7535-4936-b732-d895500b1ee0",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:c42cd6bc-6970-478d-b3f8-06baec1c0f81",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "SPARC Europe is one of Europe’s key and long-standing voices advocating for unfettered access to research and data — for the academic community; for the whole of society.\n\nMore openness in research, we believe, will lead to an accelerated rate of discovery in academia and in the private sector, and of learning at every strata of education.\n\nSPARC (the Scholarly Publishing and Academic Resources Coalition) Europe is a non-profit, member organisation comprised of a diverse body of academic institutions, library consortia, funding bodies, research institutes and some publishers, among others; all committed to delivering on the promise of open access and open science.\n\nOver the past decade, as support for open access and open science has grown, so too have the number of organisations working in a myriad of ways to advance and deliver on the various aspects of OA. We actively pursue opportunities to partner and collaborate with many of these — from LIBER to Knowledge Exchange; EIFL to Science Europe. Our network is broad and expanding."
                        }
                      ],
                      "image": "https://sparceurope.org/wp-content/uploads/2017/02/sparc-logo6.png",
                      "location": {
                        "address": {
                          "addressCountry": "NL",
                          "addressLocality": "Appeldorn",
                          "postalCode": "7324AK",
                          "streetAddress": "Watermanstraat 98"
                        },
                        "geo": {
                          "lat": 52.2396773,
                          "lon": 5.9874482
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Scholarly Publishing and Academic Resources Coalition Europe"
                        }
                      ]
                    },
                    "startTime": "2018-06-28T13:39:40.777Z"
                  },
                  {
                    "@id": "urn:uuid:b6e53ccf-dc41-4709-bdc5-3200ae2f6a13",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:983af0ad-7649-47a7-87a2-7e75921f3be4",
                      "@type": "Service",
                      "description": [
                        {
                          "@language": "pt",
                          "@value": "O Portal de Cursos Abertos - PoCA é uma plataforma de cursos a distância, abertos e gratuitos, disponibilizados no Ambiente Virtual de Aprendizagem Moodle, cujas atividades fazem parte do programa de extensão do mesmo nome, da Secretaria Geral de Educação a Distância da Universidade Federal de São Carlos (SEaD-UFSCar), registrado na Pró-Reitoria de Extensão da UFSCar.\n\nOs cursos disponibilizados no PoCA oferecem uma oportunidade de formação e atualização em diferentes áreas do conhecimento, além daquelas voltadas precipuamente para a promoção de inovações nos processos de ensino e aprendizagem. Os cursos são: massivos, pois podem ser cursados por um número muito grande de pessoas; gratuitos, pois não é preciso pagar para cursá-los; online, pois é preciso estar conectado com a Internet; a distância, já que não há previsão de aulas presenciais; abertos, pois qualquer pessoa, no Brasil ou no mundo, pode cursá-los."
                        },
                        {
                          "@language": "en",
                          "@value": "The Portal of Open Courses - PoCA is a platform of distance learning courses, open and free of charge, available in the Moodle Virtual Learning Environment, whose activities are part of the extension program of the same name, of the General Secretariat of Distance Education of the Federal University of São Carlos (SEaD-UFSCar), registered in the Pro-Reitoria de Extensão of UFSCar.\n\nThe courses available at PoCA offer an opportunity for training and updating in different areas of knowledge, in addition to those focused primarily on the promotion of innovations in teaching and learning processes. The courses are: massive, because they can be taken by a very large number of people; free, because it is not necessary to pay to take them; online, because it is necessary to be connected to the Internet; distance, since there is no provision for face-to-face classes; open, because anyone, in Brazil or the world, can take them.\n\nTranslated with www.DeepL.com/Translator"
                        }
                      ],
                      "image": "http://poca.ufscar.br/wp-content/uploads/2018/06/cropped-poca2.png",
                      "name": [
                        {
                          "@language": "pt",
                          "@value": "PoCA - Portal de Cursos Abertos da UFSCar"
                        }
                      ]
                    },
                    "startTime": "2019-04-18T09:40:22.705Z"
                  },
                  {
                    "@id": "urn:uuid:6d3d5e97-b03c-48fe-b121-44b6471fa1e2",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:e72fb33f-77d2-4445-b368-104a9b4424b5",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "The Commonwealth of Learning (COL) is an intergovernmental organisation created by Commonwealth Heads of Government to encourage the development and sharing of open learning/distance education knowledge, resources and technologies.\r\n\r\nHosted by the Government of Canada and headquartered in Burnaby, British Columbia, Canada, the Commonwealth of Learning (COL) is the world’s only intergovernmental organisation solely concerned with the promotion and development of distance education and open learning. COL is helping developing nations improve access to quality education and training.\r\n\r\nThe Commonwealth is a voluntary association of more than 50 independent sovereign states, which provide support to each other, and work together toward international goals. The Commonwealth is described as a \"family\" of nations, originally linked together in the British Empire, and now building on their common heritage in language, culture and  education, which enables them to work together in an atmosphere of greater trust and understanding than generally prevails among nations."
                        }
                      ],
                      "image": "https://www.col.org/sites/default/files/styles/image_responsive/public/COL_Logo_tagline%281%29_0.png?itok=x6mfbBpa",
                      "location": {
                        "address": {
                          "addressCountry": "CA",
                          "addressLocality": "Burnaby",
                          "addressRegion": "CA.BC",
                          "streetAddress": "4710 Kingsway, Suite 2500 "
                        },
                        "geo": {
                          "lat": 49.226202,
                          "lon": -123.001288
                        }
                      },
                      "name": [
                        {
                          "@language": "en",
                          "@value": "Commonwealth Of Learning"
                        }
                      ]
                    },
                    "startTime": "2019-03-28T19:57:53.384Z"
                  },
                  {
                    "@id": "urn:uuid:4b12771d-a862-41bd-adef-5f8c78b5b001",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:52869ea3-ffec-4edd-b781-47364cd6f1e0",
                      "@type": "Action",
                      "agent": [
                        {
                          "@id": "urn:uuid:9cca10a2-ad75-4e01-90ba-3bc7978b527f"
                        }
                      ],
                      "description": [
                        {
                          "@language": "de",
                          "@value": "Das Vorhaben erarbeitet ein Konzept für ein kooperatives Content-Netzwerk für digitales Lehren und Lernen an Hochschulen des Landes NRW unter besonderer Berücksichtigung „offener Bildungsressourcen“ („OER“) - als Vorprojekt und Grundlage für eine weitere landesweite Entwicklung. Es wird in enger Abstimmung mit dem geplanten landesweiten Online-Portal Studium und Lehre entwickelt und gliedert sich somit in die mittelfristige Planung der DH-NRW ein. Die Projektnehmer/innen werden als Ergebnis einen technischen Prototyp inklusive der notwendigen Schnittstellen zu lokalen Systemen und Repositorien eingerichtet und evaluiert haben und erste Erfahrungen zu Prozessen, etwaigen Hindernissen und notwendigen Supportstrukturen dokumentieren. Daneben bildet die Untersuchung organisatorischer und kultureller Fragestellungen, wie z.B. die nach geeigneten Anreizsystemen für OER, einen wichtigen Bestandteil des Vorhabens. Die Arbeiten werden in enger Abstimmung mit den Hochschulen, mit denen der Prototyp erprobt wird, und den Gremien der DH-NRW, sowie unter Berücksichtigung der Entwicklung in anderen Bundesländern sowie nationalen und internationalen Vorhaben durchgeführt. Das Projekt arbeitet mit bereits identifizierten interessierten Pilothochschulen, der Kreis kann erweitert werden."
                        }
                      ],
                      "name": [
                        {
                          "@language": "de",
                          "@value": "Vorprojekt Content Marktplatz NRW: Netzwerk für offene Bildungsressourcen"
                        }
                      ],
                      "startTime": "2018-11-15"
                    },
                    "startTime": "2018-11-23T14:21:15.513Z"
                  },
                  {
                    "@id": "urn:uuid:5342882e-e11e-4c13-b5fb-67a5318e41b0",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:f4f8af31-ac5d-497c-9c96-ec958c465b09",
                      "@type": "Organization",
                      "description": [
                        {
                          "@language": "de",
                          "@value": "<p>Das DIPF betreibt international vernetzte Bildungsforschung und kooperiert dazu mit supranationalen Organisationen und Partnern in anderen Nationen. Die Forschungsarbeiten und Analysen der Wissenschaftlerinnen und Wissenschaftler zur nationalen Schulqualität, zu Steuerungsfragen sowie zu wissenschaftlicher Infrastruktur bilden eine solide Basis für die internationale Vergleichbarkeit des deutschen Bildungswesen.</p>\r\n\r\n<p>Auf Projektebene werden vielfältige Kontakte zu Wissenschaftlerinnen und Wissenschaftlern weltweit gepflegt. Aus mancher Zusammenarbeit entsteht eine tiefere Vernetzung - zum Beispiel mit dem Australian Council for Educational Research (ACER), cApStAn in Belgien oder der International Association for the Evaluation of Educational Achievement (IEA).</p> \r\n<p>Im Rahmen groß angelegter OECD-Bildungsvergleichsstudien wie PISA und PIAAC bringt das DIPF seine Expertise im Bereich der Fragebogenerstellung sowie des technologiebasierten Testens in die internationalen Konsortien ein.</p>"
                        },
                        {
                          "@language": "en",
                          "@value": "<p>DIPF actively conducts internationally networked educational research. To this end, it co-operates with supranational organisations and partners in other countries. Research and analyses of the scientists on topics such as national school quality, educational governance and science infrastructure provide a sound foundation for the international comparability of the German education system.</p>\r\n\r\n<p>At the level of projects, many contacts are held with scientists from all over the world. In quite a number of cases, co-operations have led to intrinsic networking – for example, with the Australian Council for Educational Research (ACER), cApStAn in Belgium or the International Association for the Evaluation of Educational Achievement (IEA).</p>\r\n<p> Subject to the framework of large-scale educational assessments commissioned by the OECD such as PISA and PIAAC, DIPF contributes its expertise to international consortia, in the field of questionnaire design and technology-based testing.</p>"
                        }
                      ],
                      "image": "http://www.dipf.de/++resource++dipf.diazotheme/header_dipf_logo_de.gif",
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Frankfurt am Main",
                          "addressRegion": "DE.HE",
                          "postalCode": "60486",
                          "streetAddress": "Schloßstraße 29"
                        },
                        "geo": {
                          "lat": 50.12254,
                          "lon": 8.638396
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "DIPF - Deutsches Institut für Internationale Pädagogische Forschung"
                        },
                        {
                          "@language": "en",
                          "@value": "DIPF - German Institute for International Educational Research"
                        }
                      ]
                    },
                    "startTime": "2018-04-08T16:34:13.967+02:00"
                  },
                  {
                    "@id": "urn:uuid:1f4edf45-ac11-41e5-845f-ac853c3de183",
                    "@type": "LikeAction",
                    "agent": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "object": {
                      "@id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd",
                      "@type": "Event",
                      "description": [
                        {
                          "@language": "en",
                          "@value": "Nach einem Jahr Pause kommt das nächste OERcamp. Es wird am 13. und 14. Juni 2019 auf dem Campus der TH Lübeck stattfinden. Es wird viele Workshops, gerade auch für OER-Newbies geben. Und natürlich ist auch ein Barcamp-Teil geplant, zu dem jeder Mann und jede Frau vor Ort eigene Sessions vorschlagen kann. Das OERcamp ist wieder für Menschen aus allen Bildungsbereichen offen, und die Teilnahme ist kostenfrei.\nZeit und Ort\n\n#OERcamp Lübeck\n\nDonnerstag, 13. Juni 2019 von 09:00-18:00 Uhr\nFreitag, 14. Juni 2019 von 09:00-15:15 Uhr\n\nTH Lübeck – Gebäude 1, Mönkhofer Weg 239, 23562 Lübeck"
                        }
                      ],
                      "location": {
                        "address": {
                          "addressCountry": "DE",
                          "addressLocality": "Lübeck",
                          "addressRegion": "DE.SH",
                          "postalCode": "23562",
                          "streetAddress": "Mönkhofer Weg 239"
                        },
                        "geo": {
                          "lat": 53.837048,
                          "lon": 10.7002646
                        }
                      },
                      "name": [
                        {
                          "@language": "de",
                          "@value": "OERcamp Lübeck"
                        }
                      ]
                    },
                    "startTime": "2019-04-18T14:12:36.978Z"
                  }
                ],
                "authorOf": [
                  {
                    "@id": "urn:uuid:f6bd3db0-c8e6-4da2-8099-cf174c827e90",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T10:18:30.133+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Wenn ich das richtig vestanden habe, dann handelt es sich hier eigentlich um zwei Einträge, den Service \"Virtuelles Zentrum für Lehrerbildung\", der gerade eingestellt worden ist und das Projekt \"Schule 4.0\" der das VZL ablösen soll."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:fad9111c-bd1e-4955-8b0b-3f7258c25789",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-21T10:57:08.84+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I wonder if this is a tool or rather a service..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:19b9462b-6f30-4b52-bf56-6c8b3ac0fd51",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-02-15T12:25:32.835+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "More information on DigiPo can be found here: [http://www.aascu.org/AcademicAffairs/ADP/DigiPo/](http://www.aascu.org/AcademicAffairs/ADP/DigiPo/)"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:6b249b8e-7649-4553-80f8-d110d91dedc0",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-01-10T09:58:08.213+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I think it is quite interesting to see that Co-Lab does not mention OER at all in its description. The lessons learned seems to be: If you want to mainstream OER, do not mention OER (or other strange things like open licenses), but focus on cooperation (or other things like creativity)."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:30bd3b82-d979-462e-9955-b8fb8c9a4a2b",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2016-09-16T20:11:20.084+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Website is not working, google search brings not results. It seems to have started in 2011."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:ac4162f4-9fd2-45e9-938d-e23e86e71b3e",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-23T20:53:51.438+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This might be one of our first inactive services. Since it was \"taken over\" by OERInfo, it is inactive by now. We should include a flag for this so that it is possible to filter for active services."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:05f5b258-51e5-4b83-ba8c-e41e524f4532",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-05-10T09:40:55.82+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "should be connected with the service, as soon as we have the field \"outcome\": https://oerworldmap.org/resource/urn:uuid:c5a55ba0-7f00-11e5-a636-c48e8ff4ea31"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a3453c4d-3bd1-4580-8302-a3e397c76012",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-05-10T09:42:13.172+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "should be linked to the service, as soon as we have the field \"outcome\": https://oerworldmap.org/resource/urn:uuid:c5a55ba0-7f00-11e5-a636-c48e8ff4ea31"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a6105fbd-736e-43a9-b46e-3c22157ed2b2",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-30T00:33:40.201+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Hier noch der Link zur Etherpad Dokumentation: [http://pad.o-e-r.de/p/oercamp17-ost-b3-pool-lounge](http://pad.o-e-r.de/p/oercamp17-ost-b3-pool-lounge)"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:2fbe8c64-a3b1-40af-a213-c444b8be4c90",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-09-24T01:11:30.248+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "The story mentions the [oxygen xml-editor](https://oerworldmap.org/resource/urn:uuid:f72ae10c-36ca-47a0-b8ca-99357403eb9f)"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:345156dd-1c49-4374-ab6f-d4c99579f2a8",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-28T21:34:36.86+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Changed level from \"national\" to \"multi-institutional\""
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b7d05c29-051f-460f-8051-9c1f803a6437",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-04T13:33:24.525+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Curriki claims to have thousands of ressources and an API. I therefore gave it the subtype \"repository\". Nevertheless, it also claims to be a community. "
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:571718eb-d65d-449e-8aba-6afec52c6323",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-07-26T16:04:29.471+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I think we might consider changing this entry into a project."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:8a9c8e2b-d331-4dd8-904a-c48653cc1416",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T14:08:52.951+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I changed the value of the field \"jurisdiction/coverage/level\" from \"system\" to \"institutional. \n\nI`m wondering if this is truely a policy. The Website describes the modalities of an \"Alternative Textbook Grant\", which supports the generation of Open Textbooks. I think this could be treated as a policy, but I´m not sure. Any other Opinion on this? I added the tag \"tobechecked\"."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:883bcb0e-577a-4047-90cb-f2bd70a041f2",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-29T22:18:16.44+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Um der Gruppe auf der World Map beizutreten, muss nach der Registrierung auf der eigenen Profilseite unter \"Mitglied von\" das \"OER Librarian Networkd Germany\" ausgewählt werden."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a61f1e02-3d3e-4812-9b99-68d6d453d3ee",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T13:56:00.938+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Ändern in \"Publikation\" + \"Projekt\" ?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f84af949-f857-4b82-9df4-f65f07b32eac",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-28T22:09:59.189+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I guess we should change this into a service as soon as the platform supports semi-automatic data-type change. Added \"tobechecked\"-label."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:da9fd7ae-ee77-496e-a404-224cc4f2524e",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-23T23:28:21.411+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Is this really a service? Or rather a course=publication?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:6541ff01-37f3-4536-b4b0-0fced0a981ae",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-22T15:10:00.849+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Very helpful background information on the policy can be found here: https://oerworldmap.org/resource/urn:uuid:12e27842-bf5e-4e7f-b5a7-16515bb35880"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:85d1b5c7-7eef-41ca-a1ae-17456d4d2c5c",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-21T21:59:16.829+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Great project for many reasons. A good example, that reuse by translation is working, especially for easy texts. It seems as if many available languages are not included in the OER World Map list."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:2287bff6-7433-49b3-848b-9d50b22d0ff7",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T13:05:54.174+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Im Augenblick ist als Anbieter der Kooperationspartner DIPF eingtragen - mit der Folge, dass der Hamburger Bildungsserver in Hessen angezeigt wird..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:d89f65b5-de7a-4596-8969-34a216a231db",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-12T20:28:49.137+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Die SIG scheint mir nicht Anbieter von SWITCH zu sein. Ich nehme das deshalb mal raus. Eventuell hat die SIG einen Video-Chanel auf SWITCH, aber dann müste der Link angepasst werden, ich konnte den Channel nicht finden."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:611f9ee6-9702-4cee-89c3-6f40b4fb11c0",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-11-30T13:18:39.355+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Noch ein Hinweis: Im Feld \"Mitglied von\" erscheint das \"OER Librarian Network erst ab Eingabe des 6. Buchstabens. Hier müssen wir offensichtlich unseren Suchalgorithmus nochmals optimieren..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7ad21d5f-3d38-48ed-8bce-9dca8777640e",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-04T01:20:38.042+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Hi Markus, hi Christian, sagt Bescheid, wenn das Projekt zum Produkt wird, dann machen wir einen Service draus. Und wenn ihr in Köln seid auch, dann trinke ich gerne eins mit!"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:24f837c6-b386-4208-bfe1-aeb2a690fcd6",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T13:58:35.57+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Looks rather like a project to me, not like a policy. There is no link to a policy document given. I therefore added the tag \"tobechecked\". \n\nI also changed the value of \"coverage/level\" from \"System\" to \"institutional\".\n\nAlso I changed the status to \"deactivated\", since I assume that the project has finished by now."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:685ccbce-9107-47d6-8914-b018eada462b",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T13:50:26.061+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I just changed the field \"coverage/level\" from \"system\" to institutional. I`m wondering if this is really a policy. The description mentions a \"Congressionally-directed grant\" which could indicate that the project was triggered by a congress policy. But there is no link provided to this policy. I therefore added the tag \"tobechecked\". "
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f9023697-9312-4868-a305-e19eb7208c85",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-09-24T01:00:53.933+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This story seem to be exist twice: https://oerworldmap.org/resource/urn:uuid:24eb4fb9-5e00-4509-a61b-1e3930dc0067"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:00517e33-1cb2-4afc-b66f-6df9c02eb2e5",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-01T11:59:02.528+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Handelt es sich hier tatsächlich um ein \"Projekt\"? Dann sollten wir dieses auch als solches anlegen."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:055b1de9-aee9-4d9c-b419-c44ae0344c9d",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T14:35:08.158+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Changed \"coverage/level\" from \"system\" to \"state\". Link is not working. Added \"tobechecked\" tag."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a8b296c3-3770-4b9f-8f05-83768f2bce3f",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-12-06T12:50:12.332+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Seems to be inactive by now..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:061a49e8-9319-4ed1-a59e-ab709a4207fe",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-22T08:20:48.434+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Thanks for sharing this Story Rob, very informative!"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:949d771e-e5fe-4120-aa97-d5800305e27c",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-04T13:43:33.709+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I changed the subtype from \"program\" to \"project\".  While the describtion names it a \"program\" I think we should reserve the term \"program\" for larger initiatives, which include several sub-projects. Seen from this perspective UDG Agora seems rather like a project to me."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:485a3ca4-5d2b-4b8f-b368-c2c7fda9501d",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-28T08:24:00.656+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I think this might be rather a publication, than a service. "
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c29e67d6-a8a0-496f-81de-726b419df4af",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-22T10:38:59.636+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Or like a course. In this case we could change it into a publication."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9258ec74-d08b-43d2-98cd-033c9f2c67e1",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-02-02T21:50:23.272+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This is an quite interesting entry for several reasons: \r\n\r\n1. We consider communities as organizations, even, if they are not legally constituted, like corporations or institutions.  \r\n2. Adding members might cause problems, since we currently do not support projects to become members of organizations..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:6bc6e60f-9acd-4098-9500-ae2972de7c64",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-28T23:01:01.678+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Not shure if this entry refers to a real policy. The given link is dead. On the website of UMass I find proof of OER related activity, but no policy document as such. The title speaks of an \"initiative\" not of a policy. Looks like a institutional OER program to me. Added the \"tobechecked\" label."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f8a32d63-4fed-4873-89c9-affe18ce903e",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2016-09-19T16:25:42.234+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This is a duplicate of https://oerworldmap.org/resource/?q=GO-GN#urn:uuid:c4a55240-bbdb-48fd-b40e-6bd96f4ba8f5 and will be deleted soon!"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:8ec278ac-3c95-4d1d-a7c9-8eb3c72c80c8",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-22T14:27:10.789+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Very helpful background information on the policy can be found here: https://oerworldmap.org/resource/urn:uuid:12e27842-bf5e-4e7f-b5a7-16515bb35880\n\n"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b51e52cf-52d6-4f63-ae2f-ae444397162c",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-01T16:21:57.453+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Der Beschreibungstext spricht von einem \"benutzerfreundlichen Autorenwerkzeug\". Konnte es leider nicht finden."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b4aee7df-a8c2-400f-86e1-b95fb41ff210",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T22:06:17.507+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I had problems determining the business model of this services. It is driven by a commercial cooperation, probably for marketing purposes. Does this make the provided content \"commercial\" as well?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9b6ee67f-53b3-46e8-a5b8-735b9d689377",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-23T22:57:01.382+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "We might consider to classify this rather as a publication, than as a service. Any opinions on this?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:75a408e0-9f05-4a70-b94f-a7bf7f6594a8",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T14:28:57.645+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Changed the value of \"coverage/level\" from \"system\" to \"multi-institutional\". The link is not working any longer, so I added the tag \"tobechecked\". It might be necessary to change the status from \"current\" to \"deactivated\"."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b5d5aaa0-a4c3-4bd5-b8b0-4c54d862ba16",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T10:22:26.163+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I think we should change this into \"publications\" now."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c6ae053b-9ca4-4f15-87f2-e68146296201",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-12-07T18:29:31.742+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I searched for \"Education for Sustainable Development\" and received more than 600 hits, so I added the \"ESD\"-tag."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a2b7e63a-bf14-4e74-a3ad-6ae3cde0024f",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2016-12-19T09:14:51.52+01:00"
                  },
                  {
                    "@id": "urn:uuid:d924d1b7-896a-4ab6-ba31-b1c018e38e03",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T10:56:49.847+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Anbieter muss ergänzt werden."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:517972f6-c3e0-422d-90ff-445f4ed9e2ec",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-29T12:03:48.749+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Yes, it was! A fantastic event!"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:83e39d3a-5265-4e4f-9eb8-a387987b3f81",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T14:24:33.472+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Changed \"level\" from \"system\" to \"state\"."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:26c60da9-1f68-4d61-9266-33537448d5e0",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-12-05T16:45:13.165+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This one is not easy to categorize. As a course, we could have added it as an event - or to be more precise - as a number of events. But since it is also ongoing and everyone can join in at any time, I added it as an service."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:cd3b0a3e-11fa-4f37-83c0-006ea61523dc",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-22T10:31:07.448+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Ich bin mir nicht sicher, ob das wirklich ein Service ist. Alternativ könnte man das auch als Projekt und das Methodenset als Content abbilden."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:68df0974-0ab4-4131-9100-b6c557fdc0c1",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-22T13:52:40.96+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "What I like about this policy is, that it includes some metadata at the very beginning: \n* Category: Research \n* Type: Policy \n* Approved by: Council, 8 May 2001 \n* Date Policy Took Effect: 1 June 2001\n* Last Approved Revision: 14 March 2017\n* Sponsor: Deputy Vice-Chancellor (Research and Enterprise) \n* Responsible Officer: Senior Research Analyst, Research and Enterprise \n* Review Date 22 February 2022\n\nI think this is very helpful and can be seen as a good practise worth imitating. Especially I like that it shows the date or its next review."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:8d96aa00-9e18-4ad6-9f65-7043b3f7d9ef",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2016-09-16T15:07:34.116+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I guess we have to check this entry. The link goes to a service called Iknow!, which seemingly does not even provide free contents. Eventually we should take it from the map."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:6919aa3b-bd30-4748-ab24-8dc8bf6cff46",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-12-07T16:11:58.909+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Service seems to be down. I added the inactive? tag and included 2018 as the end date, even if I´m not sure this date is correct."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9732bed0-06c2-43a9-b2e2-18b5232b86f6",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-11-28T14:56:00.153+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I found following issues with this entry:\n1. The provided link does not go to a document, but to a legal database, so the refered ammendmend is not easy to find - if at all.\n2. I would expect that the status (proposed) is not correct any longer."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e58bfab8-2cae-4552-9b7a-2119e7032da4",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-05-10T09:34:23.469+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This profile has to be refined. The center for gamescience was project lead in the project \"preparation of two...\". And the University of Washington is member of the OTN. Maybe we should make two profiles out of this, one for UoW and one for the Centre for Gamescience..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:b4b5a28a-5c71-493f-a9ad-00e7231e4055",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-28T14:40:58.8+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Changed \"level/coverage\" from \"system\" to \"state\". Wondering if this is correct. Could be also \"multi-institutional\". Added tag \"tobechecked\"."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e7a10983-f346-4fdd-83bb-790819540ef5",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-01T11:45:30.027+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Handelt es sich hier wirklich um eine Organisation, oder eher um einen (regelmäßigen) Event?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:ebaf0d44-7a1d-4545-acf3-3b51295f0759",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T17:15:13.416+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Maybe this is more a publication than a service?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:55a07b41-a45c-427f-87bc-c0b03b746ee9",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-02-02T19:57:40.012+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Site currently not available"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9c4fcb7e-f4ba-4fa6-a582-1cc75138fa87",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-03-21T15:54:49.583+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I wonder if we should change this from a service into a resource."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:adfa762c-d323-4e68-a82a-2efb8daaa1b4",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-01T14:00:53.466+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Eintrag scheint nicht mehr aktuell zu sein. Eventuell identisch mit https://ka.stadtwiki.net/Hauptseite?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:653d9ad1-fbba-4001-9037-828b73637782",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-09-24T01:37:17.952+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "It seems to me, as if this is rather an project/programme, than a service. "
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e40af913-09f8-4935-a7d5-cafb07dadfbd",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2016-09-04T12:07:22.845+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Hi Beck,\r\nthanks for sharing this story! It is rather short, but includes a lot of information. Here are some related thoughts:\r\n* I added the GCU, Leeds University and edShare@GCU as related entities.\r\n* It shows, that we should include OER policies ASAP"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:fee80ea4-bf5d-49d8-8d46-26c7d073c5cc",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-12-07T17:00:32.013+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Serlo includes a [dedicated section on sustainable development](https://de.serlo.org/nachhaltigkeit/17744) - I therefore added the \"ESD\" tag."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:1f21bb00-0fce-489a-81cd-91cb185cd623",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-28T09:05:14.969+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "It seems to me as if smarthistory developed since 2012. This here might be the more recent link: https://smarthistory.org"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:2f4ccd21-d7ae-4a78-a1f4-4eb8c5436201",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-07-03T15:16:17.07+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I guess we could change this into a service."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9ca51570-e924-4c31-a51b-bc9b3597acb4",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-11-28T09:38:06.326+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I´m wondering if this document (following \"the report\") alone can already be considered to be a policy. It is a basic strategic report, which prepared the ground for the following OERinfo Richtlinie. The OERinfo call for proposal also refers to this report. The relation of these two elements is unclear to me: 1. Is the the report the policy and the call for proposal part as part of the programme/funding line part of its implementation? 2. Or is the policy made up from the report and the call for proposal? 3. Or could it be, that the call for proposal is the real policy, and the report is only some sort of preparation.\n\nMy idea is, that characteristic for a policy is the underlying management decision. The report allone does not include a management decision, it is a pure preparation. By following the recommendations in the report and setting up the OERinfo funding line, a decision was taken, so that we can speak of a policy. Therefore I would tend to argue, that the Policy is made up of two elements (report and call for proposal).\n\nAnd here comes another related observation: The field \"status\" does not seem to fit. The OERinfo funding line phase 1 has been accomplished by now, so you can consider it to be inactive by now. But it would seem strange to me to consider the report to be \"inactive\" or \"dead\"."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:02be9715-5a70-4905-a734-6c1190a72654",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-07-04T13:01:30.19+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Additional information to the digital strategy can be found [here in a conference paper for OEglobal 2018](https://repository.tudelft.nl/islandora/object/uuid:033860aa-bed0-4477-8c80-7fec3576aaff?collection=research)."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f1f27164-4ddd-4730-b9ec-5f6a24eac916",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-02-02T22:17:28.009+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "This is an quite interesting entry for several reasons:\r\n1. It`s an community of practise, so I added it as an organisations, though it is not legally constituted like an cooperation or institution.\r\n2. We could have added it as an project as well. So the question is here: When does a project aiming at a building a community become a community?\r\n3. Adding members will be a bit of a problem, since right now projects cannot become members of organizations. In most cases this makes sense, but we might consider changing this..."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c3de1875-c63e-4015-86b2-4fa77deddc25",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-05T00:04:24.872+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "BC Campus OpenEd basically seems to be a collection of available open textbooks."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:56aa2288-63b3-4936-8b31-70f7dcd600e8",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T14:11:54.825+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Plattform is currently not available. Service still active?"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:0a652b1b-c135-4cfd-bb55-e8ec507aba37",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-02-05T13:05:08.898+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Hi Thomas, this seems to be helpful documents! Thanks for sharing them on OER World Map! Nevertheless it seems to me as if it is more an individual OER than a service. We are planning to integrate a new data type \"ressource\" exactly for cases like this. Would you agree, that this would be a good solution? And would you accept if we delete this entry, so that no other ressource-services appear ;-) ? Best Jan"
                      }
                    ]
                  },
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
                  },
                  {
                    "@id": "urn:uuid:fbb0bbfd-9ebb-467d-a55a-c0c8130f601d",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-10-22T10:44:25.851+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I guess that this could be classified as a tool as well, but I`m not sure."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:ed1dcea4-c793-4d2c-835b-ed2b1f1265fc",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-08-02T21:46:28.025+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "It looks to me, as if the ZUM-Family is not a service of its own, but more a connecting bracket for all the other services. I would consider deleting the ZUM Family service and keeping all the other ones."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:bf7d0b29-0964-4293-9fcd-9a8a9ff5aa0c",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-06-04T23:47:12.872+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "seems to be outdated"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:8434d3c8-baab-4ef5-ba4d-29ea689e363b",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2017-09-22T10:11:13.161+02:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Looks more like a project to me."
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:69e01b1f-8ae7-44ed-a41a-2768612a3d64",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2019-03-28T21:10:21.111+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "Which level is correct for the COL-policy?\n* institutional\n* multi-institutional\n* multi-national"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:99f35486-5707-412b-bf97-567e6d3c780d",
                    "@type": "Comment",
                    "author": [
                      {
                        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
                      }
                    ],
                    "dateCreated": "2018-12-07T16:31:22.669+01:00",
                    "text": [
                      {
                        "@language": "en",
                        "@value": "I searched for \"education for sustainable development\" and received 209 hits. Even if the first hit led to copyright material, I added the \"ESD\" tag."
                      }
                    ]
                  }
                ],
                "description": [
                  {
                    "@language": "en",
                    "@value": "Jan L. Neumann is working as Head of Legal Affairs and Organization at the North Rhine-Westphalian Library Service Centre (hbz) in Cologne, Germany. He studied law, economy and systems thinking and has more than 15 years of experience within international project management for different publishing houses and libraries. He is a member of the Education Expert Committee of the German Commission for UNESCO and blogs about Open Educational Resources (OER) on OER-SYS.org. Since 2013 he manages the OER World Map project, which is funded by the William and Flora Hewlett Foundation and aims at providing the most complete and comprehensible picture of the global Open Educational Resources (OER) movement so far. Jan is a frequent speaker at OER conferences and participated in the organization of OERde 14, OERde 15 and OERde 16 Festival. Nevertheless he considers himself a non-expert in OER to stress that having the courage to think by yourself is one important aspect of the empowerment which comes along with open education."
                  }
                ],
                "@context": "https://oerworldmap.org/assets/json/context.json",
                "activityField": [
                  {
                    "@id": "https://oerworldmap.org/assets/json/activities.json#businessModels",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Business Model Development"
                      },
                      {
                        "@language": "de",
                        "@value": "Business-Model-Entwicklung"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/activities.json#technology",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Technology & Infrastructure"
                      },
                      {
                        "@language": "de",
                        "@value": "Technologie & Infrastruktur"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/activities.json#policy",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Policies"
                      },
                      {
                        "@language": "de",
                        "@value": "Policies"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/activities.json#oep",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Educational Practices"
                      },
                      {
                        "@language": "de",
                        "@value": "Open Educational Practices"
                      }
                    ]
                  }
                ],
                "additionalType": [
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#oerAdvocate",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "OER advocate"
                      },
                      {
                        "@language": "de",
                        "@value": "OER-Befürworter"
                      },
                      {
                        "@language": "en",
                        "@value": "OER advocate"
                      }
                    ]
                  },
                  {
                    "@id": "https://oerworldmap.org/assets/json/persons.json#librarian",
                    "@type": "Concept",
                    "name": [
                      {
                        "@language": "pt",
                        "@value": "Librarian"
                      },
                      {
                        "@language": "de",
                        "@value": "Bibliothekar/in"
                      },
                      {
                        "@language": "en",
                        "@value": "Librarian"
                      }
                    ]
                  }
                ],
                "affiliation": [
                  {
                    "@id": "urn:uuid:3b589ecf-aadf-45f7-811c-5cbb885a17a1",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The European Open Education Librarian Network was established on 28 June 2018 after a workshop at [OE Global in Delft in 2018](https://conference.oeconsortium.org/2018/). \nThe network curently has members from 9 European countries and we are looking forward to increasing it substantialy in the coming months. \n\nWe are also currently developing our programme for the coming period; please join us as it shoudl help serve to reach your goals!\n\nIf you are working in a library and you are interested in making educational material more easily accessible and re-useable to improve teaching and learning, increase quality in education, or save costs, please contact <oer@sparceurope.org>. We look forward to hearing from you.\n\n"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "NL",
                        "addressRegion": "NL.NB"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "European Open Education Librarian Network"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:43526b28-66f8-49bb-bf1c-c3cb8d4bbbcd",
                    "@type": "Action",
                    "agent": [
                      {
                        "@id": "urn:uuid:625f2554-46bd-4c1a-8033-c5cf799491c4"
                      },
                      {
                        "@id": "urn:uuid:e08975fe-acc0-4733-8496-2cfc034a120a",
                        "@type": "Organization",
                        "description": [
                          {
                            "@language": "de",
                            "@value": "Das Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen (hbz) ist eine zentrale Dienstleistungs- und Entwicklungseinrichtung für die Hochschulbibliotheken in Nordrhein-Westfalen und Rheinland-Pfalz. Es wurde 1973 gegründet. Im Mittelpunkt der Dienstleistungen des hbz stehen die Bereitstellung und Verwaltung eines Verbundkatalogs für Universitätsbibliotheken und andere Bibliotheken. So finden Sie innerhalb des hbz viel Know-how in den Bereichen Datenaggregation, Datennormalisierung und Bereitstellung von Discovery-Schnittstellen.\r\n\r\nDas hbz ist seit 2002 im Bereich Open Access (OA) aktiv, beginnend mit dem Hosting institutioneller Repositorien und seit 2004 mit der Bereitstellung einer Open-Access-Zeitschriftenplattform Digital Peer Publishing (DiPP). Seit vielen Jahren setzt sich hbz aktiv für Webstandards und die offene Lizenzierung von Daten ein, die über Bibliotheken veröffentlicht werden. Das hbz war eine der Bibliotheksorganisationen, die bei der Freigabe von Bibliotheksdaten unter einer offenen Lizenz Pionierarbeit geleistet haben."
                          },
                          {
                            "@language": "en",
                            "@value": "The North Rhine-Westphalian Library Service Center (hbz) is a central service and development organization for university libraries in Northrhine-Westphalia and Rhineland-Palatinate. It was founded in 1973. At the center of hbz's services are the provision and management of a union catalog for university libraries and other libraries. Thus, you will find a lot of expertise in data aggregation, data normalization and provision of discovery interfaces within the hbz.\r\n\r\nThe hbz is active in the area of Open Access (OA) since 2002, beginning with hosting of institutional repositories and since 2004 with providing an OA journal platform Digital Peer Publishing (DiPP). Since many years hbz is actively promoting web standards and the open licensing of data published through libraries. hbz was one of the library organizations worldwide pioneering with opening up library data. "
                          }
                        ],
                        "image": "https://www.hbz-nrw.de/service/mediathek/logos/hbz/hbz-logo-gross",
                        "location": {
                          "address": {
                            "addressCountry": "DE",
                            "addressLocality": "Köln",
                            "addressRegion": "DE.NW",
                            "postalCode": "50674",
                            "streetAddress": "Jülicher Straße 6"
                          },
                          "geo": {
                            "lat": 50.934082,
                            "lon": 6.935474
                          }
                        },
                        "name": [
                          {
                            "@language": "de",
                            "@value": "Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen"
                          },
                          {
                            "@language": "en",
                            "@value": "North Rhine-Westphalian Library Center"
                          }
                        ]
                      }
                    ],
                    "description": [
                      {
                        "@language": "en",
                        "@value": "<section>\r\nFor more than a decade the creation and use of Open Educational Resources (OER) has been increasing around the globe. The OER World Map collects and visualizes data on the growing number of actors and activities in the field of open education worldwide. The goal is to support the evolution of the global OER ecosystem by providing a comprehensive and responsive picture of the OER movement. The information provided can be used for a wide range of purposes, including:\r\n<ul>\r\n<li>Connecting actors with each other facilitating co-operation and sharing of resources and knowledge</li>\r\n<li>Providing qualified lists of repositories and other OER services to help teachers and learners find educational resources relevant to them</li>\r\n<li>Supporting policy makers in taking and defending strategic decisions by providing meaningful statistics and overviews of the open education movement and its associated impacts</li>\r\n</ui>\r\n</section>\r\n<section>\r\nThe OER World Map is intended to provide the information needed to support the self-organization processes of the OER movement.  In addition to mapping relevant organisations, projects, people and services, the platform provides social networking, allows the identification of OER collections, and supports decision making. Taken together, the OER World Map can be seen as a kind of ‘operations room’ for the open education community.\r\n</section>"
                      }
                    ],
                    "image": "https://pbs.twimg.com/profile_images/719433584558387200/GvaYg6E4.jpg",
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER World Map"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:efed6ca2-b228-480f-be03-090a19de7b42",
                    "@type": "Action",
                    "agent": [
                      {
                        "@id": "urn:uuid:f4f8af31-ac5d-497c-9c96-ec958c465b09",
                        "@type": "Organization",
                        "description": [
                          {
                            "@language": "de",
                            "@value": "<p>Das DIPF betreibt international vernetzte Bildungsforschung und kooperiert dazu mit supranationalen Organisationen und Partnern in anderen Nationen. Die Forschungsarbeiten und Analysen der Wissenschaftlerinnen und Wissenschaftler zur nationalen Schulqualität, zu Steuerungsfragen sowie zu wissenschaftlicher Infrastruktur bilden eine solide Basis für die internationale Vergleichbarkeit des deutschen Bildungswesen.</p>\r\n\r\n<p>Auf Projektebene werden vielfältige Kontakte zu Wissenschaftlerinnen und Wissenschaftlern weltweit gepflegt. Aus mancher Zusammenarbeit entsteht eine tiefere Vernetzung - zum Beispiel mit dem Australian Council for Educational Research (ACER), cApStAn in Belgien oder der International Association for the Evaluation of Educational Achievement (IEA).</p> \r\n<p>Im Rahmen groß angelegter OECD-Bildungsvergleichsstudien wie PISA und PIAAC bringt das DIPF seine Expertise im Bereich der Fragebogenerstellung sowie des technologiebasierten Testens in die internationalen Konsortien ein.</p>"
                          },
                          {
                            "@language": "en",
                            "@value": "<p>DIPF actively conducts internationally networked educational research. To this end, it co-operates with supranational organisations and partners in other countries. Research and analyses of the scientists on topics such as national school quality, educational governance and science infrastructure provide a sound foundation for the international comparability of the German education system.</p>\r\n\r\n<p>At the level of projects, many contacts are held with scientists from all over the world. In quite a number of cases, co-operations have led to intrinsic networking – for example, with the Australian Council for Educational Research (ACER), cApStAn in Belgium or the International Association for the Evaluation of Educational Achievement (IEA).</p>\r\n<p> Subject to the framework of large-scale educational assessments commissioned by the OECD such as PISA and PIAAC, DIPF contributes its expertise to international consortia, in the field of questionnaire design and technology-based testing.</p>"
                          }
                        ],
                        "image": "http://www.dipf.de/++resource++dipf.diazotheme/header_dipf_logo_de.gif",
                        "location": {
                          "address": {
                            "addressCountry": "DE",
                            "addressLocality": "Frankfurt am Main",
                            "addressRegion": "DE.HE",
                            "postalCode": "60486",
                            "streetAddress": "Schloßstraße 29"
                          },
                          "geo": {
                            "lat": 50.12254,
                            "lon": 8.638396
                          }
                        },
                        "name": [
                          {
                            "@language": "de",
                            "@value": "DIPF - Deutsches Institut für Internationale Pädagogische Forschung"
                          },
                          {
                            "@language": "en",
                            "@value": "DIPF - German Institute for International Educational Research"
                          }
                        ]
                      }
                    ],
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Mit der Informationsstelle OER wird eine themenspezifische Online-Plattform geschaffen, die für Öffentlichkeit und fachliche Zielgruppen umfassende Informationen zum Thema Open Educational Resources zur Verfügung stellt, den aktuellen Kenntnisstand für die Praxis aufbereitet, Informationen zu Best-Practice-Beispielen bündelt und die Vielfalt vorhandener Initiativen abbildet. Die breite Sichtbarmachung des Themas erfolgt über die inhaltliche, funktionale und informationelle Verzahnung einschlägiger Informationsbestände und Medienangebote des Deutschen Bildungsservers, der bisherigen Transferstelle OER und des Hochschulbibliothekszentrums NRW (OER World Map/OER-Atlas), die in Form einer integrierten, informationsmethodisch abgestimmten und nutzerorientiert konzipierten Internet-Präsenz den einfachen Zugriff auf aktuelle Informationen ermöglicht. Mit Blick auf die Adressierung auch neuer potenzieller Zielgruppen und die bildungsbereichsübergreifende Erschließung des Themenfeldes im Kontext des Lebenslangen Lernens sollen in Zusammenarbeit mit Stakeholdern, Interessengruppen und OER-Initiativen bislang desiderate adressaten- und domänenspezifische Informationsmodule entwickelt werden.\r\n\r\nIm Ergebnis entsteht eine umfangreiche Wissensbasis in Gestalt u.a. von redaktionellen Dossiers und systematisch strukturierten Informationssammlungen, deren Reichweite durch die Integration multimedialer Formate (z.B. Podcasts, Videos, didaktisch aufbereitete Online-Module) und Kommunikationsplattformen auf der Basis von Social-Media-Anwendungen erweitert wird. Das Vorhaben zielt zudem darauf, die Zusammenarbeit und Vernetzung der unterschiedlichen OER-Akteure und Initiativen durch geeignete Kommunikationsinstrumente, projektbegleitende Workshops und die Öffentlichkeitsarbeit der Informationsstelle zu unterstützen. In diesem Zusammenhang besteht eine Aufgabe auch in der Dokumentation und Bündelung von Diskussionsprozessen und Ergebnissen der Fördermaßnahme des BMBF OERinfo zur Sensibilisierung und Qualifizierung von OER-Multiplikatoren im Dialog mit den geförderten Projekten."
                      },
                      {
                        "@language": "en",
                        "@value": "Informationsstelle OER is a topic-specific online platform that provides the public and specialist target groups with comprehensive information on the subject of Open Educational Resources, gives the current state of knowledge for practical use, bundles information on best practice examples and illustrates the diversity of existing initiatives. The broad visualization of the topic takes place via the functional and informational interlocking of the relevant information stocks and media offers of the German Education Server, the former Transferstelle OER and the North Rhine-Westphalian Library Center (OER World Map/OER-Atlas), which enables easy access to current information in the form of an integrated and user-oriented internet presence. To address new potential target groups and to open up the thematic field across educational areas in the context of lifelong learning, previously missing address- and domain-specific information modules are to be developed in cooperation with stakeholders, interest groups and OER initiatives.\r\n\r\nThe result is an extensive knowledge base in the form of editorial dossiers and systematically structured information collections, whose reach is extended by integrating multimedia formats (e.g. podcasts, videos, didactically built online modules) and communication platforms based on social media applications. The project also aims to support the cooperation and networking of the various OER actors and initiatives through appropriate communication tools, project-accompanying workshops and the public relations work of the Informationsstelle OER. In this context, one task is also to document and bundle the discussion processes and the results of the BMBF OERinfo funding measure to sensitise and qualify OER multipliers in dialogue with the projects funded.\r\n"
                      }
                    ],
                    "image": "https://open-educational-resources.de/wp-content/themes/oer2017/img/oer_info_logo.svg",
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Informationsstelle OER: Information, Transfer und Vernetzung zu Open Educational Resources"
                      }
                    ],
                    "startTime": "2016-11-01"
                  },
                  {
                    "@id": "urn:uuid:164a5d61-8d20-401f-a157-7132b60f22ff",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das OER Librarian Network Germany ist  eine Graswurzelbewegung, die aus einer Barcamp-Session des OER-Festivals 2017 in Berlin hervorgegangen ist. Ziel der Initiative ist es, Bibliothekarinnen und Bibliothekare, die sich für OER interessieren oder bereits mit OER arbeiten, zu vernetzen um Informationen und Erfahrungen auszutauschen und gemeinsame Antworten auf Fragen zu finden, die sich in der Schnittmenge von Open Education und Bibliothek ergeben. Alle interessierten Bibliothekarinnen und Bibliothekare sind herzlich eingeladen an der Initiative teilzunehmen. Als Kommunikationsplattform ist ein Moodle-Kurs eingerichtet worden, nähere Informationen zur Registrierung dort finden sich im unten stehenden Kommentar. "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "streetAddress": "Atelierhaus Pfefferberg"
                      },
                      "geo": {
                        "lat": 52.532209,
                        "lon": 13.41024
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER Librarian Network: Chapter Germany"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e08975fe-acc0-4733-8496-2cfc034a120a",
                    "@type": "Organization",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen (hbz) ist eine zentrale Dienstleistungs- und Entwicklungseinrichtung für die Hochschulbibliotheken in Nordrhein-Westfalen und Rheinland-Pfalz. Es wurde 1973 gegründet. Im Mittelpunkt der Dienstleistungen des hbz stehen die Bereitstellung und Verwaltung eines Verbundkatalogs für Universitätsbibliotheken und andere Bibliotheken. So finden Sie innerhalb des hbz viel Know-how in den Bereichen Datenaggregation, Datennormalisierung und Bereitstellung von Discovery-Schnittstellen.\r\n\r\nDas hbz ist seit 2002 im Bereich Open Access (OA) aktiv, beginnend mit dem Hosting institutioneller Repositorien und seit 2004 mit der Bereitstellung einer Open-Access-Zeitschriftenplattform Digital Peer Publishing (DiPP). Seit vielen Jahren setzt sich hbz aktiv für Webstandards und die offene Lizenzierung von Daten ein, die über Bibliotheken veröffentlicht werden. Das hbz war eine der Bibliotheksorganisationen, die bei der Freigabe von Bibliotheksdaten unter einer offenen Lizenz Pionierarbeit geleistet haben."
                      },
                      {
                        "@language": "en",
                        "@value": "The North Rhine-Westphalian Library Service Center (hbz) is a central service and development organization for university libraries in Northrhine-Westphalia and Rhineland-Palatinate. It was founded in 1973. At the center of hbz's services are the provision and management of a union catalog for university libraries and other libraries. Thus, you will find a lot of expertise in data aggregation, data normalization and provision of discovery interfaces within the hbz.\r\n\r\nThe hbz is active in the area of Open Access (OA) since 2002, beginning with hosting of institutional repositories and since 2004 with providing an OA journal platform Digital Peer Publishing (DiPP). Since many years hbz is actively promoting web standards and the open licensing of data published through libraries. hbz was one of the library organizations worldwide pioneering with opening up library data. "
                      }
                    ],
                    "image": "https://www.hbz-nrw.de/service/mediathek/logos/hbz/hbz-logo-gross",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "postalCode": "50674",
                        "streetAddress": "Jülicher Straße 6"
                      },
                      "geo": {
                        "lat": 50.934082,
                        "lon": 6.935474
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Hochschulbibliothekszentrum des Landes Nordrhein-Westfalen"
                      },
                      {
                        "@language": "en",
                        "@value": "North Rhine-Westphalian Library Center"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:52869ea3-ffec-4edd-b781-47364cd6f1e0",
                    "@type": "Action",
                    "agent": [
                      {
                        "@id": "urn:uuid:9cca10a2-ad75-4e01-90ba-3bc7978b527f"
                      }
                    ],
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Das Vorhaben erarbeitet ein Konzept für ein kooperatives Content-Netzwerk für digitales Lehren und Lernen an Hochschulen des Landes NRW unter besonderer Berücksichtigung „offener Bildungsressourcen“ („OER“) - als Vorprojekt und Grundlage für eine weitere landesweite Entwicklung. Es wird in enger Abstimmung mit dem geplanten landesweiten Online-Portal Studium und Lehre entwickelt und gliedert sich somit in die mittelfristige Planung der DH-NRW ein. Die Projektnehmer/innen werden als Ergebnis einen technischen Prototyp inklusive der notwendigen Schnittstellen zu lokalen Systemen und Repositorien eingerichtet und evaluiert haben und erste Erfahrungen zu Prozessen, etwaigen Hindernissen und notwendigen Supportstrukturen dokumentieren. Daneben bildet die Untersuchung organisatorischer und kultureller Fragestellungen, wie z.B. die nach geeigneten Anreizsystemen für OER, einen wichtigen Bestandteil des Vorhabens. Die Arbeiten werden in enger Abstimmung mit den Hochschulen, mit denen der Prototyp erprobt wird, und den Gremien der DH-NRW, sowie unter Berücksichtigung der Entwicklung in anderen Bundesländern sowie nationalen und internationalen Vorhaben durchgeführt. Das Projekt arbeitet mit bereits identifizierten interessierten Pilothochschulen, der Kreis kann erweitert werden."
                      }
                    ],
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Vorprojekt Content Marktplatz NRW: Netzwerk für offene Bildungsressourcen"
                      }
                    ],
                    "startTime": "2018-11-15"
                  }
                ],
                "performerIn": [
                  {
                    "@id": "urn:uuid:7a66bc66-07f7-4f4d-9451-cc3edd379a4a",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The first OER barcamp in Germany took place in September 2012 in Bremen, provided by Internet & Gesellschaft Co:llaboratory, together with the University of Bremen, the EduCamp e.V. and the agency J&K – Jöran und Konsorten"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Bremen",
                        "addressRegion": "DE.HB",
                        "postalCode": "28359",
                        "streetAddress": "Bibliothekstraße 1"
                      },
                      "geo": {
                        "lat": 53.10796455,
                        "lon": 8.85566459282837
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OERCamp 2012"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Das zweite OER-Festival\r\n\r\n21 Monate nach dem ersten OER-Festival #OERde16 wird es bei der #OERde17 weiter darum gehen, den Austausch untereinander und die Sichtbarkeit der OER-Community zu katalysieren. Denn darauf kommt es an, wenn das Jahr 2017 rückblickend nicht als Strohfeuer, sondern als Tipping Point gelten soll. Das OER-Festival 2017 #OERde17 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen die bisherigen Aktivitäten feiern und über die nächsten Schritte der OER-Entwicklung beratschlagen.\r\n\r\n(Das „de“ in #OERde17 steht übrigens nicht für „Deutschland“, sondern für „deutschsprachig“. Denn wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.)\r\n\r\n## OERcamp, OER-Fachforum, OER-Award, OER-Atlas\r\n\r\nDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können:\r\n\r\n- das OERcamp – das Treffen der Praktiker*innen (27./28.11.)\r\n- das OER-Fachforum – als Dialog der Macher*innen und Multiplikator*innen (28./29.11.)\r\n- der OER-Award – die Auszeichnung für Open Educational Resources im deutschsprachigen Raum (mit Preisverleihung am 27.11.)\r\n- der OER-Atlas – die gebündelte Bestandsaufnahme der #OERde-Landschaft (veröffentlicht am 28.11.)"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Festival 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:edb4045b-0a1c-4f72-b302-4568d09f36ef",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is where the world meets to discuss how opening education helps us achieve universal access, equity, innovation and opportunity in education. The OE Global conference is the most internationally diverse conference devoted exclusively to open education, attracting researchers, practitioners, policy makers, educators and students from more than 35 countries to discuss and explore how Open Education advances educational practices around the world.\r\n\r\nOE Global 2018 will take place from 24-26 April 2018 in Delft, the Netherlands, hosted by the Open Education Consortium and Delft University of Technology. The theme of OE Global 2018 is Transforming Education through Open."
                      }
                    ],
                    "image": "http://conference.oeconsortium.org/2018/wp-content/themes/conf2018/images/logo.svg",
                    "location": {
                      "address": {
                        "addressCountry": "NL",
                        "addressLocality": "Delft",
                        "addressRegion": "NL.ZH",
                        "postalCode": "2628CC",
                        "streetAddress": "TU Delft Aula Conference Centre, 5 Mekelweg"
                      },
                      "geo": {
                        "lat": 52.002109,
                        "lon": 4.373221
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2018"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is the annual opportunity for researchers, practitioners, policy makers and educators to deeply explore open education and its impact on global education.  Conference participants engage with thought leaders in open education and have the opportunity to share ideas, practices and discuss issues important to the future of education worldwide. The Open Education Global Conference is the largest conference devoted exclusively to open education, attracting participants from more than 30 countries around the world.\r\n\r\nThe Open Education Global Conference 2017 is organized jointly by the Open Education Consortium and the University of Cape Town.\r\n\r\n \r\n\r\n  \r\n"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "ZA",
                        "addressLocality": "Cape Town",
                        "addressRegion": "ZA.WC",
                        "streetAddress": "Cape Town International Convention Centre (CTICC)"
                      },
                      "geo": {
                        "lat": -33.915682,
                        "lon": 18.426776
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:16e19f26-2b21-45fe-9d02-43fa5f0daf5c",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OpenCon community calls give a chance for you to learn what's happening in open research and education around the world, share what you're doing and find collaborators and opportunities. \r\n\r\nBecause this call falls during Open Education Week, for this community call we'll be hearing from guest speakers who are doing amazing Open Education work in the OpenCon community!  Confirmed speakers include Alicia Lunz (TextbookbrokeAB), Beck Pitt (Open University), and Igor Lesko (Year of Open).  We'll then work on a call to action - we'll share some of the exciting actions we can take during this week to promote Open Education.  The call will be hosted by Brady Yano, Assistant Director Of Open Education for SPARC. "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "US"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "March OpenCon Community Call"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5bc302ed-9550-4c74-82b8-0536dc6132b5",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "We are looking forward to welcome you in 2019, when the OER Conference will focus on the following themes:\n\nBack to basics – asking difficult questions about open education:\n\n* Why open?\n\n  * Open for whom?\n\n  * Whose interests are served?\n\n  * In what ways has the open agenda been appropriated, and what are the implications of this?\n\n * The geopolitics of open education, bringing open in from the periphery\n\n* The open ecosystem: How is open education part of the broader ecosystem of “opens”?\n\n* What does it mean to illuminate open by considering context?\n\n* How can historical perspectives contribute to understanding the issues faced in the open education movement today?\n\n* Links between critical digital literacies, critical data literacies, and openness\n\n* What open business models are emerging? What are the paths to sustainability?\n\n* What are the risks and challenges to the open education agenda?\n\nThe conference will be co-chaired by Laura Czerniewicz and Catherine Cronin."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "IE",
                        "addressLocality": "Galway City",
                        "addressRegion": "IE.GY",
                        "postalCode": "H91 E1NY",
                        "streetAddress": "University Road"
                      },
                      "geo": {
                        "lat": 53.2761205,
                        "lon": -9.059963
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER19 Recentering open: Critical and global perspectives"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:da60dfc4-a87f-4295-b11b-d83ef017ee0a",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Allgemeine Event-Beschreibung\nAuf der diesjährigen OR-Fachtagung soll die Diskussion um die Chancen einer wechselseitigen Ergänzung von Bildung für Nachhaltige Entwicklung (BNE) und Digitaler Bildung im Bereich Schule fortgesetzt werden. Im Ergebnis der letzten Fachtagung ist ein gleichnamiges Diskussionspapier entstanden, das im Fokus der diesjährigen Diskussion stehen wird.\n\nZudem soll der Blick auf die geplante Fortsetzung des UNESCO Weltaktionsprogramms BNE im Jahr 2020 und auf die Herausforderungen, Lern- und Lehrmaterialien diskriminierungssensibel zu gestalten, gerichtet werden. Aktuelle und geplante Maßnahmen zur Umsetzung und Weiterentwicklung des OR sollen gemeinsam mit den Teilnehmerinnen und Teilnehmern der Fachtagung in unterschiedlichen Workshops diskutiert werden. Die Fachtagung wird von Engagement Global im Auftrag der KMK und des BMZ organisiert.\n\n## Bezug zu OER\nIm Rahmen der Veranstaltung fand der Workshop \"OR goes OER – Schnittstellen von Open Educational Resources und BNE\" statt, in dem Synergieen und Kooperationspotentiale zwischen beiden Bewegungen (BNE und OER) diskutiert wurden. Im Rahmen des Workshop wurde mit der Erstellung eines Thesenpapiers begonnen, das im Anschluss an den Workshop weiterentwickelt und veröffentlicht werden soll.    "
                      },
                      {
                        "@language": "en",
                        "@value": "## General event description\nAt this year's OR symposium, the discussion about the chances of a mutual supplementation of Education for Sustainable Development (ESD) and Digital Education in schools will be continued. As a result of the last symposium, a discussion paper of the same name was produced, which will be the focus of this year's discussion.\n\nIn addition, the focus will be on the planned continuation of the UNESCO World Action Programme on ESD in 2020 and on the challenges of making learning and teaching materials sensitive to discrimination. Current and planned measures for the implementation and further development of the OR will be discussed together with the participants of the symposium in various workshops. The symposium will be organised by Engagement Global on behalf of the KMK and the BMZ.\n\n## Reference to OER\nThe workshop \"OR goes OER - Schnittstellen von Open Educational Resources und ENE\" (OR goes OER - Interfaces of Open Educational Resources and ESD) took place within the framework of the event, in which synergies and cooperation potentials between both movements (ESD and ESD) were discussed. The workshop started with the preparation of a theses paper, which will be further developed and published after the workshop.    "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "postalCode": "50672",
                        "streetAddress": "Magnusstraße 20"
                      },
                      "geo": {
                        "lat": 50.9403031,
                        "lon": 6.9421013
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "9th KMK/BMZ symposium on \"Implementation and further development of the Global Development Orientation Framework"
                      },
                      {
                        "@language": "de",
                        "@value": "9. KMK/BMZ-Fachtagung „Umsetzung und Weiterentwicklung des Orientierungsrahmens Globale Entwicklung“"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:990e2d42-f96d-47d5-b88f-befe6a64193b",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Am 12. und 13. September 2014 lud Wikimedia Deutschland in Berlin zur zweiten Konferenz zu Open Educational Resources (OER) ein. Die OERde14 lieferte einen umfassenden Überblick über den Stand von freien Bildungsmaterialien in Deutschland und international. Der thematische Schwerpunkt lag auf der zukünftigen Entwicklung von freien Bildungsmaterialien. Förderin der Konferenz war die Bundeszentrale für politische Bildung. Schirmherrin war die Deutsche UNESCO Kommission.\r\n\r\nDie OERde14 richtete sich gleichermaßen an Entscheidungstragende wie auch an Praktikerinnen und Praktiker: Willkommen waren Akteure aus Schule, Hochschule und Bildungsarbeit, Entscheidungstragende aus Politik, Wirtschaft und Zivilgesellschaft, Medien und Verlage sowie alle weiteren an OER Interessierten.\r\n\r\nDie OERde14 war eine Kombination aus Fachkonferenz und Barcamp und bot den Teilnehmenden damit viel Raum für Vernetzung und Austausch. Im kuratierten Teil der Konferenz sprachen Praktikerinnen und Praktiker über aktuelle Fragen rund um Open Educational Resources. Die zweite Hälfte des Konferenzprogramms nahm ein BarCamp-Teil ein."
                      }
                    ],
                    "image": "https://wikimedia.de/w/images.homepage/thumb/5/5b/OERde14_grau_breit.png/800px-OERde14_grau_breit.png",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10787",
                        "streetAddress": "An Der Urania 17"
                      },
                      "geo": {
                        "lat": 52.501267,
                        "lon": 13.347944
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Die Zukunft freier Bildungsmaterialien - OER-Konferenz 2014"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "„Im deutschsprachigen Raum sind wir in Sachen Open Educational Resources im internationalen Vergleich eher noch rückständig.“ Diesen oder ähnliche Sätze äußern Experten in Interviews oder auf Podien gerne, und zwar seit Jahren. Der Satz stimmt heute nicht mehr. Es gibt inzwischen zahlreiche Ideen, Initiativen, Akteure, Projekte und Institutionen zu OER in allen Bildungsbereichen.\r\n\r\nDas OER-Festival 2016 #OERde16 macht die Breite und Vielfalt von Open Educational Resources sichtbar. Wir wollen gleichzeitig die bisherigen Aktivitäten feiern und die nächste Phase der OER-Entwicklung einleiten. Das „de“ in #OERde16 steht dabei nicht für „Deutschland“, sondern für „deutschsprachig“. Wenn Lehr-Lern-Inhalte offen zur Übernahme und Anpassung sind, dann verlieren Ländergrenzen an Bedeutung.\r\n\r\nOER-Festival KomponentenDas OER-Festival setzt sich aus mehreren Aktivitäten zusammen, die gemeinsam geplant und vorbereitet, aber unabhängig voneinander genutzt und wahrgenommen werden können."
                      }
                    ],
                    "image": "http://i0.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/09/oerde16_logo.png?w=608",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10117",
                        "streetAddress": "In den Ministergärten 8"
                      },
                      "geo": {
                        "lat": 52.5125,
                        "lon": 13.37828
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OER-Festival 2016"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f365783b-edca-4c75-8b95-4b0d0fdde18a",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Am 10. September 2018 veranstalten der Virtuelle Campus Rheinland-Pfalz und die OER@RLP-Allianz für offene Bildungsmaterialien eine Gesprächsrunde mit dem Themenschwerpunkt „Offene Bildungsmaterialien an Hochschulen und wissenschaftlichen Bibliotheken“.\n\nNeben Themen, wie „Metadaten/ Verschlagwortung“, „technische Infrastrukturen“ und „Qualitätssicherung“ in Bezug auf digitale Bildungsmaterialien wird die Frage diskutiert, wie   Bibliotheken, Support-Einrichtungen und Fachvertreter zur Beförderung von OER zusammenarbeiten können.\n\nNach einem Impulsvortrag von Jan Neumann vom Hochschulbibliothekszentrum NRW (HBZ) wird die Veranstaltung in ein von Dr. Konrad Faber (VCRP) moderiertes, offenes Diskussionsformat übergehen.\n\nJan Neumann ist Leiter der Bereiche Recht und Organisation beim Hochschulbibliothekszentrum NRW und Koordinator des Projekts OER World Map, das er selbst als eine Art „Gelbe Seiten für OER“ beschreibt. Als Mitglied des Fachausschusses Bildung der deutschen UNESCO-Kommission setzt er sich stark für die Förderung von Open Educational Resources ein."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Kaiserslautern",
                        "addressRegion": "DE.RP",
                        "postalCode": "67663",
                        "streetAddress": "Erwin-Schrödinger-Straße Geb. 57"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER-Talk - „Offene Bildungsmaterialien an Hochschulen und wissenschaftlichen Bibliotheken“"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7b0c8f88-379c-4103-8154-7177ceeebf43",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher\\*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.\r\n\r\nDie OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10119",
                        "streetAddress": "Pfefferwerk, Christinenstraße 18"
                      },
                      "geo": {
                        "lat": 52.53204,
                        "lon": 13.410474
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Ost"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:83cdcbf8-159d-452c-b1cd-c7371f57ee77",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "With Open Educational Resources, opportunities for better and more exciting teaching are being made available, shared in an increasing way. In the European project X5GON we are investigating ways in which Artificial Intelligence can enhance the learning experience and how teachers can be encouraged to produce and share their lectures in the knowledge that these will be made simple to find and use by other teachers and learners.\n\nThe creation, maintenance and quality assurance of OER are resource-intensive processes, which are provided by many supporters and volunteers. The appreciation of this achievement should consist not only of the use of this learning material, but also of creating lasting sustainability. This creates a foundation that motivates people to contribute to OER and drive technological development.\n\nThe EU-project “X5GON” and the University of Osnabrueck invite to the international workshop “Sustainability of Open Educational Resources” in Osnabrueck, Germany on March 12th 2019. The workshop will take place in Osnabrueck Castle, which is the main building of the University of Osnabrueck."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Osnabrück",
                        "addressRegion": "DE.NI",
                        "postalCode": "49504"
                      },
                      "geo": {
                        "lat": 52.27163072516976,
                        "lon": 8.044241299606227
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Workshop on Sustainability of Open Educational Resources"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:05b52d6b-b812-4819-a989-f1400c952099",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The first major German OER conference, provided by Wikimedia e.V.."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Berlin",
                        "addressRegion": "DE.BE",
                        "postalCode": "10117",
                        "streetAddress": "Johannisstraße 2"
                      },
                      "geo": {
                        "lat": 52.52415565,
                        "lon": 13.3897983840914
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OERde 2013"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place from October the 15th till October the 16th in  Warsaw, Poland."
                      }
                    ],
                    "image": "https://oerpolicy.eu/wp-content/uploads/sites/4/2017/03/oer-policy-forum_logo-e1498825169421.png",
                    "location": {
                      "address": {
                        "addressCountry": "PL",
                        "addressLocality": "Warschau",
                        "addressRegion": "PL.MZ"
                      },
                      "geo": {
                        "lat": 52.2319237,
                        "lon": 21.0067265
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Policy Forum 2018"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c54efe5f-46ce-42c6-8f70-f7c461b2cb31",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OER18 turns the focus on one of the often-cited benefits of “open” – the promise of inclusivity. How do the resources, methods and projects that make up open education support making education available to all? As a movement over 15 years old, has open education made an impact – on learners, on society and on education? What can we do to to support learning in the open – and how can we use open to support learning?\r\n\r\nThe conference will be chaired by academic and open education researcher Vivien Rolfe, alongside Wonkhe Associate Editor David Kernohan."
                      }
                    ],
                    "image": "https://www.alt.ac.uk/sites/alt.ac.uk/files/images/page/oer18-edit.png",
                    "location": {
                      "address": {
                        "addressCountry": "GB",
                        "addressLocality": "Bristol",
                        "addressRegion": "GB.BS",
                        "streetAddress": "Bristol"
                      },
                      "geo": {
                        "lat": 51.45489572796052,
                        "lon": -2.596542711639404
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER18: Open to All"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:4d68c49e-8941-4c5d-a3fa-f5a3a0d261bb",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Together with UNESCO, Slovenia is inviting other countries to collaborate, explore and exchange good practices in the digital transformation of education. From 18 - 20 September 2017, Slovenia will host and organize the 2nd World OER Congress in Ljubljana in cooperation with the Commonwealth of Learning, Creative Commons, the UNESCO Chair on Open Technologies for Open Educational Resources and Open Learning, the Knwoledge for All Foundation and other partners as well as with the generous support by the Slovenian Ministry of Education, Science and Sport and the William and Flora Hewlett Foundation."
                      }
                    ],
                    "image": "http://www.oercongress.org/wp-content/themes/oercongress/images/logo.png",
                    "location": {
                      "address": {
                        "addressCountry": "SI",
                        "addressRegion": "SI.LJ",
                        "streetAddress": "Ljubljana"
                      },
                      "geo": {
                        "lat": 46.062688,
                        "lon": 14.503879
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "2nd World OER Congress"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:73ee76c8-ac10-44b2-919c-f804f247f2a0",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OER17 presents an opportunity for open practitioners, activists, educators and policy makers to come together as a community to reflect on ‘The Politics of Open’. What are our current key challenges and strengths – locally, nationally, and  internationally? What are our priorities – in terms of political governance, organisational and personal politics? What are the changes that we want to effect together? The conference will be chaired by social and educational technologist and Wikimedia UK Trustee Josie Fraser, and Alek Tarkowski, Director of Centrum Cyfrowe, co-founder and coordinator of Creative Commons Poland."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "GB",
                        "addressLocality": "London",
                        "addressRegion": "GB.IT",
                        "streetAddress": "356 Holloway Road"
                      },
                      "geo": {
                        "lat": 51.55585,
                        "lon": -0.116079
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER17: The Politics of Open"
                      }
                    ]
                  }
                ],
                "publication": [
                  {
                    "@id": "urn:uuid:c7d202a9-82f1-4561-8780-cfd96c600737",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Open Educational Resources (OER) sind Lehr-Lern-Materialien, die kostenlos genutzt, weiterbearbeitet und frei weitergegeben werden können. Die internationale Debatte wird seit 2001 geführt. In Deutschland ist das Thema in den letzten Jahren in den Fokus geraten. Das Papier bietet Einstieg und Überblick für Betroffene, Interessierte und Entscheidungsträger. Es gibt einen Überblick über die Grundlagen und rechtliche Rahmenbedingungen und stellt die wichtigsten Akteure und Ereignisse vor."
                      }
                    ],
                    "name": [
                      {
                        "@language": "de",
                        "@value": "Whitepaper Open Educational Resources (OER) an Hochschulen in Deutschland"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8",
                    "@type": "WebPage",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "UNESCO Institute for Information Technologies in Education (UNESCO IITE) published the book on Open Educational Resources in Germany within its project on Open Educational Resources (OER) in non-English-speaking countries. The authors of the report – Dominic Orr, Jan Neumann and Joeran Muuss-Merholz – used holistic approach to explore diverse issues related to OER, including the policy perspective, as well as technical, legal, social and didactical aspects. The report provides a brief overview of the OER-related developments in Germany, describes the structure of the German education system and reveals major educational challenges. The state of advancement of OER in Germany is analyzed using bottom-up and top-down perspectives.\r\n \r\nThough Germany could be characterized as a relatively latecomer to the OER scene, there is a strong OER community in the country: the OER World Map data for Germany shows 166 organisations involved in OER-related practices. Recent government activities in the field of OER include the OERinfo funding programme, which was launched in November 2016. There are some important initiatives at the level of federal entities, for example, the establishment of the Hamburg Open Online University, which is currently the most ambitious OER project in Germany. Considering the fact that for the German educational community and the authorities of different levels OER are recognized for their potential in fostering innovation, it is expected that the recent and forthcoming grassroots OER initiatives and those triggered by the authorities will favour the advancement of open education in Germany."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "German OER Practices and Policy – from Bottom-up to Top-down Initiatives"
                      }
                    ]
                  }
                ],
                "name": [
                  {
                    "@language": "en",
                    "@value": "Jan Neumann"
                  }
                ],
                "attends": [
                  {
                    "@id": "urn:uuid:6c9b4e67-290e-468f-af66-a17bb4f2005e",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Commonwealth of Learning is holding six Regional Consultations in the lead up to the [2nd World Open Educational Resources (OER) Congress](https://oerworldmap.org/resource/?q=oer+world+congress#urn:uuid:4d68c49e-8941-4c5d-a3fa-f5a3a0d261bb), which is scheduled to be held in Ljubljana, Slovenia, from 18 to 20 September 2017.\r\n\r\nThe Regional Consultations are being organised in partnership with UNESCO and the Government of Slovenia, and with the generous support of The William and Flora Hewlett Foundation. Each Regional Consultation will be further organised in partnership with a ministry or other agency, as appropriate, in the respective host country.\r\n\r\nThe overall theme of the Regional Consultations is “OER for Inclusive and Equitable Quality Education: From Commitment to Action”, reflecting a strong focus on the role of OER in achieving Sustainable Development Goal 4 (SDG4).\r\n\r\n\r\nThe main objectives of the Regional Consultations are to:\r\n\r\n1. Raise regional awareness about the importance of OER and its relationship to SDG4;\r\n1. Provide a hands-on experience for all participants to establish personal OER knowledge;\r\n1. Explore mechanisms to facilitate the mainstreaming of OER;\r\n1. Identify strategies and solutions to overcome the challenges or barriers to mainstreaming OER; and,\r\n1. Agree on inputs that factor into the planning of the 2nd World OER Congress.\r\n\r\n\r\nThe Regional Consultations will include expert-facilitated workshops, pre-meeting activities and discussions. Ministers of Education, senior policy makers, expert practitioners, researchers and other institutional stakeholders will be invited to take part in the events."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "MT",
                        "addressLocality": "Floriana",
                        "streetAddress": "Great Siege Road"
                      },
                      "geo": {
                        "lat": 35.898589,
                        "lon": 14.505585
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER Regional Consultation: Europe"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:f67108bc-b723-493c-a0ca-18e3da69e0d0",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "CDE is teaming up with OEC and the French Ministry for Higher Education and Research to organize its annual Leadership Summit as the Open Education Leadership Summit 2018 on 3-4 December in Paris, hosted by Le Conservatoire des Arts et Métiers (CNAM).\n    \nThe Open Education Leadership Summit 2018 is organized by ICDE, the Open Education Consortium, OEC and the French Ministry of Higher Education and Research, MESR.\n     \nParticipants: Leaders on all levels of online learning and open education at higher education institutions, leaders from organizations, companies, and agencies engaged in advocating for and leading adoption of open, governmental senior officials and newcomers to Open, who are looking to lead.\n   \nTentative topics:\n\n- Setting the scene: How Open Education unveils in different regions of the world, leadership approaches.\n- The Open Education leadership challenges: Policy, Quality, Digitalization, Transformation and Sustaining educational offerings.\n- Open Education strategies for break through achievements, designing a roadmap.\n- How can collaboration increase impact from Open Education?\n- Leading Open Education - Best practice cases.\n- Open Education as a catalyst for innovation.\n- Students voice for open education.\n- I want to start up Open Education, what are the pathways and stepping stones.\n- The collaborative roadmap for achieving more.\n- Format: Highly interactive, panels, roundtables and workshop formats. A few, engaging plenaries. "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "FR",
                        "addressLocality": "Paris",
                        "addressRegion": "FR.VP"
                      },
                      "geo": {
                        "lat": 48.8566101,
                        "lon": 2.3514992
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Leadership Summit"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:5bc302ed-9550-4c74-82b8-0536dc6132b5",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "We are looking forward to welcome you in 2019, when the OER Conference will focus on the following themes:\n\nBack to basics – asking difficult questions about open education:\n\n* Why open?\n\n  * Open for whom?\n\n  * Whose interests are served?\n\n  * In what ways has the open agenda been appropriated, and what are the implications of this?\n\n * The geopolitics of open education, bringing open in from the periphery\n\n* The open ecosystem: How is open education part of the broader ecosystem of “opens”?\n\n* What does it mean to illuminate open by considering context?\n\n* How can historical perspectives contribute to understanding the issues faced in the open education movement today?\n\n* Links between critical digital literacies, critical data literacies, and openness\n\n* What open business models are emerging? What are the paths to sustainability?\n\n* What are the risks and challenges to the open education agenda?\n\nThe conference will be co-chaired by Laura Czerniewicz and Catherine Cronin."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "IE",
                        "addressLocality": "Galway City",
                        "addressRegion": "IE.GY",
                        "postalCode": "H91 E1NY",
                        "streetAddress": "University Road"
                      },
                      "geo": {
                        "lat": 53.2761205,
                        "lon": -9.059963
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER19 Recentering open: Critical and global perspectives"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:0a9a7653-8f1c-4ba6-90aa-6bc192fe45f5",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "no description available yet"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "PL",
                        "addressLocality": "Warsaw",
                        "addressRegion": "PL.MZ",
                        "streetAddress": "Warsaw"
                      },
                      "geo": {
                        "lat": 52.22977,
                        "lon": 21.01178
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "2nd OER Policy Forum"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place from October the 15th till October the 16th in  Warsaw, Poland."
                      }
                    ],
                    "image": "https://oerpolicy.eu/wp-content/uploads/sites/4/2017/03/oer-policy-forum_logo-e1498825169421.png",
                    "location": {
                      "address": {
                        "addressCountry": "PL",
                        "addressLocality": "Warschau",
                        "addressRegion": "PL.MZ"
                      },
                      "geo": {
                        "lat": 52.2319237,
                        "lon": 21.0067265
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Policy Forum 2018"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:16e19f26-2b21-45fe-9d02-43fa5f0daf5c",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OpenCon community calls give a chance for you to learn what's happening in open research and education around the world, share what you're doing and find collaborators and opportunities. \r\n\r\nBecause this call falls during Open Education Week, for this community call we'll be hearing from guest speakers who are doing amazing Open Education work in the OpenCon community!  Confirmed speakers include Alicia Lunz (TextbookbrokeAB), Beck Pitt (Open University), and Igor Lesko (Year of Open).  We'll then work on a call to action - we'll share some of the exciting actions we can take during this week to promote Open Education.  The call will be hosted by Brady Yano, Assistant Director Of Open Education for SPARC. "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "US"
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "March OpenCon Community Call"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:2d2fa244-acce-42ac-8ce7-ea4af5947b1f",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The 7th Open Educational Resources Conference, OER16: Open Culture, will be held on the 19th-20th April 2016 at the University of Edinburgh. The conference will be chaired by Melissa Highton, Director of Learning, Teaching and Web Services at the University of Edinburgh, and Lorna Campbell, OER Liaison at the University of Edinburgh and EDINA Digital Education Manager.\r\n\r\nThe vision for the conference is to focus on the value proposition of embedding open culture in the context of institutional strategies for learning, teaching and research focusing on:\r\n\r\n<ul>\r\n  <li>The strategic advantage of open and creating a culture of openness.</li>\r\n  <li>Converging and competing cultures of open knowledge, open source, open content, open practice, open data and open access.</li>\r\n  <li>Hacking, making and sharing.</li>\r\n  <li>The reputational challenges of openwashing.</li>\r\n  <li>Innovative approaches to opening up cultural heritage collections for education.</li>\r\n</ul>\r\nThe conference themes are:\r\n<ol>\r\n  <li>Strategic and reputational advantages of openness (including, but not restricted to, outreach, public engagement and return on investment).</li>\r\n  <li>Converging or diverging cultures of openness (including open data, open science, open GLAM, open knowledge, open source, open content, open access).</li>\r\n  <li>Hacking, making and sharing.</li>\r\n <li>Innovative approaches to opening up cultural heritage collections for education.</li>\r\n</ol>\r\n"
                      }
                    ],
                    "image": "https://oer16.oerconf.org/wp-content/uploads/sites/23/2015/04/OER16-logo.jpg",
                    "location": {
                      "address": {
                        "addressCountry": "GB",
                        "addressLocality": "Edinburgh",
                        "postalCode": "EH16 5AY",
                        "streetAddress": "Pollock Halls, 18 Holyrood Park Rd"
                      },
                      "geo": {
                        "lat": 55.938686,
                        "lon": -3.171522
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER16: Open Culture"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:48588e52-147d-42ee-8e93-1b34ba911483",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Hewlett Foundation's Annual OER Meeting 2017 will take place at the Kingbridge Centre in King City, Toronto, Ontario. This event is hosted by The William and Flora Hewlett Foundation and the Institute for the Study of Knowledge Management in Education (ISKME)."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "CA",
                        "addressLocality": "King City",
                        "addressRegion": "CA.ON",
                        "postalCode": "L7B 1A3",
                        "streetAddress": "12750 Jane Street"
                      },
                      "geo": {
                        "lat": 43.917669,
                        "lon": -79.556386
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "The William and Flora Hewlett Foundation’s Annual OER Meeting 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c54efe5f-46ce-42c6-8f70-f7c461b2cb31",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OER18 turns the focus on one of the often-cited benefits of “open” – the promise of inclusivity. How do the resources, methods and projects that make up open education support making education available to all? As a movement over 15 years old, has open education made an impact – on learners, on society and on education? What can we do to to support learning in the open – and how can we use open to support learning?\r\n\r\nThe conference will be chaired by academic and open education researcher Vivien Rolfe, alongside Wonkhe Associate Editor David Kernohan."
                      }
                    ],
                    "image": "https://www.alt.ac.uk/sites/alt.ac.uk/files/images/page/oer18-edit.png",
                    "location": {
                      "address": {
                        "addressCountry": "GB",
                        "addressLocality": "Bristol",
                        "addressRegion": "GB.BS",
                        "streetAddress": "Bristol"
                      },
                      "geo": {
                        "lat": 51.45489572796052,
                        "lon": -2.596542711639404
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER18: Open to All"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:a53d5dc2-5112-4dab-862c-e4940e916ae1",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Together with UNESCO, Slovenia is inviting other countries to collaborate, explore and exchange good practices in the digital transformation of education. From 18 - 20 September 2017, Slovenia will host and organize the 2nd World OER Congress in Ljubljana in cooperation with the Commonwealth of Learning, Creative Commons, the UNESCO Chair on Open Technologies for Open Educational Resources and Open Learning, the Knwoledge for All Foundation and other partners as well as with the generous support by the Slovenian Ministry of Education, Science and Sport and the William and Flora Hewlett Foundation."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "SI",
                        "addressLocality": "Ljubljana"
                      },
                      "geo": {
                        "lat": 46.0498146,
                        "lon": 14.5067824
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "2nd World OER Congress"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:73ee76c8-ac10-44b2-919c-f804f247f2a0",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "OER17 presents an opportunity for open practitioners, activists, educators and policy makers to come together as a community to reflect on ‘The Politics of Open’. What are our current key challenges and strengths – locally, nationally, and  internationally? What are our priorities – in terms of political governance, organisational and personal politics? What are the changes that we want to effect together? The conference will be chaired by social and educational technologist and Wikimedia UK Trustee Josie Fraser, and Alek Tarkowski, Director of Centrum Cyfrowe, co-founder and coordinator of Creative Commons Poland."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "GB",
                        "addressLocality": "London",
                        "addressRegion": "GB.IT",
                        "streetAddress": "356 Holloway Road"
                      },
                      "geo": {
                        "lat": 51.55585,
                        "lon": -0.116079
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER17: The Politics of Open"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:3016da20-2864-48ad-8d49-bcfee1240ccc",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": " <p>\r\nLangOER (http://langoer.eun.org) is a network of European partners supporting the enhancement of teaching and learning of less used languages through Open Educational Resources (OER) and Practices (OEP). The network, which is supported by the European Commission’s Lifelong Learning Programme, runs from January 2014 to December 2016. In September 2016 LangOER will organize its final seminar, in cooperation with EdReNe, the Educational Repositories Network.\r\n </p>\r\n <p>\r\nIn the fast developing digital era, Open Educational Resources (OER) and Practices (OEP) provide new ways to extend participatory learning and help support innovative teaching practices. This represents an important opportunity for less used languages and their speakers but also gives rise to a number of challenges. For example, the adoption of OER/OEP for less used languages can be slow to take off as a result of limited public investment and/or limited market size. There is a real danger, therefore, that barriers to OER/OEP for less used languages can impact on linguistic diversity and cultural diversity on a global scale.\r\n </p>\r\n <p>\r\nThis LangOER-EdReNe conference aims to bring together experts in open education and digital content repositories with educational researchers and a variety of policy makers concerned with language learning and teaching, pedagogical use of ICT, and social integration and inclusion.\r\n </p>\r\nIt will particularly address key issues related to the uptake of less used languages. The agenda that is currently being developed will explore:\r\n    <ul type=\"disc\">\r\n        <li>  How cross-border collaboration can address current challenges and provide new opportunities to extend OER/OEP in less used languages.</li>\r\n        <li>  How OER/OEP can be optimally transferred to language communities where there are limited financial resources and political support.</li>\r\n        <li>How new policies and initiatives can address existing roadblocks for OER/OEP adoption.</li>\r\n        <li>The added value of OER/OEP from a (less used) language teaching perspective.</li>\r\n        <li>Current state of the art on initiatives and digital resources in Europe</li>\r\n    </ul>\r\n    "
                      }
                    ],
                    "image": "http://langoer.eun.org/image/image_gallery?uuid=9a1e72a4-388e-40f9-a0f7-249dfe5772ae&groupId=395028&t=1393931857462",
                    "location": {
                      "address": {
                        "addressCountry": "BE",
                        "addressLocality": "Brussels",
                        "addressRegion": "BE.BU"
                      },
                      "geo": {
                        "lat": 50.85034,
                        "lon": 4.35171
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education: Promoting Diversity for European Languages"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:613a9621-a24d-4597-85f4-d1e8e53923e7",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "Ziel des OERinfo Startworkshop war die Vernetzung der teilnehmenden Projekte der [OERinfo Förderrichtlinie](https://oerworldmap.org/resource/urn:uuid:3f11cdbd-a74a-4aa4-83b3-b4148bfdbe82) im Zuge von verschiedenen Diskussionsforen und und eines Barcamps. Dr. Dominic Orr, vom Forschungsinstitut für Bildungs- und Sozialökonomie hielt einen Vortrag zu den \"Bildungspotentialen von OER. "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Frankfurt am Main",
                        "addressRegion": "DE.HE",
                        "postalCode": "60486",
                        "streetAddress": "Schloßstraße 29"
                      },
                      "geo": {
                        "lat": 50.12248,
                        "lon": 8.638395
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OERinfo Startworkshop"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:edb4045b-0a1c-4f72-b302-4568d09f36ef",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is where the world meets to discuss how opening education helps us achieve universal access, equity, innovation and opportunity in education. The OE Global conference is the most internationally diverse conference devoted exclusively to open education, attracting researchers, practitioners, policy makers, educators and students from more than 35 countries to discuss and explore how Open Education advances educational practices around the world.\r\n\r\nOE Global 2018 will take place from 24-26 April 2018 in Delft, the Netherlands, hosted by the Open Education Consortium and Delft University of Technology. The theme of OE Global 2018 is Transforming Education through Open."
                      }
                    ],
                    "image": "http://conference.oeconsortium.org/2018/wp-content/themes/conf2018/images/logo.svg",
                    "location": {
                      "address": {
                        "addressCountry": "NL",
                        "addressLocality": "Delft",
                        "addressRegion": "NL.ZH",
                        "postalCode": "2628CC",
                        "streetAddress": "TU Delft Aula Conference Centre, 5 Mekelweg"
                      },
                      "geo": {
                        "lat": 52.002109,
                        "lon": 4.373221
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2018"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e6db620c-7b16-48f2-a1ee-fccc5ddff4b2",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is the annual opportunity for researchers, practitioners, policy makers and educators to deeply explore open education and its impact on global education.\r\n\r\nConference participants learn from thought leaders in open education and have the opportunity to share ideas, practices and discuss issues important to the future of education worldwide. Sessions cover new developments in open education, research results, innovative technology, policy development and implementation, and practical solutions to challenges facing education around the world.\r\n\r\nThe Open Education Global Conference 2016 will take place in Kraków, Poland from the 12th to 14th of April 2016.\r\n\r\nThe theme of the Open Education Global Conference 2016 is Convergence Through Collaboration.\r\n\r\nThe conference will take place at the AGH University of Science and Technology.\r\n\r\nWe look forward to welcoming you in Kraków.\r\n"
                      }
                    ],
                    "image": "http://conference.oeconsortium.org/2016/wp-content/themes/conf2016/img/logo.png",
                    "location": {
                      "address": {
                        "addressCountry": "PL",
                        "addressLocality": "Kraków",
                        "addressRegion": "PL.MA",
                        "streetAddress": "Krowodrza 30-962"
                      },
                      "geo": {
                        "lat": 50.065839,
                        "lon": 19.916496
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2016"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Nach einem Jahr Pause kommt das nächste OERcamp. Es wird am 13. und 14. Juni 2019 auf dem Campus der TH Lübeck stattfinden. Es wird viele Workshops, gerade auch für OER-Newbies geben. Und natürlich ist auch ein Barcamp-Teil geplant, zu dem jeder Mann und jede Frau vor Ort eigene Sessions vorschlagen kann. Das OERcamp ist wieder für Menschen aus allen Bildungsbereichen offen, und die Teilnahme ist kostenfrei.\nZeit und Ort\n\n#OERcamp Lübeck\n\nDonnerstag, 13. Juni 2019 von 09:00-18:00 Uhr\nFreitag, 14. Juni 2019 von 09:00-15:15 Uhr\n\nTH Lübeck – Gebäude 1, Mönkhofer Weg 239, 23562 Lübeck"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Lübeck",
                        "addressRegion": "DE.SH",
                        "postalCode": "23562",
                        "streetAddress": "Mönkhofer Weg 239"
                      },
                      "geo": {
                        "lat": 53.837048,
                        "lon": 10.7002646
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp Lübeck"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:da60dfc4-a87f-4295-b11b-d83ef017ee0a",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "de",
                        "@value": "## Allgemeine Event-Beschreibung\nAuf der diesjährigen OR-Fachtagung soll die Diskussion um die Chancen einer wechselseitigen Ergänzung von Bildung für Nachhaltige Entwicklung (BNE) und Digitaler Bildung im Bereich Schule fortgesetzt werden. Im Ergebnis der letzten Fachtagung ist ein gleichnamiges Diskussionspapier entstanden, das im Fokus der diesjährigen Diskussion stehen wird.\n\nZudem soll der Blick auf die geplante Fortsetzung des UNESCO Weltaktionsprogramms BNE im Jahr 2020 und auf die Herausforderungen, Lern- und Lehrmaterialien diskriminierungssensibel zu gestalten, gerichtet werden. Aktuelle und geplante Maßnahmen zur Umsetzung und Weiterentwicklung des OR sollen gemeinsam mit den Teilnehmerinnen und Teilnehmern der Fachtagung in unterschiedlichen Workshops diskutiert werden. Die Fachtagung wird von Engagement Global im Auftrag der KMK und des BMZ organisiert.\n\n## Bezug zu OER\nIm Rahmen der Veranstaltung fand der Workshop \"OR goes OER – Schnittstellen von Open Educational Resources und BNE\" statt, in dem Synergieen und Kooperationspotentiale zwischen beiden Bewegungen (BNE und OER) diskutiert wurden. Im Rahmen des Workshop wurde mit der Erstellung eines Thesenpapiers begonnen, das im Anschluss an den Workshop weiterentwickelt und veröffentlicht werden soll.    "
                      },
                      {
                        "@language": "en",
                        "@value": "## General event description\nAt this year's OR symposium, the discussion about the chances of a mutual supplementation of Education for Sustainable Development (ESD) and Digital Education in schools will be continued. As a result of the last symposium, a discussion paper of the same name was produced, which will be the focus of this year's discussion.\n\nIn addition, the focus will be on the planned continuation of the UNESCO World Action Programme on ESD in 2020 and on the challenges of making learning and teaching materials sensitive to discrimination. Current and planned measures for the implementation and further development of the OR will be discussed together with the participants of the symposium in various workshops. The symposium will be organised by Engagement Global on behalf of the KMK and the BMZ.\n\n## Reference to OER\nThe workshop \"OR goes OER - Schnittstellen von Open Educational Resources und ENE\" (OR goes OER - Interfaces of Open Educational Resources and ESD) took place within the framework of the event, in which synergies and cooperation potentials between both movements (ESD and ESD) were discussed. The workshop started with the preparation of a theses paper, which will be further developed and published after the workshop.    "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "postalCode": "50672",
                        "streetAddress": "Magnusstraße 20"
                      },
                      "geo": {
                        "lat": 50.9403031,
                        "lon": 6.9421013
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "9th KMK/BMZ symposium on \"Implementation and further development of the Global Development Orientation Framework"
                      },
                      {
                        "@language": "de",
                        "@value": "9. KMK/BMZ-Fachtagung „Umsetzung und Weiterentwicklung des Orientierungsrahmens Globale Entwicklung“"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:c27c383c-ecab-44e7-be67-24a741586afe",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "<p>The 2012 Paris OER Declaration was formally adopted at the 2012 World Open Educational Resources (OER) Congress held at the UNESCO Headquarters in Paris from 20 – 22 June 2012. </p>\r\n<p>\r\nOver 400 delegates including representatives of Government, educators, NGOs, and universities attended the Congress which was organized in full partnership with the Commonwealth of Learning (COL) and supported by a generous grant from the William and Flora Hewlett Foundation (USA).</p>\r\n\r\nThe goals of the Congress were to:\r\n<ul>\r\n    <li>Release the 2012 Paris OER Declaration</li>\r\n    <li>Showcase through an Open Seminar & Exhibition the world’s best practices in OER policies and initiatives  and</li>\r\n\r\n   <li> Celebrating the 10th anniversary of the 2002 UNESCO Forum that coined the term Open Educational Resources (OER).</li>\r\n</ul>\r\n\r\n<p>The Congress was organized as an open multi-stakeholder event. Physical and remote participants were able to continually follow and participate in all sessions and directly contribute to the Paris OER Declaration via live-webstreaming or through Twitter and Identi.ca using the hashtag #oercongress.</p>"
                      }
                    ],
                    "image": "http://www.unesco.org/new/fileadmin/unesco/images/logo_en.gif",
                    "location": {
                      "address": {
                        "addressCountry": "FR",
                        "addressLocality": "Paris",
                        "addressRegion": "FR.VP",
                        "postalCode": "75007",
                        "streetAddress": "7 Place de Fontenoy"
                      },
                      "geo": {
                        "lat": 48.849888,
                        "lon": 2.306503
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "World Open Educational Resources Congress"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:e9854e6d-be3d-4ef0-93e4-c3bc01fab07f",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "In cooperation with the OER19 conference team and the Centrum Cyfrowe, the OER World Map project organizes the first OER POLICY Lab. The event will take place one day before the start of the official OER19 conference:\n\nThis satellite event of OER19 will aim at: \n\n* Develop a global network of OE Policy Experts who want to cooperate in order to facilitate global mainstreaming of Open Education\n*  Identifying new functionality needed for the OER Policy Registry\n* Collecting global OER policies, with a special focus on Europe\n\n* The new OER policy registry: https://oerworldmap.org/oerpolicies?language=en \n* Agenda: https://kurzelinks.de/ced9\n* Etherpad with outcome: https://etherpad.wikimedia.org/p/oerpolicylab\n* Hashtag: #OERPolicyLab - https://twitter.com/search?q=%23OERPolicyLab&src=typd\n "
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "IE",
                        "addressLocality": "Galway City",
                        "addressRegion": "IE.GY",
                        "postalCode": "H91 E1NY",
                        "streetAddress": "Lower Newcastle Road"
                      },
                      "geo": {
                        "lat": 53.2796576,
                        "lon": -9.06226384917072
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "OER Policy Lab @OER19"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "The Open Education Global Conference is the annual opportunity for researchers, practitioners, policy makers and educators to deeply explore open education and its impact on global education.  Conference participants engage with thought leaders in open education and have the opportunity to share ideas, practices and discuss issues important to the future of education worldwide. The Open Education Global Conference is the largest conference devoted exclusively to open education, attracting participants from more than 30 countries around the world.\r\n\r\nThe Open Education Global Conference 2017 is organized jointly by the Open Education Consortium and the University of Cape Town.\r\n\r\n \r\n\r\n  \r\n"
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "ZA",
                        "addressLocality": "Cape Town",
                        "addressRegion": "ZA.WC",
                        "streetAddress": "Cape Town International Convention Centre (CTICC)"
                      },
                      "geo": {
                        "lat": -33.915682,
                        "lon": 18.426776
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Education Global Conference 2017"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:926e5242-6eb7-4f88-be74-98663c6167c7",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "München",
                        "addressRegion": "DE.BY"
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 Süd"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:83cdcbf8-159d-452c-b1cd-c7371f57ee77",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "With Open Educational Resources, opportunities for better and more exciting teaching are being made available, shared in an increasing way. In the European project X5GON we are investigating ways in which Artificial Intelligence can enhance the learning experience and how teachers can be encouraged to produce and share their lectures in the knowledge that these will be made simple to find and use by other teachers and learners.\n\nThe creation, maintenance and quality assurance of OER are resource-intensive processes, which are provided by many supporters and volunteers. The appreciation of this achievement should consist not only of the use of this learning material, but also of creating lasting sustainability. This creates a foundation that motivates people to contribute to OER and drive technological development.\n\nThe EU-project “X5GON” and the University of Osnabrueck invite to the international workshop “Sustainability of Open Educational Resources” in Osnabrueck, Germany on March 12th 2019. The workshop will take place in Osnabrueck Castle, which is the main building of the University of Osnabrueck."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Osnabrück",
                        "addressRegion": "DE.NI",
                        "postalCode": "49504"
                      },
                      "geo": {
                        "lat": 52.27163072516976,
                        "lon": 8.044241299606227
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Workshop on Sustainability of Open Educational Resources"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:7148dfd5-8371-4e96-9d4e-9449f3e731f4",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "There is a rich landscape of tools and resources that have been developed and maintained to support specific elements of technical infrastructure for OER. But the landscape is fragmented, many of the solutions are not fully formed, and connections among tools are few, ad hoc, and often fragile. This gathering will bring together key stakeholders in the OER movement to outline a strategic roadmap and begin hands-on collaboration towards a more robust and federated OER technical infrastructure."
                      }
                    ],
                    "location": {
                      "address": {
                        "addressCountry": "US",
                        "addressLocality": "Palo Alto",
                        "addressRegion": "US.CA",
                        "postalCode": "94304",
                        "streetAddress": "Gordon and Betty Moore Foundation, 1661 Page Mill Rd"
                      },
                      "geo": {
                        "lat": 37.409718,
                        "lon": -122.151953
                      }
                    },
                    "name": [
                      {
                        "@language": "en",
                        "@value": "Open Educational Tools Symposium"
                      }
                    ]
                  },
                  {
                    "@id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24",
                    "@type": "Event",
                    "description": [
                      {
                        "@language": "en",
                        "@value": "Beim OERcamp zeigen OER-Macher*innen in Workshops und Sessions ihre Arbeit und laden zum praktischen Mitmachen ein. Das OERcamp findet 2017 bereits im sechsten Jahr in Folge statt. 2017 gibt es eine große Neuerung: Es gibt vier regionale OERcamps, jeweils eins im Norden, Süden, Westen und Osten Deutschlands.* Die OERcamps werden je zur Hälfte aus vorab geplanten und angekündigten Workshops und aus Barcamp-Sessions, die jeder vor Ort anbieten kann, bestehen. So stellen die Teilnehmenden ihr Programm für die beiden Tage selbst zusammen. Die Veranstalter erwarten dadurch insgesamt deutlich über 100 Programmpunkte aus allen Bildungsbereichen."
                      }
                    ],
                    "image": "https://i1.wp.com/wp1025437.server-he.de/open-educational-resources/wp-content/uploads/sites/4/2015/06/OERCamp-Logo-Text_unten.jpg?resize=209%2C225",
                    "location": {
                      "address": {
                        "addressCountry": "DE",
                        "addressLocality": "Köln",
                        "addressRegion": "DE.NW",
                        "streetAddress": "Ubierring 48"
                      },
                      "geo": {
                        "lat": 50.921624,
                        "lon": 6.964928
                      }
                    },
                    "name": [
                      {
                        "@language": "de",
                        "@value": "OERcamp 17 West"
                      }
                    ]
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW",
                    "postalCode": "50674",
                    "streetAddress": "Jülicher Straße 6"
                  },
                  "geo": {
                    "lat": 50.934119,
                    "lon": 6.935572
                  }
                },
                "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf",
                "email": "neumann@hbz-nrw.de",
                "sameAs": [
                  "https://oersys.org/",
                  "https://www.linkedin.com/in/jan-neumann-18a30495?trk=hp-identity-name",
                  "https://twitter.com/trugwaldsaenger"
                ]
              },
              "dateModified": "2019-04-18T16:08:25.746+02:00",
              "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf.about",
              "lighthouse_count": "0"
            }
          }
        ]
      }
    }
  },
  "sterms#by_type": {
    "doc_count_error_upper_bound": 0,
    "sum_other_doc_count": 0,
    "buckets": [
      {
        "key": "Person",
        "doc_count": 261
      },
      {
        "key": "Event",
        "doc_count": 231
      },
      {
        "key": "Organization",
        "doc_count": 207
      },
      {
        "key": "Service",
        "doc_count": 145
      },
      {
        "key": "Action",
        "doc_count": 82
      },
      {
        "key": "WebPage",
        "doc_count": 53
      },
      {
        "key": "Article",
        "doc_count": 6
      },
      {
        "key": "Policy",
        "doc_count": 3
      }
    ]
  },
  "key": "DE"
}

storiesOf('Country', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Country
        countryData={countryData}
        iso3166="de"
      />
    </WithStrings>
  ))