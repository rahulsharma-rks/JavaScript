/*

// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}

*/

for(let i = 0; i <= 5; i++){
    console.log(i)
}



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)


const numbers = [5, 2, 3, 5, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]

}
console.log(sum)


const num1 = [1, 2, 3, 4, 5]
for (const num of num1) {
  console.log(num)
}


for(let i = 0; i <= 10; i++ ){
    console.log(i)
}


//Multiplication
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(let r = 0; r <=10; r++){
    console.log(`${r} * ${r} = ${r*r}`)
}


// Use for loop to iterate from 0 to 100 and print even and odd numbers

for (let e = 0; e <= 100; e++){
    if ( e % 2 == 0){
        console.log(`${e} is Even.`)
    } else {
        console.log(`${e} is Odd.`)
    }
}