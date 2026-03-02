const obj1={
    fast_name:"shiva",
    last_name:"kumar",
    age:34
}
const obj2={
    email:"shiva@designeshthetics.com",
    age:22
}

const obj3=Object.assign(obj1,obj2)
console.log(obj3)

const obj4={...obj1,...obj2}
console.log(obj4)

const arrobj=[
    {name:"shiva",
        gender:"male",
    },
    {
        name:"kumar",
        age:34
    }
]
console.log(arrobj[1])
console.log(Object.keys(obj1))
console.log(Object.values(obj1))