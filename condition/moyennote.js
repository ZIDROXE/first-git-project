const prompt = require('prompt-sync')();

const moyennote = parseFloat(prompt("enter moyen :"));

if(moyennote < 10){
    console.log("recale");
    return;
}
else if(moyennote >=10 && moyennote <= 12){
    console.log("pasable");
}
else if(moyennote >= 13 && moyennote <= 14){
    console.log("assez bien");
}
else if(moyennote >= 15 && moyennote <= 16){
    console.log("bein");
}
else {
    console.log("tres bein");
}