const prompt = require("prompt-sync")();

let x = parseFloat(prompt("enter x :"));

console.log(`
    x1 = ${x += x}
    x2 = ${x -= x}
    x2 = ${x *= x}
    x3 = ${x /= x}
    `)