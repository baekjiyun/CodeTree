const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");
console.log("010-%d-%d",input[2],input[1]);