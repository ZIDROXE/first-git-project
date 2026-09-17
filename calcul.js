const prompt = require('prompt-sync')();

const a = parseFloat(prompt("enter number a :"));
const b = parseFloat(prompt("enter number b :"));

const za1id = a + b;
const darbe = a * b;
const na9is = a - b;
const l9isma = a / b;
const modulo = a % b;


console.log(`
    a + b = ${parseFloat(za1id)}
    a * b = ${parseFloat(darbe)}
    a - b = ${parseFloat(na9is)}
    a / b = ${parseFloat(l9isma)}
    a % b = ${parseFloat(modulo)}
    `)