import data from './data.json';

const owners = Array.from(new Set(data.map(item => item.Owner)));

export const patentsByCompanies = () => {
  return owners.map(owner => {
    const filtered = data.filter(patent => patent.Owner === owner)
    return { owner: owner, nbr: filtered.length };
  })
    .sort((a, b) => b.nbr - a.nbr)
    .slice(0, 10)
}

export const averageTechImpactByCompanies = () => {
  return owners.map(owner => {
    const filtered = data.filter(patent => patent.Owner === owner);

    const techImpactSum = filtered.reduce((acc = 0, patent) => acc + parseFloat(patent["Impact score"].replace(',', '.')), 0)
    return { owner: owner, nbr: filtered.length, avg: techImpactSum / filtered.length };
  })
    .sort((a, b) => b.nbr - a.nbr)
    .filter(item => item.nbr > 20)
}

export const patentsByYear = () => {
  const years = Array.from(new Set(data.map(item => item["Patenting date"].split('/')[2]))).sort((a, b) => a - b);
  return years.map(
    year => {
      const filtered = data.filter(patent => patent["Patenting date"].split('/')[2] === year);
      return ({ year, nbr: filtered.length })
    }
  )
}

const statuses = Array.from(new Set(data.map(item => item['Patent status'])))

export const patentsByStatus = () => {
  let children = statuses.map(status => {
    const filtered = data.filter(patent => patent['Patent status'] === status);
    return { status, value: ((filtered.length / data.length) * 100).toFixed(2) }
  })
  return { status: "All", value: 100, children }

}