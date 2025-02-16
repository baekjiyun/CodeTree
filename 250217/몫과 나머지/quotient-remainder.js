const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
console.log("%d...%d",parseInt(input[0]/input[1]),input[0]%input[1]);