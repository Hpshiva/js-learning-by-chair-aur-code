// call (Invoke now)
// The call() method allows you to call a function with a specified this value 
// and arguments provided individually.The first argument to call() sets the this value for 
// the function being called, and the remaining arguments are passed to the function as arguments.
function getName(city) {
    console.log("call example - ", this.name, city)

}
const person = {
    name: "shiva"
}
getName.call(person, "Bangaluru")




//apply (Invoke now)
// The apply() method is similar to the call() method, 
// but it takes an array of arguments instead of individual arguments.
function second(city, country) {
    console.log("apply example - ", this.name, city, country)
}
const details = {
    name: "shiva"
}
second.apply(details, ["Bengaluru", "india"])




// bind (Invoke Later)
// The bind() method returns a new function with a specified this value and any arguments that are passed to it
// .The bind() method does not call the function immediately 
// but instead returns a new function that can be called later.
function third() {
    console.log(this.name)
}
const info = {
    name: "shiva"
}
const res = third.bind(info)
res()