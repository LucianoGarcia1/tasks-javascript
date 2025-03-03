export const saveTaskLocal = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTasksLocal = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};
