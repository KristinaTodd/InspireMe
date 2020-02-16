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
        let todoData = new ToDo(res.data.data);
        store.commit("todos", todoData)
        console.log(res.data.data);
      })
      .catch(error => {
        throw new Error(error)
      })

  }

  addTodo(e) {
    debugger
    todoApi
      .post("", store.State.todos)
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
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodo(id) {

    todoApi
      .delete(id)
      .then(() => {
        let filteredTodos = store.State.todos.filter(t => t._id != store.State.todos.id);
        store.commit("todos", filteredTodos)
      })

  }
}
const todoService = new TodoService();
export default todoService;