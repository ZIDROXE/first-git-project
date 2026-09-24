let num = [1, 4, 5, 2, 6];

const target = 22;
let found = false;
for(let i = 0;i < num.length; i++){
    if(num[i] === target){
        found = true;
        break;
    }
}
if(found){
    console.log("number is found");
}else
    console.log("number is not found");