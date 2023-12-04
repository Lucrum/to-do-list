import "../styles/style.css"
import { Todo, todoFromForm, generateTodos } from "./todo"
import { Project, projectFromForm, generateProjects } from "./project"
import { openForm } from "./forms"

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

// edit project names, display todo info, edit todos

const projectWrapper = document.querySelector('div#project-wrapper')
const todoWrapper = document.querySelector('div#todo-wrapper')
const createNewTodo = document.querySelector('button#new-todo')
const createNewProject = document.querySelector('button#new-project')

function setup() {
  projects[0].todos.push(...generalTodos)
  projects[1].todos.push(...worldDominationTodos)
  createNewTodo.addEventListener('click', () => {
    openForm('todo', 'New Todo', 'new')
  })

  createNewProject.addEventListener('click', () => {
    openForm('project', 'New Project', 'new')
  })

  // generate sidebar
  renderProjects()
  renderTodos()
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
  const intId = parseInt(id)
  for (const index in projects) {
    if (projects[index].id === intId) {
      return index
    }
  }
  return null
}

export function createTodoFromForm(form) {
  projects[currentProjectId].todos.push(todoFromForm(form))
  renderTodos()
}

export function createProjectFromForm(form) {
  projects.push(projectFromForm(form, highestProject))
  highestProject++
  renderProjects()
}

export function changeProject(id) {
  if (id !== null) {
    currentProjectId = id
    renderTodos()
  }
}

export function deleteProject(id) {
  const index = projectIndex(id)
  console.log(projects)
  console.log("index of project id " + id + " is " + index)
  projects.splice(index, 1)
  renderProjects()
  // select the first project, if there is one
  changeProject(projects[0] ? projects[0].id : null)
}

export function editProjectTitle(id, newName) {
  const index = projectIndex(id)
  console.log(projects)
  console.log("index of project id " + id + " is " + index)
  projects[index].title = newName
  renderProjects()
}

setup()