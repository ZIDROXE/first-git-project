const prompt = require('prompt-sync')();

const n1 = parseFloat(prompt("num 1:"));
const n2 = parseFloat(prompt("num 2:"));
const n3 = parseFloat(prompt("num 3:"));

/*const num1 = 10;
const num2 = 20;
const num3 = 30;*/

const multiplenum = (n1 * n2 * n3);
const moyengeom = Math.pow(multiplenum, 1 / 3);

console.log(`${moyengeom.toFixed(2)}`);
