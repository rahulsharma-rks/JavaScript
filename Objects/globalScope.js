/*
A globally declared variable can be accessed every where in the same file. But the term global is relative.
It can be global to the file or it can be global relative to some block of codes.
*/

let a = 'JavaScript' // is a global scope it will be found anywhere in this file
const b = 10

function gScope() {
    console.log(a,b)

    if(true){
        let a = 'Java'
        const b = 20
        console.log(a,b)
    }
    console.log(a,b)

}
gScope()
console.log(a,b)