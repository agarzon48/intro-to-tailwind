const tasksPanel = document.querySelector("#tasks-panel");
const newTaskButton = document.querySelector("#new-task-button");
const newColumnButton = document.querySelector("#new-column-button");

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
    "min-h-[1rem]"
  );
  createTaskButton(column);

  tasksPanel.append(column);

  return column;
};

newColumnButton.addEventListener("click", createColumn);
