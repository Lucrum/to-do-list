// expands a given todo div with the info
export function generateTodoExpansion(todoDiv, todo) {
  const div = document.createElement('div')
  const description = document.createElement('p')
  const priority = document.createElement('p')
  const notes = document.createElement('p')

  description.textContent = todo.description
  priority.textContent = todo.priority
  notes.textContent = todo.notes

  div.append(description, priority, notes)
  return div
}
