const prompt = require('prompt-sync')();

let number = parseInt(prompt("enter number :"));

factorial = 1
for(i = 1; i <= number; i++){
    factorial *= i;
}
 console.log(`${factorial}`);
