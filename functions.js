function sayHello(name) {
    console.log("Hello!");
    //console.log("Hello," ,name);
    console.log(`Hello, ${name}!. Have a great day.`)
}

// To call a function
sayHello("Rahulk");

// Refer to a function
sayHello;

function namastey() {
    return "Hello in India.";
}

var greetings = namastey();
console.log(greetings);
console.log(namastey());