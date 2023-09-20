/*
sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method 
sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as 
strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original 
data before you start using sort method.
*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

//Sorting Numeric values
const numbers = [9.81, 3.14, 100, 37]
//Sort converts items to string
console.log(numbers.sort()) 

numbers.sort(function (i, j) {
  return i - j
})

console.log(numbers) 

numbers.sort(function (i, j) {
  return i - j
})
console.log(numbers) 
