const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");
const addTask = document.getElementById("add-task");

// Load tasks from localStorage when the page loads
window.addEventListener("load", function() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function(taskText) {
    addTaskToContainer(taskText);
  });
});

addTask.addEventListener("click", function() {
  if (!inputTask.value) {
    alert("Please enter the task.");
    return;
  }

  addTaskToContainer(inputTask.value);
  saveTasksToLocalStorage();
  inputTask.value = "";
});

function addTaskToContainer(taskText) {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerHTML = taskText;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkButton.classList.add("checkbutton");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid  fa-trash-can"></i>`;
  deleteButton.classList.add("detelebutton");
  task.appendChild(deleteButton);

  taskContainer.appendChild(task);

  checkButton.addEventListener("click", function() {
    checkButton.parentElement.style.textDecoration = "line-through";
    saveTasksToLocalStorage();
  });

  deleteButton.addEventListener("click", function(e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
    saveTasksToLocalStorage();
  });
}

function saveTasksToLocalStorage() {
  let tasks = [];
  let taskElements = taskContainer.querySelectorAll(".task li");
  taskElements.forEach(function(taskElement) {
    tasks.push(taskElement.innerText);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
