import React from 'react'
import { storiesOf } from '@storybook/react'

import DropdownFilter from '../src/components/DropdownFilter'
import WithStrings from './WithStrings'

const buckets = [
  {
    "key": "AR",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Organization",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "AU",
    "doc_count": 2,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Action",
          "doc_count": 1
        },
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "AT",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "BD",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "BE",
    "doc_count": 2,
    "filter#champions": {
      "doc_count": 1
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Organization",
          "doc_count": 1
        },
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "CA",
    "doc_count": 5,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 2
        },
        {
          "key": "Person",
          "doc_count": 2
        },
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "CO",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 1
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "DE",
    "doc_count": 141,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Event",
          "doc_count": 102
        },
        {
          "key": "Person",
          "doc_count": 15
        },
        {
          "key": "WebPage",
          "doc_count": 9
        },
        {
          "key": "Action",
          "doc_count": 6
        },
        {
          "key": "Service",
          "doc_count": 4
        },
        {
          "key": "Organization",
          "doc_count": 3
        },
        {
          "key": "Article",
          "doc_count": 1
        },
        {
          "key": "Policy",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "IN",
    "doc_count": 3,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 2
        },
        {
          "key": "Organization",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "IE",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "IT",
    "doc_count": 8,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Action",
          "doc_count": 6
        },
        {
          "key": "Organization",
          "doc_count": 1
        },
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "KE",
    "doc_count": 2,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 1
        },
        {
          "key": "Policy",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "LY",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "MX",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "MN",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "NL",
    "doc_count": 3,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Organization",
          "doc_count": 1
        },
        {
          "key": "Person",
          "doc_count": 1
        },
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "NG",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Event",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "NO",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Action",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "PL",
    "doc_count": 2,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Action",
          "doc_count": 1
        },
        {
          "key": "Organization",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "RU",
    "doc_count": 1,
    "filter#champions": {
      "doc_count": 1
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "ZA",
    "doc_count": 3,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Action",
          "doc_count": 1
        },
        {
          "key": "Article",
          "doc_count": 1
        },
        {
          "key": "Organization",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "ES",
    "doc_count": 4,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 2
        },
        {
          "key": "Service",
          "doc_count": 2
        }
      ]
    }
  },
  {
    "key": "SE",
    "doc_count": 2,
    "filter#champions": {
      "doc_count": 1
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Person",
          "doc_count": 1
        },
        {
          "key": "Service",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "GB",
    "doc_count": 12,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 3
        },
        {
          "key": "Event",
          "doc_count": 3
        },
        {
          "key": "Action",
          "doc_count": 2
        },
        {
          "key": "Person",
          "doc_count": 2
        },
        {
          "key": "Organization",
          "doc_count": 1
        },
        {
          "key": "WebPage",
          "doc_count": 1
        }
      ]
    }
  },
  {
    "key": "US",
    "doc_count": 26,
    "filter#champions": {
      "doc_count": 0
    },
    "sterms#by_type": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "Article",
          "doc_count": 6
        },
        {
          "key": "Policy",
          "doc_count": 5
        },
        {
          "key": "Person",
          "doc_count": 4
        },
        {
          "key": "Service",
          "doc_count": 4
        },
        {
          "key": "Action",
          "doc_count": 3
        },
        {
          "key": "Event",
          "doc_count": 3
        },
        {
          "key": "Organization",
          "doc_count": 1
        }
      ]
    }
  }
]

storiesOf('DropdownFilter', module)
  .add('Render', () => (
    <WithStrings lang="en">
      <DropdownFilter
        buckets={buckets}
        filter={[]}
        filterName="filter.feature.properties.location.address.addressCountry"
        translateItems={(foo) => foo}
        icon="globe"
        submit={() => {}}
      />
    </WithStrings>
  ))