import { getTasksLocal, saveTaskLocal } from "./storage.js";
import { filterTasks } from "./filter.js";

export const deleteTask = (taskText) => {
  let tasks = getTasksLocal();
  tasks = tasks.filter((task) => task.text !== taskText);
  saveTaskLocal(tasks);

  document.querySelector(`[data-task="${taskText}"]`)?.remove();

  const activeFilter = document.querySelector(".c-buttonFilter .active");
  const filterIndex = [
    ...document.querySelectorAll(".c-buttonFilter button"),
  ].indexOf(activeFilter);
  filterTasks(filterIndex);
};
