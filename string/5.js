let str = "abcd";
let inversion = "";
for(let i = str.length - 1; i >= 0; i--){
    inversion += str[i];
}
console.log(inversion);
