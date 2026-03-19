let ramnum = parseInt(Math.random() * 100 + 1)
console.log(ramnum)
// console.log(typeof ramnum)

const userNumber = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessess = document.querySelector('.guesses')
let lastResult = document.querySelector('.lastResult')
const newStart = document.querySelector('.newStart')

const showans = document.querySelector('.showans')

let prev = []
let counter = 1

let playGame = true
newStart.style.display = "none"
showans.style.display = "none"
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const userinput = parseInt(userNumber.value)
        console.log(`User Input number ${userinput}`)

        validateGuess(userinput)
    })

}

function validateGuess(userinput) {

    if (userinput < 1) {
        alert('Please enter Number more then 1')
    }
    else if (userinput > 100) {
        alert('Please enter Number less then 100')
    } else if (isNaN(userinput)) {
        alert('Please enter only Number')
    }
    else {
        prev.push(userinput)
        console.log(`prev ${prev}`)

        if (userinput === ramnum) {
            displayMsg()
            displayGuess(userinput)
            endgame()
            showans.innerHTML = `We Got the Number and The Number is ${ramnum}`

        }

        else {
            displayGuess(userinput)
            guessingNumber(userinput)
        }
    }
}

function displayGuess() {
    userNumber.value = ""
    guessess.innerHTML = `${prev}`
    lastResult.innerHTML = `${10 - prev.length}`
    if (counter >= 10) {
        endgame()
    }
    counter++
}

function guessingNumber(userinput) {
    if (userinput < ramnum) {
        console.log("OOps Number is lower then ramdom number !!")
    }
    else if (userinput > ramnum) {
        console.log("OOps Number is Greater then ramdom number !!")
    }

}
function endgame() {
    playGame = false
    userNumber.disabled = true
    submit.disabled = true
    showans.style.display = "block"

    console.log("10 changes are OVER ")

    startNew()
}
function startNew() {

    newStart.style.display = "block"
    newStart.addEventListener("click", function () {
        ramnum = parseInt(Math.random() * 100 + 1)


        prev = []
        counter = 1
        playGame = true


        userNumber.disabled = false
        submit.disabled = false;



        guessess.innerHTML = ""
        lastResult.innerHTML = `${10 - prev.length}`


        newStart.style.display = "none"

        showans.style.display = "none"
    })


}

function displayMsg() {
    console.log(`Game Over !!! random guess is ${ramnum}`)
}