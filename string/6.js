const prompt = require("prompt-sync")();
const str = prompt ("enter you're text :");
const character = prompt ("enter character you want to find it :");

let i = 0;
let findtime = 0;
while(str[i] !== undefined){
    if(character === str[i]){
        findtime++;
    }   
    i++;
}
if(str !== character)
{
    console.log("not find you're char");
}
else
    console.log(`find "${character}" ${findtime} time`);