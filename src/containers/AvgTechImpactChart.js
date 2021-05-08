import React from 'react'
import BarChart from '../components/BarChart/BarChart'
import { averageTechImpactByCompanies } from "../data/functions.js";

export default function AvgTechImpactChart() {

  const data = averageTechImpactByCompanies();
  return (
    <div className="bg-white p-8 m-8 w-8/12 rounded-2xl shadow	">
      <h1 className="text-3xl text-gray-600	text-center	">Avg. technological impact score of best companies</h1>
      <div className="mt-14">
        <BarChart data={data} comma="owner" ordinate="avg" />
      </div>
    </div>
  )
}
