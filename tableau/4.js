const prompt = require('prompt-sync')();

const numberElment = parseInt(prompt("enter number of element :"));

const numbers = [];
let i = 0;
while(i < numberElment){
    numbers[i] = parseInt(prompt(`element ${i + 1}:`));
    i++;
}

let max = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(max < numbers[i]){
        max = numbers[i];
    }
}
console.log(max);
