document.querySelector('#parent').addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("clicked parent")
}, { capture: true }) // or only  true

document.querySelector('#child').addEventListener('click', () => {
    console.log("clicked child")
}, { capture: true }) // or only  true