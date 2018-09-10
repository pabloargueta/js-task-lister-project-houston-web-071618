const Task = (() => {
  let taskId = 0;
  return class {
    constructor(description, priority) {
      this.id = ++taskId;
      this.description = description;
      this.priority = priority
    }

    render() {
      return `
      <li>
        Task: ${this.description}
        <button data-task-id="task ${this.id}" class="delete-task">
          X
        </button>
        <br>
          Priority: ${this.priority}
      </li>`
    }
  }
})();
