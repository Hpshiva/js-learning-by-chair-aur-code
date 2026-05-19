{/* <body>
    <form action="" method="get" accept-charset="utf-8">
        <input type="text" name="search" id="search" value="" />         //𝗘𝘃𝗲𝗻𝘁 𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝘀 => You carry out an action, such as entering text into a search bar.

    </form>
</body> */}

// 𝗗𝗲𝗯𝗼𝘂𝗻𝗰𝗶𝗻𝗴
// It is a technique that tells a function to wait until you've stopped doing something before it actually runs.


function debounce(fn, delay) {
    let timmer;
    return function () {
        clearTimeout(timmer)        // 𝗥𝗲𝘀𝗲𝘁 => The old timer is destroyed, and a new one begins if you repeat the action before the timer expires.

        timmer = setTimeout(fn, delay)
    }
}


document
    .getElementById("#search")
    .addEventListener("input", debounce(function () {
        console.log("chacha")       // when user stops typing after 500 miniseconds our dobounce start working
        // 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝗼𝗻 => The function doesn't start until the timer reaches zero without any interruptions.

    }, 500))        // 𝗧𝗶𝗺𝗲𝗿 𝗦𝘁𝗮𝗿𝘁𝘀 => JavaScript initiates a countdown, such as 500 milliseconds.


