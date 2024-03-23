for (let i = 0; i < 10; i++) {
    console.log(i);
}

var user = [
    "Tom", 
    "Mark",
    "Tony",
    1997,
    "Steave",
    "TChalla"
];

for (let i = 0; i < user.length; i++){
    if (typeof user[i] !== "string") continue;
    console.log(user[i]);
}

