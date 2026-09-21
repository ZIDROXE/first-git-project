const prompt = require('prompt-sync')();
const text = prompt ("enter you're text :");
let upper = "";
let i = 0;
while(text[i] != undefined){
    if(text[i] >= "a" && text[i] <= "z"){
        let code = text.charCodeAt(i);
        code -= 32;
        let numTochar = String.fromCharCode(code);
        upper += numTochar;
    }
    else
    {
        upper += text[i];
    }
    i++;
}
console.log(upper);
