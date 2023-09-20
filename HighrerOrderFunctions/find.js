/*
find: Return the first element which satisfies the condition
*/

const ages = [10, 34, 21, 55, 33, 36, 18, 18, 17]
const age = ages.find((age) => age < 20)

console.log(age)