const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";
for(let i = 1; i<=n;i++){
    let i1 = i%10;
    let i2 = parseInt(i/10);
    if((i%3===0) || (i1===3) || (i1===6) || (i1===9) || (i2===3) || (i2===6) || (i2===9)){
        result +=(0+" ");
    }
    else{
        result += (i+" ");
    }
}
console.log(result);