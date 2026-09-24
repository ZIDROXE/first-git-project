const num = [2, 4, 0, 11, 55, 1];
let tmp;
for(let round = 0; round < num.length; round++)
{
 for(let i = 0; i < num.length - 1 - round; i++){
    if(num[i] > num[i + 1]){
        tmp = num[i];
        num[i] = num[i + 1];
        num[i + 1 ] = tmp;
    }
}
}

