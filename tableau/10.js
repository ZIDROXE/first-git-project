const prompt = require(`prompt-sync`)();
let numberElement = parseInt(prompt("enter number of element :"));

const tab = [];
let i = 0;
while(i < numberElement){
    tab[i] = parseInt(prompt(`element${i + 1}:`));
    i++
}
const target = parseInt(prompt("enter number to target:"));
const found = false;
for(i = 0; i < tab.length;i++){
    if(target === tab[i]){
        found = true;
    }
}
if(found)
    console.log(`${target} is found`);
else
    console.log(`${target} not found`);