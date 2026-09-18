const prompt = require('prompt-sync')();

const C = parseFloat(prompt("enter temperature en °C :"));

if(C < 0){
    console.log("solid");
}
else if(C >= 0 &&  C <= 100){
    console.log("liquide");
}
else{
    console.log("gaz");
}