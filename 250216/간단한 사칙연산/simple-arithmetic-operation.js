const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
console.log("%d\n%d\n%d\n%d",a+b,a-b,parseInt(a/b),a%b);