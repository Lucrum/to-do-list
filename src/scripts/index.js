import Todo from "./todo"
import "../styles/style.css"
import buildCenter from "./centralArea"
import createModal from "./creationModal"
import todoFromForm from "./creationModal"

let body = document.querySelector('body')

const todos = [
  {
    title: "Hello!"
  },
  {
    title: "Todo2"
  },
  {
    title: "Todo3"
  },
]

function buildWindow() {
  let contentWrapper = document.createElement('div')
  contentWrapper.classList.add('content-wrapper')
  let createNewTodo = document.createElement('button')
  const newTodoModal = document.querySelector('dialog#todo-modal')
  const newTodoForm = document.querySelector('form#todo-form')

  createNewTodo.textContent = "New Task"

  createNewTodo.addEventListener('click', () => {
    newTodoModal.showModal()
  })

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newTodoModal.close()
    console.log(todoFromForm(e.target))
  })

  contentWrapper.append(newTodoModal, createNewTodo)
  

  // generate sidebar
  // central area has todos

  contentWrapper.append(buildCenter(todos))

  return contentWrapper
}

body.append(buildWindow())