const heading = document.querySelector('#heading')

function login() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Logging In..."

        setTimeout(() => {
            const success = Math.random() > 0.5

            if (success) {
                heading.textContent = "Login Success"
                resolve()
            }
            else {
                reject("Login Failed")
            }
        }, 2000)
    })
}


function getProfile() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Fetching Profile..."

        setTimeout(() => {
            console.log("Profile Loaded");
            heading.textContent = "Profile Loaded"
            resolve()
        }, 3000)
    })
}

function getPost() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Featching Posts..."

        setTimeout(() => {

            heading.textContent = "Post Loaded"
            resolve()
        }, 2000)
    })
}
document.querySelector('#btn').addEventListener('click', () => {
    login()
        .then(getProfile)
        .then(getPost)
        .then(() => console.log("All done"))
        .catch((error) => heading.textContent = error)

})