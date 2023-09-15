//Single parameter
function square(s) {
    let sq = s * s
    return sq  
}
console.log(square(4))


function areaCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaCircle(10))

// Two Parameter
function twoParam(num1, num2) {
    let sum = num1 + num2
    return sum    
}
console.log(twoParam(5,5))

//Multiple Parameter
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
const number = [1, 2, 3, 4, 5]
console.log(sumArray(number))


/*
Sometimes we do not know how many arguments the user going to pass. Therefore, we should know how to write a 
function which can take unlimited number of arguments. The way we do it has a significant difference between
 a function declaration(regular function) and arrow function. 
*/
// Function with unlimited number of parameters
function sumOfAllNum() {
    let sumNum = 0;
    for (let i = 0; i < arguments.length; i++)
    sumNum += arguments[i]
    return sumNum
}
console.log(sumOfAllNum(1, 2, 3, 4, 5))