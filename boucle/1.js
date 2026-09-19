const prompt = require('prompt-sync')();

let  number = parseFloat(prompt("enter number: "));

let i = 1;
while(i <= 10){
    console.log(`${number * i}`);
    i++;
}