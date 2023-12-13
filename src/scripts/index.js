import "../styles/window.css"
import "../styles/todo.css"
import "../styles/project.css"
import { Todo, todoFromFormData, generateTodos, editTodoFromFormData, renderNoTodos } from "./todo"
import { Project, projectFromForm, generateProjects, editProjectFromFormData } from "./project"
import { editTodoForm, newProjectForm, newTodoForm } from "./forms"
import { generateTodoExpansion } from "./expansion"
import { getData, saveData, storageAvailable } from "./storage"


let currentProjectId = 0
let nextProjectId = 0
let projects = []

const projectWrapper = document.querySelector('div#project-wrapper')
const todoWrapper = document.querySelector('div#todo-wrapper')
const createNewTodo = document.querySelector('button#new-todo')
const createNewProject = document.querySelector('button#new-project')

function setup() {
  // check if there are existing todos. If so, load them
  // otherwise, createSampleProjects

  if(storageAvailable('localStorage') && localStorage.getItem('projects')) {
    console.log('detected data, fetching...')
    let savedData = getData()
    projects = savedData.projects
    currentProjectId = savedData.currentProjectId
    nextProjectId = savedData.nextProjectId
  } else {
    console.log('generating sample projects')
    projects = createSampleProjects()
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
  changeProject(currentProjectId)
}

setup()

function createSampleProjects() {
  const generalTodos = [
    new Todo('Groceries', 'Buy eggs', '2023-12-05', 1, '', 0, 0),
    new Todo('School', 'Pass classes', '2023-12-12', 5, '', 1, 0),
    new Todo('Feed yourself', 'cook', '2023-12-15', 3, '', 2, 0),
    new Todo('Sleep', '', '2023-12-29', 4, '', 3, 0),
  ]
  
  const worldDominationTodos = [
    new Todo('Take over the world', '', '2023-12-08', 1, '', 1, 0),
    new Todo('Make sure Diego sleeps well', '', '2024-12-15', 1, '', 1, 1),
  ]
  
  let res = [
    new Project("Default", 0),
    new Project("World Domination", 1),
  ]

  for (const todo of generalTodos) {
    res[0].addTodo(todo)
  }
  for (const todo of worldDominationTodos) {
    res[1].addTodo(todo)
  }
  nextProjectId = 2
  return res
}

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

function removeProjectHighlights() {
  // remove all highlights
  const highlightedProjects = projectWrapper.querySelectorAll(`div.project.active`)
  for (const project of highlightedProjects) {
    project.classList.remove('active')
  }
}

function addProjectHighlight(id) {
  const projectDiv = projectWrapper.querySelector(`div.project[data-project-id='${id}']`)
  projectDiv.classList.add('active')
}

function save() {
  saveData(projects, currentProjectId, nextProjectId)
}

export function createTodo(form) {
  const formData = new FormData(form)
  const projectIndex = findIndex(projects, currentProjectId)
  projects[projectIndex].addTodo(todoFromFormData(formData))
  renderTodos()
  save()
}

export function createProject(form) {
  const formData = new FormData(form)
  projects.push(projectFromForm(nextProjectId, formData))
  renderProjects()
  changeProject(nextProjectId)
  nextProjectId++
  save()
}

export function changeProject(id) {
  removeProjectHighlights()
  if (id !== null) {
    currentProjectId = id
    createNewTodo.disabled = false
    addProjectHighlight(id)
    renderTodos()
  } else {
    todoWrapper.replaceChildren(renderNoTodos())
    createNewTodo.disabled = true
  }
}

export function deleteProject(id) {
  const index = findIndex(projects, id)
  projects.splice(index, 1)
  renderProjects()
  // select the first project, if there is one
  changeProject(projects[0] ? projects[0].id : null)
  save()
}

export function editProject(projectId, form) {
  const index = findIndex(projects, projectId)
  const formData = new FormData(form)
  editProjectFromFormData(projects[index], formData)
  renderProjects()
  save()
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
  save()
}

export function openEditTodoForm(projectId, todoId) {
  editTodoForm(findTodo(projectId, todoId))
}

export function editTodo(form) {
  const formData = new FormData(form)
  const projectId = formData.get('project-id')
  const todoId = formData.get('id')
  const target = findTodo(projectId, todoId)
  editTodoFromFormData(target, formData)
  renderTodos()
  save()
}