import Task from "./Task.js";

class AddTaskButton {
  column = null;
  db = null;
  colId = null;

  constructor(column, db, colId) {
    this.column = column;
    this.column.append(this.render());
    this.db = db;
    this.colId = colId;
  }

  handleAddTask() {
    new Task({ column: this.column, db: this.db, colId: this.colId });
  }

  render() {
    const button = document.createElement("button");
    button.classList.add(
      "bg-yellow-400",
      "px-2",
      "py-1",
      "rounded-md",
      "text-slate-800",
      "font-bold",
      "hover:text-yellow-400",
      "hover:bg-slate-800"
    );
    button.addEventListener("click", this.handleAddTask.bind(this));
    button.textContent = "New Task";

    return button;
  }
}

export default AddTaskButton;
