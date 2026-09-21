const prompt = require(`prompt-sync`)();
let numberElement = parseInt(prompt("enter number of element :"));

const tab = [];
let i = 0;
while(i < numberElement){
    tab[i] = parseInt(prompt(`enter element ${i + 1}:`));
    i++
}
for(i = 0; i < tab.length; i++){
    if(tab[i] % 2 === 0){
        console.log(tab[i]);
    }
}