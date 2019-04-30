import React from 'react'
import { storiesOf } from '@storybook/react'

import Calendar from '../src/components/Calendar'
import WithStrings from './WithStrings'

const entries = [
  {
    "key_as_string": "2007-04-01T00:00:00.000Z",
    "key": 1175385600000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2aafbeba-e669-47ed-9ce7-3a921b567a7c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2007-04-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "3. EduMedia Conference 2007 ",
                    "@language": "de"
                  },
                  {
                    "@value": "3. EduMedia Conference 2007 ",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "AT",
                    "addressLocality": "Salzburg",
                    "addressRegion": "AT.SZ"
                  }
                },
                "@id": "urn:uuid:2aafbeba-e669-47ed-9ce7-3a921b567a7c",
                "startDate": "2007-04-16"
              }
            },
            "sort": [
              1176681600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2007-09-01T00:00:00.000Z",
    "key": 1188604800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:855ef399-8a66-4085-97c7-7f003fc96304.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2007-09-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Cape Town Meeting",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "ZA",
                    "addressLocality": "Cape Town"
                  }
                },
                "@id": "urn:uuid:855ef399-8a66-4085-97c7-7f003fc96304",
                "startDate": "2007-09-14"
              }
            },
            "sort": [
              1189728000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2010-01-01T00:00:00.000Z",
    "key": 1262304000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:96221af6-eb14-4508-84d6-448db11d5603.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2010",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OPAL Initiative Research Workshop in Paris (Expert-Meeting)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 2.34864,
                    "lat": 48.85339
                  },
                  "address": {
                    "addressCountry": "FR",
                    "streetAddress": "Paris",
                    "addressLocality": "Paris",
                    "addressRegion": "FR.VP"
                  }
                },
                "@id": "urn:uuid:96221af6-eb14-4508-84d6-448db11d5603",
                "startDate": "2010"
              }
            },
            "sort": [
              1262304000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2011-05-01T00:00:00.000Z",
    "key": 1304208000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5ceedadb-2c96-41e5-ba98-dce901c6c3be.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2011-05-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Österreichische Fachtagung zu Open Educational Resources – OER",
                    "@language": "de"
                  },
                  {
                    "@value": "Österreichische Fachtagung zu Open Educational Resources – OER",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 15.449612,
                    "lat": 47.078776
                  },
                  "address": {
                    "addressCountry": "AT",
                    "streetAddress": "Universitätsplatz 3",
                    "postalCode": "8010",
                    "addressLocality": "Graz",
                    "addressRegion": "AT.ST"
                  }
                },
                "@id": "urn:uuid:5ceedadb-2c96-41e5-ba98-dce901c6c3be",
                "startDate": "2011-05-26"
              }
            },
            "sort": [
              1306368000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2012-01-01T00:00:00.000Z",
    "key": 1325376000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0caa4e84-b112-49a7-8e11-21b492c7a335.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2012",
                "@type": "Event",
                "name": [
                  {
                    "@value": "An American Constitutional History Course for Non American Students, 2012",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "ES"
                  }
                },
                "@id": "urn:uuid:0caa4e84-b112-49a7-8e11-21b492c7a335",
                "startDate": "2012"
              }
            },
            "sort": [
              1325376000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2012-03-01T00:00:00.000Z",
    "key": 1330560000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:58824185-f22d-4ef8-aa27-ed21015674cb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2012-03-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "DigiLern 2012",
                    "@language": "en"
                  },
                  {
                    "@value": "DigiLern 2012",
                    "@language": "de"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:58824185-f22d-4ef8-aa27-ed21015674cb",
                "startDate": "2012-03-08"
              }
            },
            "sort": [
              1331164800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2012-06-01T00:00:00.000Z",
    "key": 1338508800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c27c383c-ecab-44e7-be67-24a741586afe.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2012-06-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "World Open Educational Resources Congress",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 2.306503,
                    "lat": 48.849888
                  },
                  "address": {
                    "addressCountry": "FR",
                    "streetAddress": "7 Place de Fontenoy",
                    "postalCode": "75007",
                    "addressLocality": "Paris",
                    "addressRegion": "FR.VP"
                  }
                },
                "@id": "urn:uuid:c27c383c-ecab-44e7-be67-24a741586afe",
                "startDate": "2012-06-20"
              }
            },
            "sort": [
              1340150400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2012-09-01T00:00:00.000Z",
    "key": 1346457600000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7a66bc66-07f7-4f4d-9451-cc3edd379a4a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2012-09-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERCamp 2012",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.85566459282837,
                    "lat": 53.10796455
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bibliothekstraße 1",
                    "postalCode": "28359",
                    "addressLocality": "Bremen",
                    "addressRegion": "DE.HB"
                  }
                },
                "@id": "urn:uuid:7a66bc66-07f7-4f4d-9451-cc3edd379a4a",
                "startDate": "2012-09-14"
              }
            },
            "sort": [
              1347580800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-01-01T00:00:00.000Z",
    "key": 1356998400000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4de9d5c0-91bc-46b1-9cb4-1f909b0e2d33.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Solar Energy",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "NL"
                  }
                },
                "@id": "urn:uuid:4de9d5c0-91bc-46b1-9cb4-1f909b0e2d33",
                "startDate": "2013"
              }
            },
            "sort": [
              1356998400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:cb0e9fff-4e16-4b79-8fd8-25676033ad15.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Pre-Algebra CCC 2013",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US"
                  }
                },
                "@id": "urn:uuid:cb0e9fff-4e16-4b79-8fd8-25676033ad15",
                "startDate": "2013"
              }
            },
            "sort": [
              1356998400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d92af3d9-0659-4b52-9da7-cf1a93106cfd.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Introduction to Water Treatment",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "NL"
                  }
                },
                "@id": "urn:uuid:d92af3d9-0659-4b52-9da7-cf1a93106cfd",
                "startDate": "2013"
              }
            },
            "sort": [
              1356998400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-02-01T00:00:00.000Z",
    "key": 1359676800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f7c587c6-1b2f-408a-b0b3-8685f4fdb68b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013-05-03",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Basic Arithmetic",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US"
                  }
                },
                "@id": "urn:uuid:f7c587c6-1b2f-408a-b0b3-8685f4fdb68b",
                "startDate": "2013-02-03"
              }
            },
            "sort": [
              1359849600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-04-01T00:00:00.000Z",
    "key": 1364774400000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8fdbbc94-0ddf-4834-bef3-bb29f091d733.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013-06-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online Course zu OER 13",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:8fdbbc94-0ddf-4834-bef3-bb29f091d733",
                "startDate": "2013-04-08"
              }
            },
            "sort": [
              1365379200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-05-01T00:00:00.000Z",
    "key": 1367366400000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f7b66e60-9aba-486c-8727-8bebd554dc4d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013-07-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Saxon Open Online Course 2013: Lernen 2.0 – Persönliches Lern- und Wissensmanagement mit Social Media",
                    "@language": "de"
                  },
                  {
                    "@value": "Saxon Open Online Course 2013: Learning 2.0 - personal learning and knowledge management with social media",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:f7b66e60-9aba-486c-8727-8bebd554dc4d",
                "startDate": "2013-05-13"
              }
            },
            "sort": [
              1368403200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-09-01T00:00:00.000Z",
    "key": 1377993600000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:05b52d6b-b812-4819-a989-f1400c952099.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013-09-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERde 2013",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.3897983840914,
                    "lat": 52.52415565
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Johannisstraße 2",
                    "postalCode": "10117",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:05b52d6b-b812-4819-a989-f1400c952099",
                "startDate": "2013-09-14"
              }
            },
            "sort": [
              1379116800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-10-01T00:00:00.000Z",
    "key": 1380585600000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8ecbfe66-6696-4943-a26e-9a795f42e0b1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2013-11-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Mobiles for Development",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "CA"
                  }
                },
                "@id": "urn:uuid:8ecbfe66-6696-4943-a26e-9a795f42e0b1",
                "startDate": "2013-10-02"
              }
            },
            "sort": [
              1380672000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2013-11-01T00:00:00.000Z",
    "key": 1383264000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1b1f22fd-f592-4662-ad46-28051d74e7e9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2014-01-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Saxon Open Online Course 2013/14: teaching and learning with social media",
                    "@language": "en"
                  },
                  {
                    "@value": "Saxon Open Online Course 2013/14: Lehren und Lernen mit Social Media",
                    "@language": "de"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:1b1f22fd-f592-4662-ad46-28051d74e7e9",
                "startDate": "2013-11-11"
              }
            },
            "sort": [
              1384128000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2014-07-01T00:00:00.000Z",
    "key": 1404172800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4ec24594-b5ef-4a4c-854f-e290aead372a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2014-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Glasgow Caledonian University's \"Games On\"",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -4.253957,
                    "lat": 55.866384
                  },
                  "address": {
                    "addressCountry": "GB"
                  }
                },
                "@id": "urn:uuid:4ec24594-b5ef-4a4c-854f-e290aead372a",
                "startDate": "2014-07"
              }
            },
            "sort": [
              1404172800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2014-09-01T00:00:00.000Z",
    "key": 1409529600000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:990e2d42-f96d-47d5-b88f-befe6a64193b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2014-09-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Die Zukunft freier Bildungsmaterialien - OER-Konferenz 2014",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.347944,
                    "lat": 52.501267
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "An Der Urania 17",
                    "postalCode": "10787",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:990e2d42-f96d-47d5-b88f-befe6a64193b",
                "startDate": "2014-09-12"
              }
            },
            "sort": [
              1410480000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5b24b552-6d8a-40ee-b61a-fc44afe9ffe2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2014-09-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Media Literacy Lab",
                    "@language": "en"
                  },
                  {
                    "@value": "Media Literacy Lab",
                    "@language": "de"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:5b24b552-6d8a-40ee-b61a-fc44afe9ffe2",
                "startDate": "2014-09-28"
              }
            },
            "sort": [
              1411862400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-01-01T00:00:00.000Z",
    "key": 1420070400000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c1b3d0b3-5409-4d73-9b66-7557f7d46124.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Rethinking Teaching; Redesigning Learning",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "MY"
                  }
                },
                "@id": "urn:uuid:c1b3d0b3-5409-4d73-9b66-7557f7d46124",
                "startDate": "2015"
              }
            },
            "sort": [
              1420070400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-03-01T00:00:00.000Z",
    "key": 1425168000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c2147e57-a796-4670-b209-5df3d880a2df.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-03-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "DigiLern",
                    "@language": "en"
                  },
                  {
                    "@value": "DigiLern",
                    "@language": "de"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:c2147e57-a796-4670-b209-5df3d880a2df",
                "startDate": "2015-03-14"
              }
            },
            "sort": [
              1426291200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-04-01T00:00:00.000Z",
    "key": 1427846400000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e2334834-398a-4616-a1d7-8b6d53e9fc50.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-06-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "MOOC Grundlagen des Projektmanagements",
                    "@language": "de"
                  },
                  {
                    "@value": "MOOC Grundlagen des Projektmanagements",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:e2334834-398a-4616-a1d7-8b6d53e9fc50",
                "startDate": "2015-04-27"
              }
            },
            "sort": [
              1430092800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-05-01T00:00:00.000Z",
    "key": 1430438400000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b7d493e4-33f1-4b0e-8306-2d60986ac4b0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-06-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online Course Open Educational Resources 15",
                    "@language": "en"
                  },
                  {
                    "@value": "Online-Kurs zu Open Educational Resources 15",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.54806,
                    "lat": 48.15389
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Kreisfreie Stadt München",
                    "addressLocality": "Kreisfreie Stadt München",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:b7d493e4-33f1-4b0e-8306-2d60986ac4b0",
                "startDate": "2015-05-11"
              }
            },
            "sort": [
              1431302400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a526fdb4-d0e6-47d2-bf58-746c5891a97b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-06-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "My digital self - iMOOC",
                    "@language": "en"
                  },
                  {
                    "@value": "Mein digitales ich – ichMOOC",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:a526fdb4-d0e6-47d2-bf58-746c5891a97b",
                "startDate": "2015-05-28"
              }
            },
            "sort": [
              1432771200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-06-01T00:00:00.000Z",
    "key": 1433116800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b7fd9768-6c29-4b64-8607-42b248f82e2a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-06-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Developing Open Educational Resources in Uzbekistan",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 69.246988,
                    "lat": 41.31952
                  },
                  "address": {
                    "addressCountry": "UZ",
                    "streetAddress": "Tashkent",
                    "addressRegion": "UZ.TK"
                  }
                },
                "@id": "urn:uuid:b7fd9768-6c29-4b64-8607-42b248f82e2a",
                "startDate": "2015-06-22"
              }
            },
            "sort": [
              1434931200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-10-01T00:00:00.000Z",
    "key": 1443657600000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6291340b-766a-4f39-a264-1b3ee65e5775.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-12-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "MOOC 25 Jahre Deutsche Einheit",
                    "@language": "de"
                  },
                  {
                    "@value": "MOOC 25 years of German Unity",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:6291340b-766a-4f39-a264-1b3ee65e5775",
                "startDate": "2015-10-03"
              }
            },
            "sort": [
              1443830400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a70e90a3-1032-4e89-98f3-1a00ee4b67a6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-12-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Making - Kreatives digitales Gestalten mit Kindern",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:a70e90a3-1032-4e89-98f3-1a00ee4b67a6",
                "startDate": "2015-10-19"
              }
            },
            "sort": [
              1445212800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2015-11-01T00:00:00.000Z",
    "key": 1446336000000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e8eec470-e754-48af-adee-b78459badc3b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-11-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "edu-sharing workshop",
                    "@language": "en"
                  },
                  {
                    "@value": "edu-sharing Workshop",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.329643,
                    "lat": 50.973463
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bauhausstraße 7c",
                    "postalCode": "99423",
                    "addressLocality": "Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:e8eec470-e754-48af-adee-b78459badc3b",
                "startDate": "2015-11-09"
              }
            },
            "sort": [
              1447027200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:521042c0-589e-4c15-814b-ba4256966162.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2015-11-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "The 12th Annual Open Education Conference: The Impact of Open",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -123.121161,
                    "lat": 49.28376
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "Fairmont Hotel Vancouver",
                    "addressLocality": "Vancouver",
                    "addressRegion": "CA.BC"
                  }
                },
                "@id": "urn:uuid:521042c0-589e-4c15-814b-ba4256966162",
                "startDate": "2015-11-18"
              }
            },
            "sort": [
              1447804800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-02-01T00:00:00.000Z",
    "key": 1454284800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-03-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Festival 2016",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.37828,
                    "lat": 52.5125
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "In den Ministergärten 8",
                    "postalCode": "10117",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:abc8c7e9-4738-433c-8550-7af52996085e",
                "startDate": "2016-02-28"
              }
            },
            "sort": [
              1456617600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-03-01T00:00:00.000Z",
    "key": 1456790400000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4772a754-07be-4e26-89d2-a6407a1c9a77.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-03-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Week 2016",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:4772a754-07be-4e26-89d2-a6407a1c9a77",
                "startDate": "2016-03-07"
              }
            },
            "sort": [
              1457308800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e57c0bbd-304f-4f59-9e81-5d139438b1a5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-03-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources strategy for Madagascar",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 47.53613,
                    "lat": -18.91368
                  },
                  "address": {
                    "addressCountry": "MG",
                    "streetAddress": "Antananarivo",
                    "addressLocality": "Antananarivo"
                  }
                },
                "@id": "urn:uuid:e57c0bbd-304f-4f59-9e81-5d139438b1a5",
                "startDate": "2016-03-14"
              }
            },
            "sort": [
              1457913600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-04-01T00:00:00.000Z",
    "key": 1459468800000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ac8611ca-a3d3-445b-9f52-aca5c54d06c6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-06-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Gratis Online Lernen - Edition LISUM",
                    "@language": "de"
                  },
                  {
                    "@value": "Gratis Online Lernen - Edition LISUM",
                    "@language": "en"
                  }
                ],
                "location": {},
                "@id": "urn:uuid:ac8611ca-a3d3-445b-9f52-aca5c54d06c6",
                "startDate": "2016-04-04"
              }
            },
            "sort": [
              1459728000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e6db620c-7b16-48f2-a1ee-fccc5ddff4b2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-04-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Global Conference 2016",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 19.916496,
                    "lat": 50.065839
                  },
                  "address": {
                    "addressCountry": "PL",
                    "streetAddress": "Krowodrza 30-962",
                    "addressLocality": "Kraków",
                    "addressRegion": "PL.MA"
                  }
                },
                "@id": "urn:uuid:e6db620c-7b16-48f2-a1ee-fccc5ddff4b2",
                "startDate": "2016-04-12"
              }
            },
            "sort": [
              1460419200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2d2fa244-acce-42ac-8ce7-ea4af5947b1f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-04-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER16: Open Culture",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -3.171522,
                    "lat": 55.938686
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "Pollock Halls, 18 Holyrood Park Rd",
                    "postalCode": "EH16 5AY",
                    "addressLocality": "Edinburgh"
                  }
                },
                "@id": "urn:uuid:2d2fa244-acce-42ac-8ce7-ea4af5947b1f",
                "startDate": "2016-04-19"
              }
            },
            "sort": [
              1461024000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-07-01T00:00:00.000Z",
    "key": 1467331200000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b210e9ff-fcf0-4d4b-ac44-7b4428c75c9d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-07-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Hackathon 2016 Weimar",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.329643,
                    "lat": 50.973463
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bauhausstraße 7c",
                    "postalCode": "99423",
                    "addressLocality": "Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:b210e9ff-fcf0-4d4b-ac44-7b4428c75c9d",
                "startDate": "2016-07-23"
              }
            },
            "sort": [
              1469232000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-09-01T00:00:00.000Z",
    "key": 1472688000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3016da20-2864-48ad-8d49-bcfee1240ccc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-09-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education: Promoting Diversity for European Languages",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.35171,
                    "lat": 50.85034
                  },
                  "address": {
                    "addressCountry": "BE",
                    "addressLocality": "Brussels",
                    "addressRegion": "BE.BU"
                  }
                },
                "@id": "urn:uuid:3016da20-2864-48ad-8d49-bcfee1240ccc",
                "startDate": "2016-09-26"
              }
            },
            "sort": [
              1474848000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-11-01T00:00:00.000Z",
    "key": 1477958400000,
    "doc_count": 4,
    "top_hits#about.@id": {
      "hits": {
        "total": 4,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1a9be075-5a7f-4321-b991-4f3af7ec4dd4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-11-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "13th Annual Open Education Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -77.437407,
                    "lat": 37.543797
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Greater Richmond Convention Center",
                    "addressLocality": "Richmond",
                    "addressRegion": "US.VA"
                  }
                },
                "@id": "urn:uuid:1a9be075-5a7f-4321-b991-4f3af7ec4dd4",
                "startDate": "2016-11-02"
              }
            },
            "sort": [
              1478044800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2693c601-ac53-44e7-9252-89a5e7e3643a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-11-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenCon2016",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -77.036871,
                    "lat": 38.907192
                  },
                  "address": {
                    "addressCountry": "US",
                    "addressLocality": "Washington",
                    "addressRegion": "US.DC"
                  }
                },
                "@id": "urn:uuid:2693c601-ac53-44e7-9252-89a5e7e3643a",
                "startDate": "2016-11-12"
              }
            },
            "sort": [
              1478908800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d74217bd-c27c-468a-880b-80a8ce4b8c89.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-11-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "LOERn: Weiterbildung „Medienpädagogik Kurs I\"",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.4952243,
                    "lat": 48.5812458
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Kardinal-von-Waldburg-Str. 6-7",
                    "postalCode": "89407",
                    "addressLocality": "Dillingen a.d.Donau",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:d74217bd-c27c-468a-880b-80a8ce4b8c89",
                "startDate": "2016-11-14"
              }
            },
            "sort": [
              1479081600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:aac5cbcf-52a4-408c-8d63-77a5ddea8b2b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-11-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Society for Research into Higher Education: Critical Perspectives on ‘Openness’ in Higher Education (Digital University)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.119251,
                    "lat": 51.531906
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "73 Collier Street",
                    "postalCode": "N1 9BE",
                    "addressLocality": "London",
                    "addressRegion": "GB.IT"
                  }
                },
                "@id": "urn:uuid:aac5cbcf-52a4-408c-8d63-77a5ddea8b2b",
                "startDate": "2016-11-18"
              }
            },
            "sort": [
              1479427200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2016-12-01T00:00:00.000Z",
    "key": 1480550400000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:299e3447-d795-49f5-a50c-7169c41d54cb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-12-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Regional Consultation: Asia",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 101.71123,
                    "lat": 3.15337
                  },
                  "address": {
                    "addressCountry": "MY",
                    "streetAddress": "Impiana Klcc Hotel and Spa",
                    "addressLocality": "Kuala Lumpur",
                    "addressRegion": "MY.KL"
                  }
                },
                "@id": "urn:uuid:299e3447-d795-49f5-a50c-7169c41d54cb",
                "startDate": "2016-12-01"
              }
            },
            "sort": [
              1480550400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:613a9621-a24d-4597-85f4-d1e8e53923e7.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2016-12-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERinfo Startworkshop",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.638395,
                    "lat": 50.12248
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schloßstraße 29",
                    "postalCode": "60486",
                    "addressLocality": "Frankfurt am Main",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:613a9621-a24d-4597-85f4-d1e8e53923e7",
                "startDate": "2016-12-12"
              }
            },
            "sort": [
              1481500800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-01-01T00:00:00.000Z",
    "key": 1483228800000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7148dfd5-8371-4e96-9d4e-9449f3e731f4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-01-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Tools Symposium",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -122.151953,
                    "lat": 37.409718
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Gordon and Betty Moore Foundation, 1661 Page Mill Rd",
                    "postalCode": "94304",
                    "addressLocality": "Palo Alto",
                    "addressRegion": "US.CA"
                  }
                },
                "@id": "urn:uuid:7148dfd5-8371-4e96-9d4e-9449f3e731f4",
                "startDate": "2017-01-26"
              }
            },
            "sort": [
              1485388800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-02-01T00:00:00.000Z",
    "key": 1485907200000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fb9ce4cc-1800-49d6-8a46-30dcb207b681.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Europeana match funding call – 10.000  € available to finance up to 3 digital education projects",
                    "@language": "en"
                  }
                ],
                "@id": "urn:uuid:fb9ce4cc-1800-49d6-8a46-30dcb207b681",
                "startDate": "2017-02-01"
              }
            },
            "sort": [
              1485907200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6c9b4e67-290e-468f-af66-a17bb4f2005e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-02-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Regional Consultation: Europe",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 14.505585,
                    "lat": 35.898589
                  },
                  "address": {
                    "addressCountry": "MT",
                    "streetAddress": "Great Siege Road",
                    "addressLocality": "Floriana"
                  }
                },
                "@id": "urn:uuid:6c9b4e67-290e-468f-af66-a17bb4f2005e",
                "startDate": "2017-02-23"
              }
            },
            "sort": [
              1487808000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:694ae323-399a-4b26-89e7-417d756d8b48.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-02-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Regional Consultation: Middle East & North Africa",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 51.437414,
                    "lat": 25.322454
                  },
                  "address": {
                    "addressCountry": "QA",
                    "streetAddress": "​Qatar National Convention Centre (QNCC)",
                    "addressLocality": "​Doha"
                  }
                },
                "@id": "urn:uuid:694ae323-399a-4b26-89e7-417d756d8b48",
                "startDate": "2017-02-27"
              }
            },
            "sort": [
              1488153600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-03-01T00:00:00.000Z",
    "key": 1488326400000,
    "doc_count": 6,
    "top_hits#about.@id": {
      "hits": {
        "total": 6,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Global Conference 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 18.426776,
                    "lat": -33.915682
                  },
                  "address": {
                    "addressCountry": "ZA",
                    "streetAddress": "Cape Town International Convention Centre (CTICC)",
                    "addressLocality": "Cape Town",
                    "addressRegion": "ZA.WC"
                  }
                },
                "@id": "urn:uuid:9c3fdacf-2bfa-430f-8273-178b0c64aa19",
                "startDate": "2017-03-08"
              }
            },
            "sort": [
              1488931200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1995eed2-3ca5-42a3-8de8-fa9cbbc2cfec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Science Conference 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.389303088188171,
                    "lat": 52.51962228477197
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Friedrichstraße 96",
                    "postalCode": "10117",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:1995eed2-3ca5-42a3-8de8-fa9cbbc2cfec",
                "startDate": "2017-03-21"
              }
            },
            "sort": [
              1490054400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1fff9044-cce9-40e0-a9c2-a92b9d83bc7d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Week 2017",
                    "@language": "en"
                  }
                ],
                "@id": "urn:uuid:1fff9044-cce9-40e0-a9c2-a92b9d83bc7d",
                "startDate": "2017-03-27"
              }
            },
            "sort": [
              1490572800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:16e19f26-2b21-45fe-9d02-43fa5f0daf5c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-29T13:00:00-04:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "March OpenCon Community Call",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US"
                  }
                },
                "@id": "urn:uuid:16e19f26-2b21-45fe-9d02-43fa5f0daf5c",
                "startDate": "2017-03-29T12:00:00-04:00"
              }
            },
            "sort": [
              1490803200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7aa1c966-0013-4f68-b4ae-759c5537aebd.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Sketching: What does open mean to you?",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.372517,
                    "lat": 52.002398
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "2628CC",
                    "postalCode": "2628CC",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:7aa1c966-0013-4f68-b4ae-759c5537aebd",
                "startDate": "2017-03-31"
              }
            },
            "sort": [
              1490918400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:55d2a855-6b12-4ebd-b447-fe05af979b97.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-03-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "TU Delft Open Science Seminar - being Strategic about Open",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.360402,
                    "lat": 52.005926
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Delft",
                    "postalCode": "2628 CE",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:55d2a855-6b12-4ebd-b447-fe05af979b97",
                "startDate": "2017-03-31"
              }
            },
            "sort": [
              1490918400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-04-01T00:00:00.000Z",
    "key": 1491004800000,
    "doc_count": 8,
    "top_hits#about.@id": {
      "hits": {
        "total": 8,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f255f424-2e70-4bd1-9e52-f3e2beeaef79.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Regional Consultation: Americas",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -46.646,
                    "lat": -23.5715
                  },
                  "address": {
                    "addressCountry": "BR",
                    "streetAddress": "Golden Tulip Paulista Plaza",
                    "addressLocality": "São Paulo",
                    "addressRegion": "BR.SP"
                  }
                },
                "@id": "urn:uuid:f255f424-2e70-4bd1-9e52-f3e2beeaef79",
                "startDate": "2017-04-03"
              }
            },
            "sort": [
              1491177600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:73ee76c8-ac10-44b2-919c-f804f247f2a0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER17: The Politics of Open",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.116079,
                    "lat": 51.55585
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "356 Holloway Road",
                    "addressLocality": "London",
                    "addressRegion": "GB.IT"
                  }
                },
                "@id": "urn:uuid:73ee76c8-ac10-44b2-919c-f804f247f2a0",
                "startDate": "2017-04-05"
              }
            },
            "sort": [
              1491350400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f5eb1bad-ead0-4709-b67b-eb2e28a6855e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "fit4uni",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:f5eb1bad-ead0-4709-b67b-eb2e28a6855e",
                "startDate": "2017-04-18"
              }
            },
            "sort": [
              1492473600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9b8266d5-c958-4776-a20a-72fceaec365e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Palestine OER Strategy Forum",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 35.183323,
                    "lat": 31.959243
                  },
                  "address": {
                    "addressCountry": "PS",
                    "streetAddress": "Birzeit University",
                    "postalCode": "972",
                    "addressLocality": "Bir Zeit"
                  }
                },
                "@id": "urn:uuid:9b8266d5-c958-4776-a20a-72fceaec365e",
                "startDate": "2017-04-20"
              }
            },
            "sort": [
              1492646400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fdee4485-26f5-4e90-9eb1-c6ac122833a3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "\"What is Open Pedagogy?\"  Hangout ",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "EG",
                    "addressRegion": "US.CA"
                  }
                },
                "@id": "urn:uuid:fdee4485-26f5-4e90-9eb1-c6ac122833a3",
                "startDate": "2017-04-24"
              }
            },
            "sort": [
              1492992000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e732752d-23d6-47cf-9a00-5596d1ca3713.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "2. OER Meetup Köln und Umgebung",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.964928,
                    "lat": 50.921624
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "TH Köln Bildungswerkstatt (EG, rechts), Ubierring 48",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:e732752d-23d6-47cf-9a00-5596d1ca3713",
                "startDate": "2017-04-25"
              }
            },
            "sort": [
              1493078400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:48588e52-147d-42ee-8e93-1b34ba911483.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-04-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "The William and Flora Hewlett Foundation’s Annual OER Meeting 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -79.556386,
                    "lat": 43.917669
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "12750 Jane Street",
                    "postalCode": "L7B 1A3",
                    "addressLocality": "King City",
                    "addressRegion": "CA.ON"
                  }
                },
                "@id": "urn:uuid:48588e52-147d-42ee-8e93-1b34ba911483",
                "startDate": "2017-04-26"
              }
            },
            "sort": [
              1493164800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7c6ab11c-7a96-4432-b55e-d7e988bf75cc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Government",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Delft"
                  }
                },
                "@id": "urn:uuid:7c6ab11c-7a96-4432-b55e-d7e988bf75cc",
                "startDate": "2017-04-27"
              }
            },
            "sort": [
              1493251200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-05-01T00:00:00.000Z",
    "key": 1493596800000,
    "doc_count": 16,
    "top_hits#about.@id": {
      "hits": {
        "total": 16,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f094f153-29e4-43e0-9cc7-7f99eac918eb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online-Kurs zu Open Educational Resources 17",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.33333,
                    "lat": 47.33333
                  },
                  "address": {
                    "addressCountry": "AT",
                    "streetAddress": "Republic of Austria",
                    "addressRegion": "AT.SZ"
                  }
                },
                "@id": "urn:uuid:f094f153-29e4-43e0-9cc7-7f99eac918eb",
                "startDate": "2017-05-02"
              }
            },
            "sort": [
              1493683200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:926e5242-6eb7-4f88-be74-98663c6167c7.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 17 Süd",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "München",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:926e5242-6eb7-4f88-be74-98663c6167c7",
                "startDate": "2017-05-05"
              }
            },
            "sort": [
              1493942400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7d3cdf4f-86b3-4e3e-9cf7-353dfcebaaf4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Apereo Africa",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 18.42322,
                    "lat": -33.92584
                  },
                  "address": {
                    "addressCountry": "ZA",
                    "streetAddress": "Cape Town",
                    "addressLocality": "Cape Town",
                    "addressRegion": "ZA.WC"
                  }
                },
                "@id": "urn:uuid:7d3cdf4f-86b3-4e3e-9cf7-353dfcebaaf4",
                "startDate": "2017-05-09"
              }
            },
            "sort": [
              1494288000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8314c0a6-4e5d-4d26-b08b-4c2a3f5b3cec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Netwerkdag SIG Open Education: adoptie OER",
                    "@language": "nl"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 5.109622,
                    "lat": 52.093987
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Utrecht",
                    "addressLocality": "Utrecht",
                    "addressRegion": "NL.UT"
                  }
                },
                "@id": "urn:uuid:8314c0a6-4e5d-4d26-b08b-4c2a3f5b3cec",
                "startDate": "2017-05-10"
              }
            },
            "sort": [
              1494374400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:41332d6c-0a72-4f4b-9ff1-e680cd8fa7c4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Alberta OER Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -113.471432,
                    "lat": 53.521064
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "University of Alberta",
                    "addressRegion": "CA.AB"
                  }
                },
                "@id": "urn:uuid:41332d6c-0a72-4f4b-9ff1-e680cd8fa7c4",
                "startDate": "2017-05-11"
              }
            },
            "sort": [
              1494460800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 17 West",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.964928,
                    "lat": 50.921624
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 48",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:98e1bb65-ef10-44f7-b1f9-c69a15d67b24",
                "startDate": "2017-05-12"
              }
            },
            "sort": [
              1494547200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7f26d503-05bb-4263-a302-296a012ae1d8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Facilitators’ workshop",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -3.669245,
                    "lat": 40.429913
                  },
                  "address": {
                    "addressCountry": "ES",
                    "streetAddress": "Madrid",
                    "addressLocality": "Madrid",
                    "addressRegion": "ES.MD"
                  }
                },
                "@id": "urn:uuid:7f26d503-05bb-4263-a302-296a012ae1d8",
                "startDate": "2017-05-16"
              }
            },
            "sort": [
              1494892800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c08160b9-98cb-4a10-9533-6f7b16d911ed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop für die niedersächsischen VHS-Digicircles (Hannover)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:c08160b9-98cb-4a10-9533-6f7b16d911ed",
                "startDate": "2017-05-17"
              }
            },
            "sort": [
              1494979200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:cd8e0693-dffa-45d0-ad74-c952c0ea67a1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Southeast ASIA",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.124154,
                    "lat": 50.717121
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Forum Internationale Wissenschaft Heussallee 18-24",
                    "postalCode": "53113",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:cd8e0693-dffa-45d0-ad74-c952c0ea67a1",
                "startDate": "2017-05-19"
              }
            },
            "sort": [
              1495152000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9f5dfc03-2d1e-4ccb-921b-428a4c30d7b9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "HerausfOERderung und Chance! Urheberrecht und offene Lehr-Lernmaterialien in der vhs",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.580699,
                    "lat": 50.357863
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Hoevelstraße 6",
                    "postalCode": "56073",
                    "addressLocality": "Koblenz",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:9f5dfc03-2d1e-4ccb-921b-428a4c30d7b9",
                "startDate": "2017-05-20"
              }
            },
            "sort": [
              1495238400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2872f4a5-f0c2-4cfc-a8b4-ac812761a4c0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop für die niedersächsischen VHS-Digicircles (Oldenburg) ",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Oldenburg"
                  }
                },
                "@id": "urn:uuid:2872f4a5-f0c2-4cfc-a8b4-ac812761a4c0",
                "startDate": "2017-05-22"
              }
            },
            "sort": [
              1495411200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fecadb0e-3658-4813-99e0-e93c14f32f7f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "4th Annual Conference: Transformative Teaching and Technology",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -88.069013,
                    "lat": 44.444542
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "St. Norberts College",
                    "addressLocality": "De Pere",
                    "addressRegion": "US.WI"
                  }
                },
                "@id": "urn:uuid:fecadb0e-3658-4813-99e0-e93c14f32f7f",
                "startDate": "2017-05-23"
              }
            },
            "sort": [
              1495497600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:81a4b0c8-989e-442f-89f4-0681e78b75a5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources in der Hochschule",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.760953,
                    "lat": 49.439283
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Kaiserslautern",
                    "addressLocality": "Kaiserslautern",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:81a4b0c8-989e-442f-89f4-0681e78b75a5",
                "startDate": "2017-05-24"
              }
            },
            "sort": [
              1495584000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:924a7992-aa61-4a7f-a4fa-64c339f270f3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Textbooks Summit 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -123.108551,
                    "lat": 49.282403
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "Simon Fraser University",
                    "addressLocality": "Vancouver",
                    "addressRegion": "CA.BC"
                  }
                },
                "@id": "urn:uuid:924a7992-aa61-4a7f-a4fa-64c339f270f3",
                "startDate": "2017-05-24"
              }
            },
            "sort": [
              1495584000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:73648f87-e419-4edf-ace2-f0e0b1886aa1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "#OERcgn-Meetup für Köln und Umgebung",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.964928,
                    "lat": 50.921624
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 48",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:73648f87-e419-4edf-ace2-f0e0b1886aa1",
                "startDate": "2017-05-30"
              }
            },
            "sort": [
              1496102400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a7a55e8a-9705-481f-a26a-a43a1509fbee.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-05-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Festival",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 15.447293,
                    "lat": 47.079768
                  },
                  "address": {
                    "addressCountry": "AT",
                    "streetAddress": "8 Mozartgasse",
                    "postalCode": "8010",
                    "addressLocality": "Graz",
                    "addressRegion": "AT.ST"
                  }
                },
                "@id": "urn:uuid:a7a55e8a-9705-481f-a26a-a43a1509fbee",
                "startDate": "2017-05-31"
              }
            },
            "sort": [
              1496188800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-06-01T00:00:00.000Z",
    "key": 1496275200000,
    "doc_count": 25,
    "top_hits#about.@id": {
      "hits": {
        "total": 25,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0a9a7653-8f1c-4ba6-90aa-6bc192fe45f5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "2nd OER Policy Forum",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 21.01178,
                    "lat": 52.22977
                  },
                  "address": {
                    "addressCountry": "PL",
                    "streetAddress": "Warsaw",
                    "addressLocality": "Warsaw",
                    "addressRegion": "PL.MZ"
                  }
                },
                "@id": "urn:uuid:0a9a7653-8f1c-4ba6-90aa-6bc192fe45f5",
                "startDate": "2017-06-01"
              }
            },
            "sort": [
              1496275200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1f4efbc9-09ba-4b51-8659-d2b0b940c11a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER in der Hochschule: Lehr- und Lernmaterialien finden und austauschen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.003301,
                    "lat": 51.463128
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstr. 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:1f4efbc9-09ba-4b51-8659-d2b0b940c11a",
                "startDate": "2017-06-01"
              }
            },
            "sort": [
              1496275200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1d0ff166-c11e-42d5-96a6-86f8422973ed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Dr. Rajiv Jhangiani Keynote on OER and Open Pedagogy",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -71.26088,
                    "lat": 41.64844
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Roger Williams University Library"
                  }
                },
                "@id": "urn:uuid:1d0ff166-c11e-42d5-96a6-86f8422973ed",
                "startDate": "2017-06-02"
              }
            },
            "sort": [
              1496361600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8a75155c-f9e3-4a09-95bd-c2afeacce16e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Apereo 2017 Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -75.1434,
                    "lat": 39.9453
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Sheraton Society Hill Hotel",
                    "addressLocality": "Philadelphia",
                    "addressRegion": "US.PA"
                  }
                },
                "@id": "urn:uuid:8a75155c-f9e3-4a09-95bd-c2afeacce16e",
                "startDate": "2017-06-04"
              }
            },
            "sort": [
              1496534400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b3ba4a43-8c01-4168-b583-296fa834f28b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop für die niedersächsischen VHS-Digicircles (Delmenhorst)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Delmenhorst"
                  }
                },
                "@id": "urn:uuid:b3ba4a43-8c01-4168-b583-296fa834f28b",
                "startDate": "2017-06-06"
              }
            },
            "sort": [
              1496707200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:94116dd1-2631-4c79-a274-af1b60edc807.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste – darf ich das?! Eine Einführung in Urheberrecht und Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:94116dd1-2631-4c79-a274-af1b60edc807",
                "startDate": "2017-06-07"
              }
            },
            "sort": [
              1496793600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:75c4a21f-ab12-4337-be68-6e18acd921cb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Coffee Lecture OER",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.144585,
                    "lat": 49.96502
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Würzburger Straße 45",
                    "postalCode": "63743",
                    "addressLocality": "Aschaffenburg",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:75c4a21f-ab12-4337-be68-6e18acd921cb",
                "startDate": "2017-06-07"
              }
            },
            "sort": [
              1496793600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:11861f19-a7b9-448c-ac0e-6472cb9e05ec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Transferworkshop Train-us-OER-Trainer für OERinfo-Projekte",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.322062,
                    "lat": 50.985963
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:11861f19-a7b9-448c-ac0e-6472cb9e05ec",
                "startDate": "2017-06-12"
              }
            },
            "sort": [
              1497225600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a4bc7a98-46bc-4736-8b9e-7648965d0963.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "24th Annual NMC Summer Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -71.105316,
                    "lat": 42.354228
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "575 Memorial Dr",
                    "addressLocality": "Cambridge",
                    "addressRegion": "US.MA"
                  }
                },
                "@id": "urn:uuid:a4bc7a98-46bc-4736-8b9e-7648965d0963",
                "startDate": "2017-06-13"
              }
            },
            "sort": [
              1497312000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3eff884e-879f-43de-93db-d2af064a2b25.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2917-06-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Northeast OER Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -72.526978,
                    "lat": 42.391704
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Hotel UMass",
                    "addressLocality": "Amherst Center",
                    "addressRegion": "US.MA"
                  }
                },
                "@id": "urn:uuid:3eff884e-879f-43de-93db-d2af064a2b25",
                "startDate": "2017-06-13"
              }
            },
            "sort": [
              1497312000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4a9022cc-0b90-49b0-8bad-1e83ec338c20.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Unterrichtsmaterialien? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:4a9022cc-0b90-49b0-8bad-1e83ec338c20",
                "startDate": "2017-06-14"
              }
            },
            "sort": [
              1497398400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5084fd94-940e-4158-9dc8-b546874c8d47.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Junges Forum für Medien und Hochschulentwicklung 2017",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:5084fd94-940e-4158-9dc8-b546874c8d47",
                "startDate": "2017-06-15"
              }
            },
            "sort": [
              1497484800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f5c43d64-75b3-4fec-820d-73b942bda5bf.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Nutzung digitaler Bildungsressourcen (2) – was ist in frei zugänglichen virtuellen Räumen zu beachten? (Online-Event)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.059097,
                    "lat": 48.523078
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Tübingen",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:f5c43d64-75b3-4fec-820d-73b942bda5bf",
                "startDate": "2017-06-19"
              }
            },
            "sort": [
              1497830400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:49197493-6f08-404d-8e71-014febce40c3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Alles nur eine Frage der Haltung? – Ermöglichung von Partizipation und Offenheit im schulischen Unterricht unter den Bedingungen der Digitalisierung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:49197493-6f08-404d-8e71-014febce40c3",
                "startDate": "2017-06-20"
              }
            },
            "sort": [
              1497916800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:cb51360b-c023-4a8f-93a0-ed07fa7be63f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "#yearofopen at The Open University",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.711252,
                    "lat": 52.024257
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "Jennie Lee Building",
                    "postalCode": "MK7 6AA",
                    "addressLocality": "Milton Keynes",
                    "addressRegion": "GB.MK"
                  }
                },
                "@id": "urn:uuid:cb51360b-c023-4a8f-93a0-ed07fa7be63f",
                "startDate": "2017-06-20"
              }
            },
            "sort": [
              1497916800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a617a57f-c77d-4bb7-99c5-0a9113335a50.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Saylor Higher Education Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -77.03637,
                    "lat": 38.89511
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Washington, D.C.",
                    "addressLocality": "Washington, D.C.",
                    "addressRegion": "US.DC"
                  }
                },
                "@id": "urn:uuid:a617a57f-c77d-4bb7-99c5-0a9113335a50",
                "startDate": "2017-06-21"
              }
            },
            "sort": [
              1498003200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:dd244176-be15-468a-a60d-289ac323ddae.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Schule: Lehr- und Lernmaterialien finden und austauschen",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.003301,
                    "lat": 51.463128
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstr. 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:dd244176-be15-468a-a60d-289ac323ddae",
                "startDate": "2017-06-22"
              }
            },
            "sort": [
              1498089600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:de8a6a3a-779b-4ed9-8b66-c2103d8e3ef8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Leipzig",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 12.390015,
                    "lat": 51.402421
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Fuggerstraße 2",
                    "postalCode": "4158",
                    "addressLocality": "Leipzig",
                    "addressRegion": "DE.SN"
                  }
                },
                "@id": "urn:uuid:de8a6a3a-779b-4ed9-8b66-c2103d8e3ef8",
                "startDate": "2017-06-22"
              }
            },
            "sort": [
              1498089600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7237e8db-fe4d-41ef-9d05-cd7fb7e3b5af.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 17 Nord",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.990353,
                    "lat": 53.568585
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Yu Garden",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:7237e8db-fe4d-41ef-9d05-cd7fb7e3b5af",
                "startDate": "2017-06-23"
              }
            },
            "sort": [
              1498176000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c41ec01d-0484-42d7-8dc1-d1a4fbba5717.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Erklärvideos für den vhs-Unterricht selbst erstellen und teilen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.26882,
                    "lat": 50.00098
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Mainz",
                    "addressLocality": "Mainz",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:c41ec01d-0484-42d7-8dc1-d1a4fbba5717",
                "startDate": "2017-06-24"
              }
            },
            "sort": [
              1498262400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fdef06c6-ceb6-4afa-9947-35fc54292674.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Digital und offen?! – Wie Digitalisierung Bildung verändert",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.274792,
                    "lat": 49.998038
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Grebenstraße 24-26",
                    "postalCode": "55116",
                    "addressLocality": "Mainz",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:fdef06c6-ceb6-4afa-9947-35fc54292674",
                "startDate": "2017-06-26"
              }
            },
            "sort": [
              1498435200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:148ddbcb-b8ed-4b33-9015-3e9b00838bc9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "4. OER-Meetup",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.963239,
                    "lat": 50.921504
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 40",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:148ddbcb-b8ed-4b33-9015-3e9b00838bc9",
                "startDate": "2017-06-26"
              }
            },
            "sort": [
              1498435200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6a9f1eb1-46ac-4af2-84fb-7a9604a72784.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Garbsen",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.607495,
                    "lat": 52.430732
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Steinriede 11",
                    "postalCode": "30827",
                    "addressLocality": "Garbsen",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:6a9f1eb1-46ac-4af2-84fb-7a9604a72784",
                "startDate": "2017-06-28"
              }
            },
            "sort": [
              1498608000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bc35bb3b-b5db-4c13-b9e0-f34331e992a9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Freie Lernmaterialien (OER) barrierefrei erstellen und mit Anderen teilen – Teil 1/2",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:bc35bb3b-b5db-4c13-b9e0-f34331e992a9",
                "startDate": "2017-06-29"
              }
            },
            "sort": [
              1498694400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:be7d3591-7557-4c69-9131-54e6d083da59.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-06-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – München",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.559169,
                    "lat": 48.137537
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schwanthalerstraße 36",
                    "postalCode": "80336",
                    "addressLocality": "München",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:be7d3591-7557-4c69-9131-54e6d083da59",
                "startDate": "2017-06-29"
              }
            },
            "sort": [
              1498694400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-07-01T00:00:00.000Z",
    "key": 1498867200000,
    "doc_count": 6,
    "top_hits#about.@id": {
      "hits": {
        "total": 6,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e4d99fe9-bf50-4ac0-9d65-33269e37f6d3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online-Phase „OER-Multiplikator/in“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:e4d99fe9-bf50-4ac0-9d65-33269e37f6d3",
                "startDate": "2017-07-04"
              }
            },
            "sort": [
              1499126400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a4cff160-d6ba-4597-93de-a497fefe95f5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-07-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Hochschule: Lehr- und Lernmaterialien zusammenstellen und bearbeiten",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.003301,
                    "lat": 51.463128
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstr. 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:a4cff160-d6ba-4597-93de-a497fefe95f5",
                "startDate": "2017-07-06"
              }
            },
            "sort": [
              1499299200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4dfd25ae-4e82-40cc-97e4-9b5aac2d772a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-07-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Schule: Lehr- und Lernmaterialien zusammenstellen und bearbeiten",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.003301,
                    "lat": 51.463128
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstr. 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:4dfd25ae-4e82-40cc-97e4-9b5aac2d772a",
                "startDate": "2017-07-13"
              }
            },
            "sort": [
              1499904000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:147618b2-893e-49ba-ad43-e3368d3ac233.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-07-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Freie Lernmaterialien (OER) barrierefrei erstellen und mit Anderen teilen – Teil 2/2",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:147618b2-893e-49ba-ad43-e3368d3ac233",
                "startDate": "2017-07-13"
              }
            },
            "sort": [
              1499904000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a54591d4-6bea-48be-819f-b00839783fed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-07-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Weiterentwicklung digitaler Bildungsressourcen – was planen die Akteure? (Online-Event)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.059097,
                    "lat": 48.523078
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Tübingen",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:a54591d4-6bea-48be-819f-b00839783fed",
                "startDate": "2017-07-17"
              }
            },
            "sort": [
              1500249600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f76d95d1-230a-4f0e-b5a7-3d29bc60e885.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-IT Sommercamp (Hackathon, IT-Expertenworkshop)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.329455,
                    "lat": 50.973588
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bauhaus-Factory, Bauhausstraße 7c",
                    "postalCode": "99423",
                    "addressLocality": "Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:f76d95d1-230a-4f0e-b5a7-3d29bc60e885",
                "startDate": "2017-07-31"
              }
            },
            "sort": [
              1501459200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-08-01T00:00:00.000Z",
    "key": 1501545600000,
    "doc_count": 8,
    "top_hits#about.@id": {
      "hits": {
        "total": 8,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4762f35a-7a68-4b2b-b6c4-c8c69e81c3ed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SynLLOER openLab – offene wOERrkstatt",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:4762f35a-7a68-4b2b-b6c4-c8c69e81c3ed",
                "startDate": "2017-08-17"
              }
            },
            "sort": [
              1502928000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:335eb49b-d631-480b-8010-2e90765ee395.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste, OER und Open Access an der Hochschule",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:335eb49b-d631-480b-8010-2e90765ee395",
                "startDate": "2017-08-21"
              }
            },
            "sort": [
              1503273600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:51c8f089-f4a1-4246-acb2-57c1f4c895e5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenSym 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -9.058514,
                    "lat": 53.276398
                  },
                  "address": {
                    "addressCountry": "IE",
                    "streetAddress": "National University of Ireland, Galway",
                    "addressLocality": "Galway"
                  }
                },
                "@id": "urn:uuid:51c8f089-f4a1-4246-acb2-57c1f4c895e5",
                "startDate": "2017-08-23"
              }
            },
            "sort": [
              1503446400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d33c9274-916e-467f-9353-6eb45b302afe.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SynLLOER openLab – offene wOERrkstatt",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:d33c9274-916e-467f-9353-6eb45b302afe",
                "startDate": "2017-08-24"
              }
            },
            "sort": [
              1503532800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bf4d4e5f-1932-4113-ba5e-3be1c3ddf90f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Lübeck",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.694193177337638,
                    "lat": 53.8342089384829
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Fachhochschule Lübeck / OnCampus Gmbh (MFC VII), Maria-Goeppert-Straße 9 ",
                    "postalCode": "23562",
                    "addressLocality": "Lübeck",
                    "addressRegion": "DE.SH"
                  }
                },
                "@id": "urn:uuid:bf4d4e5f-1932-4113-ba5e-3be1c3ddf90f",
                "startDate": "2017-08-28"
              }
            },
            "sort": [
              1503878400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9519b5f7-13d5-479a-8093-613d9f6ecd5d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources Workshop",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 56.72336747265627,
                    "lat": 24.38694298432752
                  },
                  "address": {
                    "addressCountry": "OM",
                    "streetAddress": "Colleges of Applied Sciences Sohar",
                    "postalCode": "135",
                    "addressLocality": "Suhar 311"
                  }
                },
                "@id": "urn:uuid:9519b5f7-13d5-479a-8093-613d9f6ecd5d",
                "startDate": "2017-08-29"
              }
            },
            "sort": [
              1503964800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:82c360ab-5c48-4432-b3a4-eaef6293d214.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Stuttgart",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.17159914016724,
                    "lat": 48.776705351275865
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "VCH Hotel Wartburg Stuttgart, Lange Straße 49",
                    "postalCode": "70174",
                    "addressLocality": "Stuttgart",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:82c360ab-5c48-4432-b3a4-eaef6293d214",
                "startDate": "2017-08-31"
              }
            },
            "sort": [
              1504137600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:35c8e34e-29ad-4531-ac4a-321c482a0800.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-08-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SynLLOER openLab – offene wOERrkstatt",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.987939,
                    "lat": 53.568104
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:35c8e34e-29ad-4531-ac4a-321c482a0800",
                "startDate": "2017-08-31"
              }
            },
            "sort": [
              1504137600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-09-01T00:00:00.000Z",
    "key": 1504224000000,
    "doc_count": 27,
    "top_hits#about.@id": {
      "hits": {
        "total": 27,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:baa1a685-74ce-40f7-807f-34254e32464a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-bMOOC für alle niedersächsischen Volkshochschulen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "online",
                    "addressLocality": "Niedersachsen"
                  }
                },
                "@id": "urn:uuid:baa1a685-74ce-40f7-807f-34254e32464a",
                "startDate": "2017-09"
              }
            },
            "sort": [
              1504224000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6117951c-b79e-4ffc-aef2-eeb830f86cc9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Gemeinsam mit Teilnehmer/innen eines vhs-Kurses einen Blog erstellen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.305203,
                    "lat": 49.930575
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Metternicher Hof, Schönbornplatz 2",
                    "postalCode": "55294",
                    "addressLocality": "Bodenheim",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:6117951c-b79e-4ffc-aef2-eeb830f86cc9",
                "startDate": "2017-09-02"
              }
            },
            "sort": [
              1504310400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6800d529-3ca5-4f6b-96f8-dde30c88e350.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Praxis-Workshop für „OER-Macher/innen“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.155589,
                    "lat": 50.717344
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Seminarräume am Bonner Bogen, Konrad-Zuse-Platz 9",
                    "postalCode": "53227",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:6800d529-3ca5-4f6b-96f8-dde30c88e350",
                "startDate": "2017-09-04"
              }
            },
            "sort": [
              1504483200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:65f5ba8f-685d-42e5-b23b-afcdeb642d9f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste – darf ich das?! Eine Einführung in Urheberrecht und Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966259,
                    "lat": 53.570237
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:65f5ba8f-685d-42e5-b23b-afcdeb642d9f",
                "startDate": "2017-09-05"
              }
            },
            "sort": [
              1504569600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b66a1f32-3813-48da-97a5-4c2130b70cfa.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Materialien für Hochschullehre? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:b66a1f32-3813-48da-97a5-4c2130b70cfa",
                "startDate": "2017-09-07"
              }
            },
            "sort": [
              1504742400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-12-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SynLLOER openLab",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:adb58fde-21f8-4384-92f5-9b138891b87e",
                "startDate": "2017-09-07"
              }
            },
            "sort": [
              1504742400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d948431f-a686-4234-a65f-cc4c6aaf10a2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open-Access-Tage 2017 (Dresden)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.736604,
                    "lat": 51.028462
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Sächsische Landesbibliothek – Staats- und Universitätsbibliothek Dresden",
                    "postalCode": "1069",
                    "addressLocality": "Dresden",
                    "addressRegion": "DE.SN"
                  }
                },
                "@id": "urn:uuid:d948431f-a686-4234-a65f-cc4c6aaf10a2",
                "startDate": "2017-09-11"
              }
            },
            "sort": [
              1505088000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2ad5fc95-0080-43b4-a56f-025f7a4398ab.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Bad Zwischenahn)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Bad Zwischenahn"
                  }
                },
                "@id": "urn:uuid:2ad5fc95-0080-43b4-a56f-025f7a4398ab",
                "startDate": "2017-09-13"
              }
            },
            "sort": [
              1505260800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c3d3fd27-3c56-423f-86ac-4e19a29e3e3b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "16. Internationale ILIAS Conference 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.84701,
                    "lat": 47.99416
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Freiburg im Breisgau",
                    "addressLocality": "Freiburg im Breisgau",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:c3d3fd27-3c56-423f-86ac-4e19a29e3e3b",
                "startDate": "2017-09-14"
              }
            },
            "sort": [
              1505347200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:cd46b6f3-a23f-471e-9cc0-c3dc9b3f5fb8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Essen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.97662,
                    "lat": 51.432818
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Mintrop's Stadt Hotel Margarethenhöhe, Steile Str. 46",
                    "postalCode": "45149",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:cd46b6f3-a23f-471e-9cc0-c3dc9b3f5fb8",
                "startDate": "2017-09-14"
              }
            },
            "sort": [
              1505347200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:74a070a4-400f-436c-a157-e98f5a94fd11.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Hochschule: Qualität von Lehr- und Lernmaterialien prüfen und sichern",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:74a070a4-400f-436c-a157-e98f5a94fd11",
                "startDate": "2017-09-14"
              }
            },
            "sort": [
              1505347200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bbf4cd46-970b-4549-ab8b-49020a0f061d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Practices in Higher Educational Institutions: Resources & Policies",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 56.7577117839354,
                    "lat": 24.34681184465606
                  },
                  "address": {
                    "addressCountry": "OM",
                    "streetAddress": "Suhar University",
                    "addressLocality": "Suhar 311"
                  }
                },
                "@id": "urn:uuid:bbf4cd46-970b-4549-ab8b-49020a0f061d",
                "startDate": "2017-09-14"
              }
            },
            "sort": [
              1505347200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4084fb26-d7b1-4fc3-af71-f3d99b8ae0fb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Helmstedt)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Helmstedt"
                  }
                },
                "@id": "urn:uuid:4084fb26-d7b1-4fc3-af71-f3d99b8ae0fb",
                "startDate": "2017-09-18"
              }
            },
            "sort": [
              1505692800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4d68c49e-8941-4c5d-a3fa-f5a3a0d261bb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "2nd World OER Congress",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 14.503879,
                    "lat": 46.062688
                  },
                  "address": {
                    "addressCountry": "SI",
                    "streetAddress": "Ljubljana",
                    "addressRegion": "SI.LJ"
                  }
                },
                "@id": "urn:uuid:4d68c49e-8941-4c5d-a3fa-f5a3a0d261bb",
                "startDate": "2017-09-18"
              }
            },
            "sort": [
              1505692800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a53d5dc2-5112-4dab-862c-e4940e916ae1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "2nd World OER Congress",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 14.5067824,
                    "lat": 46.0498146
                  },
                  "address": {
                    "addressCountry": "SI",
                    "addressLocality": "Ljubljana"
                  }
                },
                "@id": "urn:uuid:a53d5dc2-5112-4dab-862c-e4940e916ae1",
                "startDate": "2017-09-18"
              }
            },
            "sort": [
              1505692800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d1159553-ff33-4ddc-b85d-3920c80e11e9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Laatzen)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Laatzen"
                  }
                },
                "@id": "urn:uuid:d1159553-ff33-4ddc-b85d-3920c80e11e9",
                "startDate": "2017-09-19"
              }
            },
            "sort": [
              1505779200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:15f14df0-5451-4928-8b5c-27e029feb02c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Unterrichtsmaterialien? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966259,
                    "lat": 53.570237
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:15f14df0-5451-4928-8b5c-27e029feb02c",
                "startDate": "2017-09-20"
              }
            },
            "sort": [
              1505865600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:376baf31-afe4-47d2-9edb-43c30fe6f6f2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Stade)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Stade"
                  }
                },
                "@id": "urn:uuid:376baf31-afe4-47d2-9edb-43c30fe6f6f2",
                "startDate": "2017-09-21"
              }
            },
            "sort": [
              1505952000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:39ca59b5-5880-4eae-b379-a3110adabcec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Schule: Qualität von Lehr- und Lernmaterialien prüfen und sichern",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:39ca59b5-5880-4eae-b379-a3110adabcec",
                "startDate": "2017-09-21"
              }
            },
            "sort": [
              1505952000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:67eec54a-5e99-4e03-ab76-70adbefc0829.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Osnabrück) ",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Osnabrück"
                  }
                },
                "@id": "urn:uuid:67eec54a-5e99-4e03-ab76-70adbefc0829",
                "startDate": "2017-09-22"
              }
            },
            "sort": [
              1506038400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a0b75494-2bdd-4e28-86b6-7d34508f1ebc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste, OER und Open Access an der Hochschule",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": 20146,
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:a0b75494-2bdd-4e28-86b6-7d34508f1ebc",
                "startDate": "2017-09-25"
              }
            },
            "sort": [
              1506297600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7c8c2495-3bf3-4b52-8408-e0dbcc984f42.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Training Week",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.662961,
                    "lat": 45.063119
                  },
                  "address": {
                    "addressCountry": "IT",
                    "streetAddress": "24 Corso Duca Degli Abruzzi",
                    "postalCode": "10129",
                    "addressLocality": "Turin",
                    "addressRegion": "IT.TO"
                  }
                },
                "@id": "urn:uuid:7c8c2495-3bf3-4b52-8408-e0dbcc984f42",
                "startDate": "2017-09-25"
              }
            },
            "sort": [
              1506297600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4010278f-0689-4f1a-872a-70d5a4e0f854.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Image | Abillity: Visualizing the Unimaginable",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.360402,
                    "lat": 52.005926
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Delft",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:4010278f-0689-4f1a-872a-70d5a4e0f854",
                "startDate": "2017-09-26"
              }
            },
            "sort": [
              1506384000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b5e32abc-98c5-4d3d-ac46-2824507592a2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Mannheim-Ladenburg",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.59832,
                    "lat": 49.4788
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Leonardo Hotel Mannheim-Ladenburg, Benzstraße 21 ",
                    "postalCode": "68526",
                    "addressLocality": "Ladenburg",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:b5e32abc-98c5-4d3d-ac46-2824507592a2",
                "startDate": "2017-09-26"
              }
            },
            "sort": [
              1506384000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:72e791e0-0f44-43b4-b820-24e9fbf4d71a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "2. JOINTLY Transferworkshop – Train-us-OER-Trainer",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.638395,
                    "lat": 50.12248
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "DIPF, Schloßstraße 29",
                    "postalCode": "60486",
                    "addressLocality": "Frankfurt am Main",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:72e791e0-0f44-43b4-b820-24e9fbf4d71a",
                "startDate": "2017-09-28"
              }
            },
            "sort": [
              1506556800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9ce4fe1f-a01f-4eb0-bfac-4851b2b812f9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Möglichkeiten von H5P als digitales Tool zur Erstellung von OER",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.987939,
                    "lat": 53.568104
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg der Universität Hamburg, Schlüterstr. 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:9ce4fe1f-a01f-4eb0-bfac-4851b2b812f9",
                "startDate": "2017-09-28"
              }
            },
            "sort": [
              1506556800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9c8b316a-11ea-41db-8046-ec3cb03a61a0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-09-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Erwachsenen- und Weiterbildung: Lehr- und Lernmaterialien rechtssicher verwenden",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:9c8b316a-11ea-41db-8046-ec3cb03a61a0",
                "startDate": "2017-09-28"
              }
            },
            "sort": [
              1506556800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-10-01T00:00:00.000Z",
    "key": 1506816000000,
    "doc_count": 23,
    "top_hits#about.@id": {
      "hits": {
        "total": 23,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f2ad6c5d-f795-482b-b3ef-391213da4b11.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Learning with MOOCs for Professional Development",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.70911,
                    "lat": 52.024071
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "IET, The Open University, Jennie Lee Building 1st floor, Walton Hall",
                    "addressLocality": "MILTON KEYNES"
                  }
                },
                "@id": "urn:uuid:f2ad6c5d-f795-482b-b3ef-391213da4b11",
                "startDate": "2017-10-01"
              }
            },
            "sort": [
              1506816000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:edcc6612-6619-4f72-9f7c-3ad7a8516c46.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Introduction to Open Education",
                    "@language": "en"
                  }
                ],
                "@id": "urn:uuid:edcc6612-6619-4f72-9f7c-3ad7a8516c46",
                "startDate": "2017-10-03"
              }
            },
            "sort": [
              1506988800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7a9064e2-502c-4cf2-bf0f-05278782eae5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online-Phase „OER-Multiplikator/in“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:7a9064e2-502c-4cf2-bf0f-05278782eae5",
                "startDate": "2017-10-04"
              }
            },
            "sort": [
              1507075200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:214079b6-2294-4bbc-8959-b14e4ac5bbbb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OSM@BB- Auftakttagung: \"Kaufst Du noch, oder teilst Du schon??\"",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.230318,
                    "lat": 52.320739
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Schule und Medien Berlin-Brandenburg",
                    "postalCode": "14974",
                    "addressLocality": "Ludwigsfelde",
                    "addressRegion": "DE.BB"
                  }
                },
                "@id": "urn:uuid:214079b6-2294-4bbc-8959-b14e4ac5bbbb",
                "startDate": "2017-10-04"
              }
            },
            "sort": [
              1507075200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e4357c58-303c-47b5-8cef-c1f6f9e05501.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "H5P Community Meetup Hamburg (WordPress and beyond)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.982462,
                    "lat": 53.567429
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": " Café Paranoia, Allende-Platz 1",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg"
                  }
                },
                "@id": "urn:uuid:e4357c58-303c-47b5-8cef-c1f6f9e05501",
                "startDate": "2017-10-05"
              }
            },
            "sort": [
              1507161600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b82b280a-9fec-4315-896a-d6f1d37149c5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Webinar: Rechtliche Aspekte bei der Verwendung und Erstellung von Open Educational Resources",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.21467,
                    "lat": 53.14118
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Adobe Connect",
                    "addressLocality": "Adobe Connect",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:b82b280a-9fec-4315-896a-d6f1d37149c5",
                "startDate": "2017-10-11"
              }
            },
            "sort": [
              1507680000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:071232bf-822d-4092-b98b-54dc26076496.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste – darf ich das?! Eine Einführung in Urheberrecht und Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:071232bf-822d-4092-b98b-54dc26076496",
                "startDate": "2017-10-11"
              }
            },
            "sort": [
              1507680000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a54ea727-13d5-41e2-a865-8dcf455ca711.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenCon 2017 LatAm",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -99.178977,
                    "lat": 19.324868
                  },
                  "address": {
                    "addressCountry": "MX",
                    "streetAddress": "Amoxcalli, Facultad de Ciencias, Universidad Nacional Autónoma de México",
                    "addressLocality": "Mexico City",
                    "addressRegion": "MX.DF"
                  }
                },
                "@id": "urn:uuid:a54ea727-13d5-41e2-a865-8dcf455ca711",
                "startDate": "2017-10-12"
              }
            },
            "sort": [
              1507766400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8b97bd38-1a9d-40b4-b0fa-fb3f43d6e983.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "IV Workshop Recursos Educacionais Abertos",
                    "@language": "es"
                  },
                  {
                    "@value": "IV Workshop Recursos Educativos Abiertos",
                    "@language": "es"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "AR",
                    "streetAddress": "Facultad de Informatica, UNLP",
                    "addressLocality": "La Plata",
                    "addressRegion": "AR.BA"
                  }
                },
                "@id": "urn:uuid:8b97bd38-1a9d-40b4-b0fa-fb3f43d6e983",
                "startDate": "2017-10-12"
              }
            },
            "sort": [
              1507766400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:249fbc39-61d7-4a39-a70f-1a83ef2f8c42.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "World Conference on Online Learning: Teaching in The Digital Age – Re-Thinking Teaching & Learning",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -79.311071,
                    "lat": 43.618208
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "Toronto",
                    "addressLocality": "Toronto",
                    "addressRegion": "CA.ON"
                  }
                },
                "@id": "urn:uuid:249fbc39-61d7-4a39-a70f-1a83ef2f8c42",
                "startDate": "2017-10-16"
              }
            },
            "sort": [
              1508112000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0826884e-3c16-499e-b076-5ce47955b813.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "10 Years TU Delft OpenCourseWare",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.36996,
                    "lat": 52.001657
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "15 Landbergstraat",
                    "postalCode": "2628CE",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:0826884e-3c16-499e-b076-5ce47955b813",
                "startDate": "2017-10-16"
              }
            },
            "sort": [
              1508112000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:abd4c808-8f36-4188-bb9c-66297fac01f7.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Möglichkeiten von H5P als digitales Tool zur Erstellung von OER",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.987939,
                    "lat": 53.568104
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg der Universität Hamburg, Schlüterstr. 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:abd4c808-8f36-4188-bb9c-66297fac01f7",
                "startDate": "2017-10-17"
              }
            },
            "sort": [
              1508198400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8ccf4cd1-f663-42c9-91a4-0ba7b72976f0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste, OER und Open Access an der Hochschule",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg (UK), Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:8ccf4cd1-f663-42c9-91a4-0ba7b72976f0",
                "startDate": "2017-10-17"
              }
            },
            "sort": [
              1508198400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7cc8ebdf-471b-4901-b8c1-e63651ce17ec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop: OER-Strategien an Hochschulen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.0041363756713855,
                    "lat": 51.46461053889442
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:7cc8ebdf-471b-4901-b8c1-e63651ce17ec",
                "startDate": "2017-10-18"
              }
            },
            "sort": [
              1508284800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e83026a7-bab7-4495-9d69-bc766d6b66db.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Informationsveranstaltung zu Open Educational Resources (OER) ",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Osnabrück"
                  }
                },
                "@id": "urn:uuid:e83026a7-bab7-4495-9d69-bc766d6b66db",
                "startDate": "2017-10-18"
              }
            },
            "sort": [
              1508284800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:02389ba2-0280-4a6d-bf73-ab2fb565ebef.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER – was ist denn das? - Workshop für MultiplikatorInnen und MitarbeiterInnen in der Erwachsenenbildung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.264873,
                    "lat": 49.998031
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Walpodenstraße 10",
                    "postalCode": "55116",
                    "addressLocality": "Mainz",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:02389ba2-0280-4a6d-bf73-ab2fb565ebef",
                "startDate": "2017-10-18"
              }
            },
            "sort": [
              1508284800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:905817f8-473f-47d8-97fc-4d028ec3de13.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Erwachsenen- und Weiterbildung: Lehr- und Lernmaterialien finden und austauschen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:905817f8-473f-47d8-97fc-4d028ec3de13",
                "startDate": "2017-10-19"
              }
            },
            "sort": [
              1508371200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ad35b3b4-be48-47a5-8785-7ae3ec438768.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Materialien für Hochschullehre? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:ad35b3b4-be48-47a5-8785-7ae3ec438768",
                "startDate": "2017-10-23"
              }
            },
            "sort": [
              1508716800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3a4fd4e9-c14a-44ef-8e32-d9626d161b7e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Kaiserslautern",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.744825,
                    "lat": 49.454696
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Blechhammer Hotel und Restaurant, Am Hammerweiher 1",
                    "postalCode": "67659",
                    "addressLocality": "Kaiserslautern",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:3a4fd4e9-c14a-44ef-8e32-d9626d161b7e",
                "startDate": "2017-10-24"
              }
            },
            "sort": [
              1508803200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:49d89fe0-d6a0-4a65-b916-6b6a3bb1e2ac.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "The Online, Open and Flexible Higher Education Conference - Higher education for the future: accelerating and strengthening innovation",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.710808,
                    "lat": 52.024775
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "Walton Hall",
                    "postalCode": "MK7 6AA",
                    "addressLocality": "Milton Keynes",
                    "addressRegion": "GB.MK"
                  }
                },
                "@id": "urn:uuid:49d89fe0-d6a0-4a65-b916-6b6a3bb1e2ac",
                "startDate": "2017-10-25"
              }
            },
            "sort": [
              1508889600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d1f2d98f-ebde-41ce-a8d0-ec0cc2c85ef3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Fortbildungsveranstaltung für Verantwortliche in der Erwachsenenbildung und Lehrerinnen und Lehrer in Speyer",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.127387,
                    "lat": 49.348006
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Kloster Neustadt, Waldstraße 145",
                    "postalCode": "67434",
                    "addressLocality": "Neustadt an der Weinstraße",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:d1f2d98f-ebde-41ce-a8d0-ec0cc2c85ef3",
                "startDate": "2017-10-26"
              }
            },
            "sort": [
              1508976000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:914befc8-6f1f-4ab8-8e36-56409b6bef32.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-10-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Möglichkeiten von H5P als digitales Tool zur Erstellung von OER",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.987939,
                    "lat": 53.568104
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg der Universität Hamburg, Schlüterstr. 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:914befc8-6f1f-4ab8-8e36-56409b6bef32",
                "startDate": "2017-10-26"
              }
            },
            "sort": [
              1508976000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:87a6d673-317e-4023-83b9-5650e58f0b64.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Data Governance and Use",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.360402,
                    "lat": 52.005926
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Delft",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:87a6d673-317e-4023-83b9-5650e58f0b64",
                "startDate": "2017-10-31"
              }
            },
            "sort": [
              1509408000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-11-01T00:00:00.000Z",
    "key": 1509494400000,
    "doc_count": 25,
    "top_hits#about.@id": {
      "hits": {
        "total": 25,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c369d8c2-f940-43c0-b01e-ad92a654a35f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Abschlussveranstaltung zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Laatzen)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Laatzen"
                  }
                },
                "@id": "urn:uuid:c369d8c2-f940-43c0-b01e-ad92a654a35f",
                "startDate": "2017-11-01"
              }
            },
            "sort": [
              1509494400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e970ed2b-889d-4755-a69c-dd85fcfe88c4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Tag der Medienkompetenz 2017: Workshop & Themeninsel zu OER",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Convention Center, Deutsche Messe AG, Messegelände",
                    "postalCode": 30521,
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:e970ed2b-889d-4755-a69c-dd85fcfe88c4",
                "startDate": "2017-11-02"
              }
            },
            "sort": [
              1509580800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4dae4008-c7ed-49cb-acf3-4682e6d85bac.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-03",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Großer Workshop: OER suchen, finden & selbst erstellen, Open Access, Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg der Universität Hamburg, Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:4dae4008-c7ed-49cb-acf3-4682e6d85bac",
                "startDate": "2017-11-03"
              }
            },
            "sort": [
              1509667200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f7ff6bd6-8086-44d9-9abb-f0a7d2bf11a8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Disruptive Innovation Festival",
                    "@language": "en"
                  }
                ],
                "@id": "urn:uuid:f7ff6bd6-8086-44d9-9abb-f0a7d2bf11a8",
                "startDate": "2017-11-06"
              }
            },
            "sort": [
              1509926400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:aa853be9-931d-4cfb-88a8-874c75a63bae.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Hochschule: Qualität von Lehr- und Lernmaterialien prüfen und sichern",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:aa853be9-931d-4cfb-88a8-874c75a63bae",
                "startDate": "2017-11-07"
              }
            },
            "sort": [
              1510012800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6921cb5c-e1b8-418f-bbd5-8d62676661e8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Freie Lernmaterialien (OER) barrierefrei erstellen und mit Anderen teilen – Teil 1/2",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:6921cb5c-e1b8-418f-bbd5-8d62676661e8",
                "startDate": "2017-11-07"
              }
            },
            "sort": [
              1510012800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e70042c0-8369-4b25-96ef-8a682e60ec40.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Qualifizierungsworkshops zur Nutzung und Erstellung von OER-Lehr- und Lernmaterialien für studentische eTutor_innen und Multiplikator_innen der akademischen Weiterbildung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.62743,
                    "lat": 51.196755
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Deutschland",
                    "addressLocality": "Online bzw. Ulm",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:e70042c0-8369-4b25-96ef-8a682e60ec40",
                "startDate": "2017-11-08"
              }
            },
            "sort": [
              1510099200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6760fc0e-340b-407f-84c0-fca5b9b26922.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Erwachsenen- und Weiterbildung: Lehr- und Lernmaterialien zusammenstellen und bearbeiten",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:6760fc0e-340b-407f-84c0-fca5b9b26922",
                "startDate": "2017-11-08"
              }
            },
            "sort": [
              1510099200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fc5a4cfe-8e5c-4674-bc5b-5155078276b1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "UNESCO-UNEVOC Virtual Conference on Open Educational Resources in Technical and Vocational Education and Training",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.12758994189452,
                    "lat": 50.71829901707383
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bonn",
                    "postalCode": "53113",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:fc5a4cfe-8e5c-4674-bc5b-5155078276b1",
                "startDate": "2017-11-09"
              }
            },
            "sort": [
              1510185600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c5483994-aed7-4431-a5a7-5285e58ba669.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenCon 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.41377,
                    "lat": 52.5233
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Berlin, Stadt",
                    "addressLocality": "Berlin, Stadt",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:c5483994-aed7-4431-a5a7-5285e58ba669",
                "startDate": "2017-11-11"
              }
            },
            "sort": [
              1510358400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e939b3a0-ad4a-425c-a285-190dc6a89c4d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Barcamp Offene Kommunen.NRW",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.139219,
                    "lat": 51.255522
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Auer Schulstraße 20",
                    "postalCode": "42103",
                    "addressLocality": "Wuppertal-Elberfeld",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:e939b3a0-ad4a-425c-a285-190dc6a89c4d",
                "startDate": "2017-11-11"
              }
            },
            "sort": [
              1510358400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0a962bb2-67d2-440e-b465-8765c06cda28.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Freie Lernmaterialien (OER) barrierefrei erstellen und mit Anderen teilen – Teil 2/2",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:0a962bb2-67d2-440e-b465-8765c06cda28",
                "startDate": "2017-11-14"
              }
            },
            "sort": [
              1510617600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:56a3b87c-e471-4c31-96dd-4103614ee4a8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Ressources - Finden, Nutzen, Verteilen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.648171,
                    "lat": 50.116212
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Varrentrappstraße 40-42",
                    "postalCode": "60486",
                    "addressLocality": "Frankfurt am Main",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:56a3b87c-e471-4c31-96dd-4103614ee4a8",
                "startDate": "2017-11-15"
              }
            },
            "sort": [
              1510704000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c81eb615-7ef7-4867-be83-e7cf7b20c029.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Schulung für das Kompetenzzentrum Lehrerfortbildung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Braunschweig",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:c81eb615-7ef7-4867-be83-e7cf7b20c029",
                "startDate": "2017-11-15"
              }
            },
            "sort": [
              1510704000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3200c08f-4d3b-463e-b999-de68f8023dec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Abschlussveranstaltung zum OER-bMOOC für alle niedersächsischen Volkshochschulen (Oldenburg)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Oldenburg"
                  }
                },
                "@id": "urn:uuid:3200c08f-4d3b-463e-b999-de68f8023dec",
                "startDate": "2017-11-17"
              }
            },
            "sort": [
              1510876800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7392e1c2-8f94-47c8-bce3-660dd9bd9cdf.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "edusprint für #zeitgemäßeBildung",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.946855,
                    "lat": 50.930445
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Headquarters Cologne, Neue Weyerstraße 2",
                    "postalCode": "50676",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:7392e1c2-8f94-47c8-bce3-660dd9bd9cdf",
                "startDate": "2017-11-18"
              }
            },
            "sort": [
              1510963200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9223f41f-8032-4073-accb-c5e06c9d4f6b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Wiesbaden",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.272045,
                    "lat": 50.065789
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "pentahotel, Abraham-Lincoln-Straße 17",
                    "postalCode": "65189",
                    "addressLocality": "Wiesbaden",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:9223f41f-8032-4073-accb-c5e06c9d4f6b",
                "startDate": "2017-11-20"
              }
            },
            "sort": [
              1511136000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:394d9ba8-cd51-4b85-b7e6-431bce428431.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Hamburg",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.004212,
                    "lat": 53.556726
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "ibis Hamburg Alster Centrum Hotel, Holzdamm 4-12+16",
                    "postalCode": "20099",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:394d9ba8-cd51-4b85-b7e6-431bce428431",
                "startDate": "2017-11-20"
              }
            },
            "sort": [
              1511136000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8b9f8fb1-6ad7-4436-a14d-7e0ade4dacf4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "JOINTLY-Webinar zu OER-Rechtsfragen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:8b9f8fb1-6ad7-4436-a14d-7e0ade4dacf4",
                "startDate": "2017-11-21"
              }
            },
            "sort": [
              1511222400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7266804d-f8c9-46d3-bf77-d64c60fed082.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources in der Hochschule: Lehr- und Lernmaterialien rechtssicher verwenden",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:7266804d-f8c9-46d3-bf77-d64c60fed082",
                "startDate": "2017-11-22"
              }
            },
            "sort": [
              1511308800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:079bf48d-0c31-4182-ac25-3c2a5b3a12b6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources (OER) in der Erwachsenen- und Weiterbildung: Qualität von Lehr- und Lernmaterialien prüfen und sichern",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.002806,
                    "lat": 51.465518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45117",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:079bf48d-0c31-4182-ac25-3c2a5b3a12b6",
                "startDate": "2017-11-23"
              }
            },
            "sort": [
              1511395200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0bd7af71-4a06-4cdd-84f4-24587269d1aa.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop „Open Educational Resources (OER) finden und verwenden“ an der Universität Osnabrück",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Osnabrück",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:0bd7af71-4a06-4cdd-84f4-24587269d1aa",
                "startDate": "2017-11-24"
              }
            },
            "sort": [
              1511481600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Festival 2017",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.410474,
                    "lat": 52.53204
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Pfefferwerk, Christinenstraße 18",
                    "postalCode": "10119",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:df9bce84-065f-4014-b028-e317ebc5b133",
                "startDate": "2017-11-27"
              }
            },
            "sort": [
              1511740800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:14dde7eb-eea0-4b93-88de-e940f990b683.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Berlin",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.303242,
                    "lat": 52.514164
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "smile! GbR Telefonservice und Bürodienstleistungen, Gierkezeile 12",
                    "postalCode": "10585",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:14dde7eb-eea0-4b93-88de-e940f990b683",
                "startDate": "2017-11-27"
              }
            },
            "sort": [
              1511740800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7b0c8f88-379c-4103-8154-7177ceeebf43.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-11-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 17 Ost",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.410474,
                    "lat": 52.53204
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Pfefferwerk, Christinenstraße 18",
                    "postalCode": "10119",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:7b0c8f88-379c-4103-8154-7177ceeebf43",
                "startDate": "2017-11-27"
              }
            },
            "sort": [
              1511740800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2017-12-01T00:00:00.000Z",
    "key": 1512086400000,
    "doc_count": 14,
    "top_hits#about.@id": {
      "hits": {
        "total": 14,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:25ba0057-fce5-45de-9368-1b55b36be0eb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Praxis-Workshop für „OER-Macher/innen“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.678845,
                    "lat": 50.549841
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Hotel Arte, Doll 2-4",
                    "postalCode": "36037",
                    "addressLocality": "Fulda",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:25ba0057-fce5-45de-9368-1b55b36be0eb",
                "startDate": "2017-12-01"
              }
            },
            "sort": [
              1512086400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:aa92f01f-3531-4c64-8f37-042108c07e4d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Köln",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.946347,
                    "lat": 50.939518
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Stadthotel am Römerturm, St.-Apern-Straße 32",
                    "postalCode": "50667",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:aa92f01f-3531-4c64-8f37-042108c07e4d",
                "startDate": "2017-12-04"
              }
            },
            "sort": [
              1512345600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e0b4fceb-c14e-4354-9645-df18cfd92fed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Präsenzphase 1",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.62743,
                    "lat": 51.196755
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Deutschland",
                    "addressLocality": "Ulm",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:e0b4fceb-c14e-4354-9645-df18cfd92fed",
                "startDate": "2017-12-04"
              }
            },
            "sort": [
              1512345600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:813a559e-9012-4c95-932f-58805890c784.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "6. OER-Meetup Köln und Umgebung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.964875,
                    "lat": 50.921466
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Technische Hochschule Köln (Campus Südstadt)",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:813a559e-9012-4c95-932f-58805890c784",
                "startDate": "2017-12-04"
              }
            },
            "sort": [
              1512345600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8f0cc84b-00c7-4067-92f4-4c7e10541c98.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Erstellung und Bereitstellung mit WordPress",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.986097,
                    "lat": 53.567952
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätskolleg der Universität Hamburg , Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:8f0cc84b-00c7-4067-92f4-4c7e10541c98",
                "startDate": "2017-12-06"
              }
            },
            "sort": [
              1512518400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b7ba516e-e06b-4aa6-944f-5e6f7603f0c3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Workshop „Materialien aus dem Internet richtig nutzen“ – Nürnberg",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.079384,
                    "lat": 49.44542
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "InterCity Hotel, Eilgutstraße 8",
                    "postalCode": "90443",
                    "addressLocality": "Nürnberg",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:b7ba516e-e06b-4aa6-944f-5e6f7603f0c3",
                "startDate": "2017-12-11"
              }
            },
            "sort": [
              1512950400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ef846cab-66d1-4546-ba81-225992222c19.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop „Open Educational Resources (OER) erstellen“ an der Universität Osnabrück",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Osnabrück",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:ef846cab-66d1-4546-ba81-225992222c19",
                "startDate": "2017-12-11"
              }
            },
            "sort": [
              1512950400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ebd3fe58-b74c-46b0-8254-45b9ff0490c2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-11T12:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop: Open Educational Resources (OER) erstellen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.045764,
                    "lat": 52.270396
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universität Osnabrück",
                    "addressLocality": "Osnabrück",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:ebd3fe58-b74c-46b0-8254-45b9ff0490c2",
                "startDate": "2017-12-11T10:00"
              }
            },
            "sort": [
              1512986400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:27de7c2a-5bb0-4db1-8eb0-b76e434cdd6b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Qualifikation für die Medienbildung der TU Braunschweig",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Braunschweig",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:27de7c2a-5bb0-4db1-8eb0-b76e434cdd6b",
                "startDate": "2017-12-12"
              }
            },
            "sort": [
              1513036800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:06fcbca2-73ee-48dc-ba2d-038c45555a1d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Chancen und Herausforderungen von OER in der wissenschaftlichen Weiterbildung - Netzwerk- und Informationsveranstaltung",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.207559,
                    "lat": 53.142851
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Kulturzentrum PFL",
                    "postalCode": "26121",
                    "addressLocality": "Oldenburg (Oldenburg)",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:06fcbca2-73ee-48dc-ba2d-038c45555a1d",
                "startDate": "2017-12-14"
              }
            },
            "sort": [
              1513209600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:207e90bc-4f2c-4936-9936-eb1adb6ee51f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Transforming Education Conference for Humanity Hyderabad",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 78.373563,
                    "lat": 17.472778
                  },
                  "address": {
                    "addressCountry": "IN",
                    "streetAddress": "Hyderabad International Convention Centre",
                    "addressLocality": "Hyderābād",
                    "addressRegion": "IN.AP"
                  }
                },
                "@id": "urn:uuid:207e90bc-4f2c-4936-9936-eb1adb6ee51f",
                "startDate": "2017-12-17"
              }
            },
            "sort": [
              1513468800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:02fad710-e788-480d-8da7-f3784c8c5dd7.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Schulung für die Hochschuldidaktik (Teach4TU) der TU Braunschweig",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Braunschweig",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:02fad710-e788-480d-8da7-f3784c8c5dd7",
                "startDate": "2017-12-18"
              }
            },
            "sort": [
              1513555200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f92e6440-226f-4cd2-aa07-02c1e4b8a9d0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Kick-Off-Webinar „Materialien aus dem Internet richtig nutzen“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:f92e6440-226f-4cd2-aa07-02c1e4b8a9d0",
                "startDate": "2017-12-19"
              }
            },
            "sort": [
              1513641600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8a8e5c3f-6c6f-4575-a3fd-c49b056aaa3f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2017-12-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER und Medienrecht im Rahmen der Ringvorlesung Medienbildung für Studierende des Bachelor „Bildung, Erziehung und Unterricht“ und Lehramtsstudierende der Universität Osnabrück",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Osnabrück",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:8a8e5c3f-6c6f-4575-a3fd-c49b056aaa3f",
                "startDate": "2017-12-19"
              }
            },
            "sort": [
              1513641600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-01-01T00:00:00.000Z",
    "key": 1514764800000,
    "doc_count": 12,
    "top_hits#about.@id": {
      "hits": {
        "total": 12,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ed80dfe7-5a9b-4924-9b71-a3793694ef25.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Online-Phase „OER-Multiplikator/in“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:ed80dfe7-5a9b-4924-9b71-a3793694ef25",
                "startDate": "2018-01-02"
              }
            },
            "sort": [
              1514851200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:89dad38b-5496-4284-b286-ef7978bc4033.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-08T19:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "7. OER-Meetup Köln (#OERcgn)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.964875,
                    "lat": 50.921466
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 48",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:89dad38b-5496-4284-b286-ef7978bc4033",
                "startDate": "2018-01-08T18:00"
              }
            },
            "sort": [
              1515434400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ca36e39a-3014-4b7f-aec1-19db998215ff.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Rhode Island Open Textbook Initiative Steering Committee Winter Retreat",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -71.40960991130056,
                    "lat": 41.82516301978521
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "15 Westminster",
                    "addressRegion": "US.RI"
                  }
                },
                "@id": "urn:uuid:ca36e39a-3014-4b7f-aec1-19db998215ff",
                "startDate": "2018-01-11"
              }
            },
            "sort": [
              1515628800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:751c2006-4601-4c43-935b-4f7380784dd3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Erste sächsische OER-Tage",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.736604,
                    "lat": 51.028462
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Sächsische Landesbibliothek – Staats- und Universitätsbibliothek Dresden (SLUB), Zellescher Weg 18",
                    "postalCode": "1069",
                    "addressLocality": "Dresden",
                    "addressRegion": "DE.SN"
                  }
                },
                "@id": "urn:uuid:751c2006-4601-4c43-935b-4f7380784dd3",
                "startDate": "2018-01-15"
              }
            },
            "sort": [
              1515974400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8bab8fc3-6e27-4378-b555-ed20639b3e5e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Building your own online course with OERs",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.368897,
                    "lat": 50.835819
                  },
                  "address": {
                    "addressCountry": "BE",
                    "streetAddress": "Brussels",
                    "addressRegion": "BE.BU"
                  }
                },
                "@id": "urn:uuid:8bab8fc3-6e27-4378-b555-ed20639b3e5e",
                "startDate": "2018-01-18"
              }
            },
            "sort": [
              1516233600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2a48b24f-8dd6-46e3-82dd-81b6377802ee.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "1. OER-Fachexperten-Meetup",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.136717,
                    "lat": 50.704055
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "DIE – Deutschen Institut für Erwachsenenbildung, Heinemannstraße 12-14",
                    "postalCode": "53175",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:2a48b24f-8dd6-46e3-82dd-81b6377802ee",
                "startDate": "2018-01-18"
              }
            },
            "sort": [
              1516233600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6a8d8fc2-e07e-4b0f-89f3-05db6a068d48.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Science Forum 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 12.155044,
                    "lat": 49.710814
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Jacob-und-Wilhelm-Grimm-Zentrum, Geschister-Scholl-Straße 3",
                    "postalCode": "10117",
                    "addressLocality": "Berlin"
                  }
                },
                "@id": "urn:uuid:6a8d8fc2-e07e-4b0f-89f3-05db6a068d48",
                "startDate": "2018-01-23"
              }
            },
            "sort": [
              1516665600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0ded121c-cebf-484e-a8c7-bbeece83ff81.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Unterrichtsmaterialien? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:0ded121c-cebf-484e-a8c7-bbeece83ff81",
                "startDate": "2018-01-23"
              }
            },
            "sort": [
              1516665600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:02bb9b86-f112-4999-8e3a-2cc8f4423594.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education und Digital Citizenship",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.297134,
                    "lat": 52.455983
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Institute for Computer Science, Takustraße 9",
                    "postalCode": "14195",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:02bb9b86-f112-4999-8e3a-2cc8f4423594",
                "startDate": "2018-01-24"
              }
            },
            "sort": [
              1516752000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SynLLOER openLab",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.985982,
                    "lat": 53.567997
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:95b81076-89ed-486a-b931-c89b979af451",
                "startDate": "2018-01-25"
              }
            },
            "sort": [
              1516838400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:49b073db-9a3c-485e-b0f1-82d94ff0a36f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshoptagung: Rechtliche Aspekte bei digitalen Forschungsdaten",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Europa-Universität Viadrina, Logenhaus, Logenstr. 11",
                    "postalCode": "15230",
                    "addressLocality": "Frankfurt (Oder)"
                  }
                },
                "@id": "urn:uuid:49b073db-9a3c-485e-b0f1-82d94ff0a36f",
                "startDate": "2018-01-30"
              }
            },
            "sort": [
              1517270400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d6d72664-a15f-4bf9-a94e-11b5d11841e4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-01-30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Erneutes JOINTLY-Webinar zu OER-Rechtsfragen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:d6d72664-a15f-4bf9-a94e-11b5d11841e4",
                "startDate": "2018-01-30"
              }
            },
            "sort": [
              1517270400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-02-01T00:00:00.000Z",
    "key": 1517443200000,
    "doc_count": 18,
    "top_hits#about.@id": {
      "hits": {
        "total": 18,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d2355cf0-919e-4d86-8cb3-09b5a28f5436.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-bMOOC für alle niedersächsischen Volkshochschulen und anerkannten Erwachsenenbildungseinrichtungen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.075962,
                    "lat": 52.8398531
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "online",
                    "addressLocality": "Niedersachsen",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:d2355cf0-919e-4d86-8cb3-09b5a28f5436",
                "startDate": "2018-02"
              }
            },
            "sort": [
              1517443200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f55cb7a2-b9a2-4396-a885-5ce0e160e9c6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste – darf ich das?! Eine Einführung in Urheberrecht und Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung Hamburg, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:f55cb7a2-b9a2-4396-a885-5ce0e160e9c6",
                "startDate": "2018-02-06"
              }
            },
            "sort": [
              1517875200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0b01ad45-4e0a-4762-ac87-afb19e2e523f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen und anerkannten Erwachsenenbildungseinrichtungen (Hannover)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.7385532,
                    "lat": 52.3744779
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:0b01ad45-4e0a-4762-ac87-afb19e2e523f",
                "startDate": "2018-02-12"
              }
            },
            "sort": [
              1518393600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a7711b2e-b184-43ea-98c7-74a711866a7f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER im digitalen Wandel und die praktische Arbeit (Schule)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen"
                  }
                },
                "@id": "urn:uuid:a7711b2e-b184-43ea-98c7-74a711866a7f",
                "startDate": "2018-02-14"
              }
            },
            "sort": [
              1518566400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a93d0b58-6dbb-49f9-b262-8252c52cc32b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "CALL FOR CONTRIBUTION - University goes OER - Offene Bildungsmaterialien an Hochschulen und in der akademischen Weiterbildung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.9932755,
                    "lat": 48.3973944
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Ulm",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:a93d0b58-6dbb-49f9-b262-8252c52cc32b",
                "startDate": "2018-02-16"
              }
            },
            "sort": [
              1518739200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:be0d5841-ad55-486b-8b57-338de62ca641.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen und anerkannten Erwachsenenbildungseinrichtungen (Wolfenbüttel)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.5348215,
                    "lat": 52.1625283
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Wolfenbüttel",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:be0d5841-ad55-486b-8b57-338de62ca641",
                "startDate": "2018-02-19"
              }
            },
            "sort": [
              1518998400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fd083d98-a500-4b39-b416-3f433a44808e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-20",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Digitale Transformation in der Hochschulbildung - E-Learning Meets Bibliothek, Rechenzentrum und Co.",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.675857,
                    "lat": 49.747861
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universität Trier (Campus 2)",
                    "postalCode": "54296",
                    "addressLocality": "Trier",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:fd083d98-a500-4b39-b416-3f433a44808e",
                "startDate": "2018-02-20"
              }
            },
            "sort": [
              1519084800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:512dcb32-0267-44a8-82b1-c24ab5ad3347.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "RI Librarian's Copyright Boot Camp w/ Kyle Courtney",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -71.5371517350434,
                    "lat": 41.92209145
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Douglas Pike 1150",
                    "postalCode": "2917",
                    "addressLocality": "Rhode Island",
                    "addressRegion": "US.RI"
                  }
                },
                "@id": "urn:uuid:512dcb32-0267-44a8-82b1-c24ab5ad3347",
                "startDate": "2018-02-21"
              }
            },
            "sort": [
              1519171200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bfc447a9-6b09-4f5c-92e7-11dfa1f0624e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Präsenztag zum OER-bMOOC für alle niedersächsischen Volkshochschulen und anerkannten Erwachsenenbildungseinrichtungen (Bad Zwischenahn)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.0034877,
                    "lat": 53.185155
                  },
                  "address": {
                    "addressCountry": "DE",
                    "postalCode": "26160",
                    "addressLocality": "Bad Zwischenahn",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:bfc447a9-6b09-4f5c-92e7-11dfa1f0624e",
                "startDate": "2018-02-21"
              }
            },
            "sort": [
              1519171200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:143987f3-2930-4115-b3a5-733cb44c29f0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Wie und wo finde ich frei verwendbare Unterrichtsmaterialien? – CC-Lizenzen und OER-Materialien in der Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966902,
                    "lat": 53.570823
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:143987f3-2930-4115-b3a5-733cb44c29f0",
                "startDate": "2018-02-21"
              }
            },
            "sort": [
              1519171200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2f68ac36-95d2-40b4-84d6-1e561c03b512.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenLab „MS OER – Eine interaktive Bildungsreise zu Urheberrecht & Offenheit\"",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.924913161315924,
                    "lat": 50.9397512446711
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Seminarraum S192 im Triforum, Innere Kanalstraße 15",
                    "postalCode": "50823",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:2f68ac36-95d2-40b4-84d6-1e561c03b512",
                "startDate": "2018-02-22"
              }
            },
            "sort": [
              1519257600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Offenheit, Lizenzen, und der Datenschutz",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.133494080605864,
                    "lat": 54.31963135130184
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Holstenstraße 98",
                    "postalCode": "24103",
                    "addressLocality": "Kiel",
                    "addressRegion": "DE.SH"
                  }
                },
                "@id": "urn:uuid:04163b54-c7ac-4a8f-99c4-1a4f02c0457c",
                "startDate": "2018-02-22"
              }
            },
            "sort": [
              1519257600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3528de77-d214-4e77-8e90-8dc469963890.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Praxis-Workshop für „OER-Macher/innen“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.694267,
                    "lat": 53.833903
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Fachhochschule Lübeck / OnCampus Gmbh, Maria-Goeppert-Straße 9",
                    "postalCode": "23562",
                    "addressLocality": "Lübeck",
                    "addressRegion": "DE.SH"
                  }
                },
                "@id": "urn:uuid:3528de77-d214-4e77-8e90-8dc469963890",
                "startDate": "2018-02-22"
              }
            },
            "sort": [
              1519257600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d3974491-2410-4b65-92e6-2e7195c5f91f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "edusprint Bonn: Ideen+Materialien für zeitgemäße Bildung zusammen entwickeln",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.1198175,
                    "lat": 50.737558
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "BonnLAB, Zingsheimstraße 2",
                    "postalCode": "53225",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:d3974491-2410-4b65-92e6-2e7195c5f91f",
                "startDate": "2018-02-24"
              }
            },
            "sort": [
              1519430400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:23f40792-d2db-4ff4-b56b-f1ef5fd0d9c2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Praxis-Workshop für „OER-Macher/innen“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.729889,
                    "lat": 51.0288
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Technische Universität Dresden – Hörsaalzentrum, Bergstraße 64",
                    "postalCode": "1069",
                    "addressLocality": "Dresden",
                    "addressRegion": "DE.SN"
                  }
                },
                "@id": "urn:uuid:23f40792-d2db-4ff4-b56b-f1ef5fd0d9c2",
                "startDate": "2018-02-26"
              }
            },
            "sort": [
              1519603200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b9a60fc1-50a7-4792-86d8-2280ddb9d711.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Medienkompetenz für die digitale Zivilgesellschaft",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.3303773,
                    "lat": 52.5068396
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Berliner Landeszentrale für politische Bildung, Hardenbergstraße 22-24",
                    "postalCode": "10623",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:b9a60fc1-50a7-4792-86d8-2280ddb9d711",
                "startDate": "2018-02-27"
              }
            },
            "sort": [
              1519689600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:aa6b4fb4-bab4-4c7c-8e4e-72bb5b73f0bd.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Urheberrecht in der Lehre: Grenzen, Möglichkeiten und Open Educational Resources (OER) an der Hochschule Hannover",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.76734593303478,
                    "lat": 52.3554814
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "B ismarckstraße 2",
                    "addressLocality": "Hannover",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:aa6b4fb4-bab4-4c7c-8e4e-72bb5b73f0bd",
                "startDate": "2018-02-28"
              }
            },
            "sort": [
              1519776000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:171a4a2c-2584-4fd1-85c3-19c916202276.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-02-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Urheberrecht in der Lehre: Grenzen, Möglichkeiten und Open Educational Resources (OER)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.7688475,
                    "lat": 52.3558802
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bismarckstraße 2",
                    "postalCode": "30173",
                    "addressLocality": "Hannover",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:171a4a2c-2584-4fd1-85c3-19c916202276",
                "startDate": "2018-02-28"
              }
            },
            "sort": [
              1519776000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-03-01T00:00:00.000Z",
    "key": 1519862400000,
    "doc_count": 21,
    "top_hits#about.@id": {
      "hits": {
        "total": 21,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7b60a0e6-b170-4ff3-9f71-4abe013d1b50.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eQualification 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.4164507938843,
                    "lat": 52.52067985
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "bcc Berlin Congress Center, Alexanderstraße 11",
                    "postalCode": "10178",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:7b60a0e6-b170-4ff3-9f71-4abe013d1b50",
                "startDate": "2018-03-05"
              }
            },
            "sort": [
              1520208000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d8fc61b3-f312-4d4d-8468-aeefc0eafa16.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Week 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US"
                  }
                },
                "@id": "urn:uuid:d8fc61b3-f312-4d4d-8468-aeefc0eafa16",
                "startDate": "2018-03-05"
              }
            },
            "sort": [
              1520208000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1193d2a4-6bb4-4fb1-9f70-7b9fb3a84c45.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Mural UdG",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -103.358993393105,
                    "lat": 20.67439055
                  },
                  "address": {
                    "addressCountry": "MX",
                    "streetAddress": "López Cotilla",
                    "postalCode": "44140",
                    "addressLocality": "Guadalajara",
                    "addressRegion": "MX.JA"
                  }
                },
                "@id": "urn:uuid:1193d2a4-6bb4-4fb1-9f70-7b9fb3a84c45",
                "startDate": "2018-03-05"
              }
            },
            "sort": [
              1520208000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:57b23a95-030f-4bf2-97e8-3457809b8ea6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Zehn Richtungen, um Open Education voran zu bringen. 10 Jahre nach der Cape Town Open Education Declaration",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.4234314,
                    "lat": 52.5195057
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bar Babette, Karl-Marx-Allee 36",
                    "postalCode": "10178",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:57b23a95-030f-4bf2-97e8-3457809b8ea6",
                "startDate": "2018-03-05"
              }
            },
            "sort": [
              1520208000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0c33bc83-19fa-4ecc-b345-38dc6bb09fcc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Praxis-Workshop für „OER-Macher/innen“",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.537016,
                    "lat": 52.21298
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Hannover/Bildungs- und TagungsZentrum HVHS Springe e.V., Kurt-Schumacher-Straße 5",
                    "postalCode": "31832",
                    "addressLocality": "Springe",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:0c33bc83-19fa-4ecc-b345-38dc6bb09fcc",
                "startDate": "2018-03-07"
              }
            },
            "sort": [
              1520380800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:daa3dba0-a5f8-4dda-bcf8-2d8b5cd39e16.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-08",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop Erwachsenenbildung Modul 3. OER im digitalen Wandel und die praktische Arbeit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen"
                  }
                },
                "@id": "urn:uuid:daa3dba0-a5f8-4dda-bcf8-2d8b5cd39e16",
                "startDate": "2018-03-08"
              }
            },
            "sort": [
              1520467200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f05cd458-dd0c-41fb-9ee1-cbb5667746d1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Qualifizierungsworkshops zur Nutzung und Erstellung von OER-Lehr- und Lernmaterialien für studentische eTutor_innen und Multiplikator_innen der akademischen Weiterbildung",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.4234469,
                    "lat": 51.0834196
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Online bzw. Oldenburg/Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:f05cd458-dd0c-41fb-9ee1-cbb5667746d1",
                "startDate": "2018-03-08"
              }
            },
            "sort": [
              1520467200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b2b8a9b7-4290-4243-8582-eefc2f46e1fe.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 1",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Berlin"
                  }
                },
                "@id": "urn:uuid:b2b8a9b7-4290-4243-8582-eefc2f46e1fe",
                "startDate": "2018-03-09"
              }
            },
            "sort": [
              1520553600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a8e5f76c-99cc-4566-b6cf-4ea0072d702c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop: Open Textbook in a Day",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.3698124,
                    "lat": 52.001411
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "Landbergstraat 15",
                    "postalCode": "2628",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:a8e5f76c-99cc-4566-b6cf-4ea0072d702c",
                "startDate": "2018-03-09"
              }
            },
            "sort": [
              1520553600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f647df2a-0145-4a1c-9c77-b5067216c57a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Barcamp Open Science 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.380971,
                    "lat": 52.498413
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Wikimedia, Tempelhofer Ufer 23-24",
                    "postalCode": "10963",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:f647df2a-0145-4a1c-9c77-b5067216c57a",
                "startDate": "2018-03-12"
              }
            },
            "sort": [
              1520812800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:cf8c41cf-5917-4369-9662-33ee51363577.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Präsenzphase 2",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.99159,
                    "lat": 48.39838
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ulm, Universitätsstadt",
                    "addressLocality": "Ulm",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:cf8c41cf-5917-4369-9662-33ee51363577",
                "startDate": "2018-03-12"
              }
            },
            "sort": [
              1520812800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:88046f10-c936-4372-8f65-3d878da9fec3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-12T20:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Webinar „Freie Bildungsmaterialien teilen, finden und nutzen: OER und edutags“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE"
                  }
                },
                "@id": "urn:uuid:88046f10-c936-4372-8f65-3d878da9fec3",
                "startDate": "2018-03-12T19:00"
              }
            },
            "sort": [
              1520881200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2c0727a9-9083-4021-8247-52236b853c5f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Science Conference 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.388718,
                    "lat": 52.519566
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "NH Collection Berlin, Friedrichstraße 96",
                    "postalCode": "10117",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:2c0727a9-9083-4021-8247-52236b853c5f",
                "startDate": "2018-03-13"
              }
            },
            "sort": [
              1520899200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0836db96-7a8b-4cb3-8a45-418672491b98.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Vertiefungsmodul OER und individuelle Konzepterstellung für die Praxis (Schule)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen"
                  }
                },
                "@id": "urn:uuid:0836db96-7a8b-4cb3-8a45-418672491b98",
                "startDate": "2018-03-14"
              }
            },
            "sort": [
              1520985600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:69ac6ef9-1c77-4b69-b47a-548d1684089c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-14T16:00:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Vertiefungsmodul OER und individuelle Konzepterstellung für die Praxis",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.0037251,
                    "lat": 51.4629195
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2   Learning Lab am Campus Essen Raum S06 S00 A46 (im EG)",
                    "postalCode": "45141",
                    "addressLocality": "Essen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:69ac6ef9-1c77-4b69-b47a-548d1684089c",
                "startDate": "2018-03-14T10:00:00"
              }
            },
            "sort": [
              1521021600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7e7a9b31-a011-48c2-a21c-8ef5ab4f99bb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Schulung „Open Educational Resources (OER) für den Unterricht erstellen, finden und verwenden“ für das Kompetenzzentrum Lehrerfortbildung TU Braunschweig",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "TU Braunschweig, Campus Nord, Seminarraum 97.4 (1. OG)",
                    "addressLocality": "Braunschweig"
                  }
                },
                "@id": "urn:uuid:7e7a9b31-a011-48c2-a21c-8ef5ab4f99bb",
                "startDate": "2018-03-15"
              }
            },
            "sort": [
              1521072000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:60e94bad-b6d2-4af3-b73c-ac9677c8409a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop Erwachsenenbildung Modul 3. OER im digitalen Wandel und die praktische Arbeit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen"
                  }
                },
                "@id": "urn:uuid:60e94bad-b6d2-4af3-b73c-ac9677c8409a",
                "startDate": "2018-03-15"
              }
            },
            "sort": [
              1521072000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:a30d5efd-c9dc-45e6-bf0b-9a2cfd2124fc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 1",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Stuttgart"
                  }
                },
                "@id": "urn:uuid:a30d5efd-c9dc-45e6-bf0b-9a2cfd2124fc",
                "startDate": "2018-03-16"
              }
            },
            "sort": [
              1521158400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3a275dd5-dd02-4a5d-8c4e-b112dab6a162.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Copy & Paste – darf ich das?! Eine Einführung in Urheberrecht und Creative Commons",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.966759,
                    "lat": 53.570679
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesinstitut für Lehrerbildung und Schulentwicklung, Felix-Dahn-Straße 3",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:3a275dd5-dd02-4a5d-8c4e-b112dab6a162",
                "startDate": "2018-03-21"
              }
            },
            "sort": [
              1521590400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:626f24b0-77fa-45f9-b179-ede6bcfc1043.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-03-23",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 1",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:626f24b0-77fa-45f9-b179-ede6bcfc1043",
                "startDate": "2018-03-23"
              }
            },
            "sort": [
              1521763200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ed2bccde-5e8c-43b5-a11d-88104a1404c4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER101 - Using Open Educational Resources in Teaching",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.1904984,
                    "lat": 45.4667971
                  },
                  "address": {
                    "addressCountry": "IT",
                    "addressLocality": "Milan",
                    "addressRegion": "IT.MI"
                  }
                },
                "@id": "urn:uuid:ed2bccde-5e8c-43b5-a11d-88104a1404c4",
                "startDate": "2018-03-26"
              }
            },
            "sort": [
              1522022400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-04-01T00:00:00.000Z",
    "key": 1522540800000,
    "doc_count": 14,
    "top_hits#about.@id": {
      "hits": {
        "total": 14,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bca3cf1a-d981-4939-9d40-1fab024a9ec5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Lehrwerkstatt \"Hochschullehre der Zukunft: engagiert, digital, kreativ\"",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.1901140441374,
                    "lat": 48.88878705
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ostenstraße",
                    "postalCode": "85072",
                    "addressLocality": "Bayern",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:bca3cf1a-d981-4939-9d40-1fab024a9ec5",
                "startDate": "2018-04-04"
              }
            },
            "sort": [
              1522800000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:df876d96-c006-4118-98d1-0bc17a83fe3c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER@RLP Abschlussveranstaltung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Johannes Gutenberg-Universität, Atrium Maximum (Alte Mensa), Saarstraße 21",
                    "postalCode": "55122",
                    "addressLocality": "Mainz"
                  }
                },
                "@id": "urn:uuid:df876d96-c006-4118-98d1-0bc17a83fe3c",
                "startDate": "2018-04-09"
              }
            },
            "sort": [
              1523232000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:16c7c1d6-a0a8-49d8-8cb3-c83e07b67677.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Abschlussveranstaltung zum OER-bMOOC für alle niedersächsischen Volkshochschulen und anerkannten Erwachsenenbildungseinrichtungen (Hannover)",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.7385532,
                    "lat": 52.3744779
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:16c7c1d6-a0a8-49d8-8cb3-c83e07b67677",
                "startDate": "2018-04-11"
              }
            },
            "sort": [
              1523404800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b288f8ac-8f4b-4731-b364-156a1c60907a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Vertiefungsmodul OER und individuelle Konzepterstellung für die Praxis",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Universitätsstraße 2",
                    "postalCode": "45141",
                    "addressLocality": "Essen"
                  }
                },
                "@id": "urn:uuid:b288f8ac-8f4b-4731-b364-156a1c60907a",
                "startDate": "2018-04-11"
              }
            },
            "sort": [
              1523404800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e9b244c3-d8b7-46d6-84b3-a87f11fc8d40.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 2",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Berlin"
                  }
                },
                "@id": "urn:uuid:e9b244c3-d8b7-46d6-84b3-a87f11fc8d40",
                "startDate": "2018-04-12"
              }
            },
            "sort": [
              1523491200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3530cfa5-beb0-42db-9014-65ad5c90f347.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-15",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Creative Commons Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -79.38381280277669,
                    "lat": 43.642771440971416
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "Lower Simcoe Street 75",
                    "postalCode": "M5J 3A6",
                    "addressLocality": "Toronto",
                    "addressRegion": "CA.ON"
                  }
                },
                "@id": "urn:uuid:3530cfa5-beb0-42db-9014-65ad5c90f347",
                "startDate": "2018-04-13"
              }
            },
            "sort": [
              1523577600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ccdde7ba-5b49-4402-b522-1d2707c18675.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "SD #GoOpen Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -117.3794834,
                    "lat": 33.1958696
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "1 Pirates Cove Way",
                    "postalCode": "92058",
                    "addressLocality": "Oceanside"
                  }
                },
                "@id": "urn:uuid:ccdde7ba-5b49-4402-b522-1d2707c18675",
                "startDate": "2018-04-13"
              }
            },
            "sort": [
              1523577600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c54efe5f-46ce-42c6-8f70-f7c461b2cb31.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER18: Open to All",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -2.596542711639404,
                    "lat": 51.45489572796052
                  },
                  "address": {
                    "addressCountry": "GB",
                    "streetAddress": "Bristol",
                    "addressLocality": "Bristol",
                    "addressRegion": "GB.BS"
                  }
                },
                "@id": "urn:uuid:c54efe5f-46ce-42c6-8f70-f7c461b2cb31",
                "startDate": "2018-04-18"
              }
            },
            "sort": [
              1524009600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:71963a1c-9f4a-4829-a800-68b147f3867a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 2",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:71963a1c-9f4a-4829-a800-68b147f3867a",
                "startDate": "2018-04-19"
              }
            },
            "sort": [
              1524096000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:61ea1944-ed38-4e33-b028-ad0bbce8df15.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Präsenzphase 1 (eTutOER)",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.4234469,
                    "lat": 51.0834196
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Oldenburg",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:61ea1944-ed38-4e33-b028-ad0bbce8df15",
                "startDate": "2018-04-23"
              }
            },
            "sort": [
              1524441600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:edb4045b-0a1c-4f72-b302-4568d09f36ef.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Global Conference 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 4.373221,
                    "lat": 52.002109
                  },
                  "address": {
                    "addressCountry": "NL",
                    "streetAddress": "TU Delft Aula Conference Centre, 5 Mekelweg",
                    "postalCode": "2628CC",
                    "addressLocality": "Delft",
                    "addressRegion": "NL.ZH"
                  }
                },
                "@id": "urn:uuid:edb4045b-0a1c-4f72-b302-4568d09f36ef",
                "startDate": "2018-04-24"
              }
            },
            "sort": [
              1524528000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:86cc414d-8cc4-4372-83db-6a36a2a857de.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eTutOER - Schulung: Präsenzphase 1 (eTutOER) ",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.4234469,
                    "lat": 51.0834196
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Weimar",
                    "addressRegion": "DE.TH"
                  }
                },
                "@id": "urn:uuid:86cc414d-8cc4-4372-83db-6a36a2a857de",
                "startDate": "2018-04-26"
              }
            },
            "sort": [
              1524700800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8756145e-c361-4537-85bb-bbad9965685b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 2",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Stuttgart"
                  }
                },
                "@id": "urn:uuid:8756145e-c361-4537-85bb-bbad9965685b",
                "startDate": "2018-04-26"
              }
            },
            "sort": [
              1524700800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:6d326b08-e477-4daa-ad2f-af4b2b76c36b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-04-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Day 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.21194909410179,
                    "lat": 47.48188705000001
                  },
                  "address": {
                    "addressCountry": "CH",
                    "streetAddress": "FHNW Brugg-Windisch, Bahnhofstrasse 6",
                    "postalCode": "5210",
                    "addressLocality": "Windisch",
                    "addressRegion": "CH.AG"
                  }
                },
                "@id": "urn:uuid:6d326b08-e477-4daa-ad2f-af4b2b76c36b",
                "startDate": "2018-04-28"
              }
            },
            "sort": [
              1524873600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-05-01T00:00:00.000Z",
    "key": 1525132800000,
    "doc_count": 11,
    "top_hits#about.@id": {
      "hits": {
        "total": 11,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ef252eed-0094-4cad-9b80-3572c6fc3f03.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "University goes OER - Offene Bildungsmaterialien an Hochschulen und in der akademischen Weiterbildung ",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.9932755,
                    "lat": 48.3973944
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Ulm",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:ef252eed-0094-4cad-9b80-3572c6fc3f03",
                "startDate": "2018-05-03"
              }
            },
            "sort": [
              1525305600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:02074fd0-9614-4673-9a12-820a11ad5a2c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-07T19:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Meetup Köln",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.96536772698248,
                    "lat": 50.9214289
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 48",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:02074fd0-9614-4673-9a12-820a11ad5a2c",
                "startDate": "2018-05-07T18:00"
              }
            },
            "sort": [
              1525716000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ac20f7c4-61fa-4e46-817a-7d2cf461e4a3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 Süd",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.5464941,
                    "lat": 48.7481937
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landesakademie für Fortbildung und Personalentwicklung an Schulen in Bad Wildbad, Bätznerstraße 92",
                    "postalCode": "75323",
                    "addressLocality": "Baden-Württemberg",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:ac20f7c4-61fa-4e46-817a-7d2cf461e4a3",
                "startDate": "2018-05-11"
              }
            },
            "sort": [
              1525996800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:27605ab2-855f-45f2-bb4b-94920b5638ae.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 Ost Bad Wildbad",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bätznerstraße 92",
                    "postalCode": "75323",
                    "addressLocality": "Bad Wildbad",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:27605ab2-855f-45f2-bb4b-94920b5638ae",
                "startDate": "2018-05-11"
              }
            },
            "sort": [
              1525996800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3c4f2028-b177-427d-a46a-9987cddc32eb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 3",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:3c4f2028-b177-427d-a46a-9987cddc32eb",
                "startDate": "2018-05-18"
              }
            },
            "sort": [
              1526601600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:09fb0a4a-8875-4748-a0b6-000be2911dee.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "5th Annual Transformative Teaching and Technology Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -88.0673148645724,
                    "lat": 44.44409925
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Grant Street 100",
                    "postalCode": "54115",
                    "addressLocality": "De Pere",
                    "addressRegion": "US.WI"
                  }
                },
                "@id": "urn:uuid:09fb0a4a-8875-4748-a0b6-000be2911dee",
                "startDate": "2018-05-22"
              }
            },
            "sort": [
              1526947200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:78bdc6f4-0268-41c8-b781-acdbb8f3a34d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open for Teachers Introductory Workshop",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 3.3779861,
                    "lat": 6.5062643
                  },
                  "address": {
                    "addressCountry": "NG",
                    "streetAddress": "Herbert Macaulay Way",
                    "postalCode": "YABA",
                    "addressLocality": "Lagos",
                    "addressRegion": "NG.LA"
                  }
                },
                "@id": "urn:uuid:78bdc6f4-0268-41c8-b781-acdbb8f3a34d",
                "startDate": "2018-05-24"
              }
            },
            "sort": [
              1527120000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bfe2f121-17d3-4560-b157-3b5a2bffcdd4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 3",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Stuttgart"
                  }
                },
                "@id": "urn:uuid:bfe2f121-17d3-4560-b157-3b5a2bffcdd4",
                "startDate": "2018-05-25"
              }
            },
            "sort": [
              1527206400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7fd8c4a5-1220-4ace-823f-324882e9d545.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 Ost",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 12.3291505756154,
                    "lat": 51.32986235
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Karl-Heine-Straße 97",
                    "postalCode": "04229",
                    "addressLocality": "Leipzig"
                  }
                },
                "@id": "urn:uuid:7fd8c4a5-1220-4ace-823f-324882e9d545",
                "startDate": "2018-05-25"
              }
            },
            "sort": [
              1527206400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:45519f50-5298-4320-a1ca-74d2e7b6d9b8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 Ost",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 12.3291505756154,
                    "lat": 51.32986235
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "GaraGe, Karl-Heine-Straße 97",
                    "postalCode": "4229",
                    "addressLocality": "Leipzig",
                    "addressRegion": "DE.SN"
                  }
                },
                "@id": "urn:uuid:45519f50-5298-4320-a1ca-74d2e7b6d9b8",
                "startDate": "2018-05-25"
              }
            },
            "sort": [
              1527206400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8d78b313-1e40-4573-99b4-8d95b92a1c1c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-05-31",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop: Grundkenntnisse im Umgang mit OER",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.9867479,
                    "lat": 53.5647588
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schlüterstraße 51",
                    "postalCode": "20146",
                    "addressLocality": "Hamburg"
                  }
                },
                "@id": "urn:uuid:8d78b313-1e40-4573-99b4-8d95b92a1c1c",
                "startDate": "2018-05-31"
              }
            },
            "sort": [
              1527724800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-06-01T00:00:00.000Z",
    "key": 1527811200000,
    "doc_count": 10,
    "top_hits#about.@id": {
      "hits": {
        "total": 10,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:def7377c-b3a0-4bf9-ad9d-2bc03c55c8ca.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 3",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:def7377c-b3a0-4bf9-ad9d-2bc03c55c8ca",
                "startDate": "2018-06-01"
              }
            },
            "sort": [
              1527811200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:eab0a2da-594a-4493-bbb5-9d1a02875d50.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-06",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Forum Open:Education",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.4385964,
                    "lat": 52.5198535
                  },
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Berlin"
                  }
                },
                "@id": "urn:uuid:eab0a2da-594a-4493-bbb5-9d1a02875d50",
                "startDate": "2018-06-06"
              }
            },
            "sort": [
              1528243200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:909740fb-cab1-4112-a210-220bc5ddbbbc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Educational Resources finden, erstellen und erproben",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.949974724792489,
                    "lat": 50.93517135106896
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "VHS Köln, Cäcilienstr. 35",
                    "postalCode": "50667",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:909740fb-cab1-4112-a210-220bc5ddbbbc",
                "startDate": "2018-06-07"
              }
            },
            "sort": [
              1528329600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:65266ebd-1ca9-4e5d-9831-5e01efbb075f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-09",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 West",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.1604226,
                    "lat": 51.3814581
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "DGB Tagungszentrum Hattingen, Am Homberg 44-50",
                    "postalCode": "45529",
                    "addressLocality": "Nordrhein-Westfalen",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:65266ebd-1ca9-4e5d-9831-5e01efbb075f",
                "startDate": "2018-06-08"
              }
            },
            "sort": [
              1528416000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:66a6f5e3-184d-43ce-b4b3-10f3ecaa6b3f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "HOOU AfterwOERk",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.9612198,
                    "lat": 53.5623976
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Schulterblatt 73",
                    "postalCode": "20357",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:66a6f5e3-184d-43ce-b4b3-10f3ecaa6b3f",
                "startDate": "2018-06-14"
              }
            },
            "sort": [
              1528934400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:77a0836a-9626-42c1-8e8b-645b1ba76c27.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 4",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Berlin"
                  }
                },
                "@id": "urn:uuid:77a0836a-9626-42c1-8e8b-645b1ba76c27",
                "startDate": "2018-06-14"
              }
            },
            "sort": [
              1528934400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5c40dc59-6343-4fdc-a6d7-ffbcd8fbb6ae.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OERcamp 2018 Nord",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.070850567984962,
                    "lat": 53.58056296422987
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Eulenkamp 46",
                    "postalCode": "22049",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:5c40dc59-6343-4fdc-a6d7-ffbcd8fbb6ae",
                "startDate": "2018-06-15"
              }
            },
            "sort": [
              1529020800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:00e69169-f889-424e-9ae8-39d062c265cb.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 4",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Hannover"
                  }
                },
                "@id": "urn:uuid:00e69169-f889-424e-9ae8-39d062c265cb",
                "startDate": "2018-06-21"
              }
            },
            "sort": [
              1529539200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:9a95f96e-c2de-4e27-85eb-9b641cffbd79.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Innovation durch Digitalisierung? e-Assessment, OER, Social Learning als Möglichkeit der Gestaltung neuer Formate im Fernstudium ",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.9629295,
                    "lat": 51.2657387
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "DIPLOMA Private Hochschulgesellschaft mbH, Am Hegeberg 2",
                    "postalCode": "37242",
                    "addressLocality": "Deutschland"
                  }
                },
                "@id": "urn:uuid:9a95f96e-c2de-4e27-85eb-9b641cffbd79",
                "startDate": "2018-06-28"
              }
            },
            "sort": [
              1530144000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:467f7746-79e8-45fb-9434-a3de11601073.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-06-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Workshop:  Mediencoaches Modul 4",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Stuttgart"
                  }
                },
                "@id": "urn:uuid:467f7746-79e8-45fb-9434-a3de11601073",
                "startDate": "2018-06-28"
              }
            },
            "sort": [
              1530144000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-07-01T00:00:00.000Z",
    "key": 1530403200000,
    "doc_count": 4,
    "top_hits#about.@id": {
      "hits": {
        "total": 4,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:69f22d20-6b60-4e8a-aaf1-7664ef42d9e3.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Rhode Island Open Textbook Initiative Steering Committee Summer Retreat",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -71.259728,
                    "lat": 41.644933
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Old Ferry Road",
                    "postalCode": "02809",
                    "addressLocality": "Rhode Island",
                    "addressRegion": "US.RI"
                  }
                },
                "@id": "urn:uuid:69f22d20-6b60-4e8a-aaf1-7664ef42d9e3",
                "startDate": "2018-07-11"
              }
            },
            "sort": [
              1531267200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:01a0b0b4-ed23-4a07-98a7-6d51ef34f7ba.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "KickOff edulabs München - offene & zeitgemäße Bildung",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.5551213,
                    "lat": 48.124054
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Münchner Freiwillige – Wir helfen e.V. Tumblingerstraße 50",
                    "postalCode": "80337",
                    "addressLocality": "München",
                    "addressRegion": "DE.BY"
                  }
                },
                "@id": "urn:uuid:01a0b0b4-ed23-4a07-98a7-6d51ef34f7ba",
                "startDate": "2018-07-11"
              }
            },
            "sort": [
              1531267200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:339eb2e4-2eba-4633-97c6-8ab7a2a1d882.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "The MOOQ Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 23.7314254,
                    "lat": 37.9853038
                  },
                  "address": {
                    "addressCountry": "GR",
                    "streetAddress": "Τζωρτζ",
                    "postalCode": "10562",
                    "addressLocality": "Athen",
                    "addressRegion": "GR.AT"
                  }
                },
                "@id": "urn:uuid:339eb2e4-2eba-4633-97c6-8ab7a2a1d882",
                "startDate": "2018-07-13"
              }
            },
            "sort": [
              1531440000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5aa83699-9a62-47f2-99e3-d23f837e69ec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-07-13",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-KA: Freie Bildungsmaterialien in der Hochschullehre",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.3890019,
                    "lat": 49.0151341
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Moltkestraße 30",
                    "postalCode": "76133",
                    "addressLocality": "Karlsruhe",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:5aa83699-9a62-47f2-99e3-d23f837e69ec",
                "startDate": "2018-07-13"
              }
            },
            "sort": [
              1531440000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-08-01T00:00:00.000Z",
    "key": 1533081600000,
    "doc_count": 2,
    "top_hits#about.@id": {
      "hits": {
        "total": 2,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:55c2b26d-af3c-4112-9946-b930d74abfb4.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-08-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "From Vision to Action, on Open Educational Resources (OER) in higher education",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -104.984696,
                    "lat": 39.7391428
                  },
                  "address": {
                    "addressCountry": "US",
                    "addressLocality": "Denver",
                    "addressRegion": "US.CO"
                  }
                },
                "@id": "urn:uuid:55c2b26d-af3c-4112-9946-b930d74abfb4",
                "startDate": "2018-08-01"
              }
            },
            "sort": [
              1533081600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:97befe6b-de12-4ac9-9027-97cc92da8f30.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-08-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER- und IT-Sommercamp 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.3294367,
                    "lat": 50.97352135
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Bauhaus-Factory, Bauhausstraße 7c",
                    "postalCode": "99423",
                    "addressLocality": "Thüringen"
                  }
                },
                "@id": "urn:uuid:97befe6b-de12-4ac9-9027-97cc92da8f30",
                "startDate": "2018-08-27"
              }
            },
            "sort": [
              1535328000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-09-01T00:00:00.000Z",
    "key": 1535760000000,
    "doc_count": 7,
    "top_hits#about.@id": {
      "hits": {
        "total": 7,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c83b1b53-4f90-43a2-bf0f-642b50f9eb78.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "ECER 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 11.3500949895778,
                    "lat": 46.49832335
                  },
                  "address": {
                    "addressCountry": "IT",
                    "streetAddress": "Free University Bolzano, Piazza Università, 1",
                    "postalCode": "39100",
                    "addressLocality": "Bozen",
                    "addressRegion": "IT.BZ"
                  }
                },
                "@id": "urn:uuid:c83b1b53-4f90-43a2-bf0f-642b50f9eb78",
                "startDate": "2018-09-04"
              }
            },
            "sort": [
              1536019200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:8dbf05e0-0815-4a8f-8a19-710a3c214cf1.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "mischen possible! Zeitgemäßer Unterricht mit freien Bildungsmaterialien",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.739250736854075,
                    "lat": 52.37460466941016
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Veranstaltungszentrum Schwanenburg, Zur Schwanenburg 11",
                    "postalCode": "30453",
                    "addressLocality": "Hannover",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:8dbf05e0-0815-4a8f-8a19-710a3c214cf1",
                "startDate": "2018-09-05"
              }
            },
            "sort": [
              1536105600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f365783b-edca-4c75-8b95-4b0d0fdde18a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-10",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Talk  - „Offene Bildungsmaterialien an Hochschulen und wissenschaftlichen Bibliotheken“",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Erwin-Schrödinger-Straße Geb. 57",
                    "postalCode": "67663",
                    "addressLocality": "Kaiserslautern",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:f365783b-edca-4c75-8b95-4b0d0fdde18a",
                "startDate": "2018-09-10"
              }
            },
            "sort": [
              1536537600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c41d4e91-cd96-4626-8c95-80e09af76fa2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-19",
                "@type": "Event",
                "name": [
                  {
                    "@value": "1º Encuentro Nacional de Educación Abierta",
                    "@language": "es"
                  },
                  {
                    "@value": "1st Open Education Meeting",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -56.1913569,
                    "lat": -34.9059039
                  },
                  "address": {
                    "addressCountry": "UY",
                    "addressLocality": "Montevideo",
                    "addressRegion": "UY.MO"
                  }
                },
                "@id": "urn:uuid:c41d4e91-cd96-4626-8c95-80e09af76fa2",
                "startDate": "2018-09-17"
              }
            },
            "sort": [
              1537142400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:58ae4d2c-6375-4123-b8d8-b63c1dbe1023.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-21",
                "@type": "Event",
                "name": [
                  {
                    "@value": "MI OER Summit 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -82.440466,
                    "lat": 42.9815877
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "St. Clair County Community College",
                    "postalCode": "48060",
                    "addressLocality": "Port Huron",
                    "addressRegion": "US.MI"
                  }
                },
                "@id": "urn:uuid:58ae4d2c-6375-4123-b8d8-b63c1dbe1023",
                "startDate": "2018-09-21"
              }
            },
            "sort": [
              1537488000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:25aaf026-2d10-4422-b846-2bdedcae8be0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open-Access-Tage 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 15.4608250740404,
                    "lat": 47.0580995
                  },
                  "address": {
                    "addressCountry": "AT",
                    "streetAddress": "Inffeldgasse 25d",
                    "postalCode": "8010",
                    "addressLocality": "Graz",
                    "addressRegion": "AT.ST"
                  }
                },
                "@id": "urn:uuid:25aaf026-2d10-4422-b846-2bdedcae8be0",
                "startDate": "2018-09-24"
              }
            },
            "sort": [
              1537747200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7451f24b-6e76-4100-84a9-b01cfbf84047.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-09-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "HOOU #AfterwOERk im September: Rohdiamanten für OER",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.0324023,
                    "lat": 53.5693204
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Finkenau 31",
                    "postalCode": "22081",
                    "addressLocality": "Hamburg"
                  }
                },
                "@id": "urn:uuid:7451f24b-6e76-4100-84a9-b01cfbf84047",
                "startDate": "2018-09-25"
              }
            },
            "sort": [
              1537833600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-10-01T00:00:00.000Z",
    "key": 1538352000000,
    "doc_count": 5,
    "top_hits#about.@id": {
      "hits": {
        "total": 5,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:86eff719-586a-4b5d-b7e2-4df2ed3824f9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-10-01",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Inaugural COER International Research Symposium",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.1815078706686,
                    "lat": 53.1468722
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Carl von Ossietzky Universität, Uhlhornsweg 99",
                    "postalCode": "26129",
                    "addressLocality": "Oldenburg",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:86eff719-586a-4b5d-b7e2-4df2ed3824f9",
                "startDate": "2018-10-01"
              }
            },
            "sort": [
              1538352000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c36e0752-f70f-4967-b233-d326da8f9db9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-10-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Southern Symposium",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -94.176095339117,
                    "lat": 36.065152
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Donald W. Reynolds Center, University of Arkansas, North Garland Avenue",
                    "postalCode": "72704",
                    "addressLocality": "Fayetteville",
                    "addressRegion": "US.AR"
                  }
                },
                "@id": "urn:uuid:c36e0752-f70f-4967-b233-d326da8f9db9",
                "startDate": "2018-10-01"
              }
            },
            "sort": [
              1538352000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:4ab5fb18-82ca-4f40-88e3-e097385062ca.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Ralley 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressRegion": "DE.RP"
                  }
                },
                "@id": "urn:uuid:4ab5fb18-82ca-4f40-88e3-e097385062ca",
                "startDate": "2018-10-08"
              }
            },
            "sort": [
              1538956800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:eb049b83-fbda-4c2b-839f-6ef108e52925.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-10-12",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Conference 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "101 Old Falls St,",
                    "addressLocality": "Niagara Falls",
                    "addressRegion": "US.NY"
                  }
                },
                "@id": "urn:uuid:eb049b83-fbda-4c2b-839f-6ef108e52925",
                "startDate": "2018-10-10"
              }
            },
            "sort": [
              1539129600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-10-16",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Policy Forum 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 21.0067265,
                    "lat": 52.2319237
                  },
                  "address": {
                    "addressCountry": "PL",
                    "addressLocality": "Warschau",
                    "addressRegion": "PL.MZ"
                  }
                },
                "@id": "urn:uuid:acf72065-4289-4044-94aa-af9f33d5834d",
                "startDate": "2018-10-15"
              }
            },
            "sort": [
              1539561600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-11-01T00:00:00.000Z",
    "key": 1541030400000,
    "doc_count": 6,
    "top_hits#about.@id": {
      "hits": {
        "total": 6,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:0ecd725b-600d-4ddf-ab92-0e6acb80c7f6.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-02",
                "@type": "Event",
                "name": [
                  {
                    "@value": "ETUG Fall Workshop Just SHARE It!",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -123.133676088199,
                    "lat": 49.2704083
                  },
                  "address": {
                    "addressCountry": "CA",
                    "streetAddress": "Railspur Alley 1440",
                    "postalCode": "V6H",
                    "addressLocality": "Vancouver",
                    "addressRegion": "CA.BC"
                  }
                },
                "@id": "urn:uuid:0ecd725b-600d-4ddf-ab92-0e6acb80c7f6",
                "startDate": "2018-11-02"
              }
            },
            "sort": [
              1541116800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3a85b844-0ab7-4025-a8b0-9548b37ce059.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-05",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Schritt für Schritt zum eigenen OER-Material. Workshop für entwicklungspolitische NROs",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.68453366038355,
                    "lat": 50.1109513
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "3",
                    "postalCode": "60311",
                    "addressLocality": "Frankfurt am Main",
                    "addressRegion": "DE.HE"
                  }
                },
                "@id": "urn:uuid:3a85b844-0ab7-4025-a8b0-9548b37ce059",
                "startDate": "2018-11-05"
              }
            },
            "sort": [
              1541376000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:c7c2515f-ea35-448f-b964-04edb0baa998.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Science - Digitaler Wandel in Forschung und Lehre —  DINI-Jahrestagung 2018",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.53547496661486,
                    "lat": 52.0286248
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Stadthalle Bielefeld, Willy-Brandt-Platz 1",
                    "postalCode": "33602",
                    "addressLocality": "Bielefeld",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:c7c2515f-ea35-448f-b964-04edb0baa998",
                "startDate": "2018-11-06"
              }
            },
            "sort": [
              1541462400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:372e5970-aafa-47c6-b75e-9f08ad0e7a1c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-17",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Offene Bildungsmaterialien (OER) für die Umweltbewegung!",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.3276087,
                    "lat": 52.5108574
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Straße des 17. Juni 135",
                    "postalCode": "10623",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:372e5970-aafa-47c6-b75e-9f08ad0e7a1c",
                "startDate": "2018-11-17T12:00"
              }
            },
            "sort": [
              1542456000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2f0397ac-8c3f-43ae-b82c-d94790f3057b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-24",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Digital Education Day 2018",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.93114703936576,
                    "lat": 50.96559115
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Joseph-DuMont-Berufskolleg, Escher-Straße 217",
                    "postalCode": "50739",
                    "addressLocality": "Köln"
                  }
                },
                "@id": "urn:uuid:2f0397ac-8c3f-43ae-b82c-d94790f3057b",
                "startDate": "2018-11-24"
              }
            },
            "sort": [
              1543017600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f618a45f-8549-4acb-bcaa-e8c1496314b0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-11-28T15:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Offene Bildungsmaterialien (OER): praktischer Nutzen und Anwendungsszenarien in der Hochschullehre",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.9756329,
                    "lat": 49.2329516
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Goebenstraße",
                    "postalCode": "66117",
                    "addressLocality": "Saarbrücken",
                    "addressRegion": "DE.SL"
                  }
                },
                "@id": "urn:uuid:f618a45f-8549-4acb-bcaa-e8c1496314b0",
                "startDate": "2018-11-28T13:30"
              }
            },
            "sort": [
              1543411800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2018-12-01T00:00:00.000Z",
    "key": 1543622400000,
    "doc_count": 4,
    "top_hits#about.@id": {
      "hits": {
        "total": 4,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f67108bc-b723-493c-a0ca-18e3da69e0d0.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-12-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Leadership Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 2.3514992,
                    "lat": 48.8566101
                  },
                  "address": {
                    "addressCountry": "FR",
                    "addressLocality": "Paris",
                    "addressRegion": "FR.VP"
                  }
                },
                "@id": "urn:uuid:f67108bc-b723-493c-a0ca-18e3da69e0d0",
                "startDate": "2018-12-03"
              }
            },
            "sort": [
              1543795200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:da2e5357-4b92-4db9-b6fa-ae1639be107c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-12-03T16:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER-Meetup 13 #OERcgn",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.96536772698248,
                    "lat": 50.9214289
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Ubierring 48",
                    "postalCode": "50678",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:da2e5357-4b92-4db9-b6fa-ae1639be107c",
                "startDate": "2018-12-03T15:00"
              }
            },
            "sort": [
              1543849200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:da60dfc4-a87f-4295-b11b-d83ef017ee0a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-12-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": "9th KMK/BMZ symposium on \"Implementation and further development of the Global Development Orientation Framework",
                    "@language": "en"
                  },
                  {
                    "@value": "9. KMK/BMZ-Fachtagung „Umsetzung und Weiterentwicklung des Orientierungsrahmens Globale Entwicklung“",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.9421013,
                    "lat": 50.9403031
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Magnusstraße 20",
                    "postalCode": "50672",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:da60dfc4-a87f-4295-b11b-d83ef017ee0a",
                "startDate": "2018-12-06"
              }
            },
            "sort": [
              1544054400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:83a08747-e7fe-4d46-b78e-b2d4e7a16b48.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2018-12-16T17:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Webinar: Digital Open Textbooks for Development",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -0.144055090450224,
                    "lat": 51.4893335
                  },
                  "address": {
                    "addressCountry": "GB",
                    "addressLocality": "England"
                  }
                },
                "@id": "urn:uuid:83a08747-e7fe-4d46-b78e-b2d4e7a16b48",
                "startDate": "2018-12-16T16:00"
              }
            },
            "sort": [
              1544976000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-01-01T00:00:00.000Z",
    "key": 1546300800000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:183e54b7-2324-45b7-bd54-148cc24eac2c.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-01-16T03:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Rhode Island Open Textbook Initiative Steering Committee Winter Retreat",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "Harborside Blvd",
                    "postalCode": "02905",
                    "addressRegion": "US.RI"
                  }
                },
                "@id": "urn:uuid:183e54b7-2324-45b7-bd54-148cc24eac2c",
                "startDate": "2019-01-16T09:00"
              }
            },
            "sort": [
              1547629200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7bfe09c5-9d77-448f-929c-903d591293e7.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-01-29",
                "@type": "Event",
                "name": [
                  {
                    "@value": "International Conference OER 2019",
                    "@language": "en"
                  },
                  {
                    "@value": "Internationale Konferenz zu OER 2019",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.3054682,
                    "lat": 47.0505452
                  },
                  "address": {
                    "addressCountry": "CH",
                    "streetAddress": "Frohburgstrasse 3",
                    "postalCode": "6002",
                    "addressLocality": "Luzern",
                    "addressRegion": "CH.LU"
                  }
                },
                "@id": "urn:uuid:7bfe09c5-9d77-448f-929c-903d591293e7",
                "startDate": "2019-01-28"
              }
            },
            "sort": [
              1548633600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3c675220-0fd7-40c8-be02-57d79907fb74.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-01-30T20:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "HOOU #AfterwOERk im Januar. Games in der Bildung / spielerisch lernen",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.0324023,
                    "lat": 53.5693204
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Games Lab, Finkenau 31",
                    "postalCode": "22081",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:3c675220-0fd7-40c8-be02-57d79907fb74",
                "startDate": "2019-01-30T18:30"
              }
            },
            "sort": [
              1548873000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-02-01T00:00:00.000Z",
    "key": 1548979200000,
    "doc_count": 6,
    "top_hits#about.@id": {
      "hits": {
        "total": 6,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e8eb9954-ba85-4b65-b60d-f6ca093852ed.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Oficina: ",
                    "@language": "pt"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -45.4485944999999,
                    "lat": -22.418427338722168
                  },
                  "address": {
                    "addressCountry": "BR",
                    "streetAddress": "Avenida BPS 1303",
                    "postalCode": "37500-903",
                    "addressLocality": "Minas Gerais",
                    "addressRegion": "BR.MG"
                  }
                },
                "@id": "urn:uuid:e8eb9954-ba85-4b65-b60d-f6ca093852ed",
                "startDate": "2019-02-15T13:30"
              }
            },
            "sort": [
              1550237400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5a85d2bc-e7ad-4354-8a5e-8413dd48849d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-19T17:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "NEXTLEARN",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Nürnberger Str. 50-55",
                    "postalCode": "10789",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:5a85d2bc-e7ad-4354-8a5e-8413dd48849d",
                "startDate": "2019-02-19T09:00"
              }
            },
            "sort": [
              1550566800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5af5f4f2-c60f-4ea5-836b-d8898509d15b.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-21T13:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Podiumsdiskussion: Ist eine öffentliche Förderung von OER in der betrieblichen  Aus- und Weiterbildung von Nöten?",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.97974657500542,
                    "lat": 50.9457565
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Deutz-Mülheimer Straße",
                    "postalCode": "50679",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:5af5f4f2-c60f-4ea5-836b-d8898509d15b",
                "startDate": "2019-02-21T12:30"
              }
            },
            "sort": [
              1550752200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:2e225043-83ac-4ac1-bf51-15fc19ead18d.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-22T12:45",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Slam und Podiumsdiskussion: (Weiter-)Bildung öffnen - Offene Bildungsmaterialien in der Praxis",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 6.98393976647583,
                    "lat": 50.9482698
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "1",
                    "postalCode": "50679",
                    "addressLocality": "Köln",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:2e225043-83ac-4ac1-bf51-15fc19ead18d",
                "startDate": "2019-02-22T12:00"
              }
            },
            "sort": [
              1550836800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bbae0cbc-e6bc-4736-a46b-89c04c0435ec.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-26",
                "@type": "Event",
                "name": [
                  {
                    "@value": "eQualification",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.12322466980688,
                    "lat": 50.7191307
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Platz der Vereinten Nationen",
                    "postalCode": "53113",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:bbae0cbc-e6bc-4736-a46b-89c04c0435ec",
                "startDate": "2019-02-25"
              }
            },
            "sort": [
              1551052800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:d9764568-1cb0-4bb7-950f-55ea69fab345.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-02-27",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Inverted Classroom-Konferenz - The Next Stage",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.7785422,
                    "lat": 50.8139979
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Philipps-Universität Marburg, Wilhelm-Röpke-Straße 6d",
                    "postalCode": "35039",
                    "addressLocality": "Marburg"
                  }
                },
                "@id": "urn:uuid:d9764568-1cb0-4bb7-950f-55ea69fab345",
                "startDate": "2019-02-26"
              }
            },
            "sort": [
              1551139200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-03-01T00:00:00.000Z",
    "key": 1551398400000,
    "doc_count": 9,
    "top_hits#about.@id": {
      "hits": {
        "total": 9,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:902fb8b3-961a-4396-b9f6-b8ce55d5d0e9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-04T17:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Neural Machine Translation 4 OER. Cracking the language barrier for OER and open education",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "GB"
                  }
                },
                "@id": "urn:uuid:902fb8b3-961a-4396-b9f6-b8ce55d5d0e9",
                "startDate": "2019-03-04T17:00"
              }
            },
            "sort": [
              1551718800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:22c5a15b-0cc1-4b25-aebe-d0b8129c77b2.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Using OER data and AI services - convergence among OER sites offers unprecedented opportunities",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "GB"
                  }
                },
                "@id": "urn:uuid:22c5a15b-0cc1-4b25-aebe-d0b8129c77b2",
                "startDate": "2019-03-04T18:00"
              }
            },
            "sort": [
              1551722400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3adb3e13-756d-4d61-aece-2b25c6961918.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-05T13:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Die Nutzung offener Bildungsressourcen (OER) in der Hochschule: Stand und Perspektiven",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Goebenstr. 40, Campus Alt-Saarbrücken, Raum 10.00.02",
                    "postalCode": " 66117",
                    "addressLocality": "Saarbrücken",
                    "addressRegion": "DE.SL"
                  }
                },
                "@id": "urn:uuid:3adb3e13-756d-4d61-aece-2b25c6961918",
                "startDate": "2019-03-05T09:00"
              }
            },
            "sort": [
              1551776400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:022f995e-d7f0-46a4-9ee5-471791a7d108.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-07T18:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Materialien aus dem Internet in der Lehre rechtssicher nutzen ",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Goebenstr. 40, Campus Alt-Saarbrücken, Raum 10.00.02 ",
                    "postalCode": "66117",
                    "addressLocality": "Saarbrücken",
                    "addressRegion": "DE.SL"
                  }
                },
                "@id": "urn:uuid:022f995e-d7f0-46a4-9ee5-471791a7d108",
                "startDate": "2019-03-06T09:00"
              }
            },
            "sort": [
              1551862800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5067795f-6a86-40d9-865a-5c61401af49a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-07T20:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "HOOU #AfterwOERk im März. Nachhaltigkeit und E-Mobilty",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 10.0324023,
                    "lat": 53.5693204
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Finkenau 31",
                    "postalCode": "22081",
                    "addressLocality": "Hamburg",
                    "addressRegion": "DE.HH"
                  }
                },
                "@id": "urn:uuid:5067795f-6a86-40d9-865a-5c61401af49a",
                "startDate": "2019-03-07T18:30"
              }
            },
            "sort": [
              1551983400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:83cdcbf8-159d-452c-b1cd-c7371f57ee77.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-14",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Workshop on Sustainability of Open Educational Resources",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.044241299606227,
                    "lat": 52.27163072516976
                  },
                  "address": {
                    "addressCountry": "DE",
                    "postalCode": "49504",
                    "addressLocality": "Osnabrück",
                    "addressRegion": "DE.NI"
                  }
                },
                "@id": "urn:uuid:83cdcbf8-159d-452c-b1cd-c7371f57ee77",
                "startDate": "2019-03-12"
              }
            },
            "sort": [
              1552348800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:805ab624-dcda-46c5-96a4-f31ec411468a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Oficina de REA para técnicos do CEAD-UnB",
                    "@language": "pt"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "BR",
                    "addressRegion": "BR.DF"
                  }
                },
                "@id": "urn:uuid:805ab624-dcda-46c5-96a4-f31ec411468a",
                "startDate": "2019-03-22"
              }
            },
            "sort": [
              1553212800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1700bd32-a64e-4be3-aa3f-fafb149e2a0e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-03-28T17:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Teilen?! - Lehrmaterial nutzen, anpassen und tauschen - Tag der Lehre 2019 an der DHBW Karlsruhe",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 8.385331,
                    "lat": 49.0263916
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Audimax, DHBW Karlsruhe, Erzbergerstraße 121",
                    "postalCode": "76133",
                    "addressLocality": "Karlsruhe",
                    "addressRegion": "DE.BW"
                  }
                },
                "@id": "urn:uuid:1700bd32-a64e-4be3-aa3f-fafb149e2a0e",
                "startDate": "2019-03-28T10:00"
              }
            },
            "sort": [
              1553767200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:af927952-0194-4ff2-8bd8-9343e149f0e9.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-05T22:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Curso de Formação Inicial em REA (UFMS)",
                    "@language": "pt"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -54.6135331151763,
                    "lat": -20.5045581
                  },
                  "address": {
                    "addressCountry": "BR",
                    "streetAddress": "Avenida Senador Antônio Mendes Canale",
                    "postalCode": "79070-900",
                    "addressLocality": "Campo Grande"
                  }
                },
                "@id": "urn:uuid:af927952-0194-4ff2-8bd8-9343e149f0e9",
                "startDate": "2019-03-29T13:00"
              }
            },
            "sort": [
              1553864400000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-04-01T00:00:00.000Z",
    "key": 1554076800000,
    "doc_count": 7,
    "top_hits#about.@id": {
      "hits": {
        "total": 7,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:f56b5ffb-90a7-4af1-8be3-7d5de522c327.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-05T16:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Digital und Teilbar - Lehren und Lernen mit offenen Bildungsmaterialien",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.13902464465688,
                    "lat": 50.7069051
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Robert-Schuman-Platz 3",
                    "postalCode": "53175",
                    "addressLocality": "Bonn",
                    "addressRegion": "DE.NW"
                  }
                },
                "@id": "urn:uuid:f56b5ffb-90a7-4af1-8be3-7d5de522c327",
                "startDate": "2019-04-05T10:00"
              }
            },
            "sort": [
              1554458400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:fc07a39b-78e3-440b-ba9a-a2cc3049194a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-06T17:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Day",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 7.42233608943152,
                    "lat": 46.95315875
                  },
                  "address": {
                    "addressCountry": "CH",
                    "postalCode": "3012",
                    "addressLocality": "Bern",
                    "addressRegion": "CH.BE"
                  }
                },
                "@id": "urn:uuid:fc07a39b-78e3-440b-ba9a-a2cc3049194a",
                "startDate": "2019-04-06T09:15"
              }
            },
            "sort": [
              1554542100000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:e9854e6d-be3d-4ef0-93e4-c3bc01fab07f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-09T16:30",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER Policy Lab @OER19",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -9.06226384917072,
                    "lat": 53.2796576
                  },
                  "address": {
                    "addressCountry": "IE",
                    "streetAddress": "Lower Newcastle Road",
                    "postalCode": "H91 E1NY",
                    "addressLocality": "Galway City",
                    "addressRegion": "IE.GY"
                  }
                },
                "@id": "urn:uuid:e9854e6d-be3d-4ef0-93e4-c3bc01fab07f",
                "startDate": "2019-04-09T10:00"
              }
            },
            "sort": [
              1554804000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5bc302ed-9550-4c74-82b8-0536dc6132b5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OER19 Recentering open: Critical and global perspectives",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -9.059963,
                    "lat": 53.2761205
                  },
                  "address": {
                    "addressCountry": "IE",
                    "streetAddress": "University Road",
                    "postalCode": "H91 E1NY",
                    "addressLocality": "Galway City",
                    "addressRegion": "IE.GY"
                  }
                },
                "@id": "urn:uuid:5bc302ed-9550-4c74-82b8-0536dc6132b5",
                "startDate": "2019-04-10"
              }
            },
            "sort": [
              1554854400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:bf65da5f-14dd-471c-8e96-db6510bd5dbc.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-12T06:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "International Medicine, Nursing and Healthcare Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "AE",
                    "streetAddress": "Yas Islands",
                    "postalCode": "00000",
                    "addressRegion": "AE.AZ"
                  }
                },
                "@id": "urn:uuid:bf65da5f-14dd-471c-8e96-db6510bd5dbc",
                "startDate": "2019-04-11T09:00"
              }
            },
            "sort": [
              1554973200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:ee78777b-a061-40b3-bea2-3e2dc68f753a.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-12T06:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "International Pediatrics, Nursing and Healthcare Conference",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "AE",
                    "streetAddress": "Yas Islands",
                    "postalCode": "00000",
                    "addressRegion": "AE.AZ"
                  }
                },
                "@id": "urn:uuid:ee78777b-a061-40b3-bea2-3e2dc68f753a",
                "startDate": "2019-04-11T09:00"
              }
            },
            "sort": [
              1554973200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:b30fe759-6e83-4ba7-b27d-4ff9d160cabf.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-04-18",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Cascadia Open Education Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -123.12330844504226,
                    "lat": 49.270084055298554
                  },
                  "address": {
                    "addressCountry": "CA",
                    "addressLocality": "Vancouver",
                    "addressRegion": "CA.BC"
                  }
                },
                "@id": "urn:uuid:b30fe759-6e83-4ba7-b27d-4ff9d160cabf",
                "startDate": "2019-04-17"
              }
            },
            "sort": [
              1555459200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-05-01T00:00:00.000Z",
    "key": 1556668800000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:43c7e011-1816-4455-b618-569076cddd03.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-05-04",
                "@type": "Event",
                "name": [
                  {
                    "@value": "edunautika",
                    "@language": "en"
                  }
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
                "startDate": "2019-05-03"
              }
            },
            "sort": [
              1556841600000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3196709f-c7c3-408d-9990-9a70bf5c547f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-05-07",
                "@type": "Event",
                "name": [
                  {
                    "@value": " OER-/IT-Frühjahrscamp 2019",
                    "@language": "en"
                  }
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
                "startDate": "2019-05-06"
              }
            },
            "sort": [
              1557100800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:3105b2a3-664b-4151-9329-97985371bd1f.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-05-11",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Creative Commons Global Summit",
                    "@language": "en"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "PT"
                  }
                },
                "@id": "urn:uuid:3105b2a3-664b-4151-9329-97985371bd1f",
                "startDate": "2019-05-09"
              }
            },
            "sort": [
              1557360000000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-06-01T00:00:00.000Z",
    "key": 1559347200000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:524e0cfa-a7b4-40c5-aa6b-2d88b05688fd.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-06-14",
                "@type": "Event",
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
                "startDate": "2019-06-13"
              }
            },
            "sort": [
              1560384000000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5125c7df-dbb3-401b-bd43-1da6e9adc1de.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-06-25T16:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Die Suche nach Qualität bei OER - Ein Austausch mit allen Bildungsbereichen!",
                    "@language": "de"
                  }
                ],
                "location": {
                  "address": {
                    "addressCountry": "DE",
                    "addressLocality": "Internet"
                  }
                },
                "@id": "urn:uuid:5125c7df-dbb3-401b-bd43-1da6e9adc1de",
                "startDate": "2019-06-25T15:00"
              }
            },
            "sort": [
              1561474800000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:93310262-c6d8-4ec4-86be-1c13363c3e2e.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-06-26T21:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Forum Open:Education 2019",
                    "@language": "de"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.3806021,
                    "lat": 52.5183956
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Wilhelmstraße 67",
                    "postalCode": "10117",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:93310262-c6d8-4ec4-86be-1c13363c3e2e",
                "startDate": "2019-06-26T15:00"
              }
            },
            "sort": [
              1561561200000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-09-01T00:00:00.000Z",
    "key": 1567296000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:08d08c8b-b825-4fda-8c6f-59640ee45d06.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-09-11T18:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "6th World Conference on Climate Change",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 13.3489328119938,
                    "lat": 52.50421305
                  },
                  "address": {
                    "addressCountry": "DE",
                    "streetAddress": "Landgrafenstraße 4",
                    "postalCode": "10787",
                    "addressLocality": "Berlin",
                    "addressRegion": "DE.BE"
                  }
                },
                "@id": "urn:uuid:08d08c8b-b825-4fda-8c6f-59640ee45d06",
                "startDate": "2019-09-09T09:00"
              }
            },
            "sort": [
              1568019600000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-10-01T00:00:00.000Z",
    "key": 1569888000000,
    "doc_count": 1,
    "top_hits#about.@id": {
      "hits": {
        "total": 1,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:7d8b998b-8d45-48ef-9a52-bf5e000197e5.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-10-25",
                "@type": "Event",
                "name": [
                  {
                    "@value": "14th International Conference & Exhibition on ICT for Education, Training & Skills Development",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -4.0115716,
                    "lat": 5.3312728
                  },
                  "address": {
                    "addressCountry": "CI",
                    "streetAddress": "Boulevard Hassan II",
                    "postalCode": "08 BP 753 ABIDJAN 08",
                    "addressLocality": "Abidjan "
                  }
                },
                "@id": "urn:uuid:7d8b998b-8d45-48ef-9a52-bf5e000197e5",
                "startDate": "2019-10-23"
              }
            },
            "sort": [
              1571788800000
            ]
          }
        ]
      }
    }
  },
  {
    "key_as_string": "2019-11-01T00:00:00.000Z",
    "key": 1572566400000,
    "doc_count": 3,
    "top_hits#about.@id": {
      "hits": {
        "total": 3,
        "max_score": null,
        "hits": [
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:5178c708-026e-4417-93a3-f18b89d2c5b8.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-11-08T18:00",
                "@type": "Event",
                "name": [
                  {
                    "@value": "3rd International conference on Mental Health",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": -87.6244212,
                    "lat": 41.8755616
                  },
                  "address": {
                    "addressCountry": "US",
                    "streetAddress": "2nd loop street",
                    "postalCode": "60630",
                    "addressLocality": "Chicago",
                    "addressRegion": "US.IL"
                  }
                },
                "@id": "urn:uuid:5178c708-026e-4417-93a3-f18b89d2c5b8",
                "startDate": "2019-11-07T09:00"
              }
            },
            "sort": [
              1573117200000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:dcfd0fbc-a5ba-4764-8430-2c127a11e873.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-11-22",
                "@type": "Event",
                "name": [
                  {
                    "@value": "OpenEdTech Festival",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 2.1774322,
                    "lat": 41.3828939
                  },
                  "address": {
                    "addressCountry": "ES",
                    "addressLocality": "Barcelona",
                    "addressRegion": "ES.CT"
                  }
                },
                "@id": "urn:uuid:dcfd0fbc-a5ba-4764-8430-2c127a11e873",
                "startDate": "2019-11-21"
              }
            },
            "sort": [
              1574294400000
            ]
          },
          {
            "_index": "oerwm",
            "_type": "WebPage",
            "_id": "urn:uuid:1d24d136-1826-4d44-839f-3ee16cf62792.about",
            "_score": null,
            "_source": {
              "about": {
                "endDate": "2019-11-28",
                "@type": "Event",
                "name": [
                  {
                    "@value": "Open Education Global Conference 2019",
                    "@language": "en"
                  }
                ],
                "location": {
                  "geo": {
                    "lon": 9.227276,
                    "lat": 45.4777056
                  },
                  "address": {
                    "addressCountry": "IT",
                    "streetAddress": "32 Piazza Leonardo da Vinci",
                    "postalCode": "20133",
                    "addressLocality": "Milan",
                    "addressRegion": "IT.MI"
                  }
                },
                "@id": "urn:uuid:1d24d136-1826-4d44-839f-3ee16cf62792",
                "startDate": "2019-11-26"
              }
            },
            "sort": [
              1574726400000
            ]
          }
        ]
      }
    }
  }
]

// storiesOf('Calendar', module)
//   .add('Render', () => (
//     <WithStrings lang="en">
//       <Calendar
//         entries={entries}
//       />
//     </WithStrings>
//   ))

// DETELE AFTER
storiesOf('aaa', module)
  .add("Render", () => <div>AAA</div>)

