/*
Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
Arrow function uses arrow instead of the keyword function to declare a function.
*/

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
console.log(square(2))
  


const square1 = n => {
    return n * n
  }
console.log(square(2))
  

const square2 = n => n * n
console.log(square2(3));

const fullStack = (frontend, backend) => {
    return `${frontend} ${backend}`
}
console.log(fullStack('HTML', 'Java'))
