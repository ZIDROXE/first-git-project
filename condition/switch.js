const prompt = require('prompt-sync')();

const char = prompt("enter character :").toLowerCase();

switch(char){

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
        console.log(`"${char}" voyelle`);
            break;
    default :
        console.log(`"${char}" pas une voyelle`);
}