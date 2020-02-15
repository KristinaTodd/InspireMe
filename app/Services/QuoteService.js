import store from "../store.js";
import Quote from "../Models/Quote.js"

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  constructor() {
    console.log("quoteService is working")
  }

  getQuote() {
    _quoteApi
      .get("")
      .then(res => {
        console.log(res.data.quote)
        let quoteData = new Quote(res.data.quote)
        store.commit("quote", quoteData)
      })
  }
}

const quoteService = new QuoteService();
export default quoteService;