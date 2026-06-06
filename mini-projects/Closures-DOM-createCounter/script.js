let show = document.querySelector('#show')

function createCounter() {
    let counter = 0

    function incre() {
        document.querySelector("#incre").addEventListener('click', () => {

            return show.textContent = counter++
        })
    }
    function decre() {
        document.querySelector("#decre").addEventListener('click', () => {
            return show.textContent = counter--
        })
    }
    function reset() {
        document.querySelector("#reset").addEventListener('click', () => {
            counter = 0
            return show.textContent = counter
        })
    }
    function getShow() {
        return show.textContent = counter
    }

    return {
        incre, decre, reset, getShow
    }
}
const res = createCounter()
res.incre()
res.getShow()
res.decre()
res.reset()
