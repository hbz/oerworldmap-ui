/* global Headers */
const fetch = require('isomorphic-fetch')
const jsdom = require('jsdom')
const {
  select, scaleOrdinal, pie, arc, stack, scaleBand, scaleLinear, max, axisBottom, axisLeft,
} = require('d3')
const { types } = require('../common')

const { JSDOM } = jsdom

const d3 = {
  select, scaleOrdinal, pie, arc, stack, scaleBand, scaleLinear, max, axisBottom, axisLeft,
}

const colors = [
  '#3770B8',
  '#00A3CB',
  '#00D4BB',
  '#6CFB98',
  '#F5FF81',
  '#F6D948',
  '#F6A008',
  '#EF5E00',
  '#E20001',
  '#6822A9',
  '#C0383A',
  '#09783F',
]

const createQuery = ({
  field, q, subField, size, subSize, include, subInclude, filters = [],
}) => {
  const query = {
    size: 0,
    query: {
      bool: {
        filter: [
          {
            terms: {
              'about.@type': types,
            },
          },
        ],
      },
    },
    aggs: {
      results: {
        terms: {
          field,
          size: size || 10,
        },
      },
    },
  }

  filters.forEach(([field, value]) => {
    query.query.bool.filter.push({
      terms: {
        [field]: Array.isArray(value) ? value : [value],
      },
    })
  })

  if (subField) {
    query.aggs.results.aggs = {
      subResults: {
        terms: {
          field: subField,
          size: subSize || 10,
        },
      },
    }

    if (subInclude) {
      query.aggs.results.aggs.subResults.terms.include = include
    }
  }

  if (include) {
    query.aggs.results.terms.include = include
  }

  if (q) {
    query.query.bool.must = [
      {
        query_string: {
          analyze_wildcard: true,
          query: q,
          default_field: '*',
        },
      },
    ]
  }

  return query
}


