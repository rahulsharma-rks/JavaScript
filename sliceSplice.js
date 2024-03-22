const myNumber = [12,34,26,28,10,12,148];
const result = myNumber.filter((num) => num != 28);
//console.log(result);

var user = ["Tom", "Mark","Tony","Steave","TChalla"];
// console.log(user.slice(1,3));
// console.log(user.slice(1));

//Splice
//The splice() method adds and/or removes array elements.
//The splice() method overwrites the original array.
userResult = user.splice(1,3,'Hi');
console.log(userResult);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]