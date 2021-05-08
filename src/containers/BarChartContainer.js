import React from 'react'
import BarChart from '../components/BarChart/BarChart'
import { patentsByCompanies } from "../data/functions.js";

export default function BarChartContainer() {

  const data = patentsByCompanies();

  return (
    <div className="">
      <h1>Top 10 Graphene patent owners</h1>
      <div>
        <BarChart data={data} comma="owner" ordinate="nbr" />
      </div>
    </div>
  )
}
