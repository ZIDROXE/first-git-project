const prompt = require('prompt-sync')();

const C = parseFloat(prompt("Entrez la température en Celsius :"));
const K = C + 273.15;

console.log(`${C}°C correspond a ${K} K`);