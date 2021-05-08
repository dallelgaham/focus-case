import React from 'react'
import LineChart from '../components/LineChart/LineChart'
import { patentsByYear } from '../data/functions'

export default function PatentingTrendChart() {
  const data = patentsByYear()
  return (
    <div>
      <h1>Graphene patenting trend</h1>
      <LineChart data={data} comma="year" ordinate="nbr" />
    </div>
  )
}
