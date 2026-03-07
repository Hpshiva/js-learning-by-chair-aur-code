const user={
    username:"shiva",
    price:999,

    welcomeGreet()
    {
        console.log(`${this.username} ta da ,, welcome to js and thanks to pay ${this.price}`)
        console.log(this)            // talks about the current { content }
    }
    
}
// user.welcomeGreet()
// user.username="rakesh"
// user.welcomeGreet()




// console.log(this)            // if we check this in node then it gonna show  {empty} {} 
                                // if we see in broswer console then it gonna show window object 




// arrow function


// 1. basic way
const addsum=(a,b)=>{
    return a+b
}
console.log( addsum(2,2),` , this is explicit way`)


// 2. implicit way
const addsum1=(a,b)=> a+b
console.log(addsum1(2,4),` , this is inplicit way`)
