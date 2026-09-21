const prompt = require('prompt-sync')();

const numberelment = parseInt(prompt("enter number of element: "));

const numbers = [];
let i = 0;
while(i < numberelment){
    numbers[i] = parseInt(prompt (`element ${i + 1}:`));
    i++;
}
let rounds = 0;
while(rounds < numbers.length - 1){
     let i = 0;
    while(i < numbers.length - 1 - rounds){
        if(numbers[i] > numbers[i + 1]){
            let tmp;
            tmp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = tmp;
        }
        i++;
    }
    rounds++;
}
console.log(numbers);