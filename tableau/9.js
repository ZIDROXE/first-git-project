const tab = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < tab.length; i++){
    for(let j = tab.length - 1; j > i ; j--){
        let tmp;
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
}
console.log(tab);