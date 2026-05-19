const title = document.querySelector('#title')
const desc = document.querySelector('#desc')
const hex = "0123456789abcdef";
let str = "#"
let cardCount = 0


document.querySelector('button').addEventListener('click', () => {
    if (title.value === "" || desc.value === "") return
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const div = document.createElement('div')
    const cards = document.querySelector('#cards')
    const removeCard = document.createElement('button')

    for (let i = 1; i <= 6; i++) {
        str = str + hex[Math.floor(Math.random() * 16)]
    }

    // backgroundColor
    div.style.backgroundColor = str
    str = "#"

    // adding div with class .card
    cards.append(div)
    div.classList.add('card')

    cardCount++
    document.querySelector('#count').innerHTML = `<p>Total Cards: ${cardCount}</p>`
    console.log(cardCount)

    // title
    h1.textContent = title.value
    div.append(h1)

    // Desc
    h3.textContent = desc.value
    div.append(h3)

    // remove card
    removeCard.textContent = "❌"
    div.append(removeCard)
    removeCard.addEventListener('click', () => {
        div.remove()
        cardCount--
        document.querySelector('#count').innerHTML = `<p>Total Cards: ${cardCount}</p>`
    })

    // reset
    title.value = ""
    desc.value = ""

})