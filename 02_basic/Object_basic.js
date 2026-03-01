const obj={}
console.log(obj)



const objsym=Symbol("key1")

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
  
console.log(obj1)
obj1.age=34
console.log(obj1)
// Object.freeze(obj1) //freeze the object so nothing gonna change later after freeze
obj1.age=22
console.log(obj1) 



// this keyword using to print name
obj1.greeting=function(){
     console.log(`hey there ${this.first_name} welcome`)
}

obj1.greeting()