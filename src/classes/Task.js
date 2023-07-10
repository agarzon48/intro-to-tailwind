import { handleDragStart } from "../utils/dragFunctions.js";
import { createTask } from "../utils/indexedDB.js";

class Task {
  id = null;
  column = null;
  title = null;
  description = null;
  db = null;
  colId = null;

  constructor({
    column,
    title = null,
    description = null,
    db = null,
    colId,
    id,
  }) {
    this.column = column;
    this.title = title;
    this.description = description;
    this.db = db;
    this.colId = colId;
    this.id = id;
    this.render({ title, description });
  }

  handleDragStart = handleDragStart.bind(this);

  addTitle(task) {
    const title = document.createElement("h3");
    title.classList.add("text-xl", "font-semibold");
    title.textContent = this.title;
    task.append(title);
  }

  addDescription(task) {
    const description = document.createElement("p");
    description.classList.add("text-gray-600");
    description.textContent = this.description;
    task.append(description);
  }

  render() {
    const task = document.createElement("div");
    task.classList.add(
      "bg-white",
      "w-64",
      "rounded-sm",
      "p-4",
      "shadow-slate-400/50",
      "my-2",
      "cursor-pointer"
    );
    task.setAttribute("draggable", true);
    task.addEventListener("dragstart", this.handleDragStart.bind(this));
    task.id = this.id;

    if (!this.title) {
      this.title = prompt("Title", "");
    }
    this.addTitle(task);

    if (!this.description) {
      this.description = prompt("Description", "");
    }
    this.addDescription(task);

    if (!this.id) {
      createTask(this.db, this.colId, this.title, this.description).then(
        (id) => {
          this.id = id;
        }
      );
    }

    this.column.prepend(task);

    const columnTitle = this.column.querySelector(".column-title");
    columnTitle.remove();
    this.column.prepend(columnTitle);

    return task;
  }
}

export default Task;
