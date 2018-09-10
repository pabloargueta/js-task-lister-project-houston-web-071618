document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const lists = document.querySelector('#lists')

  const app = new TaskLister();


  const listForm = document.querySelector("#create-list-form")
  listForm.addEventListener('submit', (event) => {
    event.preventDefault();
    app.handleListForm(event)
    listDiv.innerHTML = app.renderTaskForm()
    lists.innerHTML += app.lists[app.lists.length - 1].render()
    event.target.querySelector('#new-list-title').value = ""

    const taskForm = document.querySelector('#create-task-form')

    taskForm.addEventListener('submit', (event) => {
      event.preventDefault()
      app.addTaskToList(event)
    })

    lists.addEventListener('click', (event) => {
      if (event.target.dataset.title) {
        app.deleteList(event)
        lists.innerHTML = ''
        let asd = app.renderLists()
        asd.forEach(list => {
          lists.innerHTML += list
        })
      } else if (event.target.parentElement.parentElement.id) {
        app.deleteTaskFromList(event)
      }

    })



  })




});

