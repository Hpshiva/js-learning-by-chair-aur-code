// while(condtion){
// syntax
// }



let myArray=[10,20,30,40,50]
let i=0
while (i<myArray.length){
    console.log(myArray[i])
    i++
}
console.log(i)




let j=0
do{
    // console.log(j)
    j++
}while(j<j)



    // When using an ATM:

    // You enter the PIN first

    // Then the machine checks if the PIN is correct

    // If wrong → it asks again
    // 💡 Even if the PIN is wrong, the program asks at least once.
        let pin;
        do {
        pin = prompt("Enter your ATM PIN");
        } while (pin !== "1234");

        console.log("Access Granted");