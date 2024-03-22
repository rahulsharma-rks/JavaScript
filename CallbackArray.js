// function isEven(element) {
//     if (element % 2 == 0) {
//         return true;
//     }
//     return false;
// }
// console.log(isEven(3));

//Arrow Function
var isEven = (element) => {
    return element % 2 == 0;
}
// console.log(isEven(2));

//Callbackk Function
var result = [2,4,6,8,10].every(isEven)
//Checks for every element and passess a combined result either true or false.
console.log(result)


// If we are using {}, we have to use return keyword. 
var result1 = [2,4,7,8,10].every((e) => e % 2 == 0);
console.log(result1);