

const prompt = require('prompt-sync')();
const numberelment = parseFloat(prompt("enter number of element: "));

const numbers = [];

let i = 0;
while(i < numberelment)
{
    number [i] = parseInt(prompt(`enter element ${i + 1}:`));
   
    i++;
}
i = 0;
while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}