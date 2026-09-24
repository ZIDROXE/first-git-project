let numbers = [5, 3, 8, 1, 4];

console.log("Before:", numbers);

for(let i = 0; i < numbers.length - 1; i++){

    let minIndex = i;

    for(let j = i + 1; j < numbers.length; j++){

        if(numbers[j] < numbers[minIndex]){
            minIndex = j;
        }
    }

    let temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
}

console.log("After:", numbers);