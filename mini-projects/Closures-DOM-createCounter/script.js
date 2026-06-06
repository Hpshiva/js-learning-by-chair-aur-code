let show = document.querySelector('#show')

function createCounter() {
    let counter = 0

    function incre() {
        return ++counter
    }
    function decre() {
        if (counter <= 0) return counter = 0
        else return --counter
    }
    function reset() {
        return counter = 0

    }


    return {
        incre, decre, reset
    }
}
const res = createCounter()

document.querySelector("#incre").addEventListener('click', () => {
    show.textContent = res.incre()
})

document.querySelector("#decre").addEventListener('click', () => {
    show.textContent = res.decre()
})

document.querySelector("#reset").addEventListener('click', () => {
    show.textContent = res.reset()
})
