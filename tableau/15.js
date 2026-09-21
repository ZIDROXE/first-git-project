const prompt = require(`prompt-sync`)();
const numberElement= parseInt(prompt("enter number of element tab1 :"));

const tab1 = [];
let i = 0;
while(i < numberElement){
    tab1[i] = parseInt(prompt(`enter element ${i + 1}:`));
    i++;
}
const numberElement_2= parseInt(prompt("enter number of element tab2 :"));

const tab2 = [];
let j = 0;
while(j < numberElement_2){
    tab2[j] = parseInt(prompt(`enter element ${j + 1}:`));
    j++;
}
for(i = 0; i < tab1.length; i++)
{
    tab1[i] = numberElement;
}
for(j = 0; j < tab2.length; j++);{
    tab2[j] = tab1[i];
    i++;
}
console.log(tab2);