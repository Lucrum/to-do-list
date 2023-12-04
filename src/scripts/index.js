import "../styles/style.css"
import { Todo, todoFromForm, generateTodos } from "./todo"
import { Project, projectFromForm, generateProjects } from "./project"
import { openForm } from "./forms"
import { generateTodoExpansion } from "./expansion"

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
  for (const todo of generalTodos) {
    projects[0].addTodo(todo)
  }
  for (const todo of worldDominationTodos) {
    projects[1].addTodo(todo)
  }
  createNewTodo.addEventListener('click', () => {
    const newId = projects[indexFromId(projects, currentProjectId)].nextTodoId
    openForm('todo', 'New Todo', 'new', newId)
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
  let selectedProject = projects[indexFromId(projects, currentProjectId)]
  todoWrapper.replaceChildren(...generateTodos(selectedProject.todos, selectedProject.id))
}

// iterates over projects until id is matched
// assumes project id exists
function indexFromId(arr, id) {
  const intId = parseInt(id)
  for (const index in arr) {
    if (arr[index].id === intId) {
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
  const index = indexFromId(projects, id)
  console.log(projects)
  console.log("index of project id " + id + " is " + index)
  projects.splice(index, 1)
  renderProjects()
  // select the first project, if there is one
  changeProject(projects[0] ? projects[0].id : null)
}

export function editProjectTitle(id, newName) {
  const index = indexFromId(projects, id)
  projects[index].title = newName
  renderProjects()
}

// calls the corresponding function after finding the particular todo
export function expandTodo(todoDiv) {
  console.log(todoDiv + todoDiv.dataset.projectId + ' ' + todoDiv.dataset.id)
  const projectId = todoDiv.dataset.projectId
  const todoId = todoDiv.dataset.id
  const targetTodo = findTodo(projectId, todoId)
  console.log(targetTodo)
  todoDiv.insertAdjacentElement('afterend', generateTodoExpansion(todoDiv, targetTodo))
}

function findTodo(projectId, todoId) {
  const targetProject = projects[indexFromId(projects, projectId)]
  return targetProject.todos[indexFromId(targetProject.todos, todoId)]
}

setup()