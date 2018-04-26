import React from 'react'
import PropTypes from 'prop-types'
import { select, scaleOrdinal, pie, arc } from 'd3'
import { createElement } from 'react-faux-dom'
// import Link from './Link'
import withI18n from './withI18n'
import withEmitter from './withEmitter'

// import '../styles/components/RepositoryStatistics.pcss'

const PieChart = ({data, emitter, translate}) => {

  const el = createElement('svg')
  el.setAttribute("width", "400")
  el.setAttribute("height", "400")
  const svg = select(el)
  const width = +svg.attr("width")
  const height = +svg.attr("height")
  const radius = Math.min(width, height) / 2

  const colors = ["rgb(156, 84, 91)", "rgb(110, 29, 39)", "rgb(230, 183, 54)", "rgb(161, 162, 46)", "rgb(89, 158, 93)", "rgb(82, 156, 142)", "rgb(17, 107, 92)"]
  const totalMaterials = data.materials.licenses.reduce((sum, l) => sum + l.count, 0)

  svg.append('g')
    .attr('transform', `translate(${width/2}, ${height/2})`)

  const color = scaleOrdinal()
    .domain(data.materials.licenses.map(l => l.name))
    .range(colors)

  const arcShape = arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 80)

  const pieChart = pie()
    .value(d => d.count)

  const g = svg.select('g')
    .selectAll('.arc')
    .data(pieChart(data.materials.licenses))
    .enter().append('g')
    .attr('class', 'arc')

  g.append('path')
    .attr('d', arcShape)
    .attr('stroke', 'white')
    .style('fill', d => color(d.data.name))

  g.append('text')
    .attr('transform', d => `translate(${arcShape.centroid(d)})`)
    .attr('dx', '-5px')
    .attr('font-size', '1em')
    .attr('font-weight', 'bold')
    .attr('fill', 'white')
    .text(d => Math.floor(d.data.count/totalMaterials * 100) > 1 ?`${(d.data.count/totalMaterials * 100).toFixed(1)}%` : '')

  g.append("g")
    .attr("x", width/2)
    .attr("y", height/2)
    .append("text")
    .attr("dy", "1.3rem")
    .attr("text-anchor", "middle")
    .attr("font-size", "6rem")
    .text(totalMaterials)

  g.append("g")
    .attr("x", width/2)
    .attr("y", height/2)
    .append("text")
    .attr("dy", "80px")
    .attr("text-anchor", "middle")
    .attr("font-size", "1.3rem")
    .attr("font-size", "2rem")
    .text("Materialen")

  return el.toReact()
}

const RepositoryStatistics = ({translate, data, emitter}) => (
  <div className="RepositoryStatistics">
    <PieChart data={data} emitter={emitter} translate={translate} />
  </div>
)

RepositoryStatistics.propTypes = {
  translate: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  emitter: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withEmitter(withI18n(RepositoryStatistics))
