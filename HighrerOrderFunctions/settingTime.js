/*

setInterval
setTimeout

In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. 
The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds 
and the callback will be always called in that interval of time.

Syntax:
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)

*/

function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 1000) // Prints hello in every second


/*
In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. 
The setTimeout global method take a callback function and a duration as a parameter. The duration is in 
milliseconds and the callback wait for that amount of time.

Syntax:
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds
*/

function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // Prints hello after it waits for 2 seconds.