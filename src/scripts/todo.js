import { expandTodo, editTodo, deleteTodo } from "."

export class Todo {
  constructor(title, description, dueDate, priority, notes, id) {
    this.title = title.trim()
    this.description = description.trim()
    this.dueDate = dueDate
    this.priority = parseInt(priority)
    this.notes = notes.trim()
    this.id = parseInt(id)

    // modal for if this fails
    if (title.length < 1) {
      throw new Error('Name must not be empty')
    }
  }
}

export function todoFromForm(form) {
  const formData = new FormData(form)
  let todo = new Todo(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date'),
    formData.get('priority'),
    formData.get('notes'),
    formData.get('id'),
  )
  return todo
}

export function generateTodos(todos, projectId) {
  let res = []
  if (todos.length == 0) {
    let p = document.createElement('div')
    p.textContent = 'Nothing to see here...'
    res.push(p)
  }

  for (const todo of todos) {
    let div = document.createElement('div')
    let headerWrapper = document.createElement('div')
    let headerTitle = document.createElement('h4')
    headerWrapper.classList.add('todo-header')

    div.classList.add('todo')
    headerTitle.classList.add('title')
    headerTitle.textContent = todo.title
    div.dataset.projectId = projectId
    div.dataset.id = todo.id
    if (todo.dueDate) {
      headerTitle.textContent += " — " + todo.dueDate
    }

    // expansion
    headerTitle.addEventListener('click', (e) => {
      if (e.target.dataset.expanded !== undefined) {
        e.target.removeAttribute('data-expanded')
        e.target.parentNode.parentNode.querySelector('div.todo-info').remove()
      } else {
        e.target.dataset.expanded = ''
        expandTodo(e.target.parentNode.parentNode)
      }
    })

    // modify buttons
    let editButton = generateModifyButton(projectId, todo.id, 'Edit')
    let deleteButton = generateModifyButton(projectId, todo.id, 'Delete')
    headerWrapper.append(headerTitle, editButton, deleteButton)
    div.append(headerWrapper)
    res.push(div)
  }
  return res
}

function generateModifyButton(projectId, todoId, action) {
  const b = document.createElement('button')
  b.dataset.action = action
  b.textContent = action
  b.addEventListener('click', (e) => {
    switch(e.target.dataset.action) {
      case 'Edit':
        editTodo(projectId, todoId)
        break
      case 'Delete':
        deleteTodo(projectId, todoId)
        break
    }
  })
  return b
}