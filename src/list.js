const List = (() => {
  let listId = 0;
  return class {

    constructor(name) {
      this.id = ++listId
      this.name = name;
      this.tasks = []
    }

    deleteTask() {
      
    }

    createTask(description, priority) {
      const newTask = new Task(description, priority)
      this.tasks.push(newTask)
    }


    render() {
      return `
        <div id="${this.id}">
    <h2>${this.name}
      <button data-title="${this.name}" class="delete-list">
        X
      </button>
    </h2>
    <ul id="${this.id} list"></ul
    </div>`
    }

    handleRenderTasks() {
      let listUl = document.getElementById(`${this.id} list`)
      listUl.innerHTML = ""

      listUl.innerHTML = this.tasks.map(task => {
        return task.render()
      }).join("");
    }


  }
})();
