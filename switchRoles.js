// Create an application with following roles
// admin - gets full access
// subadmin - gets access to create/delete course
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("Gets Full Access.");
        break;

    case "subadmin":
        console.log("Gets access to create/delete course.");
        break;
    
    case "testprep":
        console.log("Gets access to create/delete tests.");
        break;
    
    case "user":
        console.log("Gets access to consume content");
        break;
        
    default:
        console.log("Trial User.")
        break;
}