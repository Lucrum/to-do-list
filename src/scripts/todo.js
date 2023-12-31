import { format, formatDistanceToNow, isAfter } from "date-fns"
import { openEditTodoForm, deleteTodo } from "."
import DeleteIcon from "../images/icons/delete.svg"
import EditIcon from "../images/icons/pencil.svg"
import { generateTodoExpansion } from "./expansion"

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

  get due() {
    if (this._dueDate) {
      return format(this._dueDate, 'EEEE, MM/dd/yyyy')
    }
    return ''
  }

  get dueDate() {
    return this._dueDate
  }

  get dueDateIso() {
    return format(this._dueDate, 'yyyy-MM-dd')
  }

  get dueDateString() {
    if (this._dueDate) {
      let res = formatDistanceToNow(this._dueDate)
      if (Date.now() > this._dueDate) {
        res += ' ago'
      } else {
        res = 'in ' + res
      }
      return res
    }
  }

  set dueDate(value) {
    // store date in all its iso glory
    if (value.match(/.*T.*/g)) {
      this._dueDate = new Date(value)
    } else if (value) {
      this._dueDate = new Date(value + 'T23:59:59.000')
    } else {
      this._dueDate = ''
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

export const expandedTodoProperties = ['due', 'description', 'priority', 'notes']

export function todoFromFormData(formData) {
  let todo = new Todo(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date-iso'),
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
    formData.get('due-date-iso'),
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
    div.dataset.priority = todo.priority
    if (todo.dueDate) {
      headerTitle.textContent += ' — ' + todo.dueDateString
      
    }

    // info
    let todoInfo = generateTodoExpansion(todo)

    // expansion
    headerTitle.addEventListener('click', expandInfo)

    // modify buttons
    let editButton = generateModifyButton(projectId, todo.id, 'Edit', EditIcon)
    let deleteButton = generateModifyButton(projectId, todo.id, 'Delete', DeleteIcon)
    headerWrapper.append(headerTitle, editButton, deleteButton)
    div.append(headerWrapper, todoInfo)
    res.push(div)
  }
  return res
}

function expandInfo(e) {
  const parent = e.target.parentNode.parentNode
  const todoInfo = parent.querySelector('div.todo-info')
  if (parent.dataset.expanded !== undefined) {
    parent.removeAttribute('data-expanded')
    todoInfo.classList.remove('shown')
  } else {
    parent.dataset.expanded = ''
    todoInfo.classList.add('shown')
  }
}

export function renderNoTodos() {
  let p = document.createElement('div')
  p.classList.add('empty-todo')
  p.textContent = 'Nothing to see here...'
  return p
}

function generateModifyButton(projectId, todoId, action, icon) {
  const b = document.createElement('img')
  b.dataset.action = action
  b.src = icon
  b.classList.add('small-icon')
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