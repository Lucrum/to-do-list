function renderProjects(projects) {
  let res = []
  
  for (const project of projects) {
    let projectDiv = document.createElement('div')
    projectDiv.textContent = project.name

    res.push(projectDiv)
  }

  return res
}

export default renderProjects