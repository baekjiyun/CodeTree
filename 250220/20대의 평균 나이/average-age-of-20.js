const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let sum = 0;
let index = 0;
let n;
while(true){
    n = Number(input[index]);
    if(n>29 || n<20){
        break;
    }
    sum += n;
    index++;
}

console.log((sum/(index)).toFixed(2));