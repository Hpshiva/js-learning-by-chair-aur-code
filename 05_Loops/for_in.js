const obj={
    name:"shiva",
    age:23,
    sex:"male",
    education:"mca"
}

// for (const element of obj) {
//     // console.log(element)            //TypeError: obj is not iterable
// }
// so we are (for in )for that 


for (const key in obj) {
    // console.log(key)
    console.log(`${key} - and there values are - ${obj[key]}`)
}



// Working for ARRAY
const arr=[10,20,40,50,20]
for (const key in arr) {
    console.log(`${key} - and there values are - ${arr[key]}`)
}


// for of // gives -> values
// for in // give -> keys