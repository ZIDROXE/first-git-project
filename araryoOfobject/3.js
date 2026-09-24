const employees = [
 { id: 101, name: "Amine", department: "IT", role: "Software Engineer" },
 { id: 102, name: "abdelilah", department: "IT", role: "AI Engineer" },
 { id: 103, name: "Youssef", department: "Sales", role: "Sales Executive"},
 { id: 104, name: "Fatima", department: "IT", role: "Data Analyst" },
 { id: 105, name: "Karim", department: "Marketing", role: "Marketing Director" }
];

const prompt = require('prompt-sync')();
const department = prompt("enter department :");


let match = false;

for(let i = 0; i < employees.length; i++){
    if(department === employees[i].department){
        match = true;
        console.log(`${employees[i].name} - ${employees[i].role}`);
    }
   
}
if(!match){
    console.log("can't found this department");
}

