let arr=[1,2,3,4,5,6]
let arr1=[7,8,9]
let newarr=[...arr,...arr1] // spread [...val]
console.log(newarr)


let a1=[1,2,3,4,[5,6,[7,8,9,[10]]]] // flat add all in one with flat menothd 
console.log(a1.flat(Infinity))


console.log(Array.isArray(a1))
console.log(Array.from(newarr))   

console.log(a1)