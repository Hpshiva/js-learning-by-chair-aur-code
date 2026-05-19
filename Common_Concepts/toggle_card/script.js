const card = document.querySelector('.card')

document.querySelector('button').addEventListener('click', () => {
    // card.classList.contains('active') ? card.classList.remove('active') : card.classList.add('active')

    card.classList.toggle('active')

})