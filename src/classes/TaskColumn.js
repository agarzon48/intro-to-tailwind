import AddTaskButton from "./AddTaskButton.js";
import {
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
  handleDragOver,
} from "../utils/dragFunctions.js";
import { createColumn } from "../utils/indexedDB.js";

class TaskColumn {
  tasksPanel = null;
  db = null;
  title = null;
  id = null;

  constructor(db, title, id) {
    this.tasksPanel = document.querySelector("#tasks-panel");
    this.db = db;
    this.title = title;
    this.id = id;
  }

  handleDragStart = handleDragStart.bind(this);
  handleDragEnter = handleDragEnter.bind(this);
  handleDragOver = handleDragOver.bind(this);
  handleDragEnd = handleDragEnd.bind(this);

  addTitle(column) {
    const title = document.createElement("h3");
    title.classList.add("text-xl", "font-semibold", "column-title");
    title.textContent = this.title;
    column.prepend(title);
  }

  render() {
    if (!this.title) {
      this.title = prompt("Title", "New Column");
    }

    const column = document.createElement("div");
    column.classList.add(
      "bg-slate-200",
      "rounded-sm",
      "px-4",
      "py-2",
      "w-72",
      "min-w-[288px]",
      "shadow-sm",
      "shadow-slate-400/50",
      "mx-2",
      "min-h-[1rem]",
      "tasks-list"
    );

    column.addEventListener("dragover", this.handleDragOver.bind(this));
    column.addEventListener("dragenter", this.handleDragEnter.bind(this));
    column.addEventListener("drop", this.handleDragEnd.bind(this));

    this.addTitle(column);

    if (!this.id) {
      createColumn(this.db, this.title).then((id) => {
        this.id = id;
        new AddTaskButton(column, this.db, this.id);
      });
    } else {
      new AddTaskButton(column, this.db, this.id);
    }

    this.tasksPanel.append(column);

    return column;
  }
}

export default TaskColumn;
