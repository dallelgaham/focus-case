import React from 'react'
import { patentsByStatus } from '../data/functions';
import PieChart from '../components/PieChart/PieChart';
export default function PatentsStatuses() {
  const data = patentsByStatus()
  console.log({ data })
  return (
    <div>
      <PieChart data={data} width={500}
        height={500}
        innerRadius={0}
        outerRadius={200} />

    </div>
  )
}
