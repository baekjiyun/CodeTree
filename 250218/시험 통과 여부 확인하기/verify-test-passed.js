const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
if (n>=80){
    console.log("pass");
}else{
    console.log("%d more score",80-n);
}