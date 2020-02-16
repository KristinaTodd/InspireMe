export default class ToDo {
  constructor(data) {
    this._id = data._id;
    this.completed = data.completed;
    this.description = data.description;
  }

  get TaskTemplate() {
    return `
    <p><input type="checkbox" id="completed">${this.description}<p>
    `
  }
}