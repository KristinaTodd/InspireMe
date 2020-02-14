
import TodoController from "./controllers/ToDoController.js";
import ImageController from "./Controllers/ImageController.js"
import QuoteController from "./Controllers/QuotesController.js"
import WeatherController from "./controllers/WeatherController.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.todoController = new TodoController();
    this.imageController = new ImageController();
    this.quoteController = new QuoteController();
    this.weatherController = new WeatherController();
  }
}

window["app"] = new App();