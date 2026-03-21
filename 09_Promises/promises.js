//  PROMISE 1
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task is compeleted")
        resolve()   // only with this it will connect to .then 

    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed")
    // always this "Promise consumed" come later 
})



//  WITHOUT THE VARIABLE ABLE AND ALL 
//  PROMISE 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2 completed")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Second Task is over")
})


//  PROMISE 3
const prmiseThird = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "shiva", userEmail: "shivakumar.bfgi@gmail.com" })
    }, 1000)
}).then(function (data) {
    console.log(data)
    console.log("Promise 3rd over")
})


//  PROMISE 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ id: "1", name: "shiva", age: "25" })
        }
        else {
            reject("Error: Something Went Wrong")
        }
    }, 1000)
})
promiseFour.then((data) => {
    console.log(data)
    return data.name
}).then((dataName) => {
    console.log(dataName)
}).catch((error) => {
    console.log(error)
    console.log("Error Catched in .catch()")
}).finally(() => {
    console.log("finally over")
})


//*******  FINALLY ********//

// 🍔 Real Life Scenario (Best Example)
// 👉 ATM Machine 💳

// You go to ATM:

// Insert card
// Enter PIN
// Try to withdraw money

// Two possibilities:
// ✅ Success
// Money comes out 💸
// Transaction successful

// ❌ Failure
// Wrong PIN / No balance


// Transaction failed   (FINALLY WORKS)
// 🔥 But in BOTH cases:
// 👉 Card comes back
// 👉 Screen resets




//  PROMISE 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ charactor: "gojo", power: "Grade 5" })
        }
        else {
            reject("Error: Charactor Went Wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()



//  API FETCH WITH (ASYNC/WAIT)
async function getAllUser() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data)
        data.map((item, index) => {
            console.log(item)
        })
    } catch (error) {
        console.log(error)
    }

}
// getAllUser()


//  API FETCH WITH (.THEN)
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)  
    })
    .catch((error) => {
        console.log(error)
    })