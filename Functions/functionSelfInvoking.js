// Self invoking functions are anonymous functions which do not need to be called to return a value.
(function(s) {
    console.log(s * s)
  })(5) 
  
  let squaredNum = (function(s) {
    return s * s
  })(15)
  
  console.log(squaredNum)