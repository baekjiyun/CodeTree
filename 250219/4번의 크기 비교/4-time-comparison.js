const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let d = Number(input[3]);
let e = Number(input[4]);

if (a>b){
    console.log(1);
}
else{
    console.log(0);
}

if (a>c){
    console.log(1);
}
else{
    console.log(0);
}

if (a>d){
    console.log(1);
}
else{
    console.log(0);
}

if (a>e){
    console.log(1);
}
else{
    console.log(0);
}