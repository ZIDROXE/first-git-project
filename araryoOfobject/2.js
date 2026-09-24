const students = [
 { id: 1, name: "Amine", age: 20, grade: 15 },
 { id: 2, name: "Sara", age: 21, grade: 17 },
 { id: 3, name: "Youssef", age: 19, grade: 12 },
 { id: 4, name: "Fatima", age: 22, grade: 18 }
];

const prompt = require('prompt-sync')();
const id = parseInt(prompt("enter student id to find it :"));

let found = false;
for(let i = 0; i < students.length; i++){
    if(students[i].id === id){
        console.table(students[i]);
        found = true;
        break;
    }
}

if(!(found)){
    console.log("student id is not found");
}