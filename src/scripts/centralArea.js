function buildCenter(todos) {
  let div = document.createElement('div')

  for (const todo of todos) {
    let p = document.createElement('p')
    p.textContent = todo.title

    div.append(p)
  }

  return div
}

export default buildCenter