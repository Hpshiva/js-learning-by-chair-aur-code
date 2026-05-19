const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const childs = document.querySelectorAll('.child')


// console.log(childs)

// traverse elements
for (let elem of childs) {
    elem.addEventListener('click', () => {
        //elem.closest(".grandparent").style.backgroundColor = "pink"

    })
}
//  .parentElement = goes to parent of the element

//  .closest = goes to parent of the element with extra benefits like
// closest() doesn't care how many wrappers, buttons, or spans 
// Your code breaks because.parentElement 
// blindly moves up exactly one physical step, 
// regardless of what that element actually is.



// let traverse to childrens
parent.addEventListener('click', () => {

    // parent's first child Element 
    parent.firstElementChild.style.backgroundColor = "yellow"

    // parent's last child Element 
    parent.lastElementChild.style.backgroundColor = "green"

    //  all Childrens
    for (let elem of parent.children) {
        // elem.style.backgroundColor = "crimson"
        // console.log(elem)
    }

    //   next element Sibling
    let current = parent.firstElementChild
    current.nextElementSibling.style.backgroundColor = "orange"

    //  previous Element Sibling
    let previous = parent.lastElementChild
    previous.previousElementSibling.style.backgroundColor = 'cyan'
})
