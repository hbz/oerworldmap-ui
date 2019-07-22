import React from 'react'
import { storiesOf } from '@storybook/react'

import Topline from '../src/components/Topline'
import WithStrings from './WithStrings'

const about = {
  "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
  "countryChampionFor": [
    "DE"
  ],
  "keywords": [
    "OER Policy",
    "UNESCO",
    "business models",
    "library",
    "oer-librarian",
    "organization development",
    "programm management",
    "systems thinking on oer"
  ],
  "@type": "Person",
  "agentIn": [
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
            "@value": "For the third time, the Forum will be an opportunity to discuss open education policies among education experts, government representatives and activists. The third edition of OER Policy Forum will take place on September 11-12 in Warsaw."
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
            "@value": "OER Policy Forum 2018"
          }
        ]
      },
      "startTime": "2018-04-30T08:53:15.816Z"
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
            "@value": "Im Fokus der BMBF-Bekanntmachung zur Förderung offener Bildungsmaterialien stehen vor allem die Sichtbarmachung und die Erschließung eines höheren Nutzerkreises durch  die Sensibilisierung in der Breite für die Potenziale der Nutzung offener Bildungsmaterialien. Konkret umfasst die Förderbekanntmachung zwei Handlungsfelder: \r\n \r\n* Es wird eine Informationsstelle geschaffen, die Informationen zum Thema bündeln und in die Breite tragen wird. Die Laufzeit beträgt zunächst zwei Jahre. \r\n * Es werden insgesamt 23 Projekte gefördert, in denen Personen sensibilisiert und qualifiziert werden, die mit der Fort- und Weiterbildung von Bildungspersonal betraut sind.  \r\n\r\nMit der Förderbekanntmachung leistet das BMBF einen weiteren Beitrag zur Umsetzung der [Empfehlungen der Bund-Länder-Arbeitsgruppe zu offenen Bildungsmaterialien](http://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2015/2015_01_27-Bericht_OER.pdf). Das Bundesministerium für Bildung und Forschung (BMBF) und die Kultusministerkonferenz (KMK) hatten sich im Laufe des Jahres 2014 darauf geeinigt, die weitere Verbreitung von OER in Deutschland zu unterstützen.  In ihrem Anfang 2015 erschienen Bericht hält die Bund-Länder-Arbeitsgruppe fest, dass OER Potenziale für das Lebenslange Lernen bereithalten und deren  Verbreitung in Deutschland zu unterstützen sei. \r\n"
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
            "@id": "urn:uuid:90e1068a-00d4-41d7-a8d4-0f9420fadb15"
          }
        ],
        "description": [
          {
            "@language": "de",
            "@value": "tutory ist ein Online-Editor für Dokumente, der speziell auf die Eigenschaften von offenen Lehr- und Lernmaterial (OER) zugeschnitten ist. Im Handumdrehen können Lehrende mit tutory gut \n<a href=\"http://testing.de\">Testing</a>\n\n[Tesing2](http://testing2.de)\naussehende Materialien erstellen, individualisieren, organisieren und anderen zur Verfügung stellen.\n</br></br>\n<b>tutory BETA beschreibt den Zeitraum zwischen dem Launch des kostenlosen Angebots von tutory bis zur Veröffentlichung eines kostenpflichtigen Jahresabonnements<b>\n</br></br>"
          },
          {
            "@language": "en",
            "@value": "tutory is an online editor documents and is specifically designed for the needs of open educational resources (OER). It offers teachers a web application which allows them to create, individualize, organize and share learning materials within the shortest amount of time.\n\n<a href=\"http://testing.de\">Testing</a>\n\n[Tesing2](http://testing2.de)\n</br></br>\n<b>tutory BETA marks the time between the first launch of the free version of the service until the start of paid programs<b>\n</br></br>"
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
            "@language": "en",
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
      "@id": "urn:uuid:0ae46026-2fb4-4d1d-9ec7-e2edafef3348",
      "@type": "LikeAction",
      "agent": [
        {
          "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
        }
      ],
      "object": {
        "@id": "urn:uuid:4b901344-34a7-44ec-8eaa-dabc3afd8d7c",
        "@type": "Service",
        "description": [
          {
            "@language": "en",
            "@value": "OER Passport is a professional development program that takes educators through the process of understanding, finding, developing and sharing Open Educational Resources.  \n\nThis course trains teachers and students on OER use, reuse, licensing, creation, and sharing by completing the following tasks. The first three tasks lay a solid foundation and provide teachers with the tools to complete the last three tasks which focus on the use, reuse, production, and innovative teaching practices.\n\nParticipants can complete the tasks online. There are also files to print/create physical copies of OER Passports that can be used in an offline environment."
          }
        ],
        "name": [
          {
            "@language": "en",
            "@value": "OER Passport"
          }
        ]
      },
      "startTime": "2018-06-04T13:05:24.349Z"
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
    }
  ],
  "authorOf": [
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
    }
  ],
  "description": [
    {
      "@language": "en",
      "@value": "Jan L. Neumann is working as Head of Legal Affairs and Organization at the North Rhine-Westphalian Library Service Centre (hbz) in Cologne, Germany. He studied law, economy and systems thinking and has more than 15 years of experience within international project management for different publishing houses and libraries. He is a member of the Education Expert Committee of the German Commission for UNESCO and blogs about Open Educational Resources (OER) on OERSYS.org. Since 2013 he manages the OER World Map project, which is funded by the William and Flora Hewlett Foundation and aims at providing the most complete and comprehensible picture of the global Open Educational Resources (OER) movement so far. Jan is a frequent speaker at OER conferences and participated in the organization of OERde 14, OERde 15 and OERde 16 Festival. Nevertheless he considers himself a non-expert in OER to stress that having the courage to think by yourself is one important aspect of the empowerment which comes along with open education.  "
    }
  ],
  "@context": "https://oerworldmap.org/assets/json/context.json",
  "url": "http://www.oersys.org/",
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
  "affiliation": [
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
      "@id": "urn:uuid:164a5d61-8d20-401f-a157-7132b60f22ff",
      "@type": "Organization",
      "description": [
        {
          "@language": "en",
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
    }
  ],
  "performerIn": [
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
    }
  ],
  "publication": [
    {
      "@id": "urn:uuid:c74b6e56-fe19-4dfe-bb50-4d946d27faa8",
      "@type": "WebPage",
      "description": [
        {
          "@language": "en",
          "@value": "UNESCO Institute for Information Technologies in Education (UNESCO IITE) published the book on Open Educational Resources in Germany within its project on Open Educational Resources (OER) in non-English-speaking countries. The authors of the report – Dominic Orr, Jan Neumann and Joeran Muuss-Merholz – used holistic approach to explore diverse issues related to OER, including the policy perspective, as well as technical, legal, social and didactical aspects. The report provides a brief overview of the OER-related developments in Germany, describes the structure of the German education system and reveals major educational challenges. The state of advancement of OER in Germany is analyzed using bottom-up and top-down perspectives.\r\n \r\nThough Germany could be characterized as a relatively latecomer to the OER scene, there is a strong OER community in the country: the OER World Map data for Germany shows 166 organisations involved in OER-related practices. Recent government activities in the field of OER include the OERinfo funding programme, which was launched in November 2016. There are some important initiatives at the level of federal entities, for example, the establishment of the Hamburg Open Online University, which is currently the most ambitious OER project in Germany. Considering the fact that for the German educational community and the authorities of different levels OER are recognized for their potential in fostering innovation, it is expected that the recent and forthcoming grassroots OER initiatives and those triggered by the authorities will favour the advancement of open education in Germany."
        }
      ],
      "name": [
        {
          "@language": "en",
          "@value": "German OER Practices and Policy – from Bottom-up to Top-down Initiatives"
        }
      ]
    },
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
    "https://twitter.com/trugwaldsaenger",
    "https://www.linkedin.com/in/jan-neumann-18a30495?trk=hp-identity-name"
  ]
}

storiesOf('Topline', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <Topline
        about={about}
      />
    </WithStrings>
  ))