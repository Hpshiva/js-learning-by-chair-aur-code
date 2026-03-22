function greet(name) {
    if (name === undefined) {
        console.log("Hello , guest!")
    }
    else {
        console.log("Hello " + name)
    }
}

// greet()
// greet("shiva")
// greet("rahul", "kumar")
// As expected, in the last call we passed two arguments, but the function only uses the first argument for its parameter. The extra arguments are ignored.


console.log(Math.PI)
console.log(Math.round(Math.PI)) // 3
console.log(Math.floor(Math.PI)) // 3
console.log(Math.ceil(Math.PI))  // 4