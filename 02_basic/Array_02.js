let arr=[1,2,3,4,5,6]
let arr1=[7,8,9]
let newarr=[...arr,...arr1] // spread [...val]
console.log(newarr)


let a1=[1,2,3,4,[5,6,[7,8,9,[10]]]] // flat add all in one with flat method 
console.log(a1.flat(Infinity)) // flat add all in one with flat method //Infinity means all elements 


console.log(Array.isArray(a1)) // boolean (true or flase) // is that an array true or false
console.log(Array.from(newarr))   

console.log(a1)



// .of (its typeof is Object)
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3)) 
console.log(typeof (Array.of(s1,s2,s3))) 