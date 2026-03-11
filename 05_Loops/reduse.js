const arr=[1,2,3]

const intinaValue=0
let arr1=arr.reduce((acc,curtval)=>{
    console.log(`acc:- ${acc} and current val:- ${curtval}  = sum:- ${acc+curtval}`)
    return acc+curtval
},0)

console.log(arr1)

const obj=[
    {
        thing:"js course",
        price:999
    },
    {
        thing:"java course",
        price:9999
    },
    {
        thing:"c++ course",
        price:1299
    },
    {
        thing:"math course",
        price:1100
    }
]

// const obj1=obj.reduce((acc,item)=>(acc+item.price),0)
const obj2=obj.reduce((acc,item)=>{
    return acc+item.price
},0)
console.log(obj2)