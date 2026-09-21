const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter number of elements: "));

let numbers = [];
let i = 0;

while (i < n)
{
    numbers[i] = parseInt(prompt("Enter element: "));
    i++;
}

let min = numbers[0];

i = 1;
while (i < numbers.length)
{
    if (numbers[i] < min)
    {
        min = numbers[i];
    }

    i++;
}

console.log("Minimum:", min);