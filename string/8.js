const prompt = require('prompt-sync')();
const text = prompt("enter you're text : ");

let lower = "";
let i = 0;
while(text[i] !== undefined){
    if(text[i] >= "A" && text[i]<= "Z"){
      let code = text.charCodeAt(i);
      code += 32;
      let numTochar = String.fromCharCode(code);
      lower += numTochar;
    }
    else{
        lower += text[i];
    }
    i++;
}
console.log(lower);