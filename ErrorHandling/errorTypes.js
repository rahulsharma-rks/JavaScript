/*
JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using 
try-catch-finally block.

Syntax:

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}
*/

try {
    let lName = 'Scott'
    let fullName = fName + ' ' + lName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }


try {
    let a = 8;
    let result = a / 0 
    console.log(result)
} catch (err) {
    console.log(err)
}

/*
Error Types:
ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.

SyntaxError: A syntax error has occurred

TypeError: A type error has occurred
*/

