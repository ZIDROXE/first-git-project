const num = [2, 4, 5, 2, 1, 9, 11, 44, 34, 312];
sort(num);
console.log(num);
const target = 44;
let left = 0;
let right = num.length - 1;

let findIndex = -1;

let i = 0;
while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(target === num[mid]){
            findIndex = mid;
            break;
    }
    else if(target < num[mid]){
        right = mid - 1;
    }
    else{
        left = mid + 1;
    }
}
if(findIndex !== -1){
    console.log(`target ${target} is found in ${findIndex}`);
}else{
    console.log("target is not found");
}
function sort(num){
    let tmp;
    for(let round = 0; round < num.length; round++)
        {
            for(let i = 0; i < num.length - 1; i++){
                if(num[i] > num[i + 1]){
                    tmp = num[i];
                    num[i] = num[i + 1];
                    num[i + 1 ] = tmp;
                }
            }
        }
        return num;
    }