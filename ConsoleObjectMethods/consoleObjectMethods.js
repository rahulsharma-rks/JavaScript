console.log('This is Console Log!')

console.warn('This is Console Warn')

console.error('This is Console Error Message')

const names = ['Kevin', 'Mark','Zoya']
console.table(names)


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

console.info('This is Console Info')


console.assert(8 > 5, '8 is greater than 5') 
console.assert(6 > 9, '6 is not greater than 9') 

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}


const name1 = ['Asabeneh', 'Brook', 'David', 'John']
const countrie1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user1 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const user2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 50
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 35
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 32
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 30
  }
]

console.group('Names')
console.log(name1)
console.groupEnd()

console.group('Countries')
console.log(countrie1)
console.groupEnd()

console.group('Users')
console.log(user1)
console.log(user2)
console.groupEnd()

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()
  func()