/*
map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index ,
array parameter and return a new array.

Syntax: 
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
*/

const name = ['Mark', 'tony', 'ROGEr', 'Rock']
const nameUpperCase = name.map((name) => name.toUpperCase())
console.log(nameUpperCase)

const nameLowerCase = name.map(name => name.toLowerCase())
console.log(nameLowerCase)