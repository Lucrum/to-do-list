function renderTodos(todos) {
  let res = []

  for (const todo of todos) {
    let p = document.createElement('p')
    p.textContent = todo.title
    res.push(p)
  }

  console.log(res)
  return res
}

export default renderTodos