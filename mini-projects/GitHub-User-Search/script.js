const input = document.querySelector('#searchBar')
const button = document.querySelector("#btn")




button.addEventListener("click", async () => {
    button.disabled = true
    button.textContent = "Loading..."
    button.style.backgroundColor = "gray"
    if (!input.value.trim()) {
        return
    }

    try {

        const res = await fetch(`https://api.github.com/users/${input.value.trim()}`)
        const data = await res.json()
        if (!res.ok) {
            console.log("user not found")
            button.disabled = false
            button.textContent = "Search"
            button.style.backgroundColor = "red"
            return
        }

        document.querySelector('#name').textContent = data.name
        document.querySelector('#Followers').textContent = data.followers
        document.querySelector('#Following').textContent = data.following
        document.querySelector('#PublicRepos').textContent = data.public_repos
        document.querySelector('#ProfileLink').textContent = data.html_url
        document.querySelector("#img").src = data.avatar_url

    } catch (error) {
        console.log(error)
    }
    finally {
        button.disabled = false
        button.textContent = "Search"
        button.style.backgroundColor = "pink"
        input.value = ""

    }


})
