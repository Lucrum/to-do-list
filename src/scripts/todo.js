class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
  }
}

export function todoFromForm(form) {
  const formData = new FormData(form)
  console.log(formData)
  let todo = new Todo(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date'),
    formData.get('priority'),
    formData.get('notes'),
  )

  return todo
}