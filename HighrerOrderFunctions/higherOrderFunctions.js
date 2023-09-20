/*
Higher order functions are functions which take other function as a parameter or return a function as a value. 
The function passed as a parameter is called callback.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function.
*/

//Callback: A callback is a function which can be passed as parameter to other function.

// a callback function, the name of the function could be any name
const callbackFunction = (n) => {
    return n ** 2
}

  // function that takes other function as a callback
function cube(callbackFunction, n) {
    return callbackFunction(n) * n
  }
console.log(cube(callbackFunction, 3))


// const sqRoot = (a) => {
//     return a * a
// }

// function sqRootMul(sqRoot,a) {
//     return sqRoot(a) * a  
// }
// console.log(sqRootMul(sqRoot,3))

//Remove -ve Number
const myArr = [1,5,-2,-9,5,10,-11];

const positiveNumber = negNumber(myArr, (x) => x >= 0);

function negNumber(numbers, callback) {
    const posArray = [];
    for (const x of numbers) {
        if(callback(x)) {
            posArray.push(x);
        }
    }
    return posArray;
}
console.log(positiveNumber)
