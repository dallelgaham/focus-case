import React from 'react'
import BarChart from '../components/BarChart/BarChart'
import { patentsByCompanies } from "../data/functions.js";

export default function BarChartContainer() {

  const data = patentsByCompanies();

  return (
    <div className="bg-white p-8 m-8 w-8/12 rounded-2xl shadow	">
      <h1 className="text-3xl text-gray-600	text-center	">Highest number of patents by company</h1>
      <div className="mt-6">
        <BarChart data={data} comma="owner" ordinate="nbr" />
      </div>
    </div>
  )
}
