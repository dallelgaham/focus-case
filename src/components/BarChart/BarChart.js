import { useD3 } from '../../hooks/useD3';
import React from 'react'
import * as d3 from 'd3';
import "./BarChart.styles.css";

export default function BarChart({ data, comma, ordinate }) {

  const wrap = (text, width) => {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(""));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
    });
  }
  const ref = useD3((svg) => {
    const height = 500;
    const width = 1000;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const colors = (i) => i > 1 ? d3.interpolateOranges(i / 100) : d3.interpolateOranges(i);
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
        .style("color", "#505050")
        .call(
          d3
            .axisBottom(x)
            .tickSize(0)
        );

    const y1Axis = (g) =>
      g
        .attr("transform", `translate(${margin.left},0)`)
        .style("color", "#505050")
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
      .call(wrap, x.bandwidth())


    // svg.select(".y-axis")
    //   .call(y1Axis);

    const bars = svg
      .select(".plot-area")
      .selectAll(".bar")

    bars
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", d => colors(d[ordinate]))
      .attr("x", (d) => x(d[comma]))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d[ordinate]))
      .attr("height", (d) => 0)
      .on("mouseover", function (e) {
        d3.select(this)
          .attr("fill", "#ffab84")
      })
      .on("mouseleave", function () {
        d3.select(this)
          .attr("fill", d => colors(d[ordinate]));
      })
      .transition()
      .duration(750)
      .attr("y", (d) => y(d[ordinate]))
      .attr("height", (d) => y(0) - y(d[ordinate]))

    bars.data(data)
      .enter()
      .append("text")
      .text(d => d[ordinate])
      .attr("y", d => y(d[ordinate]) - 10)
      .attr("x", d => x(d[comma]) + x.bandwidth() / 2)
      .attr("text-anchor", "middle")
      .style("color", "#505050")
      .style("font-family", "sans-serif")
      .style("font-size", 12)
      .style("opacity", 0)
      .transition()
      .duration(1500)
      .style("opacity", 1);


  }, [data.length]);




  return (
    <svg
      id="chart-bar"
      ref={ref}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>

  )
}
