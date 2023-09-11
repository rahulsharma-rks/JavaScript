// Assignment operators
let x = 6
let fname = 'Martha'

//Assignment Operators
/*
Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b
*/
let num1 = 8
let num2 = 10
let sum = num1 + num2
let diff = num1 - num2
let mult = num1 * num2
let div = num1 / num2
let remainder = num1 % num2
let powerOf = num1 ** num2

console.log(sum, diff, mult, div, remainder, powerOf)


//Comparison Operators
/*
==  Equal in Value only:Equivalent
=== Equal in value and data type
!= No equal
> Greater than
< Less than
>= Greater than equal to
<= Less than equal to
*/

//Logical Operator
// && operator 
const check1 = 5 > 1 && 11 > 6        
console.log(check1)     

// || pipe or operator

const check2 = 5 > 1 || 11 > 6
console.log(check2)        

//! Negation 

let check3 = 4 > 3                     
let check4 = !(4 > 3)                  
console.log(check3)
console.log(check4)  


// Increment Operator

//Pre-Increment
let count = 10
console.log(++count)  
console.log(count) 

//Post-Increment
let count1 = 10
console.log(count1++)   
console.log(count1)  


//Decrement Operator

//Pre-Increment
let count2 = 10
console.log(--count2)  
console.log(count2) 

//Post-Increment
let count3 = 10
console.log(count3--)   
console.log(count3)  

//Ternary Operator: Ternary operator allows to write a condition.
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
