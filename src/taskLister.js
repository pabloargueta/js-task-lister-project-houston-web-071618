const TaskLister = (() => {


  return class {

    constructor() {
      this.lists = []
    }

    handleListForm(event) {
      const listName = event.target.querySelector('#new-list-title').value

      this.createList(listName)
    }
    createList(name) {
      const newList = new List(name)
      this.lists.push(newList)
    }

    addTaskToList(event) {
      let selectedList = event.target.querySelector('#parent-list').value

      let list = this.lists.find(list => list.name === selectedList)

      let description = event.target.querySelector('#new-task-description').value
      let priority = event.target.querySelector('#new-task-priority').value

      list.createTask(description, priority)

      list.handleRenderTasks()
    }

    deleteTaskFromList(event) {
      let listId = event.target.parentElement.parentElement.id.split(" ")[0]

      let taskId = event.target.dataset.taskId.split(" ")[1]

      let list = this.lists.find(list => {
        return list.id === parseInt(listId)
      })

      list.tasks = list.tasks.filter(task => {
        return task.id !== parseInt(taskId)
      })


      list.handleRenderTasks()
    }

    deleteList(event) {
      this.lists = this.lists.filter(list => {
        return list.name != event.target.dataset.title
      })
    }


    renderLists() {
      return this.lists.map(list => {
        return list.render()
      })
    }

    renderTaskForm() {

      return `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      ${this.renderOptions()}
      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">
  </form>`
    }

    renderOptions() {
      return this.lists.map(list => {
        return `<option value="${list.name}">
          ${list.name}
          </option>`
      }).join("");
    }

    // your solution here

    render() {
      return (`<h1>Welcome to Flavortown</h1>`);
    }
  }


})();
