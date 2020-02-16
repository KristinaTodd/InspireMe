export default class Value {
    constructor(data) {
        this.quote = data.body
        this.author = data.author
    }

    get Template() {
        return `
        <span>"${this.quote}"<br></span>
        <span>- ${this.author}</span>
        `
    }
}