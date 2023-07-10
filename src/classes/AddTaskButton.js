import Task from "./Task.js";

class AddTaskButton {
  column = null;

  constructor(column) {
    this.column = column;
    this.column.append(this.render());
  }

  handleAddTask() {
    new Task({ column: this.column });
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
