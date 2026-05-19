const input = document.querySelector('input')
const todos = document.querySelector('#todos')
document.querySelector('button').addEventListener('click', () => {
    if (input.value === "") return

    const todo = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')

    p.textContent = input.value
    button.textContent = "❌"

    todos.append(todo)
    todo.classList.add('todo')
    todo.append(p)
    todo.append(button)


    button.addEventListener('click', () => {
        todo.remove()
    })

    input.value = ""

})