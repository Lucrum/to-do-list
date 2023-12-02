import { changeProject } from "."

export class Project {
  constructor(title, id) {
    this.title = title
    this.todos = []
    this.id = id
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(index) {
    this.todos.splice(index, 1)
  }
}

export function projectFromForm(form, id) {
  const formData = new FormData(form)
  let project = new Project(
    formData.get('title'),
    id,
  )

  return project
}

export function generateProjects(projects) {
  let res = []
  
  for (const project of projects) {
    let projectDiv = document.createElement('div')
    projectDiv.textContent = project.title

    projectDiv.classList.add('project')

    projectDiv.addEventListener('click', () => {
      changeProject(project.id)
    })

    res.push(projectDiv)
  }

  return res
}