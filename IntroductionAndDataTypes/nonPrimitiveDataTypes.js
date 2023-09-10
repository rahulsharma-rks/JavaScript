let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) 

let number1 = [1, 2, 3]
console.log(nums == number1) 

let user_One = {
  name: 'Mark',
  role: 'Consultant',
  country: 'New York'
}
let user_Two = {
  name: 'Tony',
  role: 'Developer',
  country: 'Canada'
}
console.log(user_One == user_Two)

let numbers = nums
console.log(nums == numbers)

let user1 = {
    name: 'Mark',
    role: 'Consultant',
    country: 'New York'
  }
let userTwo = user1
console.log(user1 == user_Two) 