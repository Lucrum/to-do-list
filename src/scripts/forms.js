import { createTodoFromForm, createProjectFromForm, editProjectTitle } from "."

export function openForm(formType, title, action, id) {
  const modal = document.querySelector(`dialog#${formType}-modal`)
  const formTitle = modal.querySelector(`h2#${formType}-form-type`)
  const formAction = modal.querySelector(`form#${formType}-form > input[name=action]`)
  const formId = modal.querySelector(`form#${formType}-form > input[name=id]`)
  formTitle.textContent = title
  formAction.value = action

  // only editing requires an id
  formId.value = id

  modal.showModal()
}

// prefills a given form with all existing data
function fillForm() {

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
      editProjectTitle(projectId, e.target.title.value)
      break
  }
})