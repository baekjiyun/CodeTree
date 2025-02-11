const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
console.log((30.48*n).toFixed(1));