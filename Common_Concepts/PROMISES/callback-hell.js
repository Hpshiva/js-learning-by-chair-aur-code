heading = document.querySelector('#heading')

function Logging(callback) {
    document.querySelector("#btn").addEventListener("click", () => {
        heading.textContent = "Logging In..."
        callback()
    })
}

function Login(callback) {
    setTimeout(() => {
        heading.textContent = "Login Success"
        callback()
    }, 2000)
}

function Fetching(callback) {
    setTimeout(() => {
        heading.textContent = "Fetching Profile..."
        callback()
    }, 2000)
}

function Profile(callback) {
    setTimeout(() => {
        heading.textContent = "Profile Loaded"
        callback()
    }, 2000)
}

function Fetching_posts(callback) {
    setTimeout(() => {
        heading.textContent = "Fetching Posts..."
        callback()
    }, 2000)
}


function Posts() {
    setTimeout(() => {
        heading.textContent = "Posts Loaded"

    }, 2000)

}

Logging(() => {
    Login(() => {
        Fetching(() => {
            Profile(() => {
                Fetching_posts(() => {
                    Posts()
                })
            })
        })
    })
})