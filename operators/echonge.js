const prompt = require("prompt-sync")();

let a = parseFloat(prompt(("enter a :")));
let b = parseFloat(prompt(("enter b :")));

let tmp;
tmp = a;
a = b;
b = tmp;

console.log(`
    a = ${a};
    b = ${b};
    `);