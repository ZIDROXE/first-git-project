const prompt = require('prompt-sync')();

const nemberelement = parseInt(prompt("enter number of element :"));
const numbers = [];

let i = 0;
while(i < nemberelement){
    numbers[i] = parseInt(prompt(`element ${i + 1} :`));
    i++;

}
let sum = 0;
for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);