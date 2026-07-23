function debounce(fn, delay) {

    // Stores the ID returned by setTimeout().
    // Because it's outside the returned function, the closure keeps
    // the same timer variable alive across multiple function calls.
    let timer = 0;

    // This function is called every time the event occurs
    // (e.g., every key press in a search input).
    return (...args) => {

        // Cancel the previously scheduled execution (if any).
        // This ensures only the latest action is considered.
        clearTimeout(timer);

        // Start a new timer.
        // setTimeout() returns a timer ID, which is stored in 'timer'
        // so it can be cancelled if another event occurs before the delay ends.
        timer = setTimeout(() => {

            // After the user stops triggering the event for 'delay' milliseconds,
            // execute the original function with the latest arguments.
            fn(...args);

        }, delay);

    };
}

// Example function that should run only after the user stops typing.
const search = debounce((text) => {
    console.log("Searching:", text);
}, 500);

// User types quickly...
search("R");
search("Re");
search("Rea");
search("React");

// Output after 500ms of no typing:
// Searching: React