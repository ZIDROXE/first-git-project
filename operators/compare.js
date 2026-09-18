const prompt = require("prompt-sync")();

const n1 = parseFloat(prompt("n1 :"));
const n2 = parseFloat(prompt("n2 :"));

console.log(`
    ${n1 === n2}
    ${n1 !== n2}
    ${n1 < n2}
    ${n1 > n2} 
    `)