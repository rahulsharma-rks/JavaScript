// User is allowed to purchase if:
// User is logged in
// User email is verified
// cardInfo is Valid
// If any of this is missing, stop the purchase

var isLoggedIn = true;
var isEmailVaried = false;
var cardInfoValid = true;

// if (isLoggedIn) {
//     console.log("Logged In Successfully!")
//     if (isEmailVaried) {    
//         console.log("Email is verified")
//         if (cardInfoValid) {
//             console.log("Valid Card Info")
//             console.log("You can make a payment")
//         }
//     }    
// }


if (isLoggedIn && isEmailVaried && cardInfoValid){
    console.log("Allow User to make a Purchase.")
}

else{
    console.log("User is not able to Purcahse.")
}