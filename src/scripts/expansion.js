// expands a given todo div with the info
import { expandedTodoProperties } from "./todo"


export function generateTodoExpansion(todo) {
  const div = document.createElement('div')
  div.classList.add('todo-info')
  console.log('generating todo expansion for ', todo)
  for (const property of expandedTodoProperties) {
    console.log('expecting ' + property)
    const propertyDiv = document.createElement('div')
    const propertyHeading = document.createElement('h5')
    const propertyDetails = document.createElement('p')
    propertyHeading.textContent = capitalize(property)
    propertyDetails.textContent = todo[property].toString().length > 0 ? todo[property] : "None"

    propertyDiv.append(propertyHeading, propertyDetails)
    div.append(propertyDiv)
  }
  return div
}

function capitalize(str) {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}