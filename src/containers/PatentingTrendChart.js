import React from 'react'
import LineChart from '../components/LineChart/LineChart'
import { patentsByYear } from '../data/functions'

export default function PatentingTrendChart() {
  const data = patentsByYear()
  return (
    <div className="bg-white p-8 m-8 w-8/12 rounded-2xl shadow	">
      <h1 className="text-3xl text-gray-600	text-center	">Graphene patents evolution per year</h1>
      <div className="mt-6 flex justify-items-center">
        <LineChart data={data} comma="year" ordinate="nbr" />
      </div>
    </div>
  )
}
