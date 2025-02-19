const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let arr1 = input[0].split(" ");
let arr2 = input[1].split(" ");
let arr3 = input[2].split(" ");

let yn1 = arr1[0];
let yn2 = arr2[0];
let yn3 = arr3[0];

let c1 = Number(arr1[1]);
let c2 = Number(arr2[1]);
let c3 = Number(arr3[1]);

let result1, result2, result3;

if (yn1 === 'Y')
{
    if (c1 >=37){
        result1 = 'A';
    }
    else{
        result1 = 'C';
    }
}
else{
    if (c1>=37){
        result1 = 'B';
    }
    else{
        result1 = 'D';
    }
}

if (yn2 === 'Y')
{
    if (c2 >=37){
        result2 = 'A';
    }
    else{
        result2 = 'C';
    }
}
else{
    if (c2>=37){
        result2 = 'B';
    }
    else{
        result2 = 'D';
    }
}

if (yn3 === 'Y')
{
    if (c3 >=37){
        result3 = 'A';
    }
    else{
        result3 = 'C';
    }
}
else{
    if (c1>=37){
        result3 = 'B';
    }
    else{
        result3 = 'D';
    }
}

if ((result1 === 'A' && result2 ==='A' && result3 === 'A') || (result1 === 'A' && result2 ==='A') || (result2 ==='A' && result3 === 'A') || (result1 ==='A' && result3 === 'A')){
    console.log("E");
}
else{
    console.log("N");
}
