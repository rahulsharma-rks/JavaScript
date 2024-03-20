// Show user a signout when he is unauthenticated
// Else show him oprion to Login/SignUp

var authenticated = true;

// if (authenticated){
//     console.log("Show SignOut Button.")
// } else {
//     console.log("Show Login Option.")
// }

authenticated ? console.log("SignOut Button") : console.log("Login")