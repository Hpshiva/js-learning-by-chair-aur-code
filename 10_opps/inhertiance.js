class User {
    constructor(Username) {
        this.Username = Username
    }
    logMe() {
        console.log(`User Name is => ${this.Username}`)
    }
}

class Teacher extends User {
    constructor(Username, UserMail, UserPassword) {

        super(Username)
        this.UserMail = UserMail
        this.UserPassword = UserPassword
    }
    addCourse() {
        console.log(`a new couse is added for user => ${this.Username}`)
    }
}
// EXTENDS CLASS TEACHER FROM USER STILL GETTING USERNAME BCZ OF INHERTINACE CONCEPT
const user1 = new Teacher("Shiva", "shiva@gmail.com", "123")
user1.addCourse()

// USER CLASS
const user2 = new User("kumar")
console.log(user2.logMe())