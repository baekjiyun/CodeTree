const fs = require("fs");
let input = Number(fs.readFileSync(0).toString());
let a = input===1 ? 't' : 'f';
console.log(a);