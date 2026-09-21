const prompt = require(`prompt-sync`)();
const numberElement= parseInt(prompt("enter number of element :"));


const tab = [];
let i = 0;
while(i < numberElement){
    tab[i] = parseInt(prompt(`enter element ${i + 1}:`));
    i++;
}
let sum  = 0;
for(i = 0; i < tab.length; i++){
    sum += tab[i];
}
 console.log(`moyen = ${sum / tab.length}`);