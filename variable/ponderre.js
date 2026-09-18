const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("enter number 1 :"));
const num2 = parseFloat(prompt("enter number 2 :"));
const num3 = parseFloat(prompt("enter number 3 :"));

const pond1 = 2;
const pond2 = 3;
const pond3 = 5;
const totpond = pond1 + pond2 + pond3;

const moyenpond = (((num1 * pond1) + (num2 * pond2)+ (num3 * pond3)) / totpond );

console.log(`${moyenpond}`);