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
                reject("Login Failed !!!")
            }
        }, 2000)
    })
}


function getProfile() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Fetching Profile..."

        setTimeout(() => {
            const success = Math.random() > .4
            if (success) {
                console.log("Profile Loaded");
                heading.textContent = "Profile Loaded"
                resolve()
            }
            else {
                reject("Featching Profile Failed !!!")
            }
        }, 3000)
    })
}


function getPost() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Featching Posts..."

        setTimeout(() => {
            const success = Math.random() > .3
            if (success) {
                heading.textContent = "Post Loaded"
                resolve()
            }
            else reject("Featching Posts Failed !!!")
        }, 2000)
    })
}

function getComment() {
    return new Promise((resolve, reject) => {
        heading.textContent = "Featching Comments..."
        setTimeout(() => {
            const success = Math.random() > .2
            if (success) {
                heading.textContent = "Comment Loaded"
                resolve()
            }
            else reject("Featching Comment Failed !!!")
        }, 1000)
    })
}


// all above are same functions, just need to change here 
// add click Event 
document.querySelector('#btn').addEventListener('click', async () => {
    try {
        await login()
        await getProfile()
        await getPost()
        await getComment()

        console.log("All done")
    } catch (error) {
        heading.textContent = error
    }
})
