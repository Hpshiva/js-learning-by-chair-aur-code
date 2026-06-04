const input = document.querySelector('#searchBar')
const button = document.querySelector('#btn')


button.addEventListener('click', async () => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=471efde44dfd490cbe895600260406&q=${input.value}`)
        const data = await res.json()
        console.log(data.location.name)

        if (!res.ok) return

        document.querySelector('#place').textContent = data.location.name
        document.querySelector('#temp').textContent = data.current.temp_c
        document.querySelector('#humidity').textContent = data.current.humidity
        document.querySelector('#condition').textContent = data.current.condition.text
        document.querySelector('#wind').textContent = data.current.wind_kph
        document.body.style.backgroundImage = `url(${data.current.condition.icon})`
        // document.body.style.backgroundSize = "cover"

    } catch (error) {
        console.log(error)
    }
    finally {
        input.value = ""
    }

})