// expands a given todo div with the info
import { expandedTodoProperties } from "./todo"


export function generateTodoExpansion(todo) {
  const div = document.createElement('div')
  div.classList.add('todo-info')
  for (const property of expandedTodoProperties) {
    const propertyDiv = document.createElement('div')
    const propertyHeading = document.createElement('h5')
    const propertyDetails = document.createElement('p')
    propertyHeading.textContent = capitalize(property)
    propertyDetails.textContent = todo[property].toString().length > 0 ? todo[property] : "None"

    propertyDiv.append(propertyHeading, propertyDetails)
    div.append(propertyDiv)
  }
  div.hidden = true
  return div
}

function capitalize(str) {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}