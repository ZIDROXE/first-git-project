const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter number of elements: "));

let numbers = [];
let i = 0;

while (i < n)
{
    numbers[i] = parseInt(prompt("Enter element: "));
    i++;
}

let factor = parseInt(prompt("Enter multiplication factor: "));

i = 0;

while (i < numbers.length)
{
    numbers[i] = numbers[i] * factor;
    i++;
}

console.log(numbers);