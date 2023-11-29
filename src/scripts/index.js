import Todo from "./todo"
import "../styles/style.css"

let body = document.querySelector('body')

function buildWindow() {
  let contentWrapper = document.createElement('div')
  contentWrapper.classList.add('content-wrapper')

  // generate sidebar
  // central area has todos

  return contentWrapper
}

body.append(buildWindow())