// Q1 
/*
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");
*/
//ans - 1   4   3   2


// Q2
/*
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");
*/
// ans - A  E   C   D   B


// Q3
/*
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise 1");
    })
    .then(() => {
        console.log("Promise 2");
    });

console.log("End");
*/
// ans - Start     End     Promise 1       Promise 2       Timer    


// 4
/*
setTimeout(() => {
    console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("Done");
*/
// ans - Done   Promise 1   Promise 2   Timeout 1   Timeout 2