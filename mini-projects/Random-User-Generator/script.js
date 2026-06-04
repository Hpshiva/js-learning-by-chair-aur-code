const button = document.querySelector('#btn')

button.addEventListener("click", async () => {

    try {
        const res = await fetch('https://randomuser.me/api/')
        const data = await res.json()
        if (!res.ok) { return }


        document.querySelector('#img').src = data.results[0].picture.large
        document.querySelector("#name").textContent = data.results[0].name.first
        document.querySelector("#email").textContent = data.results[0].email
        document.querySelector("#country").textContent = data.results[0].location.country
        document.querySelector("#phone").textContent = data.results[0].phone

    } catch (error) {
        console.log(error)
    }

})