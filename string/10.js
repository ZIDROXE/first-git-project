const mainStr = "hello world";
const str_find = "wor";

let i = 0;
let match = false;
while(i < mainStr.length){
    let j = 0;
   while(j < str_find.length && mainStr[i + j] == str_find[j]){
       j++;
    
       if(str_find[j] == undefined){
        match = true;
        break;
       }
    }
    i++;
}
if(match){
    console.log("string dyalk kayna");
}
else
    console.log("makaynach ");