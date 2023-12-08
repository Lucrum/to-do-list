import { changeProject, deleteProject } from "."
import { editProjectForm } from "./forms"

export class Project {
  constructor(title, id) {
    this.title = title.trim()
    this.todos = []
    this.id = parseInt(id)
    this.nextTodoId = 0

    // show modal for when this fails
    if (this.title.length < 1) {
      throw new Error('Name must not be empty')
    }
  }

  addTodo(todo) {
    todo.id = this.nextTodoId
    this.todos.push(todo)
    this.nextTodoId++
  }

  removeTodo(index) {
    this.todos.splice(index, 1)
  }

  edit(title) {
    this.title = title
  }
}

export function projectFromForm(id, formData) {
  let project = new Project(
    formData.get('title'),
    id,
  )
  return project
}

export function editProjectFromFormData(project, formData) {
  project.edit(
    formData.get('title')
  )
}

export function generateProjects(projects) {
  let res = []
  
  for (const project of projects) {
    let projectDiv = document.createElement('div')
    let deleteButton = document.createElement('button')
    let editButton = document.createElement('button')
    let projectName = document.createElement('h3')
    projectName.textContent = project.title
    
    editButton.textContent = 'E'
    deleteButton.textContent = 'X'

    projectDiv.classList.add('project')

    projectName.addEventListener('click', () => {
      changeProject(project.id, "change")
    })

    editButton.addEventListener('click', () => {
      editProjectForm(project)
    })

    deleteButton.addEventListener('click', () => {
      deleteProject(project.id)
    })

    projectDiv.append(projectName, editButton, deleteButton)

    res.push(projectDiv)
  }

  return res
}