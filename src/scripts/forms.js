import dashify from "dashify"
import { createTodoFromForm, createProjectFromForm, editProject } from "."

// ids are in the format [item, project id if applicable]
function openForm(formType, title, action, ids) {
  const modal = document.querySelector(`dialog#${formType}-modal`)
  const formDiv = modal.querySelector(`form#${formType}-form`)
  const formTitle = modal.querySelector(`h2#${formType}-form-type`)
  const formAction = modal.querySelector(`form#${formType}-form > input[name=action]`)
  formTitle.textContent = title
  formAction.value = action
  modal.showModal()

  const formItemId = modal.querySelector(`form#${formType}-form > input[name=id]`)
  formItemId.value = ids[0]

  if (formType === 'todo') {
    const formProjectId = modal.querySelector(`form#${formType}-form > input[name=project-id]`)
    formProjectId.value = ids[1]
  }
  
  return formDiv
}

export function openEditForm(formType, title, id, object, parameters) {
  const formDiv = openForm(formType, title, 'edit', [id])
  fillForm(formDiv, object, parameters)
}

export function newTodoForm(projectId, todoId) {
  console.log("opening with  ids " + [todoId, projectId])
  openForm('todo', 'New Todo', 'new', [todoId, projectId])
}

export function newProjectForm(projectId) {
  openForm('project', 'New Project', 'new', [projectId])
}

export function editTodoForm(projectId, todo) {
  const parameters = [
    'title', 'description', 'dueDate', 'priority', 'notes', 'id'
  ]
  const formDiv = openForm('todo', 'Edit Todo', 'edit', [todo.id, projectId])
  fillForm(formDiv, todo, parameters)
}

export function editProjectForm(project) {
  const parameters = [
    'title'
  ]

  const formDiv = openForm('project', 'Edit Project', 'edit', project.id)
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
  createTodoFromForm(e.target)
})

projectForm.addEventListener('submit', (e) => {
  e.preventDefault()
  projectModal.close()
  const action = e.target.action.value
  switch (action) {
    case 'new':
      createProjectFromForm(e.target)
      break
    case 'edit':
      const projectId = e.target.id.value
      editProject(projectId, e.target.title.value)
      break
  }
})