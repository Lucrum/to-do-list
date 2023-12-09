import { changeProject, deleteProject } from "."
import { editProjectForm } from "./forms"
import DeleteIcon from "../images/icons/delete.svg"
import EditIcon from "../images/icons/pencil.svg"

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
    let projectTitle = document.createElement('h3')
    projectTitle.textContent = project.title
    projectTitle.classList.add('title')
    
    const [editButton, deleteButton] = generateModifyButtons()

    projectDiv.classList.add('project')

    projectTitle.addEventListener('click', () => {
      changeProject(project.id, "change")
    })

    editButton.addEventListener('click', () => {
      editProjectForm(project)
    })

    deleteButton.addEventListener('click', () => {
      deleteProject(project.id)
    })

    projectDiv.append(projectTitle, editButton, deleteButton)

    res.push(projectDiv)
  }

  return res
}

function generateModifyButtons() {
  const editButton = document.createElement('img')
  const deleteButton = document.createElement('img')
  editButton.src = EditIcon
  editButton.classList.add('small-icon')
  deleteButton.src = DeleteIcon
  deleteButton.classList.add('small-icon')
  return [editButton, deleteButton]
}