//Empty Map

const map = new Map()
console.log(map)

//Map from Array
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const CountryMap = new Map(countries)
  console.log(CountryMap)
  console.log(CountryMap.size)


//Adding value to Map
const emptyMap = new Map()
console.log(emptyMap.size)

emptyMap.set('USA','Hot Dog')
emptyMap.set('India','Litti Chokha')
emptyMap.set('Brazil','Choclate')
console.log(emptyMap)
console.log(emptyMap.size)

//Getting value from map
console.log(emptyMap.get('India'))

//Checking value in Map
console.log(emptyMap.has('India'))
