import QuoteService from "../services/QuoteService.js";
import store from "../store.js";

function _draw() {
  let quote = store.State.quote
  debugger

  document.getElementById("quote").innerHTML = quote.Template
}
//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    store.subscribe("quote", _draw)
    QuoteService.getQuote()
  }
}