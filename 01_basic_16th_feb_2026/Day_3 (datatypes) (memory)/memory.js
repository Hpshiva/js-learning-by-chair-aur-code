// STACK - (PRIMITIVE)

let talkABoutStack1="shiva@shiva"

let talkABoutStack2=talkABoutStack1
talkABoutStack2="change@change"

console.log("STACK - ( PRIMITIVE )")
console.table([talkABoutStack1,talkABoutStack2])



// HEAP - (NON - PRIMITIVE)

let heap1={
    name:"shiva",
    email:"shiva@gmail.com"
}

let heap2=heap1
heap2.email="change@gmail.com"
console.log("HEAP - ( NON PRIMITIVE )")
console.table([heap1,heap2])
