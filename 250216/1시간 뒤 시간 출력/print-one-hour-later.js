const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(":");
let a = Number(input[0])+1;
let b = Number(input[1]);
console.log("%d:%d",a,b);