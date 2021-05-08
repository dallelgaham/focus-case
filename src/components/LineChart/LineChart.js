import { useD3 } from '../../hooks/useD3';
import React from 'react'
import * as d3 from 'd3';
import "./LineChart.styles.css";


export default function LineChart({ data, comma, ordinate }) {
  const ref = useD3((svg) => {
    const height = 500;
    const width = 1000;
    const margin = { top: 20, right: 60, bottom: 30, left: 60 };

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d[comma]))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[ordinate])]).nice()
      .rangeRound([height - margin.bottom, margin.top]);

    const xAxis = (g) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`)
        .style("color", "#4b5563")
        .call(
          d3
            .axisBottom(x)
            .tickSize(0)
        );

    const y1Axis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .style("color", "#4b5563")
        .call(
          d3.axisLeft(y)
            .tickSizeOuter(0)
        )
        .call((g) =>
          g
            .append("text")
            .attr("x", -margin.left)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "middle")
            .text(data.y)
        );


    svg.select(".x-axis")
      .call((g) => g.select(".domain").remove())
      .call(xAxis)
      .selectAll(".tick text")
      .style("text-anchor", "middle")
      .attr("text-align", "center")
      .attr("dx", 0)
      .attr("dy", "1em")


    svg.select(".y-axis").call(y1Axis);

    const line = d3.line()
      .x(d => x(d["year"]) + x.bandwidth() / 2)
      .y(d => y(d["nbr"]))


    svg.append("path")
      .attr("fill", "none")
      .attr("stroke", "#ffab84")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 2)
      .attr("d", line(data))
      .attr("opacity", 0)
      .transition()
      .duration(750)
      .attr('opacity', 1)

    // function updatePath(data, line) {
    //   const updatedPath = d3
    //     .select("path")

    // }
    // const pathLength = updatedPath.node().getTotalLength();


    // svg
    //   .select(".plot-area")
    //   .attr("fill", "#ff7332")
    //   .selectAll(".bar")
    //   .data(data)
    //   .join("rect")
    //   .attr("class", "bar")
    //   .attr("x", (d) => x(d[comma]))
    //   .attr("width", x.bandwidth())
    //   .attr("y", (d) => y(d[ordinate]))
    //   .attr("height", (d) => y(0) - y(d[ordinate]))
    //   .on("mouseover", function (e) {
    //     d3.select(this)
    //       .attr("fill", "#ffab84")
    //   })
    //   .on("mouseleave", function () {
    //     d3.select(this)
    //       .attr("fill", "#ff7332");
    //   })

  }, [data.length]);

  return (
    <svg
      id="chart-line"
      ref={ref}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>

  )
}