const getData = async ({ query, elasticsearchConfig }) => {
  try {
    const response = await fetch(`${elasticsearchConfig.url}${elasticsearchConfig.index}/_msearch`, {
      method: 'POST',
      body: `{}\n${[JSON.stringify(query)].join('\n')}\n`,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })

    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

const formatDataDonut = (data) => {
  const { aggregations: { results: { buckets } } } = data.responses[0]

  const obj = {}
  buckets.forEach(d => obj[d.key] = d.doc_count)
  return obj
}

const formatDataStacked = ({ rawData, translate }) => {
  const { aggregations: { results: { buckets } } } = rawData.responses[0]

  const groups = [...new Set(...[...buckets.map(c => c.subResults.buckets)]
    .map(e => e.map(e => e.key)))]

  const data = buckets.map(b => Object.assign(
    { name: translate(b.key) }, ...b.subResults.buckets.map(b => ({ [b.key]: b.doc_count })),
  ))

  return { groups, data }
}


const donutGrap = ({
  rawData, translate, field, q, filters = [], w = 500,
}) => {
  const filterString = filters
    .map(([field, value]) => `filter.${field}=${encodeURIComponent(JSON.stringify(value))}`)
    .join('&')
  const { document } = (new JSDOM('')).window
  global.document = document
  const body = d3.select(document).select('body')

  const data = formatDataDonut(rawData)
  const valuesArray = Object.values(data)
  if (valuesArray.length === 0) return false

  const neededHeight = valuesArray.length * 20 + 15
  const width = w
  const height = (neededHeight < width / 2) ? width / 2 : neededHeight
  const padding = 10
  const legendWidth = 250

  const areaWidth = (width - padding) - legendWidth
  const r = Math.min(areaWidth, height - 10) / 2
  const total = (valuesArray.length && valuesArray.reduce((acc, i) => acc + i)) || 0

  const color = d3.scaleOrdinal()
    .domain(data)
    .range(colors)

  const pieGenerator = d3.pie()
    .value(([, value]) => value)


  const arcGenerator = d3.arc()
    .outerRadius(r)
    .innerRadius(r - 40)

  const arcData = pieGenerator(Object.entries(data))

  const svg = body.append('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('width', width)
    .attr('height', height)
    .style('font-family', '"Source Sans Pro", futura-pt, sans-serif')

  const g = svg.append('g')
    .attr('class', 'graph')
    .attr('transform', `translate(${r + padding}, ${r})`)

  // Arcs
  g.selectAll('path')
    .data(arcData)
    .enter()
    .append('a')
    // FIXME: prevent duplication of filter param
    .attr('xlink:href', d => `/browse/?filter.${field}=${encodeURIComponent(JSON.stringify([d.data[0]]))}`
      .concat(q ? `&q=${encodeURIComponent(q)}` : '')
      .concat(filterString ? `&${filterString}` : ''))
    .attr('target', '_parent')
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill', d => color(d.data[1]))
    .attr('stroke', 'white')
    .append('title')
    .html(d => `${translate(d.data[0])} (${d.data[1]})`)

  // Labels
  g.selectAll('text')
    .data(arcData)
    .enter()
    .append('text')
    .each((d, i, nodes) => {
      const centroid = arcGenerator.centroid(d)
      d3.select(nodes[i])
        .attr('x', centroid[0])
        .attr('y', centroid[1])
        .attr('dy', '0.33em')
        .attr('fill', 'white')
        .attr('pointer-events', 'none')
        .style('text-shadow', '1px 1px .1px black')
        .text((d) => {
          // eslint-disable-next-line no-bitwise
          const percentage = ~~(d.data[1] * 100 / total)
          return (percentage > 3 ? `${percentage}%` : '')
        })
        .attr('text-anchor', 'middle')
        .attr('font-weight', 400)
        .attr('font-size', '13px')
    })

  // Legend
  const legend = svg.append('g')
    .attr('class', 'legend')
    .attr('transform', `translate(${areaWidth + padding * 3}, -${height})`)

  const lg = legend.selectAll('g')
    .data(arcData)
    .enter()
    .append('g')
    .attr('class', 'legendGroup')
    .attr('transform', (d, i) => `translate(0, ${(height + 15) + 20 * i})`)

  lg.append('rect')
    .attr('fill', d => color(d.data[1]))
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', 10)
    .attr('height', 10)
    .append('title')
    .html(d => d.data[1])

  lg.append('text')
    .style('font-size', '13px')
    .attr('x', 20)
    .attr('y', 10)
    .text((d) => {
      const translated = translate(d.data[0])
      return translated.length > 25 ? `${translated.slice(0, 25)}...` : translated
    })
    .append('title')
    .html(d => `${translate(d.data[0])} (${d.data[1]})`)

  return body.node().innerHTML
}

const stackedGrap = ({ rawData, translate }) => {
  const { document } = (new JSDOM('')).window
  global.document = document
  const body = d3.select(document).select('body')

  const { data, groups } = formatDataStacked({ rawData, translate })

  const neededHeight = groups.length * 20 + 15
  const neededWidth = Object.values(data).length * 40 + 15
  const width = neededWidth < 900 ? 900 : neededWidth
  const height = (neededHeight < 400) ? 400 : neededHeight
  const margin = ({
    top: 10, right: 10, bottom: 20, left: 40,
  })

  const svg = body.append('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('viewBox', [0, 0, width, height])
    .attr('width', width)
    .attr('height', height)
    .style('font-family', '"Source Sans Pro", futura-pt, sans-serif')

  const series = d3.stack().keys(groups)(data)
  const color = d3.scaleOrdinal()
    .domain(series.map(d => d.key))
    .range(colors)

  const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, width / 2 - margin.right])
    .padding(0.1)

  const y = d3.scaleLinear()
    .domain([0, d3.max(series, d => d3.max(d, d => d[1]))])
    .rangeRound([height - 110 - margin.bottom, margin.top])

  const xAxis = g => g
    .attr('transform', `translate(0,${height - 110 - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
    .call(g => g.selectAll('.domain').remove())
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-65)')

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, 's'))
    .call(g => g.selectAll('.domain').remove())

  const bar = svg.append('g')
    .selectAll('g')
    .data(series)
    .join('g')
    .attr('fill', d => color(d.key))

  bar.selectAll('rect')
    .data(d => d)
    .join('rect')
    .attr('x', d => x(d.data.name))
    .attr('y', d => y(d[1]))
    .attr('height', d => y(d[0]) - y(d[1]))
    .attr('width', x.bandwidth())

  bar.append('title')
    .html(d => translate(d.key))

  svg.append('g')
    .call(xAxis)

  svg.append('g')
    .call(yAxis)

  const leyend = svg.append('g')
    .selectAll('g')
    .data(series)
    .join('g')
    .attr('transform', (d, i) => `translate(${width / 2}, ${i * 20 + margin.top})`)

  leyend.append('rect')
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', d => color(d.key))

  leyend.append('text')
    .attr('x', 20)
    .attr('y', 10)
    .html(d => (translate(d.key).length > 20 ? `${translate(d.key).slice(0, 100)}...` : translate(d.key)))

  return body.node().innerHTML
}


export const createGraph = async ({
  field,
  q,
  subField,
  size,
  subSize,
  translate,
  elasticsearchConfig,
  include,
  subInclude,
  filters,
  w,
}) => {
  const rawData = await getData({
    query: createQuery({
      field, q, subField, size, subSize, include, subInclude, filters,
    }),
    elasticsearchConfig,
  })
  return subField
    ? stackedGrap({ rawData, translate })
    : donutGrap({
      rawData, translate, field, q, filters, w,
    })
}

export default { createGraph }
