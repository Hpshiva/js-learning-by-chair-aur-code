document.getElementById("btn").addEventListener("click", throttle(function () {
    console.log("btn clicked!");
}, 2000));

function throttle(fn, delay) {
    let last = 0;

    //  𝗛𝗼𝘄 𝗧𝗵𝗿𝗼𝘁𝘁𝗹𝗶𝗻𝗴 𝗪𝗼𝗿𝗸𝘀

    // 1. 𝗙𝗶𝗿𝘀𝘁 𝗧𝗿𝗶𝗴𝗴𝗲𝗿 => The code runs immediately.
    // (Because last = 0, so now - last >= delay is true)

    // 2. 𝗧𝗵𝗲 "𝗖𝗼𝗼𝗹𝗱𝗼𝘄𝗻" => A timer starts.
    // For the next 2 seconds, any more triggers are completely ignored.


    return function () {
        let now = Date.now();

        if (now - last >= delay) {
            last = now;

            // 3. 𝗥𝗲𝘀𝗲𝘁 => Once those 2 seconds are up,
            // the "valve" opens again, and the next trigger will run the code.

            fn()
        }
    };
}


// OUTPUT

// btn clicked!
// wait for 2 seconds
// btn clicked!
// wait for 2 seconds
// btn clicked!
// wait for 2 seconds
// btn clicked!
// wait for 2 seconds