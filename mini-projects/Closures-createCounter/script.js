function createCounter() {
    let counter = 0
    return function () {
        return counter++
    }
}

const a = createCounter()
const b = createCounter()

console.log(a())
console.log(a())
console.log(a())
console.log(b())

// Every call to createCounter() creates a new lexical environment containing 
// its own counter variable.The returned function closes over that environment, 
// so variables a and b maintain separate state and do not affect each other.