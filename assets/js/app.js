const modalTitle = document.getElementById("modal-title");
const saveButton = document.getElementById("saveButton");
const editButton = document.getElementById("editButton");

const taskTitle = document.getElementById("task-title");
const feature = document.getElementById("Feature");
const bug = document.getElementById("Bug");
const taskPriority = document.getElementById("task_priority");
const taskStatus = document.getElementById("task_status");
const taskDate = document.getElementById("task-date");
const taskDescription = document.getElementById("task-description");

function addButton(){
    modalTitle.innerHTML = "Add task";
    saveButton.style.display = "block";
    editButton.style.display = "none";
}

function updateButton(){
    modalTitle.innerHTML = "Edit task";
    saveButton.style.display = "none";
    editButton.style.display = "block";
}

function initTaskForm(index) {
  taskTitle.value = tasks[index].title;

  if (feature.checked) {
    feature.checked = true;
    bug.checked = false;
  } else {
    feature.checked = false;
    bug.checked = true;
  }

  taskPriority.value = tasks[index].priority;
  taskStatus.value = tasks[index].status;
  taskDate.value = tasks[index].date;
  taskDescription.value = tasks[index].description;

  temp = index;
}