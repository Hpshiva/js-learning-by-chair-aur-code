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

// Q1
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

    setTimeout(() => {
        console.log("E");
    }, 0);
});

console.log("F");
*/
// ans - A  F   D   B   C   E


// Q2
/*
console.log("1");

Promise.resolve()
    .then(() => {
        console.log("2");
        return Promise.resolve();
    })
    .then(() => {
        console.log("3");
    });

Promise.resolve().then(() => {
    console.log("4");
});

console.log("5");
*/
// ans - 1  5   2   4   3


// Q3
/*
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");

    await Promise.resolve();

    console.log("C");
}

console.log("D");

test();

console.log("E");
*/
// ans- D   A   E   B   c


// Q4
/*
console.log("Start");

setTimeout(() => {
    console.log("Timer1");

    Promise.resolve().then(() => {
        console.log("Promise1");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("Promise2");

    setTimeout(() => {
        console.log("Timer2");
    }, 0);
});

console.log("End");
*/
// ans- Start   End     Promise2    Timer1    Promise1  Timer2


// Q5
/*
Promise.resolve().then(() => {
    console.log("1");

    Promise.resolve().then(() => {
        console.log("2");
    });

}).then(() => {
    console.log("3");
});

Promise.resolve().then(() => {
    console.log("4");
});
*/
// ans - 1  4   2   3


// Q6
/*
async function foo() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

foo();

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");
*/
// ans-     C   A   E   B   D


// Q7
/*
console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

    setTimeout(() => {
        console.log("4");
    }, 0);

}, 0);

Promise.resolve().then(() => {
    console.log("5");
});

console.log("6");
*/
// ANS - 1  6   5   2   3   4 


// Q8
/*
console.log("A");

Promise.resolve()
    .then(() => {
        console.log("B");

        return Promise.resolve();
    })
    .then(() => {
        console.log("C");
    });

Promise.resolve()
    .then(() => {
        console.log("D");
    })
    .then(() => {
        console.log("E");
    });

console.log("F");
*/
// ans- A   F   B   D   E   C



// Q9
/*
async function one() {
    console.log("1");

    await two();

    console.log("2");
}

async function two() {
    console.log("3");
}

console.log("4");

one();

console.log("5");
*/
// ANS- 4   1   5   2   3 ->X
// ANS- 4   1   3   5   2


//  Q10
/*
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");

    setTimeout(() => {
        console.log("D");
    }, 0);

    Promise.resolve().then(() => {
        console.log("E");
    });
});

Promise.resolve().then(() => {
    console.log("F");
});

console.log("G");
*/
// ans- A   G   C   F   E   B   D


//  Q11
/*
async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });

    console.log("4");
}

console.log("5");

test();

Promise.resolve().then(() => {
    console.log("6");
});

console.log("7");
*/
// ans- 5    1   7  2  4    6   3


// Q12
/*
Promise.resolve().then(() => {
    console.log("A");

    queueMicrotask(() => {
        console.log("B");
    });

    Promise.resolve().then(() => {
        console.log("C");
    });

    console.log("D");
});

console.log("E");
*/
// ANS- E   A   D   B   C
