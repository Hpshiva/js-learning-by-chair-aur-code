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

// PHASE 4 — CALLBACK THINKING
let callbackStatus = document.querySelector('#callbackStatus')


function placeOrder(callback) {
    document.querySelector('#callbackBtn').addEventListener('click', () => {
        callbackStatus.textContent = "Order Placing ..."
        callback()
    }, 2000)

}
function paymentProcess(callback) {
    setTimeout(() => {
        callbackStatus.textContent = "Payment processing ..."
        callback()
    }, 2000)
}
function paymentSuccess(callback) {
    setTimeout(() => {
        callbackStatus.textContent = "Payment success ..."
        callback()
    }, 2000)
}
function orderDelivered(callback) {
    setTimeout(() => {

        callbackStatus.textContent = "Order delivered ..."
        callback()
    }, 2000)
}

placeOrder(() => {
    paymentProcess(() => {
        paymentProcess(() => {
            paymentSuccess(() => {
                orderDelivered()
            })
        })
    })
})


