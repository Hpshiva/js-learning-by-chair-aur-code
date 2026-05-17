// html
// <button id="btn">Place Order</button>
// <p id="status"></p>

const status = document.getElementById('status')
function loaddata(callback) {
    document.getElementById('btn').addEventListener('click', () => {
        status.innerText = "Placing order !!!"
        callback()
    })
}
function placeOrder(callback) {
    setTimeout(() => {
        status.innerText = "Order has be Placed !!!"
        callback()
    },
        2000)
}
function prepareFood(callback) {
    setTimeout(() => {
        status.innerText = "Preparing Food !!!"
        callback()
    },
        2000)
}

function outForDelivery(callback) {
    setTimeout(() => {
        status.innerText = "Out for Delivery !!!"
        callback()
    },
        2000)
}

function deliverOrder() {
    setTimeout(() => {
        status.innerText = "Delivered !!!"
    },
        2000)
}

loaddata(() => {
    placeOrder(() => {
        prepareFood(() => {
            outForDelivery(() => {
                deliverOrder()
            })
        })
    })
})