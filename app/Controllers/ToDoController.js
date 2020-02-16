import TodoService from "../services/ToDoService.js";
import store from "../store.js";


//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  console.log(todos)

  let template = ""

  // todos.forEach(t => {
  //   template += t.TaskTemplate
  // })
  document.getElementById("task-list").innerHTML = template
}

export default class TodoController {
  constructor() {
    console.log("todo controller is working")
    //TODO Remember to register your subscribers
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();

  }

  addTodo(e) {
    debugger
    e.preventDefault();
    let formData = e.target;
    let todo = {
      description: formData.Desription.value
    };
    TodoService.addTodo(todo);
    formData.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}