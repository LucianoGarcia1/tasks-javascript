import createElementTag from "./utils.js";
import { deleteTask } from "./tasks.js";

export const createTaskElement = (taskText, completed, toggleTask) => {
  const label = createElementTag("label", "", "task-label");
  label.dataset.task = taskText;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", () => toggleTask(taskText));

  const span = createElementTag("span", taskText, "task-text");
  if (completed) span.classList.add("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");

  const iconDelete = document.createElement("ion-icon");
  iconDelete.setAttribute("name", "trash-outline");

  deleteBtn.appendChild(iconDelete);

  deleteBtn.addEventListener("click", () => deleteTask(taskText));

  label.appendChild(checkbox);
  label.appendChild(span);
  label.appendChild(deleteBtn);

  return label;
};
