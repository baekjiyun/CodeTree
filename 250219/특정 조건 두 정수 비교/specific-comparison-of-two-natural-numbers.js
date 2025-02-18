const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

if (a<b){
    let c = 1;
}
else{
    let c = 0;
}

if (a===b){
    let d = 1;
}
else{
    let d = 0;
}

console.log(c,d);