const employees = [
    {
        id: 1,
        name: "Shiva",
        department: "Frontend",
        salary: 50000,
        active: true
    },
    {
        id: 2,
        name: "John",
        department: "Backend",
        salary: 70000,
        active: false
    },
    {
        id: 3,
        name: "Ram",
        department: "Frontend",
        salary: 60000,
        active: true
    },
    {
        id: 4,
        name: "Sara",
        department: "UI/UX",
        salary: 55000,
        active: true
    }
];

/*
Easy
Get an array of all employee names.
Get an array of all departments.
Find the employee with id = 3.
Get all active employees.
Get all inactive employees.
*/

//E1
const empName = employees.map(item => item.name)
console.log("E1", empName)

//E2
const appDepart = employees.map(item => item.department)
console.log("E2", appDepart)

//E3
const findId = employees.find(item => item.id == 3)
console.log("E3", findId)

//E4
const activeUser = employees.filter(item => item.active == true)
console.log("E4", activeUser)

//E5
const inactiveUser = employees.filter(item => item.active == false)
console.log("E5", inactiveUser)



/*
Medium
Get all Frontend employees.
Get employees whose salary is greater than 55000.
Get the total salary of all employees.
Get the average salary of all employees.
Sort employees by salary(low → high).
Sort employees by salary(high → low).
Sort employees alphabetically by name.
*/

//M1
const frontendEmp = employees.filter(item => item.department == "Frontend")
console.log("M1", frontendEmp)

//M2
const salGreater = employees.filter(item => item.salary > 55000)
console.log("M2", salGreater)

//M3
const totalSalary = employees.reduce((sum, item) => {
    return sum = sum + item.salary
}, 0)
console.log("M3", totalSalary)

//M4
const averageSalary = totalSalary / employees.length
console.log("M4", averageSalary)

//M5
const sortByLH=employees.filter(item=>())