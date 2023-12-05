import { expandTodo } from "."

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
    let p = document.createElement('h4')
    div.classList.add('todo')
    p.classList.add('title')
    p.textContent = todo.title
    p.dataset.projectId = projectId
    p.dataset.id = todo.id
    if (todo.dueDate) {
      p.textContent += " — " + todo.dueDate
    }

    // expansion
    p.addEventListener('click', (e) => {
      if (e.target.dataset.expanded !== undefined) {
        e.target.removeAttribute('data-expanded')
        e.target.parentNode.querySelector('div.todo-info').remove()
      } else {
        e.target.dataset.expanded = ""
        expandTodo(e.target)
      }
    })
    div.append(p)
    res.push(div)
  }

  return res
}