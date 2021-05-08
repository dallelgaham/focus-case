import React from 'react'
import BarChart from '../components/BarChart/BarChart'
import { averageTechImpactByCompanies } from "../data/functions.js";

export default function AvgTechImpactChart() {

  const data = averageTechImpactByCompanies();
  return (
    <div className="">
      <h1>Average Tech. Impact for the strongest competitors</h1>
      <div>
        <BarChart data={data} comma="owner" ordinate="avg" />
      </div>
    </div>
  )
}
