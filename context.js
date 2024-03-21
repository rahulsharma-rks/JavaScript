tipper(5);

function tipper(a){
    var bill = parseInt(a);
    console.log(bill  + 2);
}

// tipper(5);
// Global execution context scans the entire code and make functions availble to me if they are declared. 


// bigTipper(200);

var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill + 10);
}
bigTipper(200);
// Here bigTipper is like a variable, it is scanned and made undefined


//Code hoisting
console.log(name);
var name = "Rahulk";

function sayName(){
    var name = "Mr R";
    console.log(name);
}

sayName();
console.log(name);