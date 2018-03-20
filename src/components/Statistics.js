import React from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import '../styles/components/Statistics.pcss'

const getColor = (totalItems, value) => {
  const color = d3.scaleLinear()
    .domain([0, (totalItems-1)/2,totalItems-1])
    .range(['#a0c846', '#ffe600', '#ff8c00'])

  return color(value)
}

const PieChart = ({name, buckets, emitter}) => {

  const el = ReactFauxDOM.createElement('svg')
  el.setAttribute("width", "300")
  el.setAttribute("height", "300")
  const svg = d3.select(el)
  const width = +svg.attr("width")
  const height = +svg.attr("height")
  const radius = Math.min(width, height) / 2
  const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  const pie = d3.pie()
    .sort((a,b) => a.doc_count < b.doc_count)
    .value(d => d.doc_count)

  const path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50)

  const arc = g.selectAll(".arc")
    .data(pie(buckets))
    .enter().append("g")
    .attr("class", "arc")
    .append("a")
    .attr("xlink:href", d => `/resource/?filter.${name}=${d.data.key}`)
    .on('click', d => {
      d3.event.preventDefault()
      emitter.emit('navigate', `/resource/?filter.${name}=${d.data.key}`)
    })

  arc.append("path")
    .attr("d", path)
    .attr("fill", (d, i) => getColor(buckets.length, i))

  return el.toReact()
}

const charts = [
  "about.@type",
  "about.secondarySector.@id",
  "about.isFundedBy.isAwardedBy.@id",
  "about.availableChannel.availableLanguage",
  "about.location.address.addressCountry",
  "about.license.@id",
  "about.about.@id",
  "about.keywords",
  "about.agent.location.address.addressCountry",
  "about.audience.@id",
  "about.primarySector.@id"
]

const Statistics = ({translate, aggregations, emitter}) => (
  <div className="Statistics">
    <FullModal closeLink={Link.back}>
      <h1 className="title">Global Statistics</h1>
      <div className="links">
        {charts.map(aggregation => (
          <Link key={aggregation} href={`#${aggregation}`}>
            {translate(aggregation)}
          </Link>
        ))}
      </div>
      {charts.map(aggregation => (
        aggregations[aggregation] &&
          <div className="chartContainer" key={aggregation} id={aggregation}>
            <h2>{translate(aggregation)}</h2>
            <div className="graph">
              <PieChart
                emitter={emitter}
                name={aggregation}
                buckets={aggregations[aggregation].buckets.sort((a,b) => a.doc_count < b.doc_count)}
              />
            </div>
            <ul>
              {aggregations[aggregation].buckets.map((bucket, i) => (
                <li key={bucket.key}>
                  <Link href={`/resource/?filter.${aggregation}=${encodeURIComponent(bucket.key)}`}>
                    <span
                      className="color"
                      style={{backgroundColor: getColor(aggregations[aggregation].buckets.length, i)}}
                    /> {`${translate(bucket.label || bucket.key)} (${bucket.doc_count})`}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
      ))}
    </FullModal>
  </div>
)

Statistics.propTypes = {
  translate: PropTypes.func.isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Statistics))
