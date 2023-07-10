import { handleDragStart } from "../utils/dragFunctions";

class Task {
  id = Math.random().toString();
  column = null;
  title = "Task 1";
  description = "Lorem ipsum";

  constructor({ column, title = "New Task", description = "Lorem ipsum" }) {
    this.column = column;
    this.title = title;
    this.description = description;
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

    this.title = prompt("Title", this.title);
    this.addTitle(task);

    this.description = prompt("Description", this.description);
    this.addDescription(task);

    this.column.prepend(task);
    return task;
  }
}

export default Task;
