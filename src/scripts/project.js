import { changeProject, deleteProject } from "."

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
    let deleteButton = document.createElement('button')
    let projectName = document.createElement('h3')
    projectName.textContent = project.title
    
    deleteButton.textContent = "X"

    projectDiv.classList.add('project')

    projectName.addEventListener('click', () => {
      changeProject(project.id, "change")
    })

    deleteButton.addEventListener('click', (e) => {
      deleteProject(project.id)
    })

    projectDiv.append(projectName, deleteButton)

    res.push(projectDiv)
  }

  return res
}