import { expandTodo, openEditTodoForm, deleteTodo } from "."

export class Todo {
  constructor(title, description, dueDate, priority, notes, id, projectId) {
    this.title = title
    this.description = description.trim()
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes.trim()
    this.id = parseInt(id)
    this.projectId = parseInt(projectId)
  }

  edit(title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description.trim()
    this.dueDate = dueDate
    this.priority = parseInt(priority)
    this.notes = notes.trim()
  }

  get priority() {
    return this._priority
  }

  set priority(value) {
    const valueNum = parseInt(value)
    if (valueNum > 0 && valueNum <= 5) {
      this._priority = value
    } else {
      throw new Error("Todo priority cannot be below 1")
    }
  }

  get title() {
    return this._title
  }

  set title(value) {
    const valueTrimmed = value.trim()
    if (valueTrimmed.length < 1) {
      // perhaps a modal for if this fails
      throw new Error('Title must not be empty')
    } else {
      this._title = valueTrimmed
    }
  }
}

export const expandedTodoProperties = ['description', 'priority', 'notes']

export function todoFromFormData(formData) {
  let todo = new Todo(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date'),
    formData.get('priority'),
    formData.get('notes'),
    formData.get('id'),
    formData.get('project-id'),
  )
  return todo
}

export function editTodoFromFormData(todo, formData) {
  todo.edit(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date'),
    formData.get('priority'),
    formData.get('notes'),
  )
}

export function generateTodos(todos, projectId) {
  let res = []
  if (todos.length == 0) {
    res.push(renderNoTodos())
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
    headerWrapper.addEventListener('click', (e) => {
      console.log(e)
      const parent = e.target.parentNode.parentNode
      if (parent.dataset.expanded !== undefined) {
        parent.removeAttribute('data-expanded')
        parent.parentNode.querySelector('div.todo-info').remove()
      } else {
        parent.dataset.expanded = ''
        expandTodo(parent)
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

export function renderNoTodos() {
  let p = document.createElement('div')
  p.classList.add('empty-todo')
  p.textContent = 'Nothing to see here...'
  return p
}

function generateModifyButton(projectId, todoId, action) {
  const b = document.createElement('button')
  b.dataset.action = action
  b.textContent = action
  b.addEventListener('click', (e) => {
    switch(e.target.dataset.action) {
      case 'Edit':
        openEditTodoForm(projectId, todoId)
        break
      case 'Delete':
        deleteTodo(projectId, todoId)
        break
    }
  })
  return b
}