// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

function iffe(){
    console.log("iffe function expresstion which is Global variable pollution happens when too many variables are declared in the global scope, causing conflicts and overwriting. IIFE helps prevent this by creating a private scope.")
}
// iffe();

// to make it iffe 

// 1.basic way for iffe
(function iffe_with_basic_way(){
    console.log("basic way of iffe")
})();

// 2.iffe with arrow function 
(()=>{
    console.log("iffe with arrow function")
})();


// with parameter and arguments
((name)=>{
    console.log("iffe with arrow function" , `${name}`)
})("shiva");
 