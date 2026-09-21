const prompt = require('prompt-sync')();
 const text = prompt("enter you're text :");

let count = 0;
while(text[count] !== undefined){
    count++;
}
console.log(count);
/* let texte = prompt("Entrez une chaîne :");
let count = 0;

// La boucle for...of parcourt chaque caractère de la chaîne
for (let char of texte) {
    count++;
}

console.log(`La longueur de "${texte}" est de ${count} caractères.`);*/