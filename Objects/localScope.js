/*
A variable declared as local can be accessed only in certain block code.
-> Block Scope
-> Function Scope
*/

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
const b = 10

//function scope
function lScope() {
    console.log(a,b)

    let value = false

    //block scope
    if(true){
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
        let a = 'Java'
        const b = 20
        let c = 'Robert'
        value = !value
        console.log(a,b,c,value)
    }
    // we can not access c because c's scope is only the if block
    //console.log(a,b,c,value)

}
lScope()
console.log(a,b)