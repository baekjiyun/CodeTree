const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let y = input[2];
let m = input[0];
let d = input[1];
console.log("%d.%d.%d",y,m,d);