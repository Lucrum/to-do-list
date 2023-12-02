import "../styles/style.css"
import { Todo, todoFromForm, generateTodos } from "./todo"
import { Project, projectFromForm, generateProjects } from "./project"

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
  new Project("Default", 0),
  new Project("World Domination", 1),
]

let currentProjectId = 0
let highestProject = 2

const projectWrapper = document.querySelector('div#project-wrapper')
const todoWrapper = document.querySelector('div#todo-wrapper')
const createNewTodo = document.querySelector('button#new-todo')
const newTodoModal = document.querySelector('dialog#todo-modal')
const newTodoForm = document.querySelector('form#todo-form')

const createNewProject = document.querySelector('button#new-project')
const newProjectModal = document.querySelector('dialog#project-modal')
const newProjectForm = document.querySelector('form#project-form')

function setup() {
  createNewTodo.addEventListener('click', () => {
    newTodoModal.showModal()
  })

  createNewProject.addEventListener('click', () => {
    newProjectModal.showModal()
  })

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newTodoModal.close()
    projects[currentProjectId].todos.push(todoFromForm(e.target))
    renderTodos()
  })

  newProjectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newProjectModal.close()
    projects.push(projectFromForm(e.target, highestProject))
    highestProject++
    renderProjects()
    console.log(projects)
  })

  // generate sidebar
  renderProjects()
  renderTodos()
}

export function changeProject(id) {
  currentProjectId = id
  renderTodos()
}

export function deleteProject(id) {
  const index = projectIndex(id)
  projects.splice(index, 1)
  renderProjects()
  // select the first project, if there is one
  changeProject(projects[0] ? projects[0].id : null)
}

function renderProjects() {
  projectWrapper.replaceChildren(...generateProjects(projects))
}

function renderTodos() {
  let selectedProject = projects[projectIndex(currentProjectId)]
  todoWrapper.replaceChildren(...generateTodos(selectedProject.todos))
}

// iterates over projects until id is matched
// assumes project id exists
function projectIndex(id) {
  for (const index in projects) {
    if (projects[index].id === id) {
      return index
    }
  }
  return null
}

setup()