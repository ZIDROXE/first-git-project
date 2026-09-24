const employees = [
 { id: 101, name: "Amine", department: "IT", salary: 75000 },
 { id: 102, name: "Sarah", department: "HR", salary: 60000 },
 { id: 103, name: "Youssef", department: "Sales", salary: 55000 },
 { id: 104, name: "Fatima", department: "marketing", salary: 68000 },
 { id: 105, name: "abdelilah", department: "IT", salary : 80000}
];

let i = 0;
while(i < employees.length){
    console.log(` ${employees[i].name}-${employees[i].department}-${employees[i].salary}`);
    i++;
}

