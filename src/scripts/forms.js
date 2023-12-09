import dashify from "dashify"
import { createTodo, editTodo, createProject, editProject } from "."

// ids are in the format [item's, project's if applicable]
function openModal(modal) {
  modal.showModal()
}

function buildForm(form, title, submitText, action, id) {
  const formTitle = form.querySelector(`h2`)
  const formAction = form.querySelector(`input[name=action]`)
  const formSubmit = form.querySelector(`input[type=submit]`)
  const formItemId = form.querySelector(`input[name=id]`)
  formTitle.textContent = title
  formAction.value = action
  formSubmit.value = submitText
  formItemId.value = id
}

function insertProjectId(form, id) {
  const formProjectId = form.querySelector(`input[name=project-id]`)
  formProjectId.value = id
}

function getModalForm(formType) {
  const modal = document.querySelector(`dialog#${formType}-modal`)
  const form = modal.querySelector(`form`)
  return [modal, form]
}

export function newTodoForm(projectId, todoId) {
  const [modal, form] = getModalForm('todo')
  clearForm(form)
  buildForm(form, 'New Todo', 'Create Todo', 'new', todoId)
  // minimum priority
  form.querySelector(`input[name=priority]`).value = 1
  insertProjectId(form, projectId)
  openModal(modal)
}

export function newProjectForm(projectId) {
  const [modal, form] = getModalForm('project')
  clearForm(form)
  buildForm(form, 'New Project', 'Create Project', 'new', projectId)
  openModal(modal)
}

// must pass in entire todo for data filling
export function editTodoForm(todo) {
  const parameters = [
    'title', 'description', 'dueDate', 'priority', 'notes', 'id'
  ]
  const [modal, form] = getModalForm('todo')
  buildForm(form, 'Edit Todo', 'Edit', 'edit', todo.id)
  insertProjectId(form, todo.projectId)
  fillForm(form, todo, parameters)
  openModal(modal)
}

// must pass in entire project for data filling
export function editProjectForm(project) {
  const parameters = [
    'title'
  ]
  const [modal, form] = getModalForm('project')
  buildForm(form, 'Edit Project', 'Edit', 'edit', project.id)
  fillForm(form, project, parameters)
  openModal(modal)
}

// prefills a given form with the object, and given parameters
// assumes the form and object have all given parameters
function fillForm(formDiv, object, parameters) {
  for (const param of parameters) {
    const targetInput = formDiv.querySelector(`input[name=${dashify(param)}]`)
    targetInput.value = object[param]
  }
}

// empties a form's inputs
function clearForm(formDiv) {
  const inputs = formDiv.querySelectorAll('input')
  inputs.forEach((e) => {
    e.value = ''
  })
}

const todoModal = document.querySelector('dialog#todo-modal')
const todoForm = document.querySelector('form#todo-form')
const projectModal = document.querySelector('dialog#project-modal')
const projectForm = document.querySelector('form#project-form')

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  todoModal.close()
  const action = e.target.action.value
  switch (action) {
    case 'new':
      createTodo(e.target)
      break
    case 'edit':
      editTodo(e.target)
      break
  }
})

projectForm.addEventListener('submit', (e) => {
  e.preventDefault()
  projectModal.close()
  const action = e.target.action.value
  switch (action) {
    case 'new':
      createProject(e.target)
      break
    case 'edit':
      const projectId = e.target.id.value
      editProject(projectId, e.target)
      break
  }
})