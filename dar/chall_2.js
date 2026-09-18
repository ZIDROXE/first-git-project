const prompt = require('prompt-sync')();

const age = parseFloat(prompt("Enter age: "));
const typevoit = parseFloat(prompt(
	"Type (1: sport, 2: utilitaire, 3: familiale): "
));
const numaccident = parseFloat(prompt("Enter number of accidents: "));

const primedebase = 500;
let prime = primedebase;

if (age < 25) {
	prime = prime * 1.5;
}
else if (age > 65) {
	prime = prime * 1.2;
}

switch (typevoit) {
	case 1:
		prime = prime * 2;
		break;
	case 2:
		prime = prime * 1.2;
		break;
	case 3:
		prime = prime * 1.1;
		break;
	default:
		console.log("Type de voiture invalide");
}

if (numaccident > 1) {
	prime = prime * 1.3;
}

console.log(`Prime finale : ${prime}`);