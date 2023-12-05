// expands a given todo div with the info
const expandedTodoProperties = ['description', 'priority', 'notes']

export function generateTodoExpansion(todo) {
  const div = document.createElement('div')
  div.classList.add('todo-info')

  description.textContent = todo.description
  priority.textContent = todo.priority
  notes.textContent = todo.notes

  for (const property of expandedTodoProperties) {
    const propertyDiv = document.createElement('div')
    const propertyHeading = document.createElement('h5')
    const propertyDetails = document.createElement('p')
    propertyHeading.textContent = capitalize(property)
    propertyDetails.textContent = todo[property]

    propertyDiv.append(propertyHeading, propertyDetails)
    div.append(propertyDiv)
  }
  return div
}

function capitalize(str) {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}