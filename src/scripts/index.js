import "../styles/style.css"
import { Todo, todoFromForm, generateTodos, editTodoFromForm } from "./todo"
import { Project, projectFromForm, generateProjects } from "./project"
import { editTodoForm, newProjectForm, newTodoForm } from "./forms"
import { generateTodoExpansion } from "./expansion"

const generalTodos = [
  new Todo('Groceries', 'Buy eggs', '12-5-23', 1, ''),
  new Todo('School', 'Pass classes', '12-25-23', 1, ''),
  new Todo('Feed yourself', 'cook', '12-15-23', 1, ''),
  new Todo('Sleep', '', '12-29-23', 1, ''),
]

const worldDominationTodos = [
  new Todo('Take over the world', '', '12-8-23', 1, ''),
  new Todo('Make sure Diego sleeps well', '', '12-10-23', 1, ''),
]

const projects = [
  new Project("Default", 0),
  new Project("World Domination", 1),
]

let currentProjectId = 0
let nextProjectId = 2

// edit + delete todos

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
    const newId = projects[findIndex(projects, currentProjectId)].nextTodoId
    newTodoForm(currentProjectId, newId)
  })

  createNewProject.addEventListener('click', () => {
    newProjectForm(nextProjectId)
  })

  // generate sidebar
  renderProjects()
  renderTodos()
}

setup()

function renderProjects() {
  projectWrapper.replaceChildren(...generateProjects(projects))
}

function renderTodos() {
  let selectedProject = projects[findIndex(projects, currentProjectId)]
  todoWrapper.replaceChildren(...generateTodos(selectedProject.todos, selectedProject.id))
}

// iterates over arr until id is matched
// assumes id exists
function findIndex(arr, id) {
  const intId = parseInt(id)
  for (const index in arr) {
    if (arr[index].id === intId) {
      return index
    }
  }
  return null
}

function findTodo(projectId, todoId) {
  const targetProject = projects[findIndex(projects, projectId)]
  return targetProject.todos[findIndex(targetProject.todos, todoId)]
}

export function createTodo(form) {
  projects[currentProjectId].addTodo(todoFromForm(form))
  renderTodos()
}

export function createProject(form) {
  projects.push(projectFromForm(form, nextProjectId))
  nextProjectId++
  renderProjects()
}

export function changeProject(id) {
  if (id !== null) {
    currentProjectId = id
    renderTodos()
  }
}

export function deleteProject(id) {
  const index = findIndex(projects, id)
  console.log(projects)
  console.log("index of project id " + id + " is " + index)
  projects.splice(index, 1)
  renderProjects()
  // select the first project, if there is one
  changeProject(projects[0] ? projects[0].id : null)
}

export function editProject(id, newName) {
  const index = findIndex(projects, id)
  projects[index].title = newName
  renderProjects()
}

// calls the corresponding function after finding the particular todo
export function expandTodo(todoDiv) {
  const projectId = todoDiv.dataset.projectId
  const todoId = todoDiv.dataset.id
  const targetTodo = findTodo(projectId, todoId)
  todoDiv.append(generateTodoExpansion(targetTodo))
}

export function deleteTodo(projectId, todoId) {
  const targetProject = projects[findIndex(projects, projectId)]
  const todoIndex = findIndex(targetProject.todos, todoId)
  targetProject.todos.splice(todoIndex, 1)
  renderTodos()
}

export function openEditTodoForm(projectId, todoId) {
  editTodoForm(projectId, findTodo(projectId, todoId))
}

export function editTodo(form) {

  // need to extract project id and todo id from edit form
  console.log(form.projectId)
  
  const target = findTodo(projectId, todoId)
  Todo.editTodoFromForm(target, form)
  renderTodos()
}