/*
Define a function that can answer the role of user.
A user can have following roles:

admin - gets full access
subadmin - gets access to create/delete course
testprep - gets access to create/delete tests
user - gets access to consume content
other - trial user

Input: getUserRole(name, role)
*/

// var getUserRole = function name(params) {
    
// }

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with full access.`;
        
        case "subadmin":
            return `${name} is subadmin with access to create/delete course`;
        
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        
        case "user":
            return `${name} is user with access to consume content`;
    
        default:
            return `${name} is trail user`;
    }
}

getUserRole("Rahulk", "admin");
console.log(getUserRole("Rahulk", "admin"));

