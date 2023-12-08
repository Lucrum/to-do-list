import dashify from "dashify"
import { createTodo, editTodo, createProject, editProject } from "."

// ids are in the format [item, project id if applicable]
function openForm(formType, title, submitText, action, ids) {
  const modal = document.querySelector(`dialog#${formType}-modal`)
  const form = modal.querySelector(`form#${formType}-form`)
  const modalTitle = modal.querySelector(`h2#${formType}-form-type`)
  const formAction = form.querySelector(`input[name=action]`)
  const formSubmit = form.querySelector(`input[type=submit]`)
  console.log(formSubmit)
  modalTitle.textContent = title
  formAction.value = action
  formSubmit.value = submitText
  modal.showModal()

  const formItemId = form.querySelector(`input[name=id]`)
  formItemId.value = ids[0]

  if (formType === 'todo') {
    const formProjectId = form.querySelector(`input[name=project-id]`)
    formProjectId.value = ids[1]
  }
  
  return form
}

export function newTodoForm(projectId, todoId) {
  console.log("opening with  ids " + [todoId, projectId])
  openForm('todo', 'New Todo', 'Create Todo', 'new', [todoId, projectId])
}

export function newProjectForm(projectId) {
  openForm('project', 'New Project', 'Create Project', 'new', [projectId])
}

export function editTodoForm(projectId, todo) {
  const parameters = [
    'title', 'description', 'dueDate', 'priority', 'notes', 'id'
  ]
  const formDiv = openForm('todo', 'Edit Todo', 'Edit', 'edit', [todo.id, projectId])
  fillForm(formDiv, todo, parameters)
}

export function editProjectForm(project) {
  const parameters = [
    'title'
  ]

  const formDiv = openForm('project', 'Edit Project', 'Edit', 'edit', [project.id])
  fillForm(formDiv, project, parameters)
}

// prefills a given form with the object, and given parameters
// assumes the form and object have all given parameters
function fillForm(formDiv, object, parameters) {
  for (const param of parameters) {
    const targetInput = formDiv.querySelector(`input[name=${dashify(param)}]`)
    targetInput.value = object[param]
  }
}

const todoModal = document.querySelector('dialog#todo-modal')
const todoForm = document.querySelector('form#todo-form')
const projectModal = document.querySelector('dialog#project-modal')
const projectForm = document.querySelector('form#project-form')

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  todoModal.close()
  console.log("HELLO THSI IS THE FORM \/")
  console.log(e.target)
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