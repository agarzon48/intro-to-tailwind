const onerror = (err, fn) => {
  console.log("Database error", err);
  if (fn) fn();
};

const onsuccess = (event, fn) => {
  if (fn) fn();
};

export function openDB({
  db = "IntroToTailwind",
  version = 1,
  errorFn = null,
  successFn = null,
}) {
  return new Promise((resolve, reject) => {
    const openedDB = indexedDB.open(db, version);

    openedDB.onerror = (err) => onerror(err, errorFn, reject);

    openedDB.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("tasks")) {
        const tasksStore = db.createObjectStore("tasks", {
          keyPath: "id",
          autoIncrement: true,
        });
        tasksStore.createIndex("title", "title", { unique: false });
        tasksStore.createIndex("description", "description", { unique: false });
      }
      if (!db.objectStoreNames.contains("columns")) {
        const columnsStore = db.createObjectStore("columns", {
          keyPath: "id",
          autoIncrement: true,
        });

        columnsStore.createIndex("title", "title", { unique: false });
      }
    };

    const handleSuccess = () => {
      resolve(openedDB);
      if (successFn) successFn();
    };

    openedDB.onsuccess = (event) => onsuccess(event, handleSuccess);
  });
}

export function readTasks(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["tasks"], "readonly");
    const tasksStore = transaction.objectStore("tasks");
    const tasks = tasksStore.getAll();
    tasks.onsuccess = () => resolve(tasks.result);
    tasks.onerror = () => reject(tasks.error);
  });
}

export function readColumns(db) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["columns"], "readonly");
    const columnsStore = transaction.objectStore("columns");
    const columns = columnsStore.getAll();
    columns.onsuccess = () => resolve(columns.result);
    columns.onerror = () => reject(columns.error);
  });
}

export function createColumn(db, title = "New Column") {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["columns"], "readwrite");
    const columnsStore = transaction.objectStore("columns");
    const column = columnsStore.add({ title });
    column.onsuccess = () => resolve(column.result);
    column.onerror = () => reject(column.error);
    return column;
  });
}

export function createTask(
  db,
  colId,
  title = "New Task",
  description = "Lorem ipsum"
) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["tasks"], "readwrite");
    const tasksStore = transaction.objectStore("tasks");
    const task = tasksStore.add({
      title,
      description,
      colId,
    });
    task.onsuccess = () => resolve(task.result);
    task.onerror = () => reject(task.error);
  });
}
