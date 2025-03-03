import createElementTag from "./utils.js";

export const createTaskElement = (taskText, completed, toggleTask) => {
  const label = createElementTag("label", "", "task-label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  checkbox.addEventListener("change", () => toggleTask(taskText));

  const span = createElementTag("span", taskText, "task-text");
  if (completed) span.classList.add("completed");

  label.appendChild(checkbox);
  label.appendChild(span);

  return label;
};
