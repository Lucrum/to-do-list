import "../styles/style.css"
import renderProjects from "./sidebar"
import { todoFromForm, renderTodos, Todo } from "./todo"
import { Project } from "./project"

const generalTodos = [
  new Todo('Groceries', 'Buy eggs'),
  new Todo('School', 'Pass classes'),
  new Todo('Feed yourself', 'cook'),
  new Todo('Sleep'),
]

const worldDominationTodos = [
  new Todo('Take over the world'),
  new Todo('Make sure Diego sleeps well'),
]

const projects = [
  new Project("Default", generalTodos, 0),
  new Project("World Domination", worldDominationTodos, 1),
]

let currentProject = 0
let highestProject = 1;

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
    projects[currentProject].todos.push(todoFromForm(e.target))
    todoWrapper.replaceChildren(...renderTodos(projects[currentProject].todos))
  })

  // generate sidebar

  sidebarWrapper.replaceChildren(...renderProjects(projects, todoWrapper))

  todoWrapper.replaceChildren(...renderTodos(projects[currentProject].todos))
}

export function changeProject(id) {
  for (const index in projects) {
    if (projects[index].id === id) {
      currentProject = index
    }
  }
  console.log("Project id is now " + currentProject)
}

setup()