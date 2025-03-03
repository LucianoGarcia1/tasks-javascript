import { getTasksLocal } from "./storage.js";
import { createTaskElement } from "./dom.js";

export const filterTasks = (filterType) => {
  const taskList = document.querySelector(".c-tasks");
  taskList.innerHTML = "";

  const tasks = getTasksLocal();
  let filteredTasks = tasks;

  if (filterType === 1) {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (filterType === 2) {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task.text, task.completed);
    taskList.appendChild(taskElement);
  });
};
