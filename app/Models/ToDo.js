import store from "../store.js"

export default class ToDo {
  constructor(data) {
    this._id = data._id;
    this.completed = data.completed;
    this.description = data.description;
  }

  get TaskTemplate() {
    return `
    <p> <input type="checkbox" id="completed"> ${this.description} <i class="far fa-minus-square text-danger" onclick="app.todoController.removeTodo('${this._id}')"></i><p>
    `
  }

  get CountTemplate() {
    return `
    <h5>Tasks Remaining: ${store.State.todos.length}</h5>
    `
  }
}