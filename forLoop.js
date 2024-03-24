for (let i = 0; i < 10; i++) {
    //console.log(i);
}

var user = [
    "Tom", 
    "Mark",
    "Tony",
    1997,
    "Steave",
    "TChalla"
];

// for (let i = 0; i < user.length; i++){
//     if (typeof user[i] !== "string") continue;
//     console.log(user[i]);
// }

// ForEach
user.forEach(u => (console.log(u)));

// For Of -->Mainly used for array
const name = [
    "YouTube",
    "Meta",
    "Instagram",
    "Whatsapp",
    "Netflix"
]

for (const n of name){
    console.log(n);
}

// For In  -->Mainly used for object, OutPut is key
const logo ={
    car: "BMW",
    isp: "Airtel",
    travel: "Scorpio",
    hotel: "Taj"
}
for (const l in logo){
    console.log(l);
    //console.log(logo[l]);
}
