// Set is a collection of elements. Set can only contains unique elements.

//Empty Set
const companyNames = new Set()
console.log(companyNames)

//Set from Array
const languageSpoken = [
    'English',
    'French',
    'French',
    'Spanish',
    'French',
    'Hindi',
    'Bengali',
  ]
  
const setOfLanguages = new Set(languageSpoken)
for (const language of setOfLanguages){
    console.log(language)
}


//Adding element in set
console.log(companyNames.size)
companyNames.add('Google')
companyNames.add('Meta')
companyNames.add('Amazon')
console.log(companyNames)

companyArr = ['Microsoft', 'KPMG','HCL', 'SAP']
for (const c of companyArr){
    companyNames.add(c)
}
console.log(companyNames);
console.log(companyNames.size)

//Delete element from set
companyNames.delete('Meta')
console.log(companyNames);
console.log(companyNames.size)


//Check element in Set
console.log(companyNames.has('Meta'))
console.log(companyNames.has('HCL'))

const numbers = [8, 6, 4, 8, 5, 9, 8, 10,10]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)

//Union of Sets
let i = [1,2,3,3]
let x = [3,4,4,5,9]
let u = [...i,...x]

let I = new Set(i)
let X = new Set(x)
let U = new Set(u)

console.log(U)

//Intersection of Sets: To find an intersection of two sets can be achieved using filter.
let a = [1,2,3,3]
let b = [4,4,4,5,9]
let A = new Set(a)
let B = new Set(b)
let c = a.filter((num) => B.has(num))
let C = new Set(c)
console.log(C)

//Difference of Sets
let d = [1,2,3,3]
let e = [4,4,4,5,9]
let D = new Set(d)
let E = new Set(e)
let f = d.filter((num) => !E.has(num))
let F = new Set(f)
console.log(F)
