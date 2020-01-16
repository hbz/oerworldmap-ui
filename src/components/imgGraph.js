/* global Headers */
const d3 = require('d3')
const fetch = require('isomorphic-fetch')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const createQuery = ({
  field, q, subField, size, subSize,
}) => {
  const query = {
    size: 0,
    aggs: {
      results: {
        terms: {
          field,
          size: size || 10,
        },
      },
    },
  }

  if (subField) {
    query.aggs.results.aggs = {
      subResults: {
        terms: {
          field: subField,
          size: subSize || 10,
        },
      },
    }
  }

  if (q) {
    query.query = {
      bool: {
        must: [
          {
            query_string: {
              analyze_wildcard: true,
              query: q,
              default_field: '*',
            },
          },
        ],
      },
    }
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

  const data = buckets.map(b => Object.assign({ name: translate(b.key) }, ...b.subResults.buckets.map(b => ({ [b.key]: b.doc_count }))))

  return { groups, data }
}


const donutGrap = ({ rawData, translate }) => {
  const { document } = (new JSDOM('')).window
  global.document = document
  const body = d3.select(document).select('body')

  const data = formatDataDonut(rawData)
  const valuesArray = Object.values(data)
  if (valuesArray.length === 0) return false

  const neededHeight = valuesArray.length * 20 + 15
  const width = 650
  const height = (neededHeight < 400) ? 400 : neededHeight
  const padding = 10

  const color = d3.scaleOrdinal()
    .domain(data)
    .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'])

  const pieGenerator = d3.pie()
    .value(([, value]) => value)

  const areaWidth = (width - padding) / 2
  const r = Math.min(areaWidth, height - 10) / 2
  const total = (valuesArray.length && valuesArray.reduce((acc, i) => acc + i)) || 0

  const arcGenerator = d3.arc()
    .outerRadius(r)
    .innerRadius(r - 45)

  const arcData = pieGenerator(Object.entries(data))

  const svg = body.append('svg')
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('width', width)
    .attr('height', height)

  const g = svg.append('g')
    .attr('class', 'graph')
    .attr('transform', `translate(${r + padding}, ${r})`)

  // Arcs
  g.selectAll('path')
    .data(arcData)
    .enter()
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
        .text((d) => {
          // eslint-disable-next-line no-bitwise
          const percentage = ~~(d.data[1] * 100 / total)
          return (percentage > 3 ? `${percentage}%` : '')
        })
        .attr('text-anchor', 'middle')
        .attr('font-weight', 400)
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
    .style('font-family', 'Georgia')
    .style('font-size', '13px')
    .attr('x', 17.5 + 10)
    .attr('y', 10)
    .text(d => translate(d.data[0]))
    .append('title')
    .html(d => d.data[1])

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

  const series = d3.stack().keys(groups)(data)
  const color = d3.scaleOrdinal()
    .domain(series.map(d => d.key))
    .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56'])

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
    .attr('transform', d => 'rotate(-65)')

  const yAxis = g => g
    .attr('transform', `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(null, 's'))
    .call(g => g.selectAll('.domain').remove())

  const bar = svg.append('g')
    .selectAll('g')
    .data(series)
    .join('g')
    .attr('fill', d => color(d.key))

  const stack = bar.selectAll('rect')
    .data(d => d)
    .join('rect')
    .attr('x', (d, i) => x(d.data.name))
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
    .html(d => translate(d.key))

  return body.node().innerHTML
}


export const createGraph = async ({
  field, q, subField, size, subSize, translate, elasticsearchConfig,
}) => {
  const rawData = await getData({
    query: createQuery({
      field, q, subField, size, subSize,
    }),
    elasticsearchConfig,
  })
  return subField ? stackedGrap({ rawData, translate }) : donutGrap({ rawData, translate })
}

export default { createGraph }
