const num = [233, 333, 1, 23, 4, 5];

let max = num[0];
let max2 = num[1];

for(let i = 1; i < num.length; i++){
    if(num[i] > max){
        max2 = max;
        max = num[i];
    }
    else if(num[i] > max2){
        max2 = num[i];
    }
}

console.log(max2);