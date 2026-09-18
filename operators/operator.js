const prompt = require('prompt-sync')();

const n1 = parseFloat(prompt("number 1 :"));
const n2 = parseFloat(prompt("number 2 :"));

console.log(`
    somme = ${n1 + n2};
    deference = ${n1 - n2};
    produit = ${n1 * n2};
    quotion = ${n1 / n2};
    `)