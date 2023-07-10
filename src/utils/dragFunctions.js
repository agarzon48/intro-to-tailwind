export function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
}

export function handleDragEnter(event) {
  event.preventDefault();
}

export function handleDragOver(event) {
  event.preventDefault();
}

export function handleDragEnd(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  const element = document.getElementById(
    event.dataTransfer.getData("text/plain")
  );

  const taskList = event.target.closest(".tasks-list");

  element.remove();
  taskList.append(element);

  const button = taskList.querySelector("button");
  button.remove();
  taskList.append(button);
}
