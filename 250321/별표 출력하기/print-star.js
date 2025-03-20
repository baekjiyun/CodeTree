const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let str = "";
for(let i=1;i<n;i++){
    str="";
    for(let j=0;j<i;j++){
        str+="* ";
    }
    console.log(str);
}
for(let k=n;k>0;k--){
    str="";
    for(let j=0;j<k;j++){
        str+="* ";
    }
    console.log(str);
}
    