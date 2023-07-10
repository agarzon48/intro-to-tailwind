import AddTaskButton from "./AddTaskButton.js";
import {
  handleDragEnd,
  handleDragEnter,
  handleDragStart,
  handleDragOver,
} from "../utils/dragFunctions.js";

class TaskColumn {
  tasksPanel = null;

  constructor() {
    this.tasksPanel = document.querySelector("#tasks-panel");
  }

  handleDragStart = handleDragStart.bind(this);
  handleDragEnter = handleDragEnter.bind(this);
  handleDragOver = handleDragOver.bind(this);
  handleDragEnd = handleDragEnd.bind(this);

  render() {
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
    new AddTaskButton(column);

    column.addEventListener("dragover", this.handleDragOver.bind(this));
    column.addEventListener("dragenter", this.handleDragEnter.bind(this));
    column.addEventListener("drop", this.handleDragEnd.bind(this));

    this.tasksPanel.append(column);
  }
}

export default TaskColumn;
