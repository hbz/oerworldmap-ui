import React from 'react'
import { storiesOf } from '@storybook/react'

import Timeline from '../src/components/Timeline'
import WithStrings from './WithStrings'
import mock from '../test/helpers/mock'
import EmittProvider from '../src/components/EmittProvider'

const entries = [
  {
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
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Moses Sello Sehoole"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "ZA"
        }
      },
      "@id": "urn:uuid:5fbc592a-dc73-44e8-974f-d411599c2f8b",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "msehoole@gmail.com"
    },
    "action": {
      "time": "2019-05-05T14:49:36.649+02:00",
      "type": "add"
    },
    "id": "786c3c251f684a4a869761bac84b9566711f3013"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Héber Sales"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:73fabdfa-9488-41cd-9d28-9b6e5cafd448",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "hebersales@gmail.com"
    },
    "action": {
      "time": "2019-05-05T11:49:59.926+02:00",
      "type": "add"
    },
    "id": "52d9050e2a3217d5938ef081e44a6cd114027e18"
  },
  {
    "user": {
      "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
      "organizerFor": [
        {
          "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
          "@type": "Event",
          "description": [
            {
              "@language": "de",
              "@value": "Beratungs- und Anlaufstelle für mediale Frage- und Problemstellungen zu den Themenbereichen:\r\n\r\n- Digital Publishing\r\n- OER allgemein\r\n- Open Access\r\n- OER- und Medienproduktion und -integration\r\n- Open Source\r\n- Lizenzierung, Creative Commons\r\n- Open Data"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        }
      ],
      "keywords": [
        "open educational practice",
        " practices of open science",
        "open education",
        "open scholarship",
        "open access",
        "oer",
        "open educational resources"
      ],
      "@type": "Person",
      "created": [
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
        },
        {
          "@id": "urn:uuid:537f72fe-bb10-47b2-992b-e388af779057",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Diese mit dem Open Source-Tool H5P erstellte Timeline bietet einen Überblick über die Entwicklung des (noch) jungen Bereichs der Offenen Bildungsmaterialien (OER) in Deutschland und setzt diese in den Kontext  internationaler Entwicklungen der letzten 20 Jahre.\n\nZudem existiert eine JPEG-Variante der wichtigsten Daten des Zeitstrahls von 1997 bis 2017 und kann [hier abgerufen](https://uhh.de/synlloer-timeline-germany) werden."
            },
            {
              "@language": "en",
              "@value": "This timeline provides an overview of key events that characterize the development of open educational resources (OER) and open education in Germany over the last 20 years.\n\nJPEG-Version of the timeline (1997-2017) also [available here](https://uhh.de/synlloer-timeline-germany)."
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
              "@value": "Zeitstrahl: Entwicklung von OER in Deutschland"
            },
            {
              "@language": "en",
              "@value": "Timeline: Development of OER in Germany"
            }
          ]
        }
      ],
      "agentIn": [
        {
          "@id": "urn:uuid:216b1e0f-108d-4519-b94a-e872ed762773",
          "@type": "LikeAction",
          "agent": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "object": {
            "@id": "urn:uuid:11b26791-bd01-4c5c-8c45-29b50e689d4c",
            "@type": "Service",
            "description": [
              {
                "@language": "en",
                "@value": "Mit dem OER-Hörnchen können gezielt Lehr-/Lernmaterialen gefunden werden, welche frei veränderbar sind und wieder veröffentlicht werden dürfen - sogenannte Open Educational Resources (OER). Das OERHörnchen nutzt maschinenlesbare Creative Commons Lizenzen und ist ein Open-Source-Projekt."
              }
            ],
            "location": {
              "address": {
                "addressCountry": "DE",
                "addressLocality": "Köln",
                "postalCode": "50937",
                "streetAddress": "Beethovenpark"
              },
              "geo": {
                "lat": 50.9115273,
                "lon": 6.9143701
              }
            },
            "name": [
              {
                "@language": "en",
                "@value": "OERHörnchen"
              }
            ]
          },
          "startTime": "2017-12-20T17:48:09.375+01:00"
        }
      ],
      "authorOf": [
        {
          "@id": "urn:uuid:5c57d8cd-b0c1-46e7-8228-251cb5efe624",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:47:23.825+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Updated contact and location details"
            }
          ]
        },
        {
          "@id": "urn:uuid:9e722126-39d0-4305-a6cf-c9cab62528b2",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:45:03.008+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Added organizer and location info"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
        }
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://orcid.org/0000-0002-3158-3136",
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
          "@id": "https://oerworldmap.org/assets/json/persons.json#scientist",
          "@type": "Concept",
          "name": [
            {
              "@language": "pt",
              "@value": "Scientist"
            },
            {
              "@language": "de",
              "@value": "Wissenschaftler/in"
            },
            {
              "@language": "en",
              "@value": "Scientist"
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
          "@id": "urn:uuid:5314276e-c2d1-4b9b-afbb-0cc23bd20c86",
          "@type": "Action",
          "agent": [
            {
              "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
              "@type": "Organization",
              "description": [
                {
                  "@language": "de",
                  "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
                }
              ],
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20146",
                  "streetAddress": "Schlüterstraße 51"
                },
                "geo": {
                  "lat": 53.567952,
                  "lon": 9.986097
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
                }
              ]
            },
            {
              "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
              "@type": "Organization",
              "description": [
                {
                  "@language": "en",
                  "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
                },
                {
                  "@language": "de",
                  "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
                }
              ],
              "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20148",
                  "streetAddress": "Mittelweg 177"
                },
                "geo": {
                  "lat": 53.56446,
                  "lon": 9.99492
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Hamburg University"
                },
                {
                  "@language": "de",
                  "@value": "Universität Hamburg"
                }
              ]
            }
          ],
          "description": [
            {
              "@language": "de",
              "@value": "Durch Informationsmaterialien, Informationsveranstaltungen und ein offenes Werkstattangebot sollen im Projekt SynLLOER die Multiplikatoren von heute und morgen aktiviert, für OER sensibilisiert und in den (nachhaltigen) Austausch über die Fächer- und Altersgrenzen hinweg gebracht werden. Durch das dafür erweiterte Fachmagazin für Digitalisierung in der Lehre „Synergie“ kann eine Erstinformation an die Zielgruppe mit hoher Wahrnehmung leicht realisiert werden. Darauf bauen weiterführende Informationsveranstaltungen an der Universität Hamburg und in Hamburger Schulen auf. Ein wöchentlich angebotenes offenes Werkstattformat bringt dann erfahrene Praktiker und interessierte Einsteiger zusammen.\r\n\r\nHamburg bietet durch die geografische Nähe von sechs öffentlichen Hochschulen und über 400 Schulen und Berufsschulen die Möglichkeit, eine sehr hohe Anzahl von Multiplikatoren im persönlichen Kontakt zu erreichen. Neben den Hochschullehrenden sowie den Lehrerinnen und Lehrern an den Schulen kommen als dritte große Gruppe noch die Lehramtsstudierenden an der Universität Hamburg dazu – insgesamt mehr als 12.000 aktuell oder in naher Zukunft im Bildungssystem aktive Personen.\r\n"
            }
          ],
          "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2017/01/cropped-infographik_SynLLOER_02_170105-01-1.png",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Synergien für Lehre und Lernen durch OER"
            }
          ],
          "startTime": "2017-01-01"
        },
        {
          "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
          "@type": "Organization",
          "description": [
            {
              "@language": "de",
              "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
            }
          ]
        },
        {
          "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
          "@type": "Organization",
          "description": [
            {
              "@language": "en",
              "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
            },
            {
              "@language": "de",
              "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
            }
          ],
          "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20148",
              "streetAddress": "Mittelweg 177"
            },
            "geo": {
              "lat": 53.56446,
              "lon": 9.99492
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Hamburg University"
            },
            {
              "@language": "de",
              "@value": "Universität Hamburg"
            }
          ]
        }
      ],
      "performerIn": [
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        },
        {
          "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "### Hamburg, immer Donnerstags von 14-18 Uhr\r\n\r\nIm openLab besteht jeden Donnerstag von 14-18 Uhr die Möglichkeit, Einblicke in die Nutzung von Markdown, GitLab, WordPress, H5P und anderen digitalen Tools zu bekommen und Unterstützung bei Fragen zu erhalten.\r\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567997,
              "lon": 9.985982
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hannover",
              "postalCode": "30459",
              "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
            },
            "geo": {
              "lat": 52.3543406,
              "lon": 9.7231259
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Bildung, öffne dich!"
            }
          ]
        }
      ],
      "publication": [
        {
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
        {
          "@id": "urn:uuid:5e504df5-4c08-498e-aa1a-e438dfd3d955",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Synergie Praxis: Open Educational Resources 2017](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=94e2786d-4836-4a04-985a-dc3383dffc03&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532631290661&version=1.0http://)\n\nDer am 21.06.2017 veröffentlichte DIN-A5-Band \"OER 2017\" bietet einen einfachen Einstieg in die Welt der Open Educational Resources (OER) sowie zahlreiche Hilfestellungen bei Fragen zu Urheberrecht, OER-Fundstellen, offenen Bild- und Medienlizenzen und vielem mehr an. Zusätzlich wird ein Plakat zum Thema \"Der Weg zu OER\" zum PDF-Download angeboten.\n\n#### Materialien:\n\n* PDF-Download: [Synergie Praxis OER 2017 (PDF)](https://uhh.de/eniqr)\n* ePub-Download: [Synergie Praxis OER 2017 (ePub)] (https://uhh.de/qow1z)\n* PDF-Download Plakat [\"Der Weg zu OER\"](https://uhh.de/ibgs7)\n* Synergie Praxis OER 2017: [GitBook (offenes Format)](https://www.gitbook.com/book/synlloer/synergie-praxis-open-educational-resources-2017/)\n"
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            },
            {
              "@language": "en",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            }
          ]
        },
        {
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
        {
          "@id": "urn:uuid:a0ef530d-f337-4085-a010-ff474dc00277",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Cover Synergie Praxis: OER Know-How 2018](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=4b79032e-8123-43b4-b139-2aaa58f2da3c&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532630418645&version=1.0http://)\n\nDie am 24.05.2018 erschienene zweite Ausgabe aus der Reihe Synergie Praxis liefert dieses Mal kurze Online-Tutorials für die Erstellung und Verwendung von Open Educational Resources (OER), die vom Team des BMBF-Projekts SynLLOER erstellt wurden. \n\nDas vorliegende Heft bietet eine schnelle Übersicht über das bereits vorhandene Online-Angebot und gibt anhand eines szenarienbasierten Lehr-/Lernangebots mögliche Antworten auf die folgenden Fragen: Wie kann man sich bei der Erstellung von OER der praxisnahen und ganzheitlichen Umsetzung des Openness-Gedankens nähern? Und können wir im Sinne offener Bildungspraktiken Handreichungen zur schrittweisen Erstellung und Verfügbarmachung von OER bereitstellen? \n\nDabei werden anhand der OER-Toolchains eine Viezahl von Szenarien skizziert, die Handlungsmöglichkeiten mit offenen, digitalen Tools zur Erstellung digitaler Materialien im Allgemeinen und OER im Speziellen exemplarisch sichtbar machen. Durch den gewählten Fokus auf Einsatzszenarien und entsprechende Handlungsanleitungen gepaart mit Hintergrundwissen (bspw. zu Barrierefreiheit) wollen wir über die weit verbreitete \"Tool-ifizierung\" hinausgehen und digitales Lehren und Lernen für Lehrende in Hochschule und Schule greifbar machen."
            },
            {
              "@language": "en",
              "@value": "The second issue of our Synergie Praxis series, published on 24.05.2018 and created by the team of the BMBF project SynLLOER, provides short online tutorials for the creation and use of Open Educational Resources (OER). \n\nMaking use of these OER toolchains, a variety of scenarios of working  with open, digital tools for the creation of digital materials in general and OER in particular are made visible. Through the chosen focus on application scenarios and corresponding instructions for action paired with background knowledge (e.g. on issues of making digital material accessibe), we want to go beyond the widespread \"tool-ification\" and make digital teaching and learning tangible for teachers at universities and schools."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: OER Know-How 2018"
            }
          ]
        },
        {
          "@id": "urn:uuid:e6db0255-1f2d-42cb-8698-47ec5b971bad",
          "@type": "WebPage",
          "description": [
            {
              "@language": "en",
              "@value": "This diagram visualizes an exemplary selection of applications of the paradigm of open educational practices.\r\n\r\nBeginning with the stage of preparing a teaching unit (seminar, school lesson, etc. ) with corresponding open material (e.g. OER) (light red), we then move to the stage of sharing this unit and its content with the seminar, class, etc. online (orange). The next stage comprises making active use of the introduced content/material in a collaborative learning context as part of this seminar or working group) (yellow). This then might include, or be followed up by, shared instances of revising and optimization of the materials used, based on the experiences made and feedback gained during the session (green). Further contemplating on the experiences made, the teacher and/or the learners involved share their thoughts on these practices and examples online (blue).\r\n\r\nThe diagram lists the described stages' scenarios (text on the right) and corresponding open tools (ideally open source) (icons below the rainbow).\r\n\r\nWhat needs to be emphasized here is the possibility of an iterative process optimization. This points towards the possibility of not necessarily going through Stage 1 (light red) in a linear way up to the last stage (blue), but rather making use of continuous back- and cross-referencing of neighbouring stages (indicated in the graphic via fluid color transitions).\r\n\r\n***\r\n\r\nThe graphic is provided in various formats (ai, psd, png, jpg, eps, svg) and released as Creative Commons Zero (CC0), so as to be open for further remixing ;)\r\n\r\n***\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Open Educational Practice (OEP): collection of scenarios'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
            }
          ],
          "name": [
            {
              "@language": "en",
              "@value": "Open Educational Practice (OEP): collection of scenarios"
            }
          ]
        },
        {
          "@id": "urn:uuid:3f60832c-b482-4f62-a91f-16d02f6adefc",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Der Beitrag thematisiert die Genese des im Sommer 2017 an der Universität Hamburg gestarteten **openLabs**, das sich als virtueller Nexus zum breiten Themenfeld der Openness in zahlreichen Facetten und mit Ziel der mittelfristigen Etablierung einer Practice of Open Science (POS) versteht und die Ansätze bestehender Projekte zielgruppenübergreifend vernetzt."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "\"openLab. Nexus der Entwicklung in Richtung Openness\" in Fachmagazin Synergie #04"
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Tobias Steiner"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hamburg",
          "addressRegion": "DE.HH",
          "postalCode": "20146",
          "streetAddress": "Schlüterstr. 51"
        },
        "geo": {
          "lat": 53.5684084,
          "lon": 9.985506699999974
        }
      },
      "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
      "email": "info@flavoursofopen.science",
      "sameAs": [
        "https://uhh.de/synlloer",
        "https://mla.hcommons.org/members/cmplxtvstudies00/"
      ]
    },
    "about": {
      "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
      "organizerFor": [
        {
          "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
          "@type": "Event",
          "description": [
            {
              "@language": "de",
              "@value": "Beratungs- und Anlaufstelle für mediale Frage- und Problemstellungen zu den Themenbereichen:\r\n\r\n- Digital Publishing\r\n- OER allgemein\r\n- Open Access\r\n- OER- und Medienproduktion und -integration\r\n- Open Source\r\n- Lizenzierung, Creative Commons\r\n- Open Data"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        }
      ],
      "keywords": [
        "open educational practice",
        " practices of open science",
        "open education",
        "open scholarship",
        "open access",
        "oer",
        "open educational resources"
      ],
      "@type": "Person",
      "created": [
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
        },
        {
          "@id": "urn:uuid:537f72fe-bb10-47b2-992b-e388af779057",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Diese mit dem Open Source-Tool H5P erstellte Timeline bietet einen Überblick über die Entwicklung des (noch) jungen Bereichs der Offenen Bildungsmaterialien (OER) in Deutschland und setzt diese in den Kontext  internationaler Entwicklungen der letzten 20 Jahre.\n\nZudem existiert eine JPEG-Variante der wichtigsten Daten des Zeitstrahls von 1997 bis 2017 und kann [hier abgerufen](https://uhh.de/synlloer-timeline-germany) werden."
            },
            {
              "@language": "en",
              "@value": "This timeline provides an overview of key events that characterize the development of open educational resources (OER) and open education in Germany over the last 20 years.\n\nJPEG-Version of the timeline (1997-2017) also [available here](https://uhh.de/synlloer-timeline-germany)."
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
              "@value": "Zeitstrahl: Entwicklung von OER in Deutschland"
            },
            {
              "@language": "en",
              "@value": "Timeline: Development of OER in Germany"
            }
          ]
        }
      ],
      "agentIn": [
        {
          "@id": "urn:uuid:216b1e0f-108d-4519-b94a-e872ed762773",
          "@type": "LikeAction",
          "agent": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "object": {
            "@id": "urn:uuid:11b26791-bd01-4c5c-8c45-29b50e689d4c",
            "@type": "Service",
            "description": [
              {
                "@language": "en",
                "@value": "Mit dem OER-Hörnchen können gezielt Lehr-/Lernmaterialen gefunden werden, welche frei veränderbar sind und wieder veröffentlicht werden dürfen - sogenannte Open Educational Resources (OER). Das OERHörnchen nutzt maschinenlesbare Creative Commons Lizenzen und ist ein Open-Source-Projekt."
              }
            ],
            "location": {
              "address": {
                "addressCountry": "DE",
                "addressLocality": "Köln",
                "postalCode": "50937",
                "streetAddress": "Beethovenpark"
              },
              "geo": {
                "lat": 50.9115273,
                "lon": 6.9143701
              }
            },
            "name": [
              {
                "@language": "en",
                "@value": "OERHörnchen"
              }
            ]
          },
          "startTime": "2017-12-20T17:48:09.375+01:00"
        }
      ],
      "authorOf": [
        {
          "@id": "urn:uuid:5c57d8cd-b0c1-46e7-8228-251cb5efe624",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:47:23.825+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Updated contact and location details"
            }
          ]
        },
        {
          "@id": "urn:uuid:9e722126-39d0-4305-a6cf-c9cab62528b2",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:45:03.008+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Added organizer and location info"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
        }
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://orcid.org/0000-0002-3158-3136",
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
          "@id": "https://oerworldmap.org/assets/json/persons.json#scientist",
          "@type": "Concept",
          "name": [
            {
              "@language": "pt",
              "@value": "Scientist"
            },
            {
              "@language": "de",
              "@value": "Wissenschaftler/in"
            },
            {
              "@language": "en",
              "@value": "Scientist"
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
          "@id": "urn:uuid:5314276e-c2d1-4b9b-afbb-0cc23bd20c86",
          "@type": "Action",
          "agent": [
            {
              "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
              "@type": "Organization",
              "description": [
                {
                  "@language": "de",
                  "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
                }
              ],
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20146",
                  "streetAddress": "Schlüterstraße 51"
                },
                "geo": {
                  "lat": 53.567952,
                  "lon": 9.986097
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
                }
              ]
            },
            {
              "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
              "@type": "Organization",
              "description": [
                {
                  "@language": "en",
                  "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
                },
                {
                  "@language": "de",
                  "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
                }
              ],
              "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20148",
                  "streetAddress": "Mittelweg 177"
                },
                "geo": {
                  "lat": 53.56446,
                  "lon": 9.99492
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Hamburg University"
                },
                {
                  "@language": "de",
                  "@value": "Universität Hamburg"
                }
              ]
            }
          ],
          "description": [
            {
              "@language": "de",
              "@value": "Durch Informationsmaterialien, Informationsveranstaltungen und ein offenes Werkstattangebot sollen im Projekt SynLLOER die Multiplikatoren von heute und morgen aktiviert, für OER sensibilisiert und in den (nachhaltigen) Austausch über die Fächer- und Altersgrenzen hinweg gebracht werden. Durch das dafür erweiterte Fachmagazin für Digitalisierung in der Lehre „Synergie“ kann eine Erstinformation an die Zielgruppe mit hoher Wahrnehmung leicht realisiert werden. Darauf bauen weiterführende Informationsveranstaltungen an der Universität Hamburg und in Hamburger Schulen auf. Ein wöchentlich angebotenes offenes Werkstattformat bringt dann erfahrene Praktiker und interessierte Einsteiger zusammen.\r\n\r\nHamburg bietet durch die geografische Nähe von sechs öffentlichen Hochschulen und über 400 Schulen und Berufsschulen die Möglichkeit, eine sehr hohe Anzahl von Multiplikatoren im persönlichen Kontakt zu erreichen. Neben den Hochschullehrenden sowie den Lehrerinnen und Lehrern an den Schulen kommen als dritte große Gruppe noch die Lehramtsstudierenden an der Universität Hamburg dazu – insgesamt mehr als 12.000 aktuell oder in naher Zukunft im Bildungssystem aktive Personen.\r\n"
            }
          ],
          "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2017/01/cropped-infographik_SynLLOER_02_170105-01-1.png",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Synergien für Lehre und Lernen durch OER"
            }
          ],
          "startTime": "2017-01-01"
        },
        {
          "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
          "@type": "Organization",
          "description": [
            {
              "@language": "de",
              "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
            }
          ]
        },
        {
          "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
          "@type": "Organization",
          "description": [
            {
              "@language": "en",
              "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
            },
            {
              "@language": "de",
              "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
            }
          ],
          "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20148",
              "streetAddress": "Mittelweg 177"
            },
            "geo": {
              "lat": 53.56446,
              "lon": 9.99492
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Hamburg University"
            },
            {
              "@language": "de",
              "@value": "Universität Hamburg"
            }
          ]
        }
      ],
      "performerIn": [
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        },
        {
          "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "### Hamburg, immer Donnerstags von 14-18 Uhr\r\n\r\nIm openLab besteht jeden Donnerstag von 14-18 Uhr die Möglichkeit, Einblicke in die Nutzung von Markdown, GitLab, WordPress, H5P und anderen digitalen Tools zu bekommen und Unterstützung bei Fragen zu erhalten.\r\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567997,
              "lon": 9.985982
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hannover",
              "postalCode": "30459",
              "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
            },
            "geo": {
              "lat": 52.3543406,
              "lon": 9.7231259
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Bildung, öffne dich!"
            }
          ]
        }
      ],
      "publication": [
        {
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
        {
          "@id": "urn:uuid:5e504df5-4c08-498e-aa1a-e438dfd3d955",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Synergie Praxis: Open Educational Resources 2017](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=94e2786d-4836-4a04-985a-dc3383dffc03&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532631290661&version=1.0http://)\n\nDer am 21.06.2017 veröffentlichte DIN-A5-Band \"OER 2017\" bietet einen einfachen Einstieg in die Welt der Open Educational Resources (OER) sowie zahlreiche Hilfestellungen bei Fragen zu Urheberrecht, OER-Fundstellen, offenen Bild- und Medienlizenzen und vielem mehr an. Zusätzlich wird ein Plakat zum Thema \"Der Weg zu OER\" zum PDF-Download angeboten.\n\n#### Materialien:\n\n* PDF-Download: [Synergie Praxis OER 2017 (PDF)](https://uhh.de/eniqr)\n* ePub-Download: [Synergie Praxis OER 2017 (ePub)] (https://uhh.de/qow1z)\n* PDF-Download Plakat [\"Der Weg zu OER\"](https://uhh.de/ibgs7)\n* Synergie Praxis OER 2017: [GitBook (offenes Format)](https://www.gitbook.com/book/synlloer/synergie-praxis-open-educational-resources-2017/)\n"
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            },
            {
              "@language": "en",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            }
          ]
        },
        {
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
        {
          "@id": "urn:uuid:a0ef530d-f337-4085-a010-ff474dc00277",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Cover Synergie Praxis: OER Know-How 2018](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=4b79032e-8123-43b4-b139-2aaa58f2da3c&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532630418645&version=1.0http://)\n\nDie am 24.05.2018 erschienene zweite Ausgabe aus der Reihe Synergie Praxis liefert dieses Mal kurze Online-Tutorials für die Erstellung und Verwendung von Open Educational Resources (OER), die vom Team des BMBF-Projekts SynLLOER erstellt wurden. \n\nDas vorliegende Heft bietet eine schnelle Übersicht über das bereits vorhandene Online-Angebot und gibt anhand eines szenarienbasierten Lehr-/Lernangebots mögliche Antworten auf die folgenden Fragen: Wie kann man sich bei der Erstellung von OER der praxisnahen und ganzheitlichen Umsetzung des Openness-Gedankens nähern? Und können wir im Sinne offener Bildungspraktiken Handreichungen zur schrittweisen Erstellung und Verfügbarmachung von OER bereitstellen? \n\nDabei werden anhand der OER-Toolchains eine Viezahl von Szenarien skizziert, die Handlungsmöglichkeiten mit offenen, digitalen Tools zur Erstellung digitaler Materialien im Allgemeinen und OER im Speziellen exemplarisch sichtbar machen. Durch den gewählten Fokus auf Einsatzszenarien und entsprechende Handlungsanleitungen gepaart mit Hintergrundwissen (bspw. zu Barrierefreiheit) wollen wir über die weit verbreitete \"Tool-ifizierung\" hinausgehen und digitales Lehren und Lernen für Lehrende in Hochschule und Schule greifbar machen."
            },
            {
              "@language": "en",
              "@value": "The second issue of our Synergie Praxis series, published on 24.05.2018 and created by the team of the BMBF project SynLLOER, provides short online tutorials for the creation and use of Open Educational Resources (OER). \n\nMaking use of these OER toolchains, a variety of scenarios of working  with open, digital tools for the creation of digital materials in general and OER in particular are made visible. Through the chosen focus on application scenarios and corresponding instructions for action paired with background knowledge (e.g. on issues of making digital material accessibe), we want to go beyond the widespread \"tool-ification\" and make digital teaching and learning tangible for teachers at universities and schools."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: OER Know-How 2018"
            }
          ]
        },
        {
          "@id": "urn:uuid:e6db0255-1f2d-42cb-8698-47ec5b971bad",
          "@type": "WebPage",
          "description": [
            {
              "@language": "en",
              "@value": "This diagram visualizes an exemplary selection of applications of the paradigm of open educational practices.\r\n\r\nBeginning with the stage of preparing a teaching unit (seminar, school lesson, etc. ) with corresponding open material (e.g. OER) (light red), we then move to the stage of sharing this unit and its content with the seminar, class, etc. online (orange). The next stage comprises making active use of the introduced content/material in a collaborative learning context as part of this seminar or working group) (yellow). This then might include, or be followed up by, shared instances of revising and optimization of the materials used, based on the experiences made and feedback gained during the session (green). Further contemplating on the experiences made, the teacher and/or the learners involved share their thoughts on these practices and examples online (blue).\r\n\r\nThe diagram lists the described stages' scenarios (text on the right) and corresponding open tools (ideally open source) (icons below the rainbow).\r\n\r\nWhat needs to be emphasized here is the possibility of an iterative process optimization. This points towards the possibility of not necessarily going through Stage 1 (light red) in a linear way up to the last stage (blue), but rather making use of continuous back- and cross-referencing of neighbouring stages (indicated in the graphic via fluid color transitions).\r\n\r\n***\r\n\r\nThe graphic is provided in various formats (ai, psd, png, jpg, eps, svg) and released as Creative Commons Zero (CC0), so as to be open for further remixing ;)\r\n\r\n***\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Open Educational Practice (OEP): collection of scenarios'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
            }
          ],
          "name": [
            {
              "@language": "en",
              "@value": "Open Educational Practice (OEP): collection of scenarios"
            }
          ]
        },
        {
          "@id": "urn:uuid:3f60832c-b482-4f62-a91f-16d02f6adefc",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Der Beitrag thematisiert die Genese des im Sommer 2017 an der Universität Hamburg gestarteten **openLabs**, das sich als virtueller Nexus zum breiten Themenfeld der Openness in zahlreichen Facetten und mit Ziel der mittelfristigen Etablierung einer Practice of Open Science (POS) versteht und die Ansätze bestehender Projekte zielgruppenübergreifend vernetzt."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "\"openLab. Nexus der Entwicklung in Richtung Openness\" in Fachmagazin Synergie #04"
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Tobias Steiner"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hamburg",
          "addressRegion": "DE.HH",
          "postalCode": "20146",
          "streetAddress": "Schlüterstr. 51"
        },
        "geo": {
          "lat": 53.5684084,
          "lon": 9.985506699999974
        }
      },
      "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
      "email": "info@flavoursofopen.science",
      "sameAs": [
        "https://uhh.de/synlloer",
        "https://mla.hcommons.org/members/cmplxtvstudies00/"
      ]
    },
    "action": {
      "time": "2019-05-04T17:50:28.362+02:00",
      "type": "edit"
    },
    "id": "46f87f3bb73f44836c8887265db112e04664aede"
  },
  {
    "user": {
      "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
      "organizerFor": [
        {
          "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
          "@type": "Event",
          "description": [
            {
              "@language": "de",
              "@value": "Beratungs- und Anlaufstelle für mediale Frage- und Problemstellungen zu den Themenbereichen:\r\n\r\n- Digital Publishing\r\n- OER allgemein\r\n- Open Access\r\n- OER- und Medienproduktion und -integration\r\n- Open Source\r\n- Lizenzierung, Creative Commons\r\n- Open Data"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        }
      ],
      "keywords": [
        "open educational practice",
        " practices of open science",
        "open education",
        "open scholarship",
        "open access",
        "oer",
        "open educational resources"
      ],
      "@type": "Person",
      "created": [
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
        },
        {
          "@id": "urn:uuid:537f72fe-bb10-47b2-992b-e388af779057",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Diese mit dem Open Source-Tool H5P erstellte Timeline bietet einen Überblick über die Entwicklung des (noch) jungen Bereichs der Offenen Bildungsmaterialien (OER) in Deutschland und setzt diese in den Kontext  internationaler Entwicklungen der letzten 20 Jahre.\n\nZudem existiert eine JPEG-Variante der wichtigsten Daten des Zeitstrahls von 1997 bis 2017 und kann [hier abgerufen](https://uhh.de/synlloer-timeline-germany) werden."
            },
            {
              "@language": "en",
              "@value": "This timeline provides an overview of key events that characterize the development of open educational resources (OER) and open education in Germany over the last 20 years.\n\nJPEG-Version of the timeline (1997-2017) also [available here](https://uhh.de/synlloer-timeline-germany)."
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
              "@value": "Zeitstrahl: Entwicklung von OER in Deutschland"
            },
            {
              "@language": "en",
              "@value": "Timeline: Development of OER in Germany"
            }
          ]
        }
      ],
      "agentIn": [
        {
          "@id": "urn:uuid:216b1e0f-108d-4519-b94a-e872ed762773",
          "@type": "LikeAction",
          "agent": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "object": {
            "@id": "urn:uuid:11b26791-bd01-4c5c-8c45-29b50e689d4c",
            "@type": "Service",
            "description": [
              {
                "@language": "en",
                "@value": "Mit dem OER-Hörnchen können gezielt Lehr-/Lernmaterialen gefunden werden, welche frei veränderbar sind und wieder veröffentlicht werden dürfen - sogenannte Open Educational Resources (OER). Das OERHörnchen nutzt maschinenlesbare Creative Commons Lizenzen und ist ein Open-Source-Projekt."
              }
            ],
            "location": {
              "address": {
                "addressCountry": "DE",
                "addressLocality": "Köln",
                "postalCode": "50937",
                "streetAddress": "Beethovenpark"
              },
              "geo": {
                "lat": 50.9115273,
                "lon": 6.9143701
              }
            },
            "name": [
              {
                "@language": "en",
                "@value": "OERHörnchen"
              }
            ]
          },
          "startTime": "2017-12-20T17:48:09.375+01:00"
        }
      ],
      "authorOf": [
        {
          "@id": "urn:uuid:5c57d8cd-b0c1-46e7-8228-251cb5efe624",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:47:23.825+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Updated contact and location details"
            }
          ]
        },
        {
          "@id": "urn:uuid:9e722126-39d0-4305-a6cf-c9cab62528b2",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:45:03.008+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Added organizer and location info"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
        }
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://orcid.org/0000-0002-3158-3136",
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
          "@id": "https://oerworldmap.org/assets/json/persons.json#scientist",
          "@type": "Concept",
          "name": [
            {
              "@language": "pt",
              "@value": "Scientist"
            },
            {
              "@language": "de",
              "@value": "Wissenschaftler/in"
            },
            {
              "@language": "en",
              "@value": "Scientist"
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
          "@id": "urn:uuid:5314276e-c2d1-4b9b-afbb-0cc23bd20c86",
          "@type": "Action",
          "agent": [
            {
              "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
              "@type": "Organization",
              "description": [
                {
                  "@language": "de",
                  "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
                }
              ],
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20146",
                  "streetAddress": "Schlüterstraße 51"
                },
                "geo": {
                  "lat": 53.567952,
                  "lon": 9.986097
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
                }
              ]
            },
            {
              "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
              "@type": "Organization",
              "description": [
                {
                  "@language": "en",
                  "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
                },
                {
                  "@language": "de",
                  "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
                }
              ],
              "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20148",
                  "streetAddress": "Mittelweg 177"
                },
                "geo": {
                  "lat": 53.56446,
                  "lon": 9.99492
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Hamburg University"
                },
                {
                  "@language": "de",
                  "@value": "Universität Hamburg"
                }
              ]
            }
          ],
          "description": [
            {
              "@language": "de",
              "@value": "Durch Informationsmaterialien, Informationsveranstaltungen und ein offenes Werkstattangebot sollen im Projekt SynLLOER die Multiplikatoren von heute und morgen aktiviert, für OER sensibilisiert und in den (nachhaltigen) Austausch über die Fächer- und Altersgrenzen hinweg gebracht werden. Durch das dafür erweiterte Fachmagazin für Digitalisierung in der Lehre „Synergie“ kann eine Erstinformation an die Zielgruppe mit hoher Wahrnehmung leicht realisiert werden. Darauf bauen weiterführende Informationsveranstaltungen an der Universität Hamburg und in Hamburger Schulen auf. Ein wöchentlich angebotenes offenes Werkstattformat bringt dann erfahrene Praktiker und interessierte Einsteiger zusammen.\r\n\r\nHamburg bietet durch die geografische Nähe von sechs öffentlichen Hochschulen und über 400 Schulen und Berufsschulen die Möglichkeit, eine sehr hohe Anzahl von Multiplikatoren im persönlichen Kontakt zu erreichen. Neben den Hochschullehrenden sowie den Lehrerinnen und Lehrern an den Schulen kommen als dritte große Gruppe noch die Lehramtsstudierenden an der Universität Hamburg dazu – insgesamt mehr als 12.000 aktuell oder in naher Zukunft im Bildungssystem aktive Personen.\r\n"
            }
          ],
          "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2017/01/cropped-infographik_SynLLOER_02_170105-01-1.png",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Synergien für Lehre und Lernen durch OER"
            }
          ],
          "startTime": "2017-01-01"
        },
        {
          "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
          "@type": "Organization",
          "description": [
            {
              "@language": "de",
              "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
            }
          ]
        },
        {
          "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
          "@type": "Organization",
          "description": [
            {
              "@language": "en",
              "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
            },
            {
              "@language": "de",
              "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
            }
          ],
          "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20148",
              "streetAddress": "Mittelweg 177"
            },
            "geo": {
              "lat": 53.56446,
              "lon": 9.99492
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Hamburg University"
            },
            {
              "@language": "de",
              "@value": "Universität Hamburg"
            }
          ]
        }
      ],
      "performerIn": [
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        },
        {
          "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "### Hamburg, immer Donnerstags von 14-18 Uhr\r\n\r\nIm openLab besteht jeden Donnerstag von 14-18 Uhr die Möglichkeit, Einblicke in die Nutzung von Markdown, GitLab, WordPress, H5P und anderen digitalen Tools zu bekommen und Unterstützung bei Fragen zu erhalten.\r\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567997,
              "lon": 9.985982
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hannover",
              "postalCode": "30459",
              "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
            },
            "geo": {
              "lat": 52.3543406,
              "lon": 9.7231259
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Bildung, öffne dich!"
            }
          ]
        }
      ],
      "publication": [
        {
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
        {
          "@id": "urn:uuid:5e504df5-4c08-498e-aa1a-e438dfd3d955",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Synergie Praxis: Open Educational Resources 2017](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=94e2786d-4836-4a04-985a-dc3383dffc03&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532631290661&version=1.0http://)\n\nDer am 21.06.2017 veröffentlichte DIN-A5-Band \"OER 2017\" bietet einen einfachen Einstieg in die Welt der Open Educational Resources (OER) sowie zahlreiche Hilfestellungen bei Fragen zu Urheberrecht, OER-Fundstellen, offenen Bild- und Medienlizenzen und vielem mehr an. Zusätzlich wird ein Plakat zum Thema \"Der Weg zu OER\" zum PDF-Download angeboten.\n\n#### Materialien:\n\n* PDF-Download: [Synergie Praxis OER 2017 (PDF)](https://uhh.de/eniqr)\n* ePub-Download: [Synergie Praxis OER 2017 (ePub)] (https://uhh.de/qow1z)\n* PDF-Download Plakat [\"Der Weg zu OER\"](https://uhh.de/ibgs7)\n* Synergie Praxis OER 2017: [GitBook (offenes Format)](https://www.gitbook.com/book/synlloer/synergie-praxis-open-educational-resources-2017/)\n"
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            },
            {
              "@language": "en",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            }
          ]
        },
        {
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
        {
          "@id": "urn:uuid:a0ef530d-f337-4085-a010-ff474dc00277",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Cover Synergie Praxis: OER Know-How 2018](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=4b79032e-8123-43b4-b139-2aaa58f2da3c&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532630418645&version=1.0http://)\n\nDie am 24.05.2018 erschienene zweite Ausgabe aus der Reihe Synergie Praxis liefert dieses Mal kurze Online-Tutorials für die Erstellung und Verwendung von Open Educational Resources (OER), die vom Team des BMBF-Projekts SynLLOER erstellt wurden. \n\nDas vorliegende Heft bietet eine schnelle Übersicht über das bereits vorhandene Online-Angebot und gibt anhand eines szenarienbasierten Lehr-/Lernangebots mögliche Antworten auf die folgenden Fragen: Wie kann man sich bei der Erstellung von OER der praxisnahen und ganzheitlichen Umsetzung des Openness-Gedankens nähern? Und können wir im Sinne offener Bildungspraktiken Handreichungen zur schrittweisen Erstellung und Verfügbarmachung von OER bereitstellen? \n\nDabei werden anhand der OER-Toolchains eine Viezahl von Szenarien skizziert, die Handlungsmöglichkeiten mit offenen, digitalen Tools zur Erstellung digitaler Materialien im Allgemeinen und OER im Speziellen exemplarisch sichtbar machen. Durch den gewählten Fokus auf Einsatzszenarien und entsprechende Handlungsanleitungen gepaart mit Hintergrundwissen (bspw. zu Barrierefreiheit) wollen wir über die weit verbreitete \"Tool-ifizierung\" hinausgehen und digitales Lehren und Lernen für Lehrende in Hochschule und Schule greifbar machen."
            },
            {
              "@language": "en",
              "@value": "The second issue of our Synergie Praxis series, published on 24.05.2018 and created by the team of the BMBF project SynLLOER, provides short online tutorials for the creation and use of Open Educational Resources (OER). \n\nMaking use of these OER toolchains, a variety of scenarios of working  with open, digital tools for the creation of digital materials in general and OER in particular are made visible. Through the chosen focus on application scenarios and corresponding instructions for action paired with background knowledge (e.g. on issues of making digital material accessibe), we want to go beyond the widespread \"tool-ification\" and make digital teaching and learning tangible for teachers at universities and schools."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: OER Know-How 2018"
            }
          ]
        },
        {
          "@id": "urn:uuid:e6db0255-1f2d-42cb-8698-47ec5b971bad",
          "@type": "WebPage",
          "description": [
            {
              "@language": "en",
              "@value": "This diagram visualizes an exemplary selection of applications of the paradigm of open educational practices.\r\n\r\nBeginning with the stage of preparing a teaching unit (seminar, school lesson, etc. ) with corresponding open material (e.g. OER) (light red), we then move to the stage of sharing this unit and its content with the seminar, class, etc. online (orange). The next stage comprises making active use of the introduced content/material in a collaborative learning context as part of this seminar or working group) (yellow). This then might include, or be followed up by, shared instances of revising and optimization of the materials used, based on the experiences made and feedback gained during the session (green). Further contemplating on the experiences made, the teacher and/or the learners involved share their thoughts on these practices and examples online (blue).\r\n\r\nThe diagram lists the described stages' scenarios (text on the right) and corresponding open tools (ideally open source) (icons below the rainbow).\r\n\r\nWhat needs to be emphasized here is the possibility of an iterative process optimization. This points towards the possibility of not necessarily going through Stage 1 (light red) in a linear way up to the last stage (blue), but rather making use of continuous back- and cross-referencing of neighbouring stages (indicated in the graphic via fluid color transitions).\r\n\r\n***\r\n\r\nThe graphic is provided in various formats (ai, psd, png, jpg, eps, svg) and released as Creative Commons Zero (CC0), so as to be open for further remixing ;)\r\n\r\n***\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Open Educational Practice (OEP): collection of scenarios'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
            }
          ],
          "name": [
            {
              "@language": "en",
              "@value": "Open Educational Practice (OEP): collection of scenarios"
            }
          ]
        },
        {
          "@id": "urn:uuid:3f60832c-b482-4f62-a91f-16d02f6adefc",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Der Beitrag thematisiert die Genese des im Sommer 2017 an der Universität Hamburg gestarteten **openLabs**, das sich als virtueller Nexus zum breiten Themenfeld der Openness in zahlreichen Facetten und mit Ziel der mittelfristigen Etablierung einer Practice of Open Science (POS) versteht und die Ansätze bestehender Projekte zielgruppenübergreifend vernetzt."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "\"openLab. Nexus der Entwicklung in Richtung Openness\" in Fachmagazin Synergie #04"
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Tobias Steiner"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hamburg",
          "addressRegion": "DE.HH",
          "postalCode": "20146",
          "streetAddress": "Schlüterstr. 51"
        },
        "geo": {
          "lat": 53.5684084,
          "lon": 9.985506699999974
        }
      },
      "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
      "email": "info@flavoursofopen.science",
      "sameAs": [
        "https://uhh.de/synlloer",
        "https://mla.hcommons.org/members/cmplxtvstudies00/"
      ]
    },
    "about": {
      "performer": [
        {
          "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
          "@type": "Person",
          "description": [
            {
              "@language": "en",
              "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
            }
          ],
          "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstr. 51"
            },
            "geo": {
              "lat": 53.5684084,
              "lon": 9.985506699999974
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Tobias Steiner"
            }
          ]
        },
        {
          "@id": "urn:uuid:358c700f-9f25-41bb-9d64-90ecf007d775",
          "@type": "Person",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20457",
              "streetAddress": "Am Sandtorkai 66"
            },
            "geo": {
              "lat": 53.542214,
              "lon": 9.987209
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Christian Friedrich"
            }
          ]
        },
        {
          "@id": "urn:uuid:fb3c1b77-1cbd-41da-ba4f-b47b9113c957",
          "@type": "Person",
          "description": [
            {
              "@language": "de",
              "@value": "DOMINIK THEIS ist seit November 2017 Teil des Teams Politik und Recht bei Wikimedia Deutschland e. V. und koordiniert seit Mitte des Jahres das Bündnis Freie Bildung (BFB). Er setzt sich für die Öffnung von Lehren, Lernen und Bildung sowie die Förderung Freien Wissens ein. Gemeinsam mit den Mitgliedern des BFB setzt er Impulse für einen politischen Wandel mit dem Ziel der zeitgemäßen Bildung in einer offenen, digitalen Gesellschaft. "
            }
          ],
          "image": "https://pbs.twimg.com/profile_images/1090656237723766784/rFiLvqNi_400x400.jpg",
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
              "@value": "Dominik Theis"
            }
          ]
        }
      ],
      "keywords": [
        "oer",
        "open education",
        "open educational resources",
        "oer erstellen",
        "workshop",
        "creative commons"
      ],
      "endDate": "2019-06-14T16:00",
      "@type": "Event",
      "about": [
        {
          "@id": "https://w3id.org/class/esc/n00",
          "@type": "Concept",
          "name": [
            {
              "@language": "de",
              "@value": "Allgemeine Programme und Qualifikationen"
            },
            {
              "@language": "en",
              "@value": "Generic programmes and qualifications"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
        }
      ],
      "inLanguage": [
        "de"
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://www.elan-ev.de/workshop_oer.php",
      "primarySector": [
        {
          "@id": "https://oerworldmap.org/assets/json/sectors.json#higherEd",
          "@type": "Concept",
          "name": [
            {
              "@language": "en",
              "@value": "Higher Education"
            },
            {
              "@language": "de",
              "@value": "Hochschule"
            }
          ]
        }
      ],
      "organizer": [
        {
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
        }
      ],
      "name": [
        {
          "@language": "de",
          "@value": "Bildung, öffne dich!"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hannover",
          "postalCode": "30459",
          "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
        },
        "geo": {
          "lat": 52.3543406,
          "lon": 9.7231259
        }
      },
      "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
      "email": "kaiser@elan-ev.de",
      "startDate": "2019-06-14T10:00"
    },
    "action": {
      "time": "2019-05-04T17:48:48.116+02:00",
      "type": "edit"
    },
    "id": "15fa531cd0a10410d9d958696a0880238f218c11"
  },
  {
    "user": {
      "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
      "organizerFor": [
        {
          "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
          "@type": "Event",
          "description": [
            {
              "@language": "de",
              "@value": "Beratungs- und Anlaufstelle für mediale Frage- und Problemstellungen zu den Themenbereichen:\r\n\r\n- Digital Publishing\r\n- OER allgemein\r\n- Open Access\r\n- OER- und Medienproduktion und -integration\r\n- Open Source\r\n- Lizenzierung, Creative Commons\r\n- Open Data"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        }
      ],
      "keywords": [
        "open educational practice",
        " practices of open science",
        "open education",
        "open scholarship",
        "open access",
        "oer",
        "open educational resources"
      ],
      "@type": "Person",
      "created": [
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
        },
        {
          "@id": "urn:uuid:537f72fe-bb10-47b2-992b-e388af779057",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Diese mit dem Open Source-Tool H5P erstellte Timeline bietet einen Überblick über die Entwicklung des (noch) jungen Bereichs der Offenen Bildungsmaterialien (OER) in Deutschland und setzt diese in den Kontext  internationaler Entwicklungen der letzten 20 Jahre.\n\nZudem existiert eine JPEG-Variante der wichtigsten Daten des Zeitstrahls von 1997 bis 2017 und kann [hier abgerufen](https://uhh.de/synlloer-timeline-germany) werden."
            },
            {
              "@language": "en",
              "@value": "This timeline provides an overview of key events that characterize the development of open educational resources (OER) and open education in Germany over the last 20 years.\n\nJPEG-Version of the timeline (1997-2017) also [available here](https://uhh.de/synlloer-timeline-germany)."
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
              "@value": "Zeitstrahl: Entwicklung von OER in Deutschland"
            },
            {
              "@language": "en",
              "@value": "Timeline: Development of OER in Germany"
            }
          ]
        }
      ],
      "agentIn": [
        {
          "@id": "urn:uuid:216b1e0f-108d-4519-b94a-e872ed762773",
          "@type": "LikeAction",
          "agent": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "object": {
            "@id": "urn:uuid:11b26791-bd01-4c5c-8c45-29b50e689d4c",
            "@type": "Service",
            "description": [
              {
                "@language": "en",
                "@value": "Mit dem OER-Hörnchen können gezielt Lehr-/Lernmaterialen gefunden werden, welche frei veränderbar sind und wieder veröffentlicht werden dürfen - sogenannte Open Educational Resources (OER). Das OERHörnchen nutzt maschinenlesbare Creative Commons Lizenzen und ist ein Open-Source-Projekt."
              }
            ],
            "location": {
              "address": {
                "addressCountry": "DE",
                "addressLocality": "Köln",
                "postalCode": "50937",
                "streetAddress": "Beethovenpark"
              },
              "geo": {
                "lat": 50.9115273,
                "lon": 6.9143701
              }
            },
            "name": [
              {
                "@language": "en",
                "@value": "OERHörnchen"
              }
            ]
          },
          "startTime": "2017-12-20T17:48:09.375+01:00"
        }
      ],
      "authorOf": [
        {
          "@id": "urn:uuid:5c57d8cd-b0c1-46e7-8228-251cb5efe624",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:47:23.825+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Updated contact and location details"
            }
          ]
        },
        {
          "@id": "urn:uuid:9e722126-39d0-4305-a6cf-c9cab62528b2",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:45:03.008+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Added organizer and location info"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
        }
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://orcid.org/0000-0002-3158-3136",
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
          "@id": "https://oerworldmap.org/assets/json/persons.json#scientist",
          "@type": "Concept",
          "name": [
            {
              "@language": "pt",
              "@value": "Scientist"
            },
            {
              "@language": "de",
              "@value": "Wissenschaftler/in"
            },
            {
              "@language": "en",
              "@value": "Scientist"
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
          "@id": "urn:uuid:5314276e-c2d1-4b9b-afbb-0cc23bd20c86",
          "@type": "Action",
          "agent": [
            {
              "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
              "@type": "Organization",
              "description": [
                {
                  "@language": "de",
                  "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
                }
              ],
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20146",
                  "streetAddress": "Schlüterstraße 51"
                },
                "geo": {
                  "lat": 53.567952,
                  "lon": 9.986097
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
                }
              ]
            },
            {
              "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
              "@type": "Organization",
              "description": [
                {
                  "@language": "en",
                  "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
                },
                {
                  "@language": "de",
                  "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
                }
              ],
              "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20148",
                  "streetAddress": "Mittelweg 177"
                },
                "geo": {
                  "lat": 53.56446,
                  "lon": 9.99492
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Hamburg University"
                },
                {
                  "@language": "de",
                  "@value": "Universität Hamburg"
                }
              ]
            }
          ],
          "description": [
            {
              "@language": "de",
              "@value": "Durch Informationsmaterialien, Informationsveranstaltungen und ein offenes Werkstattangebot sollen im Projekt SynLLOER die Multiplikatoren von heute und morgen aktiviert, für OER sensibilisiert und in den (nachhaltigen) Austausch über die Fächer- und Altersgrenzen hinweg gebracht werden. Durch das dafür erweiterte Fachmagazin für Digitalisierung in der Lehre „Synergie“ kann eine Erstinformation an die Zielgruppe mit hoher Wahrnehmung leicht realisiert werden. Darauf bauen weiterführende Informationsveranstaltungen an der Universität Hamburg und in Hamburger Schulen auf. Ein wöchentlich angebotenes offenes Werkstattformat bringt dann erfahrene Praktiker und interessierte Einsteiger zusammen.\r\n\r\nHamburg bietet durch die geografische Nähe von sechs öffentlichen Hochschulen und über 400 Schulen und Berufsschulen die Möglichkeit, eine sehr hohe Anzahl von Multiplikatoren im persönlichen Kontakt zu erreichen. Neben den Hochschullehrenden sowie den Lehrerinnen und Lehrern an den Schulen kommen als dritte große Gruppe noch die Lehramtsstudierenden an der Universität Hamburg dazu – insgesamt mehr als 12.000 aktuell oder in naher Zukunft im Bildungssystem aktive Personen.\r\n"
            }
          ],
          "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2017/01/cropped-infographik_SynLLOER_02_170105-01-1.png",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Synergien für Lehre und Lernen durch OER"
            }
          ],
          "startTime": "2017-01-01"
        },
        {
          "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
          "@type": "Organization",
          "description": [
            {
              "@language": "de",
              "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
            }
          ]
        },
        {
          "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
          "@type": "Organization",
          "description": [
            {
              "@language": "en",
              "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
            },
            {
              "@language": "de",
              "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
            }
          ],
          "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20148",
              "streetAddress": "Mittelweg 177"
            },
            "geo": {
              "lat": 53.56446,
              "lon": 9.99492
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Hamburg University"
            },
            {
              "@language": "de",
              "@value": "Universität Hamburg"
            }
          ]
        }
      ],
      "performerIn": [
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        },
        {
          "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "### Hamburg, immer Donnerstags von 14-18 Uhr\r\n\r\nIm openLab besteht jeden Donnerstag von 14-18 Uhr die Möglichkeit, Einblicke in die Nutzung von Markdown, GitLab, WordPress, H5P und anderen digitalen Tools zu bekommen und Unterstützung bei Fragen zu erhalten.\r\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567997,
              "lon": 9.985982
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hannover",
              "postalCode": "30459",
              "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
            },
            "geo": {
              "lat": 52.3543406,
              "lon": 9.7231259
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Bildung, öffne dich!"
            }
          ]
        }
      ],
      "publication": [
        {
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
        {
          "@id": "urn:uuid:5e504df5-4c08-498e-aa1a-e438dfd3d955",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Synergie Praxis: Open Educational Resources 2017](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=94e2786d-4836-4a04-985a-dc3383dffc03&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532631290661&version=1.0http://)\n\nDer am 21.06.2017 veröffentlichte DIN-A5-Band \"OER 2017\" bietet einen einfachen Einstieg in die Welt der Open Educational Resources (OER) sowie zahlreiche Hilfestellungen bei Fragen zu Urheberrecht, OER-Fundstellen, offenen Bild- und Medienlizenzen und vielem mehr an. Zusätzlich wird ein Plakat zum Thema \"Der Weg zu OER\" zum PDF-Download angeboten.\n\n#### Materialien:\n\n* PDF-Download: [Synergie Praxis OER 2017 (PDF)](https://uhh.de/eniqr)\n* ePub-Download: [Synergie Praxis OER 2017 (ePub)] (https://uhh.de/qow1z)\n* PDF-Download Plakat [\"Der Weg zu OER\"](https://uhh.de/ibgs7)\n* Synergie Praxis OER 2017: [GitBook (offenes Format)](https://www.gitbook.com/book/synlloer/synergie-praxis-open-educational-resources-2017/)\n"
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            },
            {
              "@language": "en",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            }
          ]
        },
        {
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
        {
          "@id": "urn:uuid:a0ef530d-f337-4085-a010-ff474dc00277",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Cover Synergie Praxis: OER Know-How 2018](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=4b79032e-8123-43b4-b139-2aaa58f2da3c&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532630418645&version=1.0http://)\n\nDie am 24.05.2018 erschienene zweite Ausgabe aus der Reihe Synergie Praxis liefert dieses Mal kurze Online-Tutorials für die Erstellung und Verwendung von Open Educational Resources (OER), die vom Team des BMBF-Projekts SynLLOER erstellt wurden. \n\nDas vorliegende Heft bietet eine schnelle Übersicht über das bereits vorhandene Online-Angebot und gibt anhand eines szenarienbasierten Lehr-/Lernangebots mögliche Antworten auf die folgenden Fragen: Wie kann man sich bei der Erstellung von OER der praxisnahen und ganzheitlichen Umsetzung des Openness-Gedankens nähern? Und können wir im Sinne offener Bildungspraktiken Handreichungen zur schrittweisen Erstellung und Verfügbarmachung von OER bereitstellen? \n\nDabei werden anhand der OER-Toolchains eine Viezahl von Szenarien skizziert, die Handlungsmöglichkeiten mit offenen, digitalen Tools zur Erstellung digitaler Materialien im Allgemeinen und OER im Speziellen exemplarisch sichtbar machen. Durch den gewählten Fokus auf Einsatzszenarien und entsprechende Handlungsanleitungen gepaart mit Hintergrundwissen (bspw. zu Barrierefreiheit) wollen wir über die weit verbreitete \"Tool-ifizierung\" hinausgehen und digitales Lehren und Lernen für Lehrende in Hochschule und Schule greifbar machen."
            },
            {
              "@language": "en",
              "@value": "The second issue of our Synergie Praxis series, published on 24.05.2018 and created by the team of the BMBF project SynLLOER, provides short online tutorials for the creation and use of Open Educational Resources (OER). \n\nMaking use of these OER toolchains, a variety of scenarios of working  with open, digital tools for the creation of digital materials in general and OER in particular are made visible. Through the chosen focus on application scenarios and corresponding instructions for action paired with background knowledge (e.g. on issues of making digital material accessibe), we want to go beyond the widespread \"tool-ification\" and make digital teaching and learning tangible for teachers at universities and schools."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: OER Know-How 2018"
            }
          ]
        },
        {
          "@id": "urn:uuid:e6db0255-1f2d-42cb-8698-47ec5b971bad",
          "@type": "WebPage",
          "description": [
            {
              "@language": "en",
              "@value": "This diagram visualizes an exemplary selection of applications of the paradigm of open educational practices.\r\n\r\nBeginning with the stage of preparing a teaching unit (seminar, school lesson, etc. ) with corresponding open material (e.g. OER) (light red), we then move to the stage of sharing this unit and its content with the seminar, class, etc. online (orange). The next stage comprises making active use of the introduced content/material in a collaborative learning context as part of this seminar or working group) (yellow). This then might include, or be followed up by, shared instances of revising and optimization of the materials used, based on the experiences made and feedback gained during the session (green). Further contemplating on the experiences made, the teacher and/or the learners involved share their thoughts on these practices and examples online (blue).\r\n\r\nThe diagram lists the described stages' scenarios (text on the right) and corresponding open tools (ideally open source) (icons below the rainbow).\r\n\r\nWhat needs to be emphasized here is the possibility of an iterative process optimization. This points towards the possibility of not necessarily going through Stage 1 (light red) in a linear way up to the last stage (blue), but rather making use of continuous back- and cross-referencing of neighbouring stages (indicated in the graphic via fluid color transitions).\r\n\r\n***\r\n\r\nThe graphic is provided in various formats (ai, psd, png, jpg, eps, svg) and released as Creative Commons Zero (CC0), so as to be open for further remixing ;)\r\n\r\n***\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Open Educational Practice (OEP): collection of scenarios'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
            }
          ],
          "name": [
            {
              "@language": "en",
              "@value": "Open Educational Practice (OEP): collection of scenarios"
            }
          ]
        },
        {
          "@id": "urn:uuid:3f60832c-b482-4f62-a91f-16d02f6adefc",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Der Beitrag thematisiert die Genese des im Sommer 2017 an der Universität Hamburg gestarteten **openLabs**, das sich als virtueller Nexus zum breiten Themenfeld der Openness in zahlreichen Facetten und mit Ziel der mittelfristigen Etablierung einer Practice of Open Science (POS) versteht und die Ansätze bestehender Projekte zielgruppenübergreifend vernetzt."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "\"openLab. Nexus der Entwicklung in Richtung Openness\" in Fachmagazin Synergie #04"
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Tobias Steiner"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hamburg",
          "addressRegion": "DE.HH",
          "postalCode": "20146",
          "streetAddress": "Schlüterstr. 51"
        },
        "geo": {
          "lat": 53.5684084,
          "lon": 9.985506699999974
        }
      },
      "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
      "email": "info@flavoursofopen.science",
      "sameAs": [
        "https://uhh.de/synlloer",
        "https://mla.hcommons.org/members/cmplxtvstudies00/"
      ]
    },
    "about": {
      "image": "https://hcommons.org/app/uploads/avatars/1009032/5a4bc977e09a7-bpfull.jpg",
      "organizerFor": [
        {
          "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
          "@type": "Event",
          "description": [
            {
              "@language": "de",
              "@value": "Beratungs- und Anlaufstelle für mediale Frage- und Problemstellungen zu den Themenbereichen:\r\n\r\n- Digital Publishing\r\n- OER allgemein\r\n- Open Access\r\n- OER- und Medienproduktion und -integration\r\n- Open Source\r\n- Lizenzierung, Creative Commons\r\n- Open Data"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        }
      ],
      "keywords": [
        "open educational practice",
        " practices of open science",
        "open education",
        "open scholarship",
        "open access",
        "oer",
        "open educational resources"
      ],
      "@type": "Person",
      "created": [
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
        },
        {
          "@id": "urn:uuid:537f72fe-bb10-47b2-992b-e388af779057",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Diese mit dem Open Source-Tool H5P erstellte Timeline bietet einen Überblick über die Entwicklung des (noch) jungen Bereichs der Offenen Bildungsmaterialien (OER) in Deutschland und setzt diese in den Kontext  internationaler Entwicklungen der letzten 20 Jahre.\n\nZudem existiert eine JPEG-Variante der wichtigsten Daten des Zeitstrahls von 1997 bis 2017 und kann [hier abgerufen](https://uhh.de/synlloer-timeline-germany) werden."
            },
            {
              "@language": "en",
              "@value": "This timeline provides an overview of key events that characterize the development of open educational resources (OER) and open education in Germany over the last 20 years.\n\nJPEG-Version of the timeline (1997-2017) also [available here](https://uhh.de/synlloer-timeline-germany)."
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
              "@value": "Zeitstrahl: Entwicklung von OER in Deutschland"
            },
            {
              "@language": "en",
              "@value": "Timeline: Development of OER in Germany"
            }
          ]
        }
      ],
      "agentIn": [
        {
          "@id": "urn:uuid:216b1e0f-108d-4519-b94a-e872ed762773",
          "@type": "LikeAction",
          "agent": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "object": {
            "@id": "urn:uuid:11b26791-bd01-4c5c-8c45-29b50e689d4c",
            "@type": "Service",
            "description": [
              {
                "@language": "en",
                "@value": "Mit dem OER-Hörnchen können gezielt Lehr-/Lernmaterialen gefunden werden, welche frei veränderbar sind und wieder veröffentlicht werden dürfen - sogenannte Open Educational Resources (OER). Das OERHörnchen nutzt maschinenlesbare Creative Commons Lizenzen und ist ein Open-Source-Projekt."
              }
            ],
            "location": {
              "address": {
                "addressCountry": "DE",
                "addressLocality": "Köln",
                "postalCode": "50937",
                "streetAddress": "Beethovenpark"
              },
              "geo": {
                "lat": 50.9115273,
                "lon": 6.9143701
              }
            },
            "name": [
              {
                "@language": "en",
                "@value": "OERHörnchen"
              }
            ]
          },
          "startTime": "2017-12-20T17:48:09.375+01:00"
        }
      ],
      "authorOf": [
        {
          "@id": "urn:uuid:5c57d8cd-b0c1-46e7-8228-251cb5efe624",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:47:23.825+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Updated contact and location details"
            }
          ]
        },
        {
          "@id": "urn:uuid:9e722126-39d0-4305-a6cf-c9cab62528b2",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50"
            }
          ],
          "dateCreated": "2017-03-27T22:45:03.008+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "Added organizer and location info"
            }
          ]
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Tobias Steiner studierte Amerikanistik (BA) an der Universität Hamburg und Television Studies (MA) am Birkbeck College der University of London. \n\nVon 2013 bis 2016 war er als Projektkoordinator des Teilprojekts 43 „Einheitliche (barrierearme) IT-Konzepte für Studium und Lehre“ am Universitätskolleg der Universität Hamburg tätig. \n\nSeit 2017 koordiniert Tobias das OERInfo-Projekt \"SynLLOER\" (Synergien für Lehre und Lernen durch OER-Materialien) unter der Leitung von Prof. Dr. Kerstin Mayrberger, das zum 30.06.2018 endete. Seitdem ist er weiterhin am Universitätskolleg DIGITAL im Bereich des openLab als Projektkoordinator unter den Vorzeichen von #openeducation #openaccess und #openscholarship tätig. "
        }
      ],
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "url": "https://orcid.org/0000-0002-3158-3136",
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
          "@id": "https://oerworldmap.org/assets/json/persons.json#scientist",
          "@type": "Concept",
          "name": [
            {
              "@language": "pt",
              "@value": "Scientist"
            },
            {
              "@language": "de",
              "@value": "Wissenschaftler/in"
            },
            {
              "@language": "en",
              "@value": "Scientist"
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
          "@id": "urn:uuid:5314276e-c2d1-4b9b-afbb-0cc23bd20c86",
          "@type": "Action",
          "agent": [
            {
              "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
              "@type": "Organization",
              "description": [
                {
                  "@language": "de",
                  "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
                }
              ],
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20146",
                  "streetAddress": "Schlüterstraße 51"
                },
                "geo": {
                  "lat": 53.567952,
                  "lon": 9.986097
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
                }
              ]
            },
            {
              "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
              "@type": "Organization",
              "description": [
                {
                  "@language": "en",
                  "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
                },
                {
                  "@language": "de",
                  "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
                }
              ],
              "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
              "location": {
                "address": {
                  "addressCountry": "DE",
                  "addressLocality": "Hamburg",
                  "addressRegion": "DE.HH",
                  "postalCode": "20148",
                  "streetAddress": "Mittelweg 177"
                },
                "geo": {
                  "lat": 53.56446,
                  "lon": 9.99492
                }
              },
              "name": [
                {
                  "@language": "en",
                  "@value": "Hamburg University"
                },
                {
                  "@language": "de",
                  "@value": "Universität Hamburg"
                }
              ]
            }
          ],
          "description": [
            {
              "@language": "de",
              "@value": "Durch Informationsmaterialien, Informationsveranstaltungen und ein offenes Werkstattangebot sollen im Projekt SynLLOER die Multiplikatoren von heute und morgen aktiviert, für OER sensibilisiert und in den (nachhaltigen) Austausch über die Fächer- und Altersgrenzen hinweg gebracht werden. Durch das dafür erweiterte Fachmagazin für Digitalisierung in der Lehre „Synergie“ kann eine Erstinformation an die Zielgruppe mit hoher Wahrnehmung leicht realisiert werden. Darauf bauen weiterführende Informationsveranstaltungen an der Universität Hamburg und in Hamburger Schulen auf. Ein wöchentlich angebotenes offenes Werkstattformat bringt dann erfahrene Praktiker und interessierte Einsteiger zusammen.\r\n\r\nHamburg bietet durch die geografische Nähe von sechs öffentlichen Hochschulen und über 400 Schulen und Berufsschulen die Möglichkeit, eine sehr hohe Anzahl von Multiplikatoren im persönlichen Kontakt zu erreichen. Neben den Hochschullehrenden sowie den Lehrerinnen und Lehrern an den Schulen kommen als dritte große Gruppe noch die Lehramtsstudierenden an der Universität Hamburg dazu – insgesamt mehr als 12.000 aktuell oder in naher Zukunft im Bildungssystem aktive Personen.\r\n"
            }
          ],
          "image": "https://synlloer.blogs.uni-hamburg.de/wp-content/uploads/2017/01/cropped-infographik_SynLLOER_02_170105-01-1.png",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Synergien für Lehre und Lernen durch OER"
            }
          ],
          "startTime": "2017-01-01"
        },
        {
          "@id": "urn:uuid:47f5ba0b-de40-4bc5-a487-9e67128668de",
          "@type": "Organization",
          "description": [
            {
              "@language": "de",
              "@value": "Das Universitätskolleg (UK) ist eine zentrale Organisationseinheit (ZOE) nach §92a (2) Hamburger Hochschulgesetz und direkt am Präsidium der Universität Hamburg angesiedelt.  Als Innovationslabor und Kommunikationsplattform koordiniert es fakultätsübergreifende Projekte zur Verbesserung von Studium und Lehre."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567952,
              "lon": 9.986097
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Universitätskolleg (Zentrale Organisationseinheit)"
            }
          ]
        },
        {
          "@id": "urn:uuid:0886b934-0b85-45c3-bb10-94e5804966e6",
          "@type": "Organization",
          "description": [
            {
              "@language": "en",
              "@value": "The Hamburg University is the largest institution for research and education in the north of Germany. As one of the country's largest universities, we offer a diverse course spectrum and excellent research opportunities.\r\n\r\nThe University boasts numerous interdisciplinary projects in a broad range of subjects and an extensive partner network with leading institutions on a regional, national and international scale."
            },
            {
              "@language": "de",
              "@value": "Als größte Forschungs- und Ausbildungseinrichtung Norddeutschlands und einer der größten Universitäten in Deutschland vereint die Universität Hamburg ein vielfältiges Lehrangebot mit exzellenter Forschung.\r\n\r\nSie bietet ein breites Fächerspektrum mit zahlreichen interdisziplinären Schwerpunkten und verfügt über ein weitreichendes Kooperationsnetzwerk mit Spitzeneinrichtungen auf regionaler, nationaler und internationaler Ebene."
            }
          ],
          "image": "https://www.uni-hamburg.de/assets/uhh-logo-e8743ae8819893e7a79b99540eda2e4b223eaa6433affb246b3a6ca011cc9f45.gif",
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20148",
              "streetAddress": "Mittelweg 177"
            },
            "geo": {
              "lat": 53.56446,
              "lon": 9.99492
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Hamburg University"
            },
            {
              "@language": "de",
              "@value": "Universität Hamburg"
            }
          ]
        }
      ],
      "performerIn": [
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
          "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "Workshop am Donnerstag, den 22.02.2018 zu OER und Creative Commons-Lizenzen als Basis einer zukünftigen Erstellung von offenen Informationsmaterialien am Unabhängigen Landeszentrum für Datenschutz Schleswig-Holstein, Kiel."
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Kiel",
              "addressRegion": "DE.SH",
              "postalCode": "24103",
              "streetAddress": "Holstenstraße 98"
            },
            "geo": {
              "lat": 54.31963135130184,
              "lon": 10.133494080605864
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Offenheit, Lizenzen, und der Datenschutz"
            }
          ]
        },
        {
          "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "### Hamburg, immer Donnerstags von 14-18 Uhr\r\n\r\nIm openLab besteht jeden Donnerstag von 14-18 Uhr die Möglichkeit, Einblicke in die Nutzung von Markdown, GitLab, WordPress, H5P und anderen digitalen Tools zu bekommen und Unterstützung bei Fragen zu erhalten.\r\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hamburg",
              "addressRegion": "DE.HH",
              "postalCode": "20146",
              "streetAddress": "Schlüterstraße 51"
            },
            "geo": {
              "lat": 53.567997,
              "lon": 9.985982
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "SynLLOER openLab"
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
          "@id": "urn:uuid:24489a52-b710-4e2c-848a-5ce2e4f1e405",
          "@type": "Event",
          "description": [
            {
              "@language": "en",
              "@value": "**Freie Bildungsmaterialien in der Hochschule**\n\nDas freie Teilen von Bildungsmaterialien erfährt auch an Hochschulen immer größeren Zuspruch. Meist digital bereitgestellte freie Materialien von Lehrenden und anderen Personen werden in Lehr-Lern-Kontexte eingebunden, zum Teil überarbeitet und wieder veröffentlicht.\n\nDer Workshop leistet praktische Unterstützung bei einer Reihe von zentralen Fragen: Was genau sind freie Bildungsmaterialien? Wo finde ich sie? Wie setze ich sie in der Lehre ein? Wie veröffentliche ich eigene oder überarbeitete Materialien?\n\nEs darf kräftig gefragt, ausprobiert und diskutiert werden!\n"
            }
          ],
          "location": {
            "address": {
              "addressCountry": "DE",
              "addressLocality": "Hannover",
              "postalCode": "30459",
              "streetAddress": "Hochschule Hannover, Ricklinger Stadtweg 120, Gebäude 1H, 1. Etage, Raum 1H.1.19"
            },
            "geo": {
              "lat": 52.3543406,
              "lon": 9.7231259
            }
          },
          "name": [
            {
              "@language": "de",
              "@value": "Bildung, öffne dich!"
            }
          ]
        }
      ],
      "publication": [
        {
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
        {
          "@id": "urn:uuid:5e504df5-4c08-498e-aa1a-e438dfd3d955",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Synergie Praxis: Open Educational Resources 2017](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=94e2786d-4836-4a04-985a-dc3383dffc03&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532631290661&version=1.0http://)\n\nDer am 21.06.2017 veröffentlichte DIN-A5-Band \"OER 2017\" bietet einen einfachen Einstieg in die Welt der Open Educational Resources (OER) sowie zahlreiche Hilfestellungen bei Fragen zu Urheberrecht, OER-Fundstellen, offenen Bild- und Medienlizenzen und vielem mehr an. Zusätzlich wird ein Plakat zum Thema \"Der Weg zu OER\" zum PDF-Download angeboten.\n\n#### Materialien:\n\n* PDF-Download: [Synergie Praxis OER 2017 (PDF)](https://uhh.de/eniqr)\n* ePub-Download: [Synergie Praxis OER 2017 (ePub)] (https://uhh.de/qow1z)\n* PDF-Download Plakat [\"Der Weg zu OER\"](https://uhh.de/ibgs7)\n* Synergie Praxis OER 2017: [GitBook (offenes Format)](https://www.gitbook.com/book/synlloer/synergie-praxis-open-educational-resources-2017/)\n"
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            },
            {
              "@language": "en",
              "@value": "Synergie Praxis: Open Educational Resources 2017"
            }
          ]
        },
        {
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
        {
          "@id": "urn:uuid:a0ef530d-f337-4085-a010-ff474dc00277",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "![Cover Synergie Praxis: OER Know-How 2018](https://oer-contentbuffet.info/edu-sharing/preview?nodeId=4b79032e-8123-43b4-b139-2aaa58f2da3c&storeProtocol=workspace&storeId=SpacesStore&dontcache=1532630418645&version=1.0http://)\n\nDie am 24.05.2018 erschienene zweite Ausgabe aus der Reihe Synergie Praxis liefert dieses Mal kurze Online-Tutorials für die Erstellung und Verwendung von Open Educational Resources (OER), die vom Team des BMBF-Projekts SynLLOER erstellt wurden. \n\nDas vorliegende Heft bietet eine schnelle Übersicht über das bereits vorhandene Online-Angebot und gibt anhand eines szenarienbasierten Lehr-/Lernangebots mögliche Antworten auf die folgenden Fragen: Wie kann man sich bei der Erstellung von OER der praxisnahen und ganzheitlichen Umsetzung des Openness-Gedankens nähern? Und können wir im Sinne offener Bildungspraktiken Handreichungen zur schrittweisen Erstellung und Verfügbarmachung von OER bereitstellen? \n\nDabei werden anhand der OER-Toolchains eine Viezahl von Szenarien skizziert, die Handlungsmöglichkeiten mit offenen, digitalen Tools zur Erstellung digitaler Materialien im Allgemeinen und OER im Speziellen exemplarisch sichtbar machen. Durch den gewählten Fokus auf Einsatzszenarien und entsprechende Handlungsanleitungen gepaart mit Hintergrundwissen (bspw. zu Barrierefreiheit) wollen wir über die weit verbreitete \"Tool-ifizierung\" hinausgehen und digitales Lehren und Lernen für Lehrende in Hochschule und Schule greifbar machen."
            },
            {
              "@language": "en",
              "@value": "The second issue of our Synergie Praxis series, published on 24.05.2018 and created by the team of the BMBF project SynLLOER, provides short online tutorials for the creation and use of Open Educational Resources (OER). \n\nMaking use of these OER toolchains, a variety of scenarios of working  with open, digital tools for the creation of digital materials in general and OER in particular are made visible. Through the chosen focus on application scenarios and corresponding instructions for action paired with background knowledge (e.g. on issues of making digital material accessibe), we want to go beyond the widespread \"tool-ification\" and make digital teaching and learning tangible for teachers at universities and schools."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "Synergie Praxis: OER Know-How 2018"
            }
          ]
        },
        {
          "@id": "urn:uuid:e6db0255-1f2d-42cb-8698-47ec5b971bad",
          "@type": "WebPage",
          "description": [
            {
              "@language": "en",
              "@value": "This diagram visualizes an exemplary selection of applications of the paradigm of open educational practices.\r\n\r\nBeginning with the stage of preparing a teaching unit (seminar, school lesson, etc. ) with corresponding open material (e.g. OER) (light red), we then move to the stage of sharing this unit and its content with the seminar, class, etc. online (orange). The next stage comprises making active use of the introduced content/material in a collaborative learning context as part of this seminar or working group) (yellow). This then might include, or be followed up by, shared instances of revising and optimization of the materials used, based on the experiences made and feedback gained during the session (green). Further contemplating on the experiences made, the teacher and/or the learners involved share their thoughts on these practices and examples online (blue).\r\n\r\nThe diagram lists the described stages' scenarios (text on the right) and corresponding open tools (ideally open source) (icons below the rainbow).\r\n\r\nWhat needs to be emphasized here is the possibility of an iterative process optimization. This points towards the possibility of not necessarily going through Stage 1 (light red) in a linear way up to the last stage (blue), but rather making use of continuous back- and cross-referencing of neighbouring stages (indicated in the graphic via fluid color transitions).\r\n\r\n***\r\n\r\nThe graphic is provided in various formats (ai, psd, png, jpg, eps, svg) and released as Creative Commons Zero (CC0), so as to be open for further remixing ;)\r\n\r\n***\r\n\r\nTo the extent possible under law, Tobias Steiner has waived all copyright and related or neighboring rights to 'Open Educational Practice (OEP): collection of scenarios'. This work is published from: Germany.\r\n\r\n***\r\n\r\nInspired by similar graphics on Open Science: Bianca Kramer & Jeroen Bosman DOI: 10.5281/zenodo.1147025 and on Open Education: Prof. Dr. Ellen Euler & Raoul Poupart DOI: 10.5281/zenodo.1164799"
            }
          ],
          "name": [
            {
              "@language": "en",
              "@value": "Open Educational Practice (OEP): collection of scenarios"
            }
          ]
        },
        {
          "@id": "urn:uuid:3f60832c-b482-4f62-a91f-16d02f6adefc",
          "@type": "WebPage",
          "description": [
            {
              "@language": "de",
              "@value": "Der Beitrag thematisiert die Genese des im Sommer 2017 an der Universität Hamburg gestarteten **openLabs**, das sich als virtueller Nexus zum breiten Themenfeld der Openness in zahlreichen Facetten und mit Ziel der mittelfristigen Etablierung einer Practice of Open Science (POS) versteht und die Ansätze bestehender Projekte zielgruppenübergreifend vernetzt."
            }
          ],
          "name": [
            {
              "@language": "de",
              "@value": "\"openLab. Nexus der Entwicklung in Richtung Openness\" in Fachmagazin Synergie #04"
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Tobias Steiner"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "DE",
          "addressLocality": "Hamburg",
          "addressRegion": "DE.HH",
          "postalCode": "20146",
          "streetAddress": "Schlüterstr. 51"
        },
        "geo": {
          "lat": 53.5684084,
          "lon": 9.985506699999974
        }
      },
      "@id": "urn:uuid:0e3d180e-73c3-42ec-8971-aabe20d4fc50",
      "email": "info@flavoursofopen.science",
      "sameAs": [
        "https://uhh.de/synlloer",
        "https://mla.hcommons.org/members/cmplxtvstudies00/"
      ]
    },
    "action": {
      "time": "2019-05-04T17:40:12.810+02:00",
      "type": "edit"
    },
    "id": "e0a791ccee4d949657cac279bd25a58e65952474"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Ileana Celeste Fernandez Franzoso"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:766ad55a-fa0c-4e78-9ce9-5180e4fb847c",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "ileana.franzoso@iff.edu.br"
    },
    "action": {
      "time": "2019-05-04T03:56:27.621+02:00",
      "type": "add"
    },
    "id": "36cf36b170dc2b4c76940058f1e75e3e1357d3cb"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Eloiza Almeida Souza"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:546d9597-c74b-4b6a-876a-ff939f1ce787",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "eloiza.as.aziole@gmail.com"
    },
    "action": {
      "time": "2019-05-03T15:33:22.827+02:00",
      "type": "add"
    },
    "id": "6dd2c019438537d6aa82d302ce502a83398db12a"
  },
  {
    "user": {
      "@type": "Person",
      "authorOf": [
        {
          "@id": "urn:uuid:d68caaa9-7bd1-4d0d-8794-da06ae057110",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359"
            }
          ],
          "dateCreated": "2019-05-03T13:43:25.791+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "São legítimas muitas as razões para não se compartilhar um recurso, e muitas outras para abrí-los. Encorajamos você a pensar no seu contexto e nas suas possibilidades de compartilhamento."
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Centro de Educação a Distância Unimontes"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359",
      "@context": "https://oerworldmap.org/assets/json/context.json"
    },
    "about": {
      "dateCreated": "2019-05-03T13:43:25.791+02:00",
      "@type": "Comment",
      "author": [
        {
          "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359",
          "@type": "Person",
          "location": {
            "address": {
              "addressCountry": "BR"
            }
          },
          "name": [
            {
              "@language": "en",
              "@value": "Centro de Educação a Distância Unimontes"
            }
          ]
        }
      ],
      "@id": "urn:uuid:d68caaa9-7bd1-4d0d-8794-da06ae057110",
      "text": [
        {
          "@language": "en",
          "@value": "São legítimas muitas as razões para não se compartilhar um recurso, e muitas outras para abrí-los. Encorajamos você a pensar no seu contexto e nas suas possibilidades de compartilhamento."
        }
      ],
      "commentOn": {
        "@id": "urn:uuid:4070b9c3-9b0a-4eff-b61b-ceb82561be9d",
        "@type": "Event",
        "description": [
          {
            "@language": "pt",
            "@value": "O objetivo da proposta de Oficina EA/REA é introduzir os conceitos que permeiam a educação aberta e os recursos educacionais abertos para os docentes do Centro de Educação a Distância do CEAD-Unimontes, através da prática e do diálogo entre as questões éticas, pedagógicas, metodológicas e tecnológicas."
          }
        ],
        "location": {
          "address": {
            "addressCountry": "BR",
            "addressLocality": "Montes Claros",
            "addressRegion": "BR.MG",
            "postalCode": "39401-039",
            "streetAddress": "Avenida Rui Braga"
          },
          "geo": {
            "lat": -16.722069993276563,
            "lon": -43.878255308848
          }
        },
        "name": [
          {
            "@language": "pt",
            "@value": "Oficina EA/REA"
          }
        ]
      },
      "@context": "https://oerworldmap.org/assets/json/context.json"
    },
    "action": {
      "time": "2019-05-03T13:43:25.830+02:00",
      "type": "add"
    },
    "id": "c024f0363a4be822829093a3691241d36f5a809d"
  },
  {
    "user": {
      "@type": "Person",
      "authorOf": [
        {
          "@id": "urn:uuid:d68caaa9-7bd1-4d0d-8794-da06ae057110",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359"
            }
          ],
          "dateCreated": "2019-05-03T13:43:25.791+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "São legítimas muitas as razões para não se compartilhar um recurso, e muitas outras para abrí-los. Encorajamos você a pensar no seu contexto e nas suas possibilidades de compartilhamento."
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Centro de Educação a Distância Unimontes"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359",
      "@context": "https://oerworldmap.org/assets/json/context.json"
    },
    "about": {
      "endDate": "2019-02-22T12:00",
      "@type": "Event",
      "name": [
        {
          "@language": "pt",
          "@value": "Oficina EA/REA"
        }
      ],
      "description": [
        {
          "@language": "pt",
          "@value": "O objetivo da proposta de Oficina EA/REA é introduzir os conceitos que permeiam a educação aberta e os recursos educacionais abertos para os docentes do Centro de Educação a Distância do CEAD-Unimontes, através da prática e do diálogo entre as questões éticas, pedagógicas, metodológicas e tecnológicas."
        }
      ],
      "comment": [
        {
          "@id": "urn:uuid:d68caaa9-7bd1-4d0d-8794-da06ae057110",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359"
            }
          ],
          "dateCreated": "2019-05-03T13:43:25.791+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "São legítimas muitas as razões para não se compartilhar um recurso, e muitas outras para abrí-los. Encorajamos você a pensar no seu contexto e nas suas possibilidades de compartilhamento."
            }
          ]
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR",
          "addressLocality": "Montes Claros",
          "addressRegion": "BR.MG",
          "postalCode": "39401-039",
          "streetAddress": "Avenida Rui Braga"
        },
        "geo": {
          "lat": -16.722069993276563,
          "lon": -43.878255308848
        }
      },
      "@id": "urn:uuid:4070b9c3-9b0a-4eff-b61b-ceb82561be9d",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "startDate": "2019-02-22T09:00"
    },
    "action": {
      "time": "2019-05-03T13:40:24.205+02:00",
      "type": "edit"
    },
    "id": "3d766076db64e441ca080f00518b4e8f9417c02f"
  },
  {
    "about": {
      "@type": "Person",
      "authorOf": [
        {
          "@id": "urn:uuid:d68caaa9-7bd1-4d0d-8794-da06ae057110",
          "@type": "Comment",
          "author": [
            {
              "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359"
            }
          ],
          "dateCreated": "2019-05-03T13:43:25.791+02:00",
          "text": [
            {
              "@language": "en",
              "@value": "São legítimas muitas as razões para não se compartilhar um recurso, e muitas outras para abrí-los. Encorajamos você a pensar no seu contexto e nas suas possibilidades de compartilhamento."
            }
          ]
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "Centro de Educação a Distância Unimontes"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:85c69d57-c6a2-4420-ac5b-c7fdf3798359",
      "@context": "https://oerworldmap.org/assets/json/context.json"
    },
    "action": {
      "time": "2019-05-03T13:29:27.957+02:00",
      "type": "edit"
    },
    "id": "4f367de42009d53308a93140edabc2fef7814919"
  },
  {
    "user": {
      "image": "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba",
      "additionalType": [
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
      "keywords": [
        "open educational resources"
      ],
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr E.C. Ihekwoaba"
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Emmanuel is a certified librarian of Nigeria. He has MLS and Ph.D degrees in Library and Information Science. He has published well over 17 articles in reputable Library and Information Science Journals in national and international Journals and attended several national and international conferences/training workshops. In addition, he has contributed a book Chapter to a Book of reading.  He is interested in users with special needs, Academic, Public and School Libraries, health librarianship and application of ICT packages in enhancement of library services.\nAs the Divisional Head, Digital Library Services, University of Nigeria main Library and Head of Special Information Technology Project Section of the Library, University of Nigeria, Nsukka; he manages the Digital Library Services of the division. He is key to the training and retraining of Staff in the Library, Division and Section. He is key to the training and guiding users on the access and use of the various databases, OER, open access portals online in the digital library. He is key to the acquisition of E-Books, E-Journals, E-Articles, soft copies of undergraduate Students' projects, Post graduate Students' Thesis and Dissertations. He also teaches Use of the Library and study Skills to Undergraduate students and Advanced Cataloguing to Post graduate Students of the University\n\n\n"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Nsukka"
        }
      },
      "@id": "urn:uuid:57b8e415-ca3d-434e-a01d-399327385b5f",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "emmanuel.ihekwoaba@unn.edu.ng",
      "sameAs": [
        "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba"
      ]
    },
    "about": {
      "image": "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba",
      "additionalType": [
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
      "keywords": [
        "open educational resources"
      ],
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr E.C. Ihekwoaba"
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Emmanuel is a certified librarian of Nigeria. He has MLS and Ph.D degrees in Library and Information Science. He has published well over 17 articles in reputable Library and Information Science Journals in national and international Journals and attended several national and international conferences/training workshops. In addition, he has contributed a book Chapter to a Book of reading.  He is interested in users with special needs, Academic, Public and School Libraries, health librarianship and application of ICT packages in enhancement of library services.\nAs the Divisional Head, Digital Library Services, University of Nigeria main Library and Head of Special Information Technology Project Section of the Library, University of Nigeria, Nsukka; he manages the Digital Library Services of the division. He is key to the training and retraining of Staff in the Library, Division and Section. He is key to the training and guiding users on the access and use of the various databases, OER, open access portals online in the digital library. He is key to the acquisition of E-Books, E-Journals, E-Articles, soft copies of undergraduate Students' projects, Post graduate Students' Thesis and Dissertations. He also teaches Use of the Library and study Skills to Undergraduate students and Advanced Cataloguing to Post graduate Students of the University\n\n\n"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Nsukka"
        }
      },
      "@id": "urn:uuid:57b8e415-ca3d-434e-a01d-399327385b5f",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "emmanuel.ihekwoaba@unn.edu.ng",
      "sameAs": [
        "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba"
      ]
    },
    "action": {
      "time": "2019-05-03T13:00:41.780+02:00",
      "type": "edit"
    },
    "id": "a71b42af4684337b2b4d792781ba447615e1ea25"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Ricardo Antonio Zimmermann"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "BR"
        }
      },
      "@id": "urn:uuid:c89da501-c525-4769-b8c0-c0fe797abadd",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "ricardo.zimmermann@gmail.com"
    },
    "action": {
      "time": "2019-05-02T18:40:09.075+02:00",
      "type": "add"
    },
    "id": "f797ab5d69eb4368286e7b761859a22cb3692c2d"
  },
  {
    "user": {
      "image": "https://www.google.com/search?q=photos+of+Catherine+Amia&rlz=1C1HLDY_enUG801UG801&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjrgZOQkP3hAhVNxYUKHc68DwwQ_AUIDigB&biw=1366&bih=657#imgrc=kY0P0wXz125NwM:",
      "additionalType": [
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
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Catherine Amia"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "UG",
          "addressLocality": "Kawempe",
          "addressRegion": "UG.KM",
          "postalCode": "7051",
          "streetAddress": "Kawempe Ttula Mpererwe Road"
        },
        "geo": {
          "lat": 0.3795624,
          "lon": 32.5607743299351
        }
      },
      "@id": "urn:uuid:ac120c20-6012-44b3-986a-854cc875f681",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "amiacatherine@gmail.com"
    },
    "about": {
      "image": "https://www.google.com/search?q=photos+of+Catherine+Amia&rlz=1C1HLDY_enUG801UG801&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjrgZOQkP3hAhVNxYUKHc68DwwQ_AUIDigB&biw=1366&bih=657#imgrc=kY0P0wXz125NwM:",
      "additionalType": [
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
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Catherine Amia"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "UG",
          "addressLocality": "Kawempe",
          "addressRegion": "UG.KM",
          "postalCode": "7051",
          "streetAddress": "Kawempe Ttula Mpererwe Road"
        },
        "geo": {
          "lat": 0.3795624,
          "lon": 32.5607743299351
        }
      },
      "@id": "urn:uuid:ac120c20-6012-44b3-986a-854cc875f681",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "amiacatherine@gmail.com"
    },
    "action": {
      "time": "2019-05-02T17:09:33.250+02:00",
      "type": "edit"
    },
    "id": "2bd4892da2cd0dfb52dc57525414c08a82df80f2"
  },
  {
    "user": {
      "image": "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba",
      "additionalType": [
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
      "keywords": [
        "open educational resources"
      ],
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr E.C. Ihekwoaba"
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Emmanuel is a certified librarian of Nigeria. He has MLS and Ph.D degrees in Library and Information Science. He has published well over 17 articles in reputable Library and Information Science Journals in national and international Journals and attended several national and international conferences/training workshops. In addition, he has contributed a book Chapter to a Book of reading.  He is interested in users with special needs, Academic, Public and School Libraries, health librarianship and application of ICT packages in enhancement of library services.\nAs the Divisional Head, Digital Library Services, University of Nigeria main Library and Head of Special Information Technology Project Section of the Library, University of Nigeria, Nsukka; he manages the Digital Library Services of the division. He is key to the training and retraining of Staff in the Library, Division and Section. He is key to the training and guiding users on the access and use of the various databases, OER, open access portals online in the digital library. He is key to the acquisition of E-Books, E-Journals, E-Articles, soft copies of undergraduate Students' projects, Post graduate Students' Thesis and Dissertations. He also teaches Use of the Library and study Skills to Undergraduate students and Advanced Cataloguing to Post graduate Students of the University\n\n\n"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Nsukka"
        }
      },
      "@id": "urn:uuid:57b8e415-ca3d-434e-a01d-399327385b5f",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "emmanuel.ihekwoaba@unn.edu.ng",
      "sameAs": [
        "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba"
      ]
    },
    "about": {
      "image": "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba",
      "additionalType": [
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
      "keywords": [
        "open educational resources"
      ],
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr E.C. Ihekwoaba"
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Emmanuel is a certified librarian of Nigeria. He has MLS and Ph.D degrees in Library and Information Science. He has published well over 17 articles in reputable Library and Information Science Journals in national and international Journals and attended several national and international conferences/training workshops. In addition, he has contributed a book Chapter to a Book of reading.  He is interested in users with special needs, Academic, Public and School Libraries, health librarianship and application of ICT packages in enhancement of library services.\nAs the Divisional Head, Digital Library Services, University of Nigeria main Library and Head of Special Information Technology Project Section of the Library, University of Nigeria, Nsukka; he manages the Digital Library Services of the division. He is key to the training and retraining of Staff in the Library, Division and Section. He is key to the training and guiding users on the access and use of the various databases, OER, open access portals online in the digital library. He is key to the acquisition of E-Books, E-Journals, E-Articles, soft copies of undergraduate Students' projects, Post graduate Students' Thesis and Dissertations. He also teaches Use of the Library and study Skills to Undergraduate students and Advanced Cataloguing to Post graduate Students of the University\n\n\n"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Nsukka"
        }
      },
      "@id": "urn:uuid:57b8e415-ca3d-434e-a01d-399327385b5f",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "emmanuel.ihekwoaba@unn.edu.ng",
      "sameAs": [
        "https://www.researchgate.net/profile/Emmanuel_Ihekwoaba"
      ]
    },
    "action": {
      "time": "2019-05-02T16:25:30.904+02:00",
      "type": "edit"
    },
    "id": "764c409623e512b64a862dec1f68c8e512bda4a4"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr. Okoye, Michael Onuchukwu"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG"
        }
      },
      "@id": "urn:uuid:e6ad836a-c89f-4742-84f9-ddc1d956e8ed",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "michael.okoye@unn.edu.ng"
    },
    "action": {
      "time": "2019-05-02T14:37:33.996+02:00",
      "type": "add"
    },
    "id": "e4c05709799fa72a06fbc849f93354b3f87192b1"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr Victoria N. Okafor"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG"
        }
      },
      "@id": "urn:uuid:c9760fb0-f92d-472c-9454-3896f7678c03",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "victoria.okafor@unn.edu.ng"
    },
    "action": {
      "time": "2019-05-02T14:34:19.498+02:00",
      "type": "add"
    },
    "id": "f49478dc740933f43e63c00c85afe8eeb9cf855b"
  },
  {
    "user": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Harriet Igbo"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Enugu",
          "addressRegion": "NG.EN"
        },
        "geo": {
          "lat": 6.86412905,
          "lon": 7.40843576002899
        }
      },
      "@id": "urn:uuid:70dd3ff2-1c57-4a3e-99c5-bac62feadca1",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "harriet.igbo@unn.edu.ng"
    },
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Harriet Igbo"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG",
          "addressLocality": "Enugu",
          "addressRegion": "NG.EN"
        },
        "geo": {
          "lat": 6.86412905,
          "lon": 7.40843576002899
        }
      },
      "@id": "urn:uuid:70dd3ff2-1c57-4a3e-99c5-bac62feadca1",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "harriet.igbo@unn.edu.ng"
    },
    "action": {
      "time": "2019-05-02T14:33:22.360+02:00",
      "type": "edit"
    },
    "id": "926ee917d102824dcd1bfc770777deaecc5fbad8"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "Dr Ngozi Eunice Osaadebe"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG"
        }
      },
      "@id": "urn:uuid:da5ae9a6-aced-4fb6-8d81-7d92b60b517b",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "ngozi.osadebe@unn.edu.ng"
    },
    "action": {
      "time": "2019-05-02T14:27:14.296+02:00",
      "type": "add"
    },
    "id": "59fbc3cbe2d44c52d77112c2393ca9a643e1bb6e"
  },
  {
    "about": {
      "@type": "Person",
      "name": [
        {
          "@language": "en",
          "@value": "IMO, Nwabuisi Thomas (PhD)"
        }
      ],
      "location": {
        "address": {
          "addressCountry": "NG"
        }
      },
      "@id": "urn:uuid:3af9b4bf-112e-4e62-8a05-232817b4a156",
      "@context": "https://oerworldmap.org/assets/json/context.json",
      "email": "nwabuisi.imo@unn.edu.ng"
    },
    "action": {
      "time": "2019-05-02T14:27:02.626+02:00",
      "type": "add"
    },
    "id": "587ae5495b0b02c51cb5561e18da37ede9c71332"
  }
]

storiesOf('Timeline', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <EmittProvider emitter={mock.emitter}>
        <Timeline
          entries={entries}
        />
      </EmittProvider>
    </WithStrings>
  ))