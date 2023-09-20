/*
Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

*/

const countries = ['Iceland', 'New Zealand', 'Canada', 'Finland', 'Germany']

const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand);

const countriesWithMany = countries.filter((country) => country.includes('many'))
console.log(countriesWithMany)