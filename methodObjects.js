var user = {
    firstName : "Rahulk",
    lastName : "Sharma",
    role: "admin",
    loginCount: 20,
    facebookSignedIn: true,
    courseList : [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName}, is enrolled in total of ${this.courseList.length} cousrse.`
    }
}

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React JS");
user.buyCourse("JS");
console.log(user.getCourseCount());


