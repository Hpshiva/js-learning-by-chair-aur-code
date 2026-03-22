class User {
    constructor(Username) {
        this.Username = Username
    }
    logMe() {
        console.log(`User Name is => ${this.Username}`)
    }


    // Static methods belong to the class, not to its instances. 
    // They are used when functionality does not depend on object-specific data.


    // In JavaScript, static methods are defined using the static keyword inside a class. 
    // These methods are called on the class itself rather than on objects. 
    // We use them for utility functions, validations, or logic that is common and does not require instance data (this).
    static creatId() {
        return `123`
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
user2.logMe()

console.log(Teacher.creatId())