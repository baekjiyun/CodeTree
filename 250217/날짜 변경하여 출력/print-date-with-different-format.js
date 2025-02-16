const fs = require("fs");
let input = fs.readFileSync(0).toString().split(".");
console.log("%d-%d-%d",input[1],input[2],input[0]);