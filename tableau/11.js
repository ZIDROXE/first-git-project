const prompt = require(`prompt-sync`)();
let numberElement = parseInt(prompt("enter number of element :"));

const tab = [];
let i = 0;
while(i < numberElement){
    tab[i] = parseInt(prompt(`enter element ${i + 1}:`));
    i++
}
let target = parseInt(prompt("enter element want to replace:"));
const newelement = parseInt(prompt("enter new value :"));

let found = false;
for(i = 0; i < tab.length; i++){
    if(target === tab[i]){
            found = true;
    }
}
if(found)
    tab[i] = newelement
else
{
    console.log("target not found");
}
console.log(tab);