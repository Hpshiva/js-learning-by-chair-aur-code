document.querySelector('#parent').addEventListener('click', () => {
    console.log("clicked parent")
})

document.querySelector('#child').addEventListener('click', (event) => {
    event.stopPropagation()
    console.log("clicked child")
})