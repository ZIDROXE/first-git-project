const numbers = [1, 2, 3, 4, 5,];
const copy = [...numbers];

/*for(let i = 0; i < numbers.length; i++){
    copy = numbers;
    
}*/
copy[0] = 100;
console.log(numbers);
console.log(copy);