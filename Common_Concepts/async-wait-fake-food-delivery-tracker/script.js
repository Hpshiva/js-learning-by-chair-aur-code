const orderStatus = document.querySelector('.orderStatus')

function placeOrder() {
    return new Promise((resolve, reject) => {
        orderStatus.textContent = "Hold on placing you order ..."

        setTimeout(() => {
            const check = Math.random() > .5
            if (check) {
                console.log("placeOrder success");
                orderStatus.textContent = "Order has been Placed ..."
                resolve()
            }
            else {
                reject("Oops something when Wrong !!! give it a try Again")
            }
        }, 2000);
    })
}

function orderConfirmed() {
    return new Promise((resolve, reject) => {
        orderStatus.textContent = "Please Wait Your order is getting Confirmed by Resturant"

        setTimeout(() => {
            const check = Math.random() > .5
            if (check) {
                console.log("orderConfirmed success");
                orderStatus.textContent = "Order Confirmed now ..."
                resolve()
            }
            else {
                reject("Sorry we are not accepting orders now ")
            }
        }, 2000);
    })
}

function preparingFood() {
    return new Promise((resolve, reject) => {
        orderStatus.textContent = "your food is getting Preparing ..."

        setTimeout(() => {
            const check = Math.random() > .5
            if (check) {
                console.log("preparingFood success");
                orderStatus.textContent = "Food has been prepared !!! waiting for riding "
                resolve()
            }
            else {
                reject("oh oo few Items are Out of stock ....")
            }
        }, 2000);
    })
}


function outForDelivery() {
    return new Promise((resolve, reject) => {
        orderStatus.textContent = "Waiting to Assgin your order to Delivery Partner"

        setTimeout(() => {
            console.log("outForDelivery success");
            const check = Math.random() > .5
            if (check) {
                orderStatus.textContent = "Riding is on the way ..."
                resolve()
            }
            else {
                reject("No riding is accepting the Food")
            }
        }, 2000);
    })
}
function delivery() {
    return new Promise((resolve, reject) => {
        orderStatus.textContent = "Arried at Location"

        setTimeout(() => {
            const check = Math.random() > .5
            if (check) {
                console.log("Delivery success");
                orderStatus.textContent = "Order is Delivered !!!"
                resolve()
            }
            else {
                reject("Order Canceled by Rider Contact Customer Care ...")
            }
        }, 2000);
    })
}


document.querySelector('#btn').addEventListener("click", async () => {

    try {
        console.log("btn clicked")
        await placeOrder()
        await orderConfirmed()
        await preparingFood()
        await outForDelivery()
        await delivery()
    } catch (error) {
        orderStatus.textContent = error
    }
})