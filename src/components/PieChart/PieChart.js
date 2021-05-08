import { useD3 } from '../../hooks/useD3';
import React from 'react'
import * as d3 from 'd3';

export default function PieChart() {

  const ref = useD3((svg) => {

  })
  return (
    <svg
      id="chart-line"
      ref={ref}
      width={500}
      height={500}


    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  )
}
