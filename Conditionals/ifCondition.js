/*
If Syntax:

// syntax
if (condition) {
  //this part of code runs for true condition
}

*/

let num = 5
if (num > 0){
    console.log(`${num} is Positive Number.`)
}


/*
// syntax
if (condition) {
  // true condition
} else {
  // false condition
}
*/
let num1 = 5
if (num1 > 0){
    console.log(`${num1} is Positive Number.`)
} else {
    console.log(`${num1} is Negative Number.`)
}


/*
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
*/

let weather = 'sunny'

if (weather == 'sunny'){
    console.log("Wear hat.")
} else if (weather == 'rainy') {
    console.log("Take an umbrella.")
} else {
    console.log("Go Freely.")
}