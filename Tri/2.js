const employees = [
    { id: 101, name: "Amine", department: "IT", role: "Software Engineer", salary: 75000, isActive: true },
    { id: 102, name: "Sarah", department: "HR", role: "HR Manager", salary: 60000, isActive: true },
    { id: 103, name: "Youssef", department: "Sales", role: "Sales Executive", salary: 55000, isActive: false },
    { id: 104, name: "Fatima", department: "IT", role: "Data Analyst", salary: 68000, isActive: true },
    { id: 105, name: "Karim", department: "Marketing", role: "Marketing Director", salary: 85000, isActive: true }
];

let sum = 0;


for (let i = 0; i < employees.length; i++) {
    sum = sum + employees[i].salary;
}

let average = sum / employees.length;

console.log("Moyenne :", average);


for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > average) {
        console.log(employees[i].name);
    }
}