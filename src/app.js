import TaskColumn from "./classes/TaskColumn.js";
import Task from "./classes/Task.js";
import { openDB, readTasks, readColumns } from "./utils/indexedDB.js";

const newColumnButton = document.querySelector("#new-column-button");

const init = async () => {
  const db = await openDB({ version: 3 });

  const tasks = await readTasks(db.result);
  const columns = await readColumns(db.result);

  const addColumn = () => {
    const column = new TaskColumn(db.result);
    column.render();
  };

  for (const col of columns) {
    const column = new TaskColumn(db.result, col.title, col.id);
    const targetColumn = column.render();

    for (const task of tasks) {
      if (task.colId === col.id) {
        new Task({
          column: targetColumn,
          db: db.result,
          colId: col.id,
          title: task.title,
          description: task.description,
          id: task.id,
        });
      }
    }
  }

  newColumnButton.addEventListener("click", addColumn);
};

init();
