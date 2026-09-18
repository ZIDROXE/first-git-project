const prompt = require('prompt-sync')();

const km = parseFloat(prompt("enter distance en km :"));
const yard = km * 1093.61;

console.log(`yard distance : ${yard.toFixed(2)}`);