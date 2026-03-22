console.log(Math.PI)
console.log(Math.round(Math.PI)) // 3
console.log(Math.floor(Math.PI)) // 3
console.log(Math.ceil(Math.PI))  // 4
// but here we are not change the real value of Math.PI here just changing the console.log values

// 🔥 One-line memory
// 👉 Math.PI is permanently locked — no override, no redefine, no change
// but 🧠 Final Answer

// 👉 NO ❌ you cannot change the real value of Math.PI

// 🔍 Why?
// Because Math.PI is defined like this internally:

// {
//      value: 3.141592653589793,
//          writable: false,
//              configurable: false
// }

// 👉 So:
// writable: false → ❌ can’t change value
// configurable: false → ❌ can’t redefine it


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter)


//  own Object
const chai = {
    name: "shiva",
    age: 25,
    weight: 75
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"))
Object.defineProperty(chai, "name", {
    writable: false,        //makes writable false if tries to change value it will not get change

})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))


chai.name = "kumar"
console.log(chai)