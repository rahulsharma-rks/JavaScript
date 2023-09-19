/*
Variable is the fundamental part in programming. We declare variable to store different data types. 
To declare a variable we use the key word var, let and const. A variable can be declared at different scope.

Variables scopes can be:
-> Global
-> Local
*/

//Window Global Object
// Declaring a variable without let or const make it available in window object and this found anywhere
a = 'JavaScript'
b = 10
function scope() {
    console.log(a,b)
    if(true){
        console.log(a, b)
    }
    
}
console.log(a,b)

