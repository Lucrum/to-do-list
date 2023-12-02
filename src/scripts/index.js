import "../styles/style.css"
import renderTodos from "./centralArea"
import renderProjects from "./sidebar"
import { todoFromForm } from "./todo"

const todos = [
  {
    title: "Hello!",
  },
  {
    title: "Todo2",
  },
  {
    title: "Todo4",
  },
]

const projects = [
  {
    name: "Default",
  },
  {
    name: "World Domination",
  },
]

const todoWrapper = document.querySelector('div#todo-wrapper')
const createNewTodo = document.querySelector('button#new-todo')
const newTodoModal = document.querySelector('dialog#todo-modal')
const newTodoForm = document.querySelector('form#todo-form')
const sidebarWrapper = document.querySelector('div#sidebar-wrapper')

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

  sidebarWrapper.replaceChildren(...renderProjects(projects))

  todoWrapper.replaceChildren(...renderTodos(todos))
}

setup()