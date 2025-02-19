const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let arr1 = input[0].split(" ");
let arr2 = input[1].split(" ");
let age1 = Number(arr1[0]);
let age2 = Number(arr2[0]);
let gender1 = arr1[1];
let gender2 = arr2[1];

if((age1 >= 19 && gender1 === 'M') || (age2 >= 19 && gender2 === 'M')){
    console.log(1);
}

else{
    console.log(0);
}