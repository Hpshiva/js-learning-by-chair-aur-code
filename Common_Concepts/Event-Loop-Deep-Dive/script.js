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


// Q5
/*
console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");
*/
// ans - A  E  D  B  C


// 6
/*
console.log("1");

Promise.resolve().then(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });
});

setTimeout(() => {
    console.log("4");
}, 0);

console.log("5");
*/
// ans - 1  5  2  3  4


// Q7
/*
setTimeout(() => {
    console.log("A");
}, 0);

console.log("B");

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

setTimeout(() => {
    console.log("E");
}, 0);
*/
// ans - B  D   C   A   E


// Q8
/*
console.log("Start");

setTimeout(() => {
    console.log("Timer 1");

    Promise.resolve().then(() => {
        console.log("Promise Inside Timer");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");
*/
// ans -    Start   End     Promise 1   Promise 1   Timer 1     Promise Inside Time


// Q9
/*
console.log("A");

Promise.resolve()
    .then(() => {
        console.log("B");
    })
    .then(() => {
        console.log("C");
    });

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");
*/
// ans - A  E   B   C   D


// Q10
/*
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");

    setTimeout(() => {
        console.log("Nested Timeout");
    }, 0);
});

console.log("End");
*/
// ans-     Start       End        Promise      Timeout     Nested Timeout 


// senior-level Event Loop questions