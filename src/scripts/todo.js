export class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title.trim()
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes

    if (this.description != undefined) {
      this.description = this.description.trim()
    }
    if (this.notes != undefined) {
      this.notes = this.notes.trim()
    }
    console.log(dueDate)

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
  )

  return todo
}

export function generateTodos(todos) {
  let res = []
  if (todos.length == 0) {
    let p = document.createElement('p')
    p.textContent = "Nothing to see here..."
    res.push(p)
  }

  for (const todo of todos) {
    let p = document.createElement('p')
    p.textContent = todo.title
    if (todo.dueDate) {
      p.textContent += " — " + todo.dueDate
    }
    res.push(p)
  }

  return res
}