const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let i = 0;
while(i<n){
    console.log("*");
    i++;
}