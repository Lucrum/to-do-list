import { renderTodos } from "./todo"
import { changeProject } from "."

function renderProjects(projects, todoWrapper) {
  let res = []
  
  for (const project of projects) {
    let projectDiv = document.createElement('div')
    projectDiv.textContent = project.title

    projectDiv.classList.add('project')

    projectDiv.addEventListener('click', () => {
      changeProject(project.id)
      todoWrapper.replaceChildren(...renderTodos(project.todos))
    })

    res.push(projectDiv)
  }

  return res
}

export default renderProjects