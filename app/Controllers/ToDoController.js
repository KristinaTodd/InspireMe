import TodoService from "../services/ToDoService.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  console.log(todos)
}

export default class TodoController {
  constructor() {
    console.log("todo controller is working")
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe("todos", _drawTodos)
  }

  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
    };
    TodoService.addTodo(todo);
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