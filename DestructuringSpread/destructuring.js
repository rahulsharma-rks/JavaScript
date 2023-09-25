// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const alpha = ['a', 'b', 'c']
let [firstChar, secondChar, thirdChar] = alpha
console.log(firstChar, secondChar, thirdChar)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

/*
We can not assign variable to all the elements in the array. We can destructure few of the first and we can 
get the remaining as array using spread operator(...).
*/

const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for (const [country, city] of countries) {
    console.log(country, city)
}

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter } = rectangle
  
  console.log(width, height, area, perimeter)


// Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect)) // 60
  //with destructuring