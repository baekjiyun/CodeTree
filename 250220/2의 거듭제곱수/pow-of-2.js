const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let x = 0;
while(true){
    if(parseInt(n/2)===1){
        x++;
        break;
    }
    else{
        n = parseInt(n/2);
        x++;
    }    
}

console.log(x);