export default class Value {
    constructor(data) {
        this.quote = data.body
        this.author = data.author
    }

    get Template() {
        return `
        <p>"${this.quote}"</p>
        <p>- ${this.author}</p>
        `
    }
}