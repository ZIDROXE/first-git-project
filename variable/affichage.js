const prompt = require('prompt-sync')();

const nom = prompt("Quel est votre nom ?");
const prenom = prompt("Quel est votre prénom ?");
const age = prompt("Quel est votre âge ?");
const sexe = prompt("Quel est votre sexe (M/F) ?");
const email = prompt("Quelle est votre adresse e-mail ?");

console.log(`Voici vos informations :
    -nom = ${nom};
    -prenom = ${prenom};
    -age = ${age};
    -sex = ${sexe};
    -email = ${email};
    `)