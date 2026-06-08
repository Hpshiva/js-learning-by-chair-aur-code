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
    },
    {
        id: 5,
        name: "sam",
        department: "Frontend",
        salary: 5000,
        active: false
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
const sortByLH = [...employees].sort((a, b) => a.salary - b.salary)
console.log("M5", sortByLH)

//M6
const sortByHL = [...employees].sort((a, b) => b.salary - a.salary)
console.log("M6", sortByHL)

//M7
const sortByAlpha = [...employees].sort((a, b) => a.name.localeCompare(b.name))
console.log("M7", sortByAlpha)



/*
Advanced
Get names of all active employees.
Get total salary of only active employees.
Find the highest - paid employee.
Find the lowest - paid employee.
Check if all employees are active.
Check if at least one employee is inactive.
Count how many employees belong to the Frontend department.
Create a new array containing only employee names and salaries.
*/

// A1
const a1 = employees.filter(item => item.active).map(item => item.name)
console.log("A1", a1)


//A2
const a2 = employees
    .filter(item => item.active)
    .reduce((sum, item) => {
        return sum = sum + item.salary
    }, 0)
console.log("A2", a2)


//A3
let a3 = employees[0]
for (const comp of employees) {
    if (comp.salary > a3.salary) {
        console.log("comp.salary", comp.salary, ">", "a3.salary", a3.salary)
        a3 = comp
    }
}
console.log("A3", a3)

//A4
let a4 = employees[0]
console.log("A3", a3)
for (const comp of employees) {
    if (comp.salary < a4.salary) {
        console.log("comp.salary", comp.salary, ">", "a3.salary", a3.salary)
        a4 = comp
    }
} console.log("A4", a4)

// A5
const a5 = employees.every(item => item.active)
console.log("A5", a5)

// A6
const a6 = employees.some(item => !item.active)
console.log("A6", a6)

// A7
const a7 = employees.filter(item => item.department == "Frontend").length
console.log("A7", a7)

// A8
const a8 = employees.map(item => {
    return ({
        name: item.name,
        salary: item.salary
    })
})
console.log("A8", a8)


/*

Challenge
Get all active Frontend employees.
Get the total salary of Frontend employees only.
Find the first employee whose salary is greater than 55000.
Get employee names sorted by salary descending.
Create an object like:
{
  Frontend: 2,
  Backend: 1,
  "UI/UX": 1
}

*/

// C1
const c1 = employees.filter(item => item.active && item.department == "Frontend")
console.log("C1", c1)

// C2
const c2 = employees.filter(item => item.department == "Frontend").reduce((sum, item) => {
    return sum = sum + item.salary
}, 0)
console.log("C2", c2)

// C3
const c3 = employees.find(item => item.salary > 55000)
console.log("C3", c3)

// C4
const c4 = [...employees]
    .sort((a, b) => b.salary - a.salary)
    .map(item => item.name)
console.log("C4", c4)

// C5
const c5Res = {}
for (const emp of employees) {
    if (!c5Res[emp.department]) {
        c5Res[emp.department] = 0
        c5Res[emp.department]++
    }
    else
        c5Res[emp.department]++

}
console.log("C5", c5Res)