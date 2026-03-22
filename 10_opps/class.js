// ⚡ So technically:

// 👉 JS is prototype-based language
// 👉 NOT a true class-based language like Java or C++



// 🧠 Your statement (fixed)

// 👉 JavaScript DOES have classes (syntax)
// 👉 But internally they are built using functions + prototypes

// ✅ Correct Understanding

// 👉 When you write:

// class User {}

// 👉 JS engine converts it internally to:

// function User() {}
// User.prototype.method = function () {}



class User {
    constructor(userName, userMail, userPassword) {
        this.userName = userName
        this.userMail = userMail
        this.userPassword = userPassword
    }

    encryptpassword() {
        return `${this.userPassword}abc`
    }
}


const user = new User("shiva", "shivakumar.bfgi@gmail.com", "123")
console.log(user)
console.log(user.encryptpassword())


// behind the sence
// function User(userName, userMail, userPassword) {
//     this.userName = userName
//     this.userMail = userMail
//     this.userPassword = userPassword
// }

// User.prototype.encryptPassword = function () {
//     return `${this.userPassword}abc`
// }

// const user = new User("shiva", "shivakumar.bfgi@gmail.com", "123")
// console.log(user)
// console.log(user.encryptPassword())