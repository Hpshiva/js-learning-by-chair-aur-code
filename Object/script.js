// 1.Access Object Properties
const obj = {
    name: "shiva",
    age: 45,
    gender: "male"

}
// console.log(obj)
// console.log(obj["name"])
// console.log(Object.entries(obj))
// obj.greet()




// 2. Add Property
const studentManager = {
    student: [],
    addStudent(student) {
        this.student.push(student)
    },
    deleteStudent() {
        this.student.pop()
    },
    getShow() {
        return this.student
    }
}
studentManager.addStudent({
    id: 1,
    name: "Shiva",
    age: 25
})
studentManager.addStudent({
    id: 2,
    name: "kumar",
    age: 30
})
studentManager.addStudent({
    id: 3,
    name: "chai",
    age: 33
})
// console.log(studentManager.getShow())
const newmap = studentManager.getShow().map(elem => elem.age)
// console.log(newmap)






// 3 Add Property   Delete Property
const user = {
    name: "chai"
}
console.log(user)
user.age = 25
user.city = "Gulbarga"

console.log(user)   //{ name: 'chai', age: 25, city: 'Gulbarga' }
delete user.name
console.log(user)   //{ age: 25, city: 'Gulbarga' }






// 4.Object.keys()  Object.values()   Object.entries()
const phone = {
    modal: "samsumg f23",
    is5g: true,
    source: "online"
}
console.log(Object.keys(phone))
console.log(Object.values(phone))
console.log(Object.entries(phone))





// 5 sum of values
const obj1 = {
    first: 10,
    second: 32,
    third: 42
}
let sum = 0
console.log(Object.values(obj1).reduce((acc, inc) => {
    return sum = acc + inc
}, 0))
// length
console.log(Object.keys(obj).length)





// 6.Check Property Exists
const user1 = {
    name: "Shiva",
    age: 25
}

const res1 = "age" in user1
const res2 = "city" in user1
console.log(res1)
console.log(res2)




// 7. Loop Through Object
const loop = {
    Char_name: "shiva",
    Char_age: 25
}
for (const elem in loop) {
    console.log(elem, loop[elem])
}



//  8.Object Method + this
const myName = {
    name: "chai",
    greet() {
        return `My name is ${this.name}`
    }
}
console.log(myName.greet())



// 9. Merge Objects
const a = {
    first: 1
}
const b = {
    second: 2
}
const c = { ...a, ...b }
console.log(c)



//  10. Student Manager (Interview Favorite)
const students = [
    { id: 1, name: "Shiva" },
    { id: 2, name: "Ravi" }
]
const res = students.find(item => item.id == "2")
console.log(res)
console.log(typeof res)




//   11. Update Object Inside Array
const inside = [
    { id: 1, name: "Shiva" },
    { id: 2, name: "Ravi" }
]
inside.filter(item => {
    if (item.name == "Ravi")
        return item.name = "Ravi Kumar"
})
console.log("11.", inside)




//  12. Remove Object From Array
const arr12 = [
    { id: 1, name: "Shiva" },
    { id: 2, name: "Ravi" }
]

const newarr = arr12.filter(item => item.id !== 2)
console.log("12.", newarr)



// 13.Shopping Cart (Very Common)
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
]
const cartValue = cart.reduce((acc, item) => {
    return acc = acc + item.price
}, 0)
console.log("13.", cartValue)



//  14.Group By Property (Intermediate)
const propertyBy = [
    { name: "A", city: "Bangalore" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Bangalore" }
]

const group = {}
propertyBy.forEach(element => {
    if (!group[element.city]) {
        group[element.city] = []
        group[element.city].push(element)
    }
    else
        group[element.city].push(element)
});
console.log("14.", group)




//  15.Group By Property (Intermediate)
const studentGrade = [
    { name: "Shiva", grade: "A" },
    { name: "Ravi", grade: "B" },
    { name: "Kumar", grade: "A" },
    { name: "John", grade: "C" }
]
const sortBy = {}
studentGrade.forEach(item => {
    if (!sortBy[item.grade]) {
        sortBy[item.grade] = []
        sortBy[item.grade].push(item)
    }
    else
        sortBy[item.grade].push(item)
});
console.log("15.", sortBy)



//  16.Group By Property (Intermediate)
const citys = [
    { name: "A", city: "Bangalore" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Bangalore" },
    { name: "D", city: "Delhi" },
    { name: "E", city: "Bangalore" }
]
const citySort = {}
citys.forEach(item => {
    if (!citySort[item.city]) {
        citySort[item.city] = 0
        citySort[item.city]++
    }
    else {
        citySort[item.city]++
    }
})
console.log("16.", citySort)