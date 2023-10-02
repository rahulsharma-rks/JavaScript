/*
JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. 
If inner function access the variables of outer function then it is called closure.
*/

function outerFunction() {
    let count = 1;
    
    function plusOne() {
        count++
        return count
    }

    function plusTwo(){
        count+2
        return count
    }


    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        plusTwo:plusTwo(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusTwo)
console.log(innerFuncs.minusOne)