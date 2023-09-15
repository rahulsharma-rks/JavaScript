/*
Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default 
value will be used. Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)

*/

function greetings(name = 'Root') {
    let message = `${name}, Welcome!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Admin'))


const greetingsArrow = (uname = 'Peter') => {
    let message = uname + ', Welcome!'
    return message
  }
  
console.log(greetingsArrow())
console.log(greetingsArrow('Tony'))

