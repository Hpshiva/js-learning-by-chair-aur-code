
let arr = ["shiva", "kumar"]
let myName = {
    name: "shiva",
    age: "25",
    gender: "male"


}

Object.prototype.shiva = function () {
    console.log("added in prototype")
}


Array.prototype.heyShiva = function () {
    console.log("yep with array added into prototype")
}
myName.shiva()

// ⚡ Key Difference FUNCTION AND PROTOTYPE
// Feature	        Function	            Prototype
// What it          is	block of code	    object that stores shared methods
// Purpose	        run logic	            share logic
// Memory	        new copy each time	    single shared copy
// Usage	        func()	                obj.method()




let userName = "shiva     "
console.log(userName.length)

// console.log(userName.trim().length)

String.prototype.truelength = function () {
    console.log(this)

    console.log(`The true length is => ${this.trim().length}`)
}
userName.truelength()
"shiva kumar.   ".truelength()