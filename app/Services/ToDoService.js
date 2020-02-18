import store from "../store.js";
import ToDo from "../Models/ToDo.js"

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/kristina/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
    console.log("todo service is working")
  }

  getTodos() {
    todoApi
      .get("")
      .then(res => {
        let todoData = res.data.data.map(t => new ToDo(t))
        store.commit("todos", todoData)
        console.log(res.data);
      })
      .catch(error => {
        throw new Error(error)
      })

  }

  addTodo(todo) {
    todoApi
      .post("", todo)
      .then(res => {
        let newTask = new ToDo(res.data.data)
        let myTasks = [...store.State.todos, newTask]
        store.commit("todos", myTasks)
      })
      .catch(error => {
        throw new Error(error)
      })

  }

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed = !todo.completed

    todoApi
      .put(todoId, todo)
      .then(res => {
        store.commit("todos", res)
      })
  }

  removeTodo(id) {
    todoApi
      .delete(id)
      .then(() => {
        let filteredTodos = store.State.todos.filter(t => t._id != id);
        store.commit("todos", filteredTodos)
      })
  }
}
const todoService = new TodoService();
export default todoService;