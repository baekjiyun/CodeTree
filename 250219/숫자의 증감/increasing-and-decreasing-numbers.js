const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");
let c = input[0];
let n = Number(input[1]);
let result = '';
if (c === "A"){
    for(let i=1;i<=n;i++){
        result += (i + " ");
        }
}

else if (c === "D"){
    for(let i=n;i>0;i--){
        result += (i + " ");
        }
}

console.log(result);