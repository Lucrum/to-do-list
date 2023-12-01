import Todo from "./todo"

function todoFromForm(form) {
  const formData = new FormData(form)
  console.log(formData)
  let todo = new Todo(
    formData.get('title'),
    formData.get('description'),
    formData.get('due-date'),
    formData.get('priority'),
    formData.get('notes'),
  )

  return todo
}

export default todoFromForm