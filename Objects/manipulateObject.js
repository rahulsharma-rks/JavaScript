/* Object Methods
There are different methods to manipulate an object.
-> Object.assign: To copy an object without modifying the original object
-> Object.keys: To get the keys or properties of an object as an array
-> Object.values:To get values of an object as an array
-> Object.entries:To get the keys and values in an array
-> hasOwnProperty: To check if a specific key or property exist in an object
*/

const personInfo = {
    firstName: 'Mark',
    age: 26,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'Frontend Developer',
       
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.country}, I am ${this.age}.`
    }
}
const copyPerson = Object.assign({}, personInfo)
console.log(copyPerson)

console.log('------------------------------------')
const keys = Object.keys(copyPerson)
console.log(keys) 
const skills = Object.keys(copyPerson.skills)
console.log(skills) 

console.log('------------------------------------')
const values = Object.values(copyPerson)
console.log(values)

console.log('------------------------------------')
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))