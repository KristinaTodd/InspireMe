import TodoService from "../services/ToDoService.js";
import store from "../store.js";


//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  let count = store.State.todos.length.toString() || 0
  console.log(todos)

  let taskTemplate = ""

  todos.forEach(t => {
    taskTemplate += t.TaskTemplate
  })

  document.getElementById("task-list").innerHTML = taskTemplate
  document.getElementById("count").innerHTML = `<h5>Tasks : ${count}</h5>`

}

export default class TodoController {
  constructor() {
    console.log("todo controller is working")
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    debugger
    event.preventDefault();
    let formData = event.target;
    let todo = {
      description: formData.Description.value
    };
    TodoService.addTodo(todo);
    formData.reset()
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}