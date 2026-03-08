// for loop

// to print 1 to 10 
for (let index = 1; index <=10; index++) {
  console.log(index) 
}


// for with Array
let myArray=["shiva","shrishail","sunil"]
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

// break
// for(let i=0;i<=10;i++){
//     console.log(` value of i is ${i}`)
//     if(i==5){
//         console.log("5 is best go im done")
//         break
//     }
// }

let a="shiva"
let b=""
for (let index = a.length-1; index>=0; index--) {
b=b+a[index]
    // console.log(a[index])
}
console.log(b)
