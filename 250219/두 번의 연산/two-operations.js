const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());
if (input%2 === 1){
    input+=3;
}
if (input%3 === 0){
    input= parseInt(input/3);
}

console.log(input);