/*
findIndex: Return the position of the first element which satisfies the condition
*/

const ages = [34, 21, 55, 33, 36, 18, 18, 17]
const age = ages.findIndex((age) => age < 20)

console.log(age)