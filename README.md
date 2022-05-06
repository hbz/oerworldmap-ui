# oerworldmap-ui
The user interface for https://oerworldmap.org/

## Prerequisits

- git
- Node >=12.16.0

## Installation

Clone this repository:
```
$ git clone https://github.com/hbz/oerworldmap-ui.git
$ cd oerworldmap-ui
```

Install node packages:
```
$ npm install
```

Set up environment:
```
$ cp .env.example .env
Open .env in the editor of your choice and configure as follows:

SERVER_HOST=localhost
SERVER_PORT=3000
MAPBOX_ACCESS_TOKEN=your.mapbox.access.token
MAPBOX_STYLE=username/style_id
API_HOST=https://oerworldmap.org
API_PORT=443
API_SCHEME=http
PIWIK_ID=your.piwik.id
PIWIK_URL=your.piwik.url
```

Check if all is well and run:
```
$ npm test
$ npm run build:dev
& npm run server:dev
```

Add url to `/etc/hosts`

```
127.0.0.1 oerworldmap.local
```

Visit http://oerworldmap.local/resource/


## Tests

To run all tests

```
npm test
```

To run a single test the description tag of the test must be passed to the npm script

```
npm run singleTest -- "<ActionButtons />"
```

## Statistics

Statistics are based on Elasticsearch [term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/search-aggregations-bucket-terms-aggregation.html). Such an aggregation defines `buckets` which contain the values found in a certain field along with the amount of documents for which the specified field has that value. The field is the only required parameter when using the `/stats` endpoint:

    $ curl https://oerworldmap.org/stats?field=about.location.address.addressCountry

The above will deliver an SVG pie chart with the slices referring to the country of the location of entries on the OER World Map, the size of the slices depending on the amount of entries for the respective country. By default, the ten largest slices are shown. You can override this by setting the `size` parameter:

    $ curl https://oerworldmap.org/stats?field=about.location.address.addressCountry&size=200

It is possible to limit the entries that are aggregated by providing filter parameters such as those that you will see in the URL when using the filter section in the OER World Map UI. For example, you could aggregate only services by country as follows:

    $ curl https://oerworldmap.org/stats?field=about.location.address.addressCountry&filter.about.@type=%22Service%22

If needed, you can use [Query String Queries](https://www.elastic.co/guide/en/elasticsearch/reference/6.2/query-dsl-query-string-query.html) in the `q` parameter along with or instead of explicit filter parameters. To aggregate all types except services for countries, you could exclude services by using `NOT`:

    $ curl https://oerworldmap.org/stats?field=about.location.address.addressCountry&q=NOT%20about.@type:Service

Finally, you can provide a `subField` parameter to generate stacked bar charts. The following chart shows a bar for each country, the size depending on the total number of entries for each country. Each bar is divided into sections according to the amount of entries for each data type:

    $ curl https://oerworldmap.org/stats?field=about.location.address.addressCountry&subField=about.@type

Of course you can also use `filter` and/or `q` parameters with stacked bar charts.
