let student = {
    nom : "abdelilah",
    prenom: "sadik",
    notes: [10, 20, 30, 40, 50]
};
console.log(student.nom);
console.log(student.prenom);

let some = 0
let moyen = 0;
for(let note of student.notes){
    some += note;
}
moyen = some / student.notes.length;
console.log(`le moyen dyal notes dyalk howa : ${moyen}`);

