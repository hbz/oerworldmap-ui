import React from 'react'
import { storiesOf } from '@storybook/react'

import ResultList from '../src/components/ResultList'
import WithStrings from './WithStrings'

import EmittProvider from '../src/components/EmittProvider'
import mock from '../test/helpers/mock'


const listItems = [
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Gilberto Marcelino Da Silva",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR"
      }
    },
    "@id": "urn:uuid:0687fe2f-fdb3-4602-aa64-0974ad8e5e86",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "gibamaxi40@gmail.com"
  },
  {
    "@type": "Action",
    "name": [
      {
        "@value": "IFRS",
        "@language": "pt"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR",
        "streetAddress": "Rua Gen. Osório, 348",
        "postalCode": "95700086",
        "addressLocality": "Bento Gonçalves"
      }
    },
    "@id": "urn:uuid:ceb730a1-0c76-442c-b229-92804644d0da",
    "@context": "https://oerworldmap.org/assets/json/context.json"
  },
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Júlia Marques Carvalho da Silva",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR"
      }
    },
    "@id": "urn:uuid:f281be4f-868e-4ea9-ab93-65087eaeaffd",
    "@context": "https://oerworldmap.org/assets/json/context.json"
  },
  {
    "image": "https://apps.univesp.br/common/logo-apps-1x1.png",
    "keywords": [
      "open educational resources"
    ],
    "availableChannel": [
      {
        "serviceUrl": "http://apps.univesp.br"
      }
    ],
    "endDate": "2019-04-29",
    "@type": "Service",
    "description": [
      {
        "@value": "A Univesp disponibiliza todos os objetos de aprendizagem multimidiáticos produzidos pela universidade em seu repositório. Os materiais estão organizados em um catálogo e podem ser encontrados por tema ou curso, por exemplo.\n\nOs REAs da Univesp também possuem código aberto, disponível no GitHub da universidade.",
        "@language": "pt"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Repository",
            "@language": "pt"
          },
          {
            "@value": "Repositorium",
            "@language": "de"
          },
          {
            "@value": "Repository",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/services.json#repository"
      }
    ],
    "provider": [
      {
        "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
        "@type": "Organization",
        "name": [
          {
            "@value": "Universidade Virtual do Estado de São Paulo ",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Univesp é uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possui cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nA Univesp acredita na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
            "@language": "pt"
          }
        ],
        "location": {
          "geo": {
            "lon": -46.7326708,
            "lat": -23.5541047
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Avenida Professor Almeida Prado",
            "postalCode": "05508-090",
            "addressLocality": "São Paulo",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:456108f6-f1f1-4cab-91fb-aded0c21558e"
      }
    ],
    "member": [
      {
        "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
        "@type": "Organization",
        "name": [
          {
            "@value": "Universidade Virtual do Estado de São Paulo ",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Univesp é uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possui cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nA Univesp acredita na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
            "@language": "pt"
          }
        ],
        "location": {
          "geo": {
            "lon": -46.7326708,
            "lat": -23.5541047
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Avenida Professor Almeida Prado",
            "postalCode": "05508-090",
            "addressLocality": "São Paulo",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:456108f6-f1f1-4cab-91fb-aded0c21558e"
      }
    ],
    "name": [
      {
        "@value": "Repositório de REA - Univesp",
        "@language": "pt"
      }
    ],
    "@id": "urn:uuid:f194296d-ea98-4ea1-a768-ecba6c7a686c",
    "email": "autor@univesp.br"
  },
  {
    "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
    "keywords": [
      "creative commons",
      "e-learning",
      "university",
      "open educational resources",
      "open education",
      "oer production"
    ],
    "@type": "Organization",
    "description": [
      {
        "@value": "A Univesp é uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possui cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nA Univesp acredita na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
        "@language": "pt"
      }
    ],
    "alternateName": [
      {
        "@value": "Univesp",
        "@language": "pt"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "url": "http://univesp.br/",
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Higher education institution",
            "@language": "pt"
          },
          {
            "@value": "Hochschulbildungseinrichtung",
            "@language": "de"
          },
          {
            "@value": "Higher education institution",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/organizations.json#higherEducationInstitution"
      }
    ],
    "provides": [
      {
        "image": "https://apps.univesp.br/common/logo-apps-1x1.png",
        "@type": "Service",
        "name": [
          {
            "@value": "Repositório de REA - Univesp",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Univesp disponibiliza todos os objetos de aprendizagem multimidiáticos produzidos pela universidade em seu repositório. Os materiais estão organizados em um catálogo e podem ser encontrados por tema ou curso, por exemplo.\n\nOs REAs da Univesp também possuem código aberto, disponível no GitHub da universidade.",
            "@language": "pt"
          }
        ],
        "@id": "urn:uuid:f194296d-ea98-4ea1-a768-ecba6c7a686c"
      }
    ],
    "name": [
      {
        "@value": "Universidade Virtual do Estado de São Paulo ",
        "@language": "pt"
      }
    ],
    "location": {
      "geo": {
        "lon": -46.7326708,
        "lat": -23.5541047
      },
      "address": {
        "addressCountry": "BR",
        "streetAddress": "Avenida Professor Almeida Prado",
        "postalCode": "05508-090",
        "addressLocality": "São Paulo",
        "addressRegion": "BR.SP"
      }
    },
    "@id": "urn:uuid:456108f6-f1f1-4cab-91fb-aded0c21558e",
    "memberOf": [
      {
        "image": "https://apps.univesp.br/common/logo-apps-1x1.png",
        "@type": "Service",
        "name": [
          {
            "@value": "Repositório de REA - Univesp",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Univesp disponibiliza todos os objetos de aprendizagem multimidiáticos produzidos pela universidade em seu repositório. Os materiais estão organizados em um catálogo e podem ser encontrados por tema ou curso, por exemplo.\n\nOs REAs da Univesp também possuem código aberto, disponível no GitHub da universidade.",
            "@language": "pt"
          }
        ],
        "@id": "urn:uuid:f194296d-ea98-4ea1-a768-ecba6c7a686c"
      }
    ],
    "affiliate": [
      {
        "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
        "@type": "Person",
        "name": [
          {
            "@value": "Universidade Virtual do Estado de São Paulo - Univesp",
            "@language": "en"
          }
        ],
        "description": [
          {
            "@value": "Somos uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possuímos cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nAcreditamos na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
            "@language": "pt"
          }
        ],
        "location": {
          "geo": {
            "lon": -46.7326708,
            "lat": -23.5541047
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Avenida Professor Almeida Prado",
            "postalCode": "05508-090",
            "addressLocality": "São Paulo",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:151c950a-1996-4026-8c9f-8fb1ee614dc8"
      }
    ],
    "email": "autor@univesp.br"
  },
  {
    "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Other",
            "@language": "pt"
          },
          {
            "@value": "Sonstige",
            "@language": "de"
          },
          {
            "@value": "Other",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/persons.json#other"
      }
    ],
    "affiliation": [
      {
        "image": "https://apps.univesp.br/common/logo-univesp-1x1.png",
        "@type": "Organization",
        "name": [
          {
            "@value": "Universidade Virtual do Estado de São Paulo ",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Univesp é uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possui cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nA Univesp acredita na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
            "@language": "pt"
          }
        ],
        "location": {
          "geo": {
            "lon": -46.7326708,
            "lat": -23.5541047
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Avenida Professor Almeida Prado",
            "postalCode": "05508-090",
            "addressLocality": "São Paulo",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:456108f6-f1f1-4cab-91fb-aded0c21558e"
      }
    ],
    "@type": "Person",
    "name": [
      {
        "@value": "Universidade Virtual do Estado de São Paulo - Univesp",
        "@language": "en"
      }
    ],
    "description": [
      {
        "@value": "Somos uma universidade virtual pública e gratuita. Mantida pelo Governo do Estado de São Paulo, possuímos cursos de graduação nos quais, atualmente, estão matriculados mais de 30 mil alunos.\n\nAcreditamos na Educação aberta e de qualidade. Por isso, todas as videoaulas da instituição estão disponíveis no YouTube e todos os recursos multimidiáticos produzidos pela universidade são abertos e utilizam licença de uso permissiva.",
        "@language": "pt"
      }
    ],
    "location": {
      "geo": {
        "lon": -46.7326708,
        "lat": -23.5541047
      },
      "address": {
        "addressCountry": "BR",
        "streetAddress": "Avenida Professor Almeida Prado",
        "postalCode": "05508-090",
        "addressLocality": "São Paulo",
        "addressRegion": "BR.SP"
      }
    },
    "@id": "urn:uuid:151c950a-1996-4026-8c9f-8fb1ee614dc8",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "autor@univesp.br",
    "url": "https://apps.univesp.br",
    "sameAs": [
      "https://www.youtube.com/channel/UCBL2tfrwhEhX52Dze_aO3zA",
      "https://twitter.com/univespoficial",
      "https://pt-br.facebook.com/univespoficial/",
      "https://www.instagram.com/univespoficial/?hl=pt-br"
    ]
  },
  {
    "endDate": "2019-05-07",
    "@type": "Event",
    "organizer": [
      {
        "image": "http://wp.edu-sharing.de/jointly/wp-content/uploads/sites/14/2016/11/jointly-Logo.svg",
        "agent": [
          {
            "@id": "urn:uuid:fc4e408a-e725-4588-bbc5-0404b9ca8687"
          }
        ],
        "@type": "Action",
        "name": [
          {
            "@value": "OER_JOINTLY: Qualification and cooperative support for OER - A buffet of cooperation",
            "@language": "en"
          },
          {
            "@value": "OER_JOINTLY: Qualifizierung und kooperative Unterstützung für OER - Ein Buffet der Kooperation",
            "@language": "de"
          }
        ],
        "description": [
          {
            "@value": "JOINTLY organisiert Kooperationsaktivitäten zwischen OER-Akteuren und unterstützt OER-Multiplikatoren darin, ihre  offenen Bildungsmaterialien zu entwickeln und zu verbreiten. \r\n\r\nIm „OER-Contentbuffet“ können sie kooperieren und gemeinsam Inhalte für OER-Qualifzizerungs- und Sensibilisierungsmaßnahmen sammeln, für ihre Zielgruppen aufbereiten und die Qualität sichern. JOINTLY organisiert dafür Workshops und ExpertInnen-Unterstützung, Webinare, Lehrgänge und vieles mehr. \r\nIn Entwicklerkooperationen, deren Ergebnisse Open Source, also frei nutzbar sind, entstehen OER-förderliche Softwarelösungen. JOINTLY organisiert mehrere #Hack4OER-Hackathons, etwa zu OER-Erweiterungen für Lernplattformen, zu automatischer Metadatengenerierung sowie zu Schnittstellen zwischen OER-Portalen.\r\nJOINTLY bringt Bildungs- und IT-ExpertInnen zusammen, gemeinsam entwickeln wir Konzepte, beispielsweise für OER-förderliche Infrastrukturen. Ideen und Konzepte werden in Transferworkshops vorgestellt und in der Community diskutiert; IT-Konzepte werden zuvor in der „OER-IT-Werkstatt“ erprobt.\r\n\r\nJOINTLY 4 OER – Just JOIN!  -  http://www.jointly.info/interesse\r\n\r\nJOINTLY ist ein Verbundprojekt von iRights e.V., der Fachhochschule Lübeck, dem edu-sharing NETWORK e.V. und der Gesellschaft für die Wissenschaftliche Datenverarbeitung Göttingen.",
            "@language": "de"
          },
          {
            "@value": "JOINTLY organizes co-operation activities between OER actors and supports OER multipliers in the development and dissemination of their open educational ressources.\r\n\r\nIn the \"OER Content Buffet\" they can cooperate and collect content for OER qualification and awareness-raising activities, prepare it for their target groups and ensure quality. Therefore JOINTLY organizes workshops, support of experts, webinars, courses and much more.\r\n\r\nOER-promoting software solutions arise in developer cooperations, whose results are open source and freely usable. JOINTLY organizes several “Hack4OER” hackathons to i.e. improve learning platforms with OER extensions, automatic metadata generation and interfaces between OER portals.\r\n\r\nJOINTLY brings together educational and IT experts. Together we develop concepts, for example for OER-promoting infrastructures. Ideas and concepts are presented in transfer workshops and discussed in the community;  IT concepts are previously tested in the \"OER-IT laboratory\".\r\n\r\nJOINTLY 4 OER - Just JOIN!  - http://www.jointly.info/interesse\r\n\r\nJOINTLY is a collaborative project of iRights e.V., the University of Applied Sciences Lübeck, edu-sharing NETWORK e.V. and the GWDG.",
            "@language": "en"
          }
        ],
        "startTime": "2016-11-01",
        "@id": "urn:uuid:ffb043ce-365f-46f6-be98-79014da5e5c5"
      }
    ],
    "name": [
      {
        "@value": " OER-/IT-Frühjahrscamp 2019",
        "@language": "en"
      }
    ],
    "description": [
      {
        "@value": "Im World-Café-Format entwickeln wir eine Landkarte nötiger Services für OER-förderliche Infrastrukturen/Bildungsclouds, sammeln mögliche Entwickler:innen, Betreiber:innen, existierende Anbieter:innen und Kosten. Am 2. Tag leiten wir nötige Analysen, Planungen, Prototypen, Projekte und denkbare erste Aktivitäten ab und planen das Sommercamp und andere Kooperationen. Zwischen den Café-Sessions informieren wir uns in kurzen Lightning-Talks über eigene Stände sowie über (EU-)Projekte, die KI-basierte OER-förderliche Services entwickeln.",
        "@language": "en"
      }
    ],
    "inLanguage": [
      "de"
    ],
    "location": {
      "geo": {
        "lon": 11.3290855,
        "lat": 50.9802813
      },
      "address": {
        "addressCountry": "DE",
        "postalCode": "99423",
        "addressLocality": "Weimar",
        "addressRegion": "DE.TH"
      }
    },
    "@id": "urn:uuid:3196709f-c7c3-408d-9990-9a70bf5c547f",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "startDate": "2019-05-06",
    "url": "https://jointly.info/announcement/oer-it-fruehjahrscamp-2019-06-07-05-2019/"
  },
  {
    "endDate": "2019-05-04",
    "@type": "Event",
    "organizer": [
      {
        "image": "http://www.joeran.de/wp-content/themes/wordpress_joeran/i/logo2.gif",
        "@type": "Organization",
        "name": [
          {
            "@value": "J&K - Jöran und Konsorten (\"Jöran and Fellows\")",
            "@language": "en"
          },
          {
            "@value": "J&K - Jöran und Konsorten",
            "@language": "de"
          }
        ],
        "description": [
          {
            "@value": "The team at J&K - Jöran und Konsorten around Jöran Muuß-Merholz are connecting the educational and the digital world doing consulting, public speaking writing, editing, designing events and online projects. Since 2012 OER has been a focus of their work. They founded and operated “Transferstelle für OER“ which provided information on OER in Germany. J&K are also the founders and the organizers of the OERcamps, regular unconferences on OER, of the OER-Awards and the OER-Festival.\r\nTransferstelle OER served as a focus point to the emerging OER community in Germany, providing information on the subject. The OERcamps and OER-Festivals also helped connecting the community and widening the play field. The team at J&K is furthermore active in the production of OER in various sectors.\r\nJ&K – Jöran und Konsorten is a company with eight permanent employees and a network of freelancers. \r\nAgency founded in 2009, started working on OER in 2012, delegated the “Transferstelle” to the newly founded OERinfo in November 2016. J&K are still operating the blog of OERinfo, organizing events and providing consulting and training on OER.",
            "@language": "en"
          },
          {
            "@value": "Jöran und Konsorten bieten individuelle Projekt- und Programmentwicklungen im Bildungsbereich, Veranstaltungsorganisation und -moderation sowie redaktionelle Tätigkeiten für Online-Projekte und andere Publikationen.  Daneben produzieren J&K selbst Bildungsmedien.",
            "@language": "de"
          }
        ],
        "location": {
          "geo": {
            "lon": 9.981946,
            "lat": 53.551316
          },
          "address": {
            "addressCountry": "DE",
            "streetAddress": "Schmilinskystraße 45",
            "postalCode": "20099",
            "addressLocality": "Hamburg",
            "addressRegion": "DE.HH"
          }
        },
        "@id": "urn:uuid:8cf07e97-c7fb-4dfc-a748-3a2f99e65a0a"
      },
      {
        "@type": "Organization",
        "name": [
          {
            "@value": "Zentralstelle für Lehren und Lernen im 21. Jahrhundert - ZLL 21 e.V.",
            "@language": "en"
          }
        ],
        "location": {
          "geo": {
            "lon": 10.007046,
            "lat": 53.576158
          },
          "address": {
            "addressCountry": "DE",
            "streetAddress": "Hamburg",
            "addressLocality": "Hamburg",
            "addressRegion": "DE.HH"
          }
        },
        "@id": "urn:uuid:b8b89c85-5d56-4fca-b78f-decce9e56952"
      }
    ],
    "name": [
      {
        "@value": "edunautika",
        "@language": "en"
      }
    ],
    "description": [
      {
        "@value": "Barcamp zu zeitgemäßer Pädagogik im digitalen Wandel.",
        "@language": "en"
      }
    ],
    "inLanguage": [
      "de"
    ],
    "location": {
      "geo": {
        "lon": 9.92247543002332,
        "lat": 53.5608589
      },
      "address": {
        "addressCountry": "DE",
        "streetAddress": "Max-Bauer-Schule, Bei der Paul-Gerhardt-Kirche 1-3",
        "postalCode": "22761",
        "addressLocality": "Hamburg"
      }
    },
    "@id": "urn:uuid:43c7e011-1816-4455-b618-569076cddd03",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "kontakt@edunautika.de",
    "startDate": "2019-05-03",
    "url": "https://www.edunautika.de/"
  },
  {
    "endDate": "2019-03-22",
    "@type": "Event",
    "name": [
      {
        "@value": "Oficina de REA para técnicos do CEAD-UnB",
        "@language": "pt"
      }
    ],
    "description": [
      {
        "@value": "Oficina voltada para técnicos do Centro de Educação a Distância da UnB. Ação relacionada ao curso de formação Embaixadores REA.",
        "@language": "en"
      }
    ],
    "alternateName": [
      {
        "@value": "REA CEAD UnB",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR",
        "addressRegion": "BR.DF"
      }
    },
    "@id": "urn:uuid:805ab624-dcda-46c5-96a4-f31ec411468a",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "startDate": "2019-03-22"
  },
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Débora Furtado",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR"
      }
    },
    "@id": "urn:uuid:1f57e71a-7105-4583-a411-395be33a3fd7",
    "@context": "https://oerworldmap.org/assets/json/context.json"
  },
  {
    "availableChannel": [
      {
        "serviceUrl": "http://www.livrosabertos.sibi.usp.br/portaldelivrosUSP/index"
      }
    ],
    "provider": [
      {
        "@type": "Organization",
        "name": [
          {
            "@value": "Universidade de São Paulo",
            "@language": "pt"
          },
          {
            "@value": "University of São Paulo",
            "@language": "en"
          }
        ],
        "description": [
          {
            "@value": "USP, as the major institution of higher learning and research in Brazil, is responsible for educating a large part of Brazilian Masters and PhDs.",
            "@language": "en"
          },
          {
            "@value": "Uma das maiores instituições de ensino superior do Brasil.",
            "@language": "en"
          }
        ],
        "location": {
          "geo": {
            "lon": -47.85508,
            "lat": -21.167664
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Cidade Universitária",
            "addressLocality": "São Paulo",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:438dc34e-886a-46d5-a4ef-d5c2322b0f06"
      }
    ],
    "@type": "Service",
    "name": [
      {
        "@value": "Portal de livros abertos da USP",
        "@language": "pt"
      }
    ],
    "description": [
      {
        "@value": "O Portal de Livros Abertos da USP promove a reunião e divulgação dos livros digitais acadêmicos e científicos publicados em acesso aberto por docentes e/ou funcionários técnico-administrativos da Universidade de São Paulo. ",
        "@language": "en"
      }
    ],
    "@id": "urn:uuid:daca3638-59ae-4a6a-be23-e0ca1dc16a61",
    "@context": "https://oerworldmap.org/assets/json/context.json"
  },
  {
    "contactPoint": [
      {
        "@type": "Person",
        "name": [
          {
            "@value": "Angela Fushita",
            "@language": "en"
          }
        ],
        "location": {
          "address": {
            "addressCountry": "BR"
          }
        },
        "@id": "urn:uuid:443f8297-2794-46ca-b8ee-d619f36c875e"
      }
    ],
    "@type": "Organization",
    "displayName": [
      {
        "@value": "UFABC",
        "@language": "en"
      }
    ],
    "name": [
      {
        "@value": "Universidade Federal do ABC",
        "@language": "pt"
      }
    ],
    "description": [
      {
        "@value": "O Workshop “Estações REA” é um evento interdisciplinar, e envolveu o trabalho conjunto da docente Angela Terumi Fushita, do Núcleo de Tecnologias Educacionais (NTE) e da Pró-Reitoria de Extensão e Cultura (PROEC) da Universidade Federal do ABC (UFABC). \n\tO evento aconteceu no dia 19/02/2019 das 13:30 às 17:00 e utilizou metodologia ativa de aprendizagem em sistema de rotação de estações, abordando os cinco temas \"REA no contexto nacional e internacional\", \"Os pilares da educação aberta e competências REA\", \"Direito autorais e licenças abertas\", \"Compromisso Governo Abertos e marcos legais\", e \"Como encontrar e usar REA no contexto educacional\"; e utilizou cinco tipos distintos de material: podcast, vídeo, infográfico (linha do tempo), fotografia e texto.\n\tO relato do material audiovisual (vídeo de 18min) está depositado no EduCapes e pode ser acessado pelo link http://educapes.capes.gov.br/handle/capes/431560\n\tO material utilizado na preparação e durante o Workshop estão disponíveis em pasta compartilhada ((https://drive.google.com/open?id=1J8joUUtWVka44UfTpFBHO_xdLdI9VQLX) e alguns foram depositados no repositório Educapes. Alguns documentos disponibilizados na pasta compartilhada ficaram desconfigurados, por isso, realizou-se o upload da versão em .pdf.\n",
        "@language": "en"
      }
    ],
    "alternateName": [
      {
        "@value": "UFABC",
        "@language": "en"
      }
    ],
    "location": {
      "geo": {
        "lon": -46.5284148616007,
        "lat": -23.64465645
      },
      "address": {
        "addressCountry": "BR",
        "streetAddress": "Avenida dos Estados 5001",
        "postalCode": "09210-377",
        "addressLocality": "Santo André"
      }
    },
    "@id": "urn:uuid:cb2b6b7f-786a-46b8-aed3-e65a985e6305",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "sameAs": [
      "https://www.facebook.com/nteufabc/"
    ]
  },
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Angela Fushita",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BR"
      }
    },
    "@id": "urn:uuid:443f8297-2794-46ca-b8ee-d619f36c875e",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "angela.fushita@ufabc.edu.br"
  },
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Alice ",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "BA"
      }
    },
    "@id": "urn:uuid:3c938617-07bf-40ac-a2c2-c7345faa47a0",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "salkanovicena@gmail.com"
  },
  {
    "objectIn": [
      {
        "agent": [
          {
            "@id": "urn:uuid:0759ba7b-eaaa-4e16-bca8-49993cfe1265"
          }
        ],
        "@type": "LikeAction",
        "startTime": "2019-04-23T10:48:10.669Z",
        "@id": "urn:uuid:8e08694c-8636-4443-be6a-37c82fe544bc",
        "object": {
          "@id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd"
        }
      },
      {
        "agent": [
          {
            "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
            "@type": "Person",
            "name": [
              {
                "@value": "Jan Neumann",
                "@language": "en"
              }
            ],
            "description": [
              {
                "@value": "Jan L. Neumann is working as Head of Legal Affairs and Organization at the North Rhine-Westphalian Library Service Centre (hbz) in Cologne, Germany. He studied law, economy and systems thinking and has more than 15 years of experience within international project management for different publishing houses and libraries. He is a member of the Education Expert Committee of the German Commission for UNESCO and blogs about Open Educational Resources (OER) on OER-SYS.org. Since 2013 he manages the OER World Map project, which is funded by the William and Flora Hewlett Foundation and aims at providing the most complete and comprehensible picture of the global Open Educational Resources (OER) movement so far. Jan is a frequent speaker at OER conferences and participated in the organization of OERde 14, OERde 15 and OERde 16 Festival. Nevertheless he considers himself a non-expert in OER to stress that having the courage to think by yourself is one important aspect of the empowerment which comes along with open education.",
                "@language": "en"
              }
            ],
            "location": {
              "geo": {
                "lon": 6.935572,
                "lat": 50.934119
              },
              "address": {
                "addressCountry": "DE",
                "streetAddress": "Jülicher Straße 6",
                "postalCode": "50674",
                "addressLocality": "Köln",
                "addressRegion": "DE.NW"
              }
            },
            "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
          }
        ],
        "@type": "LikeAction",
        "startTime": "2019-04-18T14:12:36.978Z",
        "@id": "urn:uuid:1f4edf45-ac11-41e5-845f-ac853c3de183",
        "object": {
          "@id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd"
        }
      }
    ],
    "attendee": [
      {
        "image": "http://open-educational-resources.de/wp-content/uploads/Jan-Neumann-Foto-unter-CC-BY-4.0.jpg",
        "@type": "Person",
        "name": [
          {
            "@value": "Jan Neumann",
            "@language": "en"
          }
        ],
        "description": [
          {
            "@value": "Jan L. Neumann is working as Head of Legal Affairs and Organization at the North Rhine-Westphalian Library Service Centre (hbz) in Cologne, Germany. He studied law, economy and systems thinking and has more than 15 years of experience within international project management for different publishing houses and libraries. He is a member of the Education Expert Committee of the German Commission for UNESCO and blogs about Open Educational Resources (OER) on OER-SYS.org. Since 2013 he manages the OER World Map project, which is funded by the William and Flora Hewlett Foundation and aims at providing the most complete and comprehensible picture of the global Open Educational Resources (OER) movement so far. Jan is a frequent speaker at OER conferences and participated in the organization of OERde 14, OERde 15 and OERde 16 Festival. Nevertheless he considers himself a non-expert in OER to stress that having the courage to think by yourself is one important aspect of the empowerment which comes along with open education.",
            "@language": "en"
          }
        ],
        "location": {
          "geo": {
            "lon": 6.935572,
            "lat": 50.934119
          },
          "address": {
            "addressCountry": "DE",
            "streetAddress": "Jülicher Straße 6",
            "postalCode": "50674",
            "addressLocality": "Köln",
            "addressRegion": "DE.NW"
          }
        },
        "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
      }
    ],
    "endDate": "2019-06-14",
    "@type": "Event",
    "description": [
      {
        "@value": "Nach einem Jahr Pause kommt das nächste OERcamp. Es wird am 13. und 14. Juni 2019 auf dem Campus der TH Lübeck stattfinden. Es wird viele Workshops, gerade auch für OER-Newbies geben. Und natürlich ist auch ein Barcamp-Teil geplant, zu dem jeder Mann und jede Frau vor Ort eigene Sessions vorschlagen kann. Das OERcamp ist wieder für Menschen aus allen Bildungsbereichen offen, und die Teilnahme ist kostenfrei.\nZeit und Ort\n\n#OERcamp Lübeck\n\nDonnerstag, 13. Juni 2019 von 09:00-18:00 Uhr\nFreitag, 14. Juni 2019 von 09:00-15:15 Uhr\n\nTH Lübeck – Gebäude 1, Mönkhofer Weg 239, 23562 Lübeck",
        "@language": "en"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "url": "https://www.oercamp.de/19/lubeck/einladung/",
    "organizer": [
      {
        "image": "http://www.joeran.de/wp-content/themes/wordpress_joeran/i/logo2.gif",
        "@type": "Organization",
        "name": [
          {
            "@value": "J&K - Jöran und Konsorten (\"Jöran and Fellows\")",
            "@language": "en"
          },
          {
            "@value": "J&K - Jöran und Konsorten",
            "@language": "de"
          }
        ],
        "description": [
          {
            "@value": "The team at J&K - Jöran und Konsorten around Jöran Muuß-Merholz are connecting the educational and the digital world doing consulting, public speaking writing, editing, designing events and online projects. Since 2012 OER has been a focus of their work. They founded and operated “Transferstelle für OER“ which provided information on OER in Germany. J&K are also the founders and the organizers of the OERcamps, regular unconferences on OER, of the OER-Awards and the OER-Festival.\r\nTransferstelle OER served as a focus point to the emerging OER community in Germany, providing information on the subject. The OERcamps and OER-Festivals also helped connecting the community and widening the play field. The team at J&K is furthermore active in the production of OER in various sectors.\r\nJ&K – Jöran und Konsorten is a company with eight permanent employees and a network of freelancers. \r\nAgency founded in 2009, started working on OER in 2012, delegated the “Transferstelle” to the newly founded OERinfo in November 2016. J&K are still operating the blog of OERinfo, organizing events and providing consulting and training on OER.",
            "@language": "en"
          },
          {
            "@value": "Jöran und Konsorten bieten individuelle Projekt- und Programmentwicklungen im Bildungsbereich, Veranstaltungsorganisation und -moderation sowie redaktionelle Tätigkeiten für Online-Projekte und andere Publikationen.  Daneben produzieren J&K selbst Bildungsmedien.",
            "@language": "de"
          }
        ],
        "location": {
          "geo": {
            "lon": 9.981946,
            "lat": 53.551316
          },
          "address": {
            "addressCountry": "DE",
            "streetAddress": "Schmilinskystraße 45",
            "postalCode": "20099",
            "addressLocality": "Hamburg",
            "addressRegion": "DE.HH"
          }
        },
        "@id": "urn:uuid:8cf07e97-c7fb-4dfc-a748-3a2f99e65a0a"
      }
    ],
    "name": [
      {
        "@value": "OERcamp Lübeck",
        "@language": "de"
      }
    ],
    "location": {
      "geo": {
        "lon": 10.7002646,
        "lat": 53.837048
      },
      "address": {
        "addressCountry": "DE",
        "streetAddress": "Mönkhofer Weg 239",
        "postalCode": "23562",
        "addressLocality": "Lübeck",
        "addressRegion": "DE.SH"
      }
    },
    "@id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd",
    "email": "kontakt@oercamp.de",
    "startDate": "2019-06-13",
    "hashtag": "#oercamp"
  },
  {
    "objectIn": [
      {
        "agent": [
          {
            "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
          }
        ],
        "@type": "LikeAction",
        "startTime": "2019-04-18T09:40:22.705Z",
        "@id": "urn:uuid:b6e53ccf-dc41-4709-bdc5-3200ae2f6a13",
        "object": {
          "@id": "urn:uuid:983af0ad-7649-47a7-87a2-7e75921f3be4"
        }
      }
    ],
    "image": "http://poca.ufscar.br/wp-content/uploads/2018/06/cropped-poca2.png",
    "availableChannel": [
      {
        "serviceUrl": "http://poca.ufscar.br/",
        "availableLanguage": [
          "en",
          "es"
        ]
      }
    ],
    "@type": "Service",
    "about": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Allgemeine Programme und Qualifikationen",
            "@language": "de"
          },
          {
            "@value": "Generic programmes and qualifications",
            "@language": "en"
          }
        ],
        "@id": "https://w3id.org/class/esc/n00"
      },
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Bildung",
            "@language": "de"
          },
          {
            "@value": "Education",
            "@language": "en"
          }
        ],
        "@id": "https://w3id.org/class/esc/n01"
      }
    ],
    "description": [
      {
        "@value": "The Portal of Open Courses - PoCA is a platform of distance learning courses, open and free of charge, available in the Moodle Virtual Learning Environment, whose activities are part of the extension program of the same name, of the General Secretariat of Distance Education of the Federal University of São Carlos (SEaD-UFSCar), registered in the Pro-Reitoria de Extensão of UFSCar.\n\nThe courses available at PoCA offer an opportunity for training and updating in different areas of knowledge, in addition to those focused primarily on the promotion of innovations in teaching and learning processes. The courses are: massive, because they can be taken by a very large number of people; free, because it is not necessary to pay to take them; online, because it is necessary to be connected to the Internet; distance, since there is no provision for face-to-face classes; open, because anyone, in Brazil or the world, can take them.\n\nTranslated with www.DeepL.com/Translator",
        "@language": "en"
      },
      {
        "@value": "O Portal de Cursos Abertos - PoCA é uma plataforma de cursos a distância, abertos e gratuitos, disponibilizados no Ambiente Virtual de Aprendizagem Moodle, cujas atividades fazem parte do programa de extensão do mesmo nome, da Secretaria Geral de Educação a Distância da Universidade Federal de São Carlos (SEaD-UFSCar), registrado na Pró-Reitoria de Extensão da UFSCar.\n\nOs cursos disponibilizados no PoCA oferecem uma oportunidade de formação e atualização em diferentes áreas do conhecimento, além daquelas voltadas precipuamente para a promoção de inovações nos processos de ensino e aprendizagem. Os cursos são: massivos, pois podem ser cursados por um número muito grande de pessoas; gratuitos, pois não é preciso pagar para cursá-los; online, pois é preciso estar conectado com a Internet; a distância, já que não há previsão de aulas presenciais; abertos, pois qualquer pessoa, no Brasil ou no mundo, pode cursá-los.",
        "@language": "pt"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "primarySector": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Higher Education",
            "@language": "en"
          },
          {
            "@value": "Hochschule",
            "@language": "de"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/sectors.json#higherEd"
      }
    ],
    "license": [
      {
        "image": "http://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png",
        "@type": "Concept",
        "name": [
          {
            "@value": "Creative Commons Namensnennung, Weitergabe unter gleichen Bedingungen",
            "@language": "de"
          },
          {
            "@value": "Creative Commons Attribution Share-Alike",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/licenses.json#cc-by-sa"
      },
      {
        "image": "http://mirrors.creativecommons.org/presskit/buttons/88x31/png/by.png",
        "@type": "Concept",
        "name": [
          {
            "@value": "Creative Commons Namensnennung",
            "@language": "de"
          },
          {
            "@value": "Creative Commons Attribution",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/licenses.json#cc-by"
      }
    ],
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Learning platform",
            "@language": "pt"
          },
          {
            "@value": "Lernplattform",
            "@language": "de"
          },
          {
            "@value": "Learning platform",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/services.json#learningPlatform"
      }
    ],
    "provider": [
      {
        "image": "http://i2.wp.com/www.sead.ufscar.br/wp-content/uploads/2015/06/logo_banner-02-02.jpg?fit=1024%2C256",
        "@type": "Organization",
        "name": [
          {
            "@value": "Secretaria Geral de Educação a Distância",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "A Secretaria Geral de Educação a Distância é responsável pela política de EaD da instituição e organiza ações institucionais para a divulgação de Educação Aberta e REA.",
            "@language": "en"
          }
        ],
        "location": {
          "geo": {
            "lon": -47.882640447437666,
            "lat": -21.983945350430872
          },
          "address": {
            "addressCountry": "BR",
            "streetAddress": "Rodovia Washington Luís, km 235 - SP-310 São Carlos - São Paulo - Brasil ",
            "addressRegion": "BR.SP"
          }
        },
        "@id": "urn:uuid:a401aa49-b893-4574-a91d-b2fa96e1a3de"
      }
    ],
    "name": [
      {
        "@value": "PoCA - Portal de Cursos Abertos da UFSCar",
        "@language": "pt"
      }
    ],
    "isRelatedTo": [
      {
        "image": "https://docs.moodle.org/dev/skins/moodledocs/sitebar/pix/logo.png",
        "@type": "Product",
        "name": [
          {
            "@value": "Moodle",
            "@language": "en"
          }
        ],
        "description": [
          {
            "@value": "Moodle is a learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments. You can download the software onto your own web server or ask one of our knowledgeable Moodle Partners to assist you.\r\n\r\nMoodle is built by the Moodle project which is led and coordinated by Moodle HQ, which is financially supported by a network of over 80 Moodle Partner service companies worldwide.",
            "@language": "en"
          }
        ],
        "@id": "urn:uuid:5847aaf4-05af-4d2f-b51b-d91dd0696836"
      }
    ],
    "@id": "urn:uuid:983af0ad-7649-47a7-87a2-7e75921f3be4",
    "email": "contato@poca.ufscar.br",
    "startDate": "2018-07-14"
  },
  {
    "image": "http://i2.wp.com/www.sead.ufscar.br/wp-content/uploads/2015/06/logo_banner-02-02.jpg?fit=1024%2C256",
    "contactPoint": [
      {
        "@type": "Person",
        "name": [
          {
            "@value": "Maria Angélica do Carmo Zanotto",
            "@language": "en"
          }
        ],
        "location": {
          "address": {
            "addressCountry": "BR"
          }
        },
        "@id": "urn:uuid:0ecd3940-7653-458d-a5bf-bdbabc139858"
      }
    ],
    "@type": "Organization",
    "displayName": [
      {
        "@value": "SEaD",
        "@language": "en"
      }
    ],
    "description": [
      {
        "@value": "A Secretaria Geral de Educação a Distância é responsável pela política de EaD da instituição e organiza ações institucionais para a divulgação de Educação Aberta e REA.",
        "@language": "en"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "url": "http://www.sead.ufscar.br/",
    "primarySector": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Higher Education",
            "@language": "en"
          },
          {
            "@value": "Hochschule",
            "@language": "de"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/sectors.json#higherEd"
      }
    ],
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Higher education institution",
            "@language": "pt"
          },
          {
            "@value": "Hochschulbildungseinrichtung",
            "@language": "de"
          },
          {
            "@value": "Higher education institution",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/organizations.json#higherEducationInstitution"
      }
    ],
    "provides": [
      {
        "image": "http://poca.ufscar.br/wp-content/uploads/2018/06/cropped-poca2.png",
        "@type": "Service",
        "name": [
          {
            "@value": "PoCA - Portal de Cursos Abertos da UFSCar",
            "@language": "pt"
          }
        ],
        "description": [
          {
            "@value": "The Portal of Open Courses - PoCA is a platform of distance learning courses, open and free of charge, available in the Moodle Virtual Learning Environment, whose activities are part of the extension program of the same name, of the General Secretariat of Distance Education of the Federal University of São Carlos (SEaD-UFSCar), registered in the Pro-Reitoria de Extensão of UFSCar.\n\nThe courses available at PoCA offer an opportunity for training and updating in different areas of knowledge, in addition to those focused primarily on the promotion of innovations in teaching and learning processes. The courses are: massive, because they can be taken by a very large number of people; free, because it is not necessary to pay to take them; online, because it is necessary to be connected to the Internet; distance, since there is no provision for face-to-face classes; open, because anyone, in Brazil or the world, can take them.\n\nTranslated with www.DeepL.com/Translator",
            "@language": "en"
          },
          {
            "@value": "O Portal de Cursos Abertos - PoCA é uma plataforma de cursos a distância, abertos e gratuitos, disponibilizados no Ambiente Virtual de Aprendizagem Moodle, cujas atividades fazem parte do programa de extensão do mesmo nome, da Secretaria Geral de Educação a Distância da Universidade Federal de São Carlos (SEaD-UFSCar), registrado na Pró-Reitoria de Extensão da UFSCar.\n\nOs cursos disponibilizados no PoCA oferecem uma oportunidade de formação e atualização em diferentes áreas do conhecimento, além daquelas voltadas precipuamente para a promoção de inovações nos processos de ensino e aprendizagem. Os cursos são: massivos, pois podem ser cursados por um número muito grande de pessoas; gratuitos, pois não é preciso pagar para cursá-los; online, pois é preciso estar conectado com a Internet; a distância, já que não há previsão de aulas presenciais; abertos, pois qualquer pessoa, no Brasil ou no mundo, pode cursá-los.",
            "@language": "pt"
          }
        ],
        "@id": "urn:uuid:983af0ad-7649-47a7-87a2-7e75921f3be4"
      }
    ],
    "name": [
      {
        "@value": "Secretaria Geral de Educação a Distância",
        "@language": "pt"
      }
    ],
    "location": {
      "geo": {
        "lon": -47.882640447437666,
        "lat": -21.983945350430872
      },
      "address": {
        "addressCountry": "BR",
        "streetAddress": "Rodovia Washington Luís, km 235 - SP-310 São Carlos - São Paulo - Brasil ",
        "addressRegion": "BR.SP"
      }
    },
    "@id": "urn:uuid:a401aa49-b893-4574-a91d-b2fa96e1a3de",
    "affiliate": [
      {
        "@type": "Person",
        "name": [
          {
            "@value": "Priscila Cristina Fiocco Bianchi",
            "@language": "en"
          }
        ],
        "location": {
          "address": {
            "addressCountry": "BR"
          }
        },
        "@id": "urn:uuid:d19fa8dd-6eb4-4488-94e2-b34ca3795506"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/seadufscar/"
    ]
  },
  {
    "@type": "Person",
    "name": [
      {
        "@value": "Atei Zuali",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "IN"
      }
    },
    "@id": "urn:uuid:46ff4d5c-0e6e-4c75-92d8-cdf92f712207",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "atei.zuali@gmail.com"
  },
  {
    "objectIn": [
      {
        "agent": [
          {
            "@id": "urn:uuid:839897e6-178f-11e5-871b-3c970e4a9cbf"
          }
        ],
        "@type": "LikeAction",
        "startTime": "2019-04-16T17:28:24.790Z",
        "@id": "urn:uuid:053f92d8-8045-4dd4-941c-8c8d84427e43",
        "object": {
          "@id": "urn:uuid:7308d4fc-e6bf-43a9-bd3b-136255757fc6"
        }
      }
    ],
    "keywords": [
      "policy making",
      "open access",
      "openness",
      "open policy",
      "oer policy",
      "policy",
      "open education",
      "open science",
      "oerinfo"
    ],
    "contactPoint": [
      {
        "@type": "Person",
        "name": [
          {
            "@value": "Ilmari Jauhiainen",
            "@language": "en"
          }
        ],
        "location": {
          "address": {
            "addressCountry": "FI"
          }
        },
        "@id": "urn:uuid:ca7e19af-867b-4079-b13a-c30fa727c310"
      }
    ],
    "@type": "Organization",
    "description": [
      {
        "@value": "National Expert Group for Open Education is one of the four Expert Groups in Finnish National Open Science and Scholarship Coordination.\n\nThe aim of the Expert Group is to support the use and development of open educational resources and practices in Finland by 1) developing national open education policies, 2) developing and spreading word about good open education practices, 3) helping to develop the necessary infrastructure for open educational resources, and 4) communicating about the latest trends of open education to Finnish open education practitioners.\n\nExpert Group is open for all Finnish open education practitioners, enthusiasts and support personnel. The secretary of Expert Group is provided by Federation of Finnish Learned Societies",
        "@language": "en"
      }
    ],
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "url": "https://avointiede.fi/fi/oppiminen",
    "primarySector": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Higher Education",
            "@language": "en"
          },
          {
            "@value": "Hochschule",
            "@language": "de"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/sectors.json#higherEd"
      }
    ],
    "additionalType": [
      {
        "@type": "Concept",
        "name": [
          {
            "@value": "Community of practice",
            "@language": "pt"
          },
          {
            "@value": "Community of Practice",
            "@language": "de"
          },
          {
            "@value": "Community of practice",
            "@language": "en"
          }
        ],
        "@id": "https://oerworldmap.org/assets/json/organizations.json#communityOfPractice"
      }
    ],
    "name": [
      {
        "@value": "National Expert Group for Open Education",
        "@language": "en"
      }
    ],
    "location": {
      "geo": {
        "lon": 24.9425683,
        "lat": 60.1674086
      },
      "address": {
        "addressCountry": "FI",
        "addressLocality": "Helsinki"
      }
    },
    "@id": "urn:uuid:7308d4fc-e6bf-43a9-bd3b-136255757fc6",
    "affiliate": [
      {
        "@type": "Person",
        "name": [
          {
            "@value": "Ilmari Jauhiainen",
            "@language": "en"
          }
        ],
        "location": {
          "address": {
            "addressCountry": "FI"
          }
        },
        "@id": "urn:uuid:ca7e19af-867b-4079-b13a-c30fa727c310"
      }
    ],
    "email": "avointiede@tsv.fi"
  },
  {
    "affiliation": [
      {
        "@type": "Organization",
        "name": [
          {
            "@value": "National Expert Group for Open Education",
            "@language": "en"
          }
        ],
        "description": [
          {
            "@value": "National Expert Group for Open Education is one of the four Expert Groups in Finnish National Open Science and Scholarship Coordination.\n\nThe aim of the Expert Group is to support the use and development of open educational resources and practices in Finland by 1) developing national open education policies, 2) developing and spreading word about good open education practices, 3) helping to develop the necessary infrastructure for open educational resources, and 4) communicating about the latest trends of open education to Finnish open education practitioners.\n\nExpert Group is open for all Finnish open education practitioners, enthusiasts and support personnel. The secretary of Expert Group is provided by Federation of Finnish Learned Societies",
            "@language": "en"
          }
        ],
        "location": {
          "geo": {
            "lon": 24.9425683,
            "lat": 60.1674086
          },
          "address": {
            "addressCountry": "FI",
            "addressLocality": "Helsinki"
          }
        },
        "@id": "urn:uuid:7308d4fc-e6bf-43a9-bd3b-136255757fc6"
      }
    ],
    "@type": "Person",
    "name": [
      {
        "@value": "Ilmari Jauhiainen",
        "@language": "en"
      }
    ],
    "location": {
      "address": {
        "addressCountry": "FI"
      }
    },
    "@id": "urn:uuid:ca7e19af-867b-4079-b13a-c30fa727c310",
    "@context": "https://oerworldmap.org/assets/json/context.json",
    "email": "ilmari.jauhiainen@tsv.fi"
  }
]

storiesOf('ResultList', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <EmittProvider emitter={mock.emitter}>
        <ResultList listItems={listItems} />
      </EmittProvider>
    </WithStrings>
  ))