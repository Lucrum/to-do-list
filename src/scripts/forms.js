import { createTodoFromForm, createProjectFromForm } from "."

export function openForm(formType, action) {
  const modal = document.querySelector(`dialog#${formType}-modal`)
  const formTitle = modal.querySelector(`h2#${formType}-form-type`)
  formTitle.textContent = action
  modal.showModal()
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
  createProjectFromForm(e.target)
})