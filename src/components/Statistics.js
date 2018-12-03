import React from 'react'
import PropTypes from 'prop-types'
import { select, scaleLinear, pie, arc, event } from 'd3'
import { createElement } from 'react-faux-dom'
import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'
import FullModal from './FullModal'
import '../styles/components/Statistics.pcss'

const getColor = (totalItems, value) => {
  const color = scaleLinear()
    .domain([0, (totalItems-1)/2,totalItems-1])
    .range(['#a0c846', '#ffe600', '#ff8c00'])

  return color(value)
}

const PieChart = ({name, buckets, emitter, translate}) => {

  const el = createElement('svg')
  el.setAttribute("width", "300")
  el.setAttribute("height", "300")
  const svg = select(el)
  const width = +svg.attr("width")
  const height = +svg.attr("height")
  const radius = Math.min(width, height) / 2
  const g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

  const pieChart = pie()
    .sort((a,b) => a.doc_count < b.doc_count)
    .value(d => d.doc_count)

  const path = arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 50)

  const arcShape = g.selectAll(".arc")
    .data(pieChart(buckets))
    .enter().append("g")
    .attr("class", "arc")
    .append("a")
    .attr("xlink:href", d => `/resource/?filter.${name}=${d.data.key}`)
    .on('click', d => {
      event.preventDefault()
      emitter.emit('navigate', `/resource/?filter.${name}=${d.data.key}`)
    })

  arcShape.append("path")
    .attr("d", path)
    .attr("fill", (d, i) => getColor(buckets.length, i))
    .append("title").text(d => `${translate(d.data.label || d.data.key)} (${d.data.doc_count})`)

  return el.toReact()
}

const charts = [
  "sterms#about.@type",
  "sterms#about.primarySector.@id",
  "sterms#about.secondarySector.@id",
  "sterms#about.isFundedBy.isAwardedBy.@id",
  "sterms#about.availableChannel.availableLanguage",
  "sterms#feature.properties.location.address.addressCountry",
  "sterms#about.license.@id",
  "sterms#about.about.@id",
  "sterms#about.keywords",
  "sterms#about.agent.location.address.addressCountry",
  "sterms#about.audience.@id"
]

const Statistics = ({translate, aggregations, emitter}) => (
  <div className="Statistics">
    <FullModal closeLink={Link.home}>
      <h1 className="title">Global Statistics</h1>
      <div className="links">
        {charts.map(typed_aggregation => {
          const [, aggregation] = typed_aggregation.split('#')
          return (
            <Link key={aggregation} href={`#${aggregation}`}>
              {translate(aggregation)}
            </Link>
          )
        })}
      </div>
      {charts.map(typed_aggregation => {
        const [, aggregation] = typed_aggregation.split('#')
        return aggregations[typed_aggregation] && (
          <div className="chartContainer" key={aggregation} id={aggregation}>
            <h2>{translate(aggregation)}</h2>
            <div className="graph">
              <PieChart
                emitter={emitter}
                translate={translate}
                name={aggregation}
                buckets={aggregations[typed_aggregation].buckets.sort((a,b) => a.doc_count < b.doc_count)}
              />
            </div>
            <ul>
              {aggregations[typed_aggregation].buckets.map((bucket, i) => (
                <li key={bucket.key}>
                  <Link href={`/resource/?filter.${aggregation}=${encodeURIComponent(bucket.key)}`}>
                    <span
                      className="color"
                      style={{backgroundColor: getColor(aggregations[typed_aggregation].buckets.length, i)}}
                    />
                    &nbsp;
                    {`${translate(bucket.label || bucket.key)} (${bucket.doc_count})`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
      <br />
      <a href={Link.home} className="btn">{translate('close')}</a>
    </FullModal>
  </div>
)

Statistics.propTypes = {
  translate: PropTypes.func.isRequired,
  aggregations: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(Statistics))
