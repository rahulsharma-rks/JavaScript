var countries = ["India", "Japan", "Russia"];

var states = new Array("Assam","Rajasthan","West Bengal");

console.log(states[0]);
console.log(states.length);

states[0] = "Punjab";
console.log(states);

states.pop();
console.log(states);

countries.unshift("New Country");
console.log(countries);

//Convert any string to array
console.log(Array.from("Rahulk"));