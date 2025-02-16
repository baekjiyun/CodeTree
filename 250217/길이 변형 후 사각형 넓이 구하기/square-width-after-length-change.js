const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let w = Number(input[0])+8;
let h = Number(input[1])*3;
console.log("%d\n%d\n%d",w,h,w*h);