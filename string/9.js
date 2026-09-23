const text = "hello world hello world";

let string = "";
for(let i = 0; i < text.length; i++){
    if(text[i] === " "){
        i++;
    }
    string += text[i];
}
console.log(string);