import data from './data.json';

export const patentsByCompanies = () => {
  const owners = Array.from(new Set(data.map(item => item.Owner)));

  return owners.map(owner => {
    let filtered = data.filter(patent => patent.Owner === owner)
    return { owner: owner, nbr: filtered.length };
  })
    .sort((a, b) => b.nbr - a.nbr)
    .slice(0, 10)
}