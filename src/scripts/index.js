import Todo from "./todo"
import "../styles/style.css"
import renderTodos from "./centralArea"
import todoFromForm from "./creationModal"

const todos = [
  {
    title: "Hello!"
  },
  {
    title: "Todo2"
  },
  {
    title: "Todo4"
  },
]

const todoWrapper = document.querySelector('div#todo-wrapper')
const createNewTodo = document.querySelector('button#new-todo')
const newTodoModal = document.querySelector('dialog#todo-modal')
const newTodoForm = document.querySelector('form#todo-form')

function setup() {
  createNewTodo.addEventListener('click', () => {
    newTodoModal.showModal()
  })

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newTodoModal.close()
    todos.push(todoFromForm(e.target))
    todoWrapper.replaceChildren(...renderTodos(todos))
  })

  // generate sidebar

  todoWrapper.replaceChildren(...renderTodos(todos))
}

setup()