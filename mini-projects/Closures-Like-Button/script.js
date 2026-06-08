const showlike = document.querySelector('#likes')
function countLike() {


    let like = Number(localStorage.getItem("myLikeCount", 0)) || 0

    function plus() {
        like++
        localStorage.setItem("myLikeCount", like)
        return like
    }
    function getLikes() {
        return like
    }

    return {
        plus, getLikes
    }
}

const res = countLike()
showlike.textContent = res.getLikes()
document.querySelector('#likeBtn').addEventListener('click', () => {
    showlike.textContent = res.plus()

})