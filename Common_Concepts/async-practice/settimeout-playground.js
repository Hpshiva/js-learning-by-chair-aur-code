// PHASE 2 — FAKE LOADING SCREEN
const btn = document.querySelector('#btn')
const status = document.querySelector('#status')
btn.addEventListener('click', () => {
    status.textContent = "Loading Data ..."

    setTimeout(() => {
        status.textContent = "Data Loaded ..."
    }, 3000)
})



// PHASE 3 — FAKE LOGIN FLOW
const login = document.querySelector('#login')
const loginFlow = document.querySelector('#loginFlow')
login.addEventListener('click', () => {
    setTimeout(() => {
        loginFlow.textContent = "Logging in..."
    }, 2000)
    setTimeout(() => {
        loginFlow.textContent = "Getting Profile..."
    }, 4000)
    setTimeout(() => {
        loginFlow.textContent = "Getting Posts..."
    }, 6000)
    setTimeout(() => {
        loginFlow.textContent = "Finished"
    }, 8000)
})