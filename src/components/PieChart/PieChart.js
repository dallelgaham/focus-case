import { useD3 } from '../../hooks/useD3';
import React from 'react'
import * as d3 from 'd3';

export default function PieChart({ data }) {

  const ref = useD3((svg) => {

    const treemap = d3.treemap()
      .size([500, 500])
      .nodes(data)
  }, data.children.length)
  return (
    <svg
      id="chart-line"
      ref={ref}
      width={500}
      height={500}
      style={{ backgroundColor: 'red' }}

    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  )
}
