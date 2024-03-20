// Allow the use to access the course if:
// User is logged in from Google
// User is logged in using Email
// User is logged in using Facebook

var email = false;
var google = true;
var facebook = false;

if (email || google || facebook) {
    console.log("User Logged In Successfully.")
}