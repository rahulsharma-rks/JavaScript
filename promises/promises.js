/*

We human give or receive a promise to do some activity at some point in time. If we keep the promise we make others
happy but if we do not keep the promise, it may lead discontentment. Promise in JavaScript has something in common 
with the above examples.

A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's 
eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: 
instead of immediately returning the final value, the asynchronous method returns a promise to supply the value 
at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options 
happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been 
    fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race 
    condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

*/

//Syntax
// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML5', 'TailWind', 'JS','ReactJS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened at the time of exam')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))