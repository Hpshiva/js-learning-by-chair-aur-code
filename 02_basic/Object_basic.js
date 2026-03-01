const obj={}
console.log(obj)


const objsym=Symbol()

const obj1={
    first_name:"shiva",
    sur_name:"kumar",
    age:45,
    [objsym]:"this is a datatype (Symbol)"

}
console.log(obj1)
console.log(obj1.age)
console.log(typeof obj1.age)


// console.log(obj1.objsym)
// console.log(typeof obj1.objsym) // not a good way to access SYMBOL 

console.log(obj1[objsym]) //CORRECT WAY TO ACCESS A SYMBOL
console.log(typeof objsym)
  