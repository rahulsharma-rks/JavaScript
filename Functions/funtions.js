/*

A function is a reusable block of code or programming statements designed to perform a certain task. A function 
is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a 
parameter. If a function take a parameter it will be called with argument. A function can also take a default
 parameter. To store a data to a function, a function has to return certain data types. To get the value we 
 call or invoke a function. 
 
Function makes code:
-> clean and easy to read
-> reusable
-> easy to test

A function can be declared or created in couple of ways:
-> Declaration function
-> Expression function
-> Anonymous function
-> Arrow function

Syntax:

//declaring a function without a parameter
function functionName() {
  // code goes here
}
functionName() // calling function by its name and with parentheses

*/

// Function without a parameter and return
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()


function fullName() {
    let fname = 'Rahul'
    let lname = 'Sharma'
    let full = fname + lname
    console.log(full)
}
fullName()

function greetings(name = 'Root') {
    let message = `${name}, welcome`
    return message
  }
  
//console.log(greetings())
console.log(greetings('Admin'))