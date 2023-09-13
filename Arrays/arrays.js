/*
An array can store multiple values. Each value in an array has an index, and each index has a 
reference in a memory address. Each value can be accessed by using their indexes. The index of 
an array starts from zero, and the index of the last element is less by one from the length of the array.
*/


const arr = Array()
console.log(arr)

let arr1 = new Array()
console.log(arr1)

const arr2 = []
console.log(arr2)

const num1 = [1,2,2,4,5]
console.log(num1)
//length: to know size or length of array
console.log(num1.length)

const char1 = ['a', 'b', 'c']
console.log(char1)
console.log(char1.length)

const arr3 = [1, 2, 'kevin',{direction: ['left','right']} ]
console.log(arr3)

//array using split
let uname = 'RahulSharma'
const charInName = uname.split('')
console.log(charInName)

//Accessing array items using index
let username = ['root', 'admin', 'master']
console.log(username[0])

let lastIndex = username.length - 1
console.log(username[lastIndex])


//Modify array
const num2 = [1, 2, 3, 4, 1]
console.log(num2)
num2[4] = 5
console.log(num2)

//Manipulate Array
/*
There are different methods to manipulate an array. These are some of the available methods to deal with 
arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, 
push, pop, shift, unshift
*/

const arr4 = Array() // creates an an empty array
console.log(arr4)

const fiveEmptyValues = Array(5) // it creates five empty values
console.log(fiveEmptyValues) // [empty x 5]

//fill: Fill all the array elements with a static value
const arr5 = Array()
console.log(arr5)
const fiveEmptyValues1 = Array(5).fill('R') 
console.log(fiveEmptyValues1)

// concat:To concatenate two arrays.
const arr6 = [1,2,3]
const arr7 = [4,5,6]
const combinedArray = arr6.concat(arr7)
console.log(combinedArray)


//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const arr8 = [1, 2, 3, 4, 4]
console.log(arr8.indexOf(4))

// Check items in a list
const fname = ['apple', 'mango', 'banana', 'kiwi']
let indexOfBanana = fname.indexOf('banana')
console.log(indexOfBanana)

if (indexOfBanana == 3){
    console.log('Banana exist in Array')
} else {
    console.log('Banana does not exist in Array')
}


// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const num3 = [5, 7, 8, 9, 19]
console.log(num3.lastIndexOf(9))
console.log(num3.lastIndexOf(10))

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const num4 = [5, 7, 8, 9, 19, 20]
console.log(num4.includes(8))
console.log(num4.includes(18))


//Array.isArray:To check if the data type is an array
const num5 = [5, 7, 8, 9, 19, 20]
console.log(Array.isArray(num5))

const num6 = 1
console.log(Array.isArray(num6))


//toString:Converts array to string
const num7 = [5, 7, 8, 9, 19]
console.log(num7.toString())

/*
join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and 
return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
*/

const joinName = ['root', 'admin','master']
console.log(joinName.join())
console.log(joinName.join(' '))
console.log(joinName.join('#'))

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position
const nameSlice = ['root', 'admin','master']
console.log(nameSlice.slice())
console.log(nameSlice.slice(1, 2))

//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const num8 = [1, 2, 3, 4, 5]
num8.splice()
console.log(num8)

let spliceNume = num8.splice(0, 2)
console.log(spliceNume)

// Push: adding item in the end. To add item to the end of an existing array we use the push method.
const itemName = ['item1', 'item2', 'item3']
console.log(itemName)
itemName.push('item4')
console.log(itemName)

// pop: Removing item in the end.
const popName = ['item1', 'item2', 'item3','item4']
console.log(popName)
popName.pop()
console.log(popName)

// shift: Removing one array element in the beginning of the array.
const shiftItem = [1, 2, 3, 4]
shiftItem.shift()
console.log(shiftItem.shift())

// unshift: Adding array element in the beginning of the array.
const unshiftItem = [1, 2, 3, 4]
unshiftItem.unshift(5)
console.log(unshiftItem)


//reverse: reverse the order of an array.
const reverseItem = [1, 2, 3, 4, 5]
console.log(reverseItem)
console.log(reverseItem.reverse())


//sort: arrange array elements in ascending order.
const sortName = [
    'Adam',
    'Cathei',
    'John',
    'Rock',
    'Reymond',
    'Nebula',
    'Mongoose'
  ]
  
  sortName.sort()
  console.log(sortName) 
  
  sortName.reverse() // after sorting we can reverse it
  console.log(sortName) 

// Array of Arrays

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)