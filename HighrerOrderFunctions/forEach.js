/*
forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, 
index parameter and array itself. The index and the array optional.

Syntax:
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
*/

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)
console.log(sum)


// const even = [1, 3, 5, 6, 9, 10];
// if (even.forEach(evenNum => even % 2 == 0)){
//     console.log(`${evenNum} is Even.`)
// } else {
//     console.log(`${evenNum} is Odd.`)
// }

const even = [1, 3, 5, 6, 9, 10];
even.forEach(evenNum => {
  if (evenNum % 2 === 0) {
    console.log(`${evenNum} is Even.`);
  } else {
    console.log(`${evenNum} is Odd.`);
  }
});

