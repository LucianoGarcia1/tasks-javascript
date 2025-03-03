import createElementTag from "../js/module/utils.js";
import { saveTaskLocal, getTasksLocal } from "../js/module/storage.js";
import { createTaskElement } from "./module/dom.js";
import { darkMode } from "./module/dark-mode.js";
import { filterTasks } from "../js/module/filter.js";

const taskInput = document.querySelector(".c-input");
const btnAddTask = document.querySelector(".c-create");
const taskList = document.querySelector(".c-tasks");
const btnDarkMode = document.querySelector(".c-buttonDark");
const btnFilters = document.querySelectorAll(".c-buttonFilter button");

//DARK MODE
btnDarkMode.addEventListener("click", darkMode);

const createTask = (text, completed = false) => {
  const taskText = text || taskInput.value.trim();
  if (taskText === "") return;

  const taskElement = createTaskElement(taskText, completed, toggleTask);
  taskList.appendChild(taskElement);

  if (!text) {
    const tasks = getTasksLocal();
    tasks.push({ text: taskText, completed: false });
    saveTaskLocal(tasks);
  }

  taskInput.value = "";
};

const toggleTask = (taskText) => {
  let tasks = getTasksLocal();
  tasks = tasks.map((task) =>
    task.text === taskText ? { ...task, completed: !task.completed } : task
  );
  saveTaskLocal(tasks);
};

const loadTasks = () => {
  const tasks = getTasksLocal();
  tasks.forEach((task) => createTask(task.text, task.completed));
};

const handleCreateTask = (e) => {
  e.preventDefault();
  let erroMessage = document.querySelector(".erro-message");

  if (taskInput.value.trim() === "") {
    taskInput.classList.add("erro");
    if (!erroMessage) {
      erroMessage = createElementTag(
        "p",
        "Fill in the field before creating the task!",
        "erro-message"
      );
      taskInput.parentNode.appendChild(erroMessage);
    }
  } else {
    taskInput.classList.remove("erro");
    if (erroMessage) erroMessage.remove();

    createTask();
  }
};

taskInput.addEventListener("input", () => {
  taskInput.classList.remove("erro");
  let erroMessage = document.querySelector(".erro-message");
  if (erroMessage) erroMessage.remove();
});

btnAddTask.addEventListener("click", handleCreateTask);

loadTasks();

//FILTER
btnFilters.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btnFilters.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    filterTasks(i);
  });
});
