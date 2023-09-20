/*
every: Check if all the elements are similar in one aspect. It returns boolean
*/

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) 
console.log(areAllTrue) 

const boolFalse = [true, false, true, false]
const checkTrue = boolFalse.every((f) => f == false)
console.log(checkTrue)