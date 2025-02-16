const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
console.log("%d * %d = %d\n %d / %d = %d",input[0],input[1],input[0]*input[1],input[0],input[1],parseInt(input[0]/input[1]));