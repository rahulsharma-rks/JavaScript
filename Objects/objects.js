/*
Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. 
The order of the key is not reserved, or there is no order. To create an object literal, we use two curly brackets.
*/

const person = {} //Empty Object
console.log(person)

const rectangle = {length : 20,
    width: 10
    }
console.log(rectangle)

//Access values from objects
const developerInfo ={name : 'Kevin', age : 25, location: 'Denmark',
    skills: ['HTML','CSS','JavaScript','Python', 'Java']
}

// accessing values using .
console.log(developerInfo.name)
console.log(developerInfo.age)
console.log(developerInfo.skills)
console.log(developerInfo.area)

// value can be accessed using square bracket and key name
console.log(developerInfo['name'])
console.log(developerInfo['age'])
console.log(developerInfo['skills'])
console.log(developerInfo['area'])