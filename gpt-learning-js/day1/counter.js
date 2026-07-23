// Let's start with Session 1.

// Your first task is:

// Build a private counter using closures without looking up a solution.


function outter() { //outter function
    let count = 0 // 
    return () => { // inner function which going to remember of the outer function 
        console.log(count)
        count++ // counter 
    }
}
let one = outter()
one()
one()
one()
