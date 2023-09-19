/*
A variable declared with var only scoped to function but variable declared with let or const is block 
scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({})
*/

function letsScope() {
    var gravity = 9.81
    console.log(gravity)
  
  }
  //console.log(gravity)
  // O/P: console.log(gravity), Uncaught ReferenceError: gravity is not defined
  
  if (true){
    var gravity = 9.81
    console.log(gravity) // 9.81
  }
  console.log(gravity)  // 9.81
  
  for(var i = 0; i < 3; i++){
    console.log(i) // 0, 1, 2
  }
  console.log(i) // 3
  