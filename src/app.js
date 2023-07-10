import TaskColumn from "./classes/TaskColumn.js";

const newColumnButton = document.querySelector("#new-column-button");

const init = () => {
  const addColumn = () => {
    const column = new TaskColumn();
    column.render();
  };

  newColumnButton.addEventListener("click", addColumn);
};

init();
