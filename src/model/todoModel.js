export default class TodoModel{

    constructor(title) {
      this.id = Math.random() + Date.now();
      this.title = title;
      this.done = false;
      this.date = new Date();
    }
  
  }