var name = "Rahulk";
console.log("Line No - 1", name);

function myName() {
    // var name = "MR R";
    console.log("Line No - 2", name);

    myNameTwo()
    function myNameTwo() {
        //name = "MR RKS";
        // If name is not declared in the function, it will check with higher or above function for the value. 
        console.log("Line No - 3", name);
    }
}

myName();

