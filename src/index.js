const tasksPanel = document.querySelector("#tasks-panel");
const newTaskButton = document.querySelector("#new-task-button");
const newColumnButton = document.querySelector("#new-column-button");

const handleDragStart = (event) => {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
};

const handleDragEnter = (event) => {
  event.preventDefault();
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDragEnd = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const element = document.getElementById(
    event.dataTransfer.getData("text/plain")
  );

  element.remove();
  event.target.closest(".tasks-list").append(element);
};

const createTask = (column) => {
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
  task.id = Math.random().toString();
  task.setAttribute("draggable", true);
  task.addEventListener("dragstart", handleDragStart);
  const title = document.createElement("h3");
  title.classList.add("text-xl", "font-semibold");
  title.textContent = "Task 1";
  const description = document.createElement("p");
  description.classList.add("text-gray-600");
  description.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.";

  task.append(title);
  task.append(description);

  column.prepend(task);
  return task;
};

const createTaskButton = (column) => {
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
  const handleAddTask = () => createTask(column);
  button.addEventListener("click", handleAddTask);
  button.textContent = "New Task";
  column.append(button);
};

const createColumn = () => {
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
  createTaskButton(column);

  column.querySelector("button").addEventListener("dragover", handleDragOver);
  column.querySelector("button").addEventListener("dragenter", handleDragEnter);

  column.addEventListener("dragover", handleDragOver, true);
  column.addEventListener("dragenter", handleDragEnter, true);
  column.addEventListener("drop", handleDragEnd, true);

  tasksPanel.append(column);

  return column;
};

newColumnButton.addEventListener("click", createColumn);
